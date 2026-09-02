export const profile = {
  name: "Felipe Santana",
  role: "Desenvolvedor Full-Stack & Software Engineer",
  eyebrow: "Analista Desenvolvedor PL · Capgemini",
  summary:
    "Construo e modernizo sistemas críticos — de fazendas públicas a bancos — com .NET, Node.js e arquitetura limpa. Foco em automação de processos e integração de sistemas legados.",
  stack: [".NET Core", "C#", "Node.js", "React", "Angular", "AWS"],
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
  { value: "3", label: "Empresas de Tecnologia" },
  { value: "25+", label: "Tecnologias Dominadas" },
];

export const about = [
  "Profissional de tecnologia atuando desde 2018, com passagem por instituições como Capgemini (alocado na SEFAZ), Indra e C6 Bank. Meu foco está em automação de processos, integração de sistemas e modernização de aplicações legadas — sempre com atenção a arquitetura e conformidade.",
  "Sou movido por curiosidade e pelo desejo constante de aprender, e costumo contribuir com o time mesmo fora do meu escopo direto, buscando sempre o melhor resultado coletivo. Valorizo trabalho em equipe — no código e nas atividades radicais que pratico fora dele, como paraquedismo, trilhas e rafting.",
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
    skills: ["C#", "PHP", ".NET Core", "ASP.NET MVC", "Node.js", "Angular", "React", "Web API"],
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
    skills: ["AWS", "Azure DevOps", "GitHub", "Trello"],
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
  roles: RoleStep[];
};

export const experience: CompanyTimeline[] = [
  {
    company: "Capgemini",
    companyBadge: "CG",
    companyColor: "#3fd0ff",
    overallPeriod: "2024 — Presente",
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
    company: "C6 Bank",
    companyBadge: "C6",
    companyColor: "#2dd4bf",
    overallPeriod: "2018",
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
  {
    company: "CALIA Y2 Propaganda & Marketing",
    companyBadge: "CY",
    companyColor: "#fbbf24",
    overallPeriod: "2020 — 2022",
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
];

export type ProjectTile =
  | { kind: "gradient"; from: string; to: string }
  | { kind: "locked" };

export type Project = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  confidential: boolean;
  tile: ProjectTile;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Modernização do PPA",
    context: "Capgemini · SEFAZ",
    description:
      "Substituição da solução legada do Plano Plurianual: arquitetura, modelagem de banco e conformidade de auditoria desde o zero.",
    tags: [".NET Core", "Clean Architecture"],
    confidential: true,
    tile: { kind: "locked" },
  },
  {
    title: "Automação Financeira",
    context: "Indra Company",
    description:
      "Integrações com crawlers financeiros e criação de aplicações internas (Ajuizamento, Watch List, ROC) para reduzir trabalho manual.",
    tags: ["Integrações", "Legado"],
    confidential: true,
    tile: { kind: "locked" },
  },
  {
    title: "Front-end C6 Bank",
    context: "C6 Bank",
    description:
      "Landing page, primeiros e-mails marketing e biblioteca de componentes reutilizáveis do banco.",
    tags: ["Front-end", "Componentes"],
    confidential: true,
    tile: { kind: "locked" },
  },
  {
    title: "Portfólio Pessoal",
    context: "Projeto próprio",
    description: "Este portfólio, projetado e construído para apresentar minha trajetória e minhas habilidades.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    confidential: false,
    tile: { kind: "gradient", from: "#3fd0ff", to: "#6366f1" },
    repoUrl: "https://github.com/felipe-Santana1/Portifolio_Web_Atualizado_2026",
  },
  {
    title: "Oficina na Nuvem",
    context: "Projeto próprio",
    description: "[DESCRIÇÃO DO PROJETO]",
    tags: ["[STACK]"],
    confidential: false,
    tile: { kind: "gradient", from: "#2dd4bf", to: "#0ea5e9" },
  },
  {
    title: "Prestação na Nuvem",
    context: "Projeto próprio",
    description: "[DESCRIÇÃO DO PROJETO]",
    tags: ["[STACK]"],
    confidential: false,
    tile: { kind: "gradient", from: "#a78bfa", to: "#6366f1" },
  },
  {
    title: "Hortifruti Cloud",
    context: "Projeto próprio",
    description: "[DESCRIÇÃO DO PROJETO]",
    tags: ["[STACK]"],
    confidential: false,
    tile: { kind: "gradient", from: "#4ade80", to: "#16a34a" },
  },
  {
    title: "BlessedStore",
    context: "Projeto próprio",
    description: "[DESCRIÇÃO DO PROJETO]",
    tags: ["[STACK]"],
    confidential: false,
    tile: { kind: "gradient", from: "#fbbf24", to: "#f97316" },
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
