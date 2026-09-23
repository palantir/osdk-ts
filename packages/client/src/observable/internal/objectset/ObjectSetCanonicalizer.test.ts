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

const throughManager = (objectSet: WireObjectSet): WireObjectSet =>
  filter({ type: "searchAround", link: "manager", objectSet }, eq("level", 3));

describe(ObjectSetCanonicalizer, () => {
  it("gives equivalent nested and flat filters one canonical form", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const nested = filter(
      filter(employee, eq("c", 3)),
      and(
        eq("b", 2),
        and(eq("a", 1), { value: 2, field: "b", type: "eq" }),
        or(eq("z", 6), or(eq("y", 5), eq("z", 6))),
        {
          type: "not",
          value: and(eq("q", 8), eq("p", 7)),
        },
        or(eq("d", 4)),
        { type: "in", field: "rank", value: [3, 1, 2] },
        or(),
      ),
    );
    const expected = filter(
      employee,
      and(
        eq("a", 1),
        eq("b", 2),
        eq("c", 3),
        eq("d", 4),
        { type: "in", field: "rank", value: [3, 1, 2] },
        { type: "not", value: and(eq("p", 7), eq("q", 8)) },
        or(),
        or(eq("y", 5), eq("z", 6)),
      ),
    );

    expect(canonicalizer.canonicalize(nested)).toEqual(expected);
    expect(canonicalizer.canonicalize(expected)).toEqual(expected);
    expect(canonicalizer.canonicalize(nested)).toBe(
      canonicalizer.canonicalize(expected),
    );
  });

  it("normalizes inside operation and RDP boundaries while retaining operand order", () => {
    const canonicalizer = new ObjectSetCanonicalizer();
    const employee = base("Employee");
    const operands = [base("Zebra"), base("Antelope")];
    const union: WireObjectSet = { type: "union", objectSets: operands };
    const intersect: WireObjectSet = {
      type: "intersect",
      objectSets: operands,
    };
    const inputPivot = throughManager(
      filter(filter(employee, eq("active", true)), eq("region", "east")),
    );
    const expectedPivot = throughManager(
      filter(employee, and(eq("active", true), eq("region", "east"))),
    );
    const methodInput: WireObjectSet = { type: "methodInput" };
    const inputRdp = withScore(
      union,
      filter(filter(methodInput, eq("enabled", true)), eq("rating", 5)),
    );
    const expectedRdp = withScore(
      union,
      filter(methodInput, and(eq("enabled", true), eq("rating", 5))),
    );

    expect(
      canonicalizer.canonicalize({
        type: "subtract",
        objectSets: [inputPivot, inputRdp, intersect],
      }),
    ).toEqual({
      type: "subtract",
      objectSets: [expectedPivot, expectedRdp, intersect],
    });
  });
});
