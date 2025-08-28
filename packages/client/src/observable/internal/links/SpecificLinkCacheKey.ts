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
import type { CollectionStorageData } from "../BaseCollectionQuery.js";
import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { SpecificLinkQuery } from "./SpecificLinkQuery.js";

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
      sourceObjectType: string,
      sourcePk: PrimaryKeyType<ObjectTypeDefinition>,
      linkName: string,
      whereClause: Canonical<SimpleWhereClause>,
      orderByClause: Canonical<Record<string, "asc" | "desc" | undefined>>,
    ]
  >
{
}
