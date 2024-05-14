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

import type { ClientContext, SharedClientContext } from "./ClientContext.js";
import { PalantirApiError } from "./PalantirApiError.js";
import {
  createFetchHeaderMutator,
  createFetchOrThrow,
  createRetryingFetch,
} from "./util/index.js";

export function createSharedClientContext(
  baseUrl: string,
  tokenProvider: () => Promise<string> | string,
  userAgent: string,
  fetchFn: typeof globalThis.fetch = fetch,
): SharedClientContext {
  return createClientContext(
    { metadata: { userAgent: "" } },
    baseUrl,
    tokenProvider,
    userAgent,
    fetchFn,
  );
}

/**
 * The goal of the thin client is to provide a way to tree shake as much as possible.
 */
export function createClientContext<
  T extends { metadata: { userAgent: string } },
>(
  ontology: T,
  baseUrl: string,
  tokenProvider: () => Promise<string> | string,
  userAgent: string,
  fetchFn: typeof globalThis.fetch = fetch,
): ClientContext<T> {
  if (baseUrl.length === 0) {
    throw new Error("baseUrl cannot be empty");
  }

  const retryingFetchWithAuthOrThrow = createFetchHeaderMutator(
    createRetryingFetch(createFetchOrThrow(fetchFn)),
    async (headers) => {
      const token = await tokenProvider();
      headers.set("Authorization", `Bearer ${token}`);

      headers.set(
        "Fetch-User-Agent",
        [
          headers.get("Fetch-User-Agent"),
          ontology.metadata.userAgent, // only used by legacy-client
          userAgent,
        ].filter(x => x && x?.length > 0).join(" "),
      );
      return headers;
    },
  );

  // because this is async await it preserves stack traces, which the retrying fetch does not
  const fetchWrapper = async (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => {
    try {
      return await retryingFetchWithAuthOrThrow(input, init);
    } catch (e: any) {
      const betterError = (e instanceof PalantirApiError)
        ? new PalantirApiError(
          e.message,
          e.errorName,
          e.errorType,
          e.statusCode,
          e.errorInstanceId,
          e.parameters,
        )
        : new Error("Captured stack trace for error: " + e.message ?? e);

      (betterError as any).cause = e;
      throw betterError;
    }
  };

  return {
    ontology,
    stack: baseUrl,
    baseUrl,
    fetch: fetchWrapper,
    tokenProvider: async () => await tokenProvider(),
  };
}
