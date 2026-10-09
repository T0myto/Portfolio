<div align="center">

# Tom Maudet

### Portfolio — Systèmes · Réseaux · Infrastructure

Un aperçu de mon parcours, de mes compétences et des projets que je construis, entre administration informatique, matériel et développement.

<p>
  <img src="https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

[Explorer le site](#-explorer-le-site) · [Voir quelques projets](#-quelques-projets) · [Démarrer en local](#-démarrer-en-local)

</div>

---

## ✨ Le portfolio

J’ai créé ce site pour présenter mon parcours et les sujets sur lesquels je travaille. Il rassemble des projets de formation et des projets personnels autour des réseaux, des systèmes, de la domotique et de l’IoT.

L’interface s’adapte aux mobiles comme aux grands écrans. Elle propose un thème clair ou sombre, des animations discrètes et des pages de détail pour explorer les projets.

## 🧭 Explorer le site

| Page | Contenu |
|:--|:--|
| `/` | Ma présentation et mes domaines d’intérêt |
| `/competences` | Compétences regroupées par catégorie, avec filtre |
| `/experiences` | Stages, missions, technologies et points clés |
| `/projets` | Galerie des projets de formation et personnels |
| `/projets/[slug]` | Détail d’un projet : description, fonctionnalités, défi, solution et résultat |
| `/certification` | Certifications et justificatifs disponibles |
| `/contact` | Liens vers mes profils GitHub et LinkedIn |

## 🚀 Quelques projets

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🖥️ Systèmes et réseaux</h3>
      <ul>
        <li><strong>LogoNet</strong> — Infrastructure hybride Windows Server et Debian, services réseau et documentation technique.</li>
        <li><strong>Réseau interservices</strong> — Réseaux Cisco segmentés, routage, DHCP et Active Directory.</li>
        <li><strong>HomeLab</strong> — Laboratoire personnel en évolution autour de Proxmox, Linux, Docker et de la domotique.</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🔧 Prototypes et automatisation</h3>
      <ul>
        <li><strong>FaciLock</strong> — Serrure connectée prototype avec Raspberry Pi 5, Python et interface React (<a href="https://github.com/constantseg/FaciLock">dépôt GitHub</a>).</li>
        <li><strong>Volets domotiques</strong> — Pilotage de volets Somfy RTS avec ESP32, Home Assistant et Node-RED.</li>
        <li><strong>Surveillance de filaments</strong> — Prototype ESP32 et capteurs pour suivre température et humidité.</li>
      </ul>
    </td>
  </tr>
</table>

## 🧰 Technologies du site

<p>
  <img src="https://img.shields.io/badge/Next.js-Framework-111111?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-Interface-149ECA?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Typage-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Styles-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Lucide-Icônes-F67373?style=flat-square" alt="Lucide" />
</p>

Le site utilise l’App Router de Next.js. Les contenus sont stockés dans des fichiers TypeScript du dépôt : aucune base de données ni aucun service externe ne sont nécessaires pour afficher les pages.

## 🗂️ Arborescence principale

```text
.
├── app/                            # Pages et routes Next.js
│   ├── page.tsx                    # Accueil
│   ├── layout.tsx                  # Mise en page commune et métadonnées
│   ├── competences/
│   │   └── page.tsx                # Compétences et filtre par catégorie
│   ├── experiences/
│   │   └── page.tsx                # Expériences et timeline
│   ├── projets/
│   │   ├── page.tsx                # Galerie des projets
│   │   └── [slug]/
│   │       └── page.tsx            # Détail dynamique d’un projet
│   ├── certification/
│   │   └── page.tsx                # Certifications et documents
│   ├── certifications/
│   │   └── page.tsx                # Page de certifications complémentaire
│   └── contact/
│       └── page.tsx                # Réseaux sociaux
├── components/                     # Composants réutilisés
│   ├── Navbar.tsx                  # Navigation, menu mobile et thème
│   ├── Footer.tsx                  # Pied de page et réseaux sociaux
│   ├── MotionFade.tsx              # Animation d’apparition
│   ├── SectionTitle.tsx            # En-tête de section
│   └── Providers.tsx               # Thème et configuration des animations
├── lib/                            # Données affichées dans le portfolio
│   ├── projects.ts                 # Projets et leurs détails
│   ├── experiences.ts              # Expériences professionnelles
│   ├── certifications.ts           # Certifications et justificatifs
│   └── skills.ts                   # Catégories de compétences
├── public/
│   ├── certifications/             # Justificatifs PDF
│   ├── robots.txt
│   └── sitemap.xml
├── styles/
│   └── globals.css                 # Styles globaux
├── eslint.config.mjs               # Configuration ESLint
├── next.config.js                  # Configuration Next.js
├── package.json                    # Dépendances et scripts npm
├── postcss.config.js               # Configuration PostCSS
├── tailwind.config.ts              # Thème Tailwind CSS
└── tsconfig.json                   # Configuration TypeScript
```

## 💻 Démarrer en local

Il faut disposer de **Node.js 20.9 ou d’une version ultérieure** et de **npm**.

```bash
npm ci
npm run dev
```

Le site est alors accessible à l’adresse [http://localhost:3000](http://localhost:3000).

| Commande | Utilité |
|:--|:--|
| `npm run dev` | Démarrer le serveur de développement |
| `npm run lint` | Vérifier le code avec ESLint |
| `npm run build` | Compiler le projet et vérifier les types |
| `npm start` | Lancer le serveur après compilation |

## ✏️ Mettre à jour le contenu

Les données du portfolio sont séparées des pages afin de faciliter leur modification :

- **Ajouter ou modifier un projet** : compléter l’objet correspondant dans `lib/projects.ts`. Un projet comprend un identifiant, un slug, une catégorie (`course` ou `personal`), ses textes, technologies, fonctionnalités et son état (`completed` ou `in-progress`). Les pages de galerie et de détail sont générées à partir de cette liste.
- **Ajouter une expérience** : renseigner `lib/experiences.ts` avec le poste, l’organisme, la période, les technologies et les missions.
- **Ajouter une compétence** : ajouter une catégorie et ses éléments dans `lib/skills.ts`.
- **Ajouter une certification** : compléter `lib/certifications.ts` et, si un justificatif est disponible, le placer dans `public/certifications/` puis renseigner son chemin public.
- **Modifier l’interface** : les pages se trouvent dans `app/`, les éléments partagés dans `components/` et les styles globaux dans `styles/globals.css`.

## 🤝 Restons en contact

Retrouvez mes autres projets ou contactez-moi sur [GitHub](https://github.com/T0myto) et [LinkedIn](https://www.linkedin.com/in/tom-maudet-244aa7336/).

<div align="center">
  <sub>Portfolio conçu et développé par Tom Maudet.</sub>
</div>
