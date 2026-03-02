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
import type { Rdp } from "../RdpCanonicalizer.js";
import type { ObjectSetQuery } from "./ObjectSetQuery.js";

export interface ObjectSetStorageData extends CollectionStorageData {}

export interface ObjectSetOperations {
  where?: Canonical<any>;
  withProperties?: Canonical<Rdp>;
  union?: string[];
  intersect?: string[];
  subtract?: string[];
  pivotTo?: string;
  orderBy?: Canonical<Record<string, "asc" | "desc" | undefined>>;
  pageSize?: number;
}

export interface ObjectSetCacheKey extends
  CacheKey<
    "objectSet",
    ObjectSetStorageData,
    ObjectSetQuery,
    [
      baseObjectSetWire: string,
      operations: Canonical<ObjectSetOperations>,
    ]
  >
{
}
