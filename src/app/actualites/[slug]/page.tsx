import Breadcrumb from "@/components/Breadcumbs";
import { TitrePageActu } from "@/components/Titre";
import { actualitesData } from "@/data/actualiteData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


// Interface mise à jour pour Next.js 15
interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return actualitesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = actualitesData.find((a) => a.slug === slug);

  if (!article) notFound();

  return {
    title: article.titre,
    description: article.resume,
    openGraph: {
      title: article.titre,
      description: article.resume,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.titre,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.titre,
      description: article.resume,
      images: [article.image],
    },
  };
}



// ACTUALITÉS - Fonction maintenant async avec params attendus
export default async function Page({ params }: ArticlePageProps) {
  // Attendre la Promise des params
  const { slug } = await params;
  
  const article = actualitesData.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <main>
      <TitrePageActu
        titre={article.titre}
        description={article.resume}
        imgUrl={article.image} // Use the image URL from the article data
        className="bg-[url('/images/titre-actualite.webp')] bg-cover bg-top"
      />

      <div className="px-4 lg:px-8 py-4 bg-gray-300">
        <Breadcrumb />
      </div>

      <section className="flex flex-col gap-4 items-start justify-center  lg:py-8 py-4 px-4 lg:px-8">
        <div className="flex flex-row justify-start items-center lg:gap-4">
          <Link href="/">
            <Image
              src="/icons/close-square-svgrepo-com.svg"
              alt="close"
              height={40}
              width={40}
              className="h-10 w-10"
            />
          </Link>

          <p className="text-vert-fonce font-semibold lg:text-lg text-sm">
            {article.date}
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-4 lg:gap-8">
          <div className="basis-[20%] rounded-lg flex flex-col gap-4 lg:gap-8">
            <Image
              src={article.image}
              alt={article.titre}
              height={512}
              width={512}
              className="rounded-lg lg:w-full w-40 self-center"
            />
            <h1 className="text-vert-milieu text-texte-citation">{article.titre}</h1>
            <p className="text-gray-600 text-texte-normal lg:text-lg font-light">
              {article.resume}
            </p>
            <p className="text-white font-semibold p-4 bg-rouge-clair rounded-lg">
              {article.auteur}
            </p>
          </div>
          <div className="mb-4 text-gray-700 basis-[80%]">
            {article.component}
          </div>
        </div>
      </section>
    </main>
  );
}