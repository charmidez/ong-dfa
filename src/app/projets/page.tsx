import Breadcrumb from "@/components/Breadcumbs";
import {TitrePage} from "@/components/Titre";
import { NosDomainesDintervention, Nosprojets, QuelqueRealisations } from "./projectsSections";

export const metadata = {
  title: "Nos Projets",
};


// PROJECT 
const Page = () => {
  {
    return (
      <main>
      <TitrePage
        titre="NOS PROJETS"
        description="DFA intervient dans cinq domaines clés pour améliorer les conditions de vie des populations vulnérables."
        className="bg-[url('/images/titre-a-projet.webp')] bg-cover bg-center"
      />
      <div className="px-4 lg:px-8 py-4 bg-gray-100">
        <Breadcrumb />
      </div>
      <div>
        <Nosprojets />
      </div>
      <div>
        <NosDomainesDintervention />
      </div>
      <div>
        <QuelqueRealisations />
      </div>
      </main>
    );
  }
};

export default Page;