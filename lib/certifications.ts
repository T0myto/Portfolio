export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  description: string;
  documentUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "certification-reseau",
    name: "Certification Cisco CCNA",
    organization: "Cisco Networking Academy",
    date: "2027",
    description: "Cette certification valide les compétences en réseau, y compris la configuration, la gestion des réseaux, et la résolution de problèmes.",
    documentUrl: "/certifications/certification-cisco.pdf",
  },
  {
    id: "certification-cybersecurite",
    name: "Certification cybersécurité (exemple à remplacer)",
    organization: "Organisme à préciser",
    date: "AAAA",
    description: "Ajoutez ici une courte description ou les compétences validées.",
  },
  {
    id: "certification-docker",
    name: "Certification Docker",
    organization: "Organisme à préciser",
    date: "Date à préciser",
    description: "Justificatif de certification Docker.",
    documentUrl: "/certifications/certification-docker.pdf",
  },
];
