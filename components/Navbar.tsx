"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";

const subscribeToMount = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Compétences", href: "/competences" },
  { label: "Expériences", href: "/experiences" },
  { label: "Projets", href: "/projets" },
  { label: "Certifications", href: "/certification" }
];

function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

export function Navbar() {
  const pathname = normalize(usePathname());
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToMount,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 ${
        scrolled || isOpen
          ? "border-neutral-200/80 bg-white/85 backdrop-blur-lg dark:border-neutral-800/80 dark:bg-neutral-950/85"
          : "border-transparent bg-transparent"
      }`}>
      <nav aria-label="Navigation principale" className="page-container relative flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 font-mono text-[11px] font-bold tracking-wide text-white transition-colors group-hover:bg-blue-700 dark:bg-white dark:text-neutral-900">TM</span>
          <span className="text-sm">Tom Maudet</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              }`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">
            {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : <span className="h-[18px] w-[18px]" />}
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-lg bg-neutral-900 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-blue-100 md:inline-flex">
            Contact <ArrowUpRight size={15} />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200 md:hidden">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
              <div className="page-container space-y-1 py-4">
                {[...navItems, { label: "Contact", href: "/contact" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive(item.href) ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
