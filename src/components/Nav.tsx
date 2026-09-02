"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border-subtle" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[5.5rem] max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-accent text-sm font-bold tracking-wide font-display">
            F/S
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold">{profile.name}</span>
            <span className="text-xs text-muted">Developer</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 text-[15px] text-muted md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-foreground ${
                  active === link.href ? "text-accent" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <SocialIconLink href={profile.github} label="GitHub">
            <GithubIcon className="h-[18px] w-[18px]" />
          </SocialIconLink>
          <SocialIconLink href={profile.linkedin} label="LinkedIn">
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </SocialIconLink>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border-subtle md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border-subtle bg-background px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5 text-base text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <SocialIconLink href={profile.github} label="GitHub">
              <GithubIcon className="h-[18px] w-[18px]" />
            </SocialIconLink>
            <SocialIconLink href={profile.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </SocialIconLink>
          </div>
        </div>
      )}
    </header>
  );
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
