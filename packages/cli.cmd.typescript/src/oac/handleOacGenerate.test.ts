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

import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { handleOacGenerate } from "./handleOacGenerate.js";

const emptyOntologyBlock = {
  actionTypes: {},
  interfaceTypes: {},
  linkTypes: {},
  objectTypes: {},
  sharedPropertyTypes: {},
};

const emptyMakerIr = {
  ontology: emptyOntologyBlock,
  importedOntology: emptyOntologyBlock,
  valueTypes: { valueTypes: [] },
  importedValueTypes: { valueTypes: [] },
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
  it("rejects a blockData document", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    await writeFile(
      irPath,
      JSON.stringify({ blockData: { interfaceTypes: {} } }),
    );

    await expect(
      handleOacGenerate({
        ir: irPath,
        outDir: join(dir, "out"),
        version: "0.0.0-dev",
        packageName: "@example/item-sdk",
        packageType: "module",
        ontologyIdentity: "portable",
      }),
    ).rejects.toThrow(
      "IR must be a complete Maker document with ontology, importedOntology, valueTypes, and importedValueTypes",
    );
  });

  it("rejects a single ontology block", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    await writeFile(
      irPath,
      JSON.stringify({
        actionTypes: {},
        interfaceTypes: {},
        linkTypes: {},
        objectTypes: {},
        sharedPropertyTypes: {},
      }),
    );

    await expect(
      handleOacGenerate({
        ir: irPath,
        outDir: join(dir, "out"),
        version: "0.0.0-dev",
        packageName: "@example/item-sdk",
        packageType: "module",
        ontologyIdentity: "portable",
      }),
    ).rejects.toThrow(
      "IR must be a complete Maker document with ontology, importedOntology, valueTypes, and importedValueTypes",
    );
  });

  it("reads typed imports from yaml", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const importMapPath = join(dir, "osdk-projection.yaml");
    const outDir = join(dir, "out");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));
    await writeFile(
      importMapPath,
      [
        "imports:",
        "  - kind: interface",
        "    apiName: com.example.TrackedEntity",
        '    package: "@example/core-sdk"',
        "  - kind: valueType",
        "    apiName: headingValue",
        '    package: "@example/core-sdk"',
        "",
      ].join("\n"),
    );

    await handleOacGenerate({
      ir: irPath,
      outDir,
      version: "0.0.0-dev",
      packageName: "@example/item-sdk",
      packageType: "module",
      ontologyIdentity: "portable",
      importMap: importMapPath,
    });

    const manifest = JSON.parse(
      await readFile(join(outDir, "semantic-manifest.json"), "utf-8"),
    );
    expect(manifest.imports).toEqual([
      {
        kind: "interface",
        apiName: "com.example.TrackedEntity",
        package: "@example/core-sdk",
      },
      {
        kind: "valueType",
        apiName: "headingValue",
        package: "@example/core-sdk",
      },
    ]);
  });

  it("writes the same portable tree twice and omits ontology ids", async () => {
    const dir = await makeTempDir();
    const firstOut = join(dir, "first");
    const secondOut = join(dir, "second");

    const irPath = join(dir, "ir.json");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));

    await handleOacGenerate({
      ir: irPath,
      outDir: firstOut,
      version: "0.0.0-dev",
      packageName: "@example/item-sdk",
      packageType: "module",
      ontologyIdentity: "portable",
      clean: true,
    });
    await handleOacGenerate({
      ir: irPath,
      outDir: secondOut,
      version: "0.0.0-dev",
      packageName: "@example/item-sdk",
      packageType: "module",
      ontologyIdentity: "portable",
      clean: true,
    });

    const firstMetadata = await readFile(
      join(firstOut, "OntologyMetadata.ts"),
      "utf-8",
    );
    const secondMetadata = await readFile(
      join(secondOut, "OntologyMetadata.ts"),
      "utf-8",
    );
    expect(firstMetadata).toBe(secondMetadata);
    expect(firstMetadata).not.toContain("$ontologyRid");
    expect(firstMetadata).not.toContain("$branch");

    const firstManifest = await readFile(
      join(firstOut, "semantic-manifest.json"),
      "utf-8",
    );
    const secondManifest = await readFile(
      join(secondOut, "semantic-manifest.json"),
      "utf-8",
    );
    expect(firstManifest).toBe(secondManifest);
    expect(JSON.parse(firstManifest)).toMatchObject({
      version: 1,
      packageName: "@example/item-sdk",
      packageVersion: "0.0.0-dev",
      ontologyIdentity: "portable",
    });
  });

  it("rejects malformed import map yaml", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const importMapPath = join(dir, "osdk-projection.yaml");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));
    await writeFile(importMapPath, "imports: [");

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
      "Import map must be valid YAML: { imports: [{ kind, apiName, package }] }",
    );
  });

  it("rejects duplicate import keys", async () => {
    const dir = await makeTempDir();
    const irPath = join(dir, "ir.json");
    const importMapPath = join(dir, "osdk-projection.yaml");
    await writeFile(irPath, JSON.stringify(emptyMakerIr));
    await writeFile(
      importMapPath,
      [
        "imports:",
        "  - kind: interface",
        "    apiName: imported.Parent",
        '    package: "@example/core-sdk"',
        "  - kind: interface",
        "    apiName: imported.Parent",
        '    package: "@example/other-sdk"',
        "",
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
