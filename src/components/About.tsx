import Reveal from "./Reveal";
import { about, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="bg-background-alt py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 lg:flex-row lg:px-10">
        <Reveal className="lg:w-[340px] lg:flex-shrink-0">
          <h2 className="font-display text-[34px] font-bold">Sobre Mim</h2>
          <div className="mt-7 flex flex-col gap-3.5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-2xl border border-border-subtle bg-surface px-5 py-5"
              >
                <span className="font-display text-3xl font-bold text-accent">{stat.value}</span>
                <span className="text-right text-sm leading-snug text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-1 flex-col gap-5 pt-1">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-[16px] leading-[1.75] text-soft">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
