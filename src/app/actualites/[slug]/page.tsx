
import Breadcrumb from "@/components/Breadcumbs";
import { TitrePage } from "@/components/Titre";
import { notFound } from "next/navigation";
import { actualitesData } from "@/data/actualiteData";
import Image from "next/image";

/*
interface ArticlePageProps {
  params: { slug: string };
}
  */

export async function generateStaticParams() {
  return actualitesData.map((article) => ({
    slug: article.slug,
  }));
}

//  ACTUALLITÉS
const Page = ({ params }: { params: { slug: string } }) => {
    const article = actualitesData.find((a) => a.slug === params.slug);

    if (!article) return notFound();

  return (
    <main>
      <TitrePage
        titre={article.titre}
        description="Toutes les actualités de l'ONG Developpement For All et du monde associatif."
        className="bg-[url('/images/titre-actualite.webp')] bg-cover bg-top"
      />

      <div className="px-8 py-4">
        <Breadcrumb />
      </div>
      <article className="py-12 px-4 lg:px-32">
      <Image src={article.image} alt={article.titre} width={800} height={400} className="w-full rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{article.titre}</h1>
      <p className="text-gray-800 text-lg leading-relaxed">{article.resume}</p>
    </article>
    </main>
  );
};

export default Page;