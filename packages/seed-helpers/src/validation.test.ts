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

import { describe, expect, it } from "vitest";

import type { SchemaMap } from "./schema.js";
import { SeedError } from "./SeedError.js";
import type { SeedOutput } from "./types.js";
import { validateSeedObjects } from "./validation.js";

/** Builds a minimal SchemaMap fixture with Employee and Department. */
function fixtureSchema(): SchemaMap {
  const employeeProps = new Map<string, string>([
    ["employeeId", "string"],
    ["firstName", "string"],
    ["age", "integer"],
    ["createdAt", "timestamp"],
    ["score", "long"],
  ]);
  const departmentProps = new Map<string, string>([
    ["departmentId", "string"],
    ["name", "string"],
  ]);
  return {
    objects: new Map([
      [
        "Employee",
        { properties: employeeProps, primaryKeyApiName: "employeeId" },
      ],
      [
        "Department",
        { properties: departmentProps, primaryKeyApiName: "departmentId" },
      ],
    ]),
  } as SchemaMap;
}

const objects = (o: SeedOutput["objects"]): SeedOutput["objects"] => o;

describe("validateSeedObjects", () => {
  const schema = fixtureSchema();

  it("passes for valid seed data", () => {
    expect(() =>
      validateSeedObjects(
        objects({
          Employee: [{ employeeId: "emp-001", firstName: "Alice", age: 30 }],
        }),
        schema
      )
    ).not.toThrow();
  });

  it("throws a SeedError on unknown object types", () => {
    expect(() =>
      validateSeedObjects(objects({ Ghost: [{ id: "1" }] }), schema)
    ).toThrow(SeedError);
    expect(() =>
      validateSeedObjects(objects({ Ghost: [{ id: "1" }] }), schema)
    ).toThrow(
      /Object type 'Ghost' in seed data is not defined in the ontology/u
    );
  });

  it("throws on unknown property names", () => {
    expect(() =>
      validateSeedObjects(
        objects({ Employee: [{ employeeId: "emp-001", badProp: "x" }] }),
        schema
      )
    ).toThrow(
      /Property 'badProp' on 'Employee' object \(index 0\) is not defined in the ontology/u
    );
  });

  it("throws on null property values", () => {
    expect(() =>
      validateSeedObjects(
        objects({ Employee: [{ employeeId: "emp-001", firstName: null }] }),
        schema
      )
    ).toThrow(
      /Property 'firstName' on 'Employee' object \(index 0\) is null or undefined/u
    );
  });

  it("throws on JS type mismatches in either direction", () => {
    expect(() =>
      validateSeedObjects(
        objects({ Employee: [{ employeeId: "emp-001", createdAt: 12345 }] }),
        schema
      )
    ).toThrow(
      /Property 'createdAt' on 'Employee' object \(index 0\) expects timestamp \(a string\) but got number/u
    );
    expect(() =>
      validateSeedObjects(
        objects({ Employee: [{ employeeId: "emp-001", age: "30" }] }),
        schema
      )
    ).toThrow(
      /Property 'age' on 'Employee' object \(index 0\) expects integer \(a number\) but got string/u
    );
  });

  it("validates timestamp format, rejecting malformed and accepting valid", () => {
    expect(() =>
      validateSeedObjects(
        objects({ Employee: [{ employeeId: "emp-001", createdAt: "asdf" }] }),
        schema
      )
    ).toThrow(/property 'createdAt' has invalid timestamp format: 'asdf'/u);
    expect(() =>
      validateSeedObjects(
        objects({
          Employee: [
            { employeeId: "emp-001", createdAt: "2025-01-01T00:00:00Z" },
          ],
        }),
        schema
      )
    ).not.toThrow();
  });

  it("validates long format, rejecting malformed and accepting valid", () => {
    expect(() =>
      validateSeedObjects(
        objects({
          Employee: [{ employeeId: "emp-001", score: "not-a-number" }],
        }),
        schema
      )
    ).toThrow(/property 'score' has invalid long format/u);
    expect(() =>
      validateSeedObjects(
        objects({
          Employee: [{ employeeId: "emp-001", score: "9007199254740993" }],
        }),
        schema
      )
    ).not.toThrow();
  });

  it("reports all format errors at once", () => {
    try {
      validateSeedObjects(
        objects({
          Employee: [
            { employeeId: "emp-001", createdAt: "bad", score: "also-bad" },
          ],
        }),
        schema
      );
      expect.unreachable("should have thrown");
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(SeedError);
      const msg = (e as Error).message;
      expect(msg).toContain("createdAt");
      expect(msg).toContain("score");
    }
  });
});
