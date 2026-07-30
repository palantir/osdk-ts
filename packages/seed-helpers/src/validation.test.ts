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

// cspell:words asdf

import type * as Ontology from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";

import { validateSeedObject } from "./validation.js";

type WireType = Ontology.ObjectPropertyType["type"];

/** Builds an `ObjectTypeV2` fixture from a compact property spec. */
function makeObjectType(
  apiName: string,
  primaryKey: string,
  properties: Record<string, WireType>,
): Ontology.ObjectTypeV2 {
  return {
    apiName,
    primaryKey,
    titleProperty: primaryKey,
    properties: Object.fromEntries(
      Object.entries(properties).map(([name, type]) => [
        name,
        { dataType: { type } },
      ]),
    ),
  } as unknown as Ontology.ObjectTypeV2;
}

describe("validateSeedObject", () => {
  const employeeType = makeObjectType("Employee", "employeeId", {
    employeeId: "string",
    firstName: "string",
    age: "integer",
    createdAt: "timestamp",
    score: "long",
  });

  it("passes for valid seed data, including well-formed string encodings", () => {
    expect(() =>
      validateSeedObject(
        {
          employeeId: "emp-001",
          firstName: "Alice",
          age: 30,
          createdAt: "2025-01-01T00:00:00Z",
          score: "9007199254740993",
        },
        employeeType,
      ),
    ).not.toThrow();
  });

  it("throws immediately on structural violations", () => {
    // Unknown property name.
    expect(() =>
      validateSeedObject({ employeeId: "emp-001", badProp: "x" }, employeeType),
    ).toThrow(
      /Property 'badProp' on 'Employee' object \(primary key emp-001\) is not defined in the ontology/u,
    );
    // Null value — and the identity falls back to <unknown> without a primary key.
    expect(() =>
      validateSeedObject(
        { employeeId: "emp-001", firstName: null },
        employeeType,
      ),
    ).toThrow(
      /Property 'firstName' on 'Employee' object \(primary key emp-001\) is null or undefined/u,
    );
    expect(() => validateSeedObject({ firstName: null }, employeeType)).toThrow(
      /Property 'firstName' on 'Employee' object \(primary key <unknown>\) is null or undefined/u,
    );
    // JS type mismatch in either direction.
    expect(() =>
      validateSeedObject(
        { employeeId: "emp-001", createdAt: 12345 },
        employeeType,
      ),
    ).toThrow(
      /Property 'createdAt' on 'Employee' object \(primary key emp-001\) expects timestamp \(a string\) but got number/u,
    );
    expect(() =>
      validateSeedObject({ employeeId: "emp-001", age: "30" }, employeeType),
    ).toThrow(
      /Property 'age' on 'Employee' object \(primary key emp-001\) expects integer \(a number\) but got string/u,
    );
  });

  it("collects every string-format error and reports them together", () => {
    try {
      validateSeedObject(
        { employeeId: "emp-001", createdAt: "asdf", score: "not-a-number" },
        employeeType,
      );
      expect.unreachable("should have thrown");
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      const msg = (e as Error).message;
      expect(msg).toMatch(
        /property 'createdAt' has invalid timestamp format: 'asdf'/u,
      );
      expect(msg).toMatch(/property 'score' has invalid long format/u);
    }
  });
});
