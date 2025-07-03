
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
//import { useEffect } from "react";

// Fix pour l'icône de marker par défaut dans Next.js
delete (L.Icon.Default as any).prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

interface MapCarteProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

export default function MapCarte({
  latitude,
  longitude,
  zoom = 13,
  title = "Nous sommes ici !",
}: MapCarteProps) {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
