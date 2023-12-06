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

import { createFetchHeaderMutator } from "@osdk/shared.net";
import { consola } from "consola";

export function createFetch(
  tokenProvider: () => Promise<string> | string,
  fetchFn: typeof fetch = fetch,
) {
  return createFetchHeaderMutator(
    createDebugLoggingFetch(fetchFn),
    async (headers) => {
      const token = await tokenProvider();
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Fetch-User-Agent", "");
      return headers;
    },
  );
}

function createDebugLoggingFetch(fetchFn: typeof fetch = fetch): typeof fetch {
  return function debugLoggingFetch(
    input: RequestInfo | URL,
    init?: RequestInit,
  ) {
    if (typeof input === "string" || input instanceof URL) {
      consola.debug(`${init?.method ?? "GET"}: ${input.toString().trim()}`);
    } else {
      consola.debug(`${input.method ?? "GET"}: ${input.url.toString().trim()}`);
    }

    return fetchFn(input, init).then((a) => {
      consola.debug("Finished fetch");
      return a;
    });
  };
}
