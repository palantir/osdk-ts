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

import type {
  ComputeMetrics,
  ComputeRequest,
  ComputeRequestError,
  ComputeSnapshot,
  PendingComputeRequest,
  RecordingEvent,
} from "../types/compute.js";
import { CircularBuffer } from "../utils/CircularBuffer.js";
import { SubscribableStore } from "./SubscribableStore.js";

const DEFAULT_MAX_REQUESTS = 500;

export class ComputeStore extends SubscribableStore {
  private readonly requests: CircularBuffer<ComputeRequest>;
  private readonly requestMap = new Map<string, ComputeRequest>();
  private lastRecordingEvent: RecordingEvent | undefined;
  private isNetworkPaused = false;
  private lastSnapshot: ComputeSnapshot | null = null;

  private version = 0;
  private cachedRequests: ReadonlyArray<ComputeRequest> = [];
  private cachedRequestsVersion = -1;
  private cachedMetrics: ComputeMetrics | null = null;
  private cachedMetricsVersion = -1;

  private totalUsage = 0;
  private totalResponseBytes = 0;
  private fulfilledCount = 0;
  private fulfilledWithoutUsageCount = 0;
  private failedCount = 0;
  private pendingCount = 0;

  constructor(maxRequests: number = DEFAULT_MAX_REQUESTS) {
    super();
    this.requests = new CircularBuffer(maxRequests, (evicted) => {
      this.requestMap.delete(evicted.id);
    });
  }

  createPendingRequest(
    request: Omit<PendingComputeRequest, "type" | "id">,
  ): string {
    const id = crypto.randomUUID();
    const pendingRequest: PendingComputeRequest = {
      type: "pending",
      id,
      ...request,
    };
    this.requests.push(pendingRequest);
    this.requestMap.set(id, pendingRequest);
    this.pendingCount++;
    this.invalidate();
    return id;
  }

  fulfillRequest(
    requestId: string,
    responseInfo: {
      computeUsage: number;
      responsePayloadBytes: number;
      responsePayloadHash: number;
      responsePayload: string;
    },
  ): void {
    const pending = this.requestMap.get(requestId);

    if (!pending || pending.type !== "pending") {
      return;
    }

    const fulfilled: ComputeRequest = {
      type: "fulfilled",
      id: pending.id,
      requestTimestamp: pending.requestTimestamp,
      requestUrl: pending.requestUrl,
      requestPayload: pending.requestPayload,
      requestPayloadHash: pending.requestPayloadHash,
      responseTimestamp: new Date(),
      ...responseInfo,
    };

    this.requestMap.set(requestId, fulfilled);
    this.pendingCount--;
    this.fulfilledCount++;
    this.totalUsage += responseInfo.computeUsage;
    this.totalResponseBytes += responseInfo.responsePayloadBytes;
    this.invalidate();
  }

  fulfillWithoutUsage(
    requestId: string,
    responseInfo: {
      responsePayloadBytes: number;
      responsePayloadHash: number;
      responsePayload: string;
    },
  ): void {
    const pending = this.requestMap.get(requestId);

    if (!pending || pending.type !== "pending") {
      return;
    }

    const fulfilled: ComputeRequest = {
      type: "fulfilled-without-usage",
      id: pending.id,
      requestTimestamp: pending.requestTimestamp,
      requestUrl: pending.requestUrl,
      requestPayload: pending.requestPayload,
      requestPayloadHash: pending.requestPayloadHash,
      responseTimestamp: new Date(),
      ...responseInfo,
    };

    this.requestMap.set(requestId, fulfilled);
    this.pendingCount--;
    this.fulfilledWithoutUsageCount++;
    this.totalResponseBytes += responseInfo.responsePayloadBytes;
    this.invalidate();
  }

  failRequest(requestId: string, error: ComputeRequestError): void {
    const pending = this.requestMap.get(requestId);

    if (!pending || pending.type !== "pending") {
      return;
    }

    const failed: ComputeRequest = {
      type: "failed",
      id: pending.id,
      requestTimestamp: pending.requestTimestamp,
      requestUrl: pending.requestUrl,
      requestPayload: pending.requestPayload,
      requestPayloadHash: pending.requestPayloadHash,
      failedTimestamp: new Date(),
      error,
    };

    this.requestMap.set(requestId, failed);
    this.pendingCount--;
    this.failedCount++;
    this.invalidate();
  }

  setIsRecording(isRecording: boolean): void {
    if (
      this.lastRecordingEvent?.type === "started" && isRecording
    ) {
      return;
    }

    if (isRecording) {
      this.lastRecordingEvent = {
        type: "started",
        timestamp: new Date(),
      };
      this.requests.clear();
      this.requestMap.clear();
      this.totalUsage = 0;
      this.totalResponseBytes = 0;
      this.fulfilledCount = 0;
      this.fulfilledWithoutUsageCount = 0;
      this.failedCount = 0;
      this.pendingCount = 0;
    } else if (this.lastRecordingEvent?.type === "started") {
      this.lastRecordingEvent = {
        type: "ended",
        timestamp: this.lastRecordingEvent.timestamp,
        endTimestamp: new Date(),
      };
    }

    this.invalidate();
  }

  toggleNetworkPaused(): void {
    this.isNetworkPaused = !this.isNetworkPaused;
    this.invalidate();
  }

  getIsNetworkPaused(): boolean {
    return this.isNetworkPaused;
  }

  getLastRecordingEvent(): RecordingEvent | undefined {
    return this.lastRecordingEvent;
  }

  isRecording(): boolean {
    return this.lastRecordingEvent?.type === "started";
  }

  reset(): void {
    this.requests.clear();
    this.requestMap.clear();
    this.lastRecordingEvent = undefined;
    this.isNetworkPaused = false;
    this.totalUsage = 0;
    this.totalResponseBytes = 0;
    this.fulfilledCount = 0;
    this.fulfilledWithoutUsageCount = 0;
    this.failedCount = 0;
    this.pendingCount = 0;
    this.invalidate();
  }

  getRequests(): ReadonlyArray<ComputeRequest> {
    if (this.cachedRequestsVersion === this.version) {
      return this.cachedRequests;
    }

    const requestsFromBuffer = this.requests.toArray();
    const newRequests = requestsFromBuffer.map(req =>
      this.requestMap.get(req.id) ?? req
    );

    if (this.arraysReferentiallyEqual(this.cachedRequests, newRequests)) {
      this.cachedRequestsVersion = this.version;
      return this.cachedRequests;
    }

    this.cachedRequests = newRequests;
    this.cachedRequestsVersion = this.version;
    return this.cachedRequests;
  }

  getSnapshot(): ComputeSnapshot {
    if (this.lastSnapshot) {
      return this.lastSnapshot;
    }

    const snapshot: ComputeSnapshot = {
      metrics: this.getMetrics(),
      requests: this.getRequests(),
      isRecording: this.isRecording(),
      isNetworkPaused: this.isNetworkPaused,
      lastRecordingEvent: this.lastRecordingEvent,
    };

    this.lastSnapshot = snapshot;
    return snapshot;
  }

  getMetrics(): ComputeMetrics {
    if (this.cachedMetricsVersion === this.version && this.cachedMetrics) {
      return this.cachedMetrics;
    }

    const oneMinuteAgo = Date.now() - 60000;
    let lastMinuteUsage = 0;

    const recentRequests = this.requests.getLast(100);
    for (const req of recentRequests) {
      const current = this.requestMap.get(req.id) ?? req;
      if (
        current.type === "fulfilled"
        && current.responseTimestamp.getTime() >= oneMinuteAgo
      ) {
        lastMinuteUsage += current.computeUsage;
      }
    }

    const requestCount = this.fulfilledCount + this.fulfilledWithoutUsageCount
      + this.failedCount + this.pendingCount;

    const completedWithResponseBytes = this.fulfilledCount
      + this.fulfilledWithoutUsageCount;

    const newMetrics: ComputeMetrics = {
      totalUsage: Math.round(this.totalUsage),
      lastMinuteUsage: Math.round(lastMinuteUsage),
      requestCount,
      fulfilledCount: this.fulfilledCount,
      fulfilledWithoutUsageCount: this.fulfilledWithoutUsageCount,
      failedCount: this.failedCount,
      pendingCount: this.pendingCount,
      averageUsagePerRequest: this.fulfilledCount > 0
        ? Math.round(this.totalUsage / this.fulfilledCount)
        : 0,
      averageResponseBytes: completedWithResponseBytes > 0
        ? Math.round(this.totalResponseBytes / completedWithResponseBytes)
        : 0,
    };

    if (
      this.cachedMetrics && this.metricsEqual(this.cachedMetrics, newMetrics)
    ) {
      this.cachedMetricsVersion = this.version;
      return this.cachedMetrics;
    }

    this.cachedMetrics = newMetrics;
    this.cachedMetricsVersion = this.version;
    return this.cachedMetrics;
  }

  dispose(): void {
    this.requests.clear();
    this.requestMap.clear();
    this.clearSubscribers();
    this.lastRecordingEvent = undefined;
    this.isNetworkPaused = false;
    this.totalUsage = 0;
    this.totalResponseBytes = 0;
    this.fulfilledCount = 0;
    this.fulfilledWithoutUsageCount = 0;
    this.failedCount = 0;
    this.pendingCount = 0;
    this.lastSnapshot = null;
    this.cachedRequests = [];
    this.cachedRequestsVersion = -1;
    this.cachedMetrics = null;
    this.cachedMetricsVersion = -1;
  }

  private invalidate(): void {
    this.version++;
    this.lastSnapshot = null;
    this.notifySubscribers();
  }

  private arraysReferentiallyEqual(
    a: ReadonlyArray<ComputeRequest>,
    b: ReadonlyArray<ComputeRequest>,
  ): boolean {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  private metricsEqual(a: ComputeMetrics, b: ComputeMetrics): boolean {
    return a.totalUsage === b.totalUsage
      && a.lastMinuteUsage === b.lastMinuteUsage
      && a.requestCount === b.requestCount
      && a.fulfilledCount === b.fulfilledCount
      && a.fulfilledWithoutUsageCount === b.fulfilledWithoutUsageCount
      && a.failedCount === b.failedCount
      && a.pendingCount === b.pendingCount
      && a.averageUsagePerRequest === b.averageUsagePerRequest
      && a.averageResponseBytes === b.averageResponseBytes;
  }
}
