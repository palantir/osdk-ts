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

import type {
  ObjectSet as WireObjectSet,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";

import { ObjectSetCanonicalizer } from "./ObjectSetCanonicalizer.js";

const base = (objectType: string): WireObjectSet => ({
  type: "base",
  objectType,
});

const eq = (
  field: string,
  value: string | number | boolean,
): SearchJsonQueryV2 => ({ type: "eq", field, value });

const filter = (
  objectSet: WireObjectSet,
  where: SearchJsonQueryV2,
): WireObjectSet => ({ type: "filter", objectSet, where });

const and = (...value: SearchJsonQueryV2[]): SearchJsonQueryV2 => ({
  type: "and",
  value,
});

const or = (...value: SearchJsonQueryV2[]): SearchJsonQueryV2 => ({
  type: "or",
  value,
});

const withScore = (
  objectSet: WireObjectSet,
  selectionObjectSet: WireObjectSet,
): WireObjectSet => ({
  type: "withProperties",
  objectSet,
  derivedProperties: {
    score: {
      type: "add",
      properties: [
        { type: "property", apiName: "baseScore" },
        {
          type: "selection",
          objectSet: selectionObjectSet,
          operation: { type: "get", selectedPropertyApiName: "score" },
        },
      ],
    },
  },
});

const throughManager = (objectSet: WireObjectSet): WireObjectSet => ({
  type: "searchAround",
  link: "manager",
  objectSet,
});

describe(ObjectSetCanonicalizer, () => {
  it("matches chained where clauses to one where clause containing both conditions", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const chained = filter(
      filter(employee, eq("active", true)),
      eq("region", "east"),
    );
    const combined = filter(
      employee,
      and(eq("active", true), eq("region", "east")),
    );

    expect(canonicalizer.canonicalize(chained)).toEqual(combined);
    expect(canonicalizer.canonicalize(chained)).toBe(
      canonicalizer.canonicalize(combined),
    );
  });

  it("matches nested, repeated, and reordered AND/OR conditions, including inside NOT", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const nested = filter(
      employee,
      and(
        eq("active", true),
        and(eq("level", 3), { value: true, field: "active", type: "eq" }),
        or(
          eq("region", "west"),
          or(eq("region", "east"), eq("region", "west")),
        ),
        {
          type: "not",
          value: and(eq("suspended", true), eq("contractor", true)),
        },
        or(eq("department", "engineering")),
      ),
    );
    const flat = filter(
      employee,
      and(
        eq("department", "engineering"),
        eq("level", 3),
        eq("active", true),
        or(eq("region", "east"), eq("region", "west")),
        {
          type: "not",
          value: and(eq("contractor", true), eq("suspended", true)),
        },
      ),
    );

    expect(canonicalizer.canonicalize(nested)).toBe(
      canonicalizer.canonicalize(flat),
    );
  });

  it("leaves predicate value arrays and empty logical groups unchanged", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const input = filter(
      base("Employee"),
      and({ type: "in", field: "rank", value: [3, 1, 2] }, or()),
    );

    expect(canonicalizer.canonicalize(input)).toEqual(input);
  });

  it("combines filters on an OT before a pivot without merging them with filters on object type after pivot", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const chained = filter(
      throughManager(
        filter(filter(employee, eq("active", true)), eq("region", "east")),
      ),
      eq("level", 3),
    );
    const combined = filter(
      throughManager(
        filter(employee, and(eq("active", true), eq("region", "east"))),
      ),
      eq("level", 3),
    );

    expect(canonicalizer.canonicalize(chained)).toEqual(combined);
    expect(canonicalizer.canonicalize(chained)).toBe(
      canonicalizer.canonicalize(combined),
    );
    expect(canonicalizer.canonicalize(chained)).not.toBe(
      canonicalizer.canonicalize(
        filter(
          throughManager(employee),
          and(eq("active", true), eq("region", "east"), eq("level", 3)),
        ),
      ),
    );
  });

  it("matches equivalent filters inside an RDP selection while keeping result filters outside the RDP", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const methodInput: WireObjectSet = { type: "methodInput" };
    const chained = filter(
      withScore(
        employee,
        filter(filter(methodInput, eq("enabled", true)), eq("rating", 5)),
      ),
      eq("score", 10),
    );
    const combined = filter(
      withScore(
        employee,
        filter(methodInput, and(eq("enabled", true), eq("rating", 5))),
      ),
      eq("score", 10),
    );

    expect(canonicalizer.canonicalize(chained)).toEqual(combined);
    expect(canonicalizer.canonicalize(chained)).toBe(
      canonicalizer.canonicalize(combined),
    );
  });

  it("matches equivalent filters within union branches without reordering the branches", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const otherBranch = filter(employee, eq("department", "engineering"));
    const chained: WireObjectSet = {
      type: "union",
      objectSets: [
        filter(filter(employee, eq("active", true)), eq("region", "east")),
        otherBranch,
      ],
    };
    const combined: WireObjectSet = {
      type: "union",
      objectSets: [
        filter(employee, and(eq("active", true), eq("region", "east"))),
        otherBranch,
      ],
    };

    expect(canonicalizer.canonicalize(chained)).toEqual(combined);
    expect(canonicalizer.canonicalize(chained)).toBe(
      canonicalizer.canonicalize(combined),
    );
    expect(canonicalizer.canonicalize(chained)).not.toBe(
      canonicalizer.canonicalize({
        type: "union",
        objectSets: [...combined.objectSets].reverse(),
      }),
    );
  });

  it("matches equivalent filters within intersect branches without reordering the branches", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const otherBranch = filter(employee, eq("department", "engineering"));
    const chained: WireObjectSet = {
      type: "intersect",
      objectSets: [
        filter(filter(employee, eq("active", true)), eq("region", "east")),
        otherBranch,
      ],
    };
    const combined: WireObjectSet = {
      type: "intersect",
      objectSets: [
        filter(employee, and(eq("active", true), eq("region", "east"))),
        otherBranch,
      ],
    };

    expect(canonicalizer.canonicalize(chained)).toEqual(combined);
    expect(canonicalizer.canonicalize(chained)).toBe(
      canonicalizer.canonicalize(combined),
    );
    expect(canonicalizer.canonicalize(chained)).not.toBe(
      canonicalizer.canonicalize({
        type: "intersect",
        objectSets: [...combined.objectSets].reverse(),
      }),
    );
  });

  it("matches equivalent filters within subtract branches without reordering the branches", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const otherBranch = filter(employee, eq("department", "engineering"));
    const chained: WireObjectSet = {
      type: "subtract",
      objectSets: [
        filter(filter(employee, eq("active", true)), eq("region", "east")),
        otherBranch,
      ],
    };
    const combined: WireObjectSet = {
      type: "subtract",
      objectSets: [
        filter(employee, and(eq("active", true), eq("region", "east"))),
        otherBranch,
      ],
    };

    expect(canonicalizer.canonicalize(chained)).toEqual(combined);
    expect(canonicalizer.canonicalize(chained)).toBe(
      canonicalizer.canonicalize(combined),
    );
    expect(canonicalizer.canonicalize(chained)).not.toBe(
      canonicalizer.canonicalize({
        type: "subtract",
        objectSets: [...combined.objectSets].reverse(),
      }),
    );
  });
});
