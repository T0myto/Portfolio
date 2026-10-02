"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionFadeProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export function MotionFade({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: MotionFadeProps) {
  const directions = {
    up: { y: 16, x: 0 },
    left: { y: 0, x: 16 },
    right: { y: 0, x: -16 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
