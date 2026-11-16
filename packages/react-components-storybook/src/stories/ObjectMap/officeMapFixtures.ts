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

import type { MapFeature } from "@osdk/react-components/experimental/object-map";

export interface DemoOffice {
  id: string;
  name: string;
  city: string;
  seats: number;
  people: number;
  coordinates: [number, number];
}

/** Synthetic offices and capacity figures for a shareable, credential-free demo. */
export const DEMO_OFFICES: readonly DemoOffice[] = [
  {
    id: "boston",
    name: "Harbor office",
    city: "Boston",
    seats: 80,
    people: 74,
    coordinates: [-71.0589, 42.3601],
  },
  {
    id: "new-york",
    name: "Midtown office",
    city: "New York",
    seats: 140,
    people: 136,
    coordinates: [-73.9857, 40.7484],
  },
  {
    id: "philadelphia",
    name: "Market Street office",
    city: "Philadelphia",
    seats: 60,
    people: 38,
    coordinates: [-75.1652, 39.9526],
  },
  {
    id: "washington",
    name: "Capitol office",
    city: "Washington",
    seats: 100,
    people: 62,
    coordinates: [-77.0369, 38.9072],
  },
  {
    id: "pittsburgh",
    name: "Riverfront office",
    city: "Pittsburgh",
    seats: 50,
    people: 48,
    coordinates: [-79.9959, 40.4406],
  },
  {
    id: "raleigh",
    name: "Research office",
    city: "Raleigh",
    seats: 90,
    people: 53,
    coordinates: [-78.6382, 35.7796],
  },
];

export function officeFeature(office: DemoOffice): MapFeature {
  return {
    id: office.id,
    label: `${office.name} · ${office.city}`,
    geometry: { type: "Point", coordinates: office.coordinates },
  };
}

export const OFFICE_FEATURES: readonly MapFeature[] =
  DEMO_OFFICES.map(officeFeature);

export const GEOMETRY_FEATURES: readonly MapFeature[] = [
  {
    id: "site",
    label: "Example site boundary",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-77.05, 38.9],
          [-77.02, 38.9],
          [-77.02, 38.92],
          [-77.05, 38.92],
          [-77.05, 38.9],
        ],
      ],
    },
  },
  {
    id: "route",
    label: "Example service route",
    geometry: {
      type: "LineString",
      coordinates: [
        [-77.06, 38.895],
        [-77.035, 38.91],
        [-77.01, 38.925],
      ],
    },
  },
  {
    id: "office",
    label: "Example office",
    geometry: { type: "Point", coordinates: [-77.035, 38.91] },
  },
];
