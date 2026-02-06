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

import { describe, expect, it } from "vitest";
import { RidListCanonicalizer } from "./RidListCanonicalizer.js";

describe("RidListCanonicalizer", () => {
  it("sorts, deduplicates, and returns same instance for equivalent arrays", () => {
    const canon = new RidListCanonicalizer();

    const result1 = canon.canonicalize(["rid-b", "rid-a", "rid-c"]);
    const result2 = canon.canonicalize(["rid-c", "rid-b", "rid-a"]);
    const result3 = canon.canonicalize(["rid-a", "rid-a", "rid-b", "rid-c"]);
    const result4 = canon.canonicalize(["rid-a", "rid-b", "rid-c"]);

    expect(result1).toEqual(["rid-a", "rid-b", "rid-c"]);
    expect(result1).toBe(result2);
    expect(result1).toBe(result3);
    expect(result1).toBe(result4);

    const different = canon.canonicalize(["rid-x", "rid-y"]);
    expect(different).toEqual(["rid-x", "rid-y"]);
    expect(different).not.toBe(result1);
  });

  it("deduplicates RIDs ensuring [1,2] and [1,1,2] share cache key", () => {
    const canon = new RidListCanonicalizer();

    const withoutDupes = canon.canonicalize(["rid-1", "rid-2"]);
    const withDupes = canon.canonicalize(["rid-1", "rid-1", "rid-2"]);
    const reversed = canon.canonicalize(["rid-2", "rid-1"]);
    const manyDupes = canon.canonicalize(["rid-2", "rid-1", "rid-2", "rid-1"]);

    // All should return the exact same canonical instance (same cache key)
    expect(withoutDupes).toBe(withDupes);
    expect(withoutDupes).toBe(reversed);
    expect(withoutDupes).toBe(manyDupes);

    // Verify the canonical form
    expect(withoutDupes).toEqual(["rid-1", "rid-2"]);
  });
});
