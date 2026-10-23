"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12 border-b border-neutral-200 pb-8 text-left dark:border-neutral-800 md:mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="my-4 h-px w-12 origin-left bg-gold-600"
      />
      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </motion.div>
  );
}
