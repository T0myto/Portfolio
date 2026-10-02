export interface Skill {
  category: string;
  items: string[];
  icon?: string;
}

export const skills: Skill[] = [
  {
    category: "Administration réseaux",
    items: ["TCP/IP", "VLAN", "Routage", "DHCP", "DNS", "NAT", "Cisco", "Aruba", "Ruckus", "Ubiquiti"]
  },
  {
    category: "Administration systèmes",
    items: ["Windows Server", "Active Directory", "Linux / Debian", "Services réseau", "SSH"]
  },
  {
    category: "Virtualisation & infrastructure",
    items: ["Proxmox", "VirtualBox", "Machines virtuelles", "Stockage", "RAID", "Architecture serveur"]
  },
  {
    category: "Conteneurisation & services",
    items: ["Docker", "CasaOS", "Déploiement de services", "Administration de services"]
  },
  {
    category: "Sécurité réseau",
    items: ["Segmentation VLAN", "Pi-hole", "Tailscale", "Accès distant sécurisé"]
  },
  {
    category: "Supervision & automatisation",
    items: ["Grafana", "Node-RED", "PowerShell", "Bash", "cron"]
  },
  {
    category: "IoT & domotique",
    items: ["Home Assistant", "ESP32", "Capteurs", "I²C", "Automatisations"]
  },
  {
    category: "Développement web",
    items: ["HTML / CSS", "JavaScript / TypeScript", "Next.js", "Laravel", "MySQL", "Git"]
  },
  {
    category: "Maintenance informatique",
    items: ["Assemblage PC", "Diagnostic matériel", "Dépannage", "Mesure électronique"]
  },
  {
    category: "Documentation & diagnostic",
    items: ["Analyse de problèmes", "Tests", "Mise en place", "Documentation d'infrastructures"]
  }
];