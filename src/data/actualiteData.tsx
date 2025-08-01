import {
  ArticleVIR,
  ActualiteDclicOIF,
  SituationONGTogo2025,
  AppelCandidatureFilles2025,
  RencontreHorizonIA,
  ArticleEFH,
  ArticleCertificatOIF,
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
  {
    slug: "formation-intelligence-artificielle-unicef-2025",
    titre:
      "Formation gratuite à l’intelligence artificielle avec l’UNICEF Togo",
    date: "2025-07-10",
    image: "/images/featured/ia.jpeg",
    resume: `Comprendre l’IA, ses usages et ses limites – une opportunité unique pour les jeunes de 14 à 24 ans.`,
    component: <RencontreHorizonIA />,
    auteur: "Communication ONG DFA",
  },
{
  slug: "appel-candidatures-efh-education-2025",
  titre: "Appel à candidatures – Égalité femmes-hommes en éducation",
  date: "2025-07-14",
  image: "/images/featured/candidature-2.jpeg", 
  resume: `Rejoignez la formation du 5 août au 5 septembre 2025 pour devenir un acteur clé de l’égalité femmes-hommes en éducation.`,
  component: <ArticleEFH />,
  auteur: "Communication ONG DFA",
},
{
  slug: "volontariat-international-reciprocite-vir-2025",
  titre: "Volontariat International de Réciprocité – Candidature ouverte",
  date: "2025-07-15",
  image: "/images/featured/recrutement.jpeg", 
  resume:
    "Participez à une mission en France sur le thème de l’horticulture et de la citoyenneté mondiale grâce au programme VIR.",
  component: <ArticleVIR />,
  auteur: "Communication ANVT / France Volontaires",
},
{
  slug: "certificat-jeunesse-paix-securite-oif-2025",
  titre: "Certificat Jeunesse, Paix et Sécurité – 2ᵉ édition ouverte",
  date: "2025-08-01",
  image: "/images/featured/jeunesse-paix.jpeg", 
  resume:
    "L’OIF et l’Université Senghor lancent la 2ᵉ édition du certificat francophone sur la jeunesse, la paix et la sécurité. Formation en ligne pour les jeunes engagés.",
  component: <ArticleCertificatOIF />,
  auteur: "Communication ONG DFA / OIF",
}


];
