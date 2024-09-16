import {
  AllValueTypes as OG_AllValueTypes,
  AttachmentType as OG_AttachmentType,
  BaseType as OG_BaseType,
  BooleanType as OG_BooleanType,
  ByteType as OG_ByteType,
  DateType as OG_DateType,
  DecimalType as OG_DecimalType,
  DoubleType as OG_DoubleType,
  FloatType as OG_FloatType,
  GeoPointType as OG_GeoPointType,
  GeoShapeType as OG_GeoShapeType,
  IntegerType as OG_IntegerType,
  LongType as OG_LongType,
  ObjectType as OG_ObjectType,
  ObjectTypeProperties as OG_ObjectTypeProperties,
  OntologyType as OG_OntologyType,
  QueryBucketKeyType as OG_QueryBucketKeyType,
  QueryBucketRangeableType as OG_QueryBucketRangeableType,
  QueryBucketValueType as OG_QueryBucketValueType,
  ShortType as OG_ShortType,
  StringType as OG_StringType,
  StructField as OG_StructField,
  StructType as OG_StructType,
  TimestampType as OG_TimestampType,
} from '@osdk/legacy-client';
import { OntologyObject } from './OntologyObject.js';

/** @deprecated submodule imports aren't public api **/
export type BaseType = OG_BaseType;

/** @deprecated submodule imports aren't public api **/
export type StringType = OG_StringType;

/** @deprecated submodule imports aren't public api **/
export type IntegerType = OG_IntegerType;

/** @deprecated submodule imports aren't public api **/
export type DateType = OG_DateType;

/** @deprecated submodule imports aren't public api **/
export type BooleanType = OG_BooleanType;

/** @deprecated submodule imports aren't public api **/
export type ByteType = OG_ByteType;

/** @deprecated submodule imports aren't public api **/
export type DecimalType = OG_DecimalType;

/** @deprecated submodule imports aren't public api **/
export type FloatType = OG_FloatType;

/** @deprecated submodule imports aren't public api **/
export type TimestampType = OG_TimestampType;

/** @deprecated submodule imports aren't public api **/
export type ShortType = OG_ShortType;

/** @deprecated submodule imports aren't public api **/
export type LongType = OG_LongType;

/** @deprecated submodule imports aren't public api **/
export type DoubleType = OG_DoubleType;

/** @deprecated submodule imports aren't public api **/
export type GeoPointType = OG_GeoPointType;

/** @deprecated submodule imports aren't public api **/
export type GeoShapeType = OG_GeoShapeType;

/** @deprecated submodule imports aren't public api **/
export type AttachmentType = OG_AttachmentType;

/** @deprecated submodule imports aren't public api **/
export type ObjectType = OG_ObjectType;

/** @deprecated submodule imports aren't public api **/
export type StructField = OG_StructField;

/** @deprecated submodule imports aren't public api **/
export type QueryBucketRangeableType = OG_QueryBucketRangeableType;

/** @deprecated submodule imports aren't public api **/
export type QueryBucketKeyType = OG_QueryBucketKeyType;

/** @deprecated submodule imports aren't public api **/
export type QueryBucketValueType = OG_QueryBucketValueType;

/** @deprecated submodule imports aren't public api **/
export type AllValueTypes = OG_AllValueTypes;

/** @deprecated submodule imports aren't public api **/
export type OntologyType = OG_OntologyType;

/** @deprecated submodule imports aren't public api **/
export type ObjectTypeProperties = OG_ObjectTypeProperties;

/** @deprecated submodule imports aren't public api **/
export type StructType = OG_StructType;

import {
  ArrayType as OG_ArrayType,
  SetType as OG_SetType,
  TimeSeriesType as OG_TimeSeriesType,
} from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type TimeSeriesType<T extends BaseType> = OG_TimeSeriesType<T>;

/** @deprecated submodule imports aren't public api **/
export type ArrayType<T extends BaseType> = OG_ArrayType<T>;

/** @deprecated submodule imports aren't public api **/
export type SetType<T extends BaseType> = OG_SetType<T>;

import { Property as OG_Property } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type Property<TType extends OntologyType = OntologyType> = OG_Property<TType>;

import { BaseObjectType as OG_BaseObjectType } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type BaseObjectType<TOntologyObject extends OntologyObject = OntologyObject> =
  OG_BaseObjectType<TOntologyObject>;

import { ObjectSetType as OG_ObjectSetType } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type ObjectSetType<T extends ObjectType> = OG_ObjectSetType<T>;

import { RangeType as OG_RangeType } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type RangeType<T extends QueryBucketRangeableType> = OG_RangeType<T>;

import { TwoDimensionalAggregationType as OG_TwoDimensionalAggregationType } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type TwoDimensionalAggregationType<
  TGroupKey extends QueryBucketKeyType,
  TValue extends QueryBucketValueType,
> = OG_TwoDimensionalAggregationType<TGroupKey, TValue>;

import { ThreeDimensionalAggregationType as OG_ThreeDimensionalAggregationType } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type ThreeDimensionalAggregationType<
  TGroupKey extends QueryBucketKeyType,
  TSegmentKey extends QueryBucketKeyType,
  TValue extends QueryBucketValueType,
> = OG_ThreeDimensionalAggregationType<TGroupKey, TSegmentKey, TValue>;
