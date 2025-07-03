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
    titre: "PROTECTION DE LA PETITE ENFANCE",
    bgColor: "bg-yellow-600",
    icon: "/icons/children-svgrepo-com.svg",
  },
];

export const motDeBienvenue = {
  titre : "MOT DE BIENVENUE",
  titreText : "Chers amis, partenaires et sympathisants," ,
  description : [
    `C’est avec une grande joie que nous vous ouvrons les portes de notre vision et de nos engagements. 
    À DFA ONG, nous portons une conviction forte : chaque être humain, quelle que soit son origine ou sa condition, 
    mérite une chance réelle de réussir et de contribuer activement au développement de sa communauté. 
    Notre mission ne saurait se réaliser sans la solidarité, la générosité et la mobilisation collective. 
    Ensemble, en unissant nos forces, nous avons le pouvoir de transformer durablement des vies, de créer des opportunités 
    et de semer l’espoir là où il semble absent.`,

    `Notre organisation travaille sans relâche pour bâtir un avenir plus juste, où les jeunes — notamment les plus démunis et marginalisés — 
    ne sont plus condamnés à l’oubli ni à la précarité. 
    À travers des actions concrètes dans les domaines de l’éducation, de la formation, de la santé, de l’environnement et du développement local, 
    nous visons à éveiller, former et accompagner cette jeunesse souvent négligée mais pleine de potentiel. Il s’agit non seulement d’apporter une aide immédiate, 
    mais aussi de construire des bases solides pour une autonomisation durable.`,

    `Nous vous invitons donc à rejoindre ce mouvement porteur d’espoir. En soutenant DFA ONG, vous participez activement à une œuvre noble et nécessaire : 
    celle de réveiller les consciences, de briser les chaînes de l’exclusion et d’ouvrir la voie à une société où chaque jeune a les moyens de rêver, 
    d’agir et de réussir. Merci de marcher à nos côtés, merci de croire, comme nous, en un avenir où la dignité et les droits de chacun sont pleinement respectés.`
  ]
}

export const sliderData = {
  titre : "Ensemble, construisons un avenir meilleur",
  description : `Notre ONG s'engage à améliorer les conditions de vie des populations
            vulnérables à travers des projets concrets et durables.`
}
