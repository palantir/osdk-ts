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

import type { ActionType, InterfaceType } from "@osdk/maker";
import {
  defineObject,
  defineOntology,
  importOntologyEntity,
  importSharedPropertyType,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import { beforeEach, describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../../api/defineOntologyV2.js";
import { defineImportObject } from "../../api/importObjectType.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";
import { getExternalRecommendations } from "./RecommendationUtils.js";

function callGetExternalRecommendations(
  result: Awaited<ReturnType<typeof defineOntologyV2>>,
) {
  return getExternalRecommendations(
    result.ontologyIr.importedOntology,
    result.ontologyIr.valueTypes.map(({ blockData }) => blockData),
    result.importedTypes,
    result.shapes.inputShapes,
  );
}

describe("RecommendationUtils", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  it("returns empty array when no imported entities", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      defineObject({
        apiName: "Foo",
        displayName: "Foo",
        pluralDisplayName: "Foos",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);
    expect(recs).toEqual([]);
  });

  it("generates external recs for imported SPTs", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      importSharedPropertyType({
        apiName: "externalId",
        packageName: "com.external.pkg",
        typeHint: "string",
      });

      defineObject({
        apiName: "localObj",
        displayName: "Local Obj",
        pluralDisplayName: "Local Objs",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);
    const allMappings = recs.flatMap((r) => r.mappings);

    const sptReadableId = ReadableIdGenerator.getForSpt(
      "com.external.pkg.externalId",
    );
    expect(allMappings).toContainEqual({
      targetInputReadableId: sptReadableId,
      upstreamOutputReadableId: sptReadableId,
    });
  });

  it("generates external recs for imported object types with properties", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      defineImportObject({
        apiName: "ImportedObj",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
        },
      });

      defineObject({
        apiName: "localObj",
        displayName: "Local Obj",
        pluralDisplayName: "Local Objs",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);
    const allMappings = recs.flatMap((r) => r.mappings);

    // Object type external rec
    const objReadableId = ReadableIdGenerator.getForObjectType("ImportedObj");
    expect(allMappings).toContainEqual({
      targetInputReadableId: objReadableId,
      upstreamOutputReadableId: objReadableId,
    });

    // Property external recs
    const propReadableId = ReadableIdGenerator.getForObjectProperty(
      "ImportedObj",
      "id",
    );
    expect(allMappings).toContainEqual({
      targetInputReadableId: propReadableId,
      upstreamOutputReadableId: propReadableId,
    });
  });

  it("generates external recs for imported interfaces", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      const importedInterface: InterfaceType = {
        apiName: "ImportedIface",
        displayMetadata: {
          displayName: "Imported Interface",
          description: "An imported interface",
        },
        extendsInterfaces: [],
        links: [],
        actionTypeConstraints: [],
        status: { type: "active", active: {} },
        propertiesV2: {},
        propertiesV3: {},
        searchable: true,
        __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
      };
      importOntologyEntity(importedInterface);

      defineObject({
        apiName: "localObj",
        displayName: "Local Obj",
        pluralDisplayName: "Local Objs",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);
    const allMappings = recs.flatMap((r) => r.mappings);

    const ifaceReadableId =
      ReadableIdGenerator.getForInterface("ImportedIface");
    expect(allMappings).toContainEqual({
      targetInputReadableId: ifaceReadableId,
      upstreamOutputReadableId: ifaceReadableId,
    });
  });

  it("generates external recs for imported interface-defined properties", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      const importedInterface: InterfaceType = {
        apiName: "com.external.pkg.ImportedIface",
        displayMetadata: {
          displayName: "Imported Interface",
          description: "An imported interface",
        },
        extendsInterfaces: [],
        links: [],
        actionTypeConstraints: [],
        status: { type: "active", active: {} },
        propertiesV2: {},
        propertiesV3: {
          interfaceProperty: {
            type: "string",
            required: false,
          },
        },
        searchable: true,
        __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
      };
      importOntologyEntity(importedInterface);

      defineObject({
        apiName: "localObj",
        displayName: "Local Obj",
        pluralDisplayName: "Local Objs",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);
    const propertyReadableId = ReadableIdGenerator.getForInterfaceProperty(
      "com.external.pkg.ImportedIface",
      "interfaceProperty",
    );

    expect(recs).toContainEqual({
      upstreamPackageName: "com.external.pkg",
      upstreamVersionCompatibility: {
        from: "0.0.0",
        until: "x.x.x",
      },
      mappings: [
        {
          targetInputReadableId: propertyReadableId,
          upstreamOutputReadableId: propertyReadableId,
        },
      ],
    });
  });

  it("generates external recs for imported interface action and parameter constraints", async () => {
    const packageNames = ["com.external.pkg", "other.pkg"];
    const result = await defineOntologyV2("com.palantir.", () => {
      for (const packageName of packageNames) {
        const importedInterface: InterfaceType = {
          apiName: `${packageName}.ImportedIface`,
          displayMetadata: { displayName: "Imported Interface" },
          extendsInterfaces: [],
          links: [],
          actionTypeConstraints: [
            {
              metadata: {
                apiName: "update",
                displayName: "Update",
                description: "Update the object",
              },
              parameters: {
                enabled: {
                  displayMetadata: {
                    apiName: "enabled",
                    displayName: "Enabled",
                  },
                  type: { type: "boolean", boolean: {} },
                  requireImplementation: true,
                },
                name: {
                  displayMetadata: { apiName: "name", displayName: "Name" },
                  type: { type: "string", string: {} },
                  requireImplementation: false,
                },
              },
              requireImplementation: true,
            },
            {
              metadata: {
                apiName: "delete",
                displayName: "Delete",
                description: "Delete the object",
              },
              parameters: {},
              requireImplementation: false,
            },
          ],
          status: { type: "active", active: {} },
          propertiesV2: {},
          propertiesV3: {},
          __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
        };
        importOntologyEntity(importedInterface);
      }
    });

    const recs = callGetExternalRecommendations(result);

    for (const packageName of packageNames) {
      const interfaceApiName = `${packageName}.ImportedIface`;
      const readableIds = [
        ReadableIdGenerator.getForInterface(interfaceApiName),
        ReadableIdGenerator.getForInterfaceActionTypeConstraint(
          interfaceApiName,
          "update",
        ),
        ReadableIdGenerator.getForInterfaceActionTypeConstraint(
          interfaceApiName,
          "delete",
        ),
        ReadableIdGenerator.getForInterfaceParameterConstraint(
          interfaceApiName,
          "update",
          "enabled",
        ),
        ReadableIdGenerator.getForInterfaceParameterConstraint(
          interfaceApiName,
          "update",
          "name",
        ),
      ];
      const packageRecs = recs.filter(
        (rec) => rec.upstreamPackageName === packageName,
      );
      const mappings = packageRecs.flatMap((rec) => rec.mappings);

      expect(mappings).toHaveLength(readableIds.length);
      for (const readableId of readableIds) {
        expect(result.shapes.inputShapes.has(readableId)).toBe(true);
        expect(mappings).toContainEqual({
          targetInputReadableId: readableId,
          upstreamOutputReadableId: readableId,
        });
      }
      for (const rec of packageRecs) {
        expect(rec.upstreamVersionCompatibility).toEqual({
          from: "0.0.0",
          until: "x.x.x",
        });
      }
    }
  });

  it("generates external recs for imported action types", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      const importedAction: ActionType = {
        apiName: "importedAction",
        displayName: "Imported Action",
        rules: [],
        status: "active",
        __type: OntologyEntityTypeEnum.ACTION_TYPE,
      };
      importOntologyEntity(importedAction);

      defineObject({
        apiName: "localObj",
        displayName: "Local Obj",
        pluralDisplayName: "Local Objs",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);
    const allMappings = recs.flatMap((r) => r.mappings);

    const actionReadableId =
      ReadableIdGenerator.getForActionType("importedAction");
    expect(allMappings).toContainEqual({
      targetInputReadableId: actionReadableId,
      upstreamOutputReadableId: actionReadableId,
    });
  });

  it("groups external recs by package name", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      importSharedPropertyType({
        apiName: "propA",
        packageName: "ext.pkg",
        typeHint: "string",
      });
      importSharedPropertyType({
        apiName: "propB",
        packageName: "ext.pkg",
        typeHint: "integer",
      });
      importSharedPropertyType({
        apiName: "propC",
        packageName: "other.pkg",
        typeHint: "boolean",
      });

      defineObject({
        apiName: "localObj",
        displayName: "Local Obj",
        pluralDisplayName: "Local Objs",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);

    // SPTs from "ext.pkg" should be grouped together
    const extPkgRec = recs.find((r) => r.upstreamPackageName === "ext.pkg");
    expect(extPkgRec).toBeDefined();
    expect(extPkgRec!.mappings).toHaveLength(2);

    // SPT from "other.pkg" should be in its own group
    const otherPkgRec = recs.find((r) => r.upstreamPackageName === "other.pkg");
    expect(otherPkgRec).toBeDefined();
    expect(otherPkgRec!.mappings).toHaveLength(1);
  });

  it("all external recs have version range from 0.0.0 to x.x.x", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      importSharedPropertyType({
        apiName: "prop",
        packageName: "ext.pkg",
        typeHint: "string",
      });

      defineObject({
        apiName: "localObj",
        displayName: "Local Obj",
        pluralDisplayName: "Local Objs",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
    });

    const recs = callGetExternalRecommendations(result);

    for (const rec of recs) {
      expect(rec.upstreamVersionCompatibility).toEqual({
        from: "0.0.0",
        until: "x.x.x",
      });
    }
  });
});
