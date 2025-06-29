
import Link from "next/link";
import Image from "next/image";

type CardinfoProps = {
  titreCard: string;
  descCard: string;
  image: string;
  linkInfo: string;
};

export const Cardinfo = ({ titreCard, descCard, image, linkInfo }: CardinfoProps) => {
  return (
    <div className=" card shadow-xl rounded-mine-rounded bg-mine-white">
      <figure>
        <Image
          src={image}
          alt={titreCard}
          className="object-cover h-48 w-full"
          width={2000}
          height={2000}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg text-mine-bordeau font-bold">
          {titreCard}
        </h2>
        <p className="text-sm text-gray-400">{descCard}</p>
        <div className="card-actions justify-end">
          <Link
            className="btn bg-mine-red text-mine-white lg:text-lg font-medium text-sm rounded-mine-sub-rounded"
            href={linkInfo}
          >
            Lire
          </Link>
        </div>
      </div>
    </div>
  );
};