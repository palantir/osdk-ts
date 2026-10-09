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

import type { WhereClause } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";

import { modernToLegacyWhereClause } from "../../internal/conversions/modernToLegacyWhereClause.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

describe(WhereClauseCanonicalizer, () => {
  it("canonicalizes serialized SDK clauses and preconstructed predicates together", () => {
    const c = new WhereClauseCanonicalizer();
    const flat: WhereClause<Employee> = {
      employeeId: 5,
      fullName: { $ne: "Alice" },
    };
    const nested: WhereClause<Employee> = {
      $and: [
        { $not: { fullName: "Alice" } },
        { $and: [{ employeeId: { $eq: 5 } }, { employeeId: 5 }] },
      ],
    };

    const wire = modernToLegacyWhereClause(c.canonicalize(flat), Employee);
    const canonical = c.canonicalizeWire(wire);
    expect(
      c.canonicalizeWire(
        modernToLegacyWhereClause(c.canonicalize(nested), Employee),
      ),
    ).toBe(canonical);
    expect(c.canonicalizeWire(wire)).toBe(canonical);
    expect(canonical).toEqual({
      type: "and",
      value: [
        { type: "eq", field: "employeeId", value: 5 },
        {
          type: "not",
          value: { type: "eq", field: "fullName", value: "Alice" },
        },
      ],
    });
    expect(
      c.canonicalizeWire({ type: "eq", field: "employeeId", value: 6 }),
    ).not.toBe(canonical);
    expect(
      c.canonicalizeWire({
        type: "eq",
        propertyIdentifier: { type: "property", apiName: "employeeId" },
        value: 5,
      }),
    ).not.toBe(
      c.canonicalizeWire({ type: "eq", field: "employeeId", value: 5 }),
    );
  });

  it("does not merge unrelated queries", () => {
    const c = new WhereClauseCanonicalizer();
    const w1: WhereClause<Employee> = {
      $and: [
        {
          employeeId: 5,
        },
      ],
    };

    const w2: WhereClause<Employee> = {
      $and: [
        {
          class: "hi",
        },
      ],
    };

    const r1 = c.canonicalize(w1);
    const r2 = c.canonicalize(w2);

    // ref equals
    expect(r1).not.toBe(r2);
  });

  it("canonizes two equal (but not ref equal) where clauses", () => {
    const c = new WhereClauseCanonicalizer();
    const w1: WhereClause<Employee> = {
      $and: [
        {
          employeeId: 5,
        },
      ],
    };

    const w2: WhereClause<Employee> = {
      $and: [
        {
          employeeId: 5,
        },
      ],
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
    const w1: WhereClause<Employee> = {
      employeeId: { $eq: 5 },
    };

    const w2: WhereClause<Employee> = {
      employeeId: 5,
    };

    const r1 = c.canonicalize(w1);
    const r2 = c.canonicalize(w2);

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({ employeeId: 5 });
  });

  it("flattens an $and with one entry", () => {
    const c = new WhereClauseCanonicalizer();
    const w1: WhereClause<Employee> = {
      $and: [
        {
          employeeId: 5,
        },
      ],
    };

    const w2: WhereClause<Employee> = {
      employeeId: 5,
    };

    const r1 = c.canonicalize(w1);
    const r2 = c.canonicalize(w2);

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({ employeeId: 5 });
  });

  it("flattens an $and with one entry", () => {
    const c = new WhereClauseCanonicalizer();
    const w1: WhereClause<Employee> = {
      $and: [
        {
          employeeId: 5,
          class: "what",
        },
      ],
    };

    const w2: WhereClause<Employee> = {
      employeeId: 5,
      class: "what",
    };

    const r1 = c.canonicalize(w1);
    const r2 = c.canonicalize(w2);

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({ employeeId: 5, class: "what" });
  });

  it("flattens an $and with zero entries", () => {
    const c = new WhereClauseCanonicalizer();
    const w1: WhereClause<Employee> = {
      $and: [],
    };

    const w2: WhereClause<Employee> = {};

    const r1 = c.canonicalize(w1);
    const r2 = c.canonicalize(w2);

    // ref equals (since they are the same)
    expect(r1).toBe(r2);

    // deep equals
    expect(r1).toEqual({});
  });
});
