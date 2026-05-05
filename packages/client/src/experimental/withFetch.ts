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

import type { Experiment } from "@osdk/api/unstable";
import type { Client } from "../Client.js";

/**
 * @experimental This feature is experimental and might change in the future.
 *
 * Returns a new {@link Client} whose injected `fetch` is the supplied function.
 * The user-supplied fetch sits at the **base** of the wrap chain — OSDK's auth,
 * retry, and header wrappers still run on top before delegating to it.
 *
 * Use this to apply per-request behavior without mutating the parent client:
 * `keepAlive`, `AbortSignal`, custom headers, etc.
 *
 * @example
 * ```ts
 * const { withFetch } = client(__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch);
 *
 * const ctrl = new AbortController();
 * const scoped = withFetch((url, init) =>
 *   fetch(url, { ...init, signal: ctrl.signal }),
 * );
 * scoped(MyAction).applyAction(args);
 * ctrl.abort();
 * ```
 */
type withFetchFn = (fetchFn: typeof globalThis.fetch) => Client;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch: Experiment<
  "2.13.0",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch",
  { withFetch: withFetchFn }
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch",
  type: "experiment",
  version: "2.13.0",
};
