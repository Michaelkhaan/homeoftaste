"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null); // Explicitly define the ref type

  const lng = -2.9731; // Longitude for Dundee, Scotland
  const lat = 56.462; // Latitude for Dundee, Scotland
  const zoom = 14;

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // Prevent re-initialization

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Add marker
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
  }, []);

  return (
    <div className="relative">
      <div ref={mapContainer} className="h-[500px] w-full" />
      <button className="absolute top-5 left-5 bg-brown-700 text-white px-4 py-2 rounded-md">
        Get Directions
      </button>
    </div>
  );
};

export default MapComponent;
