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

import type { DerivedProperty } from "@osdk/api";
import type { Employee } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { RdpCanonicalizer } from "./RdpCanonicalizer.js";

describe("RdpCanonicalizer", () => {
  it("returns same canonical object for functionally identical RDPs with different function references", () => {
    const canonicalizer = new RdpCanonicalizer();

    // Create first RDP with a function
    const rdp1: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    // Create second RDP with new function references but same logic
    const rdp2: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    // The functions should have different references
    expect(rdp1.derivedAddress).not.toBe(rdp2.derivedAddress);
    expect(rdp1.derivedName).not.toBe(rdp2.derivedName);

    // But canonicalization should return the same object
    const canonical1 = canonicalizer.canonicalize(rdp1);
    const canonical2 = canonicalizer.canonicalize(rdp2);

    expect(canonical1).toBe(canonical2);
  });

  it("handles complex RDP with aggregations", () => {
    const canonicalizer = new RdpCanonicalizer();

    const rdp1: DerivedProperty.Clause<typeof Employee> = {
      peepsCount: (base) => base.pivotTo("peeps").aggregate("$count"),
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    const rdp2: DerivedProperty.Clause<typeof Employee> = {
      peepsCount: (base) => base.pivotTo("peeps").aggregate("$count"),
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    const canonical1 = canonicalizer.canonicalize(rdp1);
    const canonical2 = canonicalizer.canonicalize(rdp2);

    expect(canonical1).toBe(canonical2);
  });

  it("caches results for the same input object", () => {
    const canonicalizer = new RdpCanonicalizer();

    const rdp: DerivedProperty.Clause<typeof Employee> = {
      derivedProp: (base) => base.pivotTo("lead").selectProperty("employeeId"),
    };

    const canonical1 = canonicalizer.canonicalize(rdp);
    const canonical2 = canonicalizer.canonicalize(rdp);

    // Same input object should return cached result
    expect(canonical1).toBe(canonical2);
  });
});
