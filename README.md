# 🚀 Furia Tech Challenge #1: Esports Team Chatbot MVP

![FURIA Logo](/public/lovable-uploads/8daf5979-eafd-4127-a941-a36057f4ec81.png)

Uma experiência conversacional inicial para fãs do time de Counter-Strike 2 da FURIA.

---

## ✨ Introdução

Este projeto é a minha resposta ao Desafio Técnico #1 (Experiência Conversacional) para a vaga de Assistente de Engenharia de Software na Furia Tech. O objetivo foi desenvolver um MVP (Minimum Viable Product) de um chatbot focado nos fãs do time de CS2 da FURIA, buscando replicar a sensação de proximidade e o tom de voz característico da organização e da sua comunidade.

O MVP foi construído para demonstrar a capacidade de criar uma interface conversacional básica, integrar informações (mesmo que mockadas neste MVP) e, crucialmente, incorporar a cultura gamer brasileira e os insights de engajamento da comunidade FURIA levantados em minhas pesquisas.

---

## 📚 Base de Pesquisa e Insights

Para garantir que este MVP do chatbot fosse relevante e alinhado com a realidade da FURIA e do mercado de esports, realizei uma pesquisa aprofundada sobre a organização, o cenário competitivo de CS2 e as tendências tecnológicas e de engajamento em 2025.

Os documentos completos da pesquisa podem ser encontrados na pasta `research/` deste repositório:


*   [Relatório Detalhado: A FURIA Esports - Um Fenómeno Global de Performance, Lifestyle e Cultura Digital](research/Fúria%20eSports.md) 
*   [BRIEFING: TECNOLOGIA, MERCADO E ENGAGAMENTO NO ECOSSISTEMA DE ESPORTS (2025)](research/Tecnologia%20e%20Mercado%20de%20eSports%20em%202025.md)

*   [FURIA Esports no Counter-Strike 2: Análise Detalhada das Demandas dos Fãs e do Cenário Competitivo](research/FURIA%20Esports%20no%20Counter-Strike%202.md)

Os insights extraídos dessa pesquisa fundamentaram as decisões de design e as funcionalidades priorizadas para este MVP, conforme detalhado na seção "Insights Aplicados e Decisões de Design".

---

## 🎯 Objetivos do MVP

*   Criar uma interface de chat web funcional.
*   Implementar um bot que responda a um conjunto limitado de comandos e perguntas sobre o time de CS2 da FURIA.
*   Utilizar a linguagem, gírias e memes da comunidade FURIA/gamer.
*   Demonstrar a estrutura para fornecer informações relevantes (roster, jogos, stats básicos).
*   Apresentar o projeto em um repositório organizado e documentado.

---

## 🛠️ Stack Utilizada

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas, alinhadas com as sugestões e práticas do mercado:

*   **Frontend:** React
*   **Linguagem:** TypeScript
*   **Build Tool:** Vite
*   **Gerenciador de Pacotes:** Bun *(ou npm/yarn, se preferir)*
*   **Estilização:** Tailwind CSS
*   **Armazenamento de Dados (MVP):** Dados mockados em memória/hardcoded (`src/data/furiaData.ts`)
*   **Lógica Principal:** Desenvolvida em TypeScript (`src/services/chatbotService.ts`)

---

## 📋 Funcionalidades Implementadas (MVP Scope IN)

O chatbot MVP é capaz de realizar as seguintes interações:

1.  **Interface de Chat Web:** Um chat simples onde o usuário pode digitar mensagens e visualizar as respostas do bot.
2.  **Comando de Ajuda (`/help`):** Lista os comandos que o bot entende.
3.  **Informar Roster (`/roster`):** Apresenta o elenco mockado do time de CS2 da FURIA.
4.  **Informar Próximo Jogo (`/proximojogo`):** Fornece a data e o oponente mockados do próximo compromisso do time.
5.  **Consultar Estatísticas Básicas de Jogadores (`/stats [jogador]`):** Permite consultar estatísticas mockadas de jogadores chave (ex: `/stats kscerato`, `/stats fallen`), focando nas relevantes para os fãs (clutches, K/D, etc.). Inclui tratamento básico para jogadores não reconhecidos.
6.  **Linguagem e Tom FURIOSO:** As respostas do bot utilizam gírias gamer/brasileiras, referências à FURIA e emojis, alinhados com o tom descontraído e inclusivo da organização.
7.  **Tratamento de Entradas Não Reconhecidas:** Responde de forma amigável quando não entende o input do usuário.

---

## 🧠 Insights Aplicados e Decisões de Design

Este MVP não é apenas código, mas uma aplicação dos insights coletados sobre a FURIA e seus fãs. **(Estes insights foram extraídos da pesquisa documentada na pasta `research/`)**

*   **Cultura, Linguagem e Identidade:** A escolha da linguagem do bot (gírias, memes, #DIADEFURIA, emojis) foi a aplicação mais direta dos insights sobre a forte identidade cultural da comunidade FURIA e gamer. Isso visa criar uma experiência autêntica e de pertencimento para o fã. A linguagem inclusiva reflete o compromisso com a diversidade.
*   **Importância de Dados de Performance:** A implementação do comando `/stats` demonstra a compreensão de que os fãs de CS2 valorizam estatísticas detalhadas. Embora os dados sejam mockados, a estrutura está pronta para integrar APIs como HLTV no futuro, mostrando o potencial de evoluir para um hub de dados para o fã.
*   **Valorização da Interatividade e Canais Exclusivos:** A estrutura de comandos simula a interação vista em bots de plataformas como Telegram/Discord e canais VIP do WhatsApp. Cada comando respondido é uma micro-interação que atende à demanda por acesso fácil a informações relevantes.
*   **Uso de Ferramentas Modernas:** A escolha da stack (React, TS, Vite, Tailwind) reflete o alinhamento com práticas modernas de desenvolvimento web, valorizadas pela Furia Tech, garantindo um projeto com boa estrutura, performance básica e manutenibilidade.
*   **Foco no Usuário (O Fã):** Todas as funcionalidades foram pensadas do ponto de vista do fã: acesso rápido a informações essenciais sobre o time que ele ama, em uma linguagem com a qual ele se identifica.

---

## 🔧 Como Configurar e Rodar o Projeto

Siga os passos abaixo para colocar o chatbot em funcionamento na sua máquina:

1.  **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) (versão LTS recomendada) instalado. Você pode usar `npm`, `yarn` ou `bun` como gerenciador de pacotes. Se não tiver `bun`, pode instalá-lo globalmente (`npm install -g bun`) ou usar `npm`/`yarn` nos comandos abaixo.
2.  **Clone o Repositório:**
    ```bash
    git clone [Link para o Repositório GitHub]
    cd [Nome da Pasta do Repositório Clonado]
    ```
3.  **Instale as Dependências:**
    ```bash
    bun install # ou npm install ou yarn install
    ```
4.  **Rode a Aplicação:**
    ```bash
    bun run dev # ou npm run dev ou yarn dev
    ```
5.  **Acesse no Navegador:** Abra seu navegador e acesse o endereço que aparecerá no terminal (geralmente `http://localhost:5173/`).

---

## 🎬 Vídeo de Apresentação

Confira um vídeo demonstrando as funcionalidades do chatbot e explicando o projeto:

[Google Drive](https://drive.google.com/file/d/1Evm2hGCCNjP1kfjqQMh6qQIKwZhcr1ij/view?usp=sharing)

---

## 🌐 Deploy no Vercel

Este MVP está deployado e disponível online no Vercel:

[https://furia-chatbot-challenge-1.vercel.app/](https://furia-chatbot-challenge-1.vercel.app/)

---

## ⏭️ Considerações para o Futuro (Escopo Fora do MVP)

Este MVP é uma base. Para uma versão completa, as seguintes funcionalidades seriam exploradas:

*   Integração com APIs de dados em tempo real (HLTV, Strafe, etc.) para informações sempre atualizadas.
*   Implementação de lógica de processamento de linguagem natural (NLP) mais avançada para entender inputs menos estruturados.
*   Persistência do histórico de conversas.
*   Integração com o sistema "Know Your Fan" (Challenge #2) para personalizar a experiência conversacional com base nos dados do fã.
*   Expansão das funcionalidades de gamificação e recompensas.
*   Suporte a outras plataformas de chat (Telegram, WhatsApp).
*   Integração com conteúdos multimídia (vídeos, imagens) nas respostas.

---

## 🙋‍♂️ Autor

Guilherme Grilo Luche
[LinkedIn](https://www.linkedin.com/in/guilherme-lucke/)

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

#DIADEFURIA #GoFURIA