import ActualiteDclicOIF, {
  SituationONGTogo2025,
  AppelCandidatureFilles2025,
} from "@/app/actualites/actualiteComponent";

export const actualitesData = [
  {
    slug: "situation-des-ong-au-togo-2025",
    titre: "Quel est l’état actuel des ONG au Togo en 2025 ?",
    date: "2025-06-10",
    image: "/images/featured/ong-togo.jpg",
    resume: `Le ministère de l’Administration territoriale a publié une mise à jour sur la régularisation des ONG au Togo. Sur plus de 700 ONG recensées, seules 312 sont en conformité avec la loi.`,
    component: <SituationONGTogo2025 />,
    auteur: "Communication ONG DFA",
  },

  {
    slug: "appel-candidatures-filles-commandes-2025",
    titre: "Appel à candidature – Filles aux commandes 2025",
    date: "2025-07-02",
    image: "/images/featured/candidature.jpeg",
    resume: `Former, accompagner et propulser une génération de jeunes filles leaders`,
    component: <AppelCandidatureFilles2025 />,
    auteur: "Communication ONG DFA",
  },

    {
    slug: "appel-candidatures-programme-d-clic-2025",
    titre: "Appel à candidatures – Programme D-CLIC de l’OIF",
    date: "2025-07-07",
    image: "/images/featured/numeric.jpeg",
    resume: `Formez-vous au numérique avec l’OIF`,
    component: <ActualiteDclicOIF />,
    auteur: "Communication ONG DFA",
  },
];
