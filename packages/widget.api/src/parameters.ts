/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";

import type { AsyncValue } from "./utils/asyncValue.js";

interface ObjectType extends ObjectTypeDefinition {
  internalDoNotUseMetadata?: {
    rid: string;
  };
}

interface InterfaceType extends InterfaceDefinition {
  internalDoNotUseMetadata?: {
    rid: string;
  };
}

export type AllowedObjectSetParameterType = ObjectType | InterfaceType;

/**
 * Map of the name of the type to the corresponding JavaScript type.
 */
type PrimitiveParameterTypes = {
  boolean: boolean;
  /** Formatted as an ISO date string, e.g. YYYY-MM-DD */
  date: string;
  number: number;
  /** Formatted as a Scenario RID */
  scenario: string;
  string: string;
  /** Formatted as an ISO datetime string */
  timestamp: string;
};
type PrimitiveParameterType = keyof PrimitiveParameterTypes;

/**
 * Map of the name of a struct field type to the corresponding JavaScript type. Nested structs and arrays are not
 * supported.
 */
type StructFieldTypes = Pick<
  PrimitiveParameterTypes,
  "boolean" | "date" | "number" | "string" | "timestamp"
>;
type StructParameterFieldType = keyof StructFieldTypes;

/** Map of struct field IDs to their field types. */
type StructFieldTypeMap = Record<string, StructParameterFieldType>;

/** A struct value keyed by field ID. Fields that have no value are omitted. */
export type StructValue<F extends StructFieldTypeMap = StructFieldTypeMap> = {
  [K in keyof F]?: StructFieldTypes[F[K]];
};

export interface AbstractParameterValue<T extends PrimitiveParameterType> {
  type: T;
  value: AsyncValue<PrimitiveParameterTypes[T]>;
}

/** A read-only map tile layer selected by the host. */
export interface MapTileLayerParameterValue {
  type: "mapTileLayer";
  value: AsyncValue<{
    /**
     * The selected tile source ID that can be used in requests to the Tiles Foundry APIs.
     */
    tileSourceId: string;
  }>;
}

export interface ObjectSetParameterValue<
  _T extends AllowedObjectSetParameterType,
> {
  type: "objectSet";
  value: AsyncValue<{
    objectSetRid: string;
  }>;
}

export interface GenericArrayParameterValue<T extends PrimitiveParameterType> {
  type: "array";
  subType: T;
  value: AsyncValue<PrimitiveParameterTypes[T][]>;
}

export interface StructParameterValue<
  F extends StructFieldTypeMap = StructFieldTypeMap,
> {
  type: "struct";
  value: AsyncValue<StructValue<F>>;
}

export interface StructArrayParameterValue<
  F extends StructFieldTypeMap = StructFieldTypeMap,
> {
  type: "array";
  subType: "struct";
  value: AsyncValue<StructValue<F>[]>;
}

/**
 * Wire format of parameter values that will be sent through postMessage events to custom widgets.
 */
export namespace ParameterValue {
  export type String = AbstractParameterValue<"string">;
  export type Number = AbstractParameterValue<"number">;
  export type Boolean = AbstractParameterValue<"boolean">;
  export type Date = AbstractParameterValue<"date">;
  export type Timestamp = AbstractParameterValue<"timestamp">;
  export type Scenario = AbstractParameterValue<"scenario">;
  export type MapTileLayer = MapTileLayerParameterValue;
  export type ObjectSet<
    T extends AllowedObjectSetParameterType = AllowedObjectSetParameterType,
  > = ObjectSetParameterValue<T>;
  export type Struct<F extends StructFieldTypeMap = StructFieldTypeMap> =
    StructParameterValue<F>;

  export type StringArray = GenericArrayParameterValue<"string">;
  export type NumberArray = GenericArrayParameterValue<"number">;
  export type BooleanArray = GenericArrayParameterValue<"boolean">;
  export type DateArray = GenericArrayParameterValue<"date">;
  export type TimestampArray = GenericArrayParameterValue<"timestamp">;
  export type ScenarioArray = GenericArrayParameterValue<"scenario">;
  export type StructArray<F extends StructFieldTypeMap = StructFieldTypeMap> =
    StructArrayParameterValue<F>;
  export type Array =
    | StringArray
    | NumberArray
    | BooleanArray
    | DateArray
    | TimestampArray
    | ScenarioArray
    | StructArray;

  export type Type = ParameterValue["type"];
  export type PrimitiveType = PrimitiveParameterType;
  export type StructFieldType = StructParameterFieldType;
}
export type ParameterValue =
  | ParameterValue.String
  | ParameterValue.Number
  | ParameterValue.Boolean
  | ParameterValue.Date
  | ParameterValue.Timestamp
  | ParameterValue.Scenario
  | ParameterValue.MapTileLayer
  | ParameterValue.ObjectSet
  | ParameterValue.Struct
  | ParameterValue.Array;
