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

import type { RequestHandler } from "msw";
import type { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
import { getObjectsFromSet } from "../FauxFoundry/getObjectsFromSet.js";
import { OntologiesV2 } from "../mock/index.js";

export const createObjectSetHandlers = (
  baseUrl: string,
  fauxFoundry: FauxFoundry,
): Array<RequestHandler> => [
  /**
   * Load ObjectSet Objects
   */
  OntologiesV2.OntologyObjectSets.load(
    baseUrl,
    async ({ request, params }) => {
      const a = fauxFoundry
        .getDataStore(params.ontologyApiName)
        .getObjectsFromObjectSet(await request.json());
      return a;
    },
  ),

  /**
   * Aggregate Objects in ObjectSet
   */
  OntologiesV2.OntologyObjectSets.aggregate(
    baseUrl,
    async ({ request, params }) => {
      const body = await request.json();
      const ds = fauxFoundry.getDataStore(params.ontologyApiName);
      const objects = getObjectsFromSet(ds, body.objectSet, undefined);

      const exactGroupBys = body.groupBy.filter(
        (g): g is Extract<typeof g, { type: "exact" }> => g.type === "exact",
      );

      if (exactGroupBys.length !== body.groupBy.length) {
        throw new Error(
          "FauxFoundry aggregate: only 'exact' groupBy type is supported",
        );
      }

      if (exactGroupBys.length === 0) {
        return {
          accuracy: "ACCURATE",
          data: [{
            group: {},
            metrics: [{ name: "count", value: objects.length }],
          }],
        };
      }

      if (exactGroupBys.length > 1) {
        throw new Error(
          `FauxFoundry aggregate: multi-dimensional groupBy not yet implemented (got ${exactGroupBys.length} fields)`,
        );
      }

      const { field, includeNullValues } = exactGroupBys[0];
      if (field == null) {
        throw new Error(
          "FauxFoundry aggregate: groupBy field is required",
        );
      }
      const groups = new Map<string | null, number>();

      for (const obj of objects) {
        const rawValue = obj[field];
        const key = rawValue == null ? null : String(rawValue);

        if (key == null && !includeNullValues) {
          continue;
        }

        groups.set(key, (groups.get(key) ?? 0) + 1);
      }

      const data = Array.from(groups.entries()).map(
        ([key, count]: [string | null, number]) => ({
          group: { [field]: key },
          metrics: [{ name: "count", value: count }],
        }),
      );

      return { accuracy: "ACCURATE", data };
    },
  ),

  /**
   * Load interface objectset Objects
   */
  OntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
    baseUrl,
    async ({ params, request }) => {
      const pagedResponse = fauxFoundry
        .getDataStore(params.ontologyApiName)
        .getObjectsFromObjectSet(await request.json());

      const objectApiNames = new Set(pagedResponse.data.map(o => o.__apiName));

      return {
        interfaceToObjectTypeMappings: fauxFoundry
          .getOntology(params.ontologyApiName)
          .getInterfaceToObjectTypeMappings(objectApiNames),
        interfaceToObjectTypeMappingsV2: {},
        ...pagedResponse,
        propertySecurities: [],
      };
    },
  ),
];
