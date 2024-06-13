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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { PropertyValueClientToWire } from "@osdk/client.api";

export type StringAggregateOption = "approximateDistinct";
export type NumericAggregateOption =
  | "min"
  | "max"
  | "sum"
  | "avg"
  | "approximateDistinct";

type AGG_FOR_TYPE<T> = number extends T ? NumericAggregateOption
  : string extends T ? StringAggregateOption
  : never;

export type ValidAggregationKeys<
  Q extends ObjectOrInterfaceDefinition,
> = keyof (
  & {
    [
      KK in AggregatableKeys<Q> as `${KK & string}:${AGG_FOR_TYPE<
        PropertyValueClientToWire[Q["properties"][KK]["type"]]
      >}`
    ]?: any;
  }
  & { $count?: any }
);

export type AggregatableKeys<
  Q extends ObjectOrInterfaceDefinition,
> = keyof {
  [P in keyof Q["properties"]]: any;
};
