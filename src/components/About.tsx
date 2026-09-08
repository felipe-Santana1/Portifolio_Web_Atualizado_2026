import Reveal from "./Reveal";
import { about, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="bg-background-alt py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 lg:flex-row lg:items-center lg:px-10">
        <Reveal className="flex-1">
          <h2 className="font-display text-[34px] font-bold">Sobre Mim</h2>

          <div className="mt-7 flex flex-col gap-5">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-[16px] leading-[1.75] text-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-9 grid max-w-[460px] grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-border-subtle bg-surface px-4 py-5 text-center"
              >
                <span className="font-display text-3xl font-bold text-accent">{stat.value}</span>
                <span className="text-sm leading-snug text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative hidden h-[420px] w-[300px] flex-shrink-0 lg:block">
          <div className="absolute right-0 top-0 h-72 w-60 -rotate-3 overflow-hidden rounded-[22px] border border-border-subtle bg-surface shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
            <img src="/fotoEvento.png" alt="Felipe Santana em evento de tecnologia" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 h-72 w-60 rotate-3 overflow-hidden rounded-[22px] border-2 border-accent/50 bg-surface shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
            <img src="/fotoPerfil.png" alt="Felipe Santana, foto profissional" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
