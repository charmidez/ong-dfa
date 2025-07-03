
import Image from "next/image";
import { ButtonLink } from "./Buttons";

type CardinfoProps = {
  titreCard: string;
  descCard: string;
  image: string;
  linkInfo: string;
};

export const Cardinfo = ({
  titreCard,
  descCard,
  image,
  linkInfo,
}: CardinfoProps) => {
  return (
    <div className="shadow-sm bg-white flex flex-col rounded-lg overflow-hidden">
      <figure>
        <Image
          src={image}
          alt={titreCard}
          className="object-cover h-48 w-full"
          width={2000}
          height={2000}
        />
      </figure>

      <div className="flex flex-col flex-grow justify-between p-4 gap-4">
        <div>
          <h2 className="text-titre-sous-titre text-rouge font-bold">{titreCard}</h2>
          <p className="text-legende text-gray-400">{descCard}</p>
        </div>
        <div className="w-fit">
          <ButtonLink texte="Lire" href={linkInfo} />
        </div>
      </div>
    </div>
  );
};

type CardDomaineProps = {
  titre: string;
  bgColor: string;
  icon: string;
};

export const CardDomaine = ({ titre, bgColor, icon }: CardDomaineProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg text-white ${bgColor} min-h-[180px]`}
    >
      <div className="bg-black/30 rounded-full p-4 mb-4">
        <Image
          src={icon}
          alt={titre}
          className="w-10 h-10"
          width={100}
          height={100}
        />
      </div>
      <p className="text-center font-semibold">{titre}</p>
    </div>
  );
};

type CardMissionVisionValeurProps = {
  titre: string;
  bgColor: string;
  icon: string;
  desc: string;
};

export const CardMissionVisionValeur = ({
  titre,
  bgColor,
  icon,
  desc,
}: CardMissionVisionValeurProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-start p-6 rounded-lg text-white ${bgColor} min-h-[180px]`}
    >
      <div className="bg-black/30 rounded-full p-4 mb-4">
        <Image
          src={icon}
          alt={titre}
          className="w-16 h-16"
          width={100}
          height={100}
        />
      </div>
      <p className="text-center font-semibold text-tire-sous-titre">{titre}</p>
      <p className="text-center text-texte-normal">{desc}</p>
    </div>
  );
};

type CardProjetsProps = {
  titre: string;
  bgColor: string;
  icon: string;
  desc: string;
};

export const CardProjets = ({
  titre,
  bgColor,
  icon,
  desc,
}: CardProjetsProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-start p-6 rounded-lg text-white ${bgColor} min-h-[180px]`}
    >
      <div className="bg-black/30 rounded-full p-4 mb-4">
        <Image
          src={icon}
          alt={titre}
          className="w-16 h-16"
          width={500}
          height={500}
        />
      </div>
      <p className="text-center font-semibold text-xl">{titre}</p>
      <p className="text-center text-lg">{desc}</p>
      <ButtonLink texte="En savoir plus" href="/projets" />
    </div>
  );
};

interface ContactcardProps {
  imgSrc: string;
  titre: string;
  linkToAction: string;
  textButton: string;
}

export function Contactcard({
  titre,
  imgSrc,
  linkToAction,
  textButton,
}: ContactcardProps) {
  return (
    <div className="rounded-2xl shadow-xl bg-white items-start p-4">
      <Image
        src={imgSrc}
        alt="Whatsapp"
        className="object-contain h-15 rounded-xl lg:mb-4 mb-2"
        width={300}
        height={300}
      />

      <div className="justify-between">
        <h3 className="lg:text-lg text-sm font-normal mb-2 lg:mb-4">{titre}</h3>

        <a className="justify-start">
          <ButtonLink href={linkToAction} texte={textButton} />
        </a>
      </div>
    </div>
  );
}
