"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin, MapPin, Network, Server, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { MotionFade } from "@/components/MotionFade";
import { projects } from "@/lib/projects";
import { experiences } from "@/lib/experiences";
import { certifications } from "@/lib/certifications";

const focusAreas = [
  {
    icon: Network,
    title: "Réseaux",
    description: "Conception, configuration et dépannage d’infrastructures réseau : VLAN, routage, Wi-Fi, téléphonie IP.",
  },
  {
    icon: Server,
    title: "Systèmes",
    description: "Installation et administration de serveurs Windows et Linux, Active Directory et services réseau.",
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure",
    description: "Virtualisation, conteneurisation, supervision et sécurisation des environnements.",
  },
];

const featuredSlugs = ["infrastructure-logonet", "reseau-interservices-cisco", "facilock"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const latestExperience = experiences[experiences.length - 1];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);
  const stats = [
    { value: experiences.length, label: "Stages en entreprise" },
    { value: projects.length, label: "Projets réalisés" },
    { value: certifications.filter((c) => c.date !== "À venir").length, label: "Certifications" },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-16">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="page-container relative pb-20 pt-20 sm:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Portfolio professionnel · Systèmes &amp; Réseaux
            </span>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-6xl md:text-7xl">
              Tom Maudet
            </h1>
            <p className="mt-4 text-xl font-medium text-neutral-500 dark:text-neutral-400 sm:text-2xl">
              Technicien systèmes, réseaux{" "}
              <span className="text-neutral-900 dark:text-white">&amp; infrastructure</span>
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Je conçois, déploie et administre des infrastructures informatiques fiables et sécurisées. Découvrez mon parcours, mes compétences et les projets qui le font avancer.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/projets" className="btn-primary">
                Découvrir mes projets <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Me contacter
              </Link>
              <div className="flex items-center gap-1 sm:ml-3">
                <a
                  href="https://github.com/T0myto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Tom Maudet"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  <Github size={19} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tom-maudet-244aa7336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Tom Maudet"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  <Linkedin size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-20 grid grid-cols-1 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/50 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-6">
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-24 dark:border-neutral-800">
        <div className="page-container">
          <MotionFade>
            <p className="eyebrow">
              <span className="h-px w-6 bg-current" aria-hidden="true" />
              Expertise
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Domaines d’intervention
            </h2>
          </MotionFade>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {focusAreas.map(({ icon: Icon, title, description }, index) => (
              <MotionFade key={title} delay={index * 0.08}>
                <div className="card h-full p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{description}</p>
                </div>
              </MotionFade>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-24 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="page-container">
          <MotionFade>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">
                  <span className="h-px w-6 bg-current" aria-hidden="true" />
                  Réalisations
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Projets sélectionnés</h2>
              </div>
              <Link
                href="/projets"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Tous les projets <ArrowRight size={15} />
              </Link>
            </div>
          </MotionFade>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <MotionFade key={project.id} delay={index * 0.08}>
                <Link href={`/projets/${project.slug}`} className="card card-hover group flex h-full flex-col p-7">
                  <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
                    {project.category === "course" ? "Projet de formation" : "Projet personnel"}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {project.shortDesc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </Link>
              </MotionFade>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-24 dark:border-neutral-800">
        <div className="page-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionFade>
            <p className="eyebrow">
              <span className="h-px w-6 bg-current" aria-hidden="true" />
              Dernière expérience
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Un parcours construit autour de l’infrastructure
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Stages en service informatique, en maintenance et en SAV : une expérience terrain sur le réseau, les systèmes et le support utilisateur.
            </p>
            <Link href="/experiences" className="btn-secondary mt-8">
              Parcourir mes expériences <ArrowRight size={16} />
            </Link>
          </MotionFade>

          <MotionFade delay={0.1}>
            <div className="card p-7 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{latestExperience.title.trim()}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                    <MapPin size={14} aria-hidden="true" /> {latestExperience.company}
                  </p>
                </div>
                <span className="tag font-mono">{latestExperience.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {latestExperience.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </MotionFade>
        </div>
      </section>

      <section className="page-container pb-24">
        <MotionFade>
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-14 text-white dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800 sm:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight">Envie d’échanger ?</h2>
                <p className="mt-3 text-neutral-300">
                  Échangeons sur vos besoins en systèmes, réseaux et infrastructure.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-blue-50"
              >
                Me contacter <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </MotionFade>
      </section>
    </>
  );
}
