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
  it("returns same reference regardless of clause order", () => {
    const whereCanonicalizer = new WhereClauseCanonicalizer();
    const ic = new IntersectCanonicalizer(whereCanonicalizer);

    const clause1 = { where: { name: "Alice" } };
    const clause2 = { where: { age: { $gt: 30 } } };

    const a = ic.canonicalize([clause1, clause2]);
    const b = ic.canonicalize([clause2, clause1]);

    expect(a).toBe(b);
  });

  it("returns same reference for identical clauses in same order", () => {
    const whereCanonicalizer = new WhereClauseCanonicalizer();
    const ic = new IntersectCanonicalizer(whereCanonicalizer);

    const a = ic.canonicalize([{ where: { x: 1 } }]);
    const b = ic.canonicalize([{ where: { x: 1 } }]);

    expect(a).toBe(b);
  });

  it("returns different references for different clauses", () => {
    const whereCanonicalizer = new WhereClauseCanonicalizer();
    const ic = new IntersectCanonicalizer(whereCanonicalizer);

    const a = ic.canonicalize([{ where: { x: 1 } }]);
    const b = ic.canonicalize([{ where: { y: 2 } }]);

    expect(a).not.toBe(b);
  });
});
