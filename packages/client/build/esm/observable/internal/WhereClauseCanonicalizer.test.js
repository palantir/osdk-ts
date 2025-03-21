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
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";
describe(WhereClauseCanonicalizer, () => {
  it("does not merge unrelated queries", () => {
    const c = new WhereClauseCanonicalizer();
    const r1 = c.canonicalize({
      $and: [{
        employeeId: 5
      }]
    });
    const r2 = c.canonicalize({
      $and: [{
        class: "hi"
      }]
    });

    // ref equals
    expect(r1).not.toBe(r2);
  });
  it("canonizes two equal (but not ref equal) where clauses", () => {
    const c = new WhereClauseCanonicalizer();
    const w1 = {
      $and: [{
        employeeId: 5
      }]
    };
    const w2 = {
      $and: [{
        employeeId: 5
      }]
    };

    // objects are deep equal
    expect(w1).toEqual(w2);
    const r1 = c.canonicalize(w1);
    const r2 = c.canonicalize(w2);

    // ref equals (since they are the same)
    expect(r1).toBe(r2);
  });
  it("flattens $eq", () => {
    const c = new WhereClauseCanonicalizer();
    const r1 = c.canonicalize({
      employeeId: {
        $eq: 5
      }
    });
    const r2 = c.canonicalize({
      employeeId: 5
    });

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({
      employeeId: 5
    });
  });
  it("flattens an $and with one entry", () => {
    const c = new WhereClauseCanonicalizer();
    const r1 = c.canonicalize({
      $and: [{
        employeeId: 5
      }]
    });
    const r2 = c.canonicalize({
      employeeId: 5
    });

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({
      employeeId: 5
    });
  });
  it("flattens an $and with one entry", () => {
    const c = new WhereClauseCanonicalizer();
    const r1 = c.canonicalize({
      $and: [{
        employeeId: 5,
        class: "what"
      }]
    });
    const r2 = c.canonicalize({
      employeeId: 5,
      class: "what"
    });

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({
      employeeId: 5,
      class: "what"
    });
  });
  it("flattens an $and with zero entries", () => {
    const c = new WhereClauseCanonicalizer();
    const r1 = c.canonicalize({
      $and: []
    });
    const r2 = c.canonicalize({});

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({});
  });
});
//# sourceMappingURL=WhereClauseCanonicalizer.test.js.map