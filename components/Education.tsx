export default function Education() {
  return (
    <section id="education" className="section page reveal">
      <div className="card p-8 md:p-12">
        <p className="eyebrow">Education</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="sub-title text-[#0f172a]">KT Cloud Infra Bootcamp</h2>
            <p className="mt-4 text-lg font-bold text-[#2563EB]">2025.12 ~ 2026.07</p>
            <p className="mt-4 text-slate-600">클라우드 인프라 전문 과정</p>
          </div>
          <div className="flex flex-wrap gap-2 self-end">
            {["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Monitoring", "Azure"].map((item) => <span key={item} className="pill">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
