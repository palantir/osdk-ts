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
import { RingBuffer } from "../utils/RingBuffer.js";

const DEFAULT_MAX_REQUESTS = 500;

export class ComputeStore {
  private readonly requests: RingBuffer<ComputeRequest>;
  private readonly requestMap = new Map<string, ComputeRequest>();
  private readonly subscribers = new Set<() => void>();
  private lastRecordingEvent: RecordingEvent | undefined;
  private isNetworkPaused = false;
  private lastSnapshot: ComputeSnapshot | null = null;

  constructor(maxRequests: number = DEFAULT_MAX_REQUESTS) {
    this.requests = new RingBuffer(maxRequests);
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
    this.lastSnapshot = null;
    this.notifySubscribers();
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
    this.lastSnapshot = null;
    this.notifySubscribers();
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
    this.lastSnapshot = null;
    this.notifySubscribers();
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
    } else if (this.lastRecordingEvent?.type === "started") {
      this.lastRecordingEvent = {
        type: "ended",
        timestamp: this.lastRecordingEvent.timestamp,
        endTimestamp: new Date(),
      };
    }

    this.lastSnapshot = null;
    this.notifySubscribers();
  }

  toggleNetworkPaused(): void {
    this.isNetworkPaused = !this.isNetworkPaused;
    this.notifySubscribers();
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
    this.lastSnapshot = null;
    this.notifySubscribers();
  }

  getRequests(): ReadonlyArray<ComputeRequest> {
    // Get requests from RingBuffer but use Map to get the latest state
    const requestsFromBuffer = this.requests.toArray();
    return requestsFromBuffer.map(req => this.requestMap.get(req.id) || req);
  }

  getSnapshot(): ComputeSnapshot {
    if (this.lastSnapshot) {
      return this.lastSnapshot;
    }

    const snapshot: ComputeSnapshot = {
      metrics: this.getMetrics(),
      requests: this.getRequests(),
      isRecording: this.isRecording(),
    };

    this.lastSnapshot = snapshot;
    return snapshot;
  }

  getMetrics(): ComputeMetrics {
    // Get updated request states from Map (same as getRequests)
    const requestsFromBuffer = this.requests.toArray();
    const allRequests = requestsFromBuffer.map(req =>
      this.requestMap.get(req.id) || req
    );
    const now = Date.now();
    const oneMinuteAgo = now - 60000;

    let totalUsage = 0;
    let lastMinuteUsage = 0;
    let fulfilledCount = 0;
    let failedCount = 0;
    let pendingCount = 0;
    let totalResponseBytes = 0;

    for (const request of allRequests) {
      if (request.type === "fulfilled") {
        totalUsage += request.computeUsage;
        totalResponseBytes += request.responsePayloadBytes;
        fulfilledCount++;

        if (request.responseTimestamp.getTime() >= oneMinuteAgo) {
          lastMinuteUsage += request.computeUsage;
        }
      } else if (request.type === "failed") {
        failedCount++;
      } else if (request.type === "pending") {
        pendingCount++;
      }
    }

    return {
      totalUsage: Math.round(totalUsage),
      lastMinuteUsage: Math.round(lastMinuteUsage),
      requestCount: allRequests.length,
      fulfilledCount,
      failedCount,
      pendingCount,
      averageUsagePerRequest:
        fulfilledCount > 0 ? Math.round(totalUsage / fulfilledCount) : 0,
      averageResponseBytes:
        fulfilledCount > 0 ? Math.round(totalResponseBytes / fulfilledCount) : 0,
    };
  }

  subscribe(callback: () => void): () => void {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  dispose(): void {
    this.requests.clear();
    this.requestMap.clear();
    this.subscribers.clear();
    this.lastRecordingEvent = undefined;
    this.isNetworkPaused = false;
    this.lastSnapshot = null;
  }

  private notifySubscribers(): void {
    this.subscribers.forEach((callback) => callback());
  }
}
