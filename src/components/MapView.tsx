import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { IPData } from "../types";

const icon = L.icon({
  iconUrl: "/images/icon-location.svg",
  iconSize: [30, 40],
});

interface MapProps {
  data: IPData | null;
}

export default function MapView({ data }: MapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);


  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView([20, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      mapRef.current = map;
    }
  }, []);

  useEffect(() => {
    if (data && mapRef.current) {
      const { lat, lng } = data.location;

      mapRef.current.setView([lat, lng], 13);

      if (markerRef.current) markerRef.current.remove();

      markerRef.current = L.marker([lat, lng], { icon }).addTo(mapRef.current);
    }
  }, [data]);

  return <div id="map" className="h-[500px] w-full z-0"></div>;
}
