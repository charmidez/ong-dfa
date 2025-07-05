import { CardMissionVisionValeur, CardProjetsSecond } from "@/components/Card";
import { TitreSection } from "@/components/Titre";
import {
  nosDomainesDinterventionData,
  nosProjetsData,
  nosProjetsMajeursData,
  nosRealisationsData,
} from "@/data/projetsData";

export function Nosprojets() {
  {
    /* Nosprojets */
  }
  return (
    <section className="lg:py-16 py-8 px-4 lg:px-8">
      <TitreSection titre={nosProjetsData.titre} />
      <p className=" text-gray-600 mb-4">{nosProjetsData.description}</p>

      <div className="flex flex-col bg-vert-50 rounded-lg text-white">
        <p className="text-titre-sous-titre text-vert-fonce">Nous travaillons sur plusieurs projets majeurs</p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-1 lg:mt-2">
          {nosProjetsMajeursData.map((projet, index) => (
            <CardProjetsSecond 
              key={index} titre={projet.titre} description={projet.description} linkToAction={projet.link} textButton={projet.buttonText}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NosDomainesDintervention() {
  {
    /* NosDomainesDintervention */
  }
  return (
    <section className="lg:py-16 py-8 px-4 lg:px-8 bg-gray-100">
      <TitreSection titre={nosDomainesDinterventionData.titre} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-8">
        {nosDomainesDinterventionData.description.map((rubrique, index) => {
          return (
            <CardMissionVisionValeur
              key={index}
              titre={rubrique.titre}
              bgColor={rubrique.bgColor}
              icon={rubrique.icon}
              desc={rubrique.desc}
            />
          );
        })}
      </div>
    </section>
  );
}

export function QuelqueRealisations() {
  {
    /* QuelqueRealisations */
  }
  return (
    <section className="lg:py-16 py-8 px-4 lg:px-8">
      <TitreSection titre={nosRealisationsData.titre} />
    </section>
  );
}
