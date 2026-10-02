"use client";

import { motion } from "framer-motion";
import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjetsPage() {
  const projectGroups = [
    {
      category: "course",
      title: "Projets de formation",
      description: "Des projets réalisés dans le cadre de mes formations.",
      placeholders: [1, 2, 3],
    },
    {
      category: "personal",
      title: "Projets personnels",
      description:
        "Des projets personnels pour approfondir mes connaissances et mettre en pratique les notions abordées lors de mes certifications.",
      placeholders: [],
    },
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Mes projets"
          subtitle="Des projets autour des réseaux, de l’infrastructure, du développement et de l’ingénierie électronique."
        />

        <div className="space-y-16">
          {projectGroups.map((group) => (
            <section
              key={group.category}
              aria-labelledby={`projects-${group.category}`}
            >
              <div className="mb-8 text-center">
                <h2
                  id={`projects-${group.category}`}
                  className="text-2xl md:text-3xl font-bold mb-2"
                >
                  {group.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {group.description}
                </p>
              </div>
              <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects
                  .filter((project) => project.category === group.category)
                  .sort((a, b) =>
                    a.status === b.status
                      ? 0
                      : a.status === "in-progress"
                        ? -1
                        : 1
                  )
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.005 }}
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      className="group"
                    >
                      <Link href={`/projets/${project.slug}`}>
                        <div className="h-full p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md cursor-pointer">
                          <div className="flex items-start justify-between mb-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                project.status === "completed"
                                  ? "bg-green-500/10 text-green-700 dark:text-green-400"
                                  : "bg-blue-500/10 text-blue-700 dark:text-blue-400"
                              }`}
                            >
                              {project.status === "completed"
                                ? "Complété"
                                : "En cours"}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                            {project.shortDesc}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 text-neutral-500 text-xs font-medium">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm group-hover:gap-3 transition-all">
                            Voir le détail <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                {group.category === "course" &&
                  projects.filter((project) => project.category === group.category).length === 0 &&
                  group.placeholders.map((placeholder) => (
                  <motion.div
                    key={`school-placeholder-${placeholder}`}
                    variants={itemVariants}
                    className="min-h-48 p-6 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl flex flex-col justify-center"
                  >
                    <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
                      Projet d&apos;école à ajouter
                    </h3>
                    <p className="text-sm text-neutral-500 mt-2">
                      Remplacez cet emplacement par un projet de formation.
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          ))}
        </div>

        {/* Additional Info */}
        <MotionFade delay={0.5}>
          <div className="mt-20 text-center space-y-6 max-w-2xl mx-auto">
            <p className="text-neutral-600 dark:text-neutral-400">
              Vous avez un projet en tête ? Parlons-en !
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </MotionFade>
      </div>
    </div>
  );
}
