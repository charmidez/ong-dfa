//import Link from "next/link";
import Image from "next/image";

import { nomDuSite, nomDuSiteDefini } from "@/data/globalData";
import { ButtonLinkWhatsApp, MenuItem } from "./Buttons";


const Footer = () => {
  return (
    <>
      <div className="bg-[url('/images/footer.webp')] bg-cover bg-fixed lg:px-8 px-4 py-20 grid gap-10">
        {/* Haut du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-8">
          <div className="flex lg:flex-row flex-col items-center gap-4 ">
            <Image
              src="/logos/ico-no-bg.png"
              alt="logo"
              className="p-0 w-40"
              width={500}
              height={500}
            />
            <h1 className="text-titre-page text-center font-light">
              <span className="text-vert-milieu font-bold">{nomDuSite}</span> -{" "}
              {nomDuSiteDefini}
            </h1>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-4">
              <Image
                src="/icons/icons8-linkedin.svg"
                alt="facebook"
                className="w-8"
                width={100}
                height={100}
              />
              <Image
                src="/icons/facebook-svgrepo-com.svg"
                alt="facebook"
                className="w-8"
                width={100}
                height={100}
              />
              <Image
                src="/icons/instagram-svgrepo-com.svg"
                alt="instagram"
                className="w-8"
                width={100}
                height={100}
              />
              <Image
                src="/icons/youtube-svgrepo-com.svg"
                alt="youtube"
                className="w-8"
                width={100}
                height={100}
              />
              <Image
                src="/icons/tiktok-svgrepo-com.svg"
                alt="tiktok"
                className="w-8"
                width={100}
                height={100}
              />
              <Image
                src="/icons/icons8-x.svg"
                alt="x"
                className="w-8"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-20">
            <ul className="font-semibold space-y-1">
              <li>
                <ButtonLinkWhatsApp
                  texte={"Don"}
                  src="/icons/gift-svgrepo-com.svg"
                  message={"Bonjour, je souhaite faire un don pour aider soutenir les oeuvres de DFA."}
                  phoneNumber={"22891270369"}
                />
              </li>
              <li>
                <ButtonLinkWhatsApp
                  texte={"Apport"}
                  src="/icons/hand-heart-svgrepo-com.svg"
                  message={"Bonjour, je souhaite faire un apport, soit en nature ou en service pour soutenir les oeuvres de DFA ONG."}
                  phoneNumber={"22891270369"}
                />
              </li>
              <li>
                <ButtonLinkWhatsApp
                  texte={"Partenariats"}
                  src="/icons/agreement-deal-friends-svgrepo-com.svg"
                  message={"Bonjour, je souhaite faire un partenariat avec DFA."}
                  phoneNumber={"22891270369"}
                />
              </li>
            </ul>

            <ul className="font-light space-y-1">
              <li>
                <MenuItem
                  texte={"F.A.Q"}
                  href={"/f-a-q"}
                  src="/icons/up-right-svgrepo-com.svg"
                />
              </li>
              <li>
                <MenuItem
                  texte={`Nos domaines d'activité`}
                  href={"/nos-domaines-dactivite"}
                  src="/icons/up-right-svgrepo-com.svg"
                />
              </li>
              <li>
                <MenuItem
                  texte={"Contact et adresse"}
                  href={"/contact"}
                  src="/icons/up-right-svgrepo-com.svg"
                />
              </li>
              <li>
                <MenuItem
                  texte={"Mentions légales"}
                  href={"/mentions-legales"}
                  src="/icons/up-right-svgrepo-com.svg"
                />
              </li>
              <li>
                <MenuItem
                  texte={"Termes et conditions"}
                  href={"/termes-et-conditions"}
                  src="/icons/up-right-svgrepo-com.svg"
                />
              </li>
            </ul>
          </div>
          {/* Contact et adresse  */}
          <ul className="font-semibold space-y-2">
            <li className="flex items-center gap-2">
              <Image
                src="/icons/icons8-phone.svg"
                alt="Phone"
                width={20}
                height={20}
              />
              +228 91 27 03 69
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/icons/icons8-phone.svg"
                alt="Phone"
                width={20}
                height={20}
              />
              +228 99 57 32 90
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/icons/icons8-envelope.svg"
                alt="Mail"
                width={20}
                height={20}
              />
              ongdfa7@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/icons/icons8-envelope.svg"
                alt="Email"
                width={20}
                height={20}
              />
              info@ong-dfa.com
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/icons/maps-location-svgrepo-com.svg"
                alt="Email"
                width={20}
                height={20}
              />
              <div className="flex flex-col">
                <span>Kpéhénou, dans la VON de la Pharmacie, Rue Monata</span>
                <span className="font-semibold">Lomé - Togo</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 py-4 flex justify-center">
        <p className="text-mine-footer lg:text-sm text-gray-400 font-semibold text-center px-4">
          © 2025 DFA ONG - Design & Developed By{" "}
          <a href="https://www.charmidez.com"> Charmidez</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
