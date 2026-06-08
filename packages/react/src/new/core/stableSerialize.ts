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

import { getWireObjectSet, isObjectSet } from "@osdk/client";

/**
 * Serialize a value to a stable string for React.useMemo dependency arrays.
 * Uses {@link stableSerializeReplacer} so OSDK `ObjectSet`s normalize to a
 * discriminative wire form before stringification.
 */
export function stableSerialize(value: unknown): string | undefined {
  return JSON.stringify(value, stableSerializeReplacer);
}

/**
 * `JSON.stringify` replacer that normalizes OSDK `ObjectSet` instances to
 * their wire-form definition (via `getWireObjectSet`) wrapped in
 * `{ __objectSet: ... }`, so composed operations (`.where`, `.union`,
 * `.intersect`, ...) participate in the key.
 */
export function stableSerializeReplacer(
  _key: string,
  value: unknown,
): unknown {
  if (value != null && typeof value === "object" && isObjectSet(value)) {
    return { __objectSet: getWireObjectSet(value) };
  }
  return value;
}
