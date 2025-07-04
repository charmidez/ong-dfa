import JobCard from "@/components/Card";
import { TitreSection } from "@/components/Titre";
import { annonceRecrutemntData } from "@/data/recrutementData";

export default function ListeOffres() {
  return (
    <section className="flex flex-col py-16 px-4 lg:px-8 bg-green-50">
        <TitreSection titre="Liste des offres" />
      <div className="flex flex-col  gap-8">
        {annonceRecrutemntData.map((offre) => (
          <JobCard
            key={offre.id}
            titre={offre.titre}
            description={offre.description}
            telephone={offre.telephone}
            dateLimite={offre.dateLimite}
          />
        ))}
      </div>
    </section>
  );
}

