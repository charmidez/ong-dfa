
import Breadcrumb from "@/components/Breadcumbs";
import { TitrePage } from "@/components/Titre";
import { ContactButton, ContactForm } from "./contactSections";
import {ContactMaps} from "@/components/ContactMapsClient";

export const metadata = {
  title: "Contact",
};



// CONTACT
const Page = () => {
  {
    return (
      <main>
        <TitrePage
          titre="CONTACT"
          description=""
          className="bg-[url('/images/titre-a-contact.webp')] bg-cover bg-center"
        />

        <div className="px-4 lg:px-8 py-4 bg-gray-100">
          <Breadcrumb />
        </div>

        <div>
          <ContactButton />
        </div>

        <div>
          <ContactForm />
        </div>
        <div>
          <ContactMaps />
        </div>
      </main>
    );
  }
};

export default Page;
