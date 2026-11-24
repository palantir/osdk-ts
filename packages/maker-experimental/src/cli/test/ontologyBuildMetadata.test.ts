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

import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import {
  defineCreateObjectAction,
  defineInterface,
  defineObject,
  defineSharedPropertyType,
  defineValueType,
  getOntologyDefinition,
  initializeOntologyState,
} from "@osdk/maker";
import { consola } from "consola";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import * as conversion from "../../conversion/toMarketplace/convertOntologyDefinition.js";
import main from "../main.js";
import type { BlockGeneratorResult } from "../marketplaceSerialization/BlockGeneratorResult.js";
import type { OntologyBuildMetadataSnapshot } from "../writeOntologyBuildMetadata.js";

vi.mock("node:fs/promises", async (importOriginal) => ({
  ...(await importOriginal<typeof fs>()),
}));

const TEST_DIR = path.dirname(fileURLToPath(import.meta.url));
const RANDOMNESS_KEY = "123e4567-e89b-12d3-a456-426614174000";
const LOCAL_SOURCE = `
  import { defineInterface, defineValueType } from "@osdk/maker";
  defineInterface({ apiName: "Local", properties: { name: { type: "string" } } });
  defineValueType({ apiName: "LocalText", displayName: "Local text", type: { type: "string" }, version: "1.0.0" });
`;
const IMPORT_SOURCE = `
  import { object, action, child, shared, value } from "./imports.js";
  [object, action, child, shared, value].forEach(entity => entity.apiName);
`;

describe("maker-experimental CLI native imported build metadata", () => {
  let workDir: string;
  let inputDir: string;
  let output: string;
  let snapshotPath: string;
  let runs: number;

  beforeEach(async () => {
    vi.spyOn(consola, "log").mockImplementation(() => {});
    vi.spyOn(consola, "info").mockImplementation(() => {});
    vi.spyOn(consola, "success").mockImplementation(() => {});
    workDir = await fs.mkdtemp(path.join(os.tmpdir(), "maker-metadata-"));
    // Inputs live inside the package so their @osdk/maker import resolves.
    inputDir = await fs.mkdtemp(path.join(TEST_DIR, ".tmp-"));
    output = path.join(workDir, "blocks.json");
    snapshotPath = path.join(workDir, "snapshots", "ontology.json");
    runs = 0;

    initializeOntologyState("upstream.");
    const parent = defineInterface({
      apiName: "Parent",
      properties: { name: { type: "string" } },
    });
    const child = defineInterface({ apiName: "Child", extends: parent });
    const shared = defineSharedPropertyType({
      apiName: "Name",
      type: "string",
    });
    const value = defineValueType({
      apiName: "Text",
      displayName: "Text",
      type: { type: "string" },
      version: "1.0.0",
    });
    const object = defineObject({
      apiName: "Employee",
      displayName: "Employee",
      pluralDisplayName: "Employees",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      properties: {
        id: { type: "string", description: "Employee identifier" },
      },
      datasources: [{ type: "dataset" }],
    });
    const action = defineCreateObjectAction({ objectType: object });
    const definitions = getOntologyDefinition();
    // Match the proxy exports shipped by generated ontology packages. Parent is
    // embedded in Child, but never directly accessed by the consuming ontology.
    await fs.writeFile(
      path.join(inputDir, "imports.js"),
      `import { wrapWithProxy } from "@osdk/maker";\n${Object.entries({
        object: definitions.OBJECT_TYPE[object.apiName],
        action: definitions.ACTION_TYPE[action.apiName],
        child,
        shared,
        value,
      })
        .map(
          ([name, entity]) =>
            `export const ${name} = wrapWithProxy(${JSON.stringify(entity)});`,
        )
        .join("\n")}`,
    );
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await fs.rm(workDir, { recursive: true, force: true });
    await fs.rm(inputDir, { recursive: true, force: true });
  });

  async function run(
    source: string,
    ...flags: string[]
  ): Promise<BlockGeneratorResult[]> {
    // A new module URL makes repeated runs evaluate the ontology again.
    const input = path.join(inputDir, `ontology${runs++}.ts`);
    await fs.writeFile(input, source);
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
      "--valueTypesOutput",
      path.join(workDir, "value-types.json"),
      "--randomnessKey",
      RANDOMNESS_KEY,
      ...flags,
    ]);
    return JSON.parse(
      await fs.readFile(output, "utf-8"),
    ) as BlockGeneratorResult[];
  }

  async function readSnapshot(
    file = snapshotPath,
  ): Promise<OntologyBuildMetadataSnapshot> {
    return JSON.parse(
      await fs.readFile(file, "utf-8"),
    ) as OntologyBuildMetadataSnapshot;
  }

  it("is opt-in and preserves existing Marketplace output", async () => {
    const legacy = await run(IMPORT_SOURCE + LOCAL_SOURCE);
    await expect(fs.access(path.dirname(snapshotPath))).rejects.toThrow();

    const results = await run(
      IMPORT_SOURCE + LOCAL_SOURCE,
      "--importedBlockDataOutput",
      snapshotPath,
    );
    expect(results).toEqual(legacy);
    expect(await readSnapshot()).toHaveProperty("schemaVersion", 1);
    const contents = await fs.readFile(snapshotPath, "utf-8");
    await run(LOCAL_SOURCE);
    expect(await fs.readFile(snapshotPath, "utf-8")).toBe(contents);
  });

  it("preserves native definitions and separates direct, transitive, and value-type imports", async () => {
    await run(
      IMPORT_SOURCE + LOCAL_SOURCE,
      "--importedBlockDataOutput",
      snapshotPath,
    );
    const snapshot = await readSnapshot();
    // Local definitions and the evaluation salt remain outside this import contract.
    expect(Object.keys(snapshot).sort()).toEqual([
      "importedOntology",
      "importedValueTypes",
      "schemaVersion",
      "transitiveImportedOntology",
    ]);
    const importedObject = Object.values(
      snapshot.importedOntology.objectTypes,
    )[0];
    expect(importedObject.objectType.apiName).toBe("upstream.Employee");
    expect(importedObject.objectType.propertyTypes).not.toEqual({});
    expect(importedObject.datasources).toHaveLength(1);
    expect(snapshot.importedOntology.knownIdentifiers.objectTypes).not.toEqual(
      {},
    );
    expect(Object.values(snapshot.importedOntology.actionTypes)).toHaveLength(
      1,
    );
    expect(
      Object.values(snapshot.importedOntology.sharedPropertyTypes),
    ).toHaveLength(1);
    expect(
      Object.values(snapshot.importedOntology.interfaceTypes).map(
        (entry) => entry.interfaceType.apiName,
      ),
    ).toEqual(["upstream.Child"]);
    expect(
      Object.values(snapshot.transitiveImportedOntology.interfaceTypes).map(
        (entry) => entry.interfaceType.apiName,
      ),
    ).toEqual(["upstream.Parent"]);
    expect(snapshot.importedValueTypes[0]).toHaveProperty(
      "versions.0.version",
      "1.0.0",
    );
    expect(snapshot.importedValueTypes[0]).not.toHaveProperty("blockData");
    expect(
      snapshot.importedValueTypes.map((entry) => entry.metadata.apiName),
    ).toEqual(["Text"]);
  });

  it("replaces the complete snapshot when definitions are removed", async () => {
    await run(
      IMPORT_SOURCE + LOCAL_SOURCE,
      "--importedBlockDataOutput",
      snapshotPath,
    );
    await run("", "--importedBlockDataOutput", snapshotPath);
    const snapshot = await readSnapshot();
    for (const block of [
      snapshot.importedOntology,
      snapshot.transitiveImportedOntology,
    ]) {
      expect(block.objectTypes).toEqual({});
      expect(block.interfaceTypes).toEqual({});
      expect(block.actionTypes).toEqual({});
      expect(block.sharedPropertyTypes).toEqual({});
    }
    expect(snapshot.importedValueTypes).toEqual([]);
  });

  it("keeps the previous snapshot when conversion fails", async () => {
    await run(LOCAL_SOURCE, "--importedBlockDataOutput", snapshotPath);
    const previous = await fs.readFile(snapshotPath, "utf-8");
    vi.spyOn(conversion, "convertOntologyDefinition").mockImplementationOnce(
      () => {
        throw new Error("conversion failed");
      },
    );
    await expect(
      run(IMPORT_SOURCE, "--importedBlockDataOutput", snapshotPath),
    ).rejects.toThrow("conversion failed");
    expect(await fs.readFile(snapshotPath, "utf-8")).toBe(previous);
  });

  it("keeps the previous snapshot when lockfile validation fails", async () => {
    await run(LOCAL_SOURCE, "--importedBlockDataOutput", snapshotPath);
    const previous = await fs.readFile(snapshotPath, "utf-8");
    const source = await fs.readFile(
      path.join(TEST_DIR, "fixtures", "personOptedIn.ts"),
      "utf-8",
    );
    await expect(
      run(source, "--importedBlockDataOutput", snapshotPath),
    ).rejects.toThrow(/there is no lockfile/u);
    expect(await fs.readFile(snapshotPath, "utf-8")).toBe(previous);
  });

  it("keeps the previous snapshot and cleans up when atomic replacement fails", async () => {
    await run(LOCAL_SOURCE, "--importedBlockDataOutput", snapshotPath);
    const previous = await fs.readFile(snapshotPath, "utf-8");
    vi.spyOn(fs, "rename").mockRejectedValueOnce(new Error("rename failed"));
    await expect(
      run(IMPORT_SOURCE, "--importedBlockDataOutput", snapshotPath),
    ).rejects.toThrow("rename failed");
    expect(await fs.readFile(snapshotPath, "utf-8")).toBe(previous);
    expect(await fs.readdir(path.dirname(snapshotPath))).toEqual([
      "ontology.json",
    ]);
  });

  it("writes a separate snapshot for the function-aware evaluation", async () => {
    await run(
      IMPORT_SOURCE + LOCAL_SOURCE,
      "--importedBlockDataOutput",
      snapshotPath,
    );
    const bootstrap = await fs.readFile(snapshotPath, "utf-8");
    vi.spyOn(
      OntologyIrToFullMetadataConverter,
      "discoverTypeScriptFunctions",
    ).mockImplementation(async (_functionsDir, _nodeModulesDir, irFile) => {
      await fs.writeFile(irFile!, JSON.stringify({ discoveredFunctions: [] }));
      return [];
    });
    const finalPath = path.join(workDir, "snapshots", "final.json");
    await run(
      LOCAL_SOURCE,
      "--importedBlockDataOutput",
      finalPath,
      "--temporaryBlockDataFile",
      path.join(workDir, "build", "temp_block_data", "ontology.json"),
      "--functionsDir",
      path.join(workDir, "functions"),
      "--nodeModulesDir",
      path.join(workDir, "node_modules"),
      "--functionsIrOutputFile",
      path.join(workDir, "functions.json"),
    );
    expect(
      OntologyIrToFullMetadataConverter.discoverTypeScriptFunctions,
    ).toHaveBeenCalledOnce();
    expect(
      (await readSnapshot(finalPath)).importedOntology.objectTypes,
    ).toEqual({});
    expect(await fs.readFile(snapshotPath, "utf-8")).toBe(bootstrap);
  });
});
