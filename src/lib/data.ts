export const profile = {
  name: "Felipe Santana",
  role: "Desenvolvedor Full-Stack & Software Engineer",
  eyebrow: "Analista Desenvolvedor PL · Capgemini",
  summary:
    "Desde o início da minha carreira, atuo na construção, modernização e automação de sistemas legados, com experiência em projetos críticos no setor financeiro e bancário. Trabalho na evolução de soluções, integração entre sistemas e modernização de arquiteturas, buscando mais eficiência, escalabilidade e confiabilidade para o negócio.",
  stack: ["Java", "C#", "Node.js", "React", "Angular", "AWS", "Azure"],
  email: "felipe.santana2001@hotmail.com",
  phone: "(11) 93143-8599",
  phoneHref: "+5511931438599",
  location: "São Paulo, Brasil",
  github: "https://github.com/felipe-Santana1",
  githubLabel: "github.com/felipe-Santana1",
  linkedin: "https://www.linkedin.com/in/felipesantana-097659184",
};

export const stats = [
  { value: "8+", label: "Anos de Experiência" },
  { value: "12+", label: "Projetos de Experiência" },
  { value: "25+", label: "Tecnologias Dominadas" },
];

export const about = [
  "Profissional de tecnologia atuando desde 2018, com experiência em instituições como C6 Bank, SEFAZ, Capgemini, Itaú e Indra. Ao longo da minha trajetória, venho atuando na construção, evolução e modernização de sistemas e soluções, especialmente em ambientes críticos do setor financeiro e bancário.",
  "Meu foco está na construção, evolução e modernização de soluções, participando desde a concepção de novos projetos até a transformação de aplicações existentes. Atuo com automação de processos, integração de sistemas e evolução arquitetural, sempre considerando escalabilidade, conformidade e as necessidades do negócio para aplicar soluções modernas, eficientes e sustentáveis.",
  "Sou movido pela curiosidade e pelo aprendizado constante. Gosto de entender como as coisas funcionam e contribuir com ideias e soluções, mesmo quando estão além do meu escopo direto, sempre buscando o melhor resultado para o time e para o projeto.",
  "Valorizo muito o trabalho em equipe e acredito que colaboração e confiança são fundamentais para enfrentar desafios e alcançar bons resultados. Fora do ambiente profissional, essa mesma característica se reflete nos esportes radicais que pratico, como paraquedismo, trilhas, rafting, motocross e motovelocidade, atividades que exigem planejamento, disciplina, tomada de decisão e, principalmente, trabalho em equipe.",
];

export type SkillCategory = {
  title: string;
  icon: "code" | "database" | "layers" | "cloud" | "grid";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens & Frameworks",
    icon: "code",
    skills: ["Java", "C#", "PHP", "ASP.NET MVC", "Node.js", "Angular", "React", "Web API"],
  },
  {
    title: "Banco de Dados",
    icon: "database",
    skills: ["SQL Server", "MySQL", "Oracle", "Entity Framework", "Dapper"],
  },
  {
    title: "Mensageria & Resiliência",
    icon: "layers",
    skills: ["RabbitMQ", "Kafka", "Redis", "Circuit Breaker", "Rate Limiting"],
  },
  {
    title: "Cloud & Ferramentas",
    icon: "cloud",
    skills: ["AWS", "Azure DevOps", "GitHub", "Trello", "TFS", "Figma", "Confluence"],
  },
  {
    title: "Arquitetura & Padrões",
    icon: "grid",
    skills: ["Clean Architecture", "DDD", "MVC", "Client-Servidor"],
  },
];

export type RoleStep = {
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export type CompanyTimeline = {
  company: string;
  companyBadge: string;
  companyColor: string;
  overallPeriod: string;
  align: "center" | "left" | "right";
  roles: RoleStep[];
};

export const experience: CompanyTimeline[] = [
  {
    company: "Capgemini",
    companyBadge: "CG",
    companyColor: "#3fd0ff",
    overallPeriod: "2024 — Presente",
    align: "center",
    roles: [
      {
        role: "Analista Desenvolvedor Pleno · SEFAZ",
        period: "2024 — Julho 2025",
        description:
          "Construção de um novo sistema para substituir a solução legada do Plano Plurianual (PPA v2), cobrindo desenvolvimento, testes, arquitetura e modelagem de banco de dados, com conformidade a diretrizes de auditoria e integrações com a PRODESP.",
        tags: [".NET Core", "Clean Architecture", "Auditoria"],
      },
      {
        role: "Análise de Requisitos & Auditoria · VWFS",
        period: "Agosto 2025 — Dezembro 2025",
        description:
          "Levantamento e análise de requisitos e auditoria de sistemas no cliente VWFS (Volkswagen), mapeando pontos de melhoria e conformidade para a fase seguinte de modernização.",
        tags: ["Análise de Requisitos", "Auditoria", "VWFS"],
      },
      {
        role: "Modernização de Sistemas Auditados · VWFS",
        period: "2026 — Presente",
        description:
          "Atuação na modernização e reescrita dos sistemas previamente auditados no cliente VWFS, aplicando as recomendações levantadas na fase de auditoria.",
        tags: ["Modernização", "Refatoração", "VWFS"],
      },
    ],
  },
  {
    company: "Indra Company",
    companyBadge: "IN",
    companyColor: "#8b7bf7",
    overallPeriod: "2021 — 2024",
    align: "left",
    roles: [
      {
        role: "Analista / Desenvolvedor Jr · Automação",
        period: "2021 — 2022",
        description:
          "Desenvolvimento voltado à automação de processos manuais e à transformação de aplicações legadas em sistemas mais modernos e eficientes, incluindo integrações com crawlers financeiros e criação de novas aplicações (Ajuizamento, Watch List, ROC).",
        tags: ["Automação", "Integrações", "Legado"],
      },
      {
        role: "Analista · Cyber Security",
        period: "2022 — 2024",
        description:
          "Transição para a equipe de cyber security, atuando no reforço de segurança das aplicações e processos da empresa.",
        tags: ["Cyber Security"],
      },
    ],
  },
  {
    company: "CALIA Y2 Propaganda & Marketing",
    companyBadge: "CY",
    companyColor: "#fbbf24",
    overallPeriod: "2020 — 2022",
    align: "right",
    roles: [
      {
        role: "Estágio em TI",
        period: "2020 — 2021",
        description: "Atuação na equipe de suporte ao usuário e redes da empresa.",
        tags: ["Suporte", "Estágio"],
      },
      {
        role: "Auxiliar de TI",
        period: "2021 — 2022",
        description:
          "Suporte ao usuário, manutenção de microcomputadores e impressoras e gerenciamento da rede interna e conexão com a filial de Brasília.",
        tags: ["Suporte", "Manutenção"],
      },
      {
        role: "Assistente de TI",
        period: "2021 — 2022",
        description:
          "Suporte a auxiliares, manutenção de microcomputadores e impressoras e gerenciamento da rede interna, incluindo a conexão com a filial de Brasília.",
        tags: ["Suporte", "Redes"],
      },
    ],
  },
  {
    company: "C6 Bank",
    companyBadge: "C6",
    companyColor: "#2dd4bf",
    overallPeriod: "2018",
    align: "left",
    roles: [
      {
        role: "Auxiliar de Desenvolvimento",
        period: "2018",
        description:
          "Atuação na equipe de front-end do banco: colaboração no desenvolvimento da landing page, criação do código dos primeiros e-mails marketing e colaboração na biblioteca de componentes geral do banco.",
        tags: ["Front-end", "Email Marketing", "Componentes"],
      },
    ],
  },
];

export type ProjectTile =
  | { kind: "gradient"; from: string; to: string }
  | { kind: "locked" }
  | { kind: "image"; src: string };

export type ProjectCategory = "confidencial" | "freelancer" | "estudo" | "pessoal";

export type Project = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  confidential: boolean;
  category: ProjectCategory;
  tile: ProjectTile;
  demoUrl?: string;
  repoUrl?: string;
};

export const projectFilters: { value: ProjectCategory | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "confidencial", label: "Confidencial" },
  { value: "estudo", label: "Estudos" },
  { value: "freelancer", label: "Consultoria & Freelancer" },
];

export const projects: Project[] = [
  {
    title: "Modernização do PPA",
    context: "Capgemini · SEFAZ",
    description:
      "Substituição da solução legada do Plano Plurianual: arquitetura, modelagem de banco e conformidade de auditoria desde o zero.",
    tags: [".NET Core", "Clean Architecture"],
    confidential: true,
    category: "confidencial",
    tile: { kind: "locked" },
  },
  {
    title: "Modernização VWFS",
    context: "Capgemini · Volkswagen Financial Services",
    description:
      "Modernização e reconstrução de sistemas legados do Banco Volkswagen Financial Services, migrando aplicações de VB para .NET + Angular.",
    tags: [".NET Core", "Angular", "Modernização"],
    confidential: true,
    category: "confidencial",
    tile: { kind: "locked" },
  },
  {
    title: "Auditoria GRC",
    context: "Capgemini · Volkswagen Financial Services",
    description:
      "Auditoria interna em todas as aplicações do cliente, com análise de código, criação de documentações e validações, estruturadas no Confluence.",
    tags: ["Auditoria", "GRC", "Confluence"],
    confidential: true,
    category: "confidencial",
    tile: { kind: "locked" },
  },
  {
    title: "Automações Financeiras",
    context: "Indra Company",
    description:
      "Integrações com crawlers financeiros e criação de aplicações internas (Ajuizamento, Watch List, ROC) para reduzir trabalho manual.",
    tags: ["Integrações", "Legado"],
    confidential: true,
    category: "confidencial",
    tile: { kind: "locked" },
  },
  {
    title: "Automação de Suporte",
    context: "CALIA Y2 Propaganda & Marketing",
    description:
      "POC de automação de suporte desenvolvida internamente; posteriormente estudada e integrada a um software de gestão de prateleira de mercado.",
    tags: ["Automação", "POC"],
    confidential: true,
    category: "confidencial",
    tile: { kind: "locked" },
  },
  {
    title: "Front-end C6 Bank",
    context: "C6 Bank",
    description:
      "Landing page, primeiros e-mails marketing e biblioteca de componentes reutilizáveis do banco.",
    tags: ["Front-end", "Componentes"],
    confidential: true,
    category: "confidencial",
    tile: { kind: "locked" },
  },
  {
    title: "Instituto Barros",
    context: "Consultoria & Freelancer",
    description:
      "CRM completo desenvolvido do zero para clínica, migrando de um software de prateleira para uma solução própria: cadastro de clientes e funcionários, agendamento de consultas, módulos financeiros para controle de 5 unidades e integrações com e-mail.",
    tags: ["CRM", "Freelancer", "Full-Stack"],
    confidential: false,
    category: "freelancer",
    tile: { kind: "image", src: "/InstitutoBarros.png" },
    demoUrl: "https://sistema-instituto.vercel.app/signin",
  },
  {
    title: "Zenit",
    context: "Consultoria & Freelancer",
    description:
      "Software de gestão para clínicas odontológicas, aplicado em múltiplas unidades para controle de pessoal, organização, insumos e módulos financeiros.",
    tags: ["Gestão Clínica", "Freelancer", "Full-Stack"],
    confidential: false,
    category: "freelancer",
    tile: { kind: "image", src: "/Zenit.jpeg" },
  },
  {
    title: "Portfólio Pessoal",
    context: "Projeto próprio",
    description: "Este portfólio, projetado e construído para apresentar minha trajetória e minhas habilidades.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    confidential: false,
    category: "pessoal",
    tile: { kind: "image", src: "/PortifolioPessoal.png" },
    demoUrl: "https://portfolio-felipe-santana.vercel.app/",
    repoUrl: "https://github.com/felipe-Santana1/Portifolio_Web_Atualizado_2026",
  },
  {
    title: "Oficina na Nuvem",
    context: "Consultoria & Freelancer",
    description:
      "Aplicação para gerenciar uma oficina mecânica, com controle de estoque, geração e status de ordens de serviço, envio de e-mails e SMS e geração de nota fiscal.",
    tags: ["[STACK]"],
    confidential: false,
    category: "freelancer",
    tile: { kind: "gradient", from: "#2dd4bf", to: "#0ea5e9" },
  },
  {
    title: "Prestação na Nuvem",
    context: "Consultoria & Freelancer",
    description: "API modelo para criação de outros projetos do ramo de prestação de serviço.",
    tags: ["[STACK]"],
    confidential: false,
    category: "freelancer",
    tile: { kind: "gradient", from: "#a78bfa", to: "#6366f1" },
  },
  {
    title: "Hortifruti Cloud",
    context: "Consultoria & Freelancer",
    description:
      "Sistema elaborado para gestão de um hortifruti, com controle de produtos e integração com sistema de pesagem dos caixas.",
    tags: ["[STACK]"],
    confidential: false,
    category: "freelancer",
    tile: { kind: "gradient", from: "#4ade80", to: "#16a34a" },
  },
  {
    title: "BlessedStore",
    context: "Consultoria & Freelancer",
    description:
      "E-commerce para venda de joias e semijoias, com integração ao WhatsApp para canal de dúvidas e vendas, incluindo alimentação de produtos e estoque via WhatsApp.",
    tags: ["[STACK]"],
    confidential: false,
    category: "freelancer",
    tile: { kind: "image", src: "/Blesed.png" },
    demoUrl: "https://www.blesedstore.com.br/",
  },
  {
    title: "RPG em Java",
    context: "Faculdade",
    description:
      "Jogo RPG desenvolvido em Java durante a faculdade, aplicando lógica de jogo, orientação a objetos e estruturas de dados.",
    tags: ["Java", "POO"],
    confidential: false,
    category: "estudo",
    tile: { kind: "gradient", from: "#ef4444", to: "#7c3aed" },
  },
  {
    title: "Loja de Brinquedos",
    context: "Faculdade",
    description:
      "Sistema de loja de brinquedos desenvolvido em Java durante a faculdade, com cadastro de produtos, vendas e controle de estoque.",
    tags: ["Java", "POO"],
    confidential: false,
    category: "estudo",
    tile: { kind: "gradient", from: "#f472b6", to: "#fb923c" },
  },
];

export type EducationEntry = {
  course: string;
  institution: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Senac Santo Amaro",
    period: "2019 — 2022",
  },
  {
    course: "Técnico em Informática",
    institution: "Senac Largo 13",
    period: "2017 — 2018",
  },
  {
    course: "Ensino Médio Completo",
    institution: "EMEFM Professor Linneu Prestes",
    period: "2018",
  },
];

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
