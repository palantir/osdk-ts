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

import type { Changes } from "./Changes.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Entry } from "./Layer.js";

export interface BatchContext {
  changes: Changes;
  createLayerIfNeeded: () => void;
  optimisticWrite: boolean;

  write: <K extends KnownCacheKey>(
    k: K,
    v: Entry<K>["value"],
    status: Entry<K>["status"],
  ) => Entry<K>;

  read: <K extends KnownCacheKey>(
    k: K,
  ) => Entry<K> | undefined;

  delete: <K extends KnownCacheKey>(
    k: K,
    status: Entry<K>["status"],
  ) => Entry<K>;
}
