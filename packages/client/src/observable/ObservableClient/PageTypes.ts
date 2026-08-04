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

import type {
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
} from "@osdk/api";

/**
 * Keeps cache entries alive without a subscription. Entries created by
 * `getObjects` or `storeObjects` start at a zero reference count and are
 * collected once the keep-alive window elapses, so callers holding data across
 * turns must retain and later release it.
 */
export interface RetainHandle {
  release: () => void;
}

export interface GetObjectsOptions<T extends ObjectOrInterfaceDefinition> {
  select?: readonly PropertyKeys<T>[];
  $loadPropertySecurityMetadata?: boolean;
  $includeAllBaseObjectProperties?: boolean;
}

export interface GetObjectsResult<T extends ObjectOrInterfaceDefinition> {
  /**
   * Resolved objects in the order the primary keys were supplied. Objects that
   * could not be found are `undefined` in their slot.
   */
  data: Array<Osdk.Instance<T, any, any, any> | undefined>;

  /** Pins the objects written by this call. */
  retain: () => RetainHandle;
}

export interface StoreObjectsOptions<T extends ObjectOrInterfaceDefinition> {
  select?: readonly PropertyKeys<T>[];
  withProperties?: Record<string, unknown>;
  $includeAllBaseObjectProperties?: boolean;
}
