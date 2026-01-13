"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/T0myto" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tom-maudet-244aa7336/" }
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs text-neutral-600 dark:text-neutral-400">© 2025 Tom Maudet</p>
          </div>

          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-blue-500 hover:border-blue-500 transition-all"
                title={social.label}>
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
