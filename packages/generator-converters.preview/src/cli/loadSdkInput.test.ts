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
import * as path from "node:path";

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { PreviewOntologyIrConverter } from "../PreviewOntologyIrConverter.js";
import { loadSdkInput } from "./loadSdkInput.js";

vi.mock("node:fs/promises", () => ({ readFile: vi.fn() }));

const inputFile = path.resolve("build/block-results.json");
const ontologyFile = path.resolve("build/ontology/ontology.json");
const ontology = {
  objectTypes: {},
  actionTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  linkTypes: {},
  knownIdentifiers: {
    valueTypes: { "value-type-rid": { "version-id": "generated-id" } },
  },
};
const ontologyBlock = {
  block_type: "ONTOLOGY",
  block_data_directory: "ontology",
  inputs: {},
  outputs: {},
  input_mapping_entries: [],
};

function mockFiles(files: Record<string, unknown>): void {
  vi.mocked(fs.readFile).mockImplementation(file =>
    Promise.resolve(JSON.stringify(files[String(file)]))
  );
}

beforeEach(() => {
  vi.resetAllMocks();
});

describe("loadSdkInput", () => {
  it.each([ontology, { ontology }])(
    "preserves legacy ontology input: %j",
    async data => {
      mockFiles({ [inputFile]: data });
      await expect(loadSdkInput({ input: inputFile })).resolves.toEqual({
        ontology,
        valueTypes: [],
      });
      expect(fs.readFile).toHaveBeenCalledExactlyOnceWith(inputFile, "utf-8");
    },
  );

  it("requires exactly one input option", async () => {
    await expect(loadSdkInput({})).rejects.toThrow("Provide exactly one");
    await expect(
      loadSdkInput({ input: inputFile, blockResultsInput: inputFile }),
    ).rejects.toThrow("Provide exactly one");
    expect(fs.readFile).not.toHaveBeenCalled();
  });

  it("retains the existing ontology structure check", async () => {
    mockFiles({ [inputFile]: {} });
    await expect(loadSdkInput({ input: inputFile })).rejects.toThrow(
      "Invalid Ontology structure",
    );
  });

  it("loads each connected value type once and selects its latest available version", async () => {
    const firstOutput = "produced-value-type-classification-1.0.0";
    const secondOutput = "produced-value-type-classification-1.1.0";
    const definitionDir = path.resolve("definitions/classification");
    const definitionFile = path.join(definitionDir, "value-types.json");
    const metadata = {
      apiName: "classification",
      displayMetadata: { displayName: "Classification" },
      baseType: { type: "string", string: {} },
      status: { type: "active", active: {} },
    };
    const latest = {
      version: "1.10.0-10",
      baseType: { type: "integer", integer: {} },
      constraints: [],
    };
    const data = {
      ...ontology,
      knownIdentifiers: {
        valueTypes: {
          "value-type-rid": { first: "first-id", second: "second-id" },
        },
      },
    };
    mockFiles({
      [inputFile]: [
        {
          ...ontologyBlock,
          inputs: {
            first: { type: "valueType" },
            second: { type: "valueType" },
            external: { type: "valueType" },
          },
          input_mapping_entries: [{ input: "first", output: firstOutput }, {
            input: "second",
            output: secondOutput,
          }],
          add_on_override: {
            idToBlockShapeId: { first: "first-id", second: "second-id" },
          },
        },
        {
          block_type: "VALUE_TYPE",
          block_data_directory: definitionDir,
          outputs: {
            [firstOutput]: { type: "valueType" },
            [secondOutput]: { type: "valueType" },
          },
        },
        {
          block_type: "VALUE_TYPE",
          block_data_directory: "unused",
          outputs: { unused: { type: "valueType" } },
        },
        { block_type: "STATIC_DATASET", outputs: {} },
      ],
      [ontologyFile]: data,
      [definitionFile]: {
        metadata,
        versions: [
          { version: "1.0.0", constraints: [] },
          latest,
          { version: "1.10.0-2", constraints: [] },
          { version: "1.10.0", constraints: [] },
          { version: "1.1.0", constraints: [] },
        ],
      },
    });

    const loaded = await loadSdkInput({ blockResultsInput: inputFile });
    expect(loaded).toEqual({
      ontology: data,
      valueTypes: [{ ...metadata, ...latest, rid: "value-type-rid" }],
    });
    const converted = PreviewOntologyIrConverter
      .getPreviewFullMetadataFromBlockData(
        loaded.ontology,
        undefined,
        loaded.valueTypes,
      );
    expect(JSON.parse(JSON.stringify(converted)).valueTypes).toEqual({
      classification: {
        apiName: "classification",
        displayName: "Classification",
        rid: "value-type-rid",
        status: "ACTIVE",
        version: "1.10.0-10",
        fieldType: { type: "integer" },
        constraints: [],
      },
    });
    expect(fs.readFile).toHaveBeenCalledTimes(3);
    expect(fs.readFile).toHaveBeenNthCalledWith(2, ontologyFile, "utf-8");
    expect(fs.readFile).toHaveBeenNthCalledWith(3, definitionFile, "utf-8");
  });

  it("preserves generation for imported properties with multiple value type constraints", async () => {
    mockFiles({ [inputFile]: ontology });
    const loaded = await loadSdkInput({ input: inputFile });
    const imported: OntologyFullMetadata = {
      ...PreviewOntologyIrConverter.getPreviewFullMetadataFromBlockData(
        loaded.ontology,
      ),
      actionTypes: {},
      objectTypes: {
        Item: {
          objectType: {
            apiName: "Item",
            rid: "item-rid",
            displayName: "Item",
            pluralDisplayName: "Items",
            primaryKey: "id",
            titleProperty: "id",
            status: "ACTIVE",
            aliases: [],
            datasources: [],
            icon: { type: "blueprint", name: "cube", color: "blue" },
            properties: {
              id: {
                rid: "id-rid",
                dataType: { type: "string" },
                valueTypeApiName: "classification",
                typeClasses: [],
              },
            },
          },
          linkTypes: [],
          implementsInterfaces: [],
          implementsInterfaces2: {},
          sharedPropertyTypeMapping: {},
        },
      },
      valueTypes: {
        classification: {
          apiName: "classification",
          rid: "value-type-rid",
          displayName: "Classification",
          version: "1.0.0",
          fieldType: { type: "string" },
          constraints: [{ type: "enum", options: ["A", "B"] }, {
            type: "length",
            minimumLength: 1,
            maximumLength: 10,
          }],
        },
      },
    };
    const metadata = PreviewOntologyIrConverter
      .getPreviewFullMetadataFromBlockData(
        loaded.ontology,
        imported,
        loaded.valueTypes,
      );
    const writeFile = vi.fn<(file: string, contents: string) => Promise<void>>()
      .mockResolvedValue(undefined);
    await expect(generateClientSdkVersionTwoPointZero(
      { ...metadata, actionTypes: {} },
      "test",
      {
        readdir: () => Promise.resolve([]),
        mkdir: () => Promise.resolve(),
        writeFile,
      },
      "/virtual-sdk",
      "module",
    )).resolves.toBeUndefined();
    expect(writeFile).toHaveBeenCalled();
    expect(metadata.valueTypes).toEqual({});
    expect(metadata.objectTypes.Item.objectType.properties.id.valueTypeApiName)
      .toBe("classification");
  });

  it("does not read value type blocks for external inputs without local mappings", async () => {
    mockFiles({
      [inputFile]: [
        { ...ontologyBlock, inputs: { external: { type: "valueType" } } },
        {
          block_type: "VALUE_TYPE",
          block_data_directory: "unused",
          outputs: {},
        },
      ],
      [ontologyFile]: ontology,
    });
    await expect(loadSdkInput({ blockResultsInput: inputFile })).resolves
      .toEqual({ ontology, valueTypes: [] });
    expect(fs.readFile).toHaveBeenCalledTimes(2);
  });
});
