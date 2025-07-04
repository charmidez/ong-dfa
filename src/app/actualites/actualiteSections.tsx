import { Cardinfo, CardRecrutementAnonces } from "@/components/Card";
import { TitreSection, TitreSectionRecrutement } from "@/components/Titre";
import { actualitesData } from "@/data/actualiteData";
import { annonceRecrutemntData } from "@/data/recrutementData";

export function RecrutementAnnonces() {
  return (
    <section className="py-16 px-4 lg:px-8 flex flex-col">
      <TitreSectionRecrutement
        titre="Annonces de recrutement"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {annonceRecrutemntData.map((annonce) => {
          return (
            <CardRecrutementAnonces
              key={annonce.id}
              titre={annonce.titre}
              dateLimite={annonce.dateLimite}
              linkToAction={annonce.linkToAction}
              textButton={annonce.textButton}
            />
          );
        })}
      </div>
    </section>
  );
}

export function AllActualites() {
  return (
    <section className="flex flex-col py-16 px-4 lg:px-8 bg-green-50">
      <TitreSection titre="Toutes les actualités" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {actualitesData.map((article) => (
          <Cardinfo
            key={article.slug}
            titreCard={article.titre}
            descCard={article.resume}
            image={article.image}
            linkInfo={`/actualites/${article.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
