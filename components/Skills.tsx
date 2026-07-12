import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section bg-[#f8fafc]">
      <div className="page reveal">
        <p className="eyebrow">Skills</p>
        <h2 className="title mt-6 text-[#0f172a]">Technical Skills</h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article key={skill.group} className="card p-6 hover-lift">
              <h3 className="text-xl font-black text-[#1E3A5F]">{skill.group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => <span key={item} className="pill">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
