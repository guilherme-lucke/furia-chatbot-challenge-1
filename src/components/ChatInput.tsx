
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

const ChatInput = ({ onSendMessage, isProcessing }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isProcessing) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-t border-furia-gold/30 bg-furia-black"
    >
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem ou /comando..."
        className="flex-1 bg-furia-gray text-furia-white border-furia-gold/30 focus:border-furia-gold focus-visible:ring-0"
        disabled={isProcessing}
      />
      <Button
        type="submit"
        disabled={!message.trim() || isProcessing}
        className="bg-furia-gold hover:bg-furia-gold/80 text-furia-black font-semibold"
      >
        Enviar
      </Button>
    </form>
  );
};

export default ChatInput;
