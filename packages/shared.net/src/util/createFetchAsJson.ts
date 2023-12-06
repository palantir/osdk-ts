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

import type { FetchAsJsonFn } from "../FetchAsJsonFn.js";
import { createFetchHeaderMutator } from "./createFetchHeaderMutator.js";
import { stringifyBody } from "./stringifyBody.js";

/**
 * Wraps a fetch function to set the Content-Type header to application/json, to handle JSON.stringify(),
 * and to parse the response as JSON.
 *
 * @param fetchFn The fetch function to wrap
 * @returns
 */
export function createFetchAsJson(
  fetchFn: typeof fetch = fetch,
): FetchAsJsonFn {
  fetchFn = createFetchHeaderMutator(fetchFn, (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  });

  return async function fetchAsJson(
    url: URL,
    requestInit: Omit<RequestInit, "body"> & { body?: object },
  ) {
    return (
      await fetchFn(url, {
        ...requestInit,
        body: stringifyBody(requestInit.body),
        // TODO fix headers
      })
    ).json();
  };
}
