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

import type { PlatformClient } from "@osdk/client";

/**
 * Build a typed `PlatformClient` for tests. `PlatformClient` is structurally
 * `{ baseUrl, fetch, tokenProvider }`; we satisfy that shape directly so
 * tests don't reach for `as unknown as PlatformClient`.
 */
export function mockPlatformClient(args: {
  baseUrl: string;
  fetch: typeof globalThis.fetch;
  token?: string;
}): PlatformClient {
  return {
    baseUrl: args.baseUrl,
    fetch: args.fetch,
    tokenProvider: () => Promise.resolve(args.token ?? "test-token"),
  };
}

/** Throws with a labelled error if `value` is null/undefined. */
export function assertDefined<T>(
  value: T,
  label: string,
): asserts value is NonNullable<T> {
  if (value == null) {
    throw new Error(`${label} was unexpectedly null/undefined`);
  }
}
