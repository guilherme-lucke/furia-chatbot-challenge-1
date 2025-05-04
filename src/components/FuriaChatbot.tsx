
import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import PlayerStats from "./PlayerStats";
import MatchInfo from "./MatchInfo";
import { processMessage, ChatMessage as ChatMessageType } from "@/services/chatbotService";
import { helpCommands, responses } from "@/data/furiaData";

const FuriaChatbot = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "welcome",
      text: "Fala meu mano! Bem-vindo ao chat da FURIA CS2! 🔥 Digite /help para ver os comandos disponíveis.",
      isUser: false,
    },
  ]);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);
    setMessageCount(prevCount => prevCount + 1);

    // Process the message and get bot response
    setTimeout(() => {
      const botResponses = processMessage(text);
      let updatedMessages = [...botResponses];

      // Check for interactive trigger (e.g., every 5 messages)
      if ((messageCount + 1) % 5 === 0) {
        const randomInteractiveResponse = Math.random() < 0.5 
          ? responses.hype[Math.floor(Math.random() * responses.hype.length)]
          : responses.memes[Math.floor(Math.random() * responses.memes.length)];
        
        updatedMessages.push({
          id: generateId(), // Assuming generateId is available or imported
          text: randomInteractiveResponse.text,
          isUser: false,
          // Add component if needed for special rendering
        });
      }
      
      setMessages((prev) => [...prev, ...updatedMessages]);
      setIsProcessing(false);
    }, 500); // Simulate processing delay
  };

   const generateId = () => Math.random().toString(36).substring(2, 11);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto bg-furia-black">
        <div className="container max-w-4xl mx-auto">
          {messages.map((msg) => {
            // Render different components based on message type
            if (msg.component === "player-stats") {
              return (
                <div key={msg.id} className="mb-4 animate-fade-in">
                  {msg.text && (
                    <ChatMessage
                      message={msg.text}
                      isUser={msg.isUser}
                    />
                  )}
                  <PlayerStats player={msg.data} />
                </div>
              );
            }
            
            if (msg.component === "match-info") {
              return (
                <div key={msg.id} className="mb-4 animate-fade-in">
                  {msg.text && (
                    <ChatMessage
                      message={msg.text}
                      isUser={msg.isUser}
                    />
                  )}
                  <MatchInfo match={msg.data} />
                </div>
              );
            }
            
            if (msg.component === "match-list") {
              return (
                <div key={msg.id} className="mb-4 animate-fade-in">
                  {msg.text && (
                    <ChatMessage
                      message={msg.text}
                      isUser={msg.isUser}
                    />
                  )}
                  <div className="space-y-2">
                    {Array.isArray(msg.data) && msg.data.map((match, i) => (
                      <MatchInfo key={i} match={match} />
                    ))}
                  </div>
                </div>
              );
            }
            
            if (msg.component === "help-list") {
              return (
                <div key={msg.id} className="mb-4 animate-fade-in">
                  <ChatMessage
                    message={msg.text}
                    isUser={msg.isUser}
                  />
                  <div className="bg-furia-gray rounded-lg p-4 my-2 text-furia-white border border-furia-gold/30">
                    {helpCommands.map((cmd, i) => (
                      <div key={i} className="mb-1">
                        <span className="text-furia-gold">{cmd.command}</span>
                        {cmd.description && (
                          <span className="text-sm"> - {cmd.description}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            
            // Default message
            return (
              <ChatMessage
                key={msg.id}
                message={msg.text}
                isUser={msg.isUser}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} isProcessing={isProcessing} />
    </div>
  );
};

export default FuriaChatbot;
