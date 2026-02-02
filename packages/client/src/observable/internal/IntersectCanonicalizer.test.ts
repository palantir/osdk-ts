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
import { IntersectCanonicalizer } from "./IntersectCanonicalizer.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

describe(IntersectCanonicalizer, () => {
  it("is order-independent for intersectWith array", () => {
    const wcc = new WhereClauseCanonicalizer();
    const ic = new IntersectCanonicalizer(wcc);

    const intersectWith1 = [
      { where: { id: { $eq: "1" } } },
      { where: { id: { $eq: "2" } } },
    ];

    const intersectWith2 = [
      { where: { id: { $eq: "2" } } },
      { where: { id: { $eq: "1" } } },
    ];

    const canon1 = ic.canonicalize(intersectWith1);
    const canon2 = ic.canonicalize(intersectWith2);

    expect(canon1).toBe(canon2);
  });

  it("handles empty intersectWith array", () => {
    const wcc = new WhereClauseCanonicalizer();
    const ic = new IntersectCanonicalizer(wcc);

    const canon = ic.canonicalize([]);

    expect(canon).toEqual([]);
  });

  it("handles single-element intersectWith array", () => {
    const wcc = new WhereClauseCanonicalizer();
    const ic = new IntersectCanonicalizer(wcc);

    const intersectWith = [{ where: { id: { $eq: "1" } } }];

    const canon = ic.canonicalize(intersectWith);

    expect(canon).toHaveLength(1);
  });
});
