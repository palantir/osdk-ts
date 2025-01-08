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
  NumericDeriveAggregateOption,
  StringDeriveAggregateOption,
} from "../derivedProperties/WithPropertyObjectSet.js";
import type {
  GetWirePropertyValueFromClient,
} from "../mapping/PropertyValueMapping.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";

export type StringAggregateOption = "approximateDistinct" | "exactDistinct";
export type NumericAggregateOption =
  | "min"
  | "max"
  | "sum"
  | "avg"
  | "approximateDistinct"
  | "exactDistinct";

type AGG_FOR_TYPE<T, U extends boolean> = number extends T
  ? U extends true ? NumericAggregateOption : NumericDeriveAggregateOption
  : string extends T
    ? U extends true ? StringAggregateOption : StringDeriveAggregateOption
  : never;

export type ValidAggregationKeys<
  Q extends ObjectOrInterfaceDefinition,
  R extends "aggregate" | "withPropertiesAggregate" = "aggregate",
> = keyof (
  & {
    [
      KK in AggregatableKeys<Q> as `${KK & string}:${AGG_FOR_TYPE<
        GetWirePropertyValueFromClient<
          CompileTimeMetadata<Q>["properties"][KK]["type"]
        >,
        R extends "aggregate" ? true : false
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
