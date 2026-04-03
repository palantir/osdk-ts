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

import * as fs from "node:fs";
import * as path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { mapActionParameterType } from "../mapActionParameterType.js";
import { mapPropertyType } from "../mapPropertyType.js";
import { writeImportedOntology } from "../writeImportedOntology.js";

const TEST_OUTPUT_DIR = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "test-output",
);

afterEach(() => {
  if (fs.existsSync(TEST_OUTPUT_DIR)) {
    fs.rmSync(TEST_OUTPUT_DIR, { recursive: true, force: true });
  }
});

describe("mapPropertyType", () => {
  it("maps simple types 1:1", () => {
    expect(mapPropertyType({ type: "string" })).toEqual({ type: "string" });
    expect(mapPropertyType({ type: "integer" })).toEqual({ type: "integer" });
    expect(mapPropertyType({ type: "boolean" })).toEqual({ type: "boolean" });
    expect(mapPropertyType({ type: "double" })).toEqual({ type: "double" });
    expect(mapPropertyType({ type: "date" })).toEqual({ type: "date" });
    expect(mapPropertyType({ type: "timestamp" })).toEqual({
      type: "timestamp",
    });
    expect(mapPropertyType({ type: "decimal" })).toEqual({ type: "decimal" });
    expect(mapPropertyType({ type: "attachment" })).toEqual({
      type: "attachment",
    });
    expect(mapPropertyType({ type: "geopoint" })).toEqual({
      type: "geopoint",
    });
    expect(mapPropertyType({ type: "geoshape" })).toEqual({
      type: "geoshape",
    });
    expect(mapPropertyType({ type: "mediaReference" })).toEqual({
      type: "mediaReference",
    });
  });

  it("maps geotimeSeriesReference to geotimeSeries", () => {
    expect(mapPropertyType({ type: "geotimeSeriesReference" })).toEqual({
      type: "geotimeSeries",
    });
  });

  it("maps array types", () => {
    expect(
      mapPropertyType({ type: "array", subType: { type: "string" } }),
    ).toEqual({ type: "string", array: true });
  });

  it("returns undefined for unsupported types", () => {
    expect(mapPropertyType({ type: "marking" })).toBeUndefined();
    expect(mapPropertyType({ type: "timeseries" })).toBeUndefined();
    expect(mapPropertyType({ type: "struct" })).toBeUndefined();
    expect(mapPropertyType({ type: "vector" })).toBeUndefined();
    expect(mapPropertyType({ type: "cipherText" })).toBeUndefined();
  });
});

describe("mapActionParameterType", () => {
  it("maps simple types", () => {
    expect(mapActionParameterType({ type: "string" })).toBe("string");
    expect(mapActionParameterType({ type: "integer" })).toBe("integer");
    expect(mapActionParameterType({ type: "boolean" })).toBe("boolean");
    expect(mapActionParameterType({ type: "double" })).toBe("double");
  });

  it("maps object references", () => {
    expect(
      mapActionParameterType({
        type: "object",
        objectTypeApiName: "Employee",
      }),
    ).toEqual({
      type: "objectReference",
      objectReference: { objectTypeId: "Employee" },
    });
  });

  it("maps objectSet references", () => {
    expect(
      mapActionParameterType({
        type: "objectSet",
        objectTypeApiName: "Employee",
      }),
    ).toEqual({
      type: "objectSetRid",
      objectSetRid: { objectTypeId: "Employee" },
    });
  });

  it("maps array to list variants", () => {
    expect(
      mapActionParameterType({
        type: "array",
        subType: { type: "string" },
      }),
    ).toBe("stringList");
  });

  it("maps array of objects to objectReferenceList", () => {
    expect(
      mapActionParameterType({
        type: "array",
        subType: { type: "object", objectTypeApiName: "Employee" },
      }),
    ).toEqual({
      type: "objectReferenceList",
      objectReferenceList: { objectTypeId: "Employee" },
    });
  });

  it("returns undefined for unsupported types", () => {
    expect(mapActionParameterType({ type: "struct" })).toBeUndefined();
    expect(mapActionParameterType({ type: "vector" })).toBeUndefined();
  });
});

describe("writeImportedOntology", () => {
  const sampleMetadata = {
    ontology: {
      apiName: "test-ontology",
      displayName: "Test",
      description: "",
      rid: "ri.test",
    },
    objectTypes: {
      Employee: {
        objectType: {
          apiName: "com.example.Employee",
          displayName: "Employee",
          description: "An employee",
          primaryKey: "employeeId",
          titleProperty: "fullName",
          status: "ACTIVE",
          properties: {
            employeeId: {
              displayName: "Employee ID",
              dataType: { type: "string" },
            },
            fullName: {
              displayName: "Full Name",
              dataType: { type: "string" },
            },
            salary: {
              displayName: "Salary",
              dataType: { type: "double" },
            },
          },
        },
      },
    },
    actionTypes: {
      createEmployee: {
        apiName: "com.example.createEmployee",
        displayName: "Create Employee",
        status: "ACTIVE",
        parameters: {
          name: {
            displayName: "Name",
            dataType: { type: "string" },
            required: true,
          },
          employee: {
            displayName: "Employee",
            dataType: {
              type: "object",
              objectTypeApiName: "com.example.Employee",
            },
            required: true,
          },
        },
        operations: [{
          type: "createObject",
          objectTypeApiName: "com.example.Employee",
        }],
      },
    },
    interfaceTypes: {},
    sharedPropertyTypes: {},
    queryTypes: {},
  };

  it("generates object type files", () => {
    writeImportedOntology(sampleMetadata, TEST_OUTPUT_DIR);

    const objectFile = fs.readFileSync(
      path.join(TEST_OUTPUT_DIR, "codegen/object-types/employee.ts"),
      "utf-8",
    );
    expect(objectFile).toContain("wrapWithProxy");
    expect(objectFile).toContain("OntologyEntityTypeEnum.OBJECT_TYPE");
    expect(objectFile).toContain("\"com.example.Employee\"");
    expect(objectFile).toContain("\"employeeId\"");
    expect(objectFile).toContain("export const employee");
  });

  it("generates action type files", () => {
    writeImportedOntology(sampleMetadata, TEST_OUTPUT_DIR);

    const actionFile = fs.readFileSync(
      path.join(TEST_OUTPUT_DIR, "codegen/action-types/createEmployee.ts"),
      "utf-8",
    );
    expect(actionFile).toContain("wrapWithProxy");
    expect(actionFile).toContain("OntologyEntityTypeEnum.ACTION_TYPE");
    expect(actionFile).toContain("\"com.example.createEmployee\"");
    expect(actionFile).toContain("\"objectReference\"");
    expect(actionFile).toContain("export const createEmployee");
  });

  it("generates index.ts with re-exports", () => {
    writeImportedOntology(sampleMetadata, TEST_OUTPUT_DIR);

    const indexFile = fs.readFileSync(
      path.join(TEST_OUTPUT_DIR, "index.ts"),
      "utf-8",
    );
    expect(indexFile).toContain("export { employee }");
    expect(indexFile).toContain("export { createEmployee }");
  });

  it("handles empty ontology", () => {
    const emptyMetadata = {
      ontology: {
        apiName: "empty",
        displayName: "Empty",
        description: "",
        rid: "ri.empty",
      },
      objectTypes: {},
      actionTypes: {},
      interfaceTypes: {},
      sharedPropertyTypes: {},
      queryTypes: {},
    };

    writeImportedOntology(emptyMetadata, TEST_OUTPUT_DIR);

    // Should not create index.ts for empty ontology
    expect(
      fs.existsSync(path.join(TEST_OUTPUT_DIR, "index.ts")),
    ).toBe(false);
  });
});
