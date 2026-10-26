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

import { generatePackage } from "@osdk/foundry-sdk-generator";
import type {
  OntologyFullMetadata,
  QueryTypeV2,
} from "@osdk/foundry.ontologies";
import type * as OntologyIrConverters from "@osdk/generator-converters.ontologyir";
import { consola } from "consola";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { main } from "./generate-sdk.js";

const { getOsdkQueryTypes } = vi.hoisted(() => ({
  getOsdkQueryTypes: vi.fn<() => Promise<OntologyFullMetadata["queryTypes"]>>(),
}));

vi.mock("node:fs/promises", () => ({
  readFile: vi.fn(),
  mkdir: vi.fn().mockResolvedValue(undefined),
  readdir: vi.fn().mockResolvedValue([]),
  rm: vi.fn().mockResolvedValue(undefined),
  writeFile: vi.fn().mockResolvedValue(undefined),
}));
vi.mock("@osdk/foundry-sdk-generator", () => ({
  generatePackage: vi.fn().mockResolvedValue(undefined),
}));
vi.mock("@osdk/generator-converters.ontologyir", async importOriginal => ({
  ...await importOriginal<typeof OntologyIrConverters>(),
  OntologyIrToFullMetadataConverter: { getOsdkQueryTypes },
}));
vi.mock("consola", () => ({
  consola: {
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
    success: vi.fn(),
  },
}));

const inputFile = path.resolve("ontology.json");
const importFile = path.resolve("external-imports/ontology-full-metadata.json");
const outputDir = path.resolve("osdk-output");
const query: QueryTypeV2 = {
  apiName: "getGreeting",
  rid: "ri.function-registry.main.function.greeting",
  version: "1.2.3",
  parameters: { name: { dataType: { type: "string" }, required: true } },
  output: { type: "string" },
  typeReferences: {},
};
const localQuery: QueryTypeV2 = {
  ...query,
  apiName: "localGreeting",
  rid: "ri.function-registry.main.function.local-greeting",
  version: "0.0.0",
};
const ontology = {
  objectTypes: {},
  actionTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  linkTypes: {},
  knownIdentifiers: {},
};
const imported: OntologyFullMetadata = {
  ontology: {
    apiName: "source",
    rid: "ri.ontology.main.ontology.source",
    displayName: "Source",
    description: "",
  },
  objectTypes: {},
  actionTypes: {},
  actionTypesFullMetadata: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  valueTypes: {},
  queryTypes: { getGreeting: query, "getGreeting:1.2.3": query },
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(fs.readFile).mockImplementation(file =>
    Promise.resolve(
      JSON.stringify(String(file) === importFile ? imported : ontology),
    )
  );
});

describe("imported queries in SDK generation", () => {
  it.each<{
    name: string;
    discovered: OntologyFullMetadata["queryTypes"] | undefined;
  }>([
    { name: "without function discovery", discovered: undefined },
    { name: "when no local functions are found", discovered: {} },
    {
      name: "alongside local functions",
      discovered: { localGreeting: localQuery },
    },
    {
      name: "with local definitions taking precedence for the same key",
      discovered: { getGreeting: { ...localQuery, apiName: "getGreeting" } },
    },
  ])("preserves imported queries $name", async ({ discovered }) => {
    const args = [
      "--input",
      inputFile,
      "--package-name",
      "ontology",
      "--version",
      "0.0.0",
      "--output-dir",
      outputDir,
      "--import-json",
      importFile,
    ];
    if (discovered !== undefined) {
      args.push(
        "--functions-dir",
        path.resolve("functions/src/functions"),
      );
      getOsdkQueryTypes.mockResolvedValue(discovered);
    }

    await main(args);

    const expected = { ...imported.queryTypes, ...discovered };
    expect(generatePackage).toHaveBeenCalledExactlyOnceWith(
      expect.objectContaining({
        requestedMetadata: expect.objectContaining({ queryTypes: expected }),
      }),
      expect.objectContaining({ packageName: "ontology", outputDir }),
    );
    expect(fs.writeFile).toHaveBeenCalledWith(
      path.join(outputDir, "ontology", "ontology-metadata.json"),
      expect.any(String),
      "utf-8",
    );
    const metadataWrite = vi.mocked(fs.writeFile).mock.calls.find(([file]) =>
      file === path.join(outputDir, "ontology", "ontology-metadata.json")
    )!;
    expect(JSON.parse(String(metadataWrite[1])).queryTypes).toEqual(expected);
    expect(getOsdkQueryTypes).toHaveBeenCalledTimes(
      discovered === undefined ? 0 : 1,
    );
    expect(consola.error).not.toHaveBeenCalled();
  });
});
