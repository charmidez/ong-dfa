import {  SituationONGTogo2025,
          RoleEssentielONG,
          RetraitONGNonConformes,
          CollaborationInternationaleONG } from "@/app/actualite/actualiteComponent";

export const actualitesData = [
  {
    slug: "situation-des-ong-au-togo-2025",
    titre: "Quel est l’état actuel des ONG au Togo en 2025 ?",
    date: "10 Juin 2025",
    image: "/images/featured/ong-togo.jpg",
    resume: `Le ministère de l’Administration territoriale a publié une mise à jour sur la régularisation des ONG au Togo. Sur plus de 700 ONG recensées, seules 312 sont en conformité avec la loi.`,
    component: <SituationONGTogo2025 />,
    auteur: "Charmidez A.",
  },
  {
    slug: "role-essentiel-ong-togo",
    titre: "Le rôle essentiel des ONG dans le développement local au Togo",
    date: "15 Juin 2025",
    image: "/images/featured/developpement-local.jpg",
    resume: `Les ONG jouent un rôle clé dans la santé, l’éducation et le développement rural au Togo, souvent là où l’État peine à intervenir. Focus sur leurs apports concrets.`,
    component: <RoleEssentielONG />,
    auteur: "Charmidez A.",
  },
  {
    slug: "retrait-ong-non-conformes",
    titre: "Retrait d’agrément : les ONG non conformes sommées de se mettre en règle",
    date: "22 Juin 2025",
    image: "/images/featured/retrait-ong.jpg",
    resume: `Un récent communiqué du gouvernement togolais exige des ONG une régularisation stricte sous peine de retrait d’agrément. Cette mesure vise à mieux encadrer le secteur.`,
    component: <RetraitONGNonConformes />,
    auteur: "Charmidez A.",
  },
  {
    slug: "collaboration-internationale-ong",
    titre: "ONG internationales : quels partenariats au Togo en 2025 ?",
    date: "28 Juin 2025",
    image: "/images/featured/ong-internationales.jpeg",
    resume: `De nombreuses ONG internationales telles que Plan International ou Handicap International continuent leurs partenariats au Togo malgré un contexte réglementaire plus strict.`,
    component: <CollaborationInternationaleONG />,
    auteur: "Charmidez A.",
  },
]



export const domaines = [
  {
    titre: "FORMATION",
    bgColor: "bg-purple-800",
    icon: "/icons/education.png",
  },
  {
    titre: "SANTÉ",
    bgColor: "bg-green-800",
    icon: "/icons/sante.png",
  },
  {
    titre: "ENVIRONNEMENT",
    bgColor: "bg-cyan-900",
    icon: "/icons/environnement.png",
  },
  {
    titre: "LOGEMENT",
    bgColor: "bg-blue-900",
    icon: "/icons/logement.png",
  },
  {
    titre: "INFRASTRUCTURES",
    bgColor: "bg-red-900",
    icon: "/icons/infrastructure.png",
  },
  {
    titre: "PROMOTION DE LA JEUNE FILLE",
    bgColor: "bg-yellow-600",
    icon: "/icons/fille.png",
  },
];
