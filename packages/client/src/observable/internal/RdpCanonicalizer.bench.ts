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

import type { DerivedProperty } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { bench, describe } from "vitest";

import { RdpCanonicalizer } from "./RdpCanonicalizer.js";

const clauses: DerivedProperty.Clause<Employee>[] = Array.from(
  { length: 1000 },
  (_, id) => ({
    count: (base) => base.where({ employeeId: id }).aggregate("$count"),
  }),
);

describe("RDP canonicalization with distinct filter values", () => {
  bench("100 filters", () => {
    const canonicalizer = new RdpCanonicalizer();
    for (const clause of clauses.slice(0, 100))
      canonicalizer.canonicalizeForType(clause, Employee);
  });
  bench("1000 filters", () => {
    const canonicalizer = new RdpCanonicalizer();
    for (const clause of clauses)
      canonicalizer.canonicalizeForType(clause, Employee);
  });
});
