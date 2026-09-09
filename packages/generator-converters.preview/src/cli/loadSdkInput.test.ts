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

import { beforeEach, describe, expect, it, vi } from "vitest";

import { PreviewOntologyIrConverter } from "../PreviewOntologyIrConverter.js";
import { loadSdkInput } from "./loadSdkInput.js";

vi.mock("node:fs/promises", () => ({ readFile: vi.fn() }));

const inputFile = path.resolve("build/block-results.json");
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

beforeEach(() => {
  vi.resetAllMocks();
});

describe("loadSdkInput", () => {
  it.each([ontology, { ontology }])(
    "preserves legacy ontology input: %j",
    async data => {
      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify(data));
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
    vi.mocked(fs.readFile).mockResolvedValue("{}");
    await expect(loadSdkInput({ input: inputFile })).rejects.toThrow(
      "Invalid Ontology structure",
    );
  });

  it("loads each connected value type once and selects its latest available version", async () => {
    const firstOutput = "produced-value-type-classification-1.0.0";
    const secondOutput = "produced-value-type-classification-1.1.0";
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
    vi.mocked(fs.readFile)
      .mockResolvedValueOnce(JSON.stringify([
        {
          block_type: "ONTOLOGY",
          block_data_directory: "ontology",
          inputs: {
            first: { type: "valueType" },
            second: { type: "valueType" },
            external: { type: "valueType" },
          },
          outputs: {},
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
          block_data_directory: path.resolve("definitions/classification"),
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
      ]))
      .mockResolvedValueOnce(JSON.stringify(data))
      .mockResolvedValueOnce(JSON.stringify({
        metadata,
        versions: [
          { version: "1.0.0", constraints: [] },
          latest,
          { version: "1.10.0-2", constraints: [] },
          { version: "1.10.0", constraints: [] },
          { version: "1.1.0", constraints: [] },
        ],
      }));

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
    expect(fs.readFile).toHaveBeenNthCalledWith(
      2,
      path.resolve("build/ontology/ontology.json"),
      "utf-8",
    );
    expect(fs.readFile).toHaveBeenNthCalledWith(
      3,
      path.resolve("definitions/classification/value-types.json"),
      "utf-8",
    );
  });

  it("does not read value type blocks for external inputs without local mappings", async () => {
    vi.mocked(fs.readFile)
      .mockResolvedValueOnce(JSON.stringify([
        {
          block_type: "ONTOLOGY",
          block_data_directory: "ontology",
          inputs: { external: { type: "valueType" } },
          outputs: {},
          input_mapping_entries: [],
        },
        {
          block_type: "VALUE_TYPE",
          block_data_directory: "unused",
          outputs: {},
        },
      ]))
      .mockResolvedValueOnce(JSON.stringify(ontology));

    await expect(loadSdkInput({ blockResultsInput: inputFile })).resolves
      .toEqual({ ontology, valueTypes: [] });
    expect(fs.readFile).toHaveBeenCalledTimes(2);
  });
});
