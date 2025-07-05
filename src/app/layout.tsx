
import "../styles/globals.css";
//import "../styles/menu.css";
import { Header } from "@/components/HeadersMine";

import { Poppins, Quicksand, Roboto } from "next/font/google";
import Footer from "@/components/FooterMine";

const quicksand = Quicksand({
  subsets: ["latin"], // Sous-ensembles requis
  variable: "--font-quicksand",
});

const poppins = Poppins({
  subsets: ["latin"], // Sous-ensembles requis
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Poids de police requis
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "ONG DFA",
    template: "%s | ONG DFA",
  },
  description:
    "ONG DFA agit pour améliorer les conditions de vie des populations vulnérables.",
  keywords: [
    "ONG",
    "DFA",
    "Développement",
    "Santé",
    "Éducation",
    "Afrique",
    "Formation professionnelle des jeunes",
    "Entrepreneuriat social",
    "Agriculture durable",
    "Compétences numériques",
    "Métiers techniques",
    "Reboisement et écologie",
    "Éducation environnementale",
    "Gestion des déchets",
    "Logements sociaux écologiques",
    "Accès à l’eau potable",
    "Infrastructures communautaires",
    "Santé communautaire",
    "Protection des enfants",
    "Autonomisation des jeunes",
    "Développement local participatif",
  ],
  authors: [{ name: "ONG DFA", url: "https://ong-dfa.com" }],
  creator: "ONG DFA",
  openGraph: {
    title: "ONG DFA",
    description: "Découvrez nos projets et actions solidaires.",
    url: "https://ong-dfa.com",
    siteName: "ONG DFA",
    images: [
      {
        url: "https://ong-dfa.com/images/imgCarouselAuto-8.jpg",
        width: 1200,
        height: 630,
        alt: "ONG DFA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONG DFA",
    description: "Découvrez nos projets et actions solidaires.",
    creator: "@ong_dfa",
    images: ["https://ong-dfa.com/images/imgCarouselAuto-8.jpg"],
  },
  metadataBase: new URL("https://ong-dfa.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${quicksand.variable} ${roboto.variable} antialiased`}
    >
      <body className="antialiased font-sans text-texte-normal">
        <div className="lg:hidden flex flex-col justify-center">
          <Header typeMenu={true} />
        </div>
        <div className="lg:flex hidden flex-col justify-center">
          <Header typeMenu={false} />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
