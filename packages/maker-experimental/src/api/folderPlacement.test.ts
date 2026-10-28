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

import type { FolderDefinition } from "@osdk/maker";
import {
  defineCreateObjectAction,
  defineFolder,
  defineInterface,
  defineLink,
  defineObject,
  defineSharedPropertyType,
  getOntologyDefinition,
  importOntologyEntity,
} from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { toBlockShapeId } from "../cli/marketplaceSerialization/CodeBlockSpec.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import { defineFunctionBackedAction } from "./defineFunctionBackedAction.js";
import { defineOntologyV2, type FunctionsIr } from "./defineOntologyV2.js";

function defineEntities(folder?: Pick<FolderDefinition, "id" | "folder">) {
  if (folder) {
    defineFolder({
      ...folder,
      resources: ["Thing", "IThing", "thing", "create-thing", "relatedThings"],
    });
  }
  const object = defineObject({
    apiName: "Thing",
    displayName: "Thing",
    pluralDisplayName: "Things",
    titlePropertyApiName: "id",
    primaryKeyPropertyApiName: "id",
    properties: { id: { type: "string" } },
    permission: "publicProject",
  });
  const interfaceType = defineInterface({
    apiName: "IThing",
    permission: "publicProject",
  });
  const sharedProperty = defineSharedPropertyType({
    apiName: "thing",
    type: "string",
    permission: "publicProject",
  });
  const action = defineCreateObjectAction({
    objectType: object,
    apiName: "create-thing",
    permission: "publicProject",
  });
  const link = defineLink({
    apiName: "relatedThings",
    many: { object, metadata: { apiName: "relatedThings" } },
    toMany: { object, metadata: { apiName: "relatedTo" } },
    permission: "publicProject",
  });
  return [object, interfaceType, sharedProperty, action, link] as const;
}

describe("experimental folder placement conversion", () => {
  it("wires mixed resource definitions and a forward reference after the async body completes", async () => {
    const result = await defineOntologyV2("com.example.", async () => {
      const resources = defineEntities();
      defineFolder({
        id: "entities",
        folder: "domain//entities/",
        resources: [...resources, "Future"],
      });
      await Promise.resolve();
      defineInterface({ apiName: "Future", permission: "publicProject" });
    });
    const outputs = [
      "object-type-com.example.Thing",
      "interface-com.example.IThing",
      "shared-property-type-com.example.thing",
      "action-type-com.example.create-thing",
      "link-type-related-things",
      "interface-com.example.Future",
    ];
    expect(result.folders).toEqual([
      { id: "entities", location: "/domain/entities", outputIds: outputs },
    ]);
    const inputId = ReadableIdGenerator.getForCompassFolder("entities");
    expect(result.shapes.inputShapes.get(inputId)).toMatchObject({
      type: "compassResource",
      compassResource: {
        allowedTypes: [{ type: "compassFolderType", compassFolderType: {} }],
        typeConstraints: [
          {
            type: "compassFolderTypeConstraints",
            compassFolderTypeConstraints: {
              constraints: ["INSTALL_LOCATION"],
            },
          },
        ],
      },
    });
    expect(result.shapes.inputShapeMetadata.get(inputId)).toEqual({
      isOptional: false,
      isAccessedInReconcile: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
    });
    expect(
      result.shapes.inputMappings.filter(
        (mapping) => mapping.input === inputId,
      ),
    ).toEqual([
      {
        input: inputId,
        output: ReadableIdGenerator.getForCompassFolderOutput("entities"),
      },
    ]);
    expect(result.ontologyIr.ontology.blockOutputCompassLocations).toEqual(
      Object.fromEntries(
        outputs.map((output) => [
          toBlockShapeId(output),
          toBlockShapeId(inputId),
        ]),
      ),
    );
    expect(result.blockDataAddOn.outputToLocationInput).toEqual(
      Object.fromEntries(
        outputs.map((output) => [toBlockShapeId(output), inputId]),
      ),
    );
    expect(result.blockDataAddOn.idToBlockShapeId[inputId]).toBe(
      toBlockShapeId(inputId),
    );
  });

  it.each([
    {
      apiName: "Missing",
      error: 'resource "Missing" is not defined in this ontology',
    },
    { apiName: "Thing", error: 'resource "Thing" is ambiguous' },
  ])(
    "rejects invalid resource name $apiName after all definitions and before writing",
    async ({ apiName, error }) => {
      let bodyCompleted = false;
      let beforeWriteCalled = false;
      await expect(
        defineOntologyV2(
          "com.example.",
          () => {
            defineFolder({
              id: "entities",
              folder: "/entities",
              resources: [apiName],
            });
            defineEntities();
            defineInterface({ apiName: "Thing", permission: "publicProject" });
            bodyCompleted = true;
          },
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          {},
          () => {
            beforeWriteCalled = true;
          },
        ),
      ).rejects.toThrow(error);
      expect(bodyCompleted).toBe(true);
      expect(beforeWriteCalled).toBe(false);
    },
  );

  it("keeps entity location mappings stable when the destination folder moves", async () => {
    const before = await defineOntologyV2("com.example.", () => {
      defineEntities({ id: "shared-folder", folder: "/Aquarium/Fish" });
    });
    const after = await defineOntologyV2("com.example.", () => {
      defineEntities({ id: "shared-folder", folder: "/Animals/Livestock" });
    });
    expect(after.ontologyIr.ontology).toEqual(before.ontologyIr.ontology);
    expect(after.shapes.outputShapes).toEqual(before.shapes.outputShapes);
    expect(after.shapes.inputMappings).toEqual(before.shapes.inputMappings);
    expect(after.blockDataAddOn).toEqual(before.blockDataAddOn);
    expect(
      after.shapes.inputShapes.get(
        ReadableIdGenerator.getForCompassFolder("shared-folder"),
      ),
    ).toMatchObject({
      compassResource: { about: { fallbackTitle: "/Animals/Livestock" } },
    });
  });

  it("preserves entity identity when switching destination folders or returning to root", async () => {
    const convert = (folder?: Pick<FolderDefinition, "id" | "folder">) =>
      defineOntologyV2("com.example.", () => {
        defineEntities(folder);
      });
    const before = await convert({ id: "before", folder: "/before" });
    const after = await convert({ id: "after", folder: "/after" });
    const root = await convert();
    const { blockOutputCompassLocations: beforeLocations, ...beforeOntology } =
      before.ontologyIr.ontology;
    const { blockOutputCompassLocations: afterLocations, ...afterOntology } =
      after.ontologyIr.ontology;
    expect(afterOntology).toEqual(beforeOntology);
    expect(after.shapes.outputShapes).toEqual(before.shapes.outputShapes);
    expect(Object.keys(afterLocations)).toEqual(Object.keys(beforeLocations));
    expect(new Set(Object.values(afterLocations))).toEqual(
      new Set([
        toBlockShapeId(ReadableIdGenerator.getForCompassFolder("after")),
      ]),
    );
    expect(afterLocations).not.toEqual(beforeLocations);
    expect(root.shapes.outputShapes).toEqual(before.shapes.outputShapes);
    expect(root.ontologyIr.ontology).toEqual({
      ...beforeOntology,
      blockOutputCompassLocations: {},
    });
    expect(root.blockDataAddOn.outputToLocationInput).toEqual({});
    expect(root.folders).toEqual([]);
  });

  it("does not inherit upstream folder declarations when importing entities", async () => {
    await defineOntologyV2("upstream.", () => {
      defineEntities({ id: "/upstream", folder: "/upstream" });
    });
    const upstream = getOntologyDefinition();
    const result = await defineOntologyV2("com.example.", () => {
      importOntologyEntity(upstream.OBJECT_TYPE["upstream.Thing"]);
    });
    expect(
      Object.keys(result.ontologyIr.importedOntology.objectTypes),
    ).toHaveLength(1);
    expect(result.folders).toEqual([]);
  });

  it("includes function-backed actions only after they produce an output", async () => {
    const buildDir = fs.mkdtempSync(
      path.join(os.tmpdir(), "maker-folder-functions-"),
    );
    const functionsIrFile = path.join(buildDir, "functions.json");
    const functionsIr: FunctionsIr = {
      discoveredFunctions: [
        {
          locator: {
            type: "typescript",
            typescript: { functionName: "updateThing" },
          },
          inputs: [],
          output: { type: "void" },
          customTypes: {},
          ontologyProvenance: {
            editedObjects: { "com.example.Thing": {} },
            editedLinks: {},
            editedInterfaces: {},
          },
        },
      ],
    };
    const define = () => {
      defineEntities();
      const action = defineFunctionBackedAction({
        apiName: "update-thing",
        functionApiName: "updateThing",
        permission: "publicProject",
      });
      defineFolder({ id: "/actions", folder: "/actions", resources: [action] });
    };

    try {
      fs.writeFileSync(functionsIrFile, JSON.stringify(functionsIr));
      const beforeDiscovery = await defineOntologyV2("com.example.", define);
      expect(beforeDiscovery.folders).toEqual([
        { id: "/actions", location: "/actions", outputIds: [] },
      ]);
      const afterDiscovery = await defineOntologyV2(
        "com.example.",
        define,
        undefined,
        undefined,
        functionsIrFile,
      );
      expect(afterDiscovery.folders).toEqual([
        {
          id: "/actions",
          location: "/actions",
          outputIds: ["action-type-com.example.update-thing"],
        },
      ]);
    } finally {
      fs.rmSync(buildDir, { recursive: true, force: true });
    }
  });
});
