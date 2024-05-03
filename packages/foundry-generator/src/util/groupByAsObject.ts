/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export function groupByAsObject<T, K extends keyof T>(
  items: Iterable<T>,
  key: K,
): Record<T[K] extends string ? T[K] : never, T[] | undefined> {
  const ret: Record<string, T[]> = {};
  for (const item of items) {
    (ret[item[key] as string] ??= []).push(item);
  }
  return ret;
}
