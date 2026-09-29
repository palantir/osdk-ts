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

import { isDeepStrictEqual } from "node:util";

import type { ObjectTypeBlockDataV2 } from "@osdk/client.unstable";
import type { ConcreteDataType } from "@osdk/client.unstable/api";
import type { ObjectType, OntologyDefinition } from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";
import invariant from "tiny-invariant";

import type { DatasetBlockDefinition } from "../cli/generateBackingDataset.js";
import { getStandaloneDatasetInternalName } from "../cli/generateBackingDataset.js";
import type {
  GeneratedBlockExternalRecommendations,
  InputMappingEntry,
} from "../cli/marketplaceSerialization/supportingTypes.js";
import { convertDatasetDefinition } from "../conversion/toMarketplace/convertDatasetDefinition.js";
import { DEFAULT_VERSION_RANGE } from "../conversion/toMarketplace/RecommendationUtils.js";
import { typeToConcreteDataType } from "../conversion/toMarketplace/typeVisitors.js";
import {
  type OntologyRidGenerator,
  ReadableIdGenerator,
} from "../util/generateRid.js";
import {
  type ImportedDatasetDefinition,
  importDataset,
} from "./importDataset.js";

interface ImportedColumn {
  name: string;
  type: ConcreteDataType;
  objectApiName: string;
}

export function getDatasetBindings(
  ontologyDefinition: OntologyDefinition,
  objectTypes: Record<string, ObjectTypeBlockDataV2>,
  datasets: DatasetBlockDefinition[],
  ridGenerator: OntologyRidGenerator,
  namespace: string,
  randomnessKey?: string,
): {
  inputMappings: InputMappingEntry[];
  externalRecommendations: GeneratedBlockExternalRecommendations[];
} {
  const datasetsByName = new Map(
    datasets.map((dataset) => [dataset.name, dataset]),
  );
  const inputMappings: InputMappingEntry[] = [];
  const currentPackageName = namespace.endsWith(".")
    ? namespace.slice(0, -1)
    : namespace;
  const importedColumns = new Map<string, Map<string, ImportedColumn>>();
  const externalRecommendations = new Map<
    string,
    GeneratedBlockExternalRecommendations
  >();

  for (const object of Object.values(objectTypes)) {
    const apiName = object.objectType.apiName!;
    const definition = ontologyDefinition[OntologyEntityTypeEnum.OBJECT_TYPE][
      apiName
    ] as ObjectType;
    const datasource = definition.datasources?.find(
      (ds) => ds.type === "dataset",
    );
    if (datasource?.dataset === undefined) continue;

    const imported =
      "packageName" in datasource.dataset
        ? importDataset(datasource.dataset as ImportedDatasetDefinition)
        : undefined;
    const dataset =
      imported === undefined
        ? datasetsByName.get(datasource.dataset.name)
        : convertDatasetDefinition(imported, ridGenerator);
    invariant(
      dataset !== undefined,
      `Dataset "${datasource.dataset.name}" referenced by object "${apiName}" is not defined`,
    );
    if (imported !== undefined) {
      invariant(
        imported.packageName !== currentPackageName ||
          imported.randomnessKey !== randomnessKey,
        `Object "${apiName}" cannot import dataset "${dataset.name}" from its own product "${currentPackageName}". Use the locally defined dataset instead.`,
      );
      const sourceKey = JSON.stringify([
        imported.packageName,
        imported.name,
        imported.randomnessKey,
      ]);
      let columns = importedColumns.get(sourceKey);
      if (columns === undefined) {
        columns = new Map();
        importedColumns.set(sourceKey, columns);
      }
      for (const column of dataset.columns) {
        const normalizedName = column.name.toLocaleLowerCase("en-US");
        const type = normalizeType(typeToConcreteDataType(column.type));
        const previous = columns.get(normalizedName);
        invariant(
          previous === undefined ||
            (previous.name === column.name &&
              isDeepStrictEqual(previous.type, type)),
          `Dataset "${dataset.name}" from package "${imported.packageName}" has conflicting definitions for column "${column.name}" on objects "${previous?.objectApiName}" and "${apiName}"`,
        );
        if (previous === undefined) {
          columns.set(normalizedName, {
            name: column.name,
            type,
            objectApiName: apiName,
          });
        }
      }
    }
    const internalName = getStandaloneDatasetInternalName(dataset.name);
    const columnsByName = new Map(
      dataset.columns.map((column) => [column.name, column]),
    );
    const mappedColumns = new Set<string>();
    const mappedProperties = new Set<string>();

    for (const { datasource: converted } of object.datasources) {
      const propertyMapping =
        converted.type === "datasetV2"
          ? converted.datasetV2.propertyMapping
          : converted.type === "datasetV3"
            ? converted.datasetV3.propertyMapping
            : undefined;
      if (propertyMapping === undefined) continue;

      for (const [propertyRid, mapping] of Object.entries(propertyMapping)) {
        if (mapping.type !== "column" && mapping.type !== "struct") continue;
        const columnName =
          mapping.type === "column" ? mapping.column : mapping.struct.column;
        const property = object.objectType.propertyTypes[propertyRid];
        const context = `Object "${apiName}" property "${property.apiName}" maps to dataset "${dataset.name}" column "${columnName}"`;
        const column = columnsByName.get(columnName);
        invariant(column !== undefined, `${context}, which does not exist`);
        invariant(
          isDeepStrictEqual(
            normalizeType(typeToConcreteDataType(property.type)),
            normalizeType(typeToConcreteDataType(column.type)),
          ),
          `${context} with an incompatible type`,
        );
        mappedColumns.add(columnName);
        mappedProperties.add(property.apiName!);
      }
    }

    for (const propertyName of Object.keys(datasource.propertyMapping ?? {})) {
      invariant(
        mappedProperties.has(propertyName),
        `Object "${apiName}" property "${propertyName}" cannot map to a dataset column because it is undefined, edit-only, or derived`,
      );
    }

    const mappings: InputMappingEntry[] = [
      {
        input: ReadableIdGenerator.getForDataset(apiName),
        output: ReadableIdGenerator.getForDatasetOutput(internalName),
      },
    ];
    for (const columnName of mappedColumns) {
      mappings.push({
        input: ReadableIdGenerator.getForDatasetColumn(apiName, columnName),
        output: ReadableIdGenerator.getForDatasetColumnOutput(
          internalName,
          columnName,
        ),
      });
    }
    if (imported === undefined) {
      inputMappings.push(...mappings);
    } else {
      const key = JSON.stringify([
        imported.packageName,
        imported.randomnessKey,
      ]);
      let recommendation = externalRecommendations.get(key);
      if (recommendation === undefined) {
        recommendation = {
          upstreamPackageName: imported.packageName,
          upstreamVersionCompatibility: DEFAULT_VERSION_RANGE,
          upstreamRandomnessKey: imported.randomnessKey,
          mappings: [],
        };
        externalRecommendations.set(key, recommendation);
      }
      recommendation.mappings.push(
        ...mappings.map(({ input, output }) => ({
          targetInputReadableId: input,
          upstreamOutputReadableId: output,
        })),
      );
    }
  }
  return {
    inputMappings,
    externalRecommendations: [...externalRecommendations.values()],
  };
}

function normalizeType(type: ConcreteDataType): ConcreteDataType {
  if (type.type === "array") {
    return {
      type: "array",
      array: { elementType: normalizeType(type.array.elementType) },
    };
  }
  if (type.type === "struct") {
    return {
      type: "struct",
      struct: {
        fields: type.struct.fields
          .map((field) => ({
            name: field.name,
            type: normalizeType(field.type),
          }))
          .sort((left, right) => left.name.localeCompare(right.name)),
      },
    };
  }
  return type;
}
