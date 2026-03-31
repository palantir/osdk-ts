/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { ObjectSetQuery } from "./ObjectSetQuery.js";

export interface ObjectSetStorageData extends CollectionStorageData {}

// Index constants for accessing otherKeys array elements
export const BASE_WIRE_IDX = 0;
export const WHERE_IDX = 1;
export const WITH_PROPERTIES_IDX = 2;
export const UNION_IDX = 3;
export const INTERSECT_IDX = 4;
export const SUBTRACT_IDX = 5;
export const PIVOT_TO_IDX = 6;
export const ORDER_BY_IDX = 7;
export const SELECT_IDX = 8;
export const PAGE_SIZE_IDX = 9;
export const LOAD_PROPERTY_SECURITY_IDX = 10;

export interface ObjectSetCacheKey extends
  CacheKey<
    "objectSet",
    ObjectSetStorageData,
    ObjectSetQuery,
    [
      baseObjectSetWire: string,
      where?: Canonical<SimpleWhereClause> | undefined,
      withProperties?: Canonical<Rdp> | undefined,
      union?: Canonical<string[]> | undefined,
      intersect?: Canonical<string[]> | undefined,
      subtract?: Canonical<string[]> | undefined,
      pivotTo?: string | undefined,
      orderBy?:
        | Canonical<Record<string, "asc" | "desc" | undefined>>
        | undefined,
      select?: Canonical<readonly string[]> | undefined,
      pageSize?: number | undefined,
      loadPropertySecurity?: true | undefined,
    ]
  >
{
}
