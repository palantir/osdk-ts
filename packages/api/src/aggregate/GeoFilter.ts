/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { BBox, Point, Polygon } from "geojson";
import type { Just } from "./Just.js";
import type { DistanceUnitMapping } from "./WhereClause.js";

export interface GeoFilterOptions {
  "$within":
    | {
      $distance: [number, keyof typeof DistanceUnitMapping];
      $of: [number, number] | Readonly<Point>;
      $bbox?: never;
      $polygon?: never;
    }
    | {
      $bbox: BBox;
      $distance?: never;
      $of?: never;
      $polygon?: never;
    }
    | BBox
    | {
      $polygon: Polygon["coordinates"];
      $bbox?: never;
      $distance?: never;
      $of?: never;
    }
    | Polygon;
  "$intersects":
    | {
      $bbox: BBox;
      $polygon?: never;
    }
    | BBox
    | {
      $polygon: Polygon["coordinates"];
      $bbox?: never;
    }
    | Polygon;
  "$isNull": boolean;
}

export namespace GeoFilter {
  export interface $within extends Just<"$within", GeoFilterOptions> {}
  export interface $intersects extends Just<"$intersects", GeoFilterOptions> {}
  export interface $isNull extends Just<"$isNull", GeoFilterOptions> {}
}

export type GeoFilter =
  | GeoFilter.$within
  | GeoFilter.$intersects
  | GeoFilter.$isNull;
