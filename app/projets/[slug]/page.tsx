"use client";

import { use } from "react";
import { MotionFade } from "@/components/MotionFade";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Projet non trouvé</h1>
          <Link
            href="/projets"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <MotionFade>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-500 mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Retour aux projets
          </Link>
        </MotionFade>

        {/* Project Header */}
        <MotionFade delay={0.1}>
          <div className="mb-12 space-y-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                project.status === "completed"
                  ? "bg-green-500/10 text-green-700 dark:text-green-400"
                  : "bg-blue-500/10 text-blue-700 dark:text-blue-400"
              }`}
            >
              {project.status === "completed" ? "Complété" : "En cours"}
            </span>
            <h1 className="text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              {project.shortDesc}
            </p>
          </div>
        </MotionFade>

        {/* Technologies */}
        <MotionFade delay={0.2}>
          <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-semibold mb-4">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </MotionFade>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Description */}
          <MotionFade delay={0.3} direction="left">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">Description</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Fonctionnalités clés :</h3>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="text-blue-500 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionFade>

          {/* Challenge & Solution */}
          <MotionFade delay={0.4} direction="right">
            <div className="space-y-6">
              <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-400">
                  Défi
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-400">
                  Solution
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.solution}
                </p>
              </div>

              <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-400">
                  Résultat
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.result}
                </p>
              </div>
              {project.slug === "facilock" && (
                <div className="flex justify-end pt-1">
                  <a
                    href="https://github.com/constantseg/FaciLock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    <Github size={18} />
                    Voir le dépôt GitHub
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </MotionFade>
        </div>

        {/* CTA */}
        {(project.github || project.demo) && (
          <MotionFade delay={0.5}>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Github size={20} /> Voir le code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} /> Voir la démo
                </a>
              )}
            </div>
          </MotionFade>
        )}

        {/* Related Projects */}
        <div className="mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <MotionFade delay={0.6}>
            <h3 className="text-2xl font-bold mb-8">Autres projets</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((p) => (
                  <Link key={p.id} href={`/projets/${p.slug}`}>
                    <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md cursor-pointer">
                      <h4 className="font-bold mb-2">{p.title}</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {p.shortDesc}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </MotionFade>
        </div>
      </div>
    </div>
  );
}
