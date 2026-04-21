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
import {
  buildSchemaMap,
  mergeSeedOutputs,
  validateStringFormats,
} from "./compileSeedData.js";

const makeOutput = (
  objects: SeedOutput["objects"],
  links: SeedOutput["links"] = [],
): SeedOutput => ({ objects, links });

describe("mergeSeedOutputs", () => {
  // Build schema map once from the shared mock ontology.
  const schema = buildSchemaMap(mockOntology());

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

// Minimal mock of OntologyBlockDataV2 shape
function mockOntology() {
  return {
    objectTypes: {
      "ri.ot.employee": {
        objectType: {
          apiName: "Employee",
          rid: "ri.ot.employee",
          id: "employee",
          primaryKeys: ["ri.pt.employeeId"],
          propertyTypes: {
            "ri.pt.employeeId": {
              apiName: "employeeId",
              rid: "ri.pt.employeeId",
              type: { type: "string", string: {} },
            },
            "ri.pt.firstName": {
              apiName: "firstName",
              rid: "ri.pt.firstName",
              type: { type: "string", string: {} },
            },
            "ri.pt.age": {
              apiName: "age",
              rid: "ri.pt.age",
              type: { type: "integer", integer: {} },
            },
            "ri.pt.createdAt": {
              apiName: "createdAt",
              rid: "ri.pt.createdAt",
              type: { type: "timestamp", timestamp: {} },
            },
            "ri.pt.score": {
              apiName: "score",
              rid: "ri.pt.score",
              type: { type: "long", long: {} },
            },
          },
          titlePropertyTypeRid: "ri.pt.firstName",
          displayMetadata: {},
          status: "ACTIVE",
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: {},
          typeGroups: [],
        },
        datasources: [],
        writebackDatasets: [],
      },
      "ri.ot.department": {
        objectType: {
          apiName: "Department",
          rid: "ri.ot.department",
          id: "department",
          primaryKeys: ["ri.pt.deptId"],
          propertyTypes: {
            "ri.pt.deptId": {
              apiName: "departmentId",
              rid: "ri.pt.deptId",
              type: { type: "string", string: {} },
            },
            "ri.pt.deptName": {
              apiName: "name",
              rid: "ri.pt.deptName",
              type: { type: "string", string: {} },
            },
          },
          titlePropertyTypeRid: "ri.pt.deptName",
          displayMetadata: {},
          status: "ACTIVE",
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: {},
          typeGroups: [],
        },
        datasources: [],
        writebackDatasets: [],
      },
    },
    linkTypes: {
      "ri.lt.emp-dept": {
        linkType: {
          id: "empDept",
          rid: "ri.lt.emp-dept",
          definition: {
            objectTypeA: { objectTypeApiName: "Employee" },
            objectTypeB: { objectTypeApiName: "Department" },
            linkTypeApiNameAtoB: "department",
            linkTypeApiNameBtoA: "employees",
          },
          status: "ACTIVE",
        },
        datasources: [],
      },
    },
  } as any;
}

describe("buildSchemaMap", () => {
  it("should throw when object type has no resolvable primary key", () => {
    const brokenOntology = {
      objectTypes: {
        "ri.ot.broken": {
          objectType: {
            apiName: "Broken",
            rid: "ri.ot.broken",
            id: "broken",
            primaryKeys: [],
            propertyTypes: {},
            titlePropertyTypeRid: "",
            displayMetadata: {},
            status: "ACTIVE",
            implementsInterfaces: [],
            implementsInterfaces2: [],
            allImplementsInterfaces: {},
            traits: {},
            typeGroups: [],
          },
          datasources: [],
          writebackDatasets: [],
        },
      },
      linkTypes: {},
    } as any;

    expect(() => buildSchemaMap(brokenOntology)).toThrow(
      /Object type 'Broken' has no resolvable primary key API name/,
    );
  });
});

describe("validateStringFormats", () => {
  const schema = buildSchemaMap(mockOntology());

  it("should pass for valid seed data", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", firstName: "Alice", age: 30 }],
    });
    expect(() => validateStringFormats(output, schema)).not.toThrow();
  });

  it("should skip unknown object types silently", () => {
    const output = makeOutput({ Ghost: [{ id: "1" }] });
    expect(() => validateStringFormats(output, schema)).not.toThrow();
  });

  it("should skip unknown property names silently", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", badProp: "x" }],
    });
    expect(() => validateStringFormats(output, schema)).not.toThrow();
  });

  it("should skip null property values", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", firstName: null }],
    });
    expect(() => validateStringFormats(output, schema)).not.toThrow();
  });

  it("should skip non-string values", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", age: 30 }],
    });
    expect(() => validateStringFormats(output, schema)).not.toThrow();
  });

  it("should error on invalid timestamp format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", createdAt: "qdeqd" }],
    });
    expect(() => validateStringFormats(output, schema)).toThrow(
      /property 'createdAt' has invalid timestamp format: 'qdeqd'/,
    );
  });

  it("should accept valid timestamp format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", createdAt: "2025-01-01T00:00:00Z" }],
    });
    expect(() => validateStringFormats(output, schema)).not.toThrow();
  });

  it("should error on invalid long format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", score: "not-a-number" }],
    });
    expect(() => validateStringFormats(output, schema)).toThrow(
      /property 'score' has invalid long format/,
    );
  });

  it("should accept valid long format", () => {
    const output = makeOutput({
      Employee: [{ employeeId: "emp-001", score: "9007199254740993" }],
    });
    expect(() => validateStringFormats(output, schema)).not.toThrow();
  });

  it("should report all format errors at once", () => {
    const output = makeOutput({
      Employee: [
        { employeeId: "emp-001", createdAt: "bad", score: "also-bad" },
      ],
    });
    try {
      validateStringFormats(output, schema);
      expect.unreachable("should have thrown");
    } catch (e: unknown) {
      const msg = (e as Error).message;
      expect(msg).toContain("createdAt");
      expect(msg).toContain("score");
    }
  });
});
