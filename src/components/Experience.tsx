import Reveal from "./Reveal";
import { experience, type ExperienceEntry } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="bg-background-alt py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 className="font-display text-[34px] font-bold">Experiência Profissional</h2>
        <p className="mt-3.5 text-[16px] text-muted">Minha jornada construindo soluções para empresas de peso</p>

        {/* Desktop zigzag timeline */}
        <div className="relative mx-auto mt-16 hidden max-w-4xl lg:block">
          <span className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />
          <div className="flex flex-col gap-10">
            {experience.map((entry, index) => {
              const onLeft = index % 2 === 0;
              return (
                <div key={`${entry.company}-${entry.role}-${entry.period}`} className="grid grid-cols-[1fr_44px_1fr] items-start">
                  <div className={onLeft ? "flex justify-end" : ""}>
                    {onLeft && (
                      <Reveal delay={(index % 4) * 80} className="w-full max-w-md">
                        <ExperienceCard entry={entry} align="right" />
                      </Reveal>
                    )}
                  </div>

                  <div className="flex justify-center pt-1.5">
                    <span
                      className="h-4 w-4 rounded-full border-4 border-background-alt"
                      style={{ backgroundColor: entry.companyColor }}
                    />
                  </div>

                  <div className={!onLeft ? "flex justify-start" : ""}>
                    {!onLeft && (
                      <Reveal delay={(index % 4) * 80} className="w-full max-w-md">
                        <ExperienceCard entry={entry} align="left" />
                      </Reveal>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet stacked timeline */}
        <div className="relative mx-auto mt-14 flex max-w-xl flex-col gap-7 text-left lg:hidden">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
          {experience.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.role}-${entry.period}-m`} delay={(index % 4) * 80}>
              <div className="flex gap-5">
                <div className="flex flex-shrink-0 flex-col items-center pt-1.5">
                  <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: entry.companyColor }} />
                </div>
                <ExperienceCard entry={entry} align="left" className="flex-1" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  entry,
  align,
  className = "",
}: {
  entry: ExperienceEntry;
  align: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`rounded-[18px] border border-border-subtle bg-surface p-6 text-left transition-colors hover:border-white/20 ${className}`}
    >
      <div className={`flex items-center gap-3 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
        <span
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-[#06121c]"
          style={{ backgroundColor: entry.companyColor }}
        >
          {entry.companyBadge}
        </span>
        <span className="rounded-full border border-white/[0.09] bg-white/5 px-3.5 py-1.5 text-[13px] text-[#dbe4f5]">
          {entry.period}
        </span>
      </div>
      <h3 className={`mt-3 font-display text-lg font-semibold ${align === "right" ? "lg:text-right" : ""}`}>
        {entry.role}
      </h3>
      <div
        className={`mt-1 mb-3 text-sm font-semibold ${align === "right" ? "lg:text-right" : ""}`}
        style={{ color: entry.companyColor }}
      >
        {entry.company}
      </div>
      <p className={`text-[15px] leading-relaxed text-muted ${align === "right" ? "lg:text-right" : ""}`}>
        {entry.description}
      </p>
      <div className={`mt-3.5 flex flex-wrap gap-2 ${align === "right" ? "lg:justify-end" : ""}`}>
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
  );
}
