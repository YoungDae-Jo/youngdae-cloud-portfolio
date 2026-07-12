import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section page reveal">
      <div className="rounded-[36px] bg-[#1E3A5F] p-8 text-white md:p-12">
        <p className="text-sm font-black uppercase tracking-[.16em] text-blue-200">Contact</p>
        <h2 className="title mt-6">끝까지 읽어주셔서<br />감사합니다.</h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={profile.github} target="_blank" className="rounded-full bg-white px-6 py-3 font-bold text-[#1E3A5F] shadow-sm transition hover:bg-blue-50">GitHub</a>
          <a href={profile.portfolioPdf} download="Jo_Young_Dae_Cloud_Infrastructure_Portfolio.pdf" className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#1E3A5F]">Portfolio PDF</a>
          <a href={`mailto:${profile.email}`} className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#1E3A5F]">Email</a>
        </div>
        <p className="mt-8 max-w-2xl leading-8 text-blue-100">운영을 고려한 설계를 통해 안정적인 플랫폼을 만드는 Cloud Infrastructure Engineer가 되겠습니다.</p><p className="mt-4 text-blue-100">{profile.email}</p>
      </div>
    </section>
  );
}
