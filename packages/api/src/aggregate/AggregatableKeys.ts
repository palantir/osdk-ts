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

import type { ValidAggregationKeysForWithProps } from "../derivedProperties/DerivedProperty.js";
import type {
  GetWirePropertyValueFromClient,
} from "../mapping/PropertyValueMapping.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
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

export type ValidAggregationKeysPlus<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> = keyof (
  & {
    [
      KK in PropertyKeys<Q> as `${KK}:${AGG_FOR_TYPE<
        CompileTimeMetadata<Q>["properties"][KK]["type"]
      >}`
    ]?: any;
  }
  & {
    [
      KK in keyof RDPs as `${KK & string}:${AGG_FOR_TYPE<
        SimplePropertyDef.ToPropertyDef<RDPs[KK]>["type"]
      >}`
    ]?: any;
  }
  & { $count?: any }
);

export type ValidAggregationKeys<
  Q extends ObjectOrInterfaceDefinition,
  R extends "aggregate" | "withPropertiesAggregate" = "aggregate",
  RDPs extends Record<string, SimplePropertyDef> = {},
> = R extends "aggregate" ? ValidAggregationKeysPlus<Q, RDPs>
  : ValidAggregationKeysForWithProps<Q, RDPs>;

export type AggregatableKeys<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = keyof {
  [P in PropertyKeys<Q> | keyof RDPs]: any;
};
