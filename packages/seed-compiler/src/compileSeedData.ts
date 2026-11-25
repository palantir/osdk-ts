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

import * as fs from "node:fs";
import * as path from "node:path";

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import {
  AdminSeedBuilder,
  type FoundrySeedOutput,
  OntologySeedBuilder,
  type OntologySeedOutput,
} from "@osdk/seed-helpers";
import { consola } from "consola";
import { createJiti } from "jiti";

/**
 * Merges ontology and Foundry seed files into a single JSON output.
 *
 * @param seedFiles - Absolute paths to seed `.mts` / `.ts` files.
 * @param outputPath - Where to write the merged seed JSON.
 * @param metadata - Ontology metadata, typically parsed from the
 *                   `ontology-metadata.json` written by the SDK generator.
 * @param outputFormat - JSON file format. Defaults to `"ontology"` (objects and
 *                       links). Use `"foundry"` to all Foundry seed data.
 * @throws if any seed file fails to compile or has an invalid default export,
 *         or if a builder rejects an object, link, or admin user.
 */
export async function compileSeedData(
  seedFiles: string[],
  outputPath: string,
  metadata: OntologyFullMetadata,
  outputFormat: "ontology" | "foundry" = "ontology",
): Promise<void> {
  consola.info(`Compiling seed data from ${seedFiles.length} file(s)...`);

  const merged = await mergeSeedData(seedFiles, metadata);

  const output = outputFormat === "foundry" ? merged : merged.ontology;

  const totalObjects = Object.values(merged.ontology.objects).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );

  const outputDir = path.dirname(outputPath);
  await fs.promises.mkdir(outputDir, { recursive: true });
  await fs.promises.writeFile(outputPath, JSON.stringify(output, null, 2));

  consola.success(
    `Seed data compiled successfully (${totalObjects} objects, ${merged.ontology.links.length} links, ${"admin" in output ? output.admin.users.length : 0} users)`,
  );
}

/**
 * Merges ontology and Foundry seed files
 *
 * @param seedFiles - Absolute paths to seed `.mts` / `.ts` files.
 * @param metadata - Ontology metadata, typically parsed from the
 *                   `ontology-metadata.json` written by the SDK generator.
 * @returns The merged Foundry seed output
 * @throws if any seed file fails to compile or has an invalid default export,
 *         or if a builder rejects an object, link, or admin user.
 */
export async function mergeSeedData(
  seedFiles: string[],
  metadata: OntologyFullMetadata,
): Promise<FoundrySeedOutput> {
  const builder = new OntologySeedBuilder(metadata);
  const admin = new AdminSeedBuilder();

  for (const seedFile of seedFiles) {
    const output = await loadSeedFile(seedFile);
    try {
      builder.addAll(output.ontology);
      admin.addAll(output.admin);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : String(e);
      throw new Error(`Seed file '${path.basename(seedFile)}': ${message}`);
    }
  }

  const merged = { ontology: builder.build(), admin: admin.build() };

  return merged;
}

type LoadedSeedOutput = Pick<OntologySeedOutput, "objects"> &
  Partial<Pick<OntologySeedOutput, "links">>;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value != null && !Array.isArray(value);

const isSeedOutput = (value: unknown): value is LoadedSeedOutput =>
  isRecord(value) && isRecord(value.objects);

function getSeedSections(value: unknown) {
  if (isSeedOutput(value)) {
    return { ontology: value, admin: { users: [], currentUserId: undefined } };
  }
  if (isRecord(value) && ("ontology" in value || "admin" in value)) {
    return value;
  }
}

/** Loads the default-exported seed helper result or its bare output. */
async function loadSeedFile(seedFile: string): Promise<FoundrySeedOutput> {
  consola.info(`Loading seed file: ${seedFile}`);
  const name = path.basename(seedFile);
  let seedModule: Record<string, unknown>;

  try {
    const jiti = createJiti(seedFile, {
      moduleCache: false,
      debug: false,
    });
    seedModule = (await jiti.import(seedFile)) as Record<string, unknown>;
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    throw new Error(`Seed file '${name}' failed to compile:\n  ${message}`);
  }

  if (!isRecord(seedModule) || !Object.hasOwn(seedModule, "default")) {
    throw new Error(`Seed file '${name}' must have a default export.`);
  }

  const defaultExport = seedModule.default;
  const seed = isRecord(defaultExport)
    ? (getSeedSections(defaultExport.output) ?? getSeedSections(defaultExport))
    : undefined;
  if (!seed) {
    throw new Error(
      `Seed file '${name}' default export is not a createSeed() result or a supported seed output.\n` +
        `Export the seed helper's { output, context } result or its .output.`,
    );
  }

  const { ontology, admin } = seed;
  if (!isSeedOutput(ontology)) {
    throw new TypeError(
      `Seed file '${name}' must have an 'ontology' section with an 'objects' property`,
    );
  }
  for (const [apiName, objects] of Object.entries(ontology.objects)) {
    if (!Array.isArray(objects)) {
      throw new TypeError(
        `Seed file '${name}' has a non-array entry for object type ` +
          `'${apiName}': expected an array of objects`,
      );
    }
  }

  if (ontology.links !== undefined && !Array.isArray(ontology.links)) {
    throw new TypeError(
      `Seed file '${name}' has a non-array 'links': expected an array of link entries`,
    );
  }

  if (!isRecord(admin) || !Array.isArray(admin.users)) {
    throw new TypeError(
      `Seed file '${name}' must have an 'admin' section with a 'users' array`,
    );
  }
  if (
    admin.currentUserId !== undefined &&
    typeof admin.currentUserId !== "string"
  ) {
    throw new TypeError(`Seed file '${name}' has a non-string 'currentUserId'`);
  }
  return {
    ontology: { objects: ontology.objects, links: ontology.links ?? [] },
    admin: { users: admin.users, currentUserId: admin.currentUserId },
  };
}
