import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Compétences", href: "/competences" },
  { label: "Expériences", href: "/experiences" },
  { label: "Projets", href: "/projets" },
  { label: "Certifications", href: "/certification" },
  { label: "Contact", href: "/contact" }
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/T0myto" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tom-maudet-244aa7336/" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="page-container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 font-mono text-[11px] font-bold text-white dark:bg-white dark:text-neutral-900">TM</span>
              <span className="text-sm font-semibold text-neutral-900 dark:text-white">Tom Maudet</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Technicien systèmes, réseaux & infrastructure. Conception, déploiement et administration d’environnements fiables et sécurisés.
            </p>
          </div>

          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {currentYear} Tom Maudet. Tous droits réservés.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-neutral-300 hover:text-blue-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-blue-400"
                title={social.label}
                aria-label={social.label}>
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
