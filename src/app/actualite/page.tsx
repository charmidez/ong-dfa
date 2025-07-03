import Breadcrumb from "@/components/Breadcumbs";
import { SectionReveal } from "@/components/SectionReveal";
import { TitrePage } from "@/components/Titre";

//  ACTUALLITÉS
const Page = () => {
  return (
    <main>
      <TitrePage
        titre="ACTUALLITÉS"
        description="Toutes les actualités de l'ONG Developpement For All et du monde associatif."
        className="bg-[url('/images/titre-actualite.webp')] bg-cover bg-top"
      />

      <div className="px-8 py-4">
        <Breadcrumb />
      </div>
    </main>
  );
};

export default Page;
