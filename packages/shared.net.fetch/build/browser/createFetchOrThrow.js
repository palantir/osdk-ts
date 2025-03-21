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

import { PalantirApiError, UnknownError } from "@osdk/shared.net.errors";

/**
 * Wraps a fetch plugin so that all errors (including when statusCode is not in the 200s) are converted to either PalantirApiError or UnknownError.
 *
 * If the returned promise does not have an error state, you are free to immediately call `.json()` or equivalent.
 *
 * @param fetchFn
 * @returns
 */
export function createFetchOrThrow(fetchFn = fetch) {
  return async function (url, requestInit) {
    let response;
    try {
      response = await fetchFn(url, requestInit);
    } catch (e) {
      throw convertError(e, "A network error occurred");
    }
    if (!response.ok) {
      const fallbackMessage = `Failed to fetch ${response.status} ${response.statusText}`;
      if (response.headers.get("Content-Type") === "text/plain") {
        throw unknownError(await response.text(), response.status);
      }
      if (response.headers.get("Content-Type") === "text/html") {
        throw unknownError(fallbackMessage, response.status, new Error("Received HTML error page: " + (await response.text())));
      }
      let body;
      try {
        body = await response.json();
      } catch (e) {
        throw unknownError(fallbackMessage, response.status, e instanceof Error ? e : undefined);
      }
      throw new PalantirApiError(body?.message ?? fallbackMessage, body?.errorName, body?.errorCode, response.status, body?.errorInstanceId, body?.parameters);
    }
    return response;
  };
}
function convertError(e, msgIfNotError = "An unknown error occurred") {
  if (e instanceof Error) {
    return unknownError(e.message, undefined, e);
  }
  return unknownError(msgIfNotError, undefined);
}
function unknownError(message, statusCode, originalError) {
  return new UnknownError(message, undefined, originalError, statusCode);
}
//# sourceMappingURL=createFetchOrThrow.js.map