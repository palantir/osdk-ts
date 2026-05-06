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

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, expectTypeOf, it } from "vitest";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import { renderQuickInfoProbes } from "./probeUtils.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const tsconfigPath = path.resolve(here, "../../tsconfig.json");
const probesDir = path.resolve(here, "probes");

// Auto-discover every `probes/*.ts` file. Add a new surface by dropping a
// `probes/<name>.ts` file alongside the existing ones; the test will pick
// it up on the next run. All probe files share one TS program.
const probesFiles = fs.readdirSync(probesDir).filter((f) => f.endsWith(".ts"))
  .sort();
const allProbes = renderQuickInfoProbes({
  probesPaths: probesFiles.map((f) => path.join(probesDir, f)),
  tsconfigPath,
});

for (const probesFile of probesFiles) {
  const surface = probesFile.replace(/\.ts$/, "");
  it(surface, async () => {
    await expect(allProbes[path.join(probesDir, probesFile)])
      .toMatchFileSnapshot(`./__snapshots__/${surface}.snap`);
  });
}

// Compile-time check that every public member of `ObjectSet` is acknowledged
// in one of these unions. When a new method is added to `ObjectSet`,
// typecheck fails and names the missing key, forcing the author to decide
// whether to add a probe or to skip it.

type ProbedObjectSetMethods =
  | "where"
  | "subscribe"
  | "fetchPage"
  | "fetchPageWithErrors"
  | "asyncIter"
  | "aggregate"
  | "withProperties";

type SkippedObjectSetMethods =
  | "$objectSetInternals" // internal marker, not part of user-facing surface
  | "fetchOne" // shape mirrors fetchPage's element type
  | "fetchOneWithErrors" // shape mirrors fetchOne
  | "experimental_asyncIterLinks" // experimental; not stable enough to pin
  | "intersect" // returns `this` — uninteresting quickinfo
  | "subtract" // returns `this`
  | "union" // returns `this`
  | "narrowToType" // exhaustively covered in ObjectSet.test.ts
  | "nearestNeighbors" // exhaustively covered in ObjectSet.test.ts
  | "pivotTo"; // exhaustively covered in ObjectSet.test.ts

type KnownObjectSetMethods = ProbedObjectSetMethods | SkippedObjectSetMethods;

describe("ObjectSet method coverage", () => {
  it("KnownObjectSetMethods covers all ObjectSet members", () => {
    expectTypeOf<keyof ObjectSet<EmployeeApiTest>>()
      .toEqualTypeOf<KnownObjectSetMethods>();
  });
});
