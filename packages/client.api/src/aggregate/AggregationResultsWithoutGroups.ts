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
import type { AggregationClause } from "@osdk/client.api";
import type { OsdkObjectPropertyType } from "../Definitions.js";
import type { StringArrayToUnion } from "../util/StringArrayToUnion.js";

type SubselectKeys<AC extends AggregationClause<any>, P extends keyof AC> =
  AC[P] extends readonly string[] | string ? P : never;

export type AggregationResultsWithoutGroups<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  AC extends AggregationClause<Q>,
> = {
  [P in keyof Q["properties"] as SubselectKeys<AC, P>]: AC[P] extends
    readonly string[] | string ? {
      [Z in StringArrayToUnion<AC[P]>]: Z extends "approximateDistinct" ? number
        : OsdkObjectPropertyType<Q["properties"][P]>;
    }
    : never;
};

export type AggregationCountResult<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  A extends AggregationClause<Q>,
> = "$count" extends keyof A ? { $count: number } : {};
