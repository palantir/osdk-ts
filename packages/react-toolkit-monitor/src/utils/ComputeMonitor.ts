/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Logger } from "@osdk/api";
import type { ComputeStore } from "../store/ComputeStore.js";
import {
  hashPayload,
  stringifyPayload,
  truncatePayload,
} from "./computePayload.js";
import { createMonitorLogger } from "./logger.js";

const RID_PLACEHOLDER = "ri.compute.tools.rid.placeholder";
const COMPUTE_COST_ENDPOINTS = [
  `/api/v2/ontologies/${RID_PLACEHOLDER}/objectSets/loadObjects`,
  `/api/v2/ontologies/${RID_PLACEHOLDER}/objectSets/aggregate`,
  `/api/v2/ontologies/${RID_PLACEHOLDER}/objectSets/loadObjectsMultipleObjectTypes`,
];

const RID_REGEX =
  /ri\.([a-z][a-z0-9-]*)\.([a-z0-9][a-z0-9-]*)?\.([a-z][a-z0-9-]*)\.([a-zA-Z0-9\-._]+)/;

export class ComputeMonitor {
  private readonly originalFetch: typeof globalThis.fetch;
  private readonly computeStore: ComputeStore;
  private readonly logger: Logger;
  private interceptedFetch: typeof globalThis.fetch | null = null;

  constructor(
    computeStore: ComputeStore,
    logger: Logger = createMonitorLogger(),
    originalFetch: typeof globalThis.fetch = globalThis.fetch,
  ) {
    this.computeStore = computeStore;
    this.logger = logger;
    this.originalFetch = originalFetch.bind(globalThis);
  }

  /**
   * Creates an intercepted fetch function without mutating global state.
   * This function can be passed to the client for compute tracking.
   *
   * @returns An intercepted fetch function that tracks compute usage
   */
  createInterceptedFetch(): typeof globalThis.fetch {
    // Return cached instance if already created
    if (this.interceptedFetch) {
      return this.interceptedFetch;
    }

    this.logger.debug("Creating fetch interceptor");
    const self = this;

    this.interceptedFetch = async (
      input: RequestInfo | URL,
      init?: RequestInit,
    ): Promise<Response> => {
      const pathname = self.extractPathnameFromRequest(input);

      const isRecording = self.computeStore.isRecording();
      const shouldTrack = self.doesEndpointTrackComputeCost(pathname);

      self.logger.debug("Fetch intercepted:", {
        pathname,
        isRecording,
        shouldTrack,
        hasBody: init?.body !== undefined,
        bodyType: typeof init?.body,
      });

      if (!shouldTrack || !isRecording || typeof init?.body !== "string") {
        self.logger.debug("Skipping tracking:", {
          reason: !shouldTrack
            ? "endpoint not tracked"
            : !isRecording
            ? "not recording"
            : "body not string",
        });
        return self.originalFetch(input, init);
      }

      self.logger.debug("Tracking request for:", pathname);

      let json;
      try {
        json = JSON.parse(init.body);
      } catch (e) {
        self.logger.debug("Failed to parse request body", e);
        return self.originalFetch(input, init);
      }

      const newBody = stringifyPayload({ ...json, includeComputeUsage: true });

      const requestId = self.computeStore.createPendingRequest({
        requestUrl: pathname,
        requestTimestamp: new Date(),
        requestPayload: truncatePayload(newBody),
        requestPayloadHash: hashPayload(json),
      });

      self.logger.debug("Created pending request:", requestId);

      if (self.computeStore.getIsNetworkPaused()) {
        self.logger.debug("Network paused, failing request");
        self.computeStore.failRequest(requestId, {
          type: "osdk-network-paused",
        });
        throw new Error(
          "OSDK network requests are paused by OSDK ComputeTools",
        );
      }

      try {
        const res = await self.originalFetch(input, { ...init, body: newBody });

        // Clone the response to read the body without consuming the original
        const clonedRes = res.clone();
        const arrayBuffer = await clonedRes.arrayBuffer();

        // Parse JSON from the cloned buffer
        let jsonRes;
        try {
          const text = new TextDecoder().decode(arrayBuffer);
          jsonRes = JSON.parse(text);
        } catch (parseError) {
          self.logger.warn("Failed to parse response as JSON:", parseError);
          self.computeStore.failRequest(requestId, {
            type: "fetch-error",
            message: "Failed to parse response JSON",
          });
          return res;
        }

        const computeUsage = jsonRes.computeUsage;

        self.logger.debug("Response received:", {
          status: res.status,
          computeUsage,
          hasComputeUsage: typeof computeUsage === "number",
        });

        if (typeof computeUsage === "number") {
          self.logger.debug(
            "Fulfilling request with compute usage:",
            computeUsage,
          );
          self.computeStore.fulfillRequest(requestId, {
            computeUsage,
            responsePayloadBytes: arrayBuffer.byteLength,
            responsePayloadHash: hashPayload(jsonRes),
            responsePayload: truncatePayload(stringifyPayload(jsonRes)),
          });
        } else if (res.status === 200) {
          self.logger.warn(
            "Request succeeded but no computeUsage in response",
          );
          self.computeStore.failRequest(requestId, {
            type: "no-compute-usage",
          });
        } else if (
          typeof jsonRes.errorCode === "string"
          && typeof jsonRes.errorInstanceId === "string"
          && typeof jsonRes.errorName === "string"
        ) {
          self.computeStore.failRequest(requestId, {
            type: "api-gateway-error",
            status: res.status,
            errorCode: jsonRes.errorCode,
            errorInstanceId: jsonRes.errorInstanceId,
            errorName: jsonRes.errorName,
          });
        } else {
          self.computeStore.failRequest(requestId, {
            type: "http-error",
            status: res.status,
            message: res.statusText.trim() === "" ? undefined : res.statusText,
          });
        }

        return res;
      } catch (error) {
        self.logger.error("Fetch error:", error);
        self.computeStore.failRequest(
          requestId,
          error instanceof Error
            ? {
              type: "fetch-error",
              message: error.message,
            }
            : { type: "unknown" },
        );
        throw error;
      }
    };

    return this.interceptedFetch;
  }

  private extractPathnameFromRequest(request: RequestInfo | URL): string {
    if (request instanceof URL) {
      return request.pathname;
    }

    if (typeof request === "string") {
      try {
        return new URL(request).pathname;
      } catch {
        return request;
      }
    }

    try {
      return new URL(request.url).pathname;
    } catch {
      return request.url;
    }
  }

  private doesEndpointTrackComputeCost(pathname: string): boolean {
    const normalized = pathname.replace(RID_REGEX, RID_PLACEHOLDER);
    return COMPUTE_COST_ENDPOINTS.includes(normalized);
  }
}
