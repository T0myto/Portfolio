import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { certifications } from "@/lib/certifications";
import { ArrowUpRight, Award, FileText } from "lucide-react";

export default function CertificationPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Mes certifications"
          subtitle="Certifications et cours en ligne que j'ai obtenus pour valider mes compétences et connaissances dans le domaine de l'informatique et du développement web."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((certification, index) => (
            <MotionFade key={certification.id} delay={index * 0.15}>
              <article className="h-full p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Award size={24} />
                  </div>
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
                {certification.documentUrl && (
                  <a
                    href={certification.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 dark:text-blue-400"
                  >
                    <FileText size={17} />
                    Consulter le justificatif
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </div>
  );
}
