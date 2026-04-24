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
import type { Employee } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { GenericCanonicalizer } from "./GenericCanonicalizer.js";
import { ObjectSetArrayCanonicalizer } from "./ObjectSetArrayCanonicalizer.js";
import { ObservableClientImpl } from "./ObservableClientImpl.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import { RdpCanonicalizer } from "./RdpCanonicalizer.js";
import { SelectCanonicalizer } from "./SelectCanonicalizer.js";
import type { Store } from "./Store.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

function makeClient(): ObservableClientImpl {
  const store: Pick<
    Store,
    | "whereCanonicalizer"
    | "orderByCanonicalizer"
    | "rdpCanonicalizer"
    | "selectCanonicalizer"
    | "objectSetArrayCanonicalizer"
    | "genericCanonicalizer"
    | "applyAction"
    | "validateAction"
  > = {
    whereCanonicalizer: new WhereClauseCanonicalizer(),
    orderByCanonicalizer: new OrderByCanonicalizer(),
    rdpCanonicalizer: new RdpCanonicalizer(),
    selectCanonicalizer: new SelectCanonicalizer(),
    objectSetArrayCanonicalizer: new ObjectSetArrayCanonicalizer(),
    genericCanonicalizer: new GenericCanonicalizer(),
    applyAction: (() => {}) as unknown as Store["applyAction"],
    validateAction: (() => {}) as unknown as Store["validateAction"],
  };
  return new ObservableClientImpl(store as Store);
}

describe("ObservableClientImpl.canonicalizeOptions", () => {
  it("returns the same withProperties reference for inline RDPs with different function references", () => {
    const client = makeClient();

    const first: DerivedProperty.Clause<typeof Employee> = {
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    const second: DerivedProperty.Clause<typeof Employee> = {
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    // Different literal objects AND different function references.
    expect(first).not.toBe(second);
    expect(first.leadName).not.toBe(second.leadName);

    const canonFirst = client.canonicalizeOptions({ withProperties: first });
    const canonSecond = client.canonicalizeOptions({ withProperties: second });

    expect(canonFirst.withProperties).toBe(canonSecond.withProperties);
  });

  it("returns different withProperties references for semantically different RDPs", () => {
    const client = makeClient();

    const first: DerivedProperty.Clause<typeof Employee> = {
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    const second: DerivedProperty.Clause<typeof Employee> = {
      leadName: (base) => base.pivotTo("lead").selectProperty("employeeId"),
    };

    const canonFirst = client.canonicalizeOptions({ withProperties: first });
    const canonSecond = client.canonicalizeOptions({ withProperties: second });

    expect(canonFirst.withProperties).not.toBe(canonSecond.withProperties);
  });
});
