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
import type { OntologyIr } from "@osdk/client.unstable";
import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import {
  buildSemanticManifest,
  type ImportedEntityKind,
  type ImportedEntityMapping,
  OntologyIrToFullMetadataConverter,
} from "@osdk/generator-converters.ontologyir";
import { consola } from "consola";
import { parse as parseYaml } from "yaml";

import type { OacGenerateArgs } from "./oacGenerate.js";

const USER_AGENT = `osdk-oac/${process.env.PACKAGE_VERSION ?? "dev"}`;

export async function handleOacGenerate(args: OacGenerateArgs): Promise<void> {
  let stagingDir: string | undefined;
  try {
    const ir = await readMakerIr(args.ir);
    const imports = args.importMap ? await readImportMap(args.importMap) : [];
    validateImports(imports, ir, args.importMap);
    const metadata =
      OntologyIrToFullMetadataConverter.getFullMetadataFromEnvelope(ir);
    const outDir = protectedOutputDirectory(args.outDir);
    await fs.promises.mkdir(path.dirname(outDir), { recursive: true });
    stagingDir = await fs.promises.mkdtemp(`${outDir}.tmp-`);

    const externalObjects = toExternalMap(imports, "object");
    const externalInterfaces = toExternalMap(imports, "interface");
    const externalSpts = toExternalMap(imports, "sharedPropertyType");

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
      externalObjects,
      externalInterfaces,
      externalSpts,
      false,
      [],
      false,
      args.ontologyIdentity === "portable",
    );

    const manifest = buildSemanticManifest(metadata, {
      packageName: args.packageName,
      packageVersion: args.version,
      ontologyIdentity: args.ontologyIdentity,
      imports,
    });
    await fs.promises.writeFile(
      path.join(stagingDir, "semantic-manifest.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
    );

    await replaceOutputDirectory(stagingDir, outDir, args.clean === true);
    stagingDir = undefined;
    consola.info("OSDK generated from Maker IR");
  } catch (err) {
    if (err instanceof ExitProcessError) {
      throw err;
    }
    const message = err instanceof Error ? err.message : String(err);
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
  const cwd = process.cwd();
  const relativeCwd = path.relative(resolved, cwd);
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

async function uniqueBackupPath(outDir: string): Promise<string> {
  const placeholder = await fs.promises.mkdtemp(`${outDir}.backup-`);
  await fs.promises.rmdir(placeholder);
  return placeholder;
}

async function replaceOutputDirectory(
  stagingDir: string,
  outDir: string,
  clean: boolean,
): Promise<void> {
  if (!clean && fs.existsSync(outDir)) {
    try {
      await fs.promises.rmdir(outDir);
    } catch (error) {
      const code =
        isRecord(error) && typeof error.code === "string"
          ? error.code
          : undefined;
      if (code === "ENOTEMPTY" || code === "EEXIST") {
        throw new ExitProcessError(
          1,
          `Output directory must be empty unless --clean is used: ${outDir}`,
        );
      }
      throw error;
    }
    await fs.promises.rename(stagingDir, outDir);
    return;
  }

  const backupDir = await uniqueBackupPath(outDir);
  let movedExisting = false;
  if (fs.existsSync(outDir)) {
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
  if (version === "dev") {
    return "osdk-oac/dev";
  }
  return `${USER_AGENT} typescript-sdk/${version}`;
}

function validateImports(
  imports: ReadonlyArray<ImportedEntityMapping>,
  ir: OntologyIr,
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
  ir: OntologyIr,
  entry: ImportedEntityMapping,
): boolean {
  switch (entry.kind) {
    case "interface":
      return Object.hasOwn(ir.importedOntology.interfaceTypes, entry.apiName);
    case "object":
      return Object.hasOwn(ir.importedOntology.objectTypes, entry.apiName);
    case "sharedPropertyType":
      return Object.hasOwn(
        ir.importedOntology.sharedPropertyTypes,
        entry.apiName,
      );
    case "valueType":
      return (
        ir.importedValueTypes.valueTypes.some(
          (valueType) => valueType.metadata.apiName === entry.apiName,
        ) || importedEmbeddedValueTypes(ir).has(entry.apiName)
      );
  }
}

function importedEmbeddedValueTypes(ir: OntologyIr): Set<string> {
  const apiNames = new Set<string>();
  for (const block of Object.values(ir.importedOntology.objectTypes)) {
    for (const property of Object.values(block.objectType.propertyTypes)) {
      if (property.valueType) {
        apiNames.add(property.valueType.apiName);
      }
    }
  }
  for (const block of Object.values(ir.importedOntology.sharedPropertyTypes)) {
    if (block.sharedPropertyType.valueType) {
      apiNames.add(block.sharedPropertyType.valueType.apiName);
    }
  }
  for (const block of Object.values(ir.importedOntology.interfaceTypes)) {
    for (const property of Object.values(block.interfaceType.propertiesV2)) {
      if (property.sharedPropertyType.valueType) {
        apiNames.add(property.sharedPropertyType.valueType.apiName);
      }
    }
    for (const property of Object.values(block.interfaceType.propertiesV3)) {
      if (property.type === "interfaceDefinedPropertyType") {
        const valueType =
          property.interfaceDefinedPropertyType.constraints.valueType;
        if (valueType) {
          apiNames.add(valueType.apiName);
        }
      } else {
        const valueType =
          property.sharedPropertyBasedPropertyType.sharedPropertyType.valueType;
        if (valueType) {
          apiNames.add(valueType.apiName);
        }
      }
    }
  }
  return apiNames;
}

function toExternalMap(
  imports: ReadonlyArray<ImportedEntityMapping>,
  kind: ImportedEntityKind,
): Map<string, string> {
  const map = new Map<string, string>();
  for (const entry of imports) {
    if (entry.kind === kind) {
      map.set(entry.apiName, entry.package);
    }
  }
  return map;
}

async function readMakerIr(irPath: string): Promise<OntologyIr> {
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
      "IR must be a complete Maker document with ontology, importedOntology, valueTypes, and importedValueTypes",
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
  if (!isRecord(value)) {
    return false;
  }
  return (
    isRecord(value.actionTypes) &&
    isRecord(value.interfaceTypes) &&
    isRecord(value.linkTypes) &&
    isRecord(value.objectTypes) &&
    isRecord(value.sharedPropertyTypes)
  );
}

function isValueTypeBlock(value: unknown): boolean {
  return isRecord(value) && Array.isArray(value.valueTypes);
}

function isOntologyIr(value: unknown): value is OntologyIr {
  if (!isRecord(value)) {
    return false;
  }
  if ("blockData" in value && !("ontology" in value)) {
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
    isValueTypeBlock(value.valueTypes) &&
    isValueTypeBlock(value.importedValueTypes)
  );
}

const importedEntityKinds: ReadonlyArray<ImportedEntityKind> = [
  "interface",
  "object",
  "sharedPropertyType",
  "valueType",
];

function isImportedEntityKind(value: unknown): value is ImportedEntityKind {
  for (const kind of importedEntityKinds) {
    if (value === kind) {
      return true;
    }
  }
  return false;
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
