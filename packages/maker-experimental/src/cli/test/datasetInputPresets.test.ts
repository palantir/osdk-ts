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

import { consola } from "consola";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

import { ReadableIdGenerator } from "../../util/generateRid.js";
import main from "../main.js";
import type { BlockGeneratorResult } from "../marketplaceSerialization/BlockGeneratorResult.js";

const testDir = path.dirname(fileURLToPath(import.meta.url));
let workDir: string;
let inputDir: string;

beforeEach(async () => {
  vi.spyOn(consola, "log").mockImplementation(() => {});
  vi.spyOn(consola, "info").mockImplementation(() => {});
  vi.spyOn(consola, "success").mockImplementation(() => {});
  vi.spyOn(consola, "warn").mockImplementation(() => {});
  workDir = await fs.mkdtemp(path.join(os.tmpdir(), "maker-dataset-presets-"));
  // Inputs must live inside the package so their workspace imports resolve.
  inputDir = await fs.mkdtemp(path.join(testDir, ".tmp-"));
});

afterEach(async () => {
  vi.restoreAllMocks();
  await fs.rm(workDir, { recursive: true, force: true });
  await fs.rm(inputDir, { recursive: true, force: true });
});

async function run(fixture: string): Promise<BlockGeneratorResult[]> {
  const input = path.join(inputDir, "ontology.ts");
  const output = path.join(workDir, "block_generator_result.json");
  await fs.copyFile(path.join(testDir, "fixtures", `${fixture}.ts`), input);
  await main([
    "node",
    "maker-experimental",
    "-i",
    input,
    "-o",
    output,
    "-b",
    path.join(workDir, "build"),
    "-c",
    path.join(workDir, "codegen"),
    "--apiNamespace",
    "com.acme.",
    "--valueTypesOutput",
    path.join(workDir, "value_types_block_generator_result.json"),
  ]);
  return JSON.parse(await fs.readFile(output, "utf-8"));
}

it("emits exact dataset and column presets without embedding resource RIDs in ontology data", async () => {
  const [block] = await run("datasetInputPresets");
  const ridInput = ReadableIdGenerator.getForDataset("com.acme.RidEmployees");
  const datasetRid =
    "ri.foundry.main.dataset.12345678-1234-1234-1234-123456789abc";
  const columnInput = ReadableIdGenerator.getForDatasetColumn(
    "com.acme.RidEmployees",
    "EMPLOYEE_ID",
  );
  const locator = {
    type: "dataset",
    dataset: { rid: datasetRid, branch: "main" },
  };
  const preset = (shape: unknown) => ({
    value: {
      type: "fromSource",
      fromSource: {
        resolver: {
          type: "resolvedShapeResolver",
          resolvedShapeResolver: shape,
        },
      },
    },
    exportCompatibility: "INCOMPATIBLE",
    enforcement: "SUGGESTED",
    isDefault: true,
  });
  expect(block.input_presets).toStrictEqual({
    [ridInput]: preset({
      type: "tabularDatasource",
      tabularDatasource: { datasourceLocator: locator },
    }),
    [columnInput]: preset({
      type: "datasourceColumn",
      datasourceColumn: { datasource: locator, name: "EMPLOYEE_ID" },
    }),
  });
  expect(block.inputs[columnInput].type).toBe("datasourceColumn");
  expect(block.inputs[ridInput].type).toBe("tabularDatasource");
  const blockData = await fs.readFile(
    path.join(block.block_data_directory, "ontology.json"),
    "utf-8",
  );
  // TODO is this assertion useful?
  expect(blockData).not.toContain(datasetRid);
});

it("leaves presets empty when no references are authored", async () => {
  const [block] = await run("personNotOptedIn");
  expect(block.input_presets).toStrictEqual({});
});
