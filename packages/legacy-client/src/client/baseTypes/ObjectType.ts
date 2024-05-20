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

import type { OntologyObject } from "./OntologyObject.js";

export interface BaseType {
  type: string;
}

export interface StringType extends BaseType {
  type: "string";
}

export const StringType = {
  of: (): StringType => ({ type: "string" }),
};

export interface IntegerType extends BaseType {
  type: "integer";
}

export const IntegerType = {
  of: (): IntegerType => ({ type: "integer" }),
};

export interface DateType extends BaseType {
  type: "date";
}

export const DateType = {
  of: (): DateType => ({ type: "date" }),
};

export interface BooleanType extends BaseType {
  type: "boolean";
}

export const BooleanType = {
  of: (): BooleanType => ({ type: "boolean" }),
};

export interface ByteType extends BaseType {
  type: "byte";
}

export const ByteType = {
  of: (): ByteType => ({ type: "byte" }),
};

export interface DecimalType extends BaseType {
  type: "decimal";
}

export const DecimalType = {
  of: (): DecimalType => ({ type: "decimal" }),
};

export interface FloatType extends BaseType {
  type: "float";
}

export const FloatType = {
  of: (): FloatType => ({ type: "float" }),
};

export interface TimeSeriesType<T extends BaseType> extends BaseType {
  type: "timeSeries";
  subType: T;
}

export const TimeSeriesType = {
  of: <T extends BaseType>(subType: T): TimeSeriesType<T> => ({
    type: "timeSeries",
    subType,
  }),
};

export interface TimestampType extends BaseType {
  type: "timestamp";
}

export const TimestampType = {
  of: (): TimestampType => ({ type: "timestamp" }),
};

export interface ShortType extends BaseType {
  type: "short";
}

export const ShortType = {
  of: (): ShortType => ({ type: "short" }),
};

export interface LongType extends BaseType {
  type: "long";
}

export const LongType = {
  of: (): LongType => ({ type: "long" }),
};

export interface DoubleType extends BaseType {
  type: "double";
}

export const DoubleType = {
  of: (): DoubleType => ({ type: "double" }),
};

export interface GeoPointType {
  type: "GeoPoint";
}

export const GeoPointType = {
  of: (): GeoPointType => ({ type: "GeoPoint" }),
};

export interface GeoShapeType {
  type: "GeoShape";
}

export const GeoShapeType = {
  of: (): GeoShapeType => ({ type: "GeoShape" }),
};

export interface AttachmentType {
  type: "attachment";
}

export const AttachmentType = {
  of: (): AttachmentType => ({ type: "attachment" }),
};

export interface StructType extends BaseType {
  type: "struct";
  fields: StructField[];
}

export interface ObjectType extends BaseType {
  type: "object";
  objectTypeApiName: string;
}

export const ObjectType = {
  of: (objectTypeApiName: string): ObjectType => ({
    type: "object",
    objectTypeApiName,
  }),
};

export interface StructField {
  name: string;
  fieldType: QueryValueType;
  required: boolean;
}

export const StructField = {
  of: (
    name: string,
    fieldType: QueryValueType,
    required: boolean,
  ): StructField => ({
    name,
    fieldType,
    required,
  }),
};

export const StructType = {
  of: (fields: StructField[]): StructType => ({ type: "struct", fields }),
};

export interface ArrayType<T extends BaseType> extends BaseType {
  type: "array";
  subType: T;
}
export const ArrayType = {
  of: <T extends BaseType>(subType: T): ArrayType<T> => ({
    type: "array",
    subType,
  }),
};

export interface SetType<T extends BaseType> extends BaseType {
  type: "set";
  subType: T;
}

export const SetType = {
  of: <T extends BaseType>(subType: T): SetType<T> => ({
    type: "set",
    subType,
  }),
};

export interface ObjectSetType<T extends ObjectType> extends BaseType {
  type: "objectSet";
  subType: T;
}

export const ObjectSetType = {
  of: <T extends ObjectType>(subType: T): ObjectSetType<T> => ({
    type: "objectSet",
    subType,
  }),
};

export type QueryBucketRangeableType =
  | TimestampType
  | DateType
  | DoubleType
  | IntegerType;
export type QueryBucketKeyType =
  | StringType
  | BooleanType
  | RangeType<QueryBucketRangeableType>;
export type QueryBucketValueType = DoubleType | TimestampType | DateType;
export interface RangeType<T extends QueryBucketRangeableType> {
  type: "range";
  subType: T;
}

export const RangeType = {
  of: <T extends QueryBucketRangeableType>(subType: T): RangeType<T> => ({
    type: "range",
    subType,
  }),
};

export interface TwoDimensionalAggregationType<
  TGroupKey extends QueryBucketKeyType,
  TValue extends QueryBucketValueType,
> {
  type: "twoDimensionalAggregation";
  groupKeyType: TGroupKey;
  valueType: TValue;
}

export const TwoDimensionalAggregationType = {
  of: <
    TGroupKey extends QueryBucketKeyType,
    TValue extends QueryBucketValueType,
  >(
    groupKeyType: TGroupKey,
    valueType: TValue,
  ): TwoDimensionalAggregationType<TGroupKey, TValue> => ({
    type: "twoDimensionalAggregation",
    groupKeyType,
    valueType,
  }),
};

export interface ThreeDimensionalAggregationType<
  TGroupKey extends QueryBucketKeyType,
  TSegmentKey extends QueryBucketKeyType,
  TValue extends QueryBucketValueType,
> {
  type: "threeDimensionalAggregation";
  groupKeyType: TGroupKey;
  segmentKeyType: TSegmentKey;
  valueType: TValue;
}

export const ThreeDimensionalAggregationType = {
  of: <
    TGroupKey extends QueryBucketKeyType,
    TSegmentKey extends QueryBucketKeyType,
    TValue extends QueryBucketValueType,
  >(
    groupKeyType: TGroupKey,
    segmentKeyType: TSegmentKey,
    valueType: TValue,
  ): ThreeDimensionalAggregationType<TGroupKey, TSegmentKey, TValue> => ({
    type: "threeDimensionalAggregation",
    groupKeyType,
    segmentKeyType,
    valueType,
  }),
};

export type AllValueTypes = QueryValueType | ActionValueType | OntologyType;

export type OntologyType =
  | BooleanType
  | ByteType
  | DateType
  | FloatType
  | TimeSeriesType<OntologyType>
  | TimestampType
  | ShortType
  | DecimalType
  | StringType
  | LongType
  | IntegerType
  | DoubleType
  | GeoPointType
  | GeoShapeType
  | ObjectType
  | ArrayType<OntologyType>
  | AttachmentType;

export type ActionValueType =
  | BooleanType
  | DateType
  | TimestampType
  | StringType
  | LongType
  | IntegerType
  | DoubleType
  | ObjectType
  | ObjectSetType<ObjectType>
  | ArrayType<ActionValueType>
  | AttachmentType;

export type QueryValueType =
  | BooleanType
  | ByteType
  | DateType
  | FloatType
  | TimestampType
  | ShortType
  | DecimalType
  | StringType
  | LongType
  | IntegerType
  | DoubleType
  | GeoPointType
  | GeoShapeType
  | StructType
  | ObjectType
  | ArrayType<QueryValueType>
  | SetType<QueryValueType>
  | AttachmentType
  | ObjectSetType<ObjectType>
  | TwoDimensionalAggregationType<QueryBucketKeyType, QueryBucketValueType>
  | ThreeDimensionalAggregationType<
    QueryBucketKeyType,
    QueryBucketKeyType,
    QueryBucketValueType
  >;
export interface Property<TType extends OntologyType = OntologyType> {
  apiName: string;
  baseType: TType;
  docs: string;
  description: string;
}

export type ObjectTypeProperties = {
  [propertyApiName: string]: any;
};

export type BaseObjectType<
  TOntologyObject extends OntologyObject = OntologyObject,
> = {
  type?: TOntologyObject;
  apiName: string;
  properties: {
    [propertyApiName: string]: Property;
  };
  primaryKey: Property;
};
