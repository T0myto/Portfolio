export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  description: string;
  documentUrl?: string;
  badgeUrl?: string;
  /** Variante du badge pour le thème clair, si le badge d’origine est prévu pour un fond sombre. */
  badgeLightUrl?: string;
  /** Logo de l’organisme, affiché quand il n’existe pas de badge pour la certification. */
  logoUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "certification-voltaire",
    name: "Certification Voltaire",
    organization: "Projet Voltaire",
    date: "13 octobre 2026",
    description: "Attestation de participation à une formation consacrée à l’orthographe.",
    documentUrl: "/certifications/certification-voltaire.pdf",
    badgeUrl: "/certifications/badge-voltaire.svg",
    badgeLightUrl: "/certifications/badge-voltaire-light.svg",
  },
  {
    id: "certification-reseau",
    name: "Network Addressing and Basic Troubleshooting",
    organization: "Cisco Networking Academy",
    date: "11 février 2026",
    description: "Cours consacré à l’adressage réseau et au dépannage de base.",
    documentUrl: "/certifications/certification-cisco.pdf",
    badgeUrl: "/certifications/badge-cisco-reseau.png",
  },
  {
    id: "certification-cybersecurite",
    name: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    date: "20 octobre 2026",
    description: "Cours d’introduction à la cybersécurité suivi dans le cadre du programme Cisco Networking Academy.",
    documentUrl: "/certifications/certification-cybersecurite.pdf",
    badgeUrl: "/certifications/badge-cisco-cybersecurite.png",
  },
  {
    id: "certification-docker",
    name: "Certification Docker",
    organization: "Docker Foundations Course",
    date: "7 avril 2026",
    description: "Cours sur la création et l'administration d'applications conteneurisées avec Docker.",
    documentUrl: "/certifications/certification-docker.pdf",
    logoUrl: "/certifications/logo-docker.svg",
  },
  {
    id: "cours-azure",
    name: "Cours Azure",
    organization: "Microsoft Learn",
    date: "3 mars 2026",
    description: "Découverte des services cloud et des concepts fondamentaux de Microsoft Azure.",
    documentUrl: "/certifications/certification-azure.pdf",
    logoUrl: "/certifications/logo-azure.svg",
  },
  {
    id: "certification-grafana",
    name: "Certification Grafana",
    organization: "Grafana Labs",
    date: "7 mai 2026",
    description: "Cours sur la création de tableaux de bord et la visualisation des données de supervision.",
    logoUrl: "/certifications/logo-grafana.svg",
  },
  {
    id: "certification-ccna",
    name: "Certification CCNA",
    organization: "Cisco Networking Academy",
    date: "À venir",
    description: "Certification Cisco Certified Network Associate (CCNA) prévue.",
    logoUrl: "/certifications/logo-cisco-ccna.svg",
  },
  {
    id: "certification-zabbix",
    name: "Certification Zabbix",
    organization: "Zabbix",
    date: "À venir",
    description: "Certification Zabbix prévue pour la fin de l'année scolaire.",
    logoUrl: "/certifications/logo-zabbix.svg",
  },
];
