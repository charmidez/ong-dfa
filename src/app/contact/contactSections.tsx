import { Contactcard } from "@/components/Card";
import { Form } from "@/components/Forms";
import { TitreSection } from "@/components/Titre";


export function ContactButton() {
  return (
    <div className="py-16 px-4 lg:px-8 bg-gray-100">
      <TitreSection titre="Nous contacter" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
        <Contactcard titre="Nous appeler directement ?" imgSrc="/icons/call.svg" linkToAction="tel:+22890871113" textButton="Par ici"/>
        <Contactcard titre="Nous écrire par whatsapp ?" imgSrc="/icons/whatsapp.svg" linkToAction="https://wa.me/22890871113" textButton="Un sms par ici"/>
        <Contactcard titre="Nous écrire par telegram ?" imgSrc="/icons/telegram.svg" linkToAction="https://t.me/charmidez" textButton="Un message telegram par ici"/>
        <Contactcard titre="Nous écrire directement un mail ?" imgSrc="/icons/mail.png" linkToAction="https://t.me/charmidez" textButton="Un message telegram par ici"/>
      </div>
    </div>
  );
}


export function ContactForm() {
  return (
    <div className="py-16 px-4 lg:px-8 bg-gray-50">
      <TitreSection titre="Nous contacter" />
      <Form />
    </div>
  );
}