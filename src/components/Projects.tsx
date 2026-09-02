import Reveal from "./Reveal";
import { projects } from "@/lib/data";
import { GithubIcon, LockIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 className="font-display text-[34px] font-bold">Projetos & Cases</h2>
        <p className="mt-3.5 text-[16px] text-muted">Sistemas que ajudei a construir, modernizar e escalar</p>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <div
                className={`flex h-full flex-col gap-3 rounded-[18px] border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 ${
                  project.confidential ? "border-border-subtle hover:border-white/20" : "border-accent/40 hover:border-accent/70"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-[19px] font-semibold">{project.title}</h3>
                  {project.confidential ? (
                    <span className="flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/5 px-3.5 py-1.5 text-[13px] text-muted">
                      <LockIcon className="h-3 w-3" />
                      Confidencial
                    </span>
                  ) : (
                    <span className="rounded-full border border-accent/45 px-3.5 py-1.5 text-[13px] text-accent">
                      Projeto Pessoal
                    </span>
                  )}
                </div>
                <span className="text-[13px] font-semibold text-accent">{project.context}</span>
                <p className="text-[14.5px] leading-relaxed text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.09] bg-white/5 px-3.5 py-1.5 text-[13px] text-[#dbe4f5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {!project.confidential && (
                  <a
                    href={project.link ?? "#"}
                    className="mt-1 flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80"
                  >
                    <GithubIcon className="h-[15px] w-[15px]" />
                    {project.link ? "Repositório" : "[LINK DO REPOSITÓRIO]"}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
