"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Network, Server, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  const focusAreas = [
    {
      icon: Network,
      title: "Réseaux",
      description: "Conception, configuration et dépannage d’infrastructures réseau.",
    },
    {
      icon: Server,
      title: "Systèmes",
      description: "Installation et administration de serveurs Windows et Linux.",
    },
    {
      icon: ShieldCheck,
      title: "Infrastructure",
      description: "Virtualisation, services et sécurisation des environnements.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/[0.06] rounded-full blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, 30, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ left: "-10%", top: "-10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, -30, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            style={{ right: "-10%", bottom: "-10%" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              <div className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-500" />
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Bienvenue sur mon portfolio</p>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
              Tom Maudet
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Technicien Système | Infrastructure & Réseau
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-500 dark:text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Je conçois, déploie et administre des infrastructures systèmes et réseaux, avec une attention particulière portée à leur fiabilité et à leur sécurité.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/projets">
                <motion.button
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 w-full sm:w-auto justify-center transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}>
                  Voir mes projets
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-lg font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}>
                  Me contacter
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <motion.a
                href="https://github.com/T0myto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tom-maudet-244aa7336/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-20 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Mon domaine
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
              Des bases solides pour des infrastructures fiables
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              De l’administration quotidienne à la mise en place de services, je m’intéresse à chaque étape qui rend un environnement informatique stable, pratique et sécurisé.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.article
                  key={area.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon size={21} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {area.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
