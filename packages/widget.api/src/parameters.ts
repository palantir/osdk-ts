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

export interface ObjectType extends ObjectTypeDefinition {
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
  string: string;
  /** Formatted as an ISO datetime string */
  timestamp: string;
};
type PrimitiveParameterType = keyof PrimitiveParameterTypes;

export interface AbstractParameterValue<T extends PrimitiveParameterType> {
  type: T;
  value: AsyncValue<PrimitiveParameterTypes[T]>;
}

export interface ObjectSetParameterValue<
  T extends AllowedObjectSetParameterType,
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

/**
 * Wire format of parameter values that will be sent through postMessage events to custom widgets.
 */
export namespace ParameterValue {
  export type String = AbstractParameterValue<"string">;
  export type Number = AbstractParameterValue<"number">;
  export type Boolean = AbstractParameterValue<"boolean">;
  export type Date = AbstractParameterValue<"date">;
  export type Timestamp = AbstractParameterValue<"timestamp">;
  export type ObjectSet<
    T extends AllowedObjectSetParameterType = AllowedObjectSetParameterType,
  > = ObjectSetParameterValue<T>;

  export type StringArray = GenericArrayParameterValue<"string">;
  export type NumberArray = GenericArrayParameterValue<"number">;
  export type BooleanArray = GenericArrayParameterValue<"boolean">;
  export type DateArray = GenericArrayParameterValue<"date">;
  export type TimestampArray = GenericArrayParameterValue<"timestamp">;
  export type Array =
    | StringArray
    | NumberArray
    | BooleanArray
    | DateArray
    | TimestampArray;

  export type Type = ParameterValue["type"];
  export type PrimitiveType = PrimitiveParameterType;
}
export type ParameterValue =
  | ParameterValue.String
  | ParameterValue.Number
  | ParameterValue.Boolean
  | ParameterValue.Date
  | ParameterValue.Timestamp
  | ParameterValue.ObjectSet
  | ParameterValue.Array;
