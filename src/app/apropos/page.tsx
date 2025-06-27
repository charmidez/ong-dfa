import TitrePage from "@/components/TitrePage";

// A PROPOS
const Page = () => {
  return (
    <main>
      <TitrePage
        titre="A PROPOS"
        description="DFA agit par des projets concrets pour transformer les conditions de vie."
        className="bg-[url('/images/titre-a-propos.jpg')] bg-cover bg-center"
      />
    </main>
  );
};

export default Page;
