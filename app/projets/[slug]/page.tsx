import { MotionFade } from "@/components/MotionFade";
import { StatusBadge } from "@/components/StatusBadge";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Check, Github, ExternalLink } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-semibold">Projet non trouvé</h1>
          <Link href="/projets" className="btn-primary">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const githubUrl =
    project.github ?? (project.slug === "facilock" ? "https://github.com/constantseg/FaciLock" : undefined);
  const caseStudy = [
    { label: "Défi", text: project.challenge },
    { label: "Solution", text: project.solution },
    { label: "Résultat", text: project.result },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="page-container">
        <MotionFade>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <ArrowLeft size={16} /> Retour aux projets
          </Link>
        </MotionFade>

        <MotionFade delay={0.05}>
          <header className="mt-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="font-mono text-xs text-neutral-500">
                {project.category === "course" ? "Projet de formation" : "Projet personnel"}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.shortDesc}
            </p>
            {(githubUrl || project.demo) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <Github size={17} /> Voir le dépôt GitHub <ArrowUpRight size={15} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <ExternalLink size={17} /> Voir la démo
                  </a>
                )}
              </div>
            )}
          </header>
        </MotionFade>

        <div className="mt-16 grid gap-12 border-t border-neutral-200 pt-12 dark:border-neutral-800 lg:grid-cols-[1fr_320px]">
          <MotionFade delay={0.1}>
            <div className="space-y-12">
              <section>
                <h2 className="text-xl font-semibold tracking-tight">Description</h2>
                <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
                  {project.fullDesc}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold tracking-tight">Fonctionnalités clés</h2>
                <ul className="mt-5 space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="grid gap-4">
                {caseStudy.map(({ label, text }, index) => (
                  <div key={label} className="card p-6">
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-400">
                      {String(index + 1).padStart(2, "0")} · {label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{text}</p>
                  </div>
                ))}
              </section>
            </div>
          </MotionFade>

          <MotionFade delay={0.15}>
            <aside className="card p-6 lg:sticky lg:top-24">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Technologies utilisées
              </h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </MotionFade>
        </div>

        <div className="mt-24 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <MotionFade>
            <h2 className="text-2xl font-semibold tracking-tight">Autres projets</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((p) => (
                  <Link key={p.id} href={`/projets/${p.slug}`} className="card card-hover group p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-400">{p.title}</h3>
                      <ArrowUpRight size={17} className="shrink-0 text-neutral-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                      {p.shortDesc}
                    </p>
                  </Link>
                ))}
            </div>
          </MotionFade>
        </div>
      </div>
    </div>
  );
}
