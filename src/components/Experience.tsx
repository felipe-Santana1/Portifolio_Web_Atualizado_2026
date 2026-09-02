import Reveal from "./Reveal";
import { experience, type CompanyTimeline, type RoleStep } from "@/lib/data";

const justifyByAlign: Record<CompanyTimeline["align"], string> = {
  center: "justify-center",
  left: "justify-start lg:justify-start",
  right: "justify-start lg:justify-end",
};

export default function Experience() {
  return (
    <section id="experiencia" className="bg-background-alt py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 className="font-display text-[34px] font-bold">Experiência Profissional</h2>
        <p className="mt-3.5 text-[16px] text-muted">Minha jornada construindo soluções para empresas de peso</p>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <span className="absolute left-1/2 top-2 bottom-2 hidden w-px -translate-x-1/2 bg-white/10 lg:block" />
          <div className="flex flex-col gap-14">
            {experience.map((company, index) => (
              <CompanyBranch key={company.company} company={company} delay={index * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyBranch({ company, delay }: { company: CompanyTimeline; delay: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="z-10 flex items-center gap-3">
        <span
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-[#06121c] ring-4 ring-background-alt"
          style={{ backgroundColor: company.companyColor }}
        >
          {company.companyBadge}
        </span>
        <div className="text-left">
          <div className="font-display font-semibold">{company.company}</div>
          <div className="text-xs text-muted">{company.overallPeriod}</div>
        </div>
      </div>

      <span className="my-4 h-6 w-px bg-white/10" />

      <div className={`flex w-full flex-wrap gap-4 ${justifyByAlign[company.align]}`}>
        {company.roles.map((role, index) => (
          <Reveal key={role.role} delay={delay + index * 80}>
            <RoleCard role={role} color={company.companyColor} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function RoleCard({ role, color }: { role: RoleStep; color: string }) {
  return (
    <div className="w-72 max-w-full rounded-[16px] border border-border-subtle bg-surface p-5 text-left transition-colors hover:border-white/20">
      <span
        className="rounded-full border border-white/[0.09] px-3 py-1 text-[12px] text-[#dbe4f5]"
        style={{ backgroundColor: `${color}1a` }}
      >
        {role.period}
      </span>
      <h4 className="mt-2.5 font-display text-[15px] font-semibold leading-snug">{role.role}</h4>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{role.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {role.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.09] bg-white/5 px-2.5 py-1 text-[11.5px] text-[#dbe4f5]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
