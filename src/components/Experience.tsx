import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="bg-background-alt py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 className="font-display text-[34px] font-bold">Experiência Profissional</h2>
        <p className="mt-3.5 text-[16px] text-muted">Minha jornada construindo soluções para empresas de peso</p>

        <div className="relative mx-auto mt-14 flex max-w-3xl flex-col gap-8 text-left">
          <span className="absolute left-[6px] top-2 bottom-2 hidden w-px bg-white/10 sm:block" />

          {experience.map((entry, index) => (
            <Reveal key={entry.company} delay={index * 100}>
              <div className="flex gap-6">
                <div className="hidden flex-shrink-0 flex-col items-center pt-1.5 sm:flex">
                  <span className={`h-3.5 w-3.5 rounded-full ${index % 2 === 0 ? "bg-accent" : "bg-accent-2"}`} />
                </div>
                <div className="flex-1 rounded-[18px] border border-border-subtle bg-surface p-[26px] transition-colors hover:border-accent/30">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <h3 className="font-display text-lg font-semibold">{entry.role}</h3>
                    <span className="rounded-full border border-white/[0.09] bg-white/5 px-3.5 py-1.5 text-[13px] text-[#dbe4f5]">
                      {entry.period}
                    </span>
                  </div>
                  <div className="mt-1.5 mb-3 text-sm font-semibold text-accent">{entry.company}</div>
                  <p className="text-[15px] leading-relaxed text-muted">{entry.description}</p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.09] bg-white/5 px-3.5 py-1.5 text-[13px] text-[#dbe4f5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
