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
  defineValueType,
  getOntologyDefinition,
  importOntologyEntity,
} from "@osdk/maker";
import { describe, expect, it } from "vitest";

import type { ReadableId } from "../util/generateRid.js";
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
  for (const version of ["1.0.0", "2.0.0"]) {
    defineValueType({
      apiName: "Thing",
      namespacePrefix: true,
      displayName: "Thing",
      type: { type: "string" },
      version,
      folder,
    });
  }
}

describe("experimental folder placement conversion", () => {
  it("preserves normalized paths for every entity kind and value type version", async () => {
    const result = await defineOntologyV2("com.example.", () =>
      defineEntities("domain//entities/"),
    );

    expect(result.outputFolderPaths).toEqual({
      "object-type-com.example.Thing": "/domain/entities",
      "interface-com.example.Thing": "/domain/entities",
      "shared-property-type-com.example.thing": "/domain/entities",
      "action-type-com.example.create-thing": "/domain/entities",
      "link-type-related-things": "/domain/entities",
      "produced-value-type-com.example.Thing-1.0.0": "/domain/entities",
      "produced-value-type-com.example.Thing-2.0.0": "/domain/entities",
    });
    expect(
      getOntologyDefinition().OBJECT_TYPE["com.example.Thing"].folder,
    ).toBe("domain//entities/");
    expect(
      getOntologyDefinition().VALUE_TYPE["com.example.Thing"][0].folder,
    ).toBe("domain//entities/");
    const serializedResult = JSON.stringify(result);
    expect(JSON.parse(serializedResult).outputFolderPaths).toEqual(
      result.outputFolderPaths,
    );
    expect(
      Object.values(result.ontologyIr.ontology.interfaceTypes)[0].interfaceType,
    ).not.toHaveProperty("folder");
    for (const id of Object.keys(result.outputFolderPaths)) {
      if (!id.startsWith("produced-value-type-")) {
        expect(result.shapes.outputShapes.has(id as ReadableId)).toBe(true);
      }
    }
  });

  it.each(["", "/"])("preserves explicit root placement %j", async (folder) => {
    const result = await defineOntologyV2("com.example.", () =>
      defineEntities(folder),
    );
    expect(Object.values(result.outputFolderPaths)).toEqual(
      Array.from({ length: 7 }, () => "/"),
    );
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
    "preserves wire data, RIDs, and shapes when placement changes with randomness key %s",
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
      const { outputFolderPaths: beforePaths, ...beforeConversion } = before;
      const { outputFolderPaths: afterPaths, ...afterConversion } = after;
      expect(afterConversion).toEqual(beforeConversion);
      expect(Object.keys(afterPaths)).toEqual(Object.keys(beforePaths));
      expect(new Set(Object.values(beforePaths))).toEqual(new Set(["/before"]));
      expect(new Set(Object.values(afterPaths))).toEqual(new Set(["/after"]));
    },
  );

  it("excludes imported entities even when their definitions contain folders", async () => {
    await defineOntologyV2("upstream.", () => defineEntities("/upstream"));
    const upstream = getOntologyDefinition();
    const result = await defineOntologyV2("com.example.", () => {
      importOntologyEntity(upstream.OBJECT_TYPE["upstream.Thing"]);
      for (const version of upstream.VALUE_TYPE["upstream.Thing"]) {
        importOntologyEntity(version);
      }
    });
    expect(
      Object.keys(result.ontologyIr.importedOntology.objectTypes),
    ).toHaveLength(1);
    expect(result.ontologyIr.importedValueTypes).toHaveLength(1);
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
