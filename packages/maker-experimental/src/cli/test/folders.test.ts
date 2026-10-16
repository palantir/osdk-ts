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

  async function run(fixture: string): Promise<BlockGeneratorResult[]> {
    const input = path.join(inputDir, "ontology.ts");
    const output = path.join(workDir, "blocks.json");
    await fs.copyFile(path.join(TEST_DIR, "fixtures", fixture + ".ts"), input);
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
    const results = await run("folders");
    const folders = results.filter((result) => result.block_type === "COMPASS");
    expect(folders).toHaveLength(2);
    expect(results.some((result) => result.block_type === "ONTOLOGY")).toBe(
      true,
    );

    const parentOutputId = ReadableIdGenerator.getForCompassFolder("/team");
    const childOutputId =
      ReadableIdGenerator.getForCompassFolder("/team/entities");
    const parent = folders.find(
      (result) => result.outputs[parentOutputId] !== undefined,
    )!;
    const child = folders.find(
      (result) => result.outputs[childOutputId] !== undefined,
    )!;
    const parentInputId =
      ReadableIdGenerator.getForCompassFolderLocation("/team");
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
  });

  it("preserves the output when no folders are requested", async () => {
    const results = await run("personNotOptedIn");
    expect(results.map((result) => result.block_type)).toEqual(["ONTOLOGY"]);
  });
});
