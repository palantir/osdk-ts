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

import pLimit from "p-limit";

export const DEFAULT_MAX_CONCURRENT_REQUESTS = 10;

/**
 * Wraps a fetch function so that no more than `maxConcurrent` requests are
 * in flight at once. Excess requests queue and run as slots free up.
 *
 * Pass `Infinity` to disable throttling (returns the original function).
 */
export function createLimitedFetch(
  fetchFn: typeof globalThis.fetch,
  maxConcurrent: number = DEFAULT_MAX_CONCURRENT_REQUESTS,
): typeof globalThis.fetch {
  if (maxConcurrent === Infinity) {
    return fetchFn;
  }
  if (!Number.isInteger(maxConcurrent) || maxConcurrent < 1) {
    throw new Error(
      `maxConcurrentRequests must be a positive integer or Infinity, got ${maxConcurrent}`,
    );
  }
  const limit = pLimit(maxConcurrent);
  return ((input, init) =>
    limit(() => fetchFn(input, init))) as typeof globalThis.fetch;
}
