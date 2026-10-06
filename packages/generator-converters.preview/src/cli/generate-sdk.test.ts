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

import * as path from "node:path";

import type { OntologyBlockDataV2 } from "@osdk/client.unstable";
import type * as NodeFsPromises from "node:fs/promises";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

const fs = vi.hoisted(() => ({
  readFile: vi.fn<(file: string) => Promise<string>>(),
  readdir: vi.fn<(dir: string) => Promise<string[]>>(),
  mkdir: vi.fn<(dir: string) => Promise<void>>(),
  writeFile: vi.fn<(file: string, contents: string) => Promise<void>>(),
  rm: vi.fn<(file: string) => Promise<void>>(),
}));

vi.mock("node:fs/promises", async importOriginal => ({
  ...await importOriginal<typeof NodeFsPromises>(),
  readFile: fs.readFile,
  readdir: fs.readdir,
  mkdir: fs.mkdir,
  writeFile: fs.writeFile,
  rm: fs.rm,
}));

const blockResultsPath = path.resolve("build/notional-block-results.json");
const ontologyPath = path.resolve("build/ontology/ontology.json");
const directInputPath = path.resolve("build/notional-ontology.json");
const outputDir = path.resolve("build/notional-generated-sdk");
const packageDir = path.join(outputDir, "notional-sdk");
const originalArgv = process.argv;
const exit = vi.fn();
const writtenFiles = new Map<string, string>();

const ontology = {
  objectTypes: {
    "item-rid": {
      objectType: {
        rid: "item-rid",
        id: "item",
        apiName: "Item",
        displayMetadata: {
          displayName: "Item",
          pluralDisplayName: "Items",
          visibility: "NORMAL",
          icon: {
            type: "blueprint",
            blueprint: { locator: "cube", color: "#2D72D2" },
          },
        },
        status: { type: "active", active: {} },
        primaryKeys: ["item-id-rid"],
        titlePropertyTypeRid: "item-id-rid",
        propertyTypes: {
          "item-id-rid": {
            rid: "item-id-rid",
            id: "id",
            apiName: "id",
            displayMetadata: { displayName: "ID", visibility: "NORMAL" },
            indexedForSearch: true,
            status: { type: "active", active: {} },
            type: {
              type: "string",
              string: { isLongText: false, supportsExactMatching: true },
            },
            typeClasses: [],
          },
        },
        implementsInterfaces: [],
        implementsInterfaces2: [],
        allImplementsInterfaces: {},
        traits: { workflowObjectTypeTraits: {} },
        typeGroups: [],
      },
      datasources: [],
      writebackDatasets: [],
    },
  },
  interfaceTypes: {
    "item-shape-rid": {
      interfaceType: {
        rid: "item-shape-rid",
        apiName: "ItemShape",
        displayMetadata: { displayName: "Item Shape" },
        status: { type: "active", active: {} },
        actionTypeConstraints: [],
        extendsInterfaces: [],
        links: [],
        properties: [],
        propertiesV2: {},
        propertiesV3: {},
      },
    },
  },
  actionTypes: {},
  sharedPropertyTypes: {},
  linkTypes: {},
  ruleSets: {},
  blockOutputCompassLocations: {},
  knownIdentifiers: {
    actionParameterIds: {},
    actionParameters: {},
    actionTypes: {},
    datasourceColumns: {},
    datasources: {},
    filesDatasources: {},
    functions: {},
    geotimeSeriesSyncs: {},
    groupIds: {},
    interfaceActionTypeConstraints: {},
    interfaceLinkTypes: {},
    interfaceParameterConstraints: {},
    interfacePropertyTypes: {},
    interfaceTypes: {},
    interfaceTypeSchemaTransitions: {},
    linkTypeIds: {},
    linkTypes: {},
    markings: {},
    objectPropertyTypeIdsToRids: {},
    objectTypeIds: {},
    objectTypes: {},
    propertyTypeIds: {},
    propertyTypes: {},
    sharedPropertyTypes: {},
    structFieldRidsToApiNames: {},
    timeSeriesSyncs: {},
    valueTypes: {},
    webhooks: {},
    workshopModules: {},
  },
} satisfies OntologyBlockDataV2;

beforeEach(() => {
  vi.resetModules();
  vi.resetAllMocks();
  vi.stubGlobal("process", { ...process, exit });
  writtenFiles.clear();

  const inputs = new Map([
    [
      blockResultsPath,
      JSON.stringify([{
        block_type: "ONTOLOGY",
        block_data_directory: "ontology",
        inputs: {},
        outputs: {},
        input_mapping_entries: [],
        add_on_override: { idToBlockShapeId: {} },
      }]),
    ],
    [ontologyPath, JSON.stringify(ontology)],
    [directInputPath, JSON.stringify(ontology)],
  ]);
  fs.readFile.mockImplementation(file => {
    const contents = inputs.get(file);
    if (contents === undefined) {
      return Promise.reject(new Error(`Unexpected read: ${file}`));
    }
    return Promise.resolve(contents);
  });
  fs.readdir.mockResolvedValue([]);
  fs.mkdir.mockResolvedValue(undefined);
  fs.rm.mockResolvedValue(undefined);
  fs.writeFile.mockImplementation((file, contents) => {
    writtenFiles.set(file, contents);
    return Promise.resolve();
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
  process.argv = originalArgv;
  vi.restoreAllMocks();
});

function setArgs(inputArgs: string[]): void {
  process.argv = [
    "node",
    "generate-sdk",
    ...inputArgs,
    "--package-name",
    "notional-sdk",
    "--version",
    "0.0.0",
    "--output-dir",
    outputDir,
  ];
}

async function generate(inputArgs: string[]): Promise<{
  index: string;
  metadata: string;
}> {
  setArgs(inputArgs);
  const { consola } = await import("consola");
  const success = vi.spyOn(consola, "success").mockImplementation(() => {});

  const { completion } = await import("./generate-sdk.js");
  await completion;
  expect(success).toHaveBeenCalledWith("Done!");
  expect(exit).not.toHaveBeenCalled();

  const index = writtenFiles.get(path.join(packageDir, "index.ts"));
  const metadata = writtenFiles.get(
    path.join(packageDir, "OntologyMetadata.ts"),
  );
  expect(index).toBeDefined();
  expect(metadata).toBeDefined();
  if (index === undefined || metadata === undefined) {
    throw new Error(
      "SDK generation did not write both TypeScript entry points",
    );
  }
  return { index, metadata };
}

it(
  "keeps ontology and branch exports by default with block results input",
  async () => {
    const { index, metadata } = await generate([
      "--block-results-input",
      blockResultsPath,
    ]);

    expect(index).toContain(
      "export { $branch, $ontologyRid } from './OntologyMetadata.js';",
    );
    expect(metadata).toContain("export const $ontologyRid =");
    expect(metadata).toContain("export const $branch:");
    expect(index).toContain(
      "export { $osdkMetadata } from './OntologyMetadata.js';",
    );
    expect(metadata).toContain("export const $osdkMetadata =");
    expect(index).toContain("export { Item } from './ontology/objects.js';");
    expect(index).toContain(
      "export { ItemShape } from './ontology/interfaces.js';",
    );
    expect(writtenFiles.has(path.join(packageDir, "ontology/objects/Item.ts")))
      .toBe(true);
    expect(
      writtenFiles.has(
        path.join(packageDir, "ontology/interfaces/ItemShape.ts"),
      ),
    )
      .toBe(true);
  },
  30000,
);

it(
  "omits ontology and branch exports without losing SDK exports when requested",
  async () => {
    const { index, metadata } = await generate([
      "--block-results-input",
      blockResultsPath,
      "--omit-ontology-rid",
    ]);

    expect(index).not.toContain("$ontologyRid");
    expect(index).not.toContain("$branch");
    expect(metadata).not.toContain("$ontologyRid");
    expect(metadata).not.toContain("$branch");
    expect(index).toContain(
      "export { $osdkMetadata } from './OntologyMetadata.js';",
    );
    expect(metadata).toContain("export const $osdkMetadata =");
    expect(index).toContain("export { Item } from './ontology/objects.js';");
    expect(index).toContain(
      "export { ItemShape } from './ontology/interfaces.js';",
    );
    expect(writtenFiles.has(path.join(packageDir, "ontology/objects/Item.ts")))
      .toBe(true);
    expect(
      writtenFiles.has(
        path.join(packageDir, "ontology/interfaces/ItemShape.ts"),
      ),
    )
      .toBe(true);
  },
  30000,
);

it("rejects omit ontology RID with direct ontology input", async () => {
  setArgs(["--input", directInputPath, "--omit-ontology-rid"]);
  const { consola } = await import("consola");
  const error = vi.spyOn(consola, "error").mockImplementation(() => {});

  const { completion } = await import("./generate-sdk.js");
  await completion;
  expect(exit).toHaveBeenCalledWith(1);

  expect(error.mock.calls.flat().join(" ")).toContain("--block-results-input");
  expect(writtenFiles.size).toBe(0);
});
