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

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Analista Desenvolvedor PL",
    company: "Capgemini · alocado na SEFAZ",
    period: "2024 — Presente",
    description:
      "Construção de um novo sistema para substituir a solução legada do Plano Plurianual (PPA), cobrindo desenvolvimento, testes, arquitetura e modelagem de banco de dados. Responsável por garantir conformidade com diretrizes de auditoria e por integrações com a PRODESP.",
    tags: [".NET Core", "Clean Architecture", "Auditoria"],
  },
  {
    role: "Analista / Desenvolvedor JR",
    company: "Indra Company",
    period: "2021",
    description:
      "Desenvolvimento voltado à automação de processos manuais e à transformação de aplicações legadas em sistemas mais modernos e eficientes, incluindo integrações com crawlers financeiros e criação de novas aplicações (Ajuizamento, Watch List, ROC).",
    tags: ["Automação", "Integrações", "Legado"],
  },
  {
    role: "Auxiliar de Desenvolvimento",
    company: "C6 Bank",
    period: "2018",
    description:
      "Atuação na equipe de front-end do banco: colaboração no desenvolvimento da landing page, criação do código dos primeiros e-mails marketing e colaboração na biblioteca de componentes geral do banco.",
    tags: ["Front-end", "Email Marketing", "Componentes"],
  },
];

export type Project = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  confidential: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Modernização do PPA",
    context: "Capgemini · SEFAZ",
    description:
      "Substituição da solução legada do Plano Plurianual: arquitetura, modelagem de banco e conformidade de auditoria desde o zero.",
    tags: [".NET Core", "Clean Architecture"],
    confidential: true,
  },
  {
    title: "Automação Financeira",
    context: "Indra Company",
    description:
      "Integrações com crawlers financeiros e criação de aplicações internas (Ajuizamento, Watch List, ROC) para reduzir trabalho manual.",
    tags: ["Integrações", "Legado"],
    confidential: true,
  },
  {
    title: "Front-end C6 Bank",
    context: "C6 Bank",
    description:
      "Landing page, primeiros e-mails marketing e biblioteca de componentes reutilizáveis do banco.",
    tags: ["Front-end", "Componentes"],
    confidential: true,
  },
  {
    title: "Portfólio Pessoal",
    context: "Este site",
    description: "Este portfólio, projetado e construído para apresentar minha trajetória e minhas habilidades.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    confidential: false,
    link: "https://github.com/felipe-Santana1/Portifolio_Web_Atualizado_2026",
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
