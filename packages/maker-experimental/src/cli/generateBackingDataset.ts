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

import type { InputShape, OutputShape } from "@osdk/client.unstable/api";
import type { ObjectType } from "@osdk/maker";
import * as fs from "node:fs";
import * as path from "node:path";
import {
  typeToConcreteDataType,
} from "../conversion/toMarketplace/typeVisitors.js";
import type { ReadableId } from "../util/generateRid.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";

/**
 * Map from maker property type to Foundry schema field type
 */
export function propertyTypeToSchemaType(
  propType: string | { type: string },
): string {
  const typeStr = typeof propType === "string" ? propType : propType.type;
  switch (typeStr) {
    case "string":
      return "STRING";
    case "boolean":
      return "BOOLEAN";
    case "integer":
      return "INTEGER";
    case "long":
      return "LONG";
    case "double":
      return "DOUBLE";
    case "float":
      return "FLOAT";
    case "byte":
      return "BYTE";
    case "short":
      return "SHORT";
    case "date":
      return "DATE";
    case "timestamp":
      return "TIMESTAMP";
    default:
      throw new Error(
        `Unsupported property type "${typeStr}" for empty backing datasource. `
          + `If using a property type that doesn't support empty backing datasources please make the property an edit only property.`,
      );
  }
}

/**
 * Generate a backing datasource BlockGeneratorResult for an object type.
 */
export async function generateBackingDatasetBlockResult(
  objectType: ObjectType,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult> {
  const apiName = objectType.apiName;

  // Validate that the object type only has dataset datasources
  const nonDatasetDatasources = (objectType.datasources ?? []).filter(
    (ds) => ds.type !== "dataset",
  );
  if (nonDatasetDatasources.length > 0) {
    const types = nonDatasetDatasources.map((ds) => ds.type).join(", ");
    throw new Error(
      `Object type "${apiName}" has non-dataset datasources (${types}) and cannot use includeEmptyBackingDatasource. `
        + `Empty backing datasources are only supported for object types with dataset datasources.`,
    );
  }

  const dsName = `${apiName}-backing-ds`;

  // Collect non-edit-only properties
  const nonEditOnlyProps = (objectType.properties ?? []).filter(
    (p) => !p.editOnly,
  );

  // Build output shapes for the dataset block
  const outputs: Record<string, OutputShape> = {};

  // Readable IDs for dataset outputs (must match what the ontology block uses as inputs)
  const datasourceReadableId = ReadableIdGenerator.getForDataSet(
    apiName,
  );

  // tabularDatasource output shape
  const columnReadableIds: ReadableId[] = [];
  for (const prop of nonEditOnlyProps) {
    const colReadableId = ReadableIdGenerator.getForDataSetColumn(
      apiName,
      prop.apiName,
    );
    columnReadableIds.push(colReadableId);
  }

  const datasourceBlockInternalId = toBlockShapeId(
    datasourceReadableId,
    randomnessKey,
  );

  outputs[datasourceReadableId] = {
    type: "tabularDatasource",
    tabularDatasource: {
      about: {
        fallbackTitle: dsName,
        fallbackDescription: "",
        localizedTitle: {},
        localizedDescription: {},
      },
      schema: columnReadableIds.map((id) => toBlockShapeId(id, randomnessKey)),
      type: "DATASET",
      buildRequirements: { isBuildable: false },
    },
  } as OutputShape;

  // datasourceColumn output shapes for each non-edit-only property
  for (let i = 0; i < nonEditOnlyProps.length; i++) {
    const prop = nonEditOnlyProps[i];
    const colReadableId = columnReadableIds[i];

    outputs[colReadableId] = {
      type: "datasourceColumn",
      datasourceColumn: {
        about: {
          fallbackTitle: prop.apiName,
          fallbackDescription: "",
          localizedTitle: {},
          localizedDescription: {},
        },
        type: {
          type: "concrete",
          concrete: typeToConcreteDataType({
            type: typeof prop.type === "string" ? prop.type : prop.type.type,
            [typeof prop.type === "string" ? prop.type : prop.type.type]: {},
          } as any),
        },
        datasource: datasourceBlockInternalId,
        typeclasses: [],
      },
    } as OutputShape;
  }

  // Generate internal IDs for block-data.json columns.
  // These are distinct from the block shape IDs that appear in the manifest outputs.
  // The add-on maps these internal IDs -> block shape IDs.
  const columnInternalIds = nonEditOnlyProps.map((prop) =>
    toBlockShapeId(
      `column-internal-${apiName}-${prop.apiName}`,
      randomnessKey,
    )
  );

  const compassReadableId = `${dsName}-compass-resource` as ReadableId;
  const compassBlockShapeId = toBlockShapeId(
    compassReadableId,
    randomnessKey,
  );

  const datasourceInternalId = toBlockShapeId(
    `datasource-internal-${apiName}`,
    randomnessKey,
  );
  const locationInternalId = toBlockShapeId(
    `location-internal-${apiName}`,
    randomnessKey,
  );

  const addOnOverride: Record<string, unknown> = {
    idToBlockShapeId: {
      "dataset-internal-shape-id": datasourceBlockInternalId,
      [datasourceInternalId]: datasourceBlockInternalId,
      [locationInternalId]: compassBlockShapeId,
      ...Object.fromEntries(
        columnInternalIds.map((internalId, i) => [
          internalId,
          toBlockShapeId(columnReadableIds[i], randomnessKey),
        ]),
      ),
    },
    idToInputGroupId: {},
    outputToLocationInput: {
      [datasourceBlockInternalId]: compassBlockShapeId,
    },
  };

  // Create block data directory
  const dsBlockDataDir = path.join(
    buildDir,
    `temp_block_data_${apiName}_backing_ds`,
  );
  await fs.promises.mkdir(dsBlockDataDir, { recursive: true });

  // Write schema.json
  const schemaJson = {
    fieldSchemaList: nonEditOnlyProps.map((prop) => ({
      type: propertyTypeToSchemaType(prop.type),
      name: prop.apiName,
      nullable: null,
      userDefinedTypeClass: null,
      customMetadata: {},
      arraySubtype: null,
      precision: null,
      scale: null,
      mapKeyType: null,
      mapValueType: null,
      subSchemas: null,
    })),
    primaryKey: null,
    dataFrameReaderClass:
      "com.palantir.foundry.spark.input.ParquetDataFrameReader",
    customMetadata: {
      format: "parquet",
      options: {},
    },
  };
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "schema.json"),
    JSON.stringify(schemaJson, null, 2),
  );

  // Write block-data.json — column keys are the internal IDs mapped in the add-on
  const blockDataJson = {
    type: "v1",
    v1: {
      columns: Object.fromEntries(
        nonEditOnlyProps.map((prop, i) => [
          columnInternalIds[i],
          prop.apiName,
        ]),
      ),
      hasSchema: true,
    },
  };
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "block-data.json"),
    JSON.stringify(blockDataJson, null, 2),
  );

  // Write VERSION
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "VERSION"),
    "\"1\"",
  );

  // Write empty files.zip
  // An empty zip file is just the end-of-central-directory record (22 bytes)
  const emptyZip = Buffer.from([
    0x50,
    0x4b,
    0x05,
    0x06,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
  ]);
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "files.zip"),
    emptyZip,
  );

  // Build inputs (compassResource for install location)
  const inputs: Record<string, InputShape> = {};
  inputs[compassReadableId] = {
    type: "compassResource",
    compassResource: {
      about: {
        fallbackTitle: dsName,
        fallbackDescription: "",
        localizedTitle: {},
        localizedDescription: {},
      },
      allowedTypes: [],
      typeConstraints: [
        {
          type: "compassFolderTypeConstraints",
          compassFolderTypeConstraints: {
            constraints: ["INSTALL_LOCATION"],
          },
        },
      ],
    },
  } as InputShape;

  return {
    block_identifier: dsName,
    block_data_directory: dsBlockDataDir,
    oci_block_data_metadata: undefined,
    maven_block_data_metadata: undefined,
    inputs: inputs as any,
    outputs: outputs as any,
    input_mapping_entries: [],
    external_recommendations: [],
    add_on_override: addOnOverride,
    input_shape_metadata: {},
    block_type: "STATIC_DATASET",
  };
}
