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
 * `$includeAllBaseObjectProperties` only changes server behavior for interface
 * fetches. For object queries the flag is a no-op, so we drop it before it
 * reaches a cache key or the server. Callers fragment the cache by the
 * returned value, so mapping object queries to `undefined` keeps with-flag
 * and without-flag callers sharing the same entry.
 */
export function gateBaseObjectPropertiesFlag(
  defType: "object" | "interface",
  flag: boolean | undefined,
): true | undefined {
  return defType === "interface" && flag ? true : undefined;
}
