
import { useState, useEffect } from "react";

const FuriaHeader = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  
  return (
    <div className="bg-furia-black py-3 px-4 flex justify-between items-center border-b border-furia-gold">
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/8daf5979-eafd-4127-a941-a36057f4ec81.png" 
          alt="FURIA Panther" 
          className="h-8 w-auto"
        />
        <div className="text-furia-white font-bold text-xl">FURIA CS2</div>
      </div>
      
      <div className="text-furia-gold font-semibold">
        {formatTime(time)} <span className="text-sm ml-2">#DIADEFURIA</span>
      </div>
    </div>
  );
};

export default FuriaHeader;
