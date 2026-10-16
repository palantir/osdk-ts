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
  defineLink,
  defineObject,
  defineSharedPropertyType,
  getOntologyDefinition,
  importOntologyEntity,
} from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { toBlockShapeId } from "../cli/marketplaceSerialization/CodeBlockSpec.js";
import { type ReadableId, ReadableIdGenerator } from "../util/generateRid.js";
import { defineFunctionBackedAction } from "./defineFunctionBackedAction.js";
import { defineOntologyV2, type FunctionsIr } from "./defineOntologyV2.js";

function defineEntities(folder?: string): void {
  const object = defineObject({
    apiName: "Thing",
    displayName: "Thing",
    pluralDisplayName: "Things",
    titlePropertyApiName: "id",
    primaryKeyPropertyApiName: "id",
    properties: { id: { type: "string" } },
    permission: "publicProject",
    folder,
  });
  defineInterface({ apiName: "Thing", permission: "publicProject", folder });
  defineSharedPropertyType({
    apiName: "thing",
    type: "string",
    permission: "publicProject",
    folder,
  });
  defineCreateObjectAction({
    objectType: object,
    apiName: "create-thing",
    permission: "publicProject",
    folder,
  });
  defineLink({
    apiName: "relatedThings",
    many: { object, metadata: { apiName: "relatedThings" } },
    toMany: { object, metadata: { apiName: "relatedTo" } },
    permission: "publicProject",
    folder,
  });
}

describe("experimental folder placement conversion", () => {
  it("preserves normalized paths for every supported entity kind", async () => {
    const result = await defineOntologyV2("com.example.", () =>
      defineEntities("domain//entities/"),
    );

    expect(result.outputFolderPaths).toEqual({
      "object-type-com.example.Thing": "/domain/entities",
      "interface-com.example.Thing": "/domain/entities",
      "shared-property-type-com.example.thing": "/domain/entities",
      "action-type-com.example.create-thing": "/domain/entities",
      "link-type-related-things": "/domain/entities",
    });
    expect(
      getOntologyDefinition().OBJECT_TYPE["com.example.Thing"].folder,
    ).toBe("domain//entities/");
    const serializedResult = JSON.stringify(result);
    expect(JSON.parse(serializedResult).outputFolderPaths).toEqual(
      result.outputFolderPaths,
    );
    expect(
      Object.values(result.ontologyIr.ontology.interfaceTypes)[0].interfaceType,
    ).not.toHaveProperty("folder");
    for (const id of Object.keys(result.outputFolderPaths)) {
      expect(result.shapes.outputShapes.has(id as ReadableId)).toBe(true);
    }
    const inputId = ReadableIdGenerator.getForCompassFolder("/domain/entities");
    expect(result.shapes.inputShapes.get(inputId)).toMatchObject({
      type: "compassResource",
      compassResource: {
        typeConstraints: [
          {
            type: "compassFolderTypeConstraints",
            compassFolderTypeConstraints: { constraints: ["INSTALL_LOCATION"] },
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
        output:
          ReadableIdGenerator.getForCompassFolderOutput("/domain/entities"),
      },
    ]);
    const ontologyOutputs = Object.keys(result.outputFolderPaths).filter((id) =>
      result.shapes.outputShapes.has(id as ReadableId),
    );
    expect(result.ontologyIr.ontology.blockOutputCompassLocations).toEqual(
      Object.fromEntries(
        ontologyOutputs.map((id) => [
          toBlockShapeId(id),
          toBlockShapeId(inputId),
        ]),
      ),
    );
    expect(result.blockDataAddOn.outputToLocationInput).toEqual(
      Object.fromEntries(
        ontologyOutputs.map((id) => [toBlockShapeId(id), inputId]),
      ),
    );
    expect(result.blockDataAddOn.idToBlockShapeId[inputId]).toBe(
      toBlockShapeId(inputId),
    );
  });

  it.each(["", "/"])("preserves explicit root placement %j", async (folder) => {
    const result = await defineOntologyV2("com.example.", () =>
      defineEntities(folder),
    );
    expect(Object.values(result.outputFolderPaths)).toEqual(
      Array.from({ length: 5 }, () => "/"),
    );
    expect(result.ontologyIr.ontology.blockOutputCompassLocations).toEqual({});
    expect(result.blockDataAddOn.outputToLocationInput).toEqual({});
    expect(
      result.shapes.inputShapes.has(
        ReadableIdGenerator.getForCompassFolder("/"),
      ),
    ).toBe(false);
  });

  it("omits entities without an explicit folder", async () => {
    const result = await defineOntologyV2("com.example.", () =>
      defineEntities(),
    );
    expect(result.outputFolderPaths).toEqual({});
  });

  it.each([
    {
      folder: "a/../b",
      permission: "publicProject",
      error: 'folder must not contain "." or ".." path segments',
    },
    {
      folder: "",
      permission: undefined,
      error:
        'folder placement requires permission to be explicitly set to "publicProject"',
    },
    {
      folder: "a",
      permission: "roles",
      error:
        'folder placement requires permission to be explicitly set to "publicProject"',
    },
  ] as const)(
    "validates folder $folder with permission $permission after the definition body",
    async ({ folder, permission, error }) => {
      let bodyCompleted = false;
      await expect(
        defineOntologyV2("com.example.", () => {
          const object = defineObject({
            apiName: "Thing",
            displayName: "Thing",
            pluralDisplayName: "Things",
            titlePropertyApiName: "id",
            primaryKeyPropertyApiName: "id",
            properties: { id: { type: "string" } },
            folder,
            permission,
          });
          expect(object.folder).toBe(folder);
          bodyCompleted = true;
        }),
      ).rejects.toThrow(error);
      expect(bodyCompleted).toBe(true);
    },
  );

  it.each([undefined, "123e4567-e89b-12d3-a456-426614174000"])(
    "preserves entity identity when placement changes with randomness key %s",
    async (randomnessKey) => {
      const before = await defineOntologyV2(
        "com.example.",
        () => defineEntities("/before"),
        undefined,
        undefined,
        undefined,
        randomnessKey,
      );
      const after = await defineOntologyV2(
        "com.example.",
        () => defineEntities("/after"),
        undefined,
        undefined,
        undefined,
        randomnessKey,
      );
      const {
        blockOutputCompassLocations: beforeLocations,
        ...beforeOntology
      } = before.ontologyIr.ontology;
      const { blockOutputCompassLocations: afterLocations, ...afterOntology } =
        after.ontologyIr.ontology;
      expect(afterOntology).toEqual(beforeOntology);
      expect(after.shapes.outputShapes).toEqual(before.shapes.outputShapes);
      expect(Object.keys(afterLocations)).toEqual(Object.keys(beforeLocations));
      expect(new Set(Object.values(afterLocations))).toEqual(
        new Set([
          toBlockShapeId(
            ReadableIdGenerator.getForCompassFolder("/after"),
            randomnessKey,
          ),
        ]),
      );
      expect(new Set(Object.values(beforeLocations))).toEqual(
        new Set([
          toBlockShapeId(
            ReadableIdGenerator.getForCompassFolder("/before"),
            randomnessKey,
          ),
        ]),
      );
      for (const output of before.shapes.outputShapes.keys()) {
        expect(after.blockDataAddOn.idToBlockShapeId[output]).toBe(
          before.blockDataAddOn.idToBlockShapeId[output],
        );
      }

      const root = await defineOntologyV2(
        "com.example.",
        () => defineEntities("/"),
        undefined,
        undefined,
        undefined,
        randomnessKey,
      );
      expect(root.shapes.outputShapes).toEqual(before.shapes.outputShapes);
      expect(root.ontologyIr.ontology).toEqual({
        ...beforeOntology,
        blockOutputCompassLocations: {},
      });
      expect(root.shapes.inputMappings).not.toContainEqual(
        expect.objectContaining({
          input: ReadableIdGenerator.getForCompassFolder("/before"),
        }),
      );
    },
  );

  it("excludes imported entities even when their definitions contain folders", async () => {
    await defineOntologyV2("upstream.", () => defineEntities("/upstream"));
    const upstream = getOntologyDefinition();
    const result = await defineOntologyV2("com.example.", () => {
      importOntologyEntity(upstream.OBJECT_TYPE["upstream.Thing"]);
    });
    expect(
      Object.keys(result.ontologyIr.importedOntology.objectTypes),
    ).toHaveLength(1);
    expect(result.outputFolderPaths).toEqual({});
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
      defineFunctionBackedAction({
        apiName: "update-thing",
        functionApiName: "updateThing",
        permission: "publicProject",
        folder: "/actions",
      });
    };

    try {
      fs.writeFileSync(functionsIrFile, JSON.stringify(functionsIr));
      const beforeDiscovery = await defineOntologyV2("com.example.", define);
      expect(beforeDiscovery.outputFolderPaths).toEqual({});
      const afterDiscovery = await defineOntologyV2(
        "com.example.",
        define,
        undefined,
        undefined,
        functionsIrFile,
      );
      expect(afterDiscovery.outputFolderPaths).toEqual({
        "action-type-com.example.update-thing": "/actions",
      });
    } finally {
      fs.rmSync(buildDir, { recursive: true, force: true });
    }
  });
});
