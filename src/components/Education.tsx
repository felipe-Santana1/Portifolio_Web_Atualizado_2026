import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="bg-background-alt py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-center font-display text-[34px] font-bold">Formação</h2>

        <div className="mt-10 flex flex-col">
          {education.map((entry, index) => (
            <Reveal key={entry.course} delay={index * 80}>
              <div
                className={`flex items-center justify-between gap-4 py-5 ${
                  index !== education.length - 1 ? "border-b border-white/[0.08]" : ""
                }`}
              >
                <div>
                  <div className="font-semibold">{entry.course}</div>
                  <div className="mt-1 text-sm text-muted">{entry.institution}</div>
                </div>
                <span className="whitespace-nowrap rounded-full border border-white/[0.09] bg-white/5 px-3.5 py-1.5 text-[13px] text-[#dbe4f5]">
                  {entry.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
