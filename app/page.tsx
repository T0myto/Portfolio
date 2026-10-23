"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Network, Server, ShieldCheck } from "lucide-react";
import Link from "next/link";

const focusAreas = [
  {
    number: "01",
    icon: Network,
    title: "Réseaux",
    description: "Conception, configuration et dépannage d’infrastructures réseau.",
  },
  {
    number: "02",
    icon: Server,
    title: "Systèmes",
    description: "Installation et administration de serveurs Windows et Linux.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Infrastructure",
    description: "Virtualisation, services et sécurisation des environnements.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden pt-24">
        <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              <span className="h-px w-8 bg-gold-600" />
              Portfolio professionnel
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl md:text-7xl">
              Tom Maudet
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-2xl">
              Technicien systèmes, réseaux & infrastructure
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Je conçois, déploie et administre des infrastructures informatiques fiables et sécurisées. Découvrez mon parcours, mes compétences et les projets qui le font avancer.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projets"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-blue-200"
              >
                Découvrir mes projets <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-white dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                Me contacter
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <a
                href="https://github.com/T0myto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Tom Maudet"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-blue-700 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-blue-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/tom-maudet-244aa7336/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Tom Maudet"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-blue-700 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-blue-300"
              >
                <Linkedin size={18} />
              </a>
              <span className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">
                Retrouvez mon travail
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative border-y border-neutral-200 py-7 dark:border-neutral-800 lg:border-y-0 lg:border-l lg:py-2 lg:pl-10"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Domaines d’intervention
            </p>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {focusAreas.map(({ number, icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="pt-1 text-xs font-medium tabular-nums text-neutral-400">
                    {number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5">
                      <Icon size={17} className="text-gold-700 dark:text-gold-300" aria-hidden="true" />
                      <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {title}
                      </h2>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-10 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Un parcours construit autour de l’infrastructure
            </p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              Systèmes · Réseaux · Sécurité
            </p>
          </div>
          <Link
            href="/experiences"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
          >
            Parcourir mes expériences <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
