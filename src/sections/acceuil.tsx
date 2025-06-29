import { Cardinfo } from "@/components/Card";
import { Titresection } from "@/components/Titre";

export function Slider() {
  {
    /* SLide En debut */
  }
  return (
    <div className="bg-[url('/images/slide-1.webp')] bg-cover bg-top justify-center pt-10 lg:pt-40 lg:px-8 px-4">
      <div className="flex flex-col items-start justify-center pb-90 pt-30">
        <div className="text-white lg:w-96">
          <h1 className="text-3xl font-light text-start">
            Ensemble, construisons un avenir meilleur
          </h1>
          <p className="text-xl font-light text-start mt-2">
            Notre ONG s'engage à améliorer les conditions de vie des populations
            vulnérables à travers des projets concrets et durables.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Actualites() {
  {
    /* Actualité */
  }
  return (
    <div className="flex flex-col py-16 px-4 lg:px-8 bg-mine-gray">
      <Titresection titre="Actualités" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Données et liste à récupérer depuis la base de données avec le composant carte*/}
        <Cardinfo
          titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
          descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
          linkInfo="/"
          image="/images/presentationtitre.jpg"
        />
        <Cardinfo
          titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
          descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
          linkInfo="/"
          image="/images/administration.jpg"
        />
        <Cardinfo
          titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
          descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
          linkInfo="/"
          image="/images/evenements.jpg"
        />
        <Cardinfo
          titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
          descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
          linkInfo="/"
          image="/images/presentationtitre.jpg"
        />
      </div>
    </div>
  );
}
