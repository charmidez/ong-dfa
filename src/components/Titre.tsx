


type TitrePageProps = {
  className?: string;
  titre: string;
  description: string;
};

export function TitrePage({
  className,
  titre,
  description,
}: TitrePageProps) {
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
  className? : string
};

export const TitreSection = ({ titre, className }: TitreSectionProps) => {
  return (
    <h2 className={`text-vert-fonce text-titre-section font-semibold uppercase lg:pb-4 pb-2 ${className} `}>
      {titre}
      <div className="h-1 w-24 lg:w-48 bg-gradient-to-r from-vert-fonce via-vert-clair to-white rounded-full animate-pulse" />
    </h2>
  );
};
