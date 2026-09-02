import Reveal from "./Reveal";
import { projects, type Project } from "@/lib/data";
import { ArrowRightIcon, GithubIcon, LockIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 className="font-display text-[34px] font-bold">Projetos & Cases</h2>
        <p className="mt-3.5 text-[16px] text-muted">Sistemas que ajudei a construir, modernizar e escalar</p>

        <div className="mt-12 grid grid-cols-1 gap-7 text-left sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
      <div className="relative h-44 w-full overflow-hidden">
        {project.tile.kind === "gradient" ? (
          <div
            className="flex h-full w-full items-center justify-center px-6 text-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            style={{ background: `linear-gradient(135deg, ${project.tile.from}, ${project.tile.to})` }}
          >
            <span className="font-display text-xl font-bold text-white/95 drop-shadow-sm">{project.title}</span>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#0f1626] transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <LockIcon className="h-7 w-7 text-muted" />
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">Confidencial</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <h3 className="font-display text-[18px] font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h3>
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

        <div className="mt-auto flex items-center gap-5 pt-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-80"
            >
              Ver Projeto
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#dbe4f5] hover:text-accent"
            >
              <GithubIcon className="h-[15px] w-[15px]" />
              Código Fonte
            </a>
          )}
          {!project.demoUrl && !project.repoUrl && !project.confidential && (
            <span className="text-sm text-muted">[LINK EM BREVE]</span>
          )}
        </div>
      </div>
    </div>
  );
}
