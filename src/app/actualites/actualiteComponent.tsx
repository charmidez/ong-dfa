
"use client";


import Image from "next/image";
import Link from "next/link";

export function SituationONGTogo2025() {
  return (
    <article className="prose lg:prose-xl mx-auto px-4 text-justify">
      <h1 className="text-center font-bold text-titre-section text-rouge-fonce">
        Situation des ONG au Togo en 2025
      </h1>

      <Image
        src="/images/img-3.webp" // remplace avec ton image
        alt="ONG au Togo"
        width={1200}
        height={600}
        className="rounded-lg my-6 object-cover w-full"
      />

      <p>
        En 2025, les Organisations Non Gouvernementales (ONG) au Togo jouent un rôle
        de plus en plus crucial dans le développement socio-économique et la
        consolidation de la démocratie. Elles interviennent dans des domaines variés
        : éducation, santé, environnement, droits humains, et plus récemment,
        inclusion numérique.
      </p>

      <h2 className="text-titre-sous-titre text-vert-fonce mt-10">Une reconnaissance institutionnelle croissante</h2>

      <p>
        Grâce à la réforme du cadre juridique entamée en 2022, les ONG togolaises
        bénéficient désormais d’un meilleur encadrement. Le gouvernement a mis en
        place une base de données nationale pour recenser et suivre l’action des
        ONG, favorisant ainsi la transparence et la collaboration.
      </p>

      <Image
        src="/images/img-6.webp"
        alt="Collaboration entre ONG et institutions"
        width={1200}
        height={500}
        className="rounded-lg my-6 object-cover w-full"
      />

      <h2 className="text-titre-sous-titre text-orange-fonce mt-10">Défis persistants en 2025</h2>

      <p>
        Malgré les progrès, les ONG font face à plusieurs défis : financement
        limité, accès difficile aux zones rurales, manque de ressources humaines
        qualifiées et pressions politiques dans certaines régions.
      </p>

      <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg my-4">
        “Nous faisons de notre mieux, mais l’absence de financements durables
        freine beaucoup de projets à fort impact.” – Coordonnateur d’une ONG locale.
      </blockquote>

      <h2 className="text-titre-sous-titre text-vert-clair mt-10">Perspectives d’avenir</h2>

      <p>
        Les ONG togolaises misent désormais sur la coopération régionale, la
        digitalisation de leurs actions, et une meilleure communication avec les
        populations bénéficiaires. Des plateformes numériques d’information et de
        transparence voient le jour pour renforcer leur légitimité.
      </p>

      <Image
        src="/images/img-6.webp"
        alt="Digitalisation des ONG"
        width={1200}
        height={500}
        className="rounded-lg my-6 object-cover w-full"
      />

      <p className="text-end font-light mt-10">
        Publié le 2 juillet 2025 – ONG DFA
      </p>
    </article>
  );
}

export function AppelCandidatureFilles2025() {
  return (
    <article className="prose lg:prose-xl mx-auto px-4 text-justify bg-gray-200 rounded-lg">
      <h1 className="text-center font-bold text-titre-section text-rose-600">
        Appel à candidatures – Filles aux commandes 2025
      </h1>

      <Image
        src="/images/jeune-fille1.webp" // à remplacer avec ton image réelle
        alt="Jeunes filles leaders"
        width={1200}
        height={600}
        className="rounded-lg m-2 object-cover w-full"
      />

      <p>
        Tu es une jeune fille ambitieuse, passionnée par le leadership, l’innovation ou l’engagement citoyen ?
        Tu veux faire entendre ta voix, inspirer et transformer ta communauté ? L’initiative <strong>“Filles aux commandes 2025”</strong> est faite pour toi !
      </p>

      <h2 className="text-titre-sous-titre text-rose-700 mt-10">Un programme pour révéler des leaders</h2>

      <p>
        Pour cette nouvelle édition, le programme se renforce et s’ouvre à une nouvelle vague de jeunes filles âgées de <strong>15 à 24 ans</strong>, déterminées à briser les stéréotypes et à agir pour l’égalité.
        En rejoignant <strong>Filles aux commandes</strong>, tu bénéficieras d’une formation complète, d’un accompagnement personnalisé et d’un réseau dynamique d’acteurs engagés.
      </p>

      <ul className="list-disc pl-6">
        <li>Renforcer ta confiance en toi et ton leadership</li>
        <li>Défendre l’égalité et les droits des filles</li>
        <li>Participer à des projets concrets d’impact social</li>
        <li>Être accompagnée par des femmes et hommes modèles</li>
      </ul>

      <h2 className="text-titre-sous-titre text-orange-fonce mt-10">Pourquoi postuler ?</h2>

      <p>
        “Filles aux commandes” n’est pas seulement un programme, c’est une expérience de transformation. Tu rejoindras une communauté engagée, motivée et inspirante qui croit en un monde où chaque fille a sa place.
      </p>

      <blockquote className="border-l-4 border-rose-500 pl-4 italic text-lg my-4">
        “Fais entendre ta voix, inspire d’autres filles et montre que l’égalité ne peut plus attendre.”
      </blockquote>

      <h2 className="text-titre-sous-titre text-vert-fonce mt-10">Comment postuler ?</h2>

      <p>
        Tu as entre 15 et 24 ans ? Tu es prête à t’engager ? Alors c’est le moment de te lancer !
        Les candidatures sont désormais ouvertes. Postule dès maintenant en cliquant sur le lien ci-dessous :
      </p>

      <p className="text-center">
        <a
          href="https://lnkd.in/d_QuhQer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
        >
          👉🏽 Postuler ici
        </a>
      </p>

      <Image
        src="/images/jeune-fille2.webp" // facultative deuxième image
        alt="Filles engagées pour l’égalité"
        width={1200}
        height={500}
        className="rounded-lg my-6 object-cover w-full"
      />

      <p className="mt-6 font-light italic text-center text-gray-500">
        Jusqu’à l’égalité ! ✊ #FillesAuxCommandes #LeadershipFéminin #PlanInternationalTogo #JusquaLegalite #FutureGirlsWant #UntillWeAreAllEqual
      </p>

      <p className="text-end font-light mt-10">
        Publié le 4 juillet 2025 – ONG DFA
      </p>
    </article>
  );
}

export default function ActualiteDclicOIF() {
  return (
    <article className="prose lg:prose-xl mx-auto px-4 text-justify">
      <h1 className="text-center text-titre-section font-bold text-bleu-oif">
        Appel à candidatures – Programme D-CLIC de l’OIF
      </h1>

      <p>
        Le projet <strong>« D-CLIC, formez-vous au numérique avec l’OIF »</strong> lance un appel à candidatures
        pour permettre aux jeunes francophones de suivre trois formations entièrement à distance :
      </p>

      <ul className="list-disc list-inside">
        <li>Parcours développement web</li>
        <li>Parcours développement mobile</li>
        <li>Parcours marketing numérique</li>
      </ul>

      <p>
        Ces formations tutorées, d’une durée de <strong>deux mois</strong>, débuteront le <strong>21 juillet 2025</strong> et
        visent à favoriser l’employabilité et l’autonomisation des jeunes dans des secteurs porteurs du numérique.
      </p>

      <p>
        <strong>Pour postuler :</strong><br />
        <a
          href="https://lnkd.in/dYsuB4Kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Cliquez ici pour accéder au formulaire
        </a>
      </p>

      <p className="mt-6 text-end font-light italic">
        CUBE SAEI – Organisation internationale de la Francophonie (OIF)
      </p>
    </article>
  );
}

export function RencontreHorizonIA() {
  return (
    <article className="flex flex-col gap-6 px-4 py-12 lg:px-8 bg-white text-gray-800">
      <h1 className="text-titre-page text-vert-fonce font-bold">
        Comprendre l’intelligence artificielle avec UNICEF Togo
      </h1>

      <p className="text-texte-normal font-light">
        Tu entends parler d’intelligence artificielle partout mais tu ne sais pas vraiment ce que c’est ?
      </p>

      <div className="bg-vert-clair p-4 rounded-lg text-white">
        <p className="font-semibold text-texte-normal">
          Bonne nouvelle ! 🎉
        </p>
        <p>
          <strong>#UNICEFTogo</strong> t’invite à une formation 100% gratuite pour tout comprendre sur l’<strong>#IA</strong> : ses bases, ses usages, ses limites et comment elle peut changer ta vie.
        </p>
      </div>

      <section>
        <h2 className="text-titre-section text-vert-milieu font-semibold">
          🎓 Ce que tu vas apprendre :
        </h2>
        <ul className="list-disc list-inside space-y-2 text-texte-normal">
          <li>✅ Ce qu’est (et n’est pas) l’IA</li>
          <li>✅ Comment elle impacte ton quotidien</li>
          <li>✅ L’utiliser de façon responsable et éthique</li>
        </ul>
      </section>

      <div className="bg-orange-clair p-4 rounded-lg text-white">
        <p className="text-texte-normal font-medium">
          📍Places limitées !
        </p>
        <p className="text-texte-normal">
          Tu as entre 14 et 24 ans ? Inscris-toi à notre 3e session des <strong>#RencontresHorizon</strong> dès maintenant 👇
        </p>
        <Link
          href="https://lnkd.in/dY8CKKMy"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 bg-vert-fonce text-white rounded-md hover:bg-vert-milieu transition"
        >
          S’inscrire maintenant
        </Link>
      </div>

      <p className="text-texte-legende text-gray-500">
        <strong>#PourChaqueEnfant</strong>, des compétences — <strong>#UNICEFTogo</strong>
      </p>
    </article>
  );
}








