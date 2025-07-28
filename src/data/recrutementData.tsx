const descriptions = [
  {
    description: `Nous recherchons un(e) Responsable de la Communication pour rejoindre notre équipe dynamique. Le candidat idéal aura une expérience significative dans la gestion de la communication d'une ONG.
      Development For All (DFA) recrute un(e) Chargé(e) de Projet pour coordonner la construction d’infrastructures communautaires en milieu rural au Togo 🌱🏗

Tu es passionné(e) par le développement durable, l’ingénierie civile et le travail de terrain ? Cette opportunité est faite pour toi!

🎯 Mission: Superviser la mise en œuvre de projets incluant une école, des centres de santé, des marchés, des systèmes d’assainissement et des forages solaires.

📍 Lieu: Commune Avé 1, Région Maritime, Togo
📅 Date limite: Vendredi 04 juillet 2025
📥 Candidature à envoyer par email à ongdfa7@gmail.com ou à déposer au siège de DFA à Lomé
👉 Mentionner en objet: "Candidature - Chargé(e) de Projet Infrastructure"
      
      `,
  },

  {
    description: `Nous recrutons un·e Chargé·e de Projet pour coordonner un ambitieux programme d’aménagement en infrastructures socio-économiques en milieu rural, porté par l’ONG Development For All (DFA) en partenariat avec GGGI.

Vous êtes passionné·e par le développement local durable ? Vous avez une solide expérience dans la gestion de projets d’infrastructures communautaires et un fort engagement pour l’impact social et environnemental ? Cette mission est pour vous !

🎯 Mission : Piloter, coordonner et assurer le suivi des activités de construction, incluant écoles, centres de santé, marchés et systèmes d’assainissement.

📍 Lieu d’affectation : Commune Avé 1, Région Maritime, Togo  
🕓 Contrat : CDD renouvelable  
📅 Date limite de candidature : Mercredi 17 juillet 2025  
📥 Envoyez votre candidature par mail à ongdfa7@gmail.com ou consultez www.ong-dfa.com  
👉 Mentionner en objet : "Candidature - Chargé(e) de Projet Infrastructure"
  `,
  },

  {
    description: `Dans le cadre du projet KFS dédié à la résilience des communautés par la filière karité, l’ONG DFA lance un appel à manifestation d’intérêt pour sélectionner des partenaires opérationnels et techniques.

🌱 Activités concernées :

Éducation et sensibilisation à la protection de l’environnement,

Plantation de karité et reboisement,

Formation des jeunes et des femmes rurales,

Mise en place de serres, sites post-récolte et activités génératrices de revenus.

👥 Profils ciblés :
ONG locales, associations, coopératives, formateurs techniques, structures de recherche-développement rural, experts environnement.

📩 Soumission à : dfaprojets@gmail.com
📅 Date limite : 08 août 2025 à 12h TU
📎 Télécharger ici : https://www.linkedin.com/feed/update/urn:li:activity:7354559982157062145

Semez aujourd’hui pour renforcer l’autonomie des communautés de demain.

#ProjetKFS #ONGDFA #Karité #Reboisement #AutonomisationDesFemmes #DéveloppementRural #AppelÀManifestation #Togo
  `,
  },


    {
    description: `Dans le cadre de son programme d’amélioration des infrastructures communautaires, l’ONG DFA recherche des professionnels qualifiés pour la réalisation d’un marché moderne et d’ouvrages socio-collectifs dans la Commune d’Avé 1 (Togo).

🧱 Travaux prévus :

Construction d’un marché moderne,

Réalisation de forages,

Installation de systèmes solaires et d’assainissement,

Aménagement de divers ouvrages communautaires.

👷🏽‍♀ Profils recherchés :
Entreprises de BTP, bureaux d’études, architectes, urbanistes, spécialistes en hydraulique rurale, énergies renouvelables et génie civil.

📅 Dossier à envoyer au plus tard le 08 août 2025 à 12h TU
📩 Email : dfaprojets@gmail.com
📎 Télécharger ici : https://www.linkedin.com/feed/update/urn:li:activity:7354560737622532096
Construisons ensemble des infrastructures durables pour un développement équitable.

#ONGDFA #MAFRA #MarchéModerne #DéveloppementLocal #InfrastructuresRurales #Appeldoffres #Togo
  `,
  },
];

export const annonceRecrutemntData = [
  {
    id: 1,
    slug: "responsable-communication",
    img: "/images/img-4.webp",
    titre: "Chargé(e) de Projet Infrastructure",
    description: descriptions[0].description,
    datePublication: "2023-10-01",
    dateLimite: "04 juillet 2025",
    linkToAction: "/recrutement/responsable-communication",
    textButton: "Postuler maintenant",
    filesDownload: "/files/job.docx",
    telephone: "+228 91 27 03 69",
  },

  {
    id: 2,
    slug: "charge-projet",
    img: "/images/img-4.webp",
    titre: "Chargé(e) de Projet Infrastructure",
    description: descriptions[1].description,
    datePublication: "2025-07-14",
    dateLimite: "17 juillet 2025",
    linkToAction: "mailto:ongdfa7@gmail.com",
    textButton: "Postuler maintenant",
    filesDownload: "/files/tdr.pdf", // si tu n’as pas encore de fichier à joindre
    telephone: "+228 91 27 03 69",
  },

  {
    id: 3,
    slug: "projet-kfs",
    img: "/images/img-4.webp",
    titre: "Projet KFS - APPEL À MANIFESTATION D’INTÉRÊT",
    description: descriptions[2].description,
    datePublication: "2025-07-14",
    dateLimite: "08 août 2025",
    linkToAction: "mailto:dfaprojets@gmail.com",
    textButton: "Postuler maintenant",
    filesDownload: "/files/KFS.pdf", // si tu n’as pas encore de fichier à joindre
    telephone: "+228 91 27 03 69",
  },

    {
    id: 4,
    slug: "projet-mafra",
    img: "/images/img-4.webp",
    titre: "Projet MAFRA - APPEL À MANIFESTATION D’INTÉRÊT",
    description: descriptions[2].description,
    datePublication: "2025-07-14",
    dateLimite: "08 août 2025",
    linkToAction: "mailto:dfaprojets@gmail.com",
    textButton: "Postuler maintenant",
    filesDownload: "/files/MAFRA.pdf", // si tu n’as pas encore de fichier à joindre
    telephone: "+228 91 27 03 69",
  },
];
