import { Contactcard } from "@/components/Card";
import { Form } from "@/components/Forms";
//import MapCarte from "@/components/MaCarte";
import { TitreSection } from "@/components/Titre";






export function ContactButton() {
  return (
    <div className="lg:py-16 py-8 px-4 lg:px-8">
      <TitreSection titre="Nous contacter" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
        <Contactcard titre="Nous appeler directement ?" imgSrc="/icons/call.svg" linkToAction="tel:+22891270369" textButton="Par ici"/>
        <Contactcard titre="Nous écrire par whatsapp ?" imgSrc="/icons/whatsapp.svg" linkToAction="https://wa.me/22891270369" textButton="Un sms par ici"/>
        <Contactcard titre="Nous écrire directement un mail ?" imgSrc="/icons/mail.png" linkToAction="mailto:contact@ong-dfa.com" textButton="Un mail par ici"/>
      </div>
    </div>
  );
}


export function ContactForm() {
  return (
    <div className="lg:py-16 py-8 px-4 lg:px-8 bg-gray-100">
      <TitreSection titre="Nous contacter" />
      <Form />
    </div>
  );
}


