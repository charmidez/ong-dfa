import Link from "next/link";
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
          <h2 className="text-lg text-rouge font-bold">{titreCard}</h2>
          <p className="text-sm text-gray-400">{descCard}</p>
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
        <Image src={icon} alt={titre} className="w-10 h-10" width={100} height={100} />
      </div>
      <p className="text-center font-semibold">{titre}</p>
    </div>
  );
};

