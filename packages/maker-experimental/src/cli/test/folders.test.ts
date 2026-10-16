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

import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import type { OntologyBlockDataV2 } from "@osdk/client.unstable";
import { consola } from "consola";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ReadableIdGenerator } from "../../util/generateRid.js";
import main from "../main.js";
import type {
  BlockDataAddOn,
  BlockGeneratorResult,
} from "../marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "../marketplaceSerialization/CodeBlockSpec.js";

const TEST_DIR = path.dirname(fileURLToPath(import.meta.url));
const RANDOMNESS_KEY = "123e4567-e89b-12d3-a456-426614174000";

describe("maker-experimental CLI folder blocks", () => {
  let workDir: string;
  let inputDir: string;

  beforeEach(async () => {
    vi.spyOn(consola, "log").mockImplementation(() => {});
    vi.spyOn(consola, "info").mockImplementation(() => {});
    vi.spyOn(consola, "success").mockImplementation(() => {});
    workDir = await fs.mkdtemp(path.join(os.tmpdir(), "maker-folder-cli-"));
    inputDir = await fs.mkdtemp(path.join(TEST_DIR, ".tmp-"));
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await fs.rm(workDir, { recursive: true, force: true });
    await fs.rm(inputDir, { recursive: true, force: true });
  });

  async function run(source: string): Promise<BlockGeneratorResult[]> {
    const input = path.join(inputDir, "ontology.ts");
    const output = path.join(workDir, "blocks.json");
    await fs.writeFile(input, source);
    await main([
      "node",
      "maker-experimental",
      "--input",
      input,
      "--output",
      output,
      "--buildDir",
      path.join(workDir, "build"),
      "--codegenDir",
      path.join(workDir, "codegen"),
      "--randomnessKey",
      RANDOMNESS_KEY,
      "--valueTypesOutput",
      path.join(workDir, "value-types.json"),
    ]);
    return JSON.parse(
      await fs.readFile(output, "utf-8"),
    ) as BlockGeneratorResult[];
  }

  it("includes a shared nested folder tree in the generated block results", async () => {
    const results = await run(`
      import {
        defineCreateObjectAction,
        defineInterface,
        defineLink,
        defineObject,
        defineSharedPropertyType,
      } from "@osdk/maker";

      const objects = ["Person", "Company", "Root"].map((apiName) =>
        defineObject({
          apiName,
          displayName: apiName,
          pluralDisplayName: apiName,
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
          permission: "publicProject",
          folder:
            apiName === "Root"
              ? undefined
              : { id: "/team/entities", location: "team//entities/" },
        }),
      );

      defineInterface({
        apiName: "Named",
        permission: "publicProject",
        folder: { id: "/team/entities", location: "/team/entities" },
      });
      defineSharedPropertyType({
        apiName: "label",
        type: "string",
        permission: "publicProject",
        folder: { id: "/team/entities", location: "/team/entities" },
      });
      defineCreateObjectAction({
        objectType: objects[0],
        apiName: "create-person",
        permission: "publicProject",
        folder: { id: "/team/entities", location: "/team/entities" },
      });
      defineLink({
        apiName: "peopleCompanies",
        many: { object: objects[0], metadata: { apiName: "companies" } },
        toMany: { object: objects[1], metadata: { apiName: "people" } },
        permission: "publicProject",
        folder: { id: "/team/entities", location: "/team/entities" },
      });
    `);
    const folders = results.filter((result) => result.block_type === "COMPASS");
    expect(folders).toHaveLength(2);
    expect(results.some((result) => result.block_type === "ONTOLOGY")).toBe(
      true,
    );

    const parentOutputId =
      ReadableIdGenerator.getForCompassFolderOutput("/team");
    const childOutputId =
      ReadableIdGenerator.getForCompassFolderOutput("/team/entities");
    const parent = folders.find(
      (result) => result.outputs[parentOutputId] !== undefined,
    )!;
    const child = folders.find(
      (result) => result.outputs[childOutputId] !== undefined,
    )!;
    const parentInputId = ReadableIdGenerator.getForCompassFolder("/team");
    expect(parent.inputs).toEqual({});
    expect(child.input_mapping_entries).toEqual([
      { input: parentInputId, output: parentOutputId },
    ]);
    const addOn = child.add_on_override as BlockDataAddOn;
    expect(addOn.idToBlockShapeId["compass-folder"]).toBe(
      toBlockShapeId(childOutputId, RANDOMNESS_KEY),
    );
    expect(
      addOn.outputToLocationInput[
        toBlockShapeId(childOutputId, RANDOMNESS_KEY)
      ],
    ).toBe(parentInputId);
    for (const folder of folders) {
      expect(
        await fs.readFile(
          path.join(folder.block_data_directory, "VERSION"),
          "utf-8",
        ),
      ).toBe('"v1"');
    }

    const ontology = results.find(
      (result) => result.block_type === "ONTOLOGY",
    )!;
    const inputId = ReadableIdGenerator.getForCompassFolder("/team/entities");
    const placedOutputs = [
      ReadableIdGenerator.getForObjectType("Person"),
      ReadableIdGenerator.getForObjectType("Company"),
      ReadableIdGenerator.getForInterface("Named"),
      ReadableIdGenerator.getForSpt("label"),
      ReadableIdGenerator.getForActionType("create-person"),
      ReadableIdGenerator.getForLinkType("people-companies"),
    ];
    const wireData = JSON.parse(
      await fs.readFile(
        path.join(ontology.block_data_directory, "ontology.json"),
        "utf-8",
      ),
    ) as OntologyBlockDataV2;
    expect(wireData.blockOutputCompassLocations).toEqual(
      Object.fromEntries(
        placedOutputs.map((output) => [
          toBlockShapeId(output, RANDOMNESS_KEY),
          toBlockShapeId(inputId, RANDOMNESS_KEY),
        ]),
      ),
    );
    expect(
      ontology.input_mapping_entries.filter(
        (mapping) => mapping.input === inputId,
      ),
    ).toEqual([{ input: inputId, output: childOutputId }]);
    expect(ontology.input_shape_metadata[inputId]).toEqual({
      isOptional: false,
      isAccessedInReconcile: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
    });
    const ontologyAddOn = ontology.add_on_override as BlockDataAddOn;
    expect(ontologyAddOn.idToBlockShapeId[inputId]).toBe(
      toBlockShapeId(inputId, RANDOMNESS_KEY),
    );
    expect(ontologyAddOn.outputToLocationInput).toEqual(
      Object.fromEntries(
        placedOutputs.map((output) => [
          toBlockShapeId(output, RANDOMNESS_KEY),
          inputId,
        ]),
      ),
    );
    expect(
      ontology.inputs[ReadableIdGenerator.getForCompassFolder("/")],
    ).toBeUndefined();
  });

  it("preserves the output when no folders are requested", async () => {
    const results = await run(`
      import { defineInterface } from "@osdk/maker";

      defineInterface({
        apiName: "Person",
        displayName: "Person",
        properties: {
          firstName: { type: "string" },
        },
      });
    `);
    expect(results.map((result) => result.block_type)).toEqual(["ONTOLOGY"]);
  });

  it("installs generated backing datasets in their owning object or link folder", async () => {
    const results = await run(`
      import { defineLink, defineObject } from "@osdk/maker";

      const [fish, tank] = [
        {
          apiName: "Fish",
          folder: { id: "fish-folder", location: "Aquarium//Animals/Fish/" },
        },
        {
          apiName: "Tank",
          folder: {
            id: "/Aquarium/Habitats/Tanks",
            location: "/Aquarium/Habitats/Tanks",
          },
        },
        { apiName: "DefaultRoot", folder: undefined },
      ].map(({ apiName, folder }) =>
        defineObject({
          apiName,
          displayName: apiName,
          pluralDisplayName: apiName,
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
          includeEmptyBackingDatasource: true,
          permission: "publicProject",
          folder,
        }),
      );

      defineLink({
        apiName: "fishVisitedTanks",
        many: { object: fish, metadata: { apiName: "visitedTanks" } },
        toMany: { object: tank, metadata: { apiName: "visitingFish" } },
        includeEmptyBackingDatasource: true,
        permission: "publicProject",
        folder: { id: "relationships", location: "/Aquarium/Relationships" },
      });
    `);
    const datasets = results.filter(
      (result) => result.block_type === "STATIC_DATASET",
    );
    expect(datasets).toHaveLength(4);
    const ontology = results.find(
      (result) => result.block_type === "ONTOLOGY",
    )!;
    const ontologyAddOn = ontology.add_on_override as BlockDataAddOn;

    for (const { datasetName, ownerOutputId, folder, folderId } of [
      {
        datasetName: "Fish",
        ownerOutputId: ReadableIdGenerator.getForObjectType("Fish"),
        folder: "/Aquarium/Animals/Fish",
        folderId: "fish-folder",
      },
      {
        datasetName: "Tank",
        ownerOutputId: ReadableIdGenerator.getForObjectType("Tank"),
        folder: "/Aquarium/Habitats/Tanks",
      },
      {
        datasetName: "link.fishVisitedTanks",
        ownerOutputId: ReadableIdGenerator.getForLinkType("fish-visited-tanks"),
        folder: "/Aquarium/Relationships",
        folderId: "relationships",
      },
    ]) {
      const outputId = ReadableIdGenerator.getForDatasetOutput(datasetName);
      const dataset = datasets.find(
        (result) => result.outputs[outputId] !== undefined,
      )!;
      const inputId = ReadableIdGenerator.getForCompassFolder(
        folderId ?? folder,
      );
      const folderOutputId = ReadableIdGenerator.getForCompassFolderOutput(
        folderId ?? folder,
      );
      expect(
        results.filter(
          (result) => result.outputs[folderOutputId] !== undefined,
        ),
      ).toHaveLength(1);
      expect(dataset.inputs[inputId]).toEqual(ontology.inputs[inputId]);
      expect(dataset.input_shape_metadata[inputId]).toEqual({
        isOptional: false,
        isAccessedInReconcile: true,
        reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      });
      const mapping = { input: inputId, output: folderOutputId };
      expect(dataset.input_mapping_entries).toEqual([mapping]);
      expect(ontology.input_mapping_entries).toContainEqual(mapping);
      const addOn = dataset.add_on_override as BlockDataAddOn;
      expect(addOn.outputToLocationInput).toEqual({
        [toBlockShapeId(outputId, RANDOMNESS_KEY)]: inputId,
      });
      expect(
        ontologyAddOn.outputToLocationInput[
          toBlockShapeId(ownerOutputId, RANDOMNESS_KEY)
        ],
      ).toBe(inputId);
      expect(addOn.idToBlockShapeId[inputId]).toBe(
        toBlockShapeId(inputId, RANDOMNESS_KEY),
      );
    }

    for (const apiName of ["DefaultRoot"]) {
      const outputId = ReadableIdGenerator.getForDatasetOutput(apiName);
      const dataset = datasets.find(
        (result) => result.outputs[outputId] !== undefined,
      )!;
      expect(dataset.inputs).toEqual({});
      expect(dataset.input_mapping_entries).toEqual([]);
      expect(dataset.input_shape_metadata).toEqual({});
      expect(
        (dataset.add_on_override as BlockDataAddOn).outputToLocationInput,
      ).toEqual({});
      expect(
        ontologyAddOn.outputToLocationInput[
          toBlockShapeId(
            ReadableIdGenerator.getForObjectType(apiName),
            RANDOMNESS_KEY,
          )
        ],
      ).toBeUndefined();
    }
  });
});
