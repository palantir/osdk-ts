import type { Point } from "geojson";
import "maplibre-gl/dist/maplibre-gl.css";
import Map, { Marker } from "react-map-gl/maplibre";

interface MiniMapProps {
  location: Point;
  width?: string;
  height?: string;
  zoom?: number;
}

export function MiniMap({
  location,
  width = "100%",
  height = "200px",
  zoom = 14,
}: MiniMapProps) {
  const [longitude, latitude] = location.coordinates;

  // Using the OSM raster tiles as a free alternative
  const mapStyle = {
    version: 8,
    sources: {
      "osm-tiles": {
        type: "raster",
        tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        attribution:
          "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
      },
    },
    layers: [
      {
        id: "osm-tiles",
        type: "raster",
        source: "osm-tiles",
        minzoom: 0,
        maxzoom: 19,
      },
    ],
  };

  return (
    <div
      className="mini-map"
      style={{ width, height, borderRadius: "8px", overflow: "hidden" }}
    >
      <Map
        mapLib={import("maplibre-gl")}
        mapStyle={mapStyle as any}
        initialViewState={{
          longitude,
          latitude,
          zoom,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker longitude={longitude} latitude={latitude} anchor="bottom" />
      </Map>
    </div>
  );
}
