import { CardMissionVisionValeur } from "@/components/Card";
import { TitreSection } from "@/components/Titre";
import { nosDomainesDinterventionData, nosProjetsData, nosRealisationsData } from "@/data/projetsData";

export function Nosprojets() {
  {
    /* Nosprojets */
  }
  return (
    <section className="py-16 px-4 lg:px-8">
      <TitreSection titre={nosProjetsData.titre} />
      <p className=" text-gray-600 mb-4">{nosProjetsData.description}</p>
    </section>
  );
}

export function NosDomainesDintervention() {
  {
    /* NosDomainesDintervention */
  }
  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-50">
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


export function QuelqueRealisations(){
  {
    /* QuelqueRealisations */
  }
  return(
    <section className="py-16 px-4 lg:px-8">
      <TitreSection titre={nosRealisationsData.titre} />
    </section>
  ) }
