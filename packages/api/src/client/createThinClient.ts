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

import type { OntologyDefinition } from "../ontology";
import {
  createFetchAsJson,
  createFetchHeaderMutator,
  createFetchOrThrow,
  createRetryingFetch,
} from "../util";
import type { ThinClient } from "./ThinClient";

/**
 * The goal of the thin client is to provide a way to tree shake as much as possible.
 */

export function createThinClient<T extends OntologyDefinition<any>>(
  ontology: T,
  stack: string,
  tokenProvider: () => string,
  fetchFn: typeof globalThis.fetch = fetch,
): ThinClient<T> {
  const retryingFetchWithAuthOrThrow = createFetchHeaderMutator(
    createRetryingFetch(createFetchOrThrow(fetchFn)),
    async (headers) => {
      const token = await tokenProvider();
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Fetch-User-Agent", ontology.metadata.userAgent);
      return headers;
    },
  );

  return {
    ontology,
    stack,
    fetch: retryingFetchWithAuthOrThrow,
    fetchJson: createFetchAsJson(retryingFetchWithAuthOrThrow),
  };
}
