import Image from "next/image";
import { ButtonLink, ButtonLinkProjet, ButtonLinkRecrutement, EmailLink, MenuItemPartenaires } from "./Buttons";

type CardinfoProps = {
  className?: string;
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
<div className="shadow-sm bg-white flex flex-row lg:flex-col rounded-lg overflow-hidden h-38 lg:h-auto">
  <figure className="flex-shrink-0 w-1/3 lg:w-full h-full lg:h-48">
    <Image
      src={image}
      alt={titreCard}
      className="object-cover w-full h-full"
      width={2000}
      height={2000}
    />
  </figure>

  <div className="flex flex-col flex-grow justify-between p-4 gap-2 h-full overflow-hidden">
    <div className="overflow-hidden">
      <h2 className="text-titre-sous-titre text-rouge font-bold line-clamp-1">
        {titreCard}
      </h2>
      <p className="text-legende text-gray-400 line-clamp-2">
        {descCard}
      </p>
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
      <p className="text-center font-semibold text-titre-sous-titre">{titre}</p>
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
    <div className="rounded-lg shadow-lg bg-white items-start p-4">
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

interface CardRecrutementAnoncesProps {
  titre: string;
  linkToAction: string;
  textButton: string;
  dateLimite?: string;
  description?: string;
  imgSrc?: string;
  btnColorClassName? : string;
  titreColorClassName? : string;
  cardBgColorClassName? : string;
}

export function CardRecrutementAnonces({
  titre,
  linkToAction,
  textButton,
  dateLimite,
  btnColorClassName,
  titreColorClassName,
  cardBgColorClassName,
}: CardRecrutementAnoncesProps) {
  return (
    <div className={`border-l-2  p-4 flex flex-col gap-2 justify-between ${cardBgColorClassName}`}>
      <div>
        <p className="text-texte-citation text-gray-900">
        Offre à soumettre avant le {dateLimite}
      </p>
      <h2 className={`font-semibold text-titre-sous-titre ${titreColorClassName}`}>{titre}</h2>
      </div>
      <ButtonLinkRecrutement href={linkToAction} texte={textButton} className={btnColorClassName}/>
    </div>
  );
}

import { CalendarDays, Phone } from "lucide-react";
import { JSX } from "react";

interface JobCardProps {
  titre: string;
  description: JSX.Element;
  telephone: string;
  dateLimite: string;
  fileDownload?: string;
}

export default function JobCard({
  titre,
  description,
  telephone,
  dateLimite,
  fileDownload,
}: JobCardProps) {
  return (
    <div className="w-fit mx-auto bg-white lg:px-32  p-4 lg:p-8">
      <div className="flex lg:flex-row flex-col justify-between">
        <h2 className="text-titre-section font-bold text-gray-800 mb-4 lg:mb-0">
          {titre}
        </h2>
        <div className="flex flex-row gap-4">
          <ButtonLink href={`${fileDownload}`} texte="Télécharger l'annonce" />
          <EmailLink email="contact@ong-dfa.com" subject={`Je postule - ${titre}`} body=""  texte="Postuler" />
        </div>
      </div>
      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed mt-4">
        {description}
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-4 text-sm md:text-base">
        <div className="flex items-center gap-2 text-gray-700">
          <Phone className="w-5 h-5 text-green-600" />
          <span className="font-medium">{telephone}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <CalendarDays className="w-5 h-5 text-red-600" />
          <span>
            Date limite : <strong>{dateLimite}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export function CardProjetsSecond({
  titre,
  linkToAction,
  textButton,
  description,
  imgSrc,
}: CardRecrutementAnoncesProps) {
  return (
    <div className="bg-vert-clair border-l-6 border-vert-fonce p-4 space-y-4">
      <div className="flex flex-row items-center">
        <Image
          src={imgSrc || "/icons/project-configuration-svgrepo-com.svg"}
          alt="Projet"
          className="object-contain h-15 rounded-xl mb-4"
          width={80}
          height={80}
        />
        <h2 className="font-semibold text-titre-sous-titre">{titre}</h2>
      </div>
      <p className="text-texte-normal">{description}</p>
      <ButtonLinkProjet href={linkToAction} texte={textButton} />
    </div>
  );
}


export function CardPartenaire({
  className,
  titreCard,
  descCard,
  image,
  linkInfo,
}: CardinfoProps){
  return (
    <div className={`${className} flex flex-col gap-2 lg:gap-4 p-2 lg:p-4 shadow`}>
      <Image
        src={image}
        alt={titreCard}
        className="object-contain w-full rounded-lg"
        width={100}
        height={100}
      />
      <h2 className="font-semibold text-titre-sous-titre">{titreCard}</h2>
      <p className="text-texte-normal text-gray-600">{descCard}</p>
      <MenuItemPartenaires href={linkInfo} texte="En savoir plus" src="/icons/up-right-svgrepo-com.svg"/>
    </div>
  )
}
