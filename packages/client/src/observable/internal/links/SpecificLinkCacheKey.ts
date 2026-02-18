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

import type { ObjectTypeDefinition, PrimaryKeyType } from "@osdk/api";
import type { CollectionStorageData } from "../base-list/BaseCollectionQuery.js";
import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { SpecificLinkQuery } from "./SpecificLinkQuery.js";

// Index constants for accessing otherKeys array elements
export const SOURCE_API_NAME_IDX = 0;
export const SOURCE_TYPE_KIND_IDX = 1;
export const SOURCE_UNDERLYING_OBJECT_TYPE_IDX = 2;
export const SOURCE_PK_IDX = 3;
export const LINK_NAME_IDX = 4;
export const WHERE_CLAUSE_IDX = 5;
export const ORDER_BY_CLAUSE_IDX = 6;

/**
 * Storage data format for link query cache entries, similar to ListStorageData
 */
export interface LinkStorageData extends CollectionStorageData {
}
/**
 * Cache key for a specific link query that uniquely identifies:
 * - The source object type
 * - The source object primary key
 * - The link name
 */

export interface SpecificLinkCacheKey extends
  CacheKey<
    "specificLink",
    LinkStorageData,
    SpecificLinkQuery,
    [
      sourceApiName: string,
      sourceTypeKind: "object" | "interface",
      sourceUnderlyingObjectType: string,
      sourcePk: PrimaryKeyType<ObjectTypeDefinition>,
      linkName: string,
      whereClause: Canonical<SimpleWhereClause>,
      orderByClause: Canonical<Record<string, "asc" | "desc" | undefined>>,
    ]
  >
{
}
