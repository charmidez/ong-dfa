import { Cardinfo, CardRecrutementAnonces } from "@/components/Card";
import { TitreSection, TitreSectionRecrutement } from "@/components/Titre";
import { actualitesData } from "@/data/actualiteData";
import { annonceRecrutemntData } from "@/data/recrutementData";

export function RecrutementAnnonces() {
  return (
    <section className="lg:py-16 py-8 px-4 lg:px-8 flex flex-col">
      <TitreSectionRecrutement titre="Annonces de recrutement" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  text-bleu-fonce">
        {[...annonceRecrutemntData]
          .sort((a, b) => b.id - a.id) // tri du plus grand id au plus petit
          .map((annonce) => {
            let btnColorClassName = "";
            let titreColorClassName = "";
            let cardBgColorClassName = "";

            switch (annonce.id) {
              case 3:
                btnColorClassName = "bg-vert-clair hover:bg-vert-fonce";
                titreColorClassName = "text-vert-fonce";
                cardBgColorClassName = "bg-green-50 border-vert-milieu";
                break;
              case 4:
                btnColorClassName = "bg-jaune-clair hover:bg-jaune-fonce";
                titreColorClassName = "text-yellow-600";
                cardBgColorClassName = "bg-yellow-50 border-jaune-milieu";
                break;
              default:
                btnColorClassName = "bg-rouge-clair hover:bg-rouge-fonce";
                titreColorClassName = "text-rouge-fonce";
                cardBgColorClassName = "border-rouge-milieu bg-red-50";
            }

            return (
              <CardRecrutementAnonces
                key={annonce.id}
                titre={annonce.titre}
                dateLimite={annonce.dateLimite}
                linkToAction={`/recrutements/${annonce.slug}`}
                textButton="Voir l'annonce"
                btnColorClassName={btnColorClassName}
                titreColorClassName={titreColorClassName}
                cardBgColorClassName={cardBgColorClassName}
              />
            );
          })}
      </div>
    </section>
  );
}

export function AllActualites() {
  return (
    <section className="flex flex-col lg:py-16 py-8 px-4 lg:px-8 bg-green-50">
      <TitreSection titre="Toutes les actualités" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...actualitesData]
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((article) => (
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
