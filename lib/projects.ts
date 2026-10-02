export interface Project {
  id: string;
  slug: string;
  category: "course" | "personal";
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  github?: string;
  demo?: string;
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    id: "6",
    slug: "infrastructure-logonet",
    category: "course",
    title: "Infrastructure système et réseau LogoNet",
    shortDesc:
      "Conception d'une infrastructure hybride avec annuaire centralisé, services réseau, serveur web et stratégie de sauvegarde.",
    fullDesc:
      "Projet de PPE réalisé en équipe dans le cadre de la formation. Pour répondre aux besoins de l'entreprise fictive LogoNet, le projet prévoit une infrastructure composée d'un contrôleur de domaine Windows Server 2022, de serveurs Debian dédiés aux services réseau et web, ainsi que d'un poste client Windows 10 pour les tests. La documentation couvre l'analyse des besoins, la planification, les procédures de configuration et les vérifications.",
    technologies: [
      "Windows Server 2022",
      "Active Directory",
      "GPO",
      "Debian",
      "Kea DHCP / ISC DHCP",
      "BIND9",
      "Apache2",
      "RAID 5",
      "DNS",
      "Sauvegarde",
    ],
    features: [
      "Conception du domaine Active Directory LogoNet.local avec unités d'organisation, comptes utilisateurs et groupes métiers.",
      "Préparation de lecteurs réseau personnels et partagés, avec leur mappage par stratégies de groupe (GPO).",
      "Configuration d'un service DHCP sous Debian, avec étendue d'adresses, options réseau et réservations.",
      "Configuration de BIND9 et des zones DNS directe et inverse pour les machines du réseau.",
      "Préparation d'un serveur web Apache avec un VirtualHost accessible à l'adresse www.logonet.local.",
      "Étude d'un stockage RAID 5 et de procédures de sauvegarde manuelle et automatisée.",
      "Rédaction de modes opératoires et planification des étapes du projet avec un diagramme de Gantt.",
      "Préparation de tests réseau et client, dont la vérification de l'adressage IP et du DNS.",
    ],
    challenge:
      "Concevoir une infrastructure cohérente associant l'administration centralisée des utilisateurs sous Windows Server et des services réseau sous Linux, tout en prenant en compte la protection et la disponibilité des données.",
    solution:
      "Définir une architecture hybride autour d'un contrôleur de domaine Windows Server 2022 et de serveurs Debian dédiés au DHCP, au DNS, au web et à la sauvegarde, puis documenter les configurations et les tests à réaliser.",
    result:
      "Production d'un dossier technique structuré comprenant l'analyse des besoins, le planning, les procédures d'installation et de configuration, ainsi qu'une démarche de validation du prototype.",
    status: "completed",
  },
  {
    id: "7",
    slug: "reseau-interservices-cisco",
    category: "course",
    title: "Réseau interservices Cisco et Windows Server",
    shortDesc:
      "Conception et mise en place d'un réseau reliant les services Commercial, Technique et Direction.",
    fullDesc:
      "Projet de formation documenté par une maquette Cisco Packet Tracer et une réalisation avec le matériel disponible. L'architecture répartit les services Commercial et Technique sur des réseaux distincts et place les serveurs dans le réseau Direction. Deux routeurs Cisco assurent l'interconnexion des réseaux ; les postes clients et le serveur Windows sont utilisés pour configurer et tester les services.",
    technologies: [
      "Cisco Packet Tracer",
      "Routeurs Cisco 2911",
      "Switches Cisco 2960",
      "Windows Server 2019",
      "DHCP",
      "Routage",
      "IP Helper",
      "Active Directory",
      "GPO",
    ],
    features: [
      "Conception d'une topologie pour les réseaux Commercial, Technique et Direction, avec plan d'adressage IP.",
      "Interconnexion des réseaux à l'aide de deux routeurs Cisco et de liaisons série.",
      "Configuration du routage entre les sous-réseaux et du relais DHCP avec IP Helper.",
      "Création de pools DHCP pour attribuer automatiquement leur configuration réseau aux clients.",
      "Configuration de Windows Server 2019 pour les services DHCP et Active Directory.",
      "Mise en place de stratégies de groupe (GPO) sur les postes clients et d'un répertoire de partage pour l'entreprise.",
      "Réalisation de tests de connectivité entre les postes clients et le serveur.",
      "Documentation de l'analyse des besoins, de la maquette, des configurations et des tests.",
    ],
    challenge:
      "Faire communiquer plusieurs services répartis sur des réseaux différents tout en centralisant l'adressage et l'administration des utilisateurs et des postes.",
    solution:
      "Construire une architecture segmentée reliée par des routeurs Cisco, puis configurer DHCP, le routage et le relais DHCP, ainsi que les services Active Directory et les GPO sous Windows Server.",
    result:
      "Réalisation d'une maquette réseau et d'une mise en œuvre avec le matériel Cisco disponible, accompagnées d'une documentation technique et de tests de communication.",
    status: "completed",
  },
  {
    id: "8",
    slug: "site-ecole-musique-symphonie-nomade",
    category: "course",
    title: "Site vitrine — La Symphonie Nomade",
    shortDesc:
      "Conception d'un site vitrine pour une école de musique associative proposant des cours accessibles à tous.",
    fullDesc:
      "Projet de formation autour de la création d'un site web statique pour La Symphonie Nomade, une école de musique associative fictive. Le cahier des charges et la maquette définissent l'identité du site, les informations de l'association et la présentation de ses enseignements. Les documents du projet comprennent également une arborescence et des ressources audio et visuelles.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5.3.8"],
    features: [
      "Présentation de l'association, de son engagement et de son identité.",
      "Mise en avant de trois enseignements : piano, chant et guitare.",
      "Présentation des cours avec leur tarif mensuel, leur durée et leur rythme hebdomadaire.",
      "Prévision d'un accès « Lire plus » pour consulter les informations détaillées de chaque cours et les places disponibles.",
      "Organisation des informations pratiques et des coordonnées de l'école.",
      "Préparation d'une maquette et d'une arborescence pour structurer le site.",
      "Utilisation de ressources visuelles et audio associées aux cours.",
    ],
    challenge:
      "Transformer le cahier des charges d'une école de musique en un site vitrine clair, accueillant et organisé, permettant de découvrir les cours et de trouver facilement les informations pratiques.",
    solution:
      "Définir l'identité et la structure du site à l'aide d'une maquette et d'une arborescence, puis préparer une réalisation web statique avec HTML, CSS, JavaScript et Bootstrap.",
    result:
      "Un projet de site vitrine documenté pour La Symphonie Nomade, avec une maquette, une structure de pages et des contenus prévus pour présenter l'association, ses cours et ses coordonnées.",
    status: "completed",
  },
  {
    id: "1",
    slug: "facilock",
    category: "course",
    title: "FaciLock",
    shortDesc:
      "Prototype de serrure connectée avec reconnaissance faciale sur Raspberry Pi 5 et interface de contrôle.",
    fullDesc:
      "Conception d'un prototype associant un Raspberry Pi 5, un programme Python d'analyse faciale et le câblage des éléments du système de serrure. Le projet comprend également une interface React destinée à compléter l'expérience de contrôle. Il permet de travailler sur l'intégration entre logiciel, matériel et interface utilisateur.",
    technologies: [
      "Python",
      "Raspberry Pi 5",
      "SSH",
      "React",
    ],
    features: [
      "Préparation et configuration du Raspberry Pi 5 pour le prototype.",
      "Développement en Python du traitement lié à la reconnaissance faciale.",
      "Câblage et intégration des éléments matériels du système de serrure.",
      "Développement d'une interface React associée au projet.",
      "Connexion et administration du Raspberry Pi à distance via SSH.",
    ],
    challenge:
      "Faire fonctionner ensemble un traitement de reconnaissance faciale, un ordinateur monocarte et les éléments matériels d'une serrure connectée.",
    solution:
      "Développer le traitement en Python sur Raspberry Pi 5, préparer le câblage du prototype et réaliser une interface React pour compléter le système.",
    result:
      "Un prototype de serrure connectée qui met en pratique l'intégration d'un traitement Python, d'un Raspberry Pi 5, d'une interface web et d'éléments matériels.",
    status: "completed",
  },
  {
    id: "2",
    slug: "somfy-rts",
    category: "personal",
    title: "Volets Domotiques",
    shortDesc:
      "Intégration de volets Somfy RTS à Home Assistant pour les piloter et automatiser leur fonctionnement.",
    fullDesc:
      "Développement d'un module autour d'un ESP32 pour relier des volets Somfy RTS à Home Assistant. Le projet associe la configuration du microcontrôleur, son intégration au système domotique et des scénarios Node-RED afin de commander les volets selon des conditions définies, comme l'heure.",
    technologies: [
      "Home Assistant",
      "Node-RED",
      "Somfy RTS",
      "ESP32",
      "Arduino IDE",
    ],
    features: [
      "Programmation de l'ESP32 avec l'Arduino IDE pour le prototype de commande.",
      "Intégration du système de volets dans Home Assistant.",
      "Création d'une commande virtuelle pour piloter les volets depuis le système domotique.",
      "Conception d'automatisations Node-RED, notamment selon l'heure.",
      "Expérimentation autour de la communication radio Somfy RTS dans le cadre du projet domotique.",
    ],
    challenge:
      "Ajouter le pilotage domotique et l'automatisation à des volets qui ne sont pas directement connectés au réseau.",
    solution:
      "Réaliser un prototype ESP32 relié à Home Assistant, puis utiliser Node-RED pour organiser les commandes et automatisations.",
    result:
      "Des volets Somfy RTS pilotables depuis Home Assistant et intégrés à des automatisations Node-RED.",
    status: "completed",
  },
  {
    id: "3",
    slug: "esp-div",
    category: "personal",
    title: "Prototype portable ESP32 — expérimentation radio",
    shortDesc:
      "Prototype électronique portable autour d'un ESP32, d'un écran tactile et d'antennes pour expérimenter les technologies radio.",
    fullDesc:
      "Prototype électronique portable construit autour d'un ESP32, d'antennes, d'une alimentation sur batterie et d'un écran tactile. Le projet sert de support à l'apprentissage de l'électronique embarquée et à l'exploration des technologies sans fil, dans un cadre de test qui ne perturbe pas les communications d'autres appareils.",
    technologies: [
      "ESP32",
      "Électronique",
      "Arduino IDE",
    ],
    features: [
      "Assemblage d'un prototype autour d'un ESP32 et de composants électroniques.",
      "Alimentation portable du prototype par batterie.",
      "Utilisation d'un écran tactile comme interface de commande et de retour d'état.",
      "Expérimentation et apprentissage autour des communications radio dans un environnement de test contrôlé.",
    ],
    challenge:
      "Assembler un prototype embarqué compact et rendre ses fonctions accessibles depuis une interface intégrée.",
    solution:
      "Associer un ESP32, des antennes, une alimentation sur batterie et un écran tactile dans un prototype électronique portable.",
    result:
      "Un prototype portable servant de support à l'expérimentation avec l'ESP32, l'électronique embarquée et les technologies radio, sans brouillage des réseaux.",
    status: "in-progress",
  },
  {
    id: "4",
    slug: "home-lab",
    category: "personal",
    title: "HomeLab",
    shortDesc:
      "Infrastructure domestique évolutive inspirée des environnements d'entreprise : virtualisation, réseau, domotique, stockage et supervision.",
    fullDesc:
      "Construction progressive d'un laboratoire informatique à domicile, conçu pour expérimenter l'administration système et réseau à une échelle proche d'une petite entreprise. Le socle repose sur un serveur d'occasion à budget maîtrisé, Proxmox VE et des machines virtuelles ou conteneurs isolant les services. Le stockage actuel comprend deux disques de 1 To ; un NAS DIY à cinq disques de 1 To, un switch manageable et un routeur/pare-feu dédié font partie des évolutions envisagées. Le Homelab héberge ou prévoit des services de virtualisation, de réseau, de domotique et de stockage. Il doit également accueillir la supervision Grafana et l'intégration des capteurs ESP32/SHT31 du projet de surveillance des filaments dans Home Assistant.",
    technologies: [
      "Proxmox",
      "Linux",
      "Machines virtuelles",
      "Docker",
      "CasaOS",
      "Tailscale",
      "Pi-hole",
      "Home Assistant",
      "Node-RED",
      "Nextcloud",
      "Grafana",
      "VLAN",
      "Routeur / pare-feu",
      "NAS DIY",
    ],
    features: [
      "Socle physique à budget maîtrisé : serveur PC ou mini-PC d'occasion (budget cible d'environ 120 € maximum) et stockage actuel de 2 × 1 To.",
      "Virtualisation avec Proxmox VE pour isoler les rôles et services dans des machines virtuelles, conteneurs LXC et conteneurs Docker.",
      "Déploiement et administration de services sous Linux, avec Docker et CasaOS pour héberger les applications.",
      "Services réseau personnels avec Pi-hole pour le filtrage DNS et Tailscale pour l'accès distant privé.",
      "Environnement domotique autour de Home Assistant et Node-RED : éclairages, volets, capteurs et automatisations, avec un tableau de bord centralisé.",
      "Intégration envisagée du prototype ESP32 et des deux capteurs SHT31 afin de consulter les mesures de température et d'humidité depuis Home Assistant.",
      "Supervision prévue avec Grafana : ressources CPU et mémoire, stockage, VMs, services, équipements réseau et relevés des capteurs.",
      "Évolution réseau envisagée avec un switch manageable (notamment un TP-Link Omada 8 ports), un routeur/pare-feu dédié, du DNS interne, des VLAN, du routage inter-VLAN, du NAT et des règles de filtrage.",
      "Segmentation cible à étudier : VLAN Administration, Serveurs, Postes, IoT/Domotique, Invités et NAS.",
      "Projet de NAS DIY avec 5 × 1 To pour les fichiers, médias, ISO et sauvegardes ; choix du RAID ou du système de fichiers à définir selon le matériel final.",
      "Mise en place progressive d'une stratégie de sauvegarde : automatisation, snapshots, réplication et tests de restauration des VMs.",
      "Accès distant et publication des services avec Tailscale, le domaine personnel et Cloudflare Tunnel, en évitant d'exposer directement les interfaces d'administration.",
      "Étude d'une tablette murale en mode kiosque, par exemple avec Fully Kiosk, pour piloter le tableau de bord domotique.",
    ],
    challenge:
      "Faire évoluer un serveur domestique à budget limité en une infrastructure structurée, sécurisée et maintenable, tout en séparant les services et en préparant les évolutions de stockage, de réseau et de supervision.",
    solution:
      "S'appuyer sur Proxmox VE pour isoler les services en VMs et conteneurs, puis faire évoluer progressivement le réseau vers une architecture segmentée avec switch manageable et routeur/pare-feu. Déployer les services Linux et Docker, centraliser la domotique dans Home Assistant, utiliser Tailscale pour l'accès privé, et construire une feuille de route pour le NAS, Grafana et les sauvegardes testées.",
    result:
      "Un HomeLab personnel en cours d'évolution, avec un socle Proxmox et des services réseau et domotiques, servant de terrain pratique pour la virtualisation, Docker, l'administration Linux et l'accès distant. Les prochaines étapes documentées portent sur le NAS DIY, la segmentation VLAN, le pare-feu, la supervision Grafana et les sauvegardes restaurables.",
    status: "in-progress",
  },
  {
    id: "9",
    slug: "hebergement-portfolio-cloudflare",
    category: "personal",
    title: "Hébergement du portfolio sur Homelab",
    shortDesc:
      "Publication de ce portfolio depuis mon Homelab, via Cloudflare Tunnel et le domaine tom-maudet.fr.",
    fullDesc:
      "Déploiement du portfolio Next.js sur une infrastructure Homelab personnelle et publication du service sur Internet à l'aide de Cloudflare Tunnel. Le domaine tom-maudet.fr fournit une adresse personnalisée pour accéder au site.",
    technologies: [
      "Next.js",
      "Homelab",
      "Cloudflare Tunnel",
      "Nom de domaine",
      "tom-maudet.fr",
    ],
    features: [
      "Hébergement du portfolio Next.js sur l'infrastructure Homelab personnelle.",
      "Publication de l'application sur Internet via Cloudflare Tunnel.",
      "Accès au portfolio avec le nom de domaine tom-maudet.fr.",
      "Mise en pratique de l'hébergement et de l'exposition d'un service web personnel.",
    ],
    challenge:
      "Rendre le portfolio accessible publiquement depuis une infrastructure hébergée à domicile, avec une adresse web personnalisée.",
    solution:
      "Héberger le site Next.js sur le Homelab et utiliser Cloudflare Tunnel pour le relier au domaine tom-maudet.fr.",
    result:
      "Le portfolio est accessible sur Internet depuis tom-maudet.fr et s'appuie sur l'infrastructure personnelle du Homelab.",
    status: "completed",
  },
  {
    id: "10",
    slug: "surveillance-temperature-humidite-filaments",
    category: "personal",
    title: "Surveillance de température et d'humidité des filaments",
    shortDesc:
      "Prototype IoT à ESP32 pour surveiller les conditions de stockage de filaments 3D dans deux compartiments.",
    fullDesc:
      "Conception et prototypage d'un système électronique embarqué dédié au suivi des conditions de conservation de filaments pour imprimante 3D. Un ESP32 lit deux capteurs SHT31, chacun placé dans un compartiment de stockage, et affiche les mesures de température et d'humidité en temps réel sur un écran OLED SSD1306. Le projet inclut la mise en œuvre et le diagnostic du bus I²C partagé par plusieurs périphériques.",
    technologies: [
      "ESP32",
      "Capteurs SHT31",
      "OLED SSD1306",
      "I²C",
      "Arduino IDE",
      "Breadboard",
      "Prototypage électronique",
    ],
    features: [
      "Mesure de la température et de l'humidité dans deux compartiments de stockage.",
      "Lecture de deux capteurs SHT31 avec le même ESP32.",
      "Affichage en temps réel des mesures sur un écran OLED SSD1306.",
      "Utilisation d'un bus I²C partagé entre plusieurs périphériques.",
      "Diagnostic des problèmes de communication et d'adressage I²C.",
      "Assemblage et test d'un prototype électronique sur breadboard.",
    ],
    challenge:
      "Lire plusieurs périphériques I²C sur un même système embarqué et obtenir des mesures fiables pour comparer les conditions dans deux compartiments.",
    solution:
      "Programmer l'ESP32 avec l'Arduino IDE pour interroger les deux capteurs SHT31, gérer leur communication sur le bus I²C et présenter les relevés sur un écran OLED SSD1306.",
    result:
      "Un prototype IoT qui mesure et affiche en temps réel la température et l'humidité de deux espaces de stockage, tout en mettant en pratique le diagnostic d'un bus I²C multi-périphériques.",
    status: "in-progress",
  },
  {
    id: "11",
    slug: "infrastructure-reseau-cakebio",
    category: "course",
    title: "Infrastructure réseau CakeBio",
    shortDesc:
      "Conception d'un réseau d'entreprise segmenté en VLAN avec simulation Packet Tracer et services Active Directory.",
    fullDesc:
      "Projet de formation en cours visant à concevoir et déployer l'infrastructure réseau de CakeBio. Le plan prévoit trois réseaux distincts pour la Production, le Marketing et le Commercial, ainsi qu'un serveur placé dans le VLAN Commercial. Le travail comprend la planification, le schéma réseau, le plan d'adressage, la simulation de la configuration des équipements et des tests, puis la mise en place d'unités d'organisation et de répertoires avec Active Directory.",
    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "Adressage IPv4",
      "Routage",
      "DHCP",
      "Active Directory",
      "Switches",
      "Routeurs",
    ],
    features: [
      "Segmentation du réseau en VLAN Production (10), Marketing (20) et Commercial (30).",
      "Définition des sous-réseaux IPv4 et du plan d'adressage des équipements.",
      "Conception de l'interconnexion des réseaux par des routeurs et une liaison série.",
      "Simulation prévue de la configuration des switches, des routeurs et du service DHCP dans Packet Tracer.",
      "Préparation de tests de communication entre les réseaux simulés.",
      "Organisation du service Active Directory avec des unités d'organisation.",
      "Création et attribution de répertoires pour les utilisateurs ou services.",
      "Planification du projet et documentation des étapes de déploiement.",
    ],
    challenge:
      "Concevoir une infrastructure cohérente pour plusieurs services de l'entreprise, avec des réseaux séparés, une communication inter-VLAN et une administration centralisée.",
    solution:
      "Définir un plan d'adressage et une architecture segmentée en VLAN, préparer leur simulation dans Packet Tracer et organiser les comptes et répertoires à l'aide d'Active Directory.",
    result:
      "Projet en cours, documenté par un plan réseau, un adressage IPv4, une simulation et des étapes de mise en place des services réseau et d'annuaire.",
    status: "completed",
  },
];
