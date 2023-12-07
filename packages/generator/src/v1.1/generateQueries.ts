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
} from "@osdk/gateway/types";
import path from "node:path";
import type { MinimalFs } from "../MinimalFs";
import { isNullableQueryDataType } from "../shared/isNullableQueryDataType";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";

export async function generateQueries(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
) {
  const importedObjects = new Set<string>();
  const signatures: string[] = [];

  for (const query of Object.values(ontology.queryTypes)) {
    const jsDocBlock = ["/**"];
    if (query.description) {
      jsDocBlock.push(`* ${query.description}`);
    }

    const outputType = handleQueryDataType(
      query.output,
      importedObjects,
      true,
    );

    const paramEntries = [];

    for (const [name, parameter] of Object.entries(query.parameters)) {
      const nullable = isNullableQueryDataType(parameter.dataType);
      const type = handleQueryDataType(
        parameter.dataType,
        importedObjects,
        false,
      );
      paramEntries.push(`"${name}"${nullable ? "?" : ""}: ${type}`);

      jsDocBlock.push(
        `* @param {${sanitizeDocTypeName(type)}} params.${name}${
          parameter.description ? ` - ${parameter.description}` : ""
        }`,
      );
    }

    const param = paramEntries.length === 0
      ? ""
      : `params: { ${paramEntries.join("; ")} }`;

    jsDocBlock.push(
      `* @returns ${sanitizeDocTypeName(outputType)}`,
      "*/",
    );

    signatures.push(
      `
      ${jsDocBlock.join("\n")}
      ${query.apiName}(${param}): Promise<Result<QueryResponse<${outputType}>, QueryError>>;
      `,
    );
  }

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(
    path.join(outDir, "Queries.ts"),
    await formatTs(`
    import type { QueryResponse, QueryError, Result, Timestamp, LocalDate, Range, Attachment, ObjectSet, TwoDimensionalAggregation, ThreeDimensionalAggregation  } from "@osdk/legacy-client";
    ${
      Array.from(importedObjects).map(importedObject =>
        `import type { ${importedObject} } from "../objects/${importedObject}${importExt}";`
      ).join("\n")
    }

    export interface Queries {
    ${signatures.join("\n")}
    }
  `),
  );
}

function handleQueryDataType(
  dataType: QueryDataType,
  importedObjects: Set<string>,
  isReturnValue: boolean,
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
      return `Array<${
        handleQueryDataType(dataType.subType, importedObjects, isReturnValue)
      }>`;

    case "object": {
      const objectType = dataType.objectTypeApiName!;
      importedObjects.add(objectType);
      return isReturnValue
        ? objectType
        : `${objectType} | ${objectType}["__primaryKey"]`;
    }

    case "objectSet": {
      const objectType = dataType.objectTypeApiName!;
      importedObjects.add(objectType);
      return `ObjectSet<${objectType}>`;
    }

    case "set":
      return `Set<${
        handleQueryDataType(dataType.subType, importedObjects, isReturnValue)
      }>`;

    case "struct":
      const properties = dataType.fields.map(field => {
        const isNullable = isNullableQueryDataType(field.fieldType);
        return `${field.name}${isNullable ? "?" : ""}: ${
          handleQueryDataType(field.fieldType, importedObjects, isReturnValue)
        }`;
      });
      return `{ ${properties.join(",\n")} }`;

    case "union":
      return dataType.unionTypes.map(type =>
        handleQueryDataType(type, importedObjects, isReturnValue)
      ).filter(type => type !== "null").join("|");

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

function sanitizeDocTypeName(type: string) {
  return type.replace(/\s/g, "");
}
