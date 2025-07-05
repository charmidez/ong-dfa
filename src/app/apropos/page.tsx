import Breadcrumb from "@/components/Breadcumbs";
import { TitrePage } from "@/components/Titre";
import {
  CarouselAuto,
  MissionVisionValeurs,
  Partenanriat,
  PresentationGenerale,
} from "./aproposSections";


export const metadata = {
  title: "À Propos",
};

// A PROPOS
const Page = () => {
  return (
    <main>
      <TitrePage
        titre="A PROPOS"
        description="DFA agit par des projets concrets pour transformer les conditions de vie."
        className="bg-[url('/images/titre-a-propos.webp')] bg-cover bg-center"
      />

      <div className="px-4 lg:px-8 py-4 bg-gray-100">
        <Breadcrumb />
      </div>

      <div>
        <PresentationGenerale />
      </div>

      <div>
        <CarouselAuto />
      </div>

      <div className="bg-gray-100">
        <MissionVisionValeurs/>
      </div>

      <div>
        <Partenanriat />
      </div>
    </main>
  );
};

export default Page;
