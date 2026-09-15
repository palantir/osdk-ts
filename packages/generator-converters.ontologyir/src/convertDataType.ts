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

import type * as Ontologies from "@osdk/foundry.ontologies";
import type { IDataType } from "./OntologyIrToFullMetadataConverter.js";

export interface IOptionalDataType extends IDataType {
  type: "optionalType";
  optionalType: { wrappedType: IDataType };
}

export interface ISetDataType extends IDataType {
  type: "set";
  set: { elementsType: IDataType };
}

export interface IObjectSetDataType extends IDataType {
  type: "objectSet";
  objectSet: { objectTypeId: string };
}

export interface IListDataType extends IDataType {
  type: "list";
  list: { elementsType: IDataType };
}

export interface IMapDataType extends IDataType {
  type: "map";
  map: { keysType: IDataType; valuesType: IDataType };
}

export interface IFunctionCustomDataType extends IDataType {
  type: "functionCustomType";
  functionCustomType: string;
}

export interface IObjectDataType extends IDataType {
  type: "object";
  object: { objectTypeId: string };
}

export interface IInterfaceObjectSetDataType extends IDataType {
  type: "interfaceObjectSet";
  interfaceObjectSet: { interfaceTypeRid: string };
}

export interface IInterfaceDataType extends IDataType {
  type: "interface";
  interface: { interfaceTypeRid: string };
}

export interface IAnonymousCustomDataType extends IDataType {
  type: "anonymousCustomType";
  anonymousCustomType: {
    fields: Record<string, IDataType>;
  };
}

interface IUnionDataType extends IDataType {
  type: "union";
  union: { allowedTypes: IDataType[] };
}

interface IRangeDataType {
  type: "integer" | "double" | "timestamp" | "date";
}

interface IBucketKeyDataType {
  type:
    | "double"
    | "integer"
    | "date"
    | "timestamp"
    | "range"
    | "string"
    | "boolean";
  range?: IRangeDataType;
}

interface IBucketValueDataType {
  type: "double" | "timestamp" | "date";
}

interface ISingleBucketDataType {
  keyType: IBucketKeyDataType;
  valueType: IBucketValueDataType;
}

interface ITwoDimensionalAggregationDataType extends IDataType {
  type: "twoDimensionalAggregation";
  twoDimensionalAggregation: { bucketType: ISingleBucketDataType };
}

interface IThreeDimensionalAggregationDataType extends IDataType {
  type: "threeDimensionalAggregation";
  threeDimensionalAggregation: {
    nestedBucketType: {
      keyType: IBucketKeyDataType;
      subBucketType: ISingleBucketDataType;
    };
  };
}

function isInjectedRuntimeDataType(dataType: IDataType): boolean {
  return dataType.type === "client" || dataType.type === "durableContext";
}

function isInjectedRuntimeContext(dataType: IDataType): boolean {
  if (dataType.type !== "anonymousCustomType") {
    return false;
  }

  const fields = (dataType as IAnonymousCustomDataType).anonymousCustomType
    ?.fields;
  const fieldTypes = fields != null ? Object.values(fields) : [];

  return fieldTypes.length > 0
    && fieldTypes.every(isInjectedRuntimeDataType);
}

export function isInjectedRuntimeInput(dataType: IDataType): boolean {
  return isInjectedRuntimeDataType(dataType)
    || isInjectedRuntimeContext(dataType);
}

export function convertDataType(
  dataType: IDataType,
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
    case "optionalType": {
      const optionalData = dataType as IOptionalDataType;
      return {
        type: "union",
        unionTypes: [
          convertDataType(
            optionalData.optionalType.wrappedType,
            customTypes,
            interfaceRidToApiName,
          ),
          { type: "null" },
        ],
      };
    }
    case "set": {
      const setData = dataType as ISetDataType;
      return {
        type: "set",
        subType: convertDataType(
          setData.set.elementsType,
          customTypes,
          interfaceRidToApiName,
        ),
      };
    }
    case "objectSet": {
      const objectSetData = dataType as IObjectSetDataType;
      return {
        type: "objectSet",
        objectApiName: objectSetData.objectSet.objectTypeId,
        objectTypeApiName: objectSetData.objectSet.objectTypeId,
      };
    }
    case "list": {
      const listData = dataType as IListDataType;
      return {
        type: "array",
        subType: convertDataType(
          listData.list.elementsType,
          customTypes,
          interfaceRidToApiName,
        ),
      };
    }
    case "map": {
      const mapData = dataType as IMapDataType;
      // `entrySet` is the only key/value container in QueryDataType, and it names its
      // members in the singular.
      return {
        type: "entrySet",
        keyType: convertDataType(
          mapData.map.keysType,
          customTypes,
          interfaceRidToApiName,
        ),
        valueType: convertDataType(
          mapData.map.valuesType,
          customTypes,
          interfaceRidToApiName,
        ),
      };
    }
    case "functionCustomType": {
      const customTypeData = dataType as IFunctionCustomDataType;
      return convertFunctionCustomType(
        customTypeData.functionCustomType,
        customTypes,
      );
    }
    case "anonymousCustomType": {
      const anonymousData = dataType as IAnonymousCustomDataType;
      return convertCustomTypeShape(
        anonymousData.anonymousCustomType,
        customTypes,
      );
    }
    case "union": {
      const unionData = dataType as IUnionDataType;
      return {
        type: "union",
        unionTypes: unionData.union.allowedTypes.map(allowedType =>
          convertDataType(
            allowedType,
            customTypes,
            interfaceRidToApiName,
          )
        ),
      };
    }
    case "twoDimensionalAggregation": {
      const aggregationData = dataType as ITwoDimensionalAggregationDataType;
      return {
        type: "twoDimensionalAggregation",
        ...convertSingleBucketType(
          aggregationData.twoDimensionalAggregation.bucketType,
        ),
      };
    }
    case "threeDimensionalAggregation": {
      const aggregationData = dataType as IThreeDimensionalAggregationDataType;
      const { keyType, subBucketType } =
        aggregationData.threeDimensionalAggregation.nestedBucketType;
      return {
        type: "threeDimensionalAggregation",
        keyType: convertBucketKeyType(keyType),
        valueType: convertSingleBucketType(subBucketType),
      };
    }
    case "object": {
      const objectData = dataType as IObjectDataType;
      return {
        type: "object",
        objectApiName: objectData.object.objectTypeId,
        objectTypeApiName: objectData.object.objectTypeId,
      };
    }
    case "interface": {
      const interfaceData = dataType as IInterfaceDataType;
      return {
        type: "interfaceObject",
        interfaceTypeApiName:
          interfaceRidToApiName[interfaceData.interface.interfaceTypeRid],
      };
    }
    case "interfaceObjectSet": {
      const interfaceData = dataType as IInterfaceObjectSetDataType;
      return {
        type: "interfaceObjectSet",
        interfaceTypeApiName: interfaceRidToApiName[
          interfaceData.interfaceObjectSet.interfaceTypeRid
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
    default:
      throw new Error(`Unsupported data type: ${dataType.type}`);
  }
}

function convertRangeType(
  rangeType: IRangeDataType,
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
  keyType: IBucketKeyDataType,
): Ontologies.QueryAggregationKeyType {
  if (keyType.type === "range") {
    if (keyType.range == null) {
      throw new Error("Range bucket key is missing its range type");
    }
    return {
      type: "range",
      subType: convertRangeType(keyType.range),
    };
  }

  return { type: keyType.type };
}

function convertBucketValueType(
  valueType: IBucketValueDataType,
): Ontologies.QueryAggregationValueType {
  return { type: valueType.type };
}

function convertSingleBucketType(
  bucketType: ISingleBucketDataType,
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
  fields: Record<string, IDataType>;
}

function isCustomTypeShape(value: unknown): value is ICustomTypeShape {
  return (
    typeof value === "object"
    && value != null
    && "fields" in value
    && typeof (value as Record<string, unknown>).fields === "object"
  );
}

function convertCustomTypeShape(
  shape: ICustomTypeShape,
  customTypes: Record<string, unknown>,
): Ontologies.QueryDataType {
  const { fieldMetadata, fields } = shape;
  return {
    type: "struct",
    fields: Object.keys(fields).map(name => ({
      name,
      fieldType: convertDataType(
        fields[name],
        customTypes,
        {},
        fieldMetadata?.[name]?.required ?? true,
      ),
    })),
  };
}

function convertFunctionCustomType(
  functionId: string,
  customTypes: Record<string, unknown>,
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
  return convertCustomTypeShape(customTypeRaw, customTypes);
}
