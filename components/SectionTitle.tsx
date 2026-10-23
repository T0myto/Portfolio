"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children?: ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionTitle({ title, subtitle, eyebrow, children }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12 max-w-3xl md:mb-16"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
      }}
    >
      {eyebrow && (
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="eyebrow mb-4"
        >
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
        }}
        className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
          }}
          className="mt-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </motion.div>
  );
}
