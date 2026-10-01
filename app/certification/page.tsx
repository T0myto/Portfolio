import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { certifications } from "@/lib/certifications";
import { Award } from "lucide-react";

export default function CertificationPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Mes certifications"
          subtitle="Exemples à remplacer par vos certifications et compétences validées."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((certification, index) => (
            <MotionFade key={certification.id} delay={index * 0.15}>
              <article className="h-full p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-xs font-medium">
                    Exemple à remplacer
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2">{certification.name}</h2>
                <p className="text-blue-500 font-semibold mb-4">
                  {certification.organization}
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                    {" "}
                    · {certification.date}
                  </span>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {certification.description}
                </p>
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </div>
  );
}
