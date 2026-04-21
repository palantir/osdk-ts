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

import type { OntologyBlockDataV2 } from "@osdk/client.unstable";
import type { SeedOutput } from "@osdk/seed-helpers";
import { consola } from "consola";
import { createJiti } from "jiti";
import * as fs from "node:fs";
import * as path from "node:path";

/** Wire type of a single property, extracted from the ontology schema. */
interface PropertySchema {
  apiName: string;
  wireType: string;
}

/**
 * Minimal schema for one object type — only what the compiler needs.
 *
 * - `properties`: property API name → wire type (for string format validation).
 * - `primaryKeyApiName`: PK field name (for cross-file duplicate detection in merge).
 */
interface ObjectTypeSchema {
  apiName: string;
  properties: Map<string, PropertySchema>;
  primaryKeyApiName: string;
}

/** Maps object type API name → its schema. */
type SchemaMap = Map<string, ObjectTypeSchema>;

/** A single string format validation failure. */
interface FormatError {
  objectType: string;
  objectIndex: number;
  field: string;
  message: string;
}

/**
 * Regex patterns for string-encoded wire types that TypeScript cannot validate.
 *
 * These patterns are aligned with the Rust backend's actual parsing behavior:
 * - timestamp: RFC 3339 parse on the Rust side — requires timezone, rejects trailing garbage
 * - date: stored as raw string, but only YYYY-MM-DD works in SQLite queries
 * - datetime: stored as raw string, same YYYY-MM-DD requirement for query correctness
 * - long: strict decimal integer parse on the Rust side — no scientific notation
 * - decimal: Rust stores any string (no validation), but we enforce numeric format
 *   to prevent obviously invalid values from silently passing through
 */
const WIRE_TYPE_FORMAT: Record<string, { pattern: RegExp; example: string }> = {
  timestamp: {
    pattern: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/,
    example: "2025-01-01T00:00:00Z",
  },
  date: {
    pattern: /^\d{4}-\d{2}-\d{2}$/,
    example: "2025-01-01",
  },
  datetime: {
    pattern:
      /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/,
    example: "2025-01-01T12:00:00Z",
  },
  long: {
    // Strict decimal integer — matches Rust's str::parse::<i64>().
    // No scientific notation, no decimal point, no whitespace.
    pattern: /^-?\d+$/,
    example: "9007199254740993",
  },
  decimal: {
    // Numeric string with optional decimal point. Anchored.
    // Rust stores any string (no validation), but we reject obviously invalid values.
    pattern: /^-?\d+(\.\d+)?$/,
    example: "123.45",
  },
};

/**
 * Compiles one or more seed data files into a single merged JSON output.
 *
 * Pipeline: load each file → merge → validate string formats → write JSON.
 *
 * @param seedFiles - Absolute paths to seed `.mts` / `.ts` files.
 * @param outputPath - Where to write the merged seed JSON.
 * @param ontology - The compiled ontology block data (for schema-aware validation).
 * @throws if any seed file fails to compile, has an invalid export, contains
 *         duplicate PKs across files, or has invalid string format values.
 */
export async function compileSeedData(
  seedFiles: string[],
  outputPath: string,
  ontology: OntologyBlockDataV2,
): Promise<void> {
  consola.info(`Compiling seed data from ${seedFiles.length} file(s)...`);

  const outputs: SeedOutput[] = [];
  for (const seedFile of seedFiles) {
    outputs.push(await loadSeedFile(seedFile));
  }

  const schemaMap = buildSchemaMap(ontology);
  const merged = mergeSeedOutputs(outputs, schemaMap);
  validateStringFormats(merged, schemaMap);

  const totalObjects = Object.values(merged.objects)
    .reduce((sum, arr) => sum + arr.length, 0);

  const outputDir = path.dirname(outputPath);
  await fs.promises.mkdir(outputDir, { recursive: true });
  await fs.promises.writeFile(outputPath, JSON.stringify(merged, null, 2));

  consola.success(
    `Seed data compiled successfully (${totalObjects} objects, ${merged.links.length} links)`,
  );
}

/**
 * Builds a lookup map from the ontology block data.
 *
 * The ontology's `objectTypes` is keyed by RID (not API name), so we iterate
 * all entries and index by `objectType.apiName` for O(1) lookup during
 * validation and merge.
 */
export function buildSchemaMap(ontology: OntologyBlockDataV2): SchemaMap {
  const map: SchemaMap = new Map();

  for (const block of Object.values(ontology.objectTypes)) {
    const ot = block.objectType;
    const apiName = ot.apiName;
    if (!apiName) continue;

    const properties = new Map<string, PropertySchema>();
    for (const prop of Object.values(ot.propertyTypes)) {
      if (prop.apiName) {
        properties.set(prop.apiName, {
          apiName: prop.apiName,
          wireType: prop.type.type,
        });
      }
    }

    const pkRid = ot.primaryKeys[0];
    const pkProp = pkRid ? ot.propertyTypes[pkRid] : undefined;
    const primaryKeyApiName = pkProp?.apiName ?? undefined;

    if (!primaryKeyApiName) {
      throw new Error(
        `Object type '${apiName}' has no resolvable primary key API name. `
          + `The ontology definition may be broken.`,
      );
    }

    map.set(apiName, {
      apiName,
      properties,
      primaryKeyApiName,
    });
  }

  return map;
}

/**
 * Merges multiple {@link SeedOutput}s into one.
 *
 * - Objects for the same type combine additively.
 * - Duplicate primary keys across files cause an error (checked by the actual
 *   PK field from the schema, not by comparing the full serialized object).
 * - Duplicate links (same source, target, and link type) are deduplicated
 *   with a warning logged to the console.
 *
 * @param outputs - The individual seed outputs to merge.
 * @param schemaMap - Used to resolve the primary key field name per object type.
 * @returns A single merged SeedOutput ready for validation and writing.
 * @throws if any primary key appears in more than one file for the same type.
 */
export function mergeSeedOutputs(
  outputs: SeedOutput[],
  schemaMap: SchemaMap,
): SeedOutput {
  if (outputs.length === 0) {
    return { objects: {}, links: [] };
  }

  const merged: SeedOutput = { objects: {}, links: [] };
  const seenPks = new Map<string, Set<string>>();
  const seenLinks = new Set<string>();

  for (const output of outputs) {
    for (const [apiName, objects] of Object.entries(output.objects)) {
      if (!merged.objects[apiName]) merged.objects[apiName] = [];
      if (!seenPks.has(apiName)) seenPks.set(apiName, new Set());

      const pkSet = seenPks.get(apiName)!;
      const schema = schemaMap.get(apiName);

      if (!schema) {
        throw new Error(
          `Object type '${apiName}' in seed data is not defined in the ontology`,
        );
      }

      for (const obj of objects) {
        const pk = String(obj[schema.primaryKeyApiName] ?? "");

        if (pkSet.has(pk)) {
          throw new Error(
            `Duplicate primary key '${pk}' for '${apiName}' across seed files`,
          );
        }
        pkSet.add(pk);
        merged.objects[apiName]!.push(obj);
      }
    }

    for (const link of output.links) {
      const linkKey = `${link.sourceObjectType}:${link.sourceKey}`
        + `:${link.linkType}:${link.targetObjectType}:${link.targetKey}`;

      if (seenLinks.has(linkKey)) {
        consola.warn(
          `Duplicate link deduplicated: ${link.linkType}`
            + ` from ${link.sourceObjectType}:${link.sourceKey}`
            + ` to ${link.targetObjectType}:${link.targetKey}`,
        );
        continue;
      }

      seenLinks.add(linkKey);
      merged.links.push(link);
    }
  }

  return merged;
}

/**
 * Validates string-encoded property values against the ontology schema.
 *
 * All other seed data checks — object type existence, property names, JS value
 * types, link names, link targets, duplicate PKs, null PKs — are enforced at
 * compile time by the SeedBuilder's TypeScript generics or at runtime by the
 * builder itself. The one thing TypeScript cannot distinguish is whether a
 * `string` value matches its wire format (e.g., `"not-a-date"` vs `"2025-01-01T00:00:00Z"`
 * are both valid `string` to the type system).
 *
 * This function fills that gap. It checks every string property value against
 * the format regex for its wire type (timestamp, date, datetime, long, decimal).
 * Properties with wire types that accept any string (e.g., `string`, `marking`)
 * are not checked. Non-string values, nulls, and unknown types/properties are
 * silently skipped — those are already guaranteed correct by the builder.
 *
 * @throws Error listing all format failures grouped by object type.
 */
export function validateStringFormats(
  output: SeedOutput,
  schemaMap: SchemaMap,
): void {
  const errors: FormatError[] = [];

  for (const [apiName, objects] of Object.entries(output.objects)) {
    const schema = schemaMap.get(apiName);
    if (!schema) continue;

    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i]!;

      for (const [key, value] of Object.entries(obj)) {
        if (value == null) continue;
        if (typeof value !== "string") continue;

        const propSchema = schema.properties.get(key);
        if (!propSchema) continue;

        const format = WIRE_TYPE_FORMAT[propSchema.wireType];
        if (format && !format.pattern.test(value)) {
          errors.push({
            objectType: apiName,
            objectIndex: i,
            field: key,
            message: `property '${key}' has invalid ${propSchema.wireType}`
              + ` format: '${value}'. Expected format like '${format.example}'`,
          });
        }
      }
    }
  }

  if (errors.length > 0) {
    const grouped = new Map<string, string[]>();
    for (const err of errors) {
      if (!grouped.has(err.objectType)) grouped.set(err.objectType, []);
      grouped.get(err.objectType)!.push(
        `  object[${err.objectIndex}]: ${err.message}`,
      );
    }

    const message = [...grouped.entries()]
      .map(([type, msgs]) => `${type}:\n${msgs.join("\n")}`)
      .join("\n\n");

    throw new Error(
      `Seed data validation failed (${errors.length} error${
        errors.length > 1 ? "s" : ""
      } across ${grouped.size} object type${
        grouped.size > 1 ? "s" : ""
      }):\n\n${message}`,
    );
  }
}

/**
 * Loads a single seed file via jiti and extracts its default export.
 *
 * jiti.import() fully executes the module — the `createSeed()` builder
 * function runs during import and the default export is the resulting
 * SeedOutput. `moduleCache: false` ensures file watcher re-runs always
 * produce fresh output.
 *
 * @throws with a contextual message wrapping the original error and filename.
 */
async function loadSeedFile(seedFile: string): Promise<SeedOutput> {
  consola.info(`Loading seed file: ${seedFile}`);

  let seedModule: { default: SeedOutput };
  try {
    const jiti = createJiti(seedFile, {
      moduleCache: false,
      debug: false,
    });
    seedModule = await jiti.import(seedFile) as { default: SeedOutput };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    throw new Error(
      `Seed file '${path.basename(seedFile)}' failed to compile:\n  ${message}`,
    );
  }

  if (!seedModule.default || typeof seedModule.default !== "object") {
    throw new Error(
      `Seed file '${path.basename(seedFile)}' must have a default export. `
        + `Use createSeed() from @osdk/seed-helpers.`,
    );
  }

  const output = seedModule.default;

  if (!output.objects || typeof output.objects !== "object") {
    throw new Error(
      `Seed file '${path.basename(seedFile)}' default export is not a valid`
        + ` SeedOutput. Use createSeed() from @osdk/seed-helpers.`,
    );
  }

  // Normalize: links are optional in the export but required in SeedOutput.
  // Spread to avoid mutating the module's exported object.
  return { ...output, links: output.links ?? [] };
}
