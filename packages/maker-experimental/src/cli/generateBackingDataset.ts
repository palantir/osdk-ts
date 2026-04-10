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

import type {
  LinkTypeBlockDataV2,
  ObjectTypeBlockDataV2,
  PropertyType,
  PropertyTypeMappingInfo,
  Type,
} from "@osdk/client.unstable";
import type { InputShape, OutputShape } from "@osdk/client.unstable/api";
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
 * Extract the set of edit-only property RIDs from the wire format datasources.
 */
function getEditOnlyPropertyRids(
  datasources: ObjectTypeBlockDataV2["datasources"],
): Set<string> {
  const editOnlyRids = new Set<string>();
  for (const ds of datasources) {
    const def = ds.datasource;
    let propertyMapping: Record<string, PropertyTypeMappingInfo> | undefined;
    if (def.type === "datasetV2") {
      propertyMapping = def.datasetV2.propertyMapping;
    } else if (def.type === "datasetV3") {
      propertyMapping = def.datasetV3.propertyMapping;
    }
    if (propertyMapping) {
      for (const [rid, mapping] of Object.entries(propertyMapping)) {
        if (mapping.type === "editOnly") {
          editOnlyRids.add(rid);
        }
      }
    }
  }
  return editOnlyRids;
}

/**
 * Extract non-edit-only properties from ObjectTypeBlockDataV2.
 */
export function getNonEditOnlyProperties(
  objectTypeBlockData: ObjectTypeBlockDataV2,
): PropertyType[] {
  const editOnlyRids = getEditOnlyPropertyRids(
    objectTypeBlockData.datasources,
  );
  return Object.entries(objectTypeBlockData.objectType.propertyTypes)
    .filter(([rid]) => !editOnlyRids.has(rid))
    .map(([_, prop]) => prop);
}

interface BackingDatasetColumn {
  name: string;
  type: Type;
}

/**
 * Shared logic to generate a STATIC_DATASET BlockGeneratorResult from a list of columns.
 * Used by both object type and link type backing dataset generators.
 */
async function generateBackingDatasetBlock(
  datasetName: string,
  blockIdentifier: string,
  dirSuffix: string,
  columns: BackingDatasetColumn[],
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult> {
  // Build output shapes
  const outputs: Record<ReadableId, OutputShape> = {} as Record<
    ReadableId,
    OutputShape
  >;

  const datasourceReadableId = ReadableIdGenerator.getForDatasetOutput(
    datasetName,
  );
  const columnReadableIds: ReadableId[] = columns.map(col =>
    ReadableIdGenerator.getForDatasetColumnOutput(datasetName, col.name)
  );

  const datasourceBlockInternalId = toBlockShapeId(
    datasourceReadableId,
    randomnessKey,
  );

  // tabularDatasource output shape
  outputs[datasourceReadableId] = {
    type: "tabularDatasource",
    tabularDatasource: {
      about: {
        fallbackTitle: blockIdentifier,
        fallbackDescription: "",
        localizedTitle: {},
        localizedDescription: {},
      },
      schema: columnReadableIds.map((id) => toBlockShapeId(id, randomnessKey)),
      type: "DATASET",
      buildRequirements: { isBuildable: false },
    },
  } as OutputShape;

  // datasourceColumn output shapes
  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    const colReadableId = columnReadableIds[i];

    outputs[colReadableId] = {
      type: "datasourceColumn",
      datasourceColumn: {
        about: {
          fallbackTitle: col.name,
          fallbackDescription: "",
          localizedTitle: {},
          localizedDescription: {},
        },
        type: {
          type: "concrete",
          concrete: typeToConcreteDataType(col.type),
        },
        datasource: datasourceBlockInternalId,
        typeclasses: [],
      },
    } as OutputShape;
  }

  // Generate internal IDs for block-data.json columns.
  // These are distinct from the block shape IDs that appear in the manifest outputs.
  // The add-on maps these internal IDs -> block shape IDs.
  const columnInternalIds = columns.map((col) =>
    toBlockShapeId(
      `column-internal-${datasetName}-${col.name}`,
      randomnessKey,
    )
  );

  const compassReadableId = `${blockIdentifier}-compass-resource` as ReadableId;
  const compassBlockShapeId = toBlockShapeId(
    compassReadableId,
    randomnessKey,
  );

  const datasourceInternalId = toBlockShapeId(
    `datasource-internal-${datasetName}`,
    randomnessKey,
  );
  const locationInternalId = toBlockShapeId(
    `location-internal-${datasetName}`,
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
  const dsBlockDataDir = path.join(buildDir, `temp_block_data_${dirSuffix}`);
  await fs.promises.mkdir(dsBlockDataDir, { recursive: true });

  // Write schema.json
  const schemaJson = {
    fieldSchemaList: columns.map((col) => ({
      type: propertyTypeToSchemaType(col.type),
      name: col.name,
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
        columns.map((col, i) => [columnInternalIds[i], col.name]),
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
  const inputs: Record<ReadableId, InputShape> = {} as Record<
    ReadableId,
    InputShape
  >;
  inputs[compassReadableId] = {
    type: "compassResource",
    compassResource: {
      about: {
        fallbackTitle: blockIdentifier,
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
    block_identifier: blockIdentifier,
    block_data_directory: dsBlockDataDir,
    oci_block_data_metadata: undefined,
    maven_block_data_metadata: undefined,
    inputs,
    outputs,
    input_mapping_entries: [],
    external_recommendations: [],
    add_on_override: addOnOverride,
    input_shape_metadata: {},
    block_type: "STATIC_DATASET",
  };
}

/**
 * Generate a backing datasource BlockGeneratorResult for an object type.
 */
export async function generateBackingDatasetBlockResult(
  objectTypeBlockData: ObjectTypeBlockDataV2,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult> {
  const apiName = objectTypeBlockData.objectType.apiName!;
  const nonEditOnlyProps = getNonEditOnlyProperties(objectTypeBlockData);

  const columns: BackingDatasetColumn[] = nonEditOnlyProps.map(prop => ({
    name: prop.apiName!,
    type: prop.type,
  }));

  return generateBackingDatasetBlock(
    apiName,
    `${apiName}-backing-ds`,
    `${apiName}_backing_ds`,
    columns,
    buildDir,
    randomnessKey,
  );
}

/**
 * Generate a backing datasource BlockGeneratorResult for a many-to-many link type.
 */
export async function generateBackingDatasetBlockResultForLink(
  linkTypeBlockData: LinkTypeBlockDataV2,
  linkApiName: string,
  objectTypes: Record<string, ObjectTypeBlockDataV2>,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult> {
  const definition = linkTypeBlockData.linkType.definition;
  if (definition.type !== "manyToMany") {
    throw new Error(
      `Link type "${linkApiName}" is not a many-to-many link type`,
    );
  }

  const m2m = definition.manyToMany;
  const datasource = linkTypeBlockData.datasources[0]?.datasource;
  if (!datasource || datasource.type !== "dataset") {
    throw new Error(
      `Link type "${linkApiName}" does not have a dataset datasource`,
    );
  }
  const ds = datasource.dataset;

  // Extract column names and PK RIDs from the datasource mappings
  const pkRidA = Object.keys(ds.objectTypeAPrimaryKeyMapping)[0];
  const columnA = Object.values(ds.objectTypeAPrimaryKeyMapping)[0];
  const pkRidB = Object.keys(ds.objectTypeBPrimaryKeyMapping)[0];
  const columnB = Object.values(ds.objectTypeBPrimaryKeyMapping)[0];

  // Resolve column types from the referenced object types
  const objectTypeA = objectTypes[m2m.objectTypeRidA];
  const objectTypeB = objectTypes[m2m.objectTypeRidB];
  if (!objectTypeA || !objectTypeB) {
    throw new Error(
      `Could not find object types for link "${linkApiName}"`,
    );
  }
  const propTypeA = objectTypeA.objectType.propertyTypes[pkRidA]?.type;
  const propTypeB = objectTypeB.objectType.propertyTypes[pkRidB]?.type;
  if (!propTypeA || !propTypeB) {
    throw new Error(
      `Could not find primary key property types for link "${linkApiName}"`,
    );
  }

  // Dataset name must match what convertLink.ts registered with generateDatasetLocator
  return generateBackingDatasetBlock(
    `link.${linkApiName}`,
    `${linkApiName}-link-backing-ds`,
    `${linkApiName}_link_backing_ds`,
    [
      { name: columnA, type: propTypeA },
      { name: columnB, type: propTypeB },
    ],
    buildDir,
    randomnessKey,
  );
}
