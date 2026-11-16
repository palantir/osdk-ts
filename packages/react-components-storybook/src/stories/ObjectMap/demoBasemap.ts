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

import type { StyleSpecification } from "maplibre-gl";

// Vite replaces BASE_URL for Storybook's production and PR-preview subpaths.
const BASEMAP_URL = `${import.meta.env.BASE_URL}object-map-basemap`;
const FONT = ["Open Sans Semibold"];

/** Bundled geographic context for the demo; no external map requests. */
export const OVERVIEW_MAP_STYLE: StyleSpecification = {
  version: 8,
  name: "Geographic overview",
  // cspell:ignore fontstack
  glyphs: `${BASEMAP_URL}/fonts/{fontstack}/{range}.pbf`,
  sources: {
    "overview-land": {
      type: "geojson",
      data: `${BASEMAP_URL}/land.geojson`,
      attribution:
        '<a href="https://www.naturalearthdata.com/">Natural Earth</a>',
    },
    "overview-country-boundaries": {
      type: "geojson",
      data: `${BASEMAP_URL}/country-boundaries.geojson`,
    },
    "overview-states": {
      type: "geojson",
      data: `${BASEMAP_URL}/us-states.geojson`,
    },
    "overview-lakes": {
      type: "geojson",
      data: `${BASEMAP_URL}/lakes.geojson`,
    },
    "overview-places": {
      type: "geojson",
      data: `${BASEMAP_URL}/places.geojson`,
    },
  },
  layers: [
    {
      id: "overview-water",
      type: "background",
      paint: { "background-color": "#dcecf1" },
    },
    {
      id: "overview-land",
      type: "fill",
      source: "overview-land",
      paint: { "fill-color": "#f4f5f0" },
    },
    {
      id: "overview-coastline",
      type: "line",
      source: "overview-land",
      paint: { "line-color": "#9fb9bf", "line-width": 0.8 },
    },
    {
      id: "overview-country-boundaries",
      type: "line",
      source: "overview-country-boundaries",
      paint: {
        "line-color": "#9caeaa",
        "line-width": 1,
        "line-dasharray": [3, 2],
      },
    },
    {
      id: "overview-states",
      type: "line",
      source: "overview-states",
      minzoom: 3,
      paint: { "line-color": "#b5c4bd", "line-width": 0.8 },
    },
    {
      id: "overview-lakes",
      type: "fill",
      source: "overview-lakes",
      paint: { "fill-color": "#dcecf1" },
    },
    {
      id: "overview-country-labels",
      type: "symbol",
      source: "overview-places",
      maxzoom: 5,
      filter: ["==", ["get", "kind"], "country"],
      layout: {
        "text-field": ["get", "name"],
        "text-font": FONT,
        "text-size": 12,
        "text-max-width": 10,
        "symbol-sort-key": ["get", "rank"],
      },
      paint: {
        "text-color": "#687b73",
        "text-halo-color": "#f4f5f0",
        "text-halo-width": 1.5,
      },
    },
    {
      id: "overview-state-labels",
      type: "symbol",
      source: "overview-places",
      minzoom: 4,
      filter: ["==", ["get", "kind"], "state"],
      layout: {
        "text-field": ["get", "name"],
        "text-font": FONT,
        "text-size": 10,
        "text-transform": "uppercase",
        "text-letter-spacing": 0.12,
        "text-max-width": 8,
        "text-padding": 8,
      },
      paint: {
        "text-color": "#78877e",
        "text-halo-color": "#f4f5f0",
        "text-halo-width": 1.5,
      },
    },
    {
      id: "overview-city-labels",
      type: "symbol",
      source: "overview-places",
      minzoom: 4,
      filter: ["==", ["get", "kind"], "city"],
      layout: {
        "text-field": ["get", "name"],
        "text-font": FONT,
        "text-size": ["interpolate", ["linear"], ["zoom"], 4, 11, 7, 13],
        "text-anchor": "bottom",
        "text-offset": [0, -1],
        "text-padding": 3,
        "symbol-sort-key": ["get", "rank"],
      },
      paint: {
        "text-color": "#3d535b",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
      },
    },
  ],
};

/** Optional external street tiles over the bundled geographic fallback. */
export const STREET_MAP_STYLE: StyleSpecification = {
  ...OVERVIEW_MAP_STYLE,
  name: "Street map",
  sources: {
    ...OVERVIEW_MAP_STYLE.sources,
    streets: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      maxzoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  },
  layers: [
    ...OVERVIEW_MAP_STYLE.layers,
    { id: "streets", type: "raster", source: "streets" },
  ],
};
