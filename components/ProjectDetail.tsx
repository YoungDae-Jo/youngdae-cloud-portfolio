import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function ProjectDetail() {
  return (
    <>
      {projects.map((project, index) => (
        <section id={`project-${project.id}`} key={project.id} className={`section ${index === 1 ? "bg-[#f8fafc]" : ""}`}>
          <div className="page reveal">
            <div className="grid gap-10 lg:grid-cols-[1fr_190px]">
              <div>
                <p className="eyebrow">Project {project.id}</p>
                <h2 className="title mt-6 max-w-4xl text-[#0f172a]">{project.title}</h2>
                <p className="mt-5 text-xl font-bold text-[#1E3A5F]">{project.role}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="pill">{project.environment}</span>
                  <span className="pill">Contribution {project.contribution}</span>
                </div>
              </div>
              <div className="soft-card flex min-h-[190px] items-center justify-center p-4">
                <div className="text-center">
                  <p className="mb-3 text-xs font-black uppercase tracking-[.16em] text-[#2563EB]">Demo QR</p>
                  <Image src={project.demoQr} alt={`${project.title} demo QR`} width={128} height={128} className="mx-auto rounded-xl" />
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div className="space-y-6">
                <InfoBlock title="Overview" items={project.overview} />
                <InfoBlock title="Background" items={project.background} />
              </div>
              <div>
                <p className="eyebrow">Architecture</p>
                <a href={project.architecture} target="_blank" className="image-wrap mt-4 block hover-lift">
                  <Image src={project.architecture} alt={`${project.title} Architecture`} width={1920} height={1080} className={index === 1 ? "image-frame-tall" : "image-frame"} />
                </a>
              </div>
            </div>

            {project.infrastructure && (
              <div className="mt-14">
                <p className="eyebrow">On-Premise Private Cloud</p>
                <h3 className="sub-title mt-5 text-[#0f172a]">Infrastructure Planning</h3>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <TableCard title="Host Environment" headers={["항목", "내용"]} rows={project.infrastructure.host} />
                  <TableCard title="VM Resource Planning" headers={["VM", "Role", "CPU", "RAM", "Disk"]} rows={project.infrastructure.vms} />
                </div>

                <div className="mt-8">
                  <p className="eyebrow">Kubernetes Cluster Build</p>
                  <div className="mt-5 grid gap-3 md:grid-cols-4">
                    {project.infrastructure.build.map((step, i) => (
                      <div key={step} className="soft-card p-5 hover-lift">
                        <p className="text-sm font-black text-[#2563EB]">{String(i + 1).padStart(2, "0")}</p>
                        <p className="mt-2 font-black text-[#1E3A5F]">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-14">
              <p className="eyebrow">My Contribution</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                {project.stack.map((item) => (
                  <div key={item} className="soft-card p-5 hover-lift">
                    <p className="font-black text-[#1E3A5F]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {project.featureImages && (
              <div className="mt-14">
                <p className="eyebrow">Core Features</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {project.featureImages.map((feature) => (
                    <article key={feature.title} className="card overflow-hidden hover-lift">
                      <a href={feature.src} target="_blank">
                        <Image src={feature.src} alt={feature.title} width={1600} height={900} className="image-frame" />
                      </a>
                      <div className="p-6">
                        <h3 className="text-xl font-black text-[#1E3A5F]">{feature.title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">{feature.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <InfoBlock title="Technical Decisions" items={project.decisions} />
              <InfoBlock title="Troubleshooting" items={project.troubleshooting} />
              <InfoBlock title="Project Outcome" items={project.outcome} />
              <InfoBlock title="Lessons Learned" items={project.lessons} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card p-7">
      <h3 className="text-2xl font-black text-[#1E3A5F]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-slate-600">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2563EB]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableCard({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-slate-200 p-6">
        <h4 className="text-xl font-black text-[#1E3A5F]">{title}</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-[#f8fafc] text-[#1E3A5F]">
            <tr>{headers.map(h => <th key={h} className="px-5 py-4 font-black">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-slate-100">
                {row.map((cell, j) => <td key={j} className="px-5 py-4 text-slate-600">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
