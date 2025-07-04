
import Image from "next/image";
import { ButtonLink, ButtonLinkProjet, ButtonLinkRecrutement } from "./Buttons";

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
}

export function CardRecrutementAnonces({ titre, linkToAction, textButton, dateLimite }: CardRecrutementAnoncesProps) {
  return(
    <div className="bg-red-50 border-l-2 border-rouge-milieu p-4 ">
      <p className="font-semibold text-titre-sous-titre">Offre à soumettre avant le {dateLimite}</p>
      <h2>{titre}</h2>
      <ButtonLinkRecrutement href={linkToAction} texte={textButton} />
    </div>
  )
}




import { CalendarDays, Phone } from "lucide-react";

interface JobCardProps {
  titre: string;
  description: string;
  telephone: string;
  dateLimite: string;
}

export default function JobCard({ titre, description, telephone, dateLimite }: JobCardProps) {
  return (
    <div className="w-fit mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200">
      <div className="flex flex-row justify-between">
        <h2 className="text-titre-section font-bold text-gray-800 mb-4">{titre}</h2>
        <div className="flex flex-row gap-4 items-center">
          <ButtonLink href="/files/job.docx" texte="Télécharger l'annonce" />
        <ButtonLinkRecrutement href="/recrutements" texte="Postuler" />
        
        </div>

      </div>
      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed mt-4">{description}</p>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-4 text-sm md:text-base">
        <div className="flex items-center gap-2 text-gray-700">
          <Phone className="w-5 h-5 text-green-600" />
          <span className="font-medium">{telephone}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <CalendarDays className="w-5 h-5 text-red-600" />
          <span>Date limite : <strong>{dateLimite}</strong></span>
        </div>
      </div>
    </div>
  );
}



export function CardProjetsSecond({ titre, linkToAction, textButton, description, imgSrc }: CardRecrutementAnoncesProps) {
  return(
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
  )
}