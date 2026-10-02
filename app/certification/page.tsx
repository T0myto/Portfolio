import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { certifications } from "@/lib/certifications";
import { ArrowUpRight, Award, FileText } from "lucide-react";

export default function CertificationPage() {
  const hasDatedDocument = (certification: (typeof certifications)[number]) =>
    Boolean(
      certification.documentUrl &&
        certification.date !== "Date à préciser" &&
        certification.date !== "AAAA"
    );
  const orderedCertifications = [...certifications].sort(
    (a, b) => Number(hasDatedDocument(b)) - Number(hasDatedDocument(a))
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Mes certifications"
          subtitle="Certifications et cours en ligne que j'ai obtenus pour valider mes compétences et connaissances dans le domaine de l'informatique et du développement web."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {orderedCertifications.map((certification, index) => (
            <MotionFade key={certification.id} delay={index * 0.15}>
              <article className="h-full p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md">
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
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-blue-700 dark:hover:text-blue-400"
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
