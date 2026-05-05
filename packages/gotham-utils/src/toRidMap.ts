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

const EMPTY_MAP: ReadonlyMap<string, never> = new Map();

/**
 * Converts an array of OSDK objects with `$rid` into a `Map<string, T>` keyed
 * by RID, ensuring deduplication. Pure function — consumers should wrap in
 * `useMemo` for React usage.
 *
 * The type constraint ensures only objects with `$rid` are accepted (i.e.,
 * loaded via `rids` option or from shapes).
 *
 * @example
 * const { data } = useOsdkObjects(MyType, { rids });
 * const objectByRid = useMemo(() => toRidMap(data), [data]);
 */
export function toRidMap<T extends { $rid: string }>(data: readonly T[] | undefined): ReadonlyMap<string, T> {
  if (data == null || data.length === 0) {
    return EMPTY_MAP;
  }
  const map = new Map<string, T>();
  for (const obj of data) {
    map.set(obj.$rid, obj);
  }
  return map;
}
