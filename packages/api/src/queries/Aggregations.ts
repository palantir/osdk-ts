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

import type {
  DataValueClientToWire,
  DataValueWireToClient,
} from "../mapping/DataValueMapping.js";
import type {
  AggregationKeyTypes,
  AggregationRangeKeyTypes,
  AggregationValueTypes,
} from "../ontology/QueryDefinition.js";

export type Range<T extends AllowedBucketTypes> = {
  startValue?: T;
  endValue: T;
} | {
  startValue: T;
  endValue?: T;
};

export type AllowedBucketTypes = string | number | boolean;
export type AllowedBucketKeyTypes =
  | AllowedBucketTypes
  | Range<AllowedBucketTypes>;

export type TwoDimensionalAggregation<
  T extends AllowedBucketKeyTypes,
  U extends AllowedBucketTypes,
> = { key: T; value: U }[];

export type ThreeDimensionalAggregation<
  T extends AllowedBucketKeyTypes,
  U extends AllowedBucketKeyTypes,
  V extends AllowedBucketTypes,
> = { key: T; groups: { key: U; value: V }[] }[];

export type AggKeyWireToClient<
  T extends AggregationKeyTypes,
  S extends AggregationRangeKeyTypes = never,
> = T extends keyof DataValueWireToClient ? DataValueWireToClient[T]
  : T extends "range"
    ? S extends keyof DataValueWireToClient ? Range<DataValueWireToClient[S]>
    : never
  : never;

export type AggKeyClientToWire<
  T extends AggregationKeyTypes,
  S extends AggregationRangeKeyTypes = never,
> = T extends keyof DataValueClientToWire ? DataValueClientToWire[T]
  : T extends "range"
    ? S extends keyof DataValueClientToWire ? Range<DataValueClientToWire[S]>
    : never
  : never;

export type AggValueWireToClient<T extends AggregationValueTypes> = T extends
  keyof DataValueWireToClient ? DataValueWireToClient[T] : never;

export type AggValueClientToWire<T extends AggregationValueTypes> = T extends
  keyof DataValueClientToWire ? DataValueClientToWire[T] : never;
