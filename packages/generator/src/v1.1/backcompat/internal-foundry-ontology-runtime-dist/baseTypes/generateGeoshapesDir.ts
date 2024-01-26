/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import * as path from "node:path";
import type { MinimalFs } from "../../../../MinimalFs";
import { formatTs } from "../../../../util/test/formatTs";
import { reexportConsts } from "../../util/reexportConsts";
import { reexportTypes } from "../../util/reexportTypes";

export async function generateGeoshapesDir(
  runtimeDistDir: string,
  fs: MinimalFs,
) {
  await fs.mkdir(runtimeDistDir, { recursive: true });

  await fs.writeFile(
    path.join(runtimeDistDir, "index.ts"),
    await formatTs(
      `export * from "./Distance";
       export * from "./GeoJson";
       export * from "./GeometryCollection";
       export * from "./GeoPoint";
       export * from "./GeoShape";
       export * from "./LineString";
       export * from "./MultiGeoPoint";
       export * from "./MultiLineString";
       export * from "./MultiPolygon";
       export * from "./Polygon";`,
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "Distance.ts"),
    await formatTs(
      ``
        + reexportConsts(["Distance", "DistanceUnit"])
        + reexportTypes(["Distance", "DistanceUnit"]),
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "GeoJson.ts"),
    await formatTs(
      reexportTypes([
        "GeoJsonPoint",
        "GeoJsonPolygon",
        "GeoJsonLineString",
        "GeoJsonMultiPoint",
        "GeoJsonMultiPolygon",
        "GeoJsonMultiLineString",
        "GeoJsonGeometryCollection",
        "GeoJsonGeometry",
        "GeoJson",
      ]),
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "GeometryCollection.ts"),
    await formatTs(reexportConsts(["GeometryCollection"])),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "GeoPoint.ts"),
    await formatTs(
      ``
        + reexportConsts([
          "isGeoPoint",
          "GeoPoint",
          "mapCoordinatesToGeoPoint",
        ])
        + reexportTypes(["GeoHash", "Coordinates", "GeoPoint"]),
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "GeoShape.ts"),
    await formatTs(reexportConsts(["GeoShape"]) + reexportTypes(["GeoShape"])),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "LineString.ts"),
    await formatTs(
      reexportConsts(["LineString"]) + reexportTypes(["LineString"]),
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "MultiGeoPoint.ts"),
    await formatTs(
      reexportConsts(["MultiGeoPoint"]) + reexportTypes(["MultiGeoPoint"]),
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "MultiLineString.ts"),
    await formatTs(
      reexportConsts(["MultiLineString"]) + reexportTypes(["MultiLineString"]),
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "MultiPolygon.ts"),
    await formatTs(
      reexportConsts(["MultiPolygon"]) + reexportTypes(["MultiPolygon"]),
    ),
  );

  await fs.writeFile(
    path.join(runtimeDistDir, "Polygon.ts"),
    await formatTs(
      reexportConsts(["Polygon"]) + reexportTypes(["LinearRing", "Polygon"]),
    ),
  );
}
