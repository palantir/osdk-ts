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

import type { Folder } from "@osdk/maker";
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

function defineEntities(folder?: Folder): void {
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
      defineEntities({ id: "/domain/entities", location: "domain//entities/" }),
    );

    expect(result.outputFolders).toEqual({
      "object-type-com.example.Thing": {
        id: "/domain/entities",
        location: "/domain/entities",
      },
      "interface-com.example.Thing": {
        id: "/domain/entities",
        location: "/domain/entities",
      },
      "shared-property-type-com.example.thing": {
        id: "/domain/entities",
        location: "/domain/entities",
      },
      "action-type-com.example.create-thing": {
        id: "/domain/entities",
        location: "/domain/entities",
      },
      "link-type-related-things": {
        id: "/domain/entities",
        location: "/domain/entities",
      },
    });
    expect(
      getOntologyDefinition().OBJECT_TYPE["com.example.Thing"].folder,
    ).toEqual({ id: "/domain/entities", location: "domain//entities/" });
    const serializedResult = JSON.stringify(result);
    expect(JSON.parse(serializedResult).outputFolders).toEqual(
      result.outputFolders,
    );
    expect(
      Object.values(result.ontologyIr.ontology.interfaceTypes)[0].interfaceType,
    ).not.toHaveProperty("folder");
    for (const id of Object.keys(result.outputFolders)) {
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
    const ontologyOutputs = Object.keys(result.outputFolders).filter((id) =>
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

  it("omits entities without an explicit folder", async () => {
    const result = await defineOntologyV2("com.example.", () =>
      defineEntities(),
    );
    expect(result.outputFolders).toEqual({});
  });

  it("keeps all entity location mappings stable when an explicitly identified folder moves", async () => {
    const before = await defineOntologyV2("com.example.", () =>
      defineEntities({ id: "shared-folder", location: "Aquarium//Fish/" }),
    );
    expect(Object.values(before.outputFolders)).toEqual(
      Array.from({ length: 5 }, () => ({
        id: "shared-folder",
        location: "/Aquarium/Fish",
      })),
    );
    expect(
      getOntologyDefinition().OBJECT_TYPE["com.example.Thing"].folder,
    ).toEqual({ id: "shared-folder", location: "Aquarium//Fish/" });
    const after = await defineOntologyV2("com.example.", () =>
      defineEntities({ id: "shared-folder", location: "/Animals/Livestock" }),
    );
    expect(after.ontologyIr.ontology).toEqual(before.ontologyIr.ontology);
    expect(after.shapes.outputShapes).toEqual(before.shapes.outputShapes);
    expect(after.shapes.inputMappings).toEqual(before.shapes.inputMappings);
    expect(after.blockDataAddOn).toEqual(before.blockDataAddOn);
    const inputId = ReadableIdGenerator.getForCompassFolder("shared-folder");
    expect(after.shapes.inputShapes.get(inputId)).toMatchObject({
      compassResource: { about: { fallbackTitle: "/Animals/Livestock" } },
    });
    expect(after.shapes.inputMappings).toContainEqual({
      input: inputId,
      output: ReadableIdGenerator.getForCompassFolderOutput("shared-folder"),
    });
    const serializedResult = JSON.stringify(after);
    expect(JSON.parse(serializedResult).outputFolders).toEqual(
      after.outputFolders,
    );
  });

  it("shares one folder identity across normalized references", async () => {
    const result = await defineOntologyV2("com.example.", () => {
      defineEntities({ id: "fish", location: "/Aquarium/Fish" });
      defineInterface({
        apiName: "Fish",
        permission: "publicProject",
        folder: { id: "fish", location: "Aquarium//Fish/" },
      });
    });
    expect(Object.values(result.outputFolders)).toEqual(
      Array.from({ length: 6 }, () => ({
        id: "fish",
        location: "/Aquarium/Fish",
      })),
    );
    const inputId = ReadableIdGenerator.getForCompassFolder("fish");
    expect(
      new Set(Object.values(result.blockDataAddOn.outputToLocationInput)),
    ).toEqual(new Set([inputId]));
    expect(result.shapes.inputMappings).toContainEqual({
      input: inputId,
      output: ReadableIdGenerator.getForCompassFolderOutput("fish"),
    });
  });

  it.each([
    {
      first: { id: "same", location: "/a" },
      second: { id: "same", location: "/b" },
      error: 'Folder id "same" is used for both',
    },
    {
      first: { id: "first", location: "/a" },
      second: { id: "second", location: "a//" },
      error: 'Folder location "/a" has conflicting ids',
    },
    {
      first: { id: "/a", location: "/a/b" },
      second: { id: "child", location: "/a/b/c" },
      error: 'Folder id "/a" is used for both',
    },
  ])(
    "rejects conflicting folder identities during conversion: $error",
    async ({ first, second, error }) => {
      await expect(
        defineOntologyV2("com.example.", () => {
          defineEntities(first);
          defineInterface({
            apiName: "Other",
            permission: "publicProject",
            folder: second,
          });
        }),
      ).rejects.toThrow(error);
    },
  );

  it.each([
    {
      folder: { id: "folder", location: "a/../b" },
      permission: "publicProject",
      error: 'folder must not contain "." or ".." path segments',
    },
    {
      folder: { id: "folder", location: "" },
      permission: undefined,
      error:
        'folder placement requires permission to be explicitly set to "publicProject"',
    },
    {
      folder: { id: "folder", location: "a" },
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
          expect(object.folder).toEqual(folder);
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
        () => defineEntities({ id: "/before", location: "/before" }),
        undefined,
        undefined,
        undefined,
        randomnessKey,
      );
      const after = await defineOntologyV2(
        "com.example.",
        () => defineEntities({ id: "/after", location: "/after" }),
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
        () => defineEntities(),
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
    await defineOntologyV2("upstream.", () =>
      defineEntities({ id: "/upstream", location: "/upstream" }),
    );
    const upstream = getOntologyDefinition();
    const result = await defineOntologyV2("com.example.", () => {
      importOntologyEntity(upstream.OBJECT_TYPE["upstream.Thing"]);
    });
    expect(
      Object.keys(result.ontologyIr.importedOntology.objectTypes),
    ).toHaveLength(1);
    expect(result.outputFolders).toEqual({});
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
        folder: { id: "/actions", location: "/actions" },
      });
    };

    try {
      fs.writeFileSync(functionsIrFile, JSON.stringify(functionsIr));
      const beforeDiscovery = await defineOntologyV2("com.example.", define);
      expect(beforeDiscovery.outputFolders).toEqual({});
      const afterDiscovery = await defineOntologyV2(
        "com.example.",
        define,
        undefined,
        undefined,
        functionsIrFile,
      );
      expect(afterDiscovery.outputFolders).toEqual({
        "action-type-com.example.update-thing": {
          id: "/actions",
          location: "/actions",
        },
      });
    } finally {
      fs.rmSync(buildDir, { recursive: true, force: true });
    }
  });
});
