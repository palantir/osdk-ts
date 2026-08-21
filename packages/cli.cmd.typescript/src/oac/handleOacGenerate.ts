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
import * as path from "node:path";

import { ExitProcessError } from "@osdk/cli.common";
import type { OntologyIrV2 } from "@osdk/client.unstable";
import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import {
  buildSemanticManifest,
  OntologyIrToFullMetadataConverter,
} from "@osdk/generator-converters.ontologyir";
import { consola } from "consola";
import { parse as parseYaml } from "yaml";

import type { OacGenerateArgs } from "./oacGenerate.js";

const USER_AGENT = `osdk-oac/${process.env.PACKAGE_VERSION ?? "dev"}`;

type ImportedEntityKind = "interface" | "object" | "sharedPropertyType";

interface ImportedEntityMapping {
  kind: ImportedEntityKind;
  apiName: string;
  package: string;
}

export async function handleOacGenerate(args: OacGenerateArgs): Promise<void> {
  let stagingDir: string | undefined;
  try {
    const ir = await readMakerIr(args.ir);
    const imports = args.importMap ? await readImportMap(args.importMap) : [];
    validateImports(imports, ir, args.importMap);
    const outDir = protectedOutputDirectory(args.outDir);
    if (fs.existsSync(outDir) && args.clean !== true) {
      throw new ExitProcessError(
        1,
        `Output directory must not exist unless --clean is used: ${outDir}`,
      );
    }
    await fs.promises.mkdir(path.dirname(outDir), { recursive: true });
    stagingDir = await fs.promises.mkdtemp(`${outDir}.tmp-`);

    const metadata =
      OntologyIrToFullMetadataConverter.getFullMetadataFromEnvelope(ir);
    await generateClientSdkVersionTwoPointZero(
      metadata,
      getUserAgent(args.version),
      {
        writeFile: async (filePath, contents) => {
          await fs.promises.writeFile(filePath, contents);
        },
        mkdir: async (dirPath, options) => {
          await fs.promises.mkdir(dirPath, options);
        },
        readdir: async (dirPath) => {
          return await fs.promises.readdir(dirPath);
        },
      },
      stagingDir,
      args.packageType,
      toExternalMap(imports, "object"),
      toExternalMap(imports, "interface"),
      toExternalMap(imports, "sharedPropertyType"),
      false,
      [],
      false,
      args.ontologyIdentity === "portable",
    );

    const manifest = buildSemanticManifest(metadata, {
      packageName: args.packageName,
      packageVersion: args.version,
    });
    await fs.promises.writeFile(
      path.join(stagingDir, "semantic-manifest.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
    );
    await replaceOutputDirectory(stagingDir, outDir);
    stagingDir = undefined;
    consola.info("OSDK generated from Maker IR");
  } catch (error) {
    if (error instanceof ExitProcessError) {
      throw error;
    }
    const message = error instanceof Error ? error.message : String(error);
    throw new ExitProcessError(1, message);
  } finally {
    if (stagingDir !== undefined) {
      await fs.promises.rm(stagingDir, { recursive: true, force: true });
    }
  }
}

function protectedOutputDirectory(outDir: string): string {
  const resolved = path.resolve(outDir);
  const root = path.parse(resolved).root;
  const relativeCwd = path.relative(resolved, process.cwd());
  if (
    resolved === root ||
    relativeCwd === "" ||
    (!relativeCwd.startsWith("..") && !path.isAbsolute(relativeCwd))
  ) {
    throw new ExitProcessError(
      1,
      `Refusing to generate into protected directory: ${resolved}`,
    );
  }
  return resolved;
}

async function replaceOutputDirectory(
  stagingDir: string,
  outDir: string,
): Promise<void> {
  const backupDir = `${outDir}.backup`;
  let movedExisting = false;
  if (fs.existsSync(outDir)) {
    await fs.promises.rm(backupDir, { recursive: true, force: true });
    await fs.promises.rename(outDir, backupDir);
    movedExisting = true;
  }
  try {
    await fs.promises.rename(stagingDir, outDir);
    if (movedExisting) {
      await fs.promises.rm(backupDir, { recursive: true, force: true });
    }
  } catch (error) {
    if (movedExisting && !fs.existsSync(outDir)) {
      await fs.promises.rename(backupDir, outDir);
    }
    throw error;
  }
}

function getUserAgent(version: string): string {
  return version === "dev"
    ? "osdk-oac/dev"
    : `${USER_AGENT} typescript-sdk/${version}`;
}

function validateImports(
  imports: ReadonlyArray<ImportedEntityMapping>,
  ir: OntologyIrV2,
  importMapPath: string | undefined,
): void {
  for (const entry of imports) {
    if (!hasImportedEntity(ir, entry)) {
      const source = importMapPath ?? "import map";
      throw new ExitProcessError(
        1,
        `Import '${entry.kind}:${entry.apiName}' from ${source} does not match an imported Maker entity`,
      );
    }
  }
}

function hasImportedEntity(
  ir: OntologyIrV2,
  entry: ImportedEntityMapping,
): boolean {
  switch (entry.kind) {
    case "interface":
      return Object.values(ir.importedOntology.interfaceTypes).some(
        ({ interfaceType }) => interfaceType.apiName === entry.apiName,
      );
    case "object":
      return Object.values(ir.importedOntology.objectTypes).some(
        ({ objectType }) => objectType.apiName === entry.apiName,
      );
    case "sharedPropertyType":
      return Object.values(ir.importedOntology.sharedPropertyTypes).some(
        ({ sharedPropertyType }) =>
          sharedPropertyType.apiName === entry.apiName,
      );
  }
}

function toExternalMap(
  imports: ReadonlyArray<ImportedEntityMapping>,
  kind: ImportedEntityKind,
): Map<string, string> {
  const result = new Map<string, string>();
  for (const entry of imports) {
    if (entry.kind === kind) {
      result.set(entry.apiName, entry.package);
    }
  }
  return result;
}

async function readMakerIr(irPath: string): Promise<OntologyIrV2> {
  if (!fs.existsSync(irPath)) {
    throw new ExitProcessError(1, `Maker IR file does not exist: ${irPath}`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(await fs.promises.readFile(irPath, "utf-8"));
  } catch {
    throw new ExitProcessError(1, `Maker IR is not valid JSON: ${irPath}`);
  }
  if (!isOntologyIr(parsed)) {
    throw new ExitProcessError(
      1,
      "IR must be complete ontology input with ontology, importedOntology, transitiveImportedOntology, valueTypes, and importedValueTypes",
    );
  }
  return parsed;
}

async function readImportMap(
  importMapPath: string,
): Promise<ImportedEntityMapping[]> {
  if (!fs.existsSync(importMapPath)) {
    throw new ExitProcessError(
      1,
      `Import map file does not exist: ${importMapPath}`,
    );
  }

  let parsed: unknown;
  try {
    parsed = parseYaml(await fs.promises.readFile(importMapPath, "utf-8"));
  } catch {
    throw new ExitProcessError(
      1,
      "Import map must be valid YAML: { imports: [{ kind, apiName, package }] }",
    );
  }
  if (!isImportMap(parsed)) {
    throw new ExitProcessError(
      1,
      "Import map must be { imports: [{ kind, apiName, package }] }",
    );
  }
  return parsed.imports;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function isOntologyBlock(value: unknown): boolean {
  return (
    isRecord(value) &&
    isRecord(value.actionTypes) &&
    isRecord(value.interfaceTypes) &&
    isRecord(value.linkTypes) &&
    isRecord(value.objectTypes) &&
    isRecord(value.sharedPropertyTypes)
  );
}

function isOntologyIr(value: unknown): value is OntologyIrV2 {
  if (!isRecord(value)) {
    return false;
  }
  if (
    value.randomnessKey !== undefined &&
    typeof value.randomnessKey !== "string"
  ) {
    return false;
  }
  return (
    isOntologyBlock(value.ontology) &&
    isOntologyBlock(value.importedOntology) &&
    isOntologyBlock(value.transitiveImportedOntology) &&
    Array.isArray(value.valueTypes) &&
    Array.isArray(value.importedValueTypes)
  );
}

const importedEntityKinds: ReadonlyArray<ImportedEntityKind> = [
  "interface",
  "object",
  "sharedPropertyType",
];

function isImportedEntityKind(value: unknown): value is ImportedEntityKind {
  return importedEntityKinds.some((kind) => value === kind);
}

function isNonEmptyString(value: unknown): value is string {
  return (
    typeof value === "string" && value.length > 0 && value === value.trim()
  );
}

function isImportMap(
  value: unknown,
): value is { imports: ImportedEntityMapping[] } {
  if (!isRecord(value) || !Array.isArray(value.imports)) {
    return false;
  }
  const seen = new Set<string>();
  for (const entry of value.imports) {
    if (
      !isRecord(entry) ||
      !isImportedEntityKind(entry.kind) ||
      !isNonEmptyString(entry.apiName) ||
      !isNonEmptyString(entry.package)
    ) {
      return false;
    }
    const key = `${entry.kind}:${entry.apiName}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
  }
  return true;
}
