"use client";

import { motion } from "framer-motion";
import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { skills } from "@/lib/skills";
import {
  Braces,
  Code2,
  Database,
  PanelsTopLeft,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const categoryStyles = [
  {
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    accent: "text-blue-600 dark:text-blue-400",
    chip: "bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/40",
  },
  {
    icon: Server,
    gradient: "from-violet-500 to-purple-400",
    accent: "text-violet-600 dark:text-violet-400",
    chip: "bg-violet-500/10 border-violet-500/20 group-hover:border-violet-500/40",
  },
  {
    icon: PanelsTopLeft,
    gradient: "from-cyan-500 to-blue-400",
    accent: "text-cyan-600 dark:text-cyan-400",
    chip: "bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/40",
  },
  {
    icon: Database,
    gradient: "from-fuchsia-500 to-purple-400",
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
    chip: "bg-fuchsia-500/10 border-fuchsia-500/20 group-hover:border-fuchsia-500/40",
  },
  {
    icon: Wrench,
    gradient: "from-indigo-500 to-blue-400",
    accent: "text-indigo-600 dark:text-indigo-400",
    chip: "bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/40",
  },
  {
    icon: ShieldCheck,
    gradient: "from-purple-500 to-pink-400",
    accent: "text-purple-600 dark:text-purple-400",
    chip: "bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40",
  },
];

export default function CompetencesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Compétences"
          subtitle="Les technologies et outils avec lesquels je travaille"
        />

        <MotionFade delay={0.15}>
          <div className="relative mb-12 overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.07] via-white to-purple-500/[0.07] p-6 dark:via-neutral-900 sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20">
                  <Braces size={23} />
                </div>
                <div>
                  <p className="font-semibold">Mon socle technique</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Des langages aux infrastructures, les outils que je mobilise
                    pour concevoir, déployer et sécuriser des solutions.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-3 sm:gap-5">
                <div>
                  <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
                    {skills.length}
                  </p>
                  <p className="text-xs text-neutral-500">domaines</p>
                </div>
                <div className="w-px bg-neutral-200 dark:bg-neutral-700" />
                <div>
                  <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
                    {skills.reduce((total, skill) => total + skill.items.length, 0)}
                  </p>
                  <p className="text-xs text-neutral-500">compétences</p>
                </div>
              </div>
            </div>
          </div>
        </MotionFade>

        {/* Category Filter */}
        <motion.div
          className="mb-14 flex flex-wrap justify-center gap-2.5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            variants={itemVariants}
            onClick={() => setSelectedCategory(null)}
            aria-pressed={selectedCategory === null}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === null
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/20"
                : "border border-neutral-200 bg-white text-neutral-600 hover:border-blue-500/40 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-blue-400"
            }`}
          >
            Toutes
          </motion.button>
          {skills.map((skill) => (
            <motion.button
              key={skill.category}
              variants={itemVariants}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === skill.category ? null : skill.category
                )
              }
              aria-pressed={selectedCategory === skill.category}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === skill.category
                  ? "border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/20"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-blue-500/40 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-blue-400"
              }`}
            >
              {skill.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-6">
          {skills
            .filter(
              (skill) =>
                selectedCategory === null || skill.category === selectedCategory
            )
            .map((skill, idx) => {
              const categoryIndex = skills.indexOf(skill);
              const style = categoryStyles[categoryIndex % categoryStyles.length];
              const Icon = style.icon;

              return (
                <MotionFade key={skill.category} delay={idx * 0.1}>
                  <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-blue-500/5 dark:border-neutral-800 dark:bg-neutral-900">
                    <div className={`h-1 bg-gradient-to-r ${style.gradient}`} />
                    <div className="p-5 sm:p-7">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${style.gradient} text-white shadow-md`}>
                            <Icon size={21} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold sm:text-xl">
                              {skill.category}
                            </h3>
                            <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                              {skill.items.length} compétences
                            </p>
                          </div>
                        </div>
                        <span className={`hidden text-sm font-semibold sm:block ${style.accent}`}>
                          {String(categoryIndex + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <motion.div
                        className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {skill.items.map((item) => (
                          <motion.div
                            key={item}
                            variants={itemVariants}
                            whileHover={{ y: -3 }}
                            className={`group flex items-center gap-2.5 rounded-xl border px-3 py-3 transition-colors sm:px-4 ${style.chip}`}
                          >
                            <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${style.gradient}`} />
                            <p className="text-sm font-semibold">{item}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </section>
                </MotionFade>
              );
            })}
        </div>
      </div>
    </div>
  );
}
