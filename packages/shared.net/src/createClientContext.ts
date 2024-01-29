/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ClientContext } from "./ClientContext.js";
import {
  createFetchAsJson,
  createFetchHeaderMutator,
  createFetchOrThrow,
  createRetryingFetch,
} from "./util/index.js";

/**
 * The goal of the thin client is to provide a way to tree shake as much as possible.
 */
export function createClientContext<
  T extends { metadata: { userAgent: string } },
>(
  ontology: T,
  stack: string,
  tokenProvider: () => Promise<string> | string,
  userAgent: string,
  fetchFn: typeof globalThis.fetch = fetch,
): ClientContext<T> {
  if (stack.length === 0) {
    throw new Error("stack cannot be empty");
  }

  const wireUserAgent = `${userAgent} ${ontology.metadata.userAgent}`;

  const retryingFetchWithAuthOrThrow = createFetchHeaderMutator(
    createRetryingFetch(createFetchOrThrow(fetchFn)),
    async (headers) => {
      const token = await tokenProvider();
      headers.set("Authorization", `Bearer ${token}`);
      headers.set(
        "Fetch-User-Agent",
        wireUserAgent,
      );
      return headers;
    },
  );

  return {
    ontology,
    stack,
    fetch: retryingFetchWithAuthOrThrow,
    fetchJson: createFetchAsJson(retryingFetchWithAuthOrThrow),
    tokenProvider,
  };
}
