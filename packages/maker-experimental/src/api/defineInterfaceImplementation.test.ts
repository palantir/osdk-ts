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

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import {
  defineCreateObjectAction,
  defineInterface,
  defineInterfaceActionTypeConstraint,
  defineInterfaceLinkConstraint,
  defineLink,
  defineObject,
  initializeOntologyState,
  writeStaticObjects,
} from "@osdk/maker";
import { beforeEach, describe, expect, it, onTestFinished } from "vitest";

import { defineInterfaceImplementation } from "./defineInterfaceImplementation.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";

const NAMESPACE = "com.palantir.";

function defineEmployeeObject() {
  return defineObject({
    apiName: "employee",
    displayName: "Employee",
    pluralDisplayName: "Employees",
    titlePropertyApiName: "id",
    primaryKeyPropertyApiName: "id",
    properties: { id: { type: "string" } },
  });
}

function defineEmployeeInterface(required = true) {
  return defineInterface({
    apiName: "Employee",
    properties: { name: { type: "string", required } },
  });
}

describe("defineInterfaceImplementation", () => {
  beforeEach(() => initializeOntologyState(NAMESPACE));

  it("converts property, link, and action implementations", async () => {
    const result = await defineOntologyV2(NAMESPACE, () => {
      const createEmployeeConstraintApiName = `${NAMESPACE}createEmployee`;
      const employerInterface = defineInterface({ apiName: "Employer" });
      const employeeInterface = defineInterface({
        apiName: "Employee",
        properties: { employeeId: { type: "string" } },
      });
      const employerConstraint = defineInterfaceLinkConstraint({
        apiName: "employer",
        from: employeeInterface,
        toOne: employerInterface,
      });
      defineInterfaceActionTypeConstraint({
        interfaceType: employeeInterface,
        apiName: "createEmployee",
        displayName: "Create Employee",
        description: "Create an employee",
        requireImplementation: true,
        parameters: [
          {
            apiName: "employeeId",
            displayName: "Employee ID",
            type: { type: "string", string: {} },
            requireImplementation: true,
          },
        ],
      });

      const employer = defineObject({
        apiName: "employer",
        displayName: "Employer",
        pluralDisplayName: "Employers",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
      const employee = defineObject({
        apiName: "employee",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string" },
          employerId: { type: "string" },
        },
      });
      const employeeEmployer = defineLink({
        apiName: "employee-employer",
        one: {
          object: employer,
          metadata: { apiName: "employees" },
        },
        toMany: {
          object: employee,
          metadata: { apiName: "employer" },
        },
        manyForeignKeyProperty: "employerId",
      });
      const createEmployee = defineCreateObjectAction({
        objectType: employee,
      });

      defineInterfaceImplementation({
        interfaceType: employerInterface,
        objectType: employer,
      });
      defineInterfaceImplementation({
        interfaceType: employeeInterface,
        objectType: employee,
        propertyMapping: [{ interfaceProperty: "employeeId", mapsTo: "id" }],
        linkImplementations: {
          [employerConstraint.apiName]: [
            { linkType: employeeEmployer, sideApiName: "employer" },
          ],
        },
        actionTypeImplementations: {
          [createEmployeeConstraintApiName]: {
            actionType: createEmployee,
            parameterMapping: { employeeId: "id" },
          },
        },
      });
    });

    const outputDir = fs.mkdtempSync(
      path.join(os.tmpdir(), "maker-experimental-interface-implementation-"),
    );
    onTestFinished(() =>
      fs.rmSync(outputDir, { recursive: true, force: true }),
    );
    writeStaticObjects(outputDir);

    const employee = Object.values(result.ontologyIr.ontology.objectTypes).find(
      (objectType) => objectType.objectType.apiName === `${NAMESPACE}employee`,
    );
    const linkTypeRid = Object.keys(result.ontologyIr.ontology.linkTypes)[0];
    expect(
      Object.values(employee!.objectType.implementsInterfaces2[0].linksV2),
    ).toEqual([
      [
        {
          linkTypeRid,
          startingFromLinkTypeSide: {
            type: "oneToManyLinkTypeSide",
            oneToManyLinkTypeSide: "MANY_SIDE",
          },
        },
      ],
    ]);
    const employeeIdProperty = Object.values(
      employee!.objectType.propertyTypes,
    ).find((property) => property.apiName === "id");
    expect(
      Object.values(employee!.objectType.implementsInterfaces2[0].propertiesV2),
    ).toEqual([
      {
        type: "propertyTypeRid",
        propertyTypeRid: employeeIdProperty!.rid,
      },
    ]);

    const createEmployee = Object.values(
      result.ontologyIr.ontology.actionTypes,
    )[0];
    const actionTypeImplementations = Object.values(
      employee!.objectType.implementsInterfaces2[0].actionTypes,
    );
    const employeeInterface = Object.values(
      result.ontologyIr.ontology.interfaceTypes,
    ).find(
      (interfaceType) =>
        interfaceType.interfaceType.apiName === `${NAMESPACE}Employee`,
    );
    const actionConstraint =
      employeeInterface!.interfaceType.actionTypeConstraints[0];
    expect(
      Object.keys(employee!.objectType.implementsInterfaces2[0].actionTypes),
    ).toEqual([actionConstraint.rid]);
    expect(actionTypeImplementations).toHaveLength(1);
    expect(actionTypeImplementations[0].actionTypeRid).toBe(
      createEmployee.actionType.metadata.rid,
    );
    expect(Object.values(actionTypeImplementations[0].parameters)).toEqual([
      createEmployee.actionType.metadata.parameters.id.rid,
    ]);
    expect(Object.keys(actionTypeImplementations[0].parameters)).toEqual([
      Object.keys(actionConstraint.parameters)[0],
    ]);
  });

  it("rejects duplicate implementations of the same interface", () => {
    const interfaceType = defineInterface({ apiName: "Employee" });
    const objectType = defineEmployeeObject();

    defineInterfaceImplementation({ interfaceType, objectType });

    expect(() =>
      defineInterfaceImplementation({ interfaceType, objectType }),
    ).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Object "com.palantir.employee" already implements interface "com.palantir.Employee"]`,
    );
  });

  it("rejects unknown interface properties", () => {
    const interfaceType = defineInterface({ apiName: "Employee" });
    const objectType = defineEmployeeObject();

    expect(() =>
      defineInterfaceImplementation({
        interfaceType,
        objectType,
        propertyMapping: [{ interfaceProperty: "unknown", mapsTo: "id" }],
      }),
    ).toThrow(/Interface property unknown .* does not exist/u);
  });

  it("rejects unknown object properties", () => {
    const interfaceType = defineEmployeeInterface();
    const objectType = defineEmployeeObject();

    expect(() =>
      defineInterfaceImplementation({
        interfaceType,
        objectType,
        propertyMapping: [{ interfaceProperty: "name", mapsTo: "unknown" }],
      }),
    ).toThrow(/Object Property Mapped: unknown/u);
  });

  it("requires mappings for required interface properties", () => {
    const interfaceType = defineEmployeeInterface();
    const objectType = defineEmployeeObject();

    expect(() =>
      defineInterfaceImplementation({ interfaceType, objectType }),
    ).toThrow(/Interface property name not implemented/u);
  });

  it("allows optional interface properties to be omitted", () => {
    const interfaceType = defineEmployeeInterface(false);
    const objectType = defineEmployeeObject();

    expect(() =>
      defineInterfaceImplementation({ interfaceType, objectType }),
    ).not.toThrow();
  });
});
