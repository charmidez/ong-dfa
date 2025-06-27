

type TitrePageProps = {
  className?: string;
  titre: string;
  description: string;
};

export default function TitrePage({
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
          <h1 className="text-3xl font-light text-start">{titre}</h1>
          <p className="text-xl font-light text-start mt-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
