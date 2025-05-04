
export interface Player {
  name: string;
  nickname: string;
  role?: string;
  stats: {
    kills?: number;
    deaths?: number;
    kd?: number;
    adr?: number;
    clutches?: number;
    headshots?: number;
  };
  image?: string;
}

export interface Match {
  opponent: string;
  date: string;
  time: string;
  tournament: string;
  format: string;
}

export interface ChatResponse {
  text: string;
  delay?: number;
}

export const roster: Player[] = [
  {
    name: "Andrei Piovezan",
    nickname: "arT",
    role: "IGL/Entry Fragger",
    stats: {
      kills: 4200,
      deaths: 4500,
      kd: 0.93,
      adr: 75.2,
      clutches: 85,
      headshots: 42.1
    }
  },
  {
    name: "Kaike Cerato",
    nickname: "KSCERATO",
    role: "Rifler",
    stats: {
      kills: 6800,
      deaths: 5100,
      kd: 1.33,
      adr: 86.3,
      clutches: 127,
      headshots: 51.8
    }
  },
  {
    name: "Gabriel Toledo",
    nickname: "FalleN",
    role: "AWPer",
    stats: {
      kills: 7500,
      deaths: 5800,
      kd: 1.29,
      adr: 72.8,
      clutches: 138,
      headshots: 39.4
    }
  },
  {
    name: "André Abreu",
    nickname: "drop",
    role: "Rifler/Support",
    stats: {
      kills: 3800,
      deaths: 3400,
      kd: 1.12,
      adr: 74.5,
      clutches: 62,
      headshots: 47.6
    }
  },
  {
    name: "Vinicius Figueiredo",
    nickname: "VINI",
    role: "Lurker/Support",
    stats: {
      kills: 4100,
      deaths: 3900,
      kd: 1.05,
      adr: 70.2,
      clutches: 74,
      headshots: 44.3
    }
  },
  {
    name: "Nicholas Nogueira",
    nickname: "guerri",
    role: "Coach",
    stats: {}
  }
];

export const upcomingMatches: Match[] = [
  {
    opponent: "NAVI",
    date: "15/05/2025",
    time: "14:00",
    tournament: "ESL Pro League Season 20",
    format: "Bo3"
  },
  {
    opponent: "G2 Esports",
    date: "18/05/2025",
    time: "11:30",
    tournament: "ESL Pro League Season 20",
    format: "Bo3"
  },
  {
    opponent: "Team Liquid",
    date: "22/05/2025",
    time: "16:00",
    tournament: "BLAST Premier Spring Finals",
    format: "Bo3"
  }
];

export const helpCommands = [
  { command: "/help", description: "Mostra a lista de comandos disponíveis" },
  { command: "/roster", description: "Mostra o elenco atual da FURIA CS2" },
  { command: "/proximojogo", description: "Informa quando será o próximo jogo" },
  { command: "/jogos", description: "Lista os próximos jogos da FURIA CS2" },
  { command: "/stats [jogador]", description: "Mostra estatísticas de um jogador específico" },
  { command: "Exemplo: /stats kscerato", description: "Mostra as estatísticas do KSCERATO" }
];

export const responses: Record<string, ChatResponse[]> = {
  greeting: [
    { text: "Fala meu mano! Bem-vindo ao chat da FURIA CS2! 🔥" },
    { text: "Salve salve! Pronto pra mais um #DIADEFURIA? 🐯🔥" },
    { text: "Opa, eae! Chegou no chat da melhor equipe do Brasil! 🇧🇷🔥" }
  ],
  notFound: [
    { text: "Hmm, não entendi. Tenta digitar /help pra ver o que eu posso fazer! 🤔" },
    { text: "Foi mal, não peguei essa. Digita /help pra ver o que posso te ajudar! 🙏" },
    { text: "GG, não consegui entender. Manda um /help pra ver os comandos! ⌨️" }
  ],
  memes: [
    { text: "CADÊ O CLUTCH?! VAMO ART!!!" },
    { text: "É O MAIOR IGL DO BRASIL, O ARTISTA!!!" },
    { text: "FALOU QUE KSCERATO NÃO É TOP 10 DO MUNDO??? TA MALUCO????" },
    { text: "Hoje é dia de botar gringo pra mamar! VAMOS FURIA!" },
    { text: "CARAAAAAALHOOOOOOO QUE JOGADA DO FALLEN!!!!!" }
  ],
  hype: [
    { text: "#DIADEFURIA VAI COMEÇAR! 🔥🔥🔥" },
    { text: "VAMOS FURIA!!! 🐯🔥" },
    { text: "RUMO AO MAJOR! HOJE É DIA! 🏆" }
  ]
};
