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

import type {
  ClientMetrics,
  OsdkRequestContext,
} from "./OsdkRequestContext.js";

export const OSDK_REQUEST_CONTEXT_HEADER = "X-OSDK-Request-Context";
const MAX_CONCURRENT_REQUESTS = 150;

export function createConcurrencyTrackingFetch(
  fetchFn: typeof globalThis.fetch,
): typeof globalThis.fetch {
  let activeHttpAttempts = 0;
  const waitingRequests: Array<(() => void) | undefined> = [];
  let waitingRequestHead = 0;

  function acquireSlot():
    | Promise<Pick<ClientMetrics, "queueSize" | "queueWaitTimeMs">>
    | undefined {
    if (activeHttpAttempts < MAX_CONCURRENT_REQUESTS) {
      activeHttpAttempts++;
      return;
    }

    const queuedAt = Date.now();
    const queueSize = waitingRequests.length - waitingRequestHead + 1;
    return new Promise((resolve) =>
      waitingRequests.push(() =>
        resolve({
          queueSize,
          queueWaitTimeMs: Date.now() - queuedAt,
        }),
      ),
    );
  }

  function releaseSlot(): void {
    const nextRequest = waitingRequests[waitingRequestHead];
    if (nextRequest == null) {
      activeHttpAttempts--;
      return;
    }

    waitingRequests[waitingRequestHead] = undefined;
    waitingRequestHead++;
    if (waitingRequestHead === waitingRequests.length) {
      waitingRequests.length = 0;
      waitingRequestHead = 0;
    }
    nextRequest();
  }

  return async function concurrencyTrackingFetch(input, init) {
    let queueSize = 0;
    let queueWaitTimeMs = 0;
    const slotAvailable = acquireSlot();
    if (slotAvailable != null) {
      ({ queueSize, queueWaitTimeMs } = await slotAvailable);
    }

    try {
      const headers = new Headers(
        input instanceof Request ? input.headers : undefined,
      );
      if (init?.headers != null) {
        new Headers(init.headers).forEach((value, name) => {
          headers.set(name, value);
        });
      }

      const clientMetrics: ClientMetrics = {
        concurrency: activeHttpAttempts,
        queueSize,
        queueWaitTimeMs,
      };
      const requestContext: OsdkRequestContext = {
        clientMetrics,
      };
      headers.set(OSDK_REQUEST_CONTEXT_HEADER, JSON.stringify(requestContext));
      return await fetchFn(input, { ...init, headers });
    } finally {
      releaseSlot();
    }
  };
}
