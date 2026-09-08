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

import type {
  ObjectTypeBlockDataV2,
  ObjectTypeDirectDatasource,
  PropertyTypeMappingInfo,
} from "@osdk/client.unstable";
import type { OutputShape } from "@osdk/client.unstable/api";

import { typeToConcreteDataType } from "../conversion/toMarketplace/typeVisitors.js";
import { type ReadableId, ReadableIdGenerator } from "../util/generateRid.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";

const DIRECT_SOURCE_INTERNAL_SHAPE_ID = "direct-source-internal-shape-id";

function getColumnName(mapping: PropertyTypeMappingInfo): string {
  if (mapping.type === "column") return mapping.column;
  if (mapping.type === "struct") return mapping.struct.column;
  throw new Error("Error extracting column shapes");
}

function getDirectDatasource(
  objectType: ObjectTypeBlockDataV2,
): ObjectTypeDirectDatasource | undefined {
  for (const datasource of objectType.datasources) {
    if (datasource.datasource.type === "direct") {
      return datasource.datasource.direct;
    }
  }
  return undefined;
}

/**
 * Generate the DIRECT_DATASOURCE block paired with an ontology object's
 * direct datasource input shapes.
 */
export async function generateDirectDatasourceBlockResult(
  objectType: ObjectTypeBlockDataV2,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult | undefined> {
  const directDatasource = getDirectDatasource(objectType);
  if (directDatasource === undefined) return undefined;
  const objectTypeApiName = objectType.objectType.apiName;
  if (objectTypeApiName == null) {
    throw new Error("Direct datasource object type is missing an API name");
  }

  const consumedDatasourceReadableId =
    ReadableIdGenerator.getForDataset(objectTypeApiName);
  const producedDatasourceReadableId =
    ReadableIdGenerator.getProducedReadableId(consumedDatasourceReadableId);
  const producedDatasourceBlockShapeId = toBlockShapeId(
    producedDatasourceReadableId,
    randomnessKey,
  );

  const columnOutputs = {} as Record<ReadableId, OutputShape>;
  const blockData = {} as Record<ReadableId, string>;
  const producedColumnReadableIds: ReadableId[] = [];
  const seenColumnNames = new Set<string>();

  for (const [propertyTypeRid, mapping] of Object.entries(
    directDatasource.propertyMapping,
  )) {
    const columnName = getColumnName(mapping);
    if (seenColumnNames.has(columnName)) {
      throw new Error(`Duplicate direct datasource column '${columnName}'`);
    }
    seenColumnNames.add(columnName);

    const propertyType = objectType.objectType.propertyTypes[propertyTypeRid];
    if (propertyType === undefined) {
      throw new Error(
        `No property type found for direct datasource mapping '${propertyTypeRid}'`,
      );
    }

    const consumedColumnReadableId = ReadableIdGenerator.getForDatasetColumn(
      objectTypeApiName,
      columnName,
    );
    const producedColumnReadableId = ReadableIdGenerator.getProducedReadableId(
      consumedColumnReadableId,
    );
    producedColumnReadableIds.push(producedColumnReadableId);
    blockData[producedColumnReadableId] = columnName;

    columnOutputs[producedColumnReadableId] = {
      type: "datasourceColumn",
      datasourceColumn: {
        about: {
          fallbackTitle: propertyType.displayMetadata.displayName,
          fallbackDescription: "",
          localizedTitle: {},
          localizedDescription: {},
        },
        type: {
          type: "concrete",
          concrete: typeToConcreteDataType(propertyType.type),
        },
        datasource: producedDatasourceBlockShapeId,
        typeclasses: [],
      },
    };
  }

  const outputs = {
    [producedDatasourceReadableId]: {
      type: "tabularDatasource",
      tabularDatasource: {
        about: {
          fallbackTitle: producedDatasourceReadableId,
          fallbackDescription: "",
          localizedTitle: {},
          localizedDescription: {},
        },
        type: "DATASET",
        schema: producedColumnReadableIds.map((readableId) =>
          toBlockShapeId(readableId, randomnessKey),
        ),
      },
    },
    ...columnOutputs,
  } as Record<ReadableId, OutputShape>;

  const idToBlockShapeId = Object.fromEntries(
    Object.keys(outputs).map((readableId) => [
      readableId,
      toBlockShapeId(readableId, randomnessKey),
    ]),
  );
  idToBlockShapeId[DIRECT_SOURCE_INTERNAL_SHAPE_ID] =
    producedDatasourceBlockShapeId;

  const blockDataDirectory = path.join(
    buildDir,
    `temp_direct_datasource_${objectType.objectType.id}`,
  );
  await fs.promises.mkdir(blockDataDirectory, { recursive: true });
  await fs.promises.writeFile(
    path.join(blockDataDirectory, "block-data.json"),
    JSON.stringify(blockData, null, 2),
  );
  await fs.promises.writeFile(
    path.join(blockDataDirectory, "VERSION"),
    JSON.stringify("1.0"),
  );

  return {
    block_identifier: `direct-datasource-${objectType.objectType.rid}`,
    block_data_directory: blockDataDirectory,
    inputs: {},
    outputs,
    input_mapping_entries: [],
    external_recommendations: [],
    add_on_override: {
      idToBlockShapeId,
      idToInputGroupId: {},
      outputToLocationInput: {},
    },
    input_shape_metadata: {},
    block_type: "DIRECT_DATASOURCE",
  };
}
