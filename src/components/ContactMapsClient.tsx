"use client";

import dynamic from "next/dynamic";

import { TitreSection } from "./Titre";

const MapCarte = dynamic(() => import("@/components/MaCarte"), {
  ssr: false, // empêche l'exécution côté serveur
});

export function ContactMaps() {
  return (
    <div className="py-16 px-4 lg:px-8">
      <TitreSection titre="Nous rendre visites" />
      <MapCarte latitude={6.133654} longitude={1.223112} zoom={20} title="Nous sommes ici !"/>
    </div>
  );
}