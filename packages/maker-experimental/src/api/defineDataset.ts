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

import type { PropertyTypeType } from "@osdk/maker";
import invariant from "tiny-invariant";

import {
  getDatasetDecimalParameters,
  isRecord,
  validateDatasetFieldNames,
} from "./datasetSchemaValidation.js";

const DATASET_SCALAR_TYPES = [
  "boolean",
  "byte",
  "date",
  "decimal",
  "double",
  "float",
  "integer",
  "long",
  "short",
  "string",
  "timestamp",
] as const;

type DatasetScalarType =
  | (typeof DATASET_SCALAR_TYPES)[number]
  | Extract<PropertyTypeType, { type: "string" | "decimal" }>;

export interface DatasetColumnDefinition {
  type:
    | DatasetScalarType
    | {
        type: "struct";
        structDefinition: Record<string, DatasetScalarType>;
      };
  array?: boolean;
}

export type DatasetDefinition = {
  name: string;
  /** Defaults to "batch". */
  inputType?: "batch";
} & (
  | {
      /** Defaults to "tabular". */
      schemaType?: "tabular";
      columns: Record<string, DatasetColumnDefinition>;
    }
  | {
      /** Schemaless generation is not yet supported. */
      schemaType: "none";
      columns?: never;
    }
);

let datasets = new Map<string, DatasetDefinition>();

/** Defines an empty dataset. */
export function defineDataset(
  definition: DatasetDefinition,
): DatasetDefinition {
  const dataset = normalizeDatasetDefinition(definition);
  invariant(
    !datasets.has(dataset.name),
    `Dataset "${dataset.name}" is already defined`,
  );
  datasets.set(dataset.name, dataset);
  return dataset;
}

export function normalizeDatasetDefinition(
  definition: DatasetDefinition,
): DatasetDefinition {
  invariant(isRecord(definition), "Dataset definition must be an object");
  invariant(
    typeof definition.name === "string" && definition.name.trim().length > 0,
    "Dataset name must be a non-empty string",
  );
  const path = `Dataset "${definition.name}"`;
  invariant(
    definition.inputType === undefined || definition.inputType === "batch",
    `${path}.inputType must be "batch"`,
  );
  invariant(
    definition.schemaType === undefined ||
      definition.schemaType === "tabular" ||
      definition.schemaType === "none",
    `${path}.schemaType must be "tabular" or "none"`,
  );
  if (definition.schemaType === "none") {
    invariant(
      definition.columns === undefined,
      `${path} cannot define columns when schemaType is "none"`,
    );
    return {
      name: definition.name,
      inputType: "batch",
      schemaType: "none",
    };
  }
  invariant(isRecord(definition.columns), `${path}.columns must be a record`);
  validateDatasetFieldNames(Object.keys(definition.columns), path);
  for (const [columnName, column] of Object.entries(definition.columns)) {
    const columnPath = `${path}.${columnName}`;
    invariant(isRecord(column), `${columnPath} must be a column definition`);
    invariant(
      column.array === undefined || typeof column.array === "boolean",
      `${columnPath}.array must be a boolean`,
    );
    validateColumnType(column.type, columnPath);
  }
  return {
    name: definition.name,
    columns: definition.columns,
    inputType: "batch",
    schemaType: "tabular",
  };
}

function validateColumnType(type: unknown, path: string): void {
  if (typeof type === "string") {
    invariant(
      DATASET_SCALAR_TYPES.some((scalarType) => scalarType === type),
      `${path} has unsupported type "${type}"`,
    );
    return;
  }
  invariant(
    isRecord(type) && typeof type.type === "string",
    `${path} must specify a supported type`,
  );
  if (type.type === "struct") {
    invariant(
      isRecord(type.structDefinition),
      `${path}.structDefinition must be a record`,
    );
    validateDatasetFieldNames(Object.keys(type.structDefinition), path);
    for (const [fieldName, fieldType] of Object.entries(
      type.structDefinition,
    )) {
      validateColumnType(fieldType, `${path}.${fieldName}`);
    }
    return;
  }
  if (type.type === "decimal") {
    getDatasetDecimalParameters(type.precision, type.scale, path);
    return;
  }
  invariant(
    type.type === "string",
    `${path} has unsupported type definition "${type.type}"`,
  );
}

export function initializeDatasetState(): void {
  datasets = new Map();
}

export function getDatasetDefinitions(): DatasetDefinition[] {
  return [...datasets.values()];
}
