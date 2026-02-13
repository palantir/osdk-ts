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

import { assertPreview } from "./assertPreview.js";
import { getFoundryToken } from "./getFoundryToken.js";
import type { PreviewOptions } from "./PreviewOptions.js";

/**
 * Creates a `fetch` wrapper that automatically injects a Bearer token
 * Authorization header using the Foundry token from the function runtime.
 *
 * The returned function has the same signature as the global `fetch` and
 * can be passed directly to SDK clients (e.g., OpenAI's `fetch` option).
 * The token is retrieved on each request to ensure it is always fresh.
 *
 * @param options - Must include `{ preview: true }` to acknowledge use of a beta API.
 * @returns A `fetch`-compatible function with Bearer token auth.
 * @throws Error if the Foundry token is not available in the function runtime.
 *
 * @example
 * ```typescript
 * import OpenAI from "openai";
 * import { createFetch, getFoundryToken, getOpenAiBaseUrl } from "@osdk/language-models";
 *
 * const client = new OpenAI({
 *   apiKey: getFoundryToken({ preview: true }),
 *   baseURL: getOpenAiBaseUrl({ preview: true }),
 *   fetch: createFetch({ preview: true }),
 * });
 * ```
 */
export function createFetch(
  options: PreviewOptions,
): typeof globalThis.fetch {
  assertPreview(options);

  return (input, init?) => {
    const token = getFoundryToken({ preview: true });
    const headers = new Headers(init?.headers);
    headers.set("Authorization", `Bearer ${token}`);
    return fetch(input, { ...init, headers });
  };
}
