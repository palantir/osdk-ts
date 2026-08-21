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

import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import type { OntologyIrV2 } from "@osdk/client.unstable";
import { afterEach, describe, expect, it } from "vitest";

import { handleOacGenerate } from "./handleOacGenerate.js";

const emptyOntologyBlock: OntologyIrV2["ontology"] = {
  actionTypes: {},
  blockOutputCompassLocations: {},
  interfaceTypes: {},
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
  linkTypes: {},
  objectTypes: {},
  ruleSets: {},
  sharedPropertyTypes: {},
};

const emptyMakerIr: OntologyIrV2 = {
  ontology: emptyOntologyBlock,
  importedOntology: emptyOntologyBlock,
  transitiveImportedOntology: emptyOntologyBlock,
  valueTypes: [],
  importedValueTypes: [],
  randomnessKey: "test-randomness-key",
};

const tempDirs: string[] = [];

afterEach(async () => {
  await Promise.all(
    tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })),
  );
});

async function makeTempDir(): Promise<string> {
  const dir = await mkdtemp(join(tmpdir(), "oac-generate-"));
  tempDirs.push(dir);
  return dir;
}

describe(handleOacGenerate, () => {
  it("rejects block data instead of complete ontology input", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    await writeFile(irPath, JSON.stringify(emptyOntologyBlock));

    await expect(
      handleOacGenerate({
        ir: irPath,
        outDir: join(dir, "out"),
        version: "0.0.0-dev",
        packageName: "@example/item-sdk",
        packageType: "module",
        ontologyIdentity: "portable",
      }),
    ).rejects.toThrow("IR must be complete ontology input");
  });

  it("writes portable generated source and semantic metadata", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const outDir = join(dir, "out");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));

    await handleOacGenerate({
      ir: irPath,
      outDir,
      version: "0.0.0-dev",
      packageName: "@example/item-sdk",
      packageType: "module",
      ontologyIdentity: "portable",
    });

    const metadata = await readFile(
      join(outDir, "OntologyMetadata.ts"),
      "utf-8",
    );
    expect(metadata).not.toContain("$ontologyRid");
    expect(metadata).not.toContain("$branch");
    expect(
      JSON.parse(
        await readFile(join(outDir, "semantic-manifest.json"), "utf-8"),
      ),
    ).toMatchObject({
      formatVersion: 1,
      packageName: "@example/item-sdk",
      packageVersion: "0.0.0-dev",
    });
  });

  it("rejects an existing output directory without clean", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const outDir = join(dir, "out");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));
    await mkdir(outDir);

    await expect(
      handleOacGenerate({
        ir: irPath,
        outDir,
        version: "0.0.0-dev",
        packageName: "@example/item-sdk",
        packageType: "module",
        ontologyIdentity: "portable",
      }),
    ).rejects.toThrow("Output directory must not exist unless --clean is used");
  });

  it("replaces an existing output directory with clean", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const outDir = join(dir, "out");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));
    await mkdir(outDir);
    await writeFile(join(outDir, "stale.txt"), "stale");

    await handleOacGenerate({
      ir: irPath,
      outDir,
      version: "0.0.0-dev",
      packageName: "@example/item-sdk",
      packageType: "module",
      ontologyIdentity: "portable",
      clean: true,
    });

    await expect(
      readFile(join(outDir, "stale.txt"), "utf-8"),
    ).rejects.toThrow();
    expect(
      await readFile(join(outDir, "semantic-manifest.json"), "utf-8"),
    ).toContain("@example/item-sdk");
  });

  it("rejects the current working directory", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));

    await expect(
      handleOacGenerate({
        ir: irPath,
        outDir: process.cwd(),
        version: "0.0.0-dev",
        packageName: "@example/item-sdk",
        packageType: "module",
        ontologyIdentity: "portable",
        clean: true,
      }),
    ).rejects.toThrow("Refusing to generate into protected directory");
  });

  it("rejects an import that does not match imported metadata", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const importMapPath = join(dir, "imports.yaml");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));
    await writeFile(
      importMapPath,
      [
        "imports:",
        "  - kind: interface",
        "    apiName: imported.Missing",
        '    package: "@example/imported-sdk"',
      ].join("\n"),
    );

    await expect(
      handleOacGenerate({
        ir: irPath,
        outDir: join(dir, "out"),
        version: "0.0.0-dev",
        packageName: "@example/item-sdk",
        packageType: "module",
        ontologyIdentity: "portable",
        importMap: importMapPath,
      }),
    ).rejects.toThrow("Import 'interface:imported.Missing'");
  });

  it("rejects duplicate import keys", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const importMapPath = join(dir, "imports.yaml");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));
    await writeFile(
      importMapPath,
      [
        "imports:",
        "  - kind: interface",
        "    apiName: imported.Parent",
        '    package: "@example/one"',
        "  - kind: interface",
        "    apiName: imported.Parent",
        '    package: "@example/two"',
      ].join("\n"),
    );

    await expect(
      handleOacGenerate({
        ir: irPath,
        outDir: join(dir, "out"),
        version: "0.0.0-dev",
        packageName: "@example/item-sdk",
        packageType: "module",
        ontologyIdentity: "portable",
        importMap: importMapPath,
      }),
    ).rejects.toThrow(
      "Import map must be { imports: [{ kind, apiName, package }] }",
    );
  });
});
