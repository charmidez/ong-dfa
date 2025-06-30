import { ButtonLink } from "@/components/Buttons";
import { CardDomaine, Cardinfo } from "@/components/Card";
import { TitreSection } from "@/components/Titre";
import { actualitesData, domaines } from "@/data/actualiteData";
import Image from "next/image";

export function Slider() {
  {
    /* SLide En debut */
  }
  return (
    <div className="lg:bg-[url('/images/slide-1.webp')] bg-[url('/images/slide-1-1.webp')] bg-cover bg-top justify-center pt-20 lg:pt-30 lg:px-8 px-4">
      <div className="flex flex-col items-start justify-center lg:pb-90 pb-44 pt-10">
        <div className="text-white lg:w-96">
          <h1 className="text-2xl lg:text-4xl font-bold text-start">
            Ensemble, construisons un avenir meilleur
          </h1>
          <p className="text-lg font-light text-start mt-2">
            Notre ONG s'engage à améliorer les conditions de vie des populations
            vulnérables à travers des projets concrets et durables.
          </p>
          <div className="w-fit mt-4">
            <ButtonLink texte="En savoir plus" href="/apropos" />
          </div>
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
      <TitreSection titre="Actualités" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Données et liste à récupérer depuis la base de données avec le composant carte*/}
        {actualitesData.map((article, index) => (
          <Cardinfo
            key={index}
            titreCard={article.titre}
            descCard={article.resume}
            image={article.image}
            linkInfo={`/${article.slug}`}
          />
        ))}
      </div>
    </div>
  );
}

export function MotDuPresident() {
  {
    /* Mot Du Président */
  }
  return (
    <section className="bg-vert-clair py-16 px-4 lg:px-8">
      <TitreSection titre="Mot du Dirigeant" className="text-white" />

      <div className="bg-green-50 rounded-lg p-6 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
        <div className="flex-shrink-0">
          <Image
            src="/images/dirigents.webp"
            alt="Le dirigeant de DFA ONG"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="text-gray-800 text-justify space-y-4">
          <p>
            <strong>Chers amis et partenaires,</strong>
          </p>
          <p>
            Nous sommes heureux de partager notre vision et nos projets avec
            vous. Chez DFA ONG, nous croyons fermement que chaque individu
            mérite une chance égale de réussir. Ensemble, nous pouvons faire une
            différence significative dans nos communautés. Merci pour votre
            soutien et votre engagement continu.
          </p>
          <p>
            Notre association a pour but d’aider à améliorer la vie
            socioéconomique et culturelle de la jeunesse déshéritée. Prenez donc
            part à cette œuvre qui vise à voir sortir de l’inconscience cette
            tranche n’ayant pas d’appuis sûrs.
          </p>
        </div>
      </div>
    </section>
  );
}

export function DomainesIntervention(){
  return(
    <section className="py-16 px-4 lg:px-8">
      <TitreSection titre="Nos Domaines d'intervention" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {domaines.map((domaine, index) => (
          <CardDomaine
            key={index}
            titre={domaine.titre}
            bgColor={domaine.bgColor}
            icon={domaine.icon}
          />
        ))}
      </div>
    </section>
  )
}