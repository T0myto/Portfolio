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
      className="text-center mb-16"
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
        className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { opacity: 0, scaleX: 0.6 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="mx-auto mt-5 mb-5 h-1 w-12 origin-center rounded-full bg-blue-500"
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
          className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </motion.div>
  );
}
