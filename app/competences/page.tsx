"use client";

import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { skills } from "@/lib/skills";
import {
  Activity,
  Box,
  ClipboardList,
  Code2,
  HardDrive,
  Home,
  Network,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const categoryIcons = [
  Network,
  Server,
  HardDrive,
  Box,
  ShieldCheck,
  Activity,
  Home,
  Code2,
  Wrench,
  ClipboardList,
];

export default function CompetencesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const totalSkills = skills.reduce((total, skill) => total + skill.items.length, 0);

  const filterClass = (active: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-white"
    }`;

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="page-container">
        <SectionTitle
          eyebrow="Socle technique"
          title="Compétences"
          subtitle="Les technologies et outils avec lesquels je travaille, des langages aux infrastructures, pour concevoir, déployer et sécuriser des solutions."
        >
          <p className="mt-6 font-mono text-sm text-neutral-500">
            {skills.length} domaines · {totalSkills} compétences
          </p>
        </SectionTitle>

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer par domaine">
          <button
            onClick={() => setSelectedCategory(null)}
            aria-pressed={selectedCategory === null}
            className={filterClass(selectedCategory === null)}
          >
            Toutes
          </button>
          {skills.map((skill) => (
            <button
              key={skill.category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === skill.category ? null : skill.category
                )
              }
              aria-pressed={selectedCategory === skill.category}
              className={filterClass(selectedCategory === skill.category)}
            >
              {skill.category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skills
            .filter(
              (skill) =>
                selectedCategory === null || skill.category === selectedCategory
            )
            .map((skill, idx) => {
              const categoryIndex = skills.indexOf(skill);
              const Icon = categoryIcons[categoryIndex % categoryIcons.length];

              return (
                <MotionFade key={skill.category} delay={Math.min(idx, 4) * 0.05}>
                  <section className="card h-full p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20">
                          <Icon size={19} aria-hidden="true" />
                        </div>
                        <h2 className="text-base font-semibold sm:text-lg">
                          {skill.category}
                        </h2>
                      </div>
                      <span className="font-mono text-xs text-neutral-400">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-700/80 dark:bg-neutral-800/60 dark:text-neutral-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </MotionFade>
              );
            })}
        </div>
      </div>
    </div>
  );
}
