# Portfolio de Tom Maudet

Ce site présente mon parcours et les projets que je réalise autour des systèmes, des réseaux et de l'informatique. On y retrouve mes compétences, mes expériences, mes certifications et des fiches détaillées de projets de formation et personnels.

Le portfolio est développé avec Next.js et React en TypeScript. L'interface s'adapte aux mobiles et aux ordinateurs, propose un thème clair ou sombre et utilise Framer Motion pour quelques animations.

## Pages

- **Accueil** (`/`) : présentation et domaines qui m'intéressent.
- **Compétences** (`/competences`) : compétences regroupées par catégorie.
- **Expériences** (`/experiences`) : stages et missions, avec les activités réalisées.
- **Projets** (`/projets`) : projets de formation et projets personnels. Chaque projet possède une page de détail.
- **Certifications** (`/certification`) : cours et certifications, avec un lien vers le justificatif lorsqu'il est disponible.
- **Contact** (`/contact`) : liens vers mon GitHub et mon LinkedIn.

Les projets présentés couvrent notamment l'administration système et réseau, la virtualisation, la domotique, l'IoT et le développement. Parmi eux : une infrastructure Windows Server et Debian, un réseau interservices Cisco, le prototype de serrure connectée FaciLock et mon HomeLab.

## Technologies

- Next.js 16 et React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes pour le thème clair/sombre
- Lucide pour les icônes

Les pages utilisent l'App Router de Next.js. Les données du portfolio sont définies dans le projet : aucun service ou base de données externe n'est nécessaire pour afficher les contenus.

## Lancer le projet en local

Il faut disposer de Node.js 20.9 ou d'une version ultérieure, ainsi que de npm.

```bash
npm ci
npm run dev
```

Le site est ensuite accessible à l'adresse [http://localhost:3000](http://localhost:3000).

Commandes utiles :

```bash
npm run lint    # Vérifier le code avec ESLint
npm run build   # Compiler le projet et vérifier les types TypeScript
npm start       # Lancer le serveur après une compilation
```

## Où modifier le contenu

Les informations affichées sur le site sont regroupées dans le dossier `lib/` :

- `projects.ts` : projets, technologies, fonctionnalités et liens éventuels vers leur dépôt ou leur démo.
- `experiences.ts` : expériences, périodes, technologies et missions réalisées.
- `certifications.ts` : certifications, organismes, dates et justificatifs disponibles.
- `skills.ts` : catégories et éléments de compétences.

Les pages se trouvent dans `app/`, et les éléments d'interface partagés (navigation, pied de page et animations) dans `components/`.

## Me retrouver

- [GitHub](https://github.com/T0myto)
- [LinkedIn](https://www.linkedin.com/in/tom-maudet-244aa7336/)
