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

import type { FunctionDiscovery } from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

function isInjectedRuntimeDataType(
  dataType: FunctionDiscovery.DataType,
): boolean {
  return dataType.type === "client" || dataType.type === "durableContext";
}

function isInjectedRuntimeContext(
  dataType: FunctionDiscovery.DataType,
): boolean {
  if (dataType.type !== "anonymousCustomType") {
    return false;
  }

  const fieldTypes = Object.values(dataType.anonymousCustomType.fields);

  return fieldTypes.length > 0
    && fieldTypes.every(isInjectedRuntimeDataType);
}

export function isInjectedRuntimeInput(
  dataType: FunctionDiscovery.DataType,
): boolean {
  return isInjectedRuntimeDataType(dataType)
    || isInjectedRuntimeContext(dataType);
}

export function convertDataType(
  dataType: FunctionDiscovery.DataType,
  customTypes: Record<string, unknown>,
  interfaceRidToApiName: Record<string, string>,
  required?: boolean,
): Ontologies.QueryDataType {
  if (required === false && dataType.type !== "optionalType") {
    return {
      type: "union",
      unionTypes: [
        convertDataType(dataType, customTypes, interfaceRidToApiName),
        {
          type: "null",
        },
      ],
    };
  }
  const dataTypeName = dataType.type;
  switch (dataType.type) {
    case "string":
      return { type: "string" };
    case "boolean":
      return { type: "boolean" };
    case "integer":
      return { type: "integer" };
    case "long":
      return { type: "long" };
    case "float":
      return { type: "float" };
    case "double":
      return { type: "double" };
    case "date":
      return { type: "date" };
    case "timestamp":
      return { type: "timestamp" };
    case "attachment":
      return { type: "attachment" };
    case "mediaReference":
      return { type: "mediaReference" };
    case "geoShape":
      return { type: "geoshape" };
    case "optionalType": {
      return {
        type: "union",
        unionTypes: [
          convertDataType(
            dataType.optionalType.wrappedType,
            customTypes,
            interfaceRidToApiName,
          ),
          { type: "null" },
        ],
      };
    }
    case "set": {
      return {
        type: "set",
        subType: convertDataType(
          dataType.set.elementsType,
          customTypes,
          interfaceRidToApiName,
        ),
      };
    }
    case "objectSet": {
      return {
        type: "objectSet",
        objectApiName: dataType.objectSet.objectTypeId,
        objectTypeApiName: dataType.objectSet.objectTypeId,
      };
    }
    case "list": {
      return {
        type: "array",
        subType: convertDataType(
          dataType.list.elementsType,
          customTypes,
          interfaceRidToApiName,
        ),
      };
    }
    case "map": {
      // `entrySet` is the only key/value container in QueryDataType, and it names its
      // members in the singular.
      return {
        type: "entrySet",
        keyType: convertDataType(
          dataType.map.keysType,
          customTypes,
          interfaceRidToApiName,
        ),
        valueType: convertDataType(
          dataType.map.valuesType,
          customTypes,
          interfaceRidToApiName,
        ),
      };
    }
    case "functionCustomType": {
      return convertFunctionCustomType(
        dataType.functionCustomType,
        customTypes,
        interfaceRidToApiName,
      );
    }
    case "anonymousCustomType": {
      return convertCustomTypeShape(
        dataType.anonymousCustomType,
        customTypes,
        interfaceRidToApiName,
      );
    }
    case "union": {
      return {
        type: "union",
        unionTypes: dataType.union.allowedTypes.map(allowedType =>
          convertDataType(
            allowedType,
            customTypes,
            interfaceRidToApiName,
          )
        ),
      };
    }
    case "twoDimensionalAggregation": {
      return {
        type: "twoDimensionalAggregation",
        ...convertSingleBucketType(
          dataType.twoDimensionalAggregation.bucketType,
        ),
      };
    }
    case "threeDimensionalAggregation": {
      const { keyType, subBucketType } =
        dataType.threeDimensionalAggregation.nestedBucketType;
      return {
        type: "threeDimensionalAggregation",
        keyType: convertBucketKeyType(keyType),
        valueType: convertSingleBucketType(subBucketType),
      };
    }
    case "object": {
      return {
        type: "object",
        objectApiName: dataType.object.objectTypeId,
        objectTypeApiName: dataType.object.objectTypeId,
      };
    }
    case "interface": {
      return {
        type: "interfaceObject",
        interfaceTypeApiName:
          interfaceRidToApiName[dataType.interface.interfaceTypeRid],
      };
    }
    case "interfaceObjectSet": {
      return {
        type: "interfaceObjectSet",
        interfaceTypeApiName: interfaceRidToApiName[
          dataType.interfaceObjectSet.interfaceTypeRid
        ],
      };
    }
    case "client":
    case "ontologyEdit": {
      // ontologyEdit represents a function's side-effect declaration (e.g. edits to
      // objects). There is no QueryDataType equivalent, so we map it to string as a
      // placeholder — the value is not used at query execution time.
      return { type: "string" };
    }
    case "range":
    case "user":
    case "group":
    case "principal":
    case "notification":
    case "marking":
    case "durableContext":
    case "byte":
    case "short":
    case "binary":
    case "annotatedType":
      throw new Error(`Unsupported data type: ${dataType.type}`);
    default: {
      const _never: never = dataType;
      throw new Error(`Unsupported data type: ${dataTypeName}`);
    }
  }
}

function convertRangeType(
  rangeType: FunctionDiscovery.RangeType,
): Ontologies.QueryAggregationRangeSubType {
  switch (rangeType.type) {
    case "integer":
    case "double":
    case "timestamp":
    case "date":
      return { type: rangeType.type };
  }
}

function convertBucketKeyType(
  keyType: FunctionDiscovery.BucketKeyType,
): Ontologies.QueryAggregationKeyType {
  if (keyType.type === "range") {
    return {
      type: "range",
      subType: convertRangeType(keyType.range),
    };
  }

  return { type: keyType.type };
}

function convertBucketValueType(
  valueType: FunctionDiscovery.BucketValueType,
): Ontologies.QueryAggregationValueType {
  return { type: valueType.type };
}

function convertSingleBucketType(
  bucketType: FunctionDiscovery.SingleBucketType,
): Ontologies.TwoDimensionalAggregation {
  return {
    keyType: convertBucketKeyType(bucketType.keyType),
    valueType: convertBucketValueType(bucketType.valueType),
  };
}

interface ICustomTypeShape {
  // Discovery leaves this out when no field carries metadata, so a named custom type and
  // an inline one both have to survive it being absent.
  fieldMetadata?: Record<string, { required?: boolean }> | null;
  fields: Record<string, FunctionDiscovery.DataType>;
}

function isCustomTypeShape(value: unknown): value is ICustomTypeShape {
  return (
    typeof value === "object"
    && value != null
    && "fields" in value
    && typeof value.fields === "object"
    && value.fields != null
    && !Array.isArray(value.fields)
  );
}

function convertCustomTypeShape(
  shape: ICustomTypeShape,
  customTypes: Record<string, unknown>,
  interfaceRidToApiName: Record<string, string>,
): Ontologies.QueryDataType {
  const { fieldMetadata, fields } = shape;
  return {
    type: "struct",
    fields: Object.keys(fields).map(name => ({
      name,
      fieldType: convertDataType(
        fields[name],
        customTypes,
        interfaceRidToApiName,
        fieldMetadata?.[name]?.required ?? true,
      ),
    })),
  };
}

function convertFunctionCustomType(
  functionId: string,
  customTypes: Record<string, unknown>,
  interfaceRidToApiName: Record<string, string>,
): Ontologies.QueryDataType {
  const customTypeRaw = customTypes[functionId];
  if (customTypeRaw == null) {
    throw new Error(
      `Unknown function custom type: '${functionId}' not found in customTypes`,
    );
  }
  if (!isCustomTypeShape(customTypeRaw)) {
    throw new Error(
      `Invalid custom type structure for '${functionId}': expected a 'fields' property`,
    );
  }
  return convertCustomTypeShape(
    customTypeRaw,
    customTypes,
    interfaceRidToApiName,
  );
}
