import Breadcrumb from "@/components/Breadcumbs";
import {TitrePage} from "@/components/Titre";

// A PROPOS
const Page = () => {
  return (
    <main>
      <TitrePage
        titre="A PROPOS"
        description="DFA agit par des projets concrets pour transformer les conditions de vie."
        className="bg-[url('/images/titre-a-propos.webp')] bg-cover bg-center"
      />
      <div className="px-8 py-4">
        <Breadcrumb />
      </div>
    </main>
  );
};

export default Page;
