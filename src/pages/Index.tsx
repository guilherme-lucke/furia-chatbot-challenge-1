
import FuriaHeader from "@/components/FuriaHeader";
import FuriaChatbot from "@/components/FuriaChatbot";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-furia-black">
      <FuriaHeader />
      <div className="flex-1 overflow-hidden">
        <FuriaChatbot />
      </div>
    </div>
  );
};

export default Index;
