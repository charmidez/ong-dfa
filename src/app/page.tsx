import { Actualites, DomainesIntervention, MotDuPresident, Slider } from "@/app/acceuilSections";
// HOME


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
