"use client";

import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "Tom Maudet",
    description: "Connectez-vous avec moi professionnellement",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tom-maudet-244aa7336/",
  },
  {
    name: "GitHub",
    handle: "@T0myto",
    description: "Consultez mes projets open source et contributions",
    icon: Github,
    href: "https://github.com/T0myto",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="page-container">
        <SectionTitle
          eyebrow="Contact"
          title="Travaillons ensemble"
          subtitle="Vous pouvez me contacter via mes réseaux sociaux professionnels"
        />

        <div className="grid max-w-4xl gap-5 md:grid-cols-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <MotionFade key={social.name} delay={index * 0.08}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex h-full flex-col p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-neutral-400 transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-8 text-xl font-semibold">{social.name}</h2>
                  <p className="mt-0.5 font-mono text-sm text-neutral-500">{social.handle}</p>
                  <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {social.description}
                  </p>
                </a>
              </MotionFade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
