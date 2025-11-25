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

import { WeakRefTrie } from "@osdk/client/unstable-do-not-use";

const identityCache = new WeakMap<object, object>();

const trie = new WeakRefTrie<object>((array) => {
  const key = array[0];
  if (typeof key !== "string") {
    throw new Error("stabilizeKey: expected string key");
  }
  return JSON.parse(key);
});

/**
 * Returns a stable reference for the given value.
 * Structurally identical inputs return the same object reference.
 *
 * This is used internally to stabilize options objects for useMemo dependencies,
 * avoiding the need for JSON.stringify on every render.
 */
export function stabilizeKey<T extends object | undefined>(
  value: T,
): T {
  if (value === undefined) return undefined as T;

  const cached = identityCache.get(value);
  if (cached !== undefined) {
    return cached as T;
  }

  const key = JSON.stringify(value);
  const canonical = trie.lookupArray([key]);
  identityCache.set(value, canonical);

  return canonical as T;
}
