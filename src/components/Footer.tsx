import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-7 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[13px] text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
