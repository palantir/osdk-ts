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
  BaseWithPropAggregations,
  DatetimeWithPropAggregateOption,
  DistinctWithPropAggregateOption,
  NumericWithPropAggregateOption,
  ValidCollectPropertyKeysForSpecialTypes,
} from "../derivedProperties/WithPropertiesAggregationOptions.js";
import type {
  GetWirePropertyValueFromClient,
} from "../mapping/PropertyValueMapping.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { WirePropertyTypes } from "../ontology/WirePropertyTypes.js";

export type BaseAggregateOptions = "approximateDistinct" | "exactDistinct";

export type MinMaxAggregateOption = "min" | "max";

export type DatetimeAggregateOption =
  | MinMaxAggregateOption
  | BaseAggregateOptions;

export type NumericAggregateOption =
  | "sum"
  | "avg"
  | "approximateDistinct"
  | "exactDistinct"
  | MinMaxAggregateOption;

type AGG_FOR_TYPE<WIRE_TYPE extends WirePropertyTypes> = number extends
  GetWirePropertyValueFromClient<WIRE_TYPE> ? NumericAggregateOption
  : WIRE_TYPE extends "datetime" | "timestamp" ? DatetimeAggregateOption
  : BaseAggregateOptions;

type WITH_PROPERTIES_AGG_FOR_TYPE<WIRE_TYPE extends WirePropertyTypes> =
  number extends GetWirePropertyValueFromClient<WIRE_TYPE>
    ? NumericWithPropAggregateOption
    : WIRE_TYPE extends "datetime" | "timestamp"
      ? DatetimeWithPropAggregateOption
    : WIRE_TYPE extends "string" ? BaseWithPropAggregations
    : WITH_PROPERTIES_AGG_FOR_SPECIAL_WIRE_TYPE<WIRE_TYPE>;

type WITH_PROPERTIES_AGG_FOR_SPECIAL_WIRE_TYPE<
  WIRE_TYPE extends WirePropertyTypes,
> = WIRE_TYPE extends ValidCollectPropertyKeysForSpecialTypes
  ? BaseWithPropAggregations
  : DistinctWithPropAggregateOption;

export type ValidAggregationKeys<
  Q extends ObjectOrInterfaceDefinition,
  R extends "aggregate" | "withPropertiesAggregate" = "aggregate",
> = keyof (
  & {
    [
      KK in AggregatableKeys<Q> as `${KK & string}:${R extends "aggregate"
        ? AGG_FOR_TYPE<
          CompileTimeMetadata<Q>["properties"][KK]["type"]
        >
        : WITH_PROPERTIES_AGG_FOR_TYPE<
          CompileTimeMetadata<Q>["properties"][KK]["type"]
        >}`
    ]?: any;
  }
  & { $count?: any }
);

export type AggregatableKeys<
  Q extends ObjectOrInterfaceDefinition,
> = keyof {
  [P in PropertyKeys<Q>]: any;
};
