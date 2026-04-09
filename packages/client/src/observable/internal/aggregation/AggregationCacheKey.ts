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
  AggregateOpts,
  AggregationsResults,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { AggregationQuery } from "./AggregationQuery.js";

export const TYPE_IDX = 0;
export const API_NAME_IDX = 1;
export const WIRE_OBJECT_SET_IDX = 2;
export const WHERE_IDX = 3;
export const RDP_IDX = 4;
export const INTERSECT_IDX = 5;
export const AGGREGATE_IDX = 6;

export interface AggregationCacheKey extends
  CacheKey<
    "aggregation",
    | AggregationsResults<
      ObjectOrInterfaceDefinition,
      AggregateOpts<ObjectOrInterfaceDefinition>
    >
    | undefined,
    AggregationQuery,
    [
      type: "object" | "interface",
      apiName: string,
      wireObjectSet: string | undefined,
      whereClause: Canonical<SimpleWhereClause>,
      rdpConfig: Canonical<Rdp> | undefined,
      intersectWith: Canonical<Array<Canonical<SimpleWhereClause>>> | undefined,
      aggregateOpts: Canonical<AggregateOpts<ObjectOrInterfaceDefinition>>,
    ]
  >
{
}
