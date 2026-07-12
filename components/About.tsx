import { coreValues } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section page reveal">
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">About Me</p>
          <h2 className="title mt-6 text-[#0f172a]">운영을 먼저<br />생각하는<br />엔지니어</h2>
        </div>
        <div>
          <p className="body">문제를 임시로 해결하는 것이 아니라 Infrastructure Layer부터 원인을 분석하고 운영을 고려한 구조를 설계하는 것을 중요하게 생각합니다.</p>
          <p className="body mt-5">Terraform 기반 AWS Infrastructure와 Kubernetes Internal Developer Platform 프로젝트를 수행하며 Public Cloud와 On-Premise 환경에서 인프라 구축 및 플랫폼 자동화 경험을 쌓았습니다.</p>
          <p className="body mt-5">Platform Engineer로서 운영 효율성과 안정성을 높이는 플랫폼을 만드는 것이 목표입니다.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {coreValues.map((value) => (
              <article key={value.title} className="soft-card p-6 hover-lift">
                <h3 className="text-xl font-black text-[#1E3A5F]">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
