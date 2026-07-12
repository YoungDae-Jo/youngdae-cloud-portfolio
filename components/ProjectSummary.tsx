import { projects } from "@/data/portfolio";

export default function ProjectSummary() {
  return (
    <section id="projects" className="section page reveal">
      <p className="eyebrow">Project Summary</p>
      <h2 className="title mt-6 text-[#0f172a]">Projects</h2>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <a key={project.id} href={`#project-${project.id}`} className="card block p-8 hover-lift">
            <p className="eyebrow">Project {project.id}</p>
            <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#1E3A5F]">{project.title}</h3>
            <p className="mt-5 text-lg font-bold text-slate-700">{project.role}</p>

            <dl className="mt-7 grid gap-4 text-sm">
              <div>
                <dt className="font-black text-[#2563EB]">Period</dt>
                <dd className="mt-1 font-semibold text-slate-600">{project.period}</dd>
              </div>
              <div>
                <dt className="font-black text-[#2563EB]">Contribution</dt>
                <dd className="mt-1 font-semibold text-slate-600">{project.contribution}</dd>
              </div>
              <div>
                <dt className="font-black text-[#2563EB]">Environment</dt>
                <dd className="mt-1 font-semibold text-slate-600">{project.environment}</dd>
              </div>
              <div>
                <dt className="font-black text-[#2563EB]">Key Achievement</dt>
                <dd className="mt-1 leading-7 text-slate-600">{project.keyAchievement}</dd>
              </div>
            </dl>

            <p className="mt-8 font-black text-[#2563EB]">View Project →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
