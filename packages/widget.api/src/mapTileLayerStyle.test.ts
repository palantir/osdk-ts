/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// cspell:words fontstack

import type {
  LayerSpecification,
  StyleSpecification,
} from "@maplibre/maplibre-gl-style-spec";
import { validateStyleMin } from "@maplibre/maplibre-gl-style-spec";
import { describe, expect, expectTypeOf, it } from "vitest";

import type { MapTileLayerStyle } from "./index.js";

const rasterStyle: MapTileLayerStyle = {
  version: 8,
  sources: {
    "example-raster": {
      type: "raster",
      tiles: ["https://example.com/tiles/{z}/{x}/{y}?format=IMAGERY"],
      minzoom: 0,
      maxzoom: 18,
      tileSize: 256,
      bounds: [-180, -85, 180, 85],
      attribution: "Example attribution",
    },
  },
  layers: [{ id: "example-raster", type: "raster", source: "example-raster" }],
};

const vectorStyle: MapTileLayerStyle = {
  version: 8,
  sources: {
    "example-vector": {
      type: "vector",
      tiles: [
        "https://example.com/tiles/{z}/{x}/{y}?format=MAPBOX_VECTOR_TILE",
      ],
      minzoom: 0,
      maxzoom: 14,
      scheme: "tms",
    },
  },
  layers: [
    {
      id: "water",
      type: "fill",
      source: "example-vector",
      "source-layer": "water",
      paint: { "fill-color": "hsla(240, 100%, 50%, 0.25)" },
    },
  ],
  sprite: "https://example.com/sprites/sprite",
  glyphs: "https://example.com/glyphs/{fontstack}/{range}.pbf",
};

describe("MapTileLayerStyle", () => {
  it("is renderable by MapLibre without translation", () => {
    // The point of the type: it is assignable to a MapLibre style as-is, so a
    // widget never has to rename or reshape a field to render it. If this stops
    // compiling, the type has drifted from the style spec.
    const asRasterMapLibreStyle: StyleSpecification = rasterStyle;
    const asVectorMapLibreStyle: StyleSpecification = vectorStyle;

    expect(validateStyleMin(asRasterMapLibreStyle)).toEqual([]);
    expect(validateStyleMin(asVectorMapLibreStyle)).toEqual([]);
  });

  it("omits the map-level settings that belong to the widget", () => {
    // Deliberately excluded so that several tile layers can be composed onto
    // one map without any of them fighting over the camera.
    expectTypeOf<MapTileLayerStyle>().not.toHaveProperty("center");
    expectTypeOf<MapTileLayerStyle>().not.toHaveProperty("zoom");
    expectTypeOf<MapTileLayerStyle>().not.toHaveProperty("bearing");
    expectTypeOf<MapTileLayerStyle>().not.toHaveProperty("pitch");
    expectTypeOf<MapTileLayerStyle>().not.toHaveProperty("projection");
    expectTypeOf<MapTileLayerStyle>().not.toHaveProperty("terrain");
  });

  it("carries native MapLibre layers in drawing order", () => {
    expectTypeOf<MapTileLayerStyle["layers"]>().toEqualTypeOf<
      LayerSpecification[]
    >();
  });

  it("accepts any MapLibre source type", () => {
    expectTypeOf<MapTileLayerStyle["sources"]>().toEqualTypeOf<
      StyleSpecification["sources"]
    >();
  });
});
