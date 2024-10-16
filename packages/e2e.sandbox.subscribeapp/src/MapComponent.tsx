// src/MapComponent.tsx
import L from "leaflet";
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for the default icon issue in Leaflet with Webpack
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
});

L.Marker.prototype.options.icon = defaultIcon;

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapComponentProps {
  coordinates: Coordinates[];
}

const MapComponent: React.FC<MapComponentProps> = ({ coordinates }) => {
  const center: Coordinates = { lat: 51.505, lng: -0.09 }; // Default center

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map((coord, idx) => (
        <Marker key={idx} position={[coord.lat, coord.lng]}>
          <Popup>
            A marker at [{coord.lat}, {coord.lng}]
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
