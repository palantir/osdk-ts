/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { wireInterfaceTypeV2ToSdkObjectDefinition } from "./wireInterfaceTypeV2ToSdkObjectDefinition.js";

describe("wireInterfaceTypeV2ToSdkObjectDefinition", () => {
  it("sorts the implements array for stable output", () => {
    const result = wireInterfaceTypeV2ToSdkObjectDefinition(
      {
        apiName: "TestInterface",
        rid: "testRid",
        displayName: "Test Interface",
        description: "A test interface",
        properties: {},
        allProperties: {},
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: ["ParentZ", "ParentA", "ParentC"],
        allExtendsInterfaces: ["ParentZ", "ParentA", "ParentC"],
        implementedByObjectTypes: [],
        links: {},
        allLinks: {},
      },
      true,
    );

    expect(result.implements).toEqual(["ParentA", "ParentC", "ParentZ"]);
  });

  it("sorts the implementedBy array for stable output", () => {
    const result = wireInterfaceTypeV2ToSdkObjectDefinition(
      {
        apiName: "TestInterface",
        rid: "testRid",
        displayName: "Test Interface",
        description: "A test interface",
        properties: {},
        allProperties: {},
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: [],
        allExtendsInterfaces: [],
        implementedByObjectTypes: ["ObjectZ", "ObjectA", "ObjectC"],
        links: {},
        allLinks: {},
      },
      true,
    );

    expect(result.implementedBy).toEqual(["ObjectA", "ObjectC", "ObjectZ"]);
  });

  it("preserves empty arrays", () => {
    const result = wireInterfaceTypeV2ToSdkObjectDefinition(
      {
        apiName: "TestInterface",
        rid: "testRid",
        displayName: "Test Interface",
        description: "A test interface",
        properties: {},
        allProperties: {},
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: [],
        allExtendsInterfaces: [],
        implementedByObjectTypes: [],
        links: {},
        allLinks: {},
      },
      true,
    );

    // Empty arrays should remain as empty arrays
    expect(result.implements).toEqual([]);
    expect(result.implementedBy).toEqual([]);
  });

  it("converts action type constraints from record format", () => {
    const result = wireInterfaceTypeV2ToSdkObjectDefinition(
      {
        apiName: "TestInterface",
        rid: "ri.ontology.main.interface.test",
        displayName: "Test Interface",
        description: "A test interface with action constraints",
        properties: {},
        allProperties: {},
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: [],
        allExtendsInterfaces: [],
        implementedByObjectTypes: [],
        links: {},
        allLinks: {},
        actionTypeConstraints: {
          closeTicket: {
            apiName: "closeTicket",
            displayName: "Close Ticket",
            description: "Closes the given ticket",
            requireImplementation: true,
            status: "ACTIVE",
            rid: "ri.ontology.main.action-constraint.close",
            parameters: {
              reason: {
                apiName: "reason",
                displayName: "Closing Reason",
                description: "Why the ticket is being closed",
                dataType: { type: "string" },
                required: true,
              },
              tags: {
                apiName: "tags",
                displayName: "Tags",
                dataType: {
                  type: "array",
                  subType: { type: "string" },
                },
                required: false,
              },
            },
          },
        },
      } as any,
      true,
    );

    expect(result.actionTypeConstraints).toBeDefined();
    expect(result.actions).toBeDefined();
    expect(result.actionTypeConstraints).toEqual(result.actions);

    const closeTicket = result.actionTypeConstraints?.closeTicket;
    expect(closeTicket).toEqual({
      apiName: "closeTicket",
      rid: "ri.ontology.main.action-constraint.close",
      displayName: "Close Ticket",
      description: "Closes the given ticket",
      requireImplementation: true,
      status: "ACTIVE",
      parameters: {
        reason: {
          type: "string",
          displayName: "Closing Reason",
          description: "Why the ticket is being closed",
        },
        tags: {
          type: "string",
          displayName: "Tags",
          multiplicity: true,
          nullable: true,
        },
      },
    });
  });

  it("converts action type constraints from array format and sorts keys for stable output", () => {
    const result = wireInterfaceTypeV2ToSdkObjectDefinition(
      {
        apiName: "TestInterface",
        rid: "ri.ontology.main.interface.test",
        displayName: "Test Interface",
        properties: {},
        allProperties: {},
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: [],
        allExtendsInterfaces: [],
        implementedByObjectTypes: [],
        links: {},
        allLinks: {},
        allActionTypeConstraints: [
          {
            metadata: {
              apiName: "zAction",
              displayName: "Z Action",
            },
            parameters: [
              {
                displayMetadata: {
                  apiName: "paramZ",
                  displayName: "Param Z",
                },
                type: "string",
                required: true,
              },
              {
                displayMetadata: {
                  apiName: "paramA",
                  displayName: "Param A",
                },
                type: "integer",
                required: false,
              },
            ],
          },
          {
            metadata: {
              apiName: "aAction",
              displayName: "A Action",
            },
            parameters: [],
          },
        ],
      } as any,
      true,
    );

    expect(result.actionTypeConstraints).toBeDefined();
    // Keys should be sorted alphabetically
    expect(Object.keys(result.actionTypeConstraints!)).toEqual([
      "aAction",
      "zAction",
    ]);
    expect(
      Object.keys(result.actionTypeConstraints!.zAction.parameters!),
    ).toEqual(["paramA", "paramZ"]);
    expect(result.actionTypeConstraints!.zAction.parameters!.paramA).toEqual({
      type: "integer",
      displayName: "Param A",
      nullable: true,
    });
  });

  it("omits actionTypeConstraints when none are defined", () => {
    const result = wireInterfaceTypeV2ToSdkObjectDefinition(
      {
        apiName: "TestInterface",
        rid: "testRid",
        displayName: "Test Interface",
        properties: {},
        allProperties: {},
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: [],
        allExtendsInterfaces: [],
        implementedByObjectTypes: [],
        links: {},
        allLinks: {},
      },
      true,
    );

    expect(result.actionTypeConstraints).toBeUndefined();
    expect(result.actions).toBeUndefined();
  });
});
