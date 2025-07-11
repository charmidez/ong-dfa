"use client";
import Image from "next/image";

import { TitreSection } from "@/components/Titre";
import {
  presentationGeneralData,
  imagesCaroussel,
  missionVisionValeurData,
  partenairesData,
} from "@/data/aproposData";
import { CardMissionVisionValeur, CardPartenaire } from "@/components/Card";

export function PresentationGenerale() {
  {
    /* Présentation Générale */
  }
  return (
    <section className="lg:py-16 py-8 px-4 lg:px-8">
      <TitreSection titre={presentationGeneralData.titre} />
      {presentationGeneralData.description.map((paragraphe, index) => {
        if (index === 0) {
          const mots = paragraphe.split(" ");
          const debut = mots.slice(0, 4).join(" ");
          const suite = mots.slice(4).join(" ");

          return (
            <p key={index} className="text-texte-normal text-gray-600 mb-4">
              <strong>{debut}</strong> {suite}
            </p>
          );
        } else {
          return (
            <p key={index} className=" text-gray-600 mb-4">
              {paragraphe}
            </p>
          );
        }
      })}
    </section>
  );
}

export function CarouselAuto() {
  {
    /* Carousel Automatique */
  }
  return (
    <div className="overflow-hidden w-full bg-white lg:py-8 py-4">
      <div className="whitespace-nowrap animate-scroll flex gap-4">
        {imagesCaroussel.concat(imagesCaroussel).map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-40 relative rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MissionVisionValeurs() {
  {
    /* Mission Vision Valeurs */
  }
  return (
    <section className="lg:py-16 py-8 px-4 lg:px-8">
      <TitreSection titre={missionVisionValeurData.titre} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-8">
        {missionVisionValeurData.description.map((rubrique, index) => {
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
      <h3 className="border-l-4 lg:p-8 p-4 mt-4 text-titre-sous-titre font-semibold bg-gray-50 border-rouge">
        {missionVisionValeurData.description2}
      </h3>
    </section>
  );
}

export function Partenanriat() {
  {
    /* Partenanriat */
  }
  return (
    <section className="lg:py-16 py-8 px-4 lg:px-8">
      <TitreSection titre={partenairesData.titre} />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:gap-8">
        {partenairesData.description.map((paragraphe, index) => {
          return (
            <div key={index}>
              <CardPartenaire
                titreCard={paragraphe.name}
                image={paragraphe.logo}
                linkInfo={paragraphe.link}
                descCard={paragraphe.desc}
                className={paragraphe.className}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
