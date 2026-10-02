export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Production Virtuel",
    company: "BAO Virtuelle",
    period: "2023 (4 semaines)",
    description: "Découverte du fonctionnement d'une entreprise spécialisée dans la création et la production en environnement virtuel, entre préparation des produits clients et adaptation de code.",
    technologies: ["Développement", "Configuration", "Réalité virtuelle"],
    highlights: [
      "Découverte de l'environnement de production virtuelle, de ses outils et des différentes étapes de préparation d'un projet.",
      "Configuration et préparation de produits destinés aux clients avant leur utilisation dans le cadre des projets de l'entreprise.",
      "Traduction et adaptation d'un code d'un langage de programmation vers un autre, en tenant compte des différences de syntaxe.",
    ],
  },
  {
    id: "2",
    title: "Installation et Maintenance Informatique  ",
    company: "DAD Informatique",
    period: "2024 (6 semaines)",
    description: "Participation aux activités d'un magasin informatique autour de la préparation, de l'entretien et de la maintenance de matériel pour les clients.",
    technologies: ["Matériel informatique", "Assemblage", "Maintenance"],
    highlights: [
      "Assemblage et préparation de machines destinées aux clients, en veillant au bon montage des différents composants.",
      "Nettoyage de machines infectées et remise en état des ordinateurs pris en charge.",
      "Maintenance de matériel informatique et participation aux interventions réalisées sur les machines des clients.",
    ],
  },
  {
    id: "3",
    title: "Technicien SAV",
    company: "Bodet Time & Sport",
    period: "2024 (7 semaines)",
    description: "Découverte du service après-vente et participation à la configuration, aux tests et à la maintenance de matériel électronique et embarqué.",
    technologies: ["Technologie embarquée", "Tests", "Configuration", "Maintenance électronique"],
    highlights: [
      "Configuration de matériel embarqué avant son utilisation ou son retour dans le circuit de service.",
      "Réalisation de tests sur les produits pris en charge afin de vérifier leur fonctionnement.",
      "Participation à la maintenance électronique de produits retournés au service après-vente.",
    ],
  },
  {
    id: "4",
    title: "Technicien Informatique",
    company: "Mairie de Vierzon",
    period: "2026 (7 semaines)",
    description: "Stage de sept semaines au service informatique : interventions réseau, déploiement de matériel et assistance aux utilisateurs.",
    technologies: [
      "Switches Aruba, Ruckus, Alcatel et D-Link",
      "VLAN, PoE et brassage réseau",
      "Wi-Fi et Acrylic Wi-Fi Analyzer",
      "Téléphonie IP",
      "Active Directory",
      "GLPI",
      "Mode kiosque sur tablettes",
      "TFTP",
    ],
    highlights: [
      "Configuration, préparation et remplacement de commutateurs Alcatel, Aruba, Ruckus, D-Link et HP ProCurve, avec reprise de configurations et mises à jour de firmware.",
      "Configuration de switches, de VLAN et de ports ; préparation des migrations pour limiter les interruptions de service.",
      "Installation et remplacement de bornes Wi-Fi, de ponts et d'injecteurs PoE ; mesure et analyse de la couverture Wi-Fi avec Acrylic Wi-Fi Analyzer.",
      "Diagnostic d'incidents réseau sur site : vérification des liaisons et du brassage, redémarrage de switches et mise à jour de plans de baie.",
      "Configuration, enrôlement, mise à jour et changement de VLAN de téléphones IP ; installation d'équipements réseau et d'un routeur 4G.",
      "Déploiement du mode kiosque sur des tablettes et rédaction d'une procédure pour son activation et sa désactivation.",
      "Création et saisie d'un inventaire des équipements réseau dans GLPI.",
      "Préparation de postes et d'ordinateurs portables, mises à jour de logiciels via le serveur Active Directory et installation d'applications sur tablette.",
      "Installation et tests d'équipements de visioconférence et assistance sur des périphériques et imprimantes.",
    ],
  },
];
