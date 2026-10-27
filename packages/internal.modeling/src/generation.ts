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

import { z } from "zod/v4";

import { findModelingConstraintIssues } from "./constraints.js";
import { DictionaryJSONSchemaGenerator } from "./DictionaryJSONSchemaGenerator.js";
import { isInt64Schema } from "./int64.js";
import {
  type JsonSchema,
  type ModelDocuments,
  modelUri,
  validateDocuments,
} from "./jsonSchema.js";
import { generatePydantic } from "./pydantic.js";
import { generateTypeScript } from "./typeScript.js";

export { findModelingConstraintIssues } from "./constraints.js";
export type { ModelingConstraintIssue } from "./constraints.js";
export { generatePydantic } from "./pydantic.js";
export { generateTypeScript } from "./typeScript.js";
export type { JsonSchema, ModelDocuments } from "./jsonSchema.js";

export interface GeneratedModels {
  readonly documents: ModelDocuments;
  readonly typescript: string;
  readonly pydantic: string;
}

/** Generates both language bindings from the same registered JSON Schema documents. */
export function generateModels(
  models: Readonly<Record<string, z.core.$ZodType>>,
): GeneratedModels {
  const documents = generateModelDocuments(models);
  return {
    documents,
    typescript: generateTypeScript(documents),
    pydantic: generatePydantic(documents),
  };
}

/** Explicit model registration keeps names stable and recursive references owned by their producer. */
export function generateModelDocuments(
  models: Readonly<Record<string, z.core.$ZodType>>,
): ModelDocuments {
  const registry = z.registry<{ id: string }>();
  const registered = new Set<z.core.$ZodType>();
  const entries = Object.entries(models).sort(([left], [right]) =>
    left < right ? -1 : left > right ? 1 : 0,
  );

  const generator = new DictionaryJSONSchemaGenerator({
    target: "draft-2020-12",
    io: "output",
    override: ({ zodSchema, jsonSchema }) => {
      if (isInt64Schema(zodSchema)) jsonSchema.format = "int64";
      const def = zodSchema._zod.def;
      if (def.type === "tuple") {
        // Zod's exporter omits the fixed tuple bounds.
        jsonSchema.prefixItems ??= [];
        jsonSchema.minItems = def.items.length;
        jsonSchema.maxItems = def.items.length;
        jsonSchema.items = false;
      }
    },
  });

  for (const [name, schema] of entries) {
    if (registered.has(schema)) {
      throw new Error(`Multiple model names for one schema: ${name}`);
    }

    const issues = findModelingConstraintIssues(schema);
    if (issues.length > 0) {
      throw new Error(
        `Issues found with model ${name}: ${issues.map(({ code, path, message }) => `${code} at ${path.join(".") || "<root>"}: ${message}`).join("; ")}`,
      );
    }

    registry.add(generator.representation(schema), { id: name });
    registered.add(schema);
  }

  for (const [, schema] of entries) {
    generator.process(schema);
  }

  const shared: Record<string, JsonSchema> = {};
  const documents: ModelDocuments = Object.fromEntries(
    entries.map(([name, schema]) => [
      name,
      generator.emit(generator.representation(schema), {
        external: {
          registry,
          uri: (id) => `${modelUri}${id}.json`,
          defs: shared,
        },
      }),
    ]),
  );

  if (Object.keys(shared).length > 0) {
    throw new Error("Recursive models require named registration: __shared");
  }

  // Final check for generated documents
  // This is more of a sanity check, since we've already validated the Zod data models
  validateDocuments(documents);

  return documents;
}

/** Collects explicitly supplied schema module */
export function collectModels(
  modules: readonly Readonly<Record<string, unknown>>[],
): Readonly<Record<string, z.core.$ZodType>> {
  const models: Record<string, z.core.$ZodType> = Object.create(null) as Record<
    string,
    z.core.$ZodType
  >;

  for (const module of modules) {
    for (const [name, schema] of Object.entries(module)) {
      if (!(schema instanceof z.ZodType)) continue;

      if (!/^[a-z][A-Za-z0-9]*Schema$/u.test(name)) {
        throw new Error(
          `Invalid schema export "${name}": expected an alphanumeric name starting with a lowercase letter and ending in "Schema" (e.g. "employeeSchema")`,
        );
      }
      const typeName = name[0].toUpperCase() + name.slice(1, -"Schema".length);
      if (Object.hasOwn(models, typeName)) {
        throw new Error(`Duplicate model name: ${typeName}`);
      }

      models[typeName] = schema;
    }
  }
  return models;
}
