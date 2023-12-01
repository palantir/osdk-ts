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

import path from "node:path";
import type { MinimalFs } from "../../../MinimalFs";
import { formatTs } from "../../../util/test/formatTs";
import { reexportConsts } from "../util/reexportConsts";
import { reexportTypes } from "../util/reexportTypes";

export async function generateFiltersDir(
  runtimeDistDir: string,
  fs: MinimalFs,
) {
  const pagingDir = path.join(runtimeDistDir, "filters");
  await fs.mkdir(pagingDir, { recursive: true });

  await fs.writeFile(
    path.join(pagingDir, "index.ts"),
    await formatTs(
      `export * from "./ArrayFilter";
      export * from "./AttachmentFilter";
      export * from "./BooleanFilter";
      export * from "./DateTimeFilters";
      export * from "./Filters";
      export * from "./GeoPointFilter";
      export * from "./GeoShapeFilter";
      export * from "./NumericFilter";
      export * from "./Op";
      export * from "./OrderByOption";
      export * from "./StringFilter";`,
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "ArrayFilter.ts"),
    await formatTs(
      `import { Attachment, GeoPoint, GeoShape, LocalDate, Timestamp } from "../baseTypes";`
        + reexportTypes(
          ["ArrayFilter"],
          "<T extends string | number | Timestamp | LocalDate | boolean | GeoShape | GeoPoint | Attachment>",
        ) + reexportConsts(["ArrayFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "AttachmentFilter.ts"),
    await formatTs(
      reexportTypes(
        ["AttachmentFilter"],
      ) + reexportConsts(["AttachmentFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "BooleanFilter.ts"),
    await formatTs(
      reexportTypes(
        ["BooleanFilter"],
      ) + reexportConsts(["BooleanFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "GeoPointFilter.ts"),
    await formatTs(
      reexportTypes(
        ["GeoPointFilter", "BoundingBox"],
      ) + reexportConsts(["GeoPointFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "DateTimeFilter.ts"),
    await formatTs(
      reexportTypes(
        ["TimestampFilter", "LocalDateFilter"],
      ) + reexportConsts(["TimestampFilter", "LocalDateFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "GeoShapeFilter.ts"),
    await formatTs(
      reexportTypes(
        ["GeoShapeFilter"],
      ) + reexportConsts(["GeoShapeFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "NumericFilter.ts"),
    await formatTs(
      reexportTypes(
        ["NumericFilter"],
      ) + reexportConsts(["NumericFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "Op.ts"),
    await formatTs(
      reexportTypes(
        ["Op"],
      ) + reexportConsts(["Op"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "OrderByOption.ts"),
    await formatTs(
      reexportTypes(
        ["OrderByOption"],
      ) + reexportConsts(["OrderByOption"]),
    ),
  );
  await fs.writeFile(
    path.join(pagingDir, "StringFilter.ts"),
    await formatTs(
      reexportTypes(
        ["StringFilter"],
      ) + reexportConsts(["StringFilter"]),
    ),
  );

  await fs.writeFile(
    path.join(pagingDir, "Filters.ts"),
    await formatTs(
      `import { OntologyObject } from "@osdk/legacy-client";`
        + reexportTypes([
          "ObjectTypeFilterFunction",
          "ObjectTypeOrderByFunction",
        ], "<T extends OntologyObject>")
        + reexportTypes([
          "BoundingBoxFilter",
          "DistanceOf",
          "SearchClause",
          "LtWhereClause",
          "GtWhereClause",
          "LteWhereClause",
          "GteWhereClause",
          "EqWhereClause",
          "IsNullWhereClause",
          "ContainsWhereClause",
          "StartsWithWhereClause",
          "ContainsAllTermsInOrderWhereClause",
          "ContainsAnyTermWhereClause",
          "ContainsAllTermsWhereClause",
          "WithinDistanceOfWhereClause",
          "WithinBoundingBoxWhereClause",
          "IntersectsBoundingBoxWhereClause",
          "DoesNotIntersectBoundingBoxWhereClause",
          "WithinPolygonWhereClause",
          "IntersectsPolygonWhereClause",
          "DoesNotIntersectPolygonWhereClause",
          "AndWhereClause",
          "OrWhereClause",
          "NotWhereClause",
          "WhereClause",
          "OrderByClause",
        ])
        + reexportTypes(["FilterType"], "<T extends string | number>"),
    ),
  );
}
