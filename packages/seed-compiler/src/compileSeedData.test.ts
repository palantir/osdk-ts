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

// cspell:words qdeqd

import type { SeedOutput } from "@osdk/seed-helpers";
import { describe, expect, it } from "vitest";
import { mergeSeedOutputs, validateSeedOutput } from "./compileSeedData.js";
import type { SchemaMap } from "./schema.js";

const makeOutput = (
  objects: SeedOutput["objects"],
  links: SeedOutput["links"] = [],
): SeedOutput => ({ objects, links });

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
  return new Map([
    ["Employee", {
      properties: employeeProps,
      primaryKeyApiName: "employeeId",
    }],
    [
      "Department",
      { properties: departmentProps, primaryKeyApiName: "departmentId" },
    ],
  ]);
}

describe("mergeSeedOutputs", () => {
  const schema = fixtureSchema();

  it("should return the single output unchanged", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", name: "Alice" }],
    });
    const result = mergeSeedOutputs([output], schema);
    expect(result).toEqual(output);
  });

  it("should merge objects of the same type from multiple files", () => {
    const output1 = makeOutput({
      Employee: [{ employeeId: "emp-001", name: "Alice" }],
    });
    const output2 = makeOutput({
      Employee: [{ employeeId: "emp-002", name: "Bob" }],
    });
    const result = mergeSeedOutputs([output1, output2], schema);
    expect(result.objects.Employee).toHaveLength(2);
  });

  it("should merge objects of different types", () => {
    const output1 = makeOutput({
      Employee: [{ employeeId: "emp-001" }],
    });
    const output2 = makeOutput({
      Department: [{ departmentId: "dept-001" }],
    });
    const result = mergeSeedOutputs([output1, output2], schema);
    expect(Object.keys(result.objects)).toHaveLength(2);
  });

  it("should throw on duplicate PK across files", () => {
    const output1 = makeOutput({
      Employee: [{ employeeId: "emp-001", firstName: "Alice" }],
    });
    const output2 = makeOutput({
      Employee: [{ employeeId: "emp-001", firstName: "Alice" }],
    });
    expect(() => mergeSeedOutputs([output1, output2], schema)).toThrow(
      /Duplicate primary key 'emp-001' for 'Employee'/,
    );
  });

  it("should merge links additively", () => {
    const output1 = makeOutput({}, [{
      name: "link-1",
      linkType: "department",
      sourceObjectType: "Employee",
      sourceKey: "emp-001",
      targetObjectType: "Department",
      targetKey: "dept-001",
    }]);
    const output2 = makeOutput({}, [{
      name: "link-2",
      linkType: "department",
      sourceObjectType: "Employee",
      sourceKey: "emp-002",
      targetObjectType: "Department",
      targetKey: "dept-001",
    }]);
    const result = mergeSeedOutputs([output1, output2], schema);
    expect(result.links).toHaveLength(2);
  });

  it("should deduplicate identical links", () => {
    const link = {
      name: "emp-dept",
      linkType: "department",
      sourceObjectType: "Employee",
      sourceKey: "emp-001",
      targetObjectType: "Department",
      targetKey: "dept-001",
    };
    const output1 = makeOutput({}, [link]);
    const output2 = makeOutput({}, [link]);
    const result = mergeSeedOutputs([output1, output2], schema);
    expect(result.links).toHaveLength(1);
  });

  it("should handle empty outputs", () => {
    const result = mergeSeedOutputs(
      [makeOutput({}), makeOutput({})],
      schema,
    );
    expect(result.objects).toEqual({});
    expect(result.links).toEqual([]);
  });
});

describe("validateSeedOutput", () => {
  const schema = fixtureSchema();

  it("should pass for valid seed data", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", firstName: "Alice", age: 30 }],
    });
    expect(() => validateSeedOutput(output, schema)).not.toThrow();
  });

  it("should throw on unknown object types", () => {
    const output = makeOutput({ Ghost: [{ id: "1" }] });
    expect(() => validateSeedOutput(output, schema)).toThrow(
      /Object type 'Ghost' in seed data is not defined in the ontology/,
    );
  });

  it("should throw on unknown property names", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", badProp: "x" }],
    });
    expect(() => validateSeedOutput(output, schema)).toThrow(
      /Property 'badProp' on 'Employee' object \(index 0\) is not defined in the ontology/,
    );
  });

  it("should throw on null property values", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", firstName: null }],
    });
    expect(() => validateSeedOutput(output, schema)).toThrow(
      /Property 'firstName' on 'Employee' object \(index 0\) is null or undefined/,
    );
  });

  it("should pass when JS type matches the wire type", () => {
    // age is integer (number-typed) and 30 is a number; firstName is string
    // and "Alice" is a string. Both pass the JS-type check.
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", firstName: "Alice", age: 30 }],
    });
    expect(() => validateSeedOutput(output, schema)).not.toThrow();
  });

  it("should throw when a string-encoded wire type gets a non-string", () => {
    // createdAt is a timestamp (string-encoded). Passing a number is a
    // type-system violation that only `as any` callers can produce.
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", createdAt: 12345 }],
    });
    expect(() => validateSeedOutput(output, schema)).toThrow(
      /Property 'createdAt' on 'Employee' object \(index 0\) expects timestamp \(a string\) but got number/,
    );
  });

  it("should throw when a number-typed wire type gets a string", () => {
    // age is an integer; passing a string is a type-system violation.
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", age: "30" }],
    });
    expect(() => validateSeedOutput(output, schema)).toThrow(
      /Property 'age' on 'Employee' object \(index 0\) expects integer \(a number\) but got string/,
    );
  });

  it("should error on invalid timestamp format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", createdAt: "qdeqd" }],
    });
    expect(() => validateSeedOutput(output, schema)).toThrow(
      /property 'createdAt' has invalid timestamp format: 'qdeqd'/,
    );
  });

  it("should accept valid timestamp format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", createdAt: "2025-01-01T00:00:00Z" }],
    });
    expect(() => validateSeedOutput(output, schema)).not.toThrow();
  });

  it("should error on invalid long format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", score: "not-a-number" }],
    });
    expect(() => validateSeedOutput(output, schema)).toThrow(
      /property 'score' has invalid long format/,
    );
  });

  it("should accept valid long format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", score: "9007199254740993" }],
    });
    expect(() => validateSeedOutput(output, schema)).not.toThrow();
  });

  it("should report all format errors at once", () => {
    const output = makeOutput({
      Employee: [
        { employeeId: "emp-001", createdAt: "bad", score: "also-bad" },
      ],
    });
    try {
      validateSeedOutput(output, schema);
      expect.unreachable("should have thrown");
    } catch (e: unknown) {
      const msg = (e as Error).message;
      expect(msg).toContain("createdAt");
      expect(msg).toContain("score");
    }
  });
});
