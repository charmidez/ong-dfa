import Image from "next/image";
import Link from "next/link";

type TitrePageProps = {
  className?: string;
  titre: string;
  description: string;
  imgUrl?: string; // Optional image URL for TitrePageActu
};

export function TitrePage({ className, titre, description }: TitrePageProps) {
  return (
    <>
      <div
        className={`flex flex-col items-start justify-center pb-90 pt-30 px-8  ${className}`}
      >
        <div className="text-white lg:w-96">
          <h1 className="titrePage font-light text-start">{titre}</h1>
          <p className="textLegende font-light text-start mt-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

type TitreSectionProps = {
  titre: string;
  className?: string;
};

export const TitreSection = ({ titre, className }: TitreSectionProps) => {
  return (
    <h2
      className={`text-vert-fonce text-titre-section font-semibold uppercase lg:pb-4 pb-2 ${className} `}
    >
      {titre}
      <div className="h-1 w-24 lg:w-48 bg-gradient-to-r from-vert-fonce via-vert-clair to-white rounded-full animate-pulse" />
    </h2>
  );
};

export function TitrePageActu({
  className,
  titre,
  description,
}: TitrePageProps) {
  return (
    <>
      <div
        className={`flex flex-row items-start justify-between pb-30 pt-30 px-8 ${className}`}
      >
        <div className={`text-white lg:w-96`}>
          <h1 className="text-titre-section font-light text-start">{titre}</h1>
          <p className="text-texte-legende font-light text-start mt-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export const TitreSectionRecrutement = ({
  titre,
  className,
}: TitreSectionProps) => {
  return (
    <Link href="/recrutement" className="flex flex-col items-start justify-center lg:pb-4 pb-2">
      <div className="flex flex-row hover:gap-2 transition-all duration-800">
        <h2 className={`text-rouge-milieu text-titre-section font-semibold uppercase ${className} `}>
          {titre}
        </h2>
        <Image
          src="/icons/arrow-right-up-redsvgrepo-com.svg"
          alt="Arrow right"
          width={36}
          height={36}
        />
      </div>
      <div className="h-1 w-24 lg:w-48 bg-gradient-to-r from-rouge-fonce via-rouge-clair to-white rounded-full animate-pulse" />
    </Link>
  );
};
