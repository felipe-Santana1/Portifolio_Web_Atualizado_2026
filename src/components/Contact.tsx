import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contato" className="px-6 pb-16 pt-24 lg:px-10">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="font-display text-[38px] font-bold">Vamos Conversar</h2>
        <p className="mt-4 max-w-[520px] text-[16px] text-muted">
          Aberto a novas oportunidades em desenvolvimento e modernização de sistemas.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2.5 rounded-[10px] bg-accent px-[26px] py-[14px] text-[15px] font-bold text-[#06121c] transition-transform hover:-translate-y-0.5"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            className="inline-flex items-center gap-2.5 rounded-[10px] border border-white/15 px-[26px] py-[14px] text-[15px] font-semibold transition-colors hover:border-white/35"
          >
            <PhoneIcon className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>

        <div className="mt-7 flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
