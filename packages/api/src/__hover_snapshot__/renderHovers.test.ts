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

const probes = renderHoverProbes({
  probesPath: path.resolve(here, "objectSetProbes.ts"),
  tsconfigPath: path.resolve(here, "../../tsconfig.json"),
});
const probeNames = Object.keys(probes).sort();

describe("ObjectSet hover types", () => {
  // Each probe gets its own snapshot key, so changing one type only dirties
  // its own snapshot in code review. Add or edit a probe in
  // `objectSetProbes.ts` and refresh with `pnpm updateSnapshots` from the
  // repo root.
  it.each(probeNames)("%s", (name) => {
    expect(snapshotValue(probes[name])).toMatchSnapshot();
  });

  // Force objectSetProbes.ts to be updated when ObjectSet grows or loses a
  // method.
  // Compile-time assertion: every key of `ObjectSet<EmployeeApiTest>` must be
  // listed in `KnownObjectSetMethods` (probed or intentionally skipped). When
  // someone adds a new method, this fails to typecheck and names the missing
  // key — at which point the author decides whether to add a probe.
  it("KnownObjectSetMethods covers all ObjectSet members", () => {
    expectTypeOf<keyof ObjectSet<EmployeeApiTest>>()
      .toEqualTypeOf<KnownObjectSetMethods>();
  });
});
