import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { certifications } from "@/lib/certifications";
import { ArrowUpRight, Award, Calendar, FileText } from "lucide-react";
import Image from "next/image";

export default function CertificationPage() {
  const hasDatedDocument = (certification: (typeof certifications)[number]) =>
    Boolean(
      certification.documentUrl &&
        certification.date !== "Date à préciser" &&
        certification.date !== "AAAA"
    );
  const orderedCertifications = [...certifications].sort(
    (a, b) =>
      Number(b.id === "certification-voltaire") -
        Number(a.id === "certification-voltaire") ||
      Number(hasDatedDocument(b)) - Number(hasDatedDocument(a))
  );

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="page-container">
        <SectionTitle
          eyebrow="Formation continue"
          title="Mes certifications"
          subtitle="Découvrez mes certifications et formations en orthographe, réseaux, cybersécurité, cloud et outils d’infrastructure, ainsi que les certifications que je prépare."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {orderedCertifications.map((certification, index) => {
            const upcoming = certification.date === "À venir";
            // Badge prévu pour un fond sombre : variante claire en thème clair, fond sombre en thème sombre.
            const hasLightVariant = Boolean(certification.badgeLightUrl);
            const badgeAlt =
              certification.id === "certification-voltaire"
                ? "Logo officiel du Projet Voltaire"
                : `Badge ${certification.organization} : ${certification.name}`;

            return (
              <MotionFade key={certification.id} delay={Math.min(index, 3) * 0.05}>
                <article
                  className={`card flex h-full flex-col p-6 sm:p-7 ${
                    upcoming ? "border-dashed bg-neutral-50/60 dark:bg-neutral-900/30" : ""
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border ${
                        hasLightVariant
                          ? "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950"
                          : "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-100"
                      }`}
                    >
                      {certification.badgeUrl ? (
                        <>
                          {certification.badgeLightUrl && (
                            <Image
                              src={certification.badgeLightUrl}
                              alt={badgeAlt}
                              width={64}
                              height={64}
                              className="h-14 w-14 object-contain dark:hidden"
                            />
                          )}
                          <Image
                            src={certification.badgeUrl}
                            alt={badgeAlt}
                            width={64}
                            height={64}
                            className={`h-14 w-14 object-contain ${hasLightVariant ? "hidden dark:block" : ""}`}
                          />
                        </>
                      ) : (
                        <Award size={24} className="text-blue-700" aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                        {certification.organization}
                      </p>
                      <h2 className="mt-1 text-lg font-semibold leading-snug">{certification.name}</h2>
                      <p
                        className={`mt-2 inline-flex items-center gap-1.5 font-mono text-xs ${
                          upcoming ? "text-amber-700 dark:text-amber-400" : "text-neutral-500"
                        }`}
                      >
                        <Calendar size={13} aria-hidden="true" />
                        {upcoming ? "En préparation" : certification.date}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {certification.description}
                  </p>
                  {certification.documentUrl && (
                    <a
                      href={certification.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-neutral-800 transition-colors hover:text-blue-700 dark:text-neutral-200 dark:hover:text-blue-400"
                    >
                      <FileText size={16} />
                      Consulter le justificatif
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </article>
              </MotionFade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
