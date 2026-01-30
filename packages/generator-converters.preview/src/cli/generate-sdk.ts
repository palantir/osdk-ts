#!/usr/bin/env node
/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { PreviewOntologyIrConverter } from "../PreviewOntologyIrConverter.js";

const args = process.argv.slice(2);

if (args.length < 4) {
  // eslint-disable-next-line no-console
  console.error(
    "Usage: generate-sdk <input-ontology-ir.json> <package-name> <package-version> <output-dir>",
  );
  process.exit(1);
}

const inputFile = path.resolve(args[0]);
const packageName = args[1];
const packageVersion = args[2];
const outputDir = path.resolve(args[3]);

async function generate() {
  // Step 1: Convert IR to full metadata (with ActionTypeFullMetadata)
  // eslint-disable-next-line no-console
  console.log(`Converting ${inputFile}...`);
  const fileContent = JSON.parse(await fs.readFile(inputFile, "utf-8"));
  // Handle both wrapped (ontology.objectTypes) and unwrapped (objectTypes) formats
  const irJson = fileContent.ontology ?? fileContent;
  const previewMetadata = PreviewOntologyIrConverter
    .getPreviewFullMetadataFromIr(irJson);

  // Convert ActionTypeFullMetadata to ActionTypeV2 for generator compatibility
  // The generator expects actionTypes: Record<string, ActionTypeV2>
  // but preview returns actionTypes: Record<string, ActionTypeFullMetadata>
  const metadata = {
    ...previewMetadata,
    actionTypes: Object.fromEntries(
      Object.entries(previewMetadata.actionTypes).map(([key, fullMeta]) => [
        key,
        fullMeta.actionType,
      ]),
    ),
  };

  // Step 2: Generate SDK
  const fullOutputDir = path.join(outputDir, packageName);
  await fs.mkdir(fullOutputDir, { recursive: true });

  const hostFs = {
    async writeFile(filePath: string, contents: string) {
      const fullPath = path.isAbsolute(filePath)
        ? filePath
        : path.join(fullOutputDir, filePath);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, contents, "utf-8");
    },
    async mkdir(dirPath: string) {
      const fullPath = path.isAbsolute(dirPath)
        ? dirPath
        : path.join(fullOutputDir, dirPath);
      await fs.mkdir(fullPath, { recursive: true });
    },
    async readdir(dirPath: string) {
      return fs.readdir(dirPath);
    },
  };

  // eslint-disable-next-line no-console
  console.log(`Generating SDK to ${fullOutputDir}...`);

  await generateClientSdkVersionTwoPointZero(
    metadata as any,
    `osdk-generator/${packageVersion} (from-ir)`,
    hostFs,
    fullOutputDir,
    "module",
    new Map(),
    new Map(),
    new Map(),
    false,
    [],
  );

  // Write metadata - include full metadata with ActionTypeFullMetadata for consumers
  await fs.writeFile(
    path.join(fullOutputDir, "ontology-metadata.json"),
    JSON.stringify(previewMetadata, null, 2),
    "utf-8",
  );

  // Also write result.json next to this script (in the package directory)
  const scriptDir = path.dirname(new URL(import.meta.url).pathname);
  const packageDir = path.resolve(scriptDir, "../../..");
  await fs.writeFile(
    path.join(packageDir, "result.json"),
    JSON.stringify(previewMetadata, null, 2),
    "utf-8",
  );
  // eslint-disable-next-line no-console
  console.log(`Wrote ${path.join(packageDir, "result.json")}`);

  // eslint-disable-next-line no-console
  console.log("Done!");
}

generate().catch((err: unknown) => {
  // eslint-disable-next-line no-console
  console.error("Error:", err);
  process.exit(1);
});
