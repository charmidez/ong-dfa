import Breadcrumb from "@/components/Breadcumbs";
import JobCard from "@/components/Card";
import { TitrePageRecrutements } from "@/components/Titre";
import { annonceRecrutemntData } from "@/data/recrutementData";
import { notFound } from "next/navigation";

// Interface mise à jour pour Next.js 15
interface RecrutementsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return annonceRecrutemntData.map((recrutement) => ({
    slug: recrutement.slug,
  }));
}

export async function generateMetadata({ params }: RecrutementsPageProps) {
  const { slug } = await params;

  const recrutement = annonceRecrutemntData.find((a) => a.slug === slug);

  if (!recrutement) notFound();

  return {
    title: recrutement.titre,
    description: recrutement.description,
    openGraph: {
      title: recrutement.titre,
      description: recrutement.description,
      images: [
        {
          url: recrutement.img,
          width: 1200,
          height: 630,
          alt: recrutement.titre,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: recrutement.titre,
      description: recrutement.description,
      images: [recrutement.img],
    },
  };
}

// ACTUALITÉS - Fonction maintenant async avec params attendus
export default async function Page({ params }: RecrutementsPageProps) {
  // Attendre la Promise des params
  const { slug } = await params;

  const offre = annonceRecrutemntData.find((a) => a.slug === slug);

  if (!offre) return notFound();

  return (
    <main>
      <TitrePageRecrutements
        titre={`RECRUTEMENTS - ${offre.titre}`}
        description="Toutes les annonces de l'ONG Développement For All et du monde associatif."
        className="bg-[url('/images/recrutements.webp')] bg-cover bg-bottom"
      />
      <div className="px-4 lg:px-8 py-4 bg-gray-100">
        <Breadcrumb />
      </div>
      <JobCard
        key={offre.id}
        titre={offre.titre}
        description={offre.description}
        telephone={offre.telephone}
        dateLimite={offre.dateLimite}
        fileDownload={offre.filesDownload}
      />
    </main>
  );
}
