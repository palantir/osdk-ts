/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectRefMap } from "@osdk/api";
import type { Osdk } from "@osdk/client";
import type { Office } from "@osdk/client.test.ontology";
import { Employee } from "@osdk/client.test.ontology";
import { describe, expectTypeOf, it } from "vitest";
import { useLinks } from "../useLinks.js";

declare const employee: Osdk.Instance<typeof Employee>;
declare const employees: ReadonlyArray<Osdk.Instance<typeof Employee>>;

// `use`-prefixed so the rules-of-hooks lint is satisfied. These probes are
// never invoked at runtime; only their `ReturnType` is inspected by the type
// assertions below, which is what `tsc --noEmit` exercises during typecheck.
function useOneProbe() {
  return useLinks(employee, Employee.links.officeLink);
}

function useManyProbe() {
  return useLinks(employee, Employee.links.peeps);
}

function useMultiManyProbe() {
  return useLinks(employees, Employee.links.peeps);
}

describe("useLinks token overload types", () => {
  it("projects a 'one' token to Osdk.Instance | null | undefined", () => {
    expectTypeOf<ReturnType<typeof useOneProbe>["data"]>()
      .toEqualTypeOf<
        Osdk.Instance<typeof Office, "$allBaseProperties"> | null | undefined
      >();
  });

  it("projects a 'many' token to Osdk.Instance[] | undefined", () => {
    expectTypeOf<ReturnType<typeof useManyProbe>["data"]>()
      .toEqualTypeOf<
        Osdk.Instance<typeof Employee, "$allBaseProperties">[] | undefined
      >();
  });

  it("projects a multi-source 'many' token with a non-optional bySource", () => {
    expectTypeOf<ReturnType<typeof useMultiManyProbe>["data"]>()
      .toEqualTypeOf<
        Osdk.Instance<typeof Employee, "$allBaseProperties">[] | undefined
      >();
    expectTypeOf<ReturnType<typeof useMultiManyProbe>["bySource"]>()
      .toEqualTypeOf<
        ObjectRefMap<
          ReadonlyArray<Osdk.Instance<typeof Employee, "$allBaseProperties">>
        >
      >();
  });
});
