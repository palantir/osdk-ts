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

import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, expectTypeOf, it } from "vitest";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import { renderHoverProbes, snapshotValue } from "./hoverProbes.js";
import type { KnownObjectSetMethods } from "./objectSetProbes.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const tsconfigPath = path.resolve(here, "../../tsconfig.json");

// Wire one probes file into a flat `it.each` of snapshot assertions. Add a
// new surface by dropping a `<name>Probes.ts` file alongside this one and
// adding another `snapshotProbes(...)` call inside its own `describe`.
function snapshotProbes(probesFile: string): void {
  const probes = renderHoverProbes({
    probesPath: path.resolve(here, probesFile),
    tsconfigPath,
  });
  it.each(Object.keys(probes).sort())("%s", (name) => {
    expect(snapshotValue(probes[name])).toMatchSnapshot();
  });
}

describe("ObjectSet hover types", () => {
  // Each probe gets its own snapshot key, so changing one type only dirties
  // its own snapshot in code review. Add or edit a probe in
  // `objectSetProbes.ts` and refresh with `pnpm updateSnapshots` from the
  // repo root.
  snapshotProbes("objectSetProbes.ts");

  // Force objectSetProbes.ts to be updated when ObjectSet grows or loses a
  // method. Compile-time assertion: every key of `ObjectSet<EmployeeApiTest>`
  // must be listed in `KnownObjectSetMethods` (probed or intentionally
  // skipped). When someone adds a new method, this fails to typecheck and
  // names the missing key — at which point the author decides whether to
  // add a probe.
  it("KnownObjectSetMethods covers all ObjectSet members", () => {
    expectTypeOf<keyof ObjectSet<EmployeeApiTest>>()
      .toEqualTypeOf<KnownObjectSetMethods>();
  });
});

describe("Osdk.Instance hover types", () => {
  snapshotProbes("osdkInstanceProbes.ts");
});

describe("AggregationsResults hover types", () => {
  snapshotProbes("aggregationsResultsProbes.ts");
});
