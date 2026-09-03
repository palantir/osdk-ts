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
import { SeedBuilder, type SeedOutput } from "@osdk/seed-helpers";
import { consola } from "consola";
import { createJiti } from "jiti";

/**
 * Merges one or more seed data files into a single JSON output.
 *
 * Pipeline: load each file -> feed into one {@link SeedBuilder} -> write JSON.
 *
 * @param seedFiles - Absolute paths to seed `.mts` / `.ts` files.
 * @param outputPath - Where to write the merged seed JSON.
 * @param metadata - Ontology metadata, typically parsed from the
 *                   `ontology-metadata.json` written by the SDK generator.
 * @throws if any seed file fails to compile or has an invalid default export,
 *         or if the builder rejects any object or link it is given.
 */
export async function compileSeedData(
  seedFiles: string[],
  outputPath: string,
  metadata: OntologyFullMetadata,
): Promise<void> {
  consola.info(`Compiling seed data from ${seedFiles.length} file(s)...`);
  const builder = new SeedBuilder(metadata);
  for (const seedFile of seedFiles) {
    const output = await loadSeedFile(seedFile);
    try {
      builder.addAll(output);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : String(e);
      throw new Error(`Seed file '${path.basename(seedFile)}': ${message}`);
    }
  }
  const merged = builder.build();
  const totalObjects = Object.values(merged.objects).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );

  const outputDir = path.dirname(outputPath);
  await fs.promises.mkdir(outputDir, { recursive: true });
  await fs.promises.writeFile(outputPath, JSON.stringify(merged, null, 2));

  consola.success(
    `Seed data compiled successfully (${totalObjects} objects, ${merged.links.length} links)`,
  );
}

type LoadedSeedOutput = Pick<SeedOutput, "objects"> &
  Partial<Pick<SeedOutput, "links">>;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value != null && !Array.isArray(value);

const isSeedOutput = (value: unknown): value is LoadedSeedOutput =>
  isRecord(value) && isRecord(value.objects);

const isSeedResult = (value: unknown): value is { output: LoadedSeedOutput } =>
  isRecord(value) && isSeedOutput(value.output);

/**
 * Loads a single seed file via jiti and extracts the {@link SeedOutput} from
 * its default export.
 *
 * Both shapes a seed author naturally reaches for are accepted: the
 * `createSeed(...)` result (`{ output, context }`) and its `.output` (a bare
 * `SeedOutput`).
 *
 * @throws with a contextual message wrapping the original error and filename.
 */
async function loadSeedFile(seedFile: string): Promise<SeedOutput> {
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
    throw new Error(
      `Seed file '${name}' must have a default export. Export the result of ` +
        `createSeed(), which wraps createSeedWithMetadata() from ` +
        `@osdk/seed-helpers.`,
    );
  }

  const defaultExport = seedModule.default;
  const output = isSeedResult(defaultExport)
    ? defaultExport.output
    : isSeedOutput(defaultExport)
      ? defaultExport
      : undefined;

  if (!output) {
    throw new Error(
      `Seed file '${name}' default export is not a createSeed() result.\n` +
        `Export either createSeed(...) — an object with an 'output' property\n ` +
        `or createSeed(...).output — an object with an 'objects' property`,
    );
  }

  for (const [apiName, objects] of Object.entries(output.objects)) {
    if (!Array.isArray(objects)) {
      throw new TypeError(
        `Seed file '${name}' has a non-array entry for object type ` +
          `'${apiName}': expected an array of objects`,
      );
    }
  }

  if (output.links !== undefined && !Array.isArray(output.links)) {
    throw new TypeError(
      `Seed file '${name}' has a non-array 'links': expected an array of link entries`,
    );
  }

  return { objects: output.objects, links: output.links ?? [] };
}
