/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  QueryAggregationKeyType,
  QueryAggregationRangeSubType,
  QueryAggregationValueType,
  QueryDataType,
  QueryParameterV2,
} from "@osdk/gateway/types";
import type { MinimalFs } from "../MinimalFs";
import { isNullableQueryDataType } from "../shared/isNullableQueryDataType";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";

export async function generateQueries(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  const importedObjects = new Set<string>();
  const signatures: string[] = [];

  for (const query of ontology.queryTypes) {
    const outputType = handleQueryDataType(
      query.output,
      importedObjects,
    );
    const param = handleQueryParameters(
      query.parameters,
      importedObjects,
    );
    signatures.push(
      `${query.apiName}(${param}): Promise<Result<QueryResponse<${outputType}>, QueryError>>;`,
    );
  }

  await fs.writeFile(
    `${outDir}/ontologyQueries.ts`,
    await formatTs(`
    import type { QueryResponse, QueryError, Result, Timestamp, LocalDate, Range, Attachment, ObjectSet, TwoDimensionalAggregation, ThreeDimensionalAggregation  } from "@osdk/legacy-client";
    ${
      Array.from(importedObjects).map(importedObject =>
        `import type { ${importedObject} } from "./objects/${importedObject}";`
      ).join("\n")
    }

    export interface Queries {
    ${signatures.join("\n")}
    }
  `),
  );
}

function handleQueryParameters(
  parameters: Record<string, QueryParameterV2>,
  importedObjects: Set<string>,
) {
  const parametersEntries = Object.entries(parameters);
  if (parametersEntries.length === 0) {
    return "";
  }

  const typeEntries = parametersEntries.map(([name, parameter]) => {
    const nullable = isNullableQueryDataType(parameter.dataType);
    const type = handleQueryDataType(
      parameter.dataType,
      importedObjects,
    );
    return `"${name}"${nullable ? "?" : ""}: ${type}`;
  });

  return `params: { ${typeEntries.join("; ")}}`;
}

function handleQueryDataType(
  dataType: QueryDataType,
  importedObjects: Set<string>,
): string {
  switch (dataType.type) {
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "double":
    case "float":
    case "integer":
    case "long":
      return "number";

    case "date":
      return "LocalDate";

    case "timestamp":
      return "Timestamp";

    case "attachment":
      return "Attachment";

    case "array":
      return `Array<${handleQueryDataType(dataType.subType, importedObjects)}>`;

    case "object": {
      const objectType = dataType.objectTypeApiName!;
      importedObjects.add(objectType);
      return objectType;
    }

    case "objectSet": {
      const objectType = dataType.objectTypeApiName!;
      importedObjects.add(objectType);
      return `ObjectSet<${objectType}>`;
    }

    case "set":
      return `Set<${handleQueryDataType(dataType.subType, importedObjects)}>`;

    case "struct":
      const properties = dataType.fields.map(field => {
        const isNullable = isNullableQueryDataType(field.fieldType);
        return `${field.name}${isNullable ? "?" : ""}: ${
          handleQueryDataType(field.fieldType, importedObjects)
        }`;
      });
      return `{ ${properties.join(",\n")} }`;

    case "union":
      return dataType.unionTypes.map(type =>
        handleQueryDataType(type, importedObjects)
      ).join("|");

    case "twoDimensionalAggregation":
      dataType.valueType;
      return `TwoDimensionalAggregation<
        ${aggregationKeyToTypescriptType(dataType.keyType)},
        ${aggregationValueToTypescriptType(dataType.valueType)}
      >`;
    case "threeDimensionalAggregation":
      return `ThreeDimensionalAggregation<
        ${aggregationKeyToTypescriptType(dataType.keyType)},
        ${aggregationKeyToTypescriptType(dataType.valueType.keyType)},
        ${aggregationValueToTypescriptType(dataType.valueType.valueType)}
      >`;

    case "null":
      return "null";

    case "unsupported":
      throw new Error("Cannot generate queries for unsupported type");

    default:
      const _: never = dataType;
      throw new Error(
        `Cannot generate queries for type ${(dataType as any).type}`,
      );
  }
}

function aggregationKeyToTypescriptType(
  keyType: QueryAggregationKeyType,
) {
  switch (keyType.type) {
    case "boolean":
      return "boolean";
    case "double":
    case "integer":
      return "number";
    case "string":
      return "string";
    case "date":
      return "LocalDate";
    case "timestamp":
      return "Timestamp";
    case "range":
      return `Range<${aggregationRangeToTypescriptType(keyType.subType)}>`;
    default:
      const _: never = keyType;
      throw new Error(
        `Unknown TwoDimensionalAggregation keyType ${(keyType as any).type}`,
      );
  }
}

function aggregationRangeToTypescriptType(
  subType: QueryAggregationRangeSubType,
) {
  switch (subType.type) {
    case "date":
      return "LocalDate";
    case "double":
    case "integer":
      return "number";
    case "timestamp":
      return "Timestamp";
    default:
      const _: never = subType;
      throw new Error(
        `Unsupported QueryAggregationRangeSubType ${(subType as any).type}`,
      );
  }
}

function aggregationValueToTypescriptType(
  valueType: QueryAggregationValueType,
) {
  switch (valueType.type) {
    case "date":
      return "LocalDate";
    case "double":
      return "number";
    case "timestamp":
      return "Timestamp";
    default:
      const _: never = valueType;
      throw new Error(
        `Unsupported QueryAggregationValueType ${(valueType as any).type}`,
      );
  }
}
