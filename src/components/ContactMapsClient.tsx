"use client";

import dynamic from "next/dynamic";

import { TitreSection } from "./Titre";
import { addresseLocalisation } from "@/data/globalData";

const MapCarte = dynamic(() => import("@/components/MaCarte"), {
  ssr: false, // empêche l'exécution côté serveur
});

export function ContactMaps() {
  return (
    <div className="py-16 px-4 lg:px-8">
      <TitreSection titre="Nous rendre visites" />
      <div className="font-semibold lg:mb-4">{addresseLocalisation}</div>
      <MapCarte latitude={6.181134} longitude={1.143340} zoom={20} title="Nous sommes ici !"/>
    </div>
  );
}