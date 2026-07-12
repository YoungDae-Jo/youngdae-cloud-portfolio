import { profile } from "@/data/portfolio";

const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="page flex items-center justify-between py-4">
        <a href="#" className="font-black tracking-tight text-[#1E3A5F]">
          {profile.name}<span className="text-[#2563EB]">.platform</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#2563EB]">{label}</a>
          ))}
        </nav>
        <a href={profile.github} target="_blank" className="rounded-full bg-[#1E3A5F] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#2563EB]">GitHub</a>
      </div>
    </header>
  );
}
