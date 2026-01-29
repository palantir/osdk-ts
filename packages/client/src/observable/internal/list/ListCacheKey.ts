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

import type { CollectionStorageData } from "../base-list/BaseCollectionQuery.js";
import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import type { PivotInfo } from "../PivotCanonicalizer.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { ListQuery } from "./ListQuery.js";

// Index constants for accessing otherKeys array elements
export const TYPE_IDX = 0;
export const API_NAME_IDX = 1;
export const WHERE_IDX = 2;
export const ORDER_BY_IDX = 3;
export const RDP_IDX = 4;
export const INTERSECT_IDX = 5;
export const PIVOT_IDX = 6;
export const RIDS_IDX = 7;

export interface ListStorageData extends CollectionStorageData {}

export interface ListCacheKey extends
  CacheKey<
    "list",
    ListStorageData,
    ListQuery,
    [
      type: "object" | "interface",
      apiName: string,
      whereClause: Canonical<SimpleWhereClause>,
      orderByClause: Canonical<Record<string, "asc" | "desc" | undefined>>,
      rdpConfig?: Canonical<Rdp> | undefined,
      intersectWith?:
        | Canonical<Array<Canonical<SimpleWhereClause>>>
        | undefined,
      pivotInfo?: Canonical<PivotInfo> | undefined,
      rids?: Canonical<string[]> | undefined,
    ]
  >
{
}
