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
    name: "Certification Cisco",
    organization: "Cisco Networking Academy",
    date: "11 février 2026",
    description: "Cours de réseau consacré à la configuration des équipements Cisco et au dépannage.",
    documentUrl: "/certifications/certification-cisco.pdf",
  },
  {
    id: "certification-docker",
    name: "Certification Docker",
    organization: "Organisme à préciser",
    date: "7 avril 2026",
    description: "Cours sur la création et l'administration d'applications conteneurisées avec Docker.",
    documentUrl: "/certifications/certification-docker.pdf",
  },
  {
    id: "cours-azure",
    name: "Cours Azure",
    organization: "Microsoft Learn",
    date: "3 mars 2026",
    description: "Découverte des services cloud et des concepts fondamentaux de Microsoft Azure.",
    documentUrl: "/certifications/certification-azure.pdf",
  },
  {
    id: "certification-grafana",
    name: "Certification Grafana",
    organization: "Grafana Labs",
    date: "7 mai 2026",
    description: "Cours sur la création de tableaux de bord et la visualisation des données de supervision.",
  },
  {
    id: "certification-cybersecurite",
    name: "Certification Zabbix",
    organization: "Zabbix",
    date: "Date à préciser",
    description: "Cours de supervision pour suivre l'état des systèmes, services et équipements avec Zabbix.",
  },
];
