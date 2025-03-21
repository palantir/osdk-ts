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

/**
 * This isn't performant and should only be used for debug logging!
 * @internal
 */
export function DEBUG_ONLY__cacheKeyToString(x) {
  if (process.env.NODE_ENV !== "production") {
    return `${x.type}CacheKey<${x.otherKeys.map(xx => JSON.stringify(xx)).join(", ")}>`.replaceAll("\"", "'");
  } else {
    throw new Error("not implemented");
  }
}
/**
 * This isn't performant and should only be used for debug logging!
 * @internal
 */
export function DEBUG_ONLY__cacheKeysToString(x) {
  if (process.env.NODE_ENV !== "production") {
    return "\n  - " + x.map(DEBUG_ONLY__cacheKeyToString).join("\n  - ");
  } else {
    throw new Error("not implemented");
  }
}
//# sourceMappingURL=CacheKey.js.map