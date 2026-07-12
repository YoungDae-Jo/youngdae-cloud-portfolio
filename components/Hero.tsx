import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="page grid min-h-[calc(100vh-73px)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
      <div className="fade-up">
        <p className="eyebrow">Cloud Platform Portfolio</p>
        <h1 className="display mt-6 text-[#0f172a]">JO<br />YOUNG<br />DAE</h1>
        <p className="mt-7 text-2xl font-extrabold tracking-[-0.04em] text-[#1E3A5F] md:text-4xl">{profile.role}</p>
        <p className="mt-8 max-w-3xl text-2xl font-bold leading-snug tracking-[-0.04em] text-slate-700 md:text-4xl">{profile.headline}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={profile.github} target="_blank" className="rounded-full bg-[#1E3A5F] px-6 py-3 font-bold text-white transition hover:bg-[#2563EB]">GitHub</a>
          <a href={profile.portfolioPdf} download="Jo_Young_Dae_Cloud_Infrastructure_Portfolio.pdf" className="rounded-full border border-slate-300 px-6 py-3 font-bold text-[#1E3A5F] transition hover:border-[#2563EB] hover:text-[#2563EB]">Portfolio PDF</a>
          <a href="#contact" className="rounded-full border border-slate-300 px-6 py-3 font-bold text-[#1E3A5F] transition hover:border-[#2563EB] hover:text-[#2563EB]">Contact</a>
        </div>
      </div>

      <div className="card grid-bg p-8">
        <p className="eyebrow">Portfolio Focus</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["AWS", "Terraform", "Kubernetes", "Private Cloud", "Platform Engineering", "GitOps"].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white/85 p-5 hover-lift">
              <p className="text-xl font-black text-[#1E3A5F]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
