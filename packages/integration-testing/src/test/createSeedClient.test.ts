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

import type * as Ontology from "@osdk/foundry.ontologies";
import type { SeedOutput } from "@osdk/seed-helpers";
import { describe, expect, it } from "vitest";

import { createSeedClient } from "../createSeedClient.js";
import { EMPTY_ONTOLOGY_METADATA } from "./emptyOntologyMetadata.js";

const employee = { type: "object", apiName: "Employee" } as const;
const metadata: Ontology.OntologyFullMetadata = {
  ...EMPTY_ONTOLOGY_METADATA,
  objectTypes: {
    Employee: {
      objectType: {
        apiName: "Employee",
        primaryKey: "employeeId",
        titleProperty: "fullName",
        properties: {
          employeeId: { dataType: { type: "integer" } },
          fullName: { dataType: { type: "string" } },
        },
      },
      linkTypes: [],
    } as unknown as Ontology.ObjectTypeFullMetadata,
  },
};

describe("createSeedClient", () => {
  it.each([undefined, null])(
    "creates and clears properties set to %s while preserving omitted updates",
    async (fullName) => {
      const seeds: SeedOutput[] = [];
      const seed = createSeedClient({
        baseUrl: "https://localhost",
        metadata,
        fetchFn: (_input, init) => {
          seeds.push(JSON.parse(init?.body as string));
          return Promise.resolve(
            new Response("{}", {
              headers: { "Content-Type": "application/json" },
            }),
          );
        },
      });

      const ref = await seed.create(employee, {
        employeeId: 1,
        fullName,
      });
      expect(seeds.at(-1)?.objects.Employee).toStrictEqual([{ employeeId: 1 }]);

      await seed.update(ref, { fullName: "Alice" });
      expect(seeds.at(-1)?.objects.Employee).toStrictEqual([
        { employeeId: 1, fullName: "Alice" },
      ]);

      await seed.update(ref, {});
      expect(seeds.at(-1)?.objects.Employee).toStrictEqual([
        { employeeId: 1, fullName: "Alice" },
      ]);

      await seed.update(ref, { fullName });
      expect(seeds.at(-1)?.objects.Employee).toStrictEqual([{ employeeId: 1 }]);
      expect(seed.ref(employee, 1)).not.toHaveProperty("fullName");
    },
  );
});
