"use client"

import Breadcrumb from "@/components/Breadcumbs";
import { TitrePage } from "@/components/Titre";
import { ContactButton, ContactForm, ContactMaps } from "./contactSections";


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

        <div className="px-8 py-4">
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
