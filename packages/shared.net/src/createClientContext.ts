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

import { createSharedClientContext } from "@osdk/shared.client.impl";
import type { SharedClientContext } from "@osdk/shared.client2";

/**
 * The goal of the thin client is to provide a way to tree shake as much as possible.
 */

/**
 * @deprecated use `createSharedClientContext` from `@osdk/shared.client.impl` instead
 */
export function createClientContext(
  baseUrl: string,
  tokenProvider: () => Promise<string> | string,
  userAgent: string,
  fetchFn: typeof globalThis.fetch = fetch,
): SharedClientContext {
  return createSharedClientContext(
    baseUrl,
    async () => await tokenProvider(),
    [
      userAgent,
    ].filter(x => x && x?.length > 0).join(" "),
    fetchFn,
  );
}
