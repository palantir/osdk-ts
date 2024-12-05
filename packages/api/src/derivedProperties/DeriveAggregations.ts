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

import type { AggregatableKeys } from "../aggregate/AggregatableKeys.js";
import type { PropertyValueClientToWire } from "../mapping/PropertyValueMapping.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";

type BaseAggregateOption =
  | "collectToSet"
  | "collectToList"
  | "approximateDistinct"
  | "exactDistinct";

/* @internal */
export type StringAggregateOption = BaseAggregateOption;
/* @internal */
export type NumericAggregateOption =
  | BaseAggregateOption
  | "min"
  | "max"
  | "sum"
  | "avg";

type AGG_FOR_TYPE<T> = number extends T ? NumericAggregateOption
  : string extends T ? StringAggregateOption
  : never;

/* @internal */
export type ValidDeriveAggregationKeys<
  Q extends ObjectOrInterfaceDefinition,
> = keyof (
  & {
    [
      KK in AggregatableKeys<Q> as `${KK & string}:${AGG_FOR_TYPE<
        PropertyValueClientToWire[
          CompileTimeMetadata<Q>["properties"][KK]["type"]
        ]
      >}`
    ]?: any;
  }
  & { $count?: any }
);
