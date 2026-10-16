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
import { ReadableIdGenerator } from "../util/generateRid.js";
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
  it("normalizes and wires placement for every supported entity kind", async () => {
    const result = await defineOntologyV2("com.example.", () =>
      defineEntities({ id: "entities", location: "domain//entities/" }),
    );
    const outputs = [
      "object-type-com.example.Thing",
      "interface-com.example.Thing",
      "shared-property-type-com.example.thing",
      "action-type-com.example.create-thing",
      "link-type-related-things",
    ];
    expect(result.outputFolders).toEqual(
      Object.fromEntries(
        outputs.map((output) => [
          output,
          { id: "entities", location: "/domain/entities" },
        ]),
      ),
    );
    expect(
      getOntologyDefinition().OBJECT_TYPE["com.example.Thing"].folder,
    ).toEqual({
      id: "entities",
      location: "domain//entities/",
    });
    expect(
      Object.values(result.ontologyIr.ontology.interfaceTypes)[0].interfaceType,
    ).not.toHaveProperty("folder");
    for (const kind of [
      "objectTypes",
      "interfaceTypes",
      "sharedPropertyTypes",
      "actionTypes",
      "linkTypes",
    ] as const) {
      expect(
        Object.values(
          result.ontologyIr.ontology.blockPermissionInformation![kind],
        ),
      ).toEqual([
        { restrictionStatus: expect.objectContaining({ publicProject: true }) },
      ]);
    }

    const inputId = ReadableIdGenerator.getForCompassFolder("entities");
    expect(result.shapes.inputShapes.get(inputId)).toMatchObject({
      type: "compassResource",
      compassResource: {
        allowedTypes: [{ type: "compassFolderType", compassFolderType: {} }],
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

  it("keeps entity location mappings stable when the destination folder moves", async () => {
    const before = await defineOntologyV2("com.example.", () =>
      defineEntities({ id: "shared-folder", location: "/Aquarium/Fish" }),
    );
    const after = await defineOntologyV2("com.example.", () =>
      defineEntities({ id: "shared-folder", location: "/Animals/Livestock" }),
    );
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

  it("rejects conflicting identities after normalizing folder locations", async () => {
    await expect(
      defineOntologyV2("com.example.", () => {
        defineEntities({ id: "first", location: "/a" });
        defineInterface({
          apiName: "Other",
          permission: "publicProject",
          folder: { id: "second", location: "a//" },
        });
      }),
    ).rejects.toThrow('Folder location "/a" has conflicting ids');
  });

  it("requires explicit publicProject permission during conversion rather than definition", async () => {
    let bodyCompleted = false;
    await expect(
      defineOntologyV2("com.example.", () => {
        defineInterface({
          apiName: "Thing",
          folder: { id: "things", location: "/things" },
        });
        bodyCompleted = true;
      }),
    ).rejects.toThrow(
      'folder placement requires permission to be explicitly set to "publicProject"',
    );
    expect(bodyCompleted).toBe(true);
  });

  it("preserves entity identity when switching destination folders or returning to root", async () => {
    const convert = (folder?: Folder) =>
      defineOntologyV2("com.example.", () => defineEntities(folder));
    const before = await convert({ id: "before", location: "/before" });
    const after = await convert({ id: "after", location: "/after" });
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
    expect(root.outputFolders).toEqual({});
  });

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
