
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  animateResponse?: boolean;
}

const ChatMessage = ({ message, isUser, animateResponse = true }: ChatMessageProps) => {
  const [visibleText, setVisibleText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isUser && animateResponse) {
      setIsTyping(true);
      setVisibleText("");
      
      const typingSpeed = 20; // milliseconds per character
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < message.length) {
          setVisibleText(message.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    } else {
      setVisibleText(message);
    }
  }, [message, isUser, animateResponse]);

  return (
    <div
      className={cn(
        "mb-4 max-w-[80%] animate-fade-in",
        isUser ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-4 py-2",
          isUser
            ? "bg-furia-gold text-furia-black"
            : "bg-furia-gray text-furia-white border border-furia-gold/30"
        )}
      >
        {isUser ? message : (
          <>
            {visibleText}
            {isTyping && (
              <span className="inline-block w-1 h-4 ml-1 bg-furia-white animate-blink"></span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
