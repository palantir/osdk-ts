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

import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Status } from "../../ObservableClient/common.js";
import { type ObjectCacheKey } from "../object/ObjectCacheKey.js";

/**
 * Abstract base for ListQuery and SpecificLinkQuery.
 * - Stores object references, not duplicates
 * - Implements shared pagination and reference counting
 * - Template method pattern for collection operations
 */
export interface CollectionStorageData {
  data: ObjectCacheKey[];
  totalCount?: string;
}

/**
 * Base interface for collection-based payloads (lists and links)
 * Contains the common properties shared by all collection payload types
 */
export interface BaseCollectionPayload {
  /**
   * The resolved collection of objects, or undefined if no data has been loaded yet
   */
  resolvedList: Array<ObjectHolder | InterfaceHolder> | undefined;

  /**
   * Whether the data is from an optimistic update
   */
  isOptimistic: boolean;

  /**
   * Function to fetch more items when available
   */
  fetchMore: () => Promise<void>;

  /**
   * Whether there are more items available to fetch
   */
  hasMore: boolean;

  /**
   * Current loading status
   */
  status: Status;

  /**
   * Timestamp of when the data was last updated
   */
  lastUpdated: number;

  totalCount?: string;
}

/**
 * Common parameters available for constructing a collection payload
 */
export interface CollectionConnectableParams {
  /**
   * Array of resolved objects, or undefined if no data has been loaded yet
   */
  resolvedData: any[] | undefined;

  /**
   * Whether the data is from an optimistic update
   */
  isOptimistic: boolean;

  /**
   * Current loading status
   */
  status: Status;

  /**
   * Timestamp of the last update
   */
  lastUpdated: number;

  totalCount?: string;
}
