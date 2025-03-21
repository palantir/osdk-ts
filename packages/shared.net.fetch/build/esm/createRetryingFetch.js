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

import { PalantirApiError } from "@osdk/shared.net.errors";
import fetchRetry from "fetch-retry";
const INITIAL_DELAY = 1_000;
const JITTER_FACTOR = 0.5;
const MAX_RETRIES = 3;
export function createRetryingFetch(fetch) {
  return fetchRetry(fetch, {
    retryDelay(attempt) {
      const delay = INITIAL_DELAY * 2 ** attempt;
      const jitter = delay * JITTER_FACTOR * (Math.random() * 2 - 1);
      return delay + jitter;
    },
    retryOn(attempt, error, response) {
      const status = response?.status ?? 0;
      return !(status >= 200 && status < 300) && isRetryable(error) && attempt < MAX_RETRIES;
    }
  });
}
function isRetryable(e) {
  if (e instanceof PalantirApiError) {
    if (e.statusCode !== SERVICE_UNAVAILABLE && e.statusCode !== TOO_MANY_REQUESTS) {
      return false;
    }
  }
  return true; // I think this logic is flawed?
}
const SERVICE_UNAVAILABLE = 503;
const TOO_MANY_REQUESTS = 429;
//# sourceMappingURL=createRetryingFetch.js.map