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
import { fileURLToPath } from "node:url";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import main from "./main.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";

describe("dataset generation", () => {
  let buildDir: string;

  beforeEach(async () => {
    buildDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), "maker-datasets-"),
    );
  });

  afterEach(async () => {
    await fs.promises.rm(buildDir, { recursive: true, force: true });
  });

  async function generate(fixture: string): Promise<BlockGeneratorResult[]> {
    const output = path.join(buildDir, "block_generator_result.json");
    await main([
      "node",
      "maker-experimental",
      "--input",
      fileURLToPath(new URL(`fixtures/${fixture}.ts`, import.meta.url)),
      "--output",
      output,
      "--buildDir",
      buildDir,
      "--codegenDir",
      buildDir,
    ]);
    return JSON.parse(await fs.promises.readFile(output, "utf-8"));
  }

  it("emits a standalone schema-only dataset without an ontology block", async () => {
    const results = await generate("datasetOnly");
    expect(results).toHaveLength(1);
    const result = results[0];
    expect(result.block_type).toBe("STATIC_DATASET");
    expect(Object.values(result.inputs).map((input) => input.type)).toEqual([
      "compassResource",
    ]);
    expect(result.input_mapping_entries).toEqual([]);
    expect(Object.values(result.outputs)).toContainEqual(
      expect.objectContaining({
        type: "tabularDatasource",
        tabularDatasource: expect.objectContaining({
          about: expect.objectContaining({ fallbackTitle: "Audit log" }),
          type: "DATASET",
        }),
      }),
    );

    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "schema.json"),
        "utf-8",
      ),
    );
    expect(schema.fieldSchemaList).toMatchObject([
      { name: "event_id", type: "STRING" },
      { name: "occurred_at", type: "TIMESTAMP" },
      { name: "tags", type: "ARRAY", arraySubtype: { type: "STRING" } },
      { name: "amount", type: "DECIMAL", precision: 12, scale: 2 },
      {
        name: "metadata",
        type: "STRUCT",
        subSchemas: [{ name: "active", type: "BOOLEAN" }],
      },
    ]);
    const blockData = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "block-data.json"),
        "utf-8",
      ),
    );
    expect(blockData.v1).toMatchObject({ hasSchema: true, includeData: false });
    expect(Object.values(blockData.v1.columns)).toEqual([
      "event_id",
      "occurred_at",
      "tags",
      "amount",
      "metadata",
    ]);
  });

  it("includes both standalone and object backing datasets alongside ontology entities", async () => {
    const results = await generate("datasetWithOntology");
    expect(results.map((result) => result.block_type)).toEqual([
      "ONTOLOGY",
      "STATIC_DATASET",
      "STATIC_DATASET",
    ]);
    const outputIds = results.flatMap((result) => Object.keys(result.outputs));
    expect(new Set(outputIds).size).toBe(outputIds.length);
    expect(
      new Set(results.map((result) => result.block_data_directory)).size,
    ).toBe(3);
  });

  it("generates the same dataset format for default and explicit modes", async () => {
    const results = await generate("datasetModes");
    expect(results.map((result) => result.block_type)).toEqual([
      "STATIC_DATASET",
      "STATIC_DATASET",
    ]);
    for (const result of results) {
      const schema = JSON.parse(
        await fs.promises.readFile(
          path.join(result.block_data_directory, "schema.json"),
          "utf-8",
        ),
      );
      expect(schema.fieldSchemaList).toMatchObject([
        { name: "id", type: "STRING" },
      ]);
      expect(Object.values(result.outputs)).toContainEqual(
        expect.objectContaining({
          type: "tabularDatasource",
          tabularDatasource: expect.objectContaining({ type: "DATASET" }),
        }),
      );
      const blockData = JSON.parse(
        await fs.promises.readFile(
          path.join(result.block_data_directory, "block-data.json"),
          "utf-8",
        ),
      );
      expect(blockData.v1).toMatchObject({
        hasSchema: true,
        includeData: false,
      });
    }
  });

  it("wires shared datasets and renamed columns into object datasources", async () => {
    const results = await generate("datasetAsDatasource");
    expect(results.map((result) => result.block_type)).toEqual([
      "ONTOLOGY",
      "STATIC_DATASET",
    ]);
    const [ontology, dataset] = results;
    const datasetOutput = Object.entries(dataset.outputs).find(
      ([, output]) => output.type === "tabularDatasource",
    )!;
    const columnOutputs = Object.fromEntries(
      Object.entries(dataset.outputs).flatMap(([id, output]) =>
        output.type === "datasourceColumn"
          ? [[output.datasourceColumn.about.fallbackTitle, id]]
          : [],
      ),
    );
    expect(ontology.input_mapping_entries).toEqual(
      expect.arrayContaining([
        { input: "dataset-datasource-Event", output: datasetOutput[0] },
        {
          input: "dataset-datasource-column-Event-event_id",
          output: columnOutputs.event_id,
        },
        {
          input: "dataset-datasource-column-Event-description",
          output: columnOutputs.description,
        },
        {
          input: "dataset-datasource-column-Event-event_metadata",
          output: columnOutputs.event_metadata,
        },
        { input: "dataset-datasource-EventSummary", output: datasetOutput[0] },
        {
          input: "dataset-datasource-column-EventSummary-event_id",
          output: columnOutputs.event_id,
        },
      ]),
    );
    expect(ontology.input_mapping_entries).toHaveLength(6);
    for (const { input, output } of ontology.input_mapping_entries) {
      expect(ontology.inputs[input]).toBeDefined();
      expect(dataset.outputs[output]).toBeDefined();
    }
    const eventInput = Object.entries(ontology.inputs).find(
      ([id]) => id === "dataset-datasource-Event",
    )![1];
    const summaryInput = Object.entries(ontology.inputs).find(
      ([id]) => id === "dataset-datasource-EventSummary",
    )![1];
    expect(
      eventInput.type === "tabularDatasource" &&
        eventInput.tabularDatasource.schema,
    ).toHaveLength(3);
    expect(
      summaryInput.type === "tabularDatasource" &&
        summaryInput.tabularDatasource.schema,
    ).toHaveLength(1);
  });

  it("writes complete decimal schemas and matching output shapes", async () => {
    const results = await generate("datasetDecimalDefaults");
    expect(results.map((result) => result.block_identifier)).toEqual([
      "Decimals-dataset",
      "Empty dataset-dataset",
    ]);
    const [dataset, emptyDataset] = results;
    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(dataset.block_data_directory, "schema.json"),
        "utf-8",
      ),
    );
    expect(schema.fieldSchemaList).toMatchObject([
      { name: "scalar", type: "DECIMAL", precision: 38, scale: 0 },
      { name: "precisionOnly", type: "DECIMAL", precision: 12, scale: 0 },
      { name: "scaleOnly", type: "DECIMAL", precision: 38, scale: 2 },
      {
        name: "arrayValues",
        type: "ARRAY",
        arraySubtype: { type: "DECIMAL", precision: 38, scale: 0 },
      },
      {
        name: "structValues",
        type: "ARRAY",
        arraySubtype: {
          type: "STRUCT",
          subSchemas: [
            { name: "amount", type: "DECIMAL", precision: 38, scale: 0 },
            { name: "minimum", type: "DECIMAL", precision: 1, scale: 0 },
            { name: "maximum", type: "DECIMAL", precision: 38, scale: 38 },
          ],
        },
      },
      { name: "emptyStruct", type: "STRUCT", subSchemas: [] },
    ]);
    const columns = Object.fromEntries(
      Object.values(dataset.outputs).flatMap((output) =>
        output.type === "datasourceColumn"
          ? [
              [
                output.datasourceColumn.about.fallbackTitle,
                output.datasourceColumn.type,
              ],
            ]
          : [],
      ),
    );
    expect(columns).toMatchObject({
      scalar: {
        type: "concrete",
        concrete: {
          type: "primitive",
          primitive: { type: "decimal", decimal: { precision: 38, scale: 0 } },
        },
      },
      structValues: {
        type: "concrete",
        concrete: {
          type: "array",
          array: {
            elementType: {
              type: "struct",
              struct: {
                fields: [
                  {
                    name: "amount",
                    type: {
                      type: "primitive",
                      primitive: {
                        type: "decimal",
                        decimal: { precision: 38, scale: 0 },
                      },
                    },
                  },
                  {
                    name: "minimum",
                    type: {
                      type: "primitive",
                      primitive: {
                        type: "decimal",
                        decimal: { precision: 1, scale: 0 },
                      },
                    },
                  },
                  {
                    name: "maximum",
                    type: {
                      type: "primitive",
                      primitive: {
                        type: "decimal",
                        decimal: { precision: 38, scale: 38 },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      },
    });
    const emptySchema = JSON.parse(
      await fs.promises.readFile(
        path.join(emptyDataset.block_data_directory, "schema.json"),
        "utf-8",
      ),
    );
    expect(emptySchema.fieldSchemaList).toEqual([]);
  });

  it("preserves the existing ontology block for inputs with no datasets", async () => {
    const results = await generate("empty");
    expect(results.map((result) => result.block_type)).toEqual(["ONTOLOGY"]);
  });

  it("preserves ontology imports alongside standalone datasets", async () => {
    const results = await generate("datasetWithImports");
    expect(results.map((result) => result.block_type)).toEqual([
      "ONTOLOGY",
      "STATIC_DATASET",
    ]);
    expect(
      Object.values(results[0].inputs).map((input) => input.type),
    ).toContain("objectType");
    expect(Object.keys(results[0].input_presets ?? {})).not.toHaveLength(0);
  });
});
