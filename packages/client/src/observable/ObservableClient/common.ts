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
  InterfaceDefinition,
  ObjectTypeDefinition,
  PropertyKeys,
} from "@osdk/api";

/**
 * Represents the current state of an observation.
 *
 * - init: Initial state before any data fetch attempt
 * - loading: Request is in progress
 * - loaded: Data successfully retrieved
 * - error: Request failed
 */
export type Status = "init" | "loading" | "loaded" | "error";

/**
 * Standard observer pattern interface for reactive data flow.
 *
 * @template T Type of data being observed
 *
 * Callbacks:
 * - next: Called with updated values when data changes
 * - error: Called when an error occurs
 * - complete: Called when observation completes (rarely used)
 */
export interface Observer<T> {
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}

/**
 * Common options shared by all observation methods.
 *
 * @property dedupeInterval - Time in milliseconds to deduplicate identical emissions
 *   Used to prevent rapid UI updates when multiple changes occur
 */
export interface CommonObserveOptions {
  dedupeInterval?: number;
}

/**
 * Options for object observation.
 *
 * @property mode - Data fetch strategy:
 *   - offline: Use only cached data, no network request
 *   - force: Always fetch from server, ignore cache
 *   - undefined (default): Use cache if available, fetch if missing
 */
export interface ObserveOptions {
  mode?: "offline" | "force";
}

/**
 * Specifies sort order for collection queries.
 *
 * @template Q Object or interface type whose properties can be sorted
 *
 * Values:
 * - "asc": Sort in ascending order
 * - "desc": Sort in descending order
 * - undefined: Don't sort by this property
 *
 * Example: `{ name: "asc", created: "desc" }`
 */
export type OrderBy<Q extends ObjectTypeDefinition | InterfaceDefinition> = {
  [K in PropertyKeys<Q>]?: "asc" | "desc" | undefined;
};

/**
 * Defines how data should be handled during invalidation.
 *
 * Values:
 * - "in-place": Update data without resetting the collection
 * - "wait": Wait for the server response before updating
 * - "reset": Clear existing data and refetch entirely
 */
export type InvalidationMode = "in-place" | "wait" | "reset";
