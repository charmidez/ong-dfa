import { Actualites, DomainesIntervention, MotDuPresident, Slider } from "@/app/acceuilSections";
// HOME


export const metadata = {
  title: "ACCEUIL - ONG DFA",
  description: "Dvelopment For All est une ONG qui œuvre pour le développement durable.",
  keywords: ["ONG", "Associations", "Ouvres caritatives", "Développement durable"],
  openGraph: {
    title: "ONG DFA",
    description: "Dvelopment For All est une ONG qui œuvre pour le développement durable.",
    images: ["/images/imgCarouselAuto-1.jpg"],
  },
};


const Page = () => {
  {
    return (
      <main>
        <div>
          <Slider />
        </div>
        <div>
          <Actualites />
        </div>
        <div>
          <MotDuPresident />
        </div>
        <div>
          <DomainesIntervention />
        </div>
      </main>
    );
  }
};

export default Page;
