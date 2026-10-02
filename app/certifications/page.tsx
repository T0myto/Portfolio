"use client";

import { Award } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";

const certificationPlaceholders = [1, 2, 3];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Mes certifications"
          subtitle="Certifications et formations professionnelles"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificationPlaceholders.map((placeholder, index) => (
            <MotionFade key={placeholder} delay={index * 0.1}>
              <article className="h-full min-h-56 p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl flex flex-col">
                <Award size={28} className="text-blue-500 mb-5" aria-hidden="true" />
                <h2 className="text-lg font-semibold">Certification à ajouter</h2>
                <dl className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex justify-between gap-3">
                    <dt>Organisme</dt>
                    <dd>À renseigner</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Date</dt>
                    <dd>À renseigner</dd>
                  </div>
                </dl>
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </div>
  );
}