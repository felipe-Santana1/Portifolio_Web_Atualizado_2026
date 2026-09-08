import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { ArrowRightIcon } from "./icons";

const nodes = [
  { x: 200, y: 60, label: "Java", color: "#ff3b30" },
  { x: 303.9, y: 120, label: "Azure", color: "#00b4ff" },
  { x: 303.9, y: 240, label: "React", color: "#8b7bf7" },
  { x: 200, y: 300, label: "Node.js", color: "#39ff88" },
  { x: 96.1, y: 240, label: "Angular", color: "#ff2e88" },
  { x: 96.1, y: 120, label: "AWS", color: "#ffd60a" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <BackgroundGlow />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-28">
        <Reveal className="flex max-w-xl flex-col">
          <div className="inline-flex w-fit items-center gap-2 self-start rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-[13px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.eyebrow}
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">{profile.name}</h1>
          <h2 className="mt-2.5 font-display text-2xl font-medium text-accent">{profile.role}</h2>
          <p className="mt-5 max-w-[480px] text-[17px] leading-relaxed text-soft">{profile.summary}</p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {profile.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-subtle bg-white/5 px-3.5 py-1.5 text-[13px] text-[#dbe4f5]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2.5 rounded-[10px] bg-accent px-[26px] py-[14px] text-[15px] font-bold text-[#06121c] transition-transform hover:-translate-y-0.5"
            >
              Ver Projetos
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-[10px] border border-white/15 px-[26px] py-[14px] text-[15px] font-semibold transition-colors hover:border-white/35"
            >
              Contato
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex w-[min(90vw,420px)] flex-col rounded-[28px] border border-border-subtle bg-surface p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <span className="text-[13px] font-semibold tracking-wide text-muted">STACK EM AÇÃO</span>
            <svg viewBox="0 0 400 360" className="h-auto w-full py-2">
              {nodes.map((node) => (
                <line
                  key={node.label}
                  x1={200}
                  y1={180}
                  x2={node.x}
                  y2={node.y}
                  stroke="rgba(139,123,247,0.28)"
                  strokeWidth={1.5}
                />
              ))}
              <circle
                cx={200}
                cy={180}
                r={34}
                fill="var(--background)"
                stroke="var(--accent)"
                strokeWidth={2}
                className="stack-core"
              />
              <text x={200} y={185} textAnchor="middle" className="font-display" fontSize={15} fontWeight={700} fill="var(--accent)">
                F/S
              </text>
              {nodes.map((node) => (
                <g key={node.label} className="stack-node" style={{ color: node.color }}>
                  <circle cx={node.x} cy={node.y} r={9} fill="currentColor" />
                  <text
                    x={node.x}
                    y={node.y < 180 ? node.y - 18 : node.y + 24}
                    textAnchor="middle"
                    fontSize={13}
                    fill="#dbe4f5"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BackgroundGlow() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] w-full opacity-60"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <radialGradient id="glowA" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
        </radialGradient>
        <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.10)" />
        </pattern>
      </defs>
      <rect width="1440" height="900" fill="url(#dots)" />
      <circle cx="1180" cy="120" r="380" fill="url(#glowA)" />
      <circle cx="120" cy="480" r="320" fill="url(#glowB)" />
    </svg>
  );
}
