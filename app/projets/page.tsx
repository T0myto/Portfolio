"use client";

import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const projectGroups = [
  {
    category: "course",
    title: "Projets de formation",
    description: "Des projets réalisés dans le cadre de mes formations.",
  },
  {
    category: "personal",
    title: "Projets personnels",
    description:
      "Des projets personnels pour approfondir mes connaissances et mettre en pratique les notions abordées lors de mes certifications.",
  },
] as const;

export default function ProjetsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="page-container">
        <SectionTitle
          eyebrow="Réalisations"
          title="Mes projets"
          subtitle="Des projets autour des réseaux, de l’infrastructure, du développement et de l’ingénierie électronique."
        />

        <div className="space-y-20">
          {projectGroups.map((group) => {
            const groupProjects = projects
              .filter((project) => project.category === group.category)
              .sort((a, b) =>
                a.status === b.status ? 0 : a.status === "in-progress" ? -1 : 1
              );

            if (groupProjects.length === 0) return null;

            return (
              <section
                key={group.category}
                aria-labelledby={`projects-${group.category}`}
              >
                <div className="mb-8 flex flex-col gap-2 border-b border-neutral-200 pb-5 dark:border-neutral-800 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2
                      id={`projects-${group.category}`}
                      className="text-2xl font-semibold tracking-tight"
                    >
                      {group.title}
                    </h2>
                    <p className="mt-1.5 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
                      {group.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-500">
                    {String(groupProjects.length).padStart(2, "0")} projets
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {groupProjects.map((project, index) => (
                    <MotionFade key={project.id} delay={Math.min(index, 3) * 0.05}>
                      <Link
                        href={`/projets/${project.slug}`}
                        className="card card-hover group flex h-full flex-col p-6 sm:p-7"
                      >
                        <div className="flex items-center justify-between">
                          <StatusBadge status={project.status} />
                          <ArrowUpRight
                            size={18}
                            className="text-neutral-400 transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-400"
                            aria-hidden="true"
                          />
                        </div>

                        <h3 className="mt-5 text-lg font-semibold leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400">
                          {project.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                          {project.shortDesc}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="tag">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-1 font-mono text-xs text-neutral-500">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </Link>
                    </MotionFade>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <MotionFade>
          <div className="card mt-24 flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold">Vous avez un projet en tête ?</h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Parlons-en !</p>
            </div>
            <Link href="/contact" className="btn-primary">
              Me contacter <ArrowRight size={16} />
            </Link>
          </div>
        </MotionFade>
      </div>
    </div>
  );
}
