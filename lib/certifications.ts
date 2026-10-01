export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "certification-reseau",
    name: "Certification réseau (exemple à remplacer)",
    organization: "Organisme à préciser",
    date: "AAAA",
    description: "Remplacez cette fiche par les informations de votre certification.",
  },
  {
    id: "certification-cybersecurite",
    name: "Certification cybersécurité (exemple à remplacer)",
    organization: "Organisme à préciser",
    date: "AAAA",
    description: "Ajoutez ici une courte description ou les compétences validées.",
  },
];
