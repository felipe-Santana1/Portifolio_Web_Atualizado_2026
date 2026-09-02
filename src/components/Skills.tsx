import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";
import { CategoryIcon } from "./icons";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="font-display text-[34px] font-bold">Habilidades</h2>
        <p className="mt-3.5 max-w-[600px] text-[16px] text-muted">
          Tecnologias que uso para modernizar sistemas legados e construir soluções escaláveis, do banco de dados à
          interface.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 80}>
              <div className="group relative h-full rounded-[18px] border border-border-subtle bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <span className="absolute left-6 right-6 top-0 h-0.5 rounded-full bg-linear-to-r from-accent to-accent-2" />
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <CategoryIcon name={category.icon} className="h-[22px] w-[22px]" />
                </div>
                <h3 className="mt-4 font-display text-[19px] font-semibold">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.09] bg-white/5 px-3.5 py-1.5 text-[13px] text-[#dbe4f5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
