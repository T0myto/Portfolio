"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/T0myto" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tom-maudet-244aa7336/" }
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            © {currentYear} Tom Maudet · Portfolio professionnel
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Retrouvez-moi
            </span>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-neutral-300 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-blue-400"
                  title={social.label}
                  aria-label={social.label}>
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
