
import { 
  Player, 
  Match, 
  roster, 
  upcomingMatches, 
  helpCommands, 
  responses 
} from "@/data/furiaData";

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  component?: 'player-stats' | 'match-info' | 'match-list' | 'help-list';
  data?: any;
}

const generateId = () => Math.random().toString(36).substring(2, 11);

const getRandom = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const processMessage = (message: string): ChatMessage[] => {
  const userInput = message.toLowerCase().trim();
  const botResponses: ChatMessage[] = [];
  
  // Command handling
  if (userInput.startsWith("/")) {
    if (userInput === "/help") {
      return [
        {
          id: generateId(),
          text: "Aqui estão os comandos que você pode usar:",
          isUser: false,
          component: 'help-list',
          data: helpCommands
        }
      ];
    }
    
    else if (userInput === "/roster") {
      return [
        {
          id: generateId(),
          text: "O elenco atual da FURIA CS2 é:",
          isUser: false
        },
        ...roster.map(player => ({
          id: generateId(),
          text: "",
          isUser: false,
          component: 'player-stats' as const,
          data: player
        }))
      ];
    }
    
    else if (userInput === "/proximojogo") {
      const nextMatch = upcomingMatches[0];
      return [
        {
          id: generateId(),
          text: `O próximo jogo da FURIA será contra ${nextMatch.opponent} no dia ${nextMatch.date} às ${nextMatch.time}:`,
          isUser: false,
          component: 'match-info' as const,
          data: nextMatch
        }
      ];
    }
    
    else if (userInput === "/jogos") {
      return [
        {
          id: generateId(),
          text: "Aqui estão os próximos jogos da FURIA CS2:",
          isUser: false,
          component: 'match-list' as const,
          data: upcomingMatches
        }
      ];
    }
    
    else if (userInput.startsWith("/stats")) {
      const playerNickname = userInput.split(" ")[1]?.toLowerCase();
      
      if (!playerNickname) {
        return [{
          id: generateId(),
          text: "Por favor, especifique o nome do jogador. Exemplo: /stats kscerato",
          isUser: false
        }];
      }
      
      const player = roster.find(p => 
        p.nickname.toLowerCase() === playerNickname ||
        p.name.toLowerCase().includes(playerNickname)
      );
      
      if (player) {
        return [{
          id: generateId(),
          text: `Estatísticas de ${player.nickname}:`,
          isUser: false,
          component: 'player-stats' as const,
          data: player
        }];
      } else {
        return [{
          id: generateId(),
          text: "Jogador não encontrado no elenco atual da FURIA CS2.",
          isUser: false
        }];
      }
    }
    
    else {
      return [{
        id: generateId(),
        text: getRandom(responses.notFound).text,
        isUser: false
      }];
    }
  }
  
  // Natural language processing (basic pattern matching)
  
  // Roster questions
  if (
    userInput.includes("roster") ||
    userInput.includes("elenco") ||
    userInput.includes("jogadores") ||
    userInput.includes("time")
  ) {
    botResponses.push({
      id: generateId(),
      text: "O elenco atual da FURIA CS2 é:",
      isUser: false
    });
    
    roster.forEach(player => {
      botResponses.push({
        id: generateId(),
        text: "",
        isUser: false,
        component: 'player-stats' as const,
        data: player
      });
    });
    
    return botResponses;
  }
  
  // Next match questions
  if (
    userInput.includes("proximo jogo") ||
    userInput.includes("próximo jogo") ||
    userInput.includes("quando") && (userInput.includes("joga") || userInput.includes("partida"))
  ) {
    const nextMatch = upcomingMatches[0];
    return [{
      id: generateId(),
      text: `O próximo jogo da FURIA será contra ${nextMatch.opponent} no dia ${nextMatch.date} às ${nextMatch.time}:`,
      isUser: false,
      component: 'match-info' as const,
      data: nextMatch
    }];
  }
  
  // Upcoming matches
  if (
    userInput.includes("jogos") ||
    userInput.includes("partidas") ||
    userInput.includes("agenda") ||
    userInput.includes("calendario") ||
    userInput.includes("calendário")
  ) {
    botResponses.push({
      id: generateId(),
      text: "Aqui estão os próximos jogos da FURIA CS2:",
      isUser: false,
      component: 'match-list' as const,
      data: upcomingMatches
    });
    
    return botResponses;
  }
  
  // Player stats
  const playerMatches = roster.filter(player => 
    userInput.toLowerCase().includes(player.nickname.toLowerCase()) ||
    userInput.toLowerCase().includes(player.name.toLowerCase())
  );
  
  if (playerMatches.length > 0 && 
    (userInput.includes("stats") || 
     userInput.includes("estatística") || 
     userInput.includes("estatisticas") || 
     userInput.includes("kd") || 
     userInput.includes("clutch") || 
     userInput.includes("kills") || 
     userInput.includes("abate"))
  ) {
    const player = playerMatches[0];
    return [{
      id: generateId(),
      text: `Estatísticas de ${player.nickname}:`,
      isUser: false,
      component: 'player-stats' as const,
      data: player
    }];
  }
  
  // Greetings
  if (
    userInput.includes("oi") ||
    userInput.includes("olá") ||
    userInput.includes("ola") ||
    userInput.includes("e ai") ||
    userInput.includes("eae") ||
    userInput.includes("salve") ||
    userInput.includes("fala") ||
    userInput === "oi" ||
    userInput === "ola" ||
    userInput === "olá"
  ) {
    return [{
      id: generateId(),
      text: getRandom(responses.greeting).text,
      isUser: false
    }];
  }
  
  // Hype messages
  if (
    userInput.includes("vamos") ||
    userInput.includes("furia") ||
    userInput.includes("torcer") ||
    userInput.includes("ganhar") ||
    userInput.includes("dia de furia") ||
    userInput.includes("diadefuria") ||
    userInput.includes("hype")
  ) {
    return [{
      id: generateId(),
      text: getRandom(responses.hype).text,
      isUser: false
    }];
  }
  
  // Default response for unrecognized inputs
  return [{
    id: generateId(),
    text: getRandom(responses.notFound).text,
    isUser: false
  }];
};
