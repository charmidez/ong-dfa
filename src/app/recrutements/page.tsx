import Breadcrumb from "@/components/Breadcumbs";
import { TitrePage } from "@/components/Titre";
import ListeOffres from "./recrutementSetions";

export const metadata = {
  title: "Recrutements",
};

const Page = () => {
  {
    return (
      <main>
        <TitrePage
          titre="ACTUALLITÉS"
          description="Toutes les actualités de l'ONG Developpement For All et du monde associatif."
          className="bg-[url('/images/titre-actualite.webp')] bg-cover bg-top"
        />
        <div className="px-4 lg:px-8 py-4 bg-gray-100">
          <Breadcrumb />
        </div>

        <div>
          <ListeOffres />
        </div>
      </main>
    );
  }
};


export default Page;
