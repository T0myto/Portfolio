"use client";

import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { experiences } from "@/lib/experiences";
import { Building2 } from "lucide-react";

export default function ExperiencesPage() {
  const orderedExperiences = [...experiences].reverse();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="page-container">
        <SectionTitle
          eyebrow="Parcours"
          title="Mes expériences"
          subtitle="Un parcours dans l'infra, le réseau et la cybersécurité"
        />

        <ol className="relative max-w-4xl border-l border-neutral-200 dark:border-neutral-800">
          {orderedExperiences.map((exp, idx) => (
            <li key={exp.id} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span
                className={`absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-neutral-950 ${
                  idx === 0 ? "bg-blue-600 ring-4 ring-blue-100 dark:bg-blue-400 dark:ring-blue-500/20" : "bg-neutral-300 dark:bg-neutral-600"
                }`}
                aria-hidden="true"
              />
              <MotionFade delay={idx * 0.06}>
                <article className="card p-6 sm:p-8">
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight">{exp.title.trim()}</h2>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-blue-700 dark:text-blue-400">
                        <Building2 size={15} aria-hidden="true" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="tag w-fit shrink-0 font-mono">{exp.period}</span>
                  </header>

                  <p className="mt-5 leading-7 text-neutral-600 dark:text-neutral-400">
                    {exp.description}
                  </p>

                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Missions principales
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-5 dark:border-neutral-800">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </MotionFade>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
