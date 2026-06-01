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

/**
 * Applies a saved visibility+ordering state onto a base definitions array.
 *
 * `savedState` is an ordered array of `{ id, isVisible }` that carries both display order and
 * visibility in a single field, matching the shape of the OSDK `onColumnVisibilityChanged` /
 * `onFilterVisibilityChange` callbacks.
 *
 * When `savedState` is `undefined`, the base definitions are returned as-is. When present,
 * definitions are reordered to match the saved state, with visibility applied. Definitions not
 * present in the saved state are appended at the end with their original values.
 */
export function applyVisibilityState<T extends { isVisible?: boolean }>(
  baseDefs: readonly T[],
  savedState: ReadonlyArray<{ id: string; isVisible: boolean }> | undefined,
  getId: (def: T) => string,
  applyOverrides?: (def: T) => T,
): Array<T & { isVisible: boolean }> {
  if (savedState == null) {
    return baseDefs.map((def) => {
      const base = applyOverrides != null ? applyOverrides(def) : def;
      return { ...base, isVisible: base.isVisible ?? true };
    });
  }

  const defMap = new Map(baseDefs.map((def) => [getId(def), def]));
  const seen = new Set<string>();
  const result: Array<T & { isVisible: boolean }> = [];

  for (const { id, isVisible } of savedState) {
    const def = defMap.get(id);
    if (def != null) {
      seen.add(id);
      const base = applyOverrides != null ? applyOverrides(def) : def;
      result.push({ ...base, isVisible });
    }
  }

  for (const def of baseDefs) {
    if (!seen.has(getId(def))) {
      const base = applyOverrides != null ? applyOverrides(def) : def;
      result.push({ ...base, isVisible: base.isVisible ?? true });
    }
  }

  return result;
}
