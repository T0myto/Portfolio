"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

const subscribeToMount = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Compétences", href: "/competences" },
  { label: "Expériences", href: "/experiences" },
  { label: "Projets", href: "/projets" },
  { label: "Certifications", href: "/certification" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToMount,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [isOpen, setIsOpen] = useState(false);

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200/80 bg-white/90 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/90">
      <nav aria-label="Navigation principale" className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-xs font-bold tracking-wide text-white dark:bg-neutral-100 dark:text-neutral-900">TM</span>
          <span className="text-sm sm:text-base">Tom Maudet</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
                }`}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
            className="rounded-lg border border-neutral-200 p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="rounded-lg border border-neutral-200 p-2 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200 md:hidden">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
            <div className="mx-auto max-w-6xl space-y-1 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    pathname === item.href ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white" : "text-neutral-600 dark:text-neutral-400"
                  }`}
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
