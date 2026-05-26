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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ComputeStore } from "./ComputeStore.js";

function createPendingRequestInput() {
  return {
    requestTimestamp: new Date(),
    requestUrl:
      "https://example.com/api/v2/ontologies/ri.test/objectSets/loadObjects",
    requestPayload: "{\"objectSet\":{\"type\":\"base\"}}",
    requestPayloadHash: 12345,
  };
}

describe("ComputeStore", () => {
  let store: ComputeStore;

  beforeEach(() => {
    vi.useFakeTimers();
    store = new ComputeStore(50);
  });

  afterEach(() => {
    store.dispose();
    vi.useRealTimers();
  });

  it("should create pending request that appears in getRequests", () => {
    const id = store.createPendingRequest(createPendingRequestInput());

    const requests = store.getRequests();
    expect(requests).toHaveLength(1);
    expect(requests[0].type).toBe("pending");
    expect(requests[0].id).toBe(id);
    expect(requests[0].requestUrl).toBe(
      "https://example.com/api/v2/ontologies/ri.test/objectSets/loadObjects",
    );
  });

  it("should fulfill a pending request with status transition", () => {
    const id = store.createPendingRequest(createPendingRequestInput());

    store.fulfillRequest(id, {
      computeUsage: 42,
      responsePayloadBytes: 1024,
      responsePayloadHash: 67890,
      responsePayload: "{\"data\":[]}",
    });

    const requests = store.getRequests();
    expect(requests).toHaveLength(1);
    expect(requests[0].type).toBe("fulfilled");

    if (requests[0].type === "fulfilled") {
      expect(requests[0].computeUsage).toBe(42);
      expect(requests[0].responsePayloadBytes).toBe(1024);
    }
  });

  it("should fail a pending request with error data", () => {
    const id = store.createPendingRequest(createPendingRequestInput());

    store.failRequest(id, {
      type: "http-error",
      status: 500,
      message: "Internal Server Error",
    });

    const requests = store.getRequests();
    expect(requests).toHaveLength(1);
    expect(requests[0].type).toBe("failed");

    if (requests[0].type === "failed") {
      expect(requests[0].error.type).toBe("http-error");
    }
  });

  it("should be a no-op when fulfilling a non-existent request", () => {
    store.fulfillRequest("non-existent-id", {
      computeUsage: 10,
      responsePayloadBytes: 256,
      responsePayloadHash: 111,
      responsePayload: "{}",
    });

    const requests = store.getRequests();
    expect(requests).toHaveLength(0);
  });

  it("should be a no-op when failing a non-existent request", () => {
    store.failRequest("non-existent-id", { type: "unknown" });

    const requests = store.getRequests();
    expect(requests).toHaveLength(0);
  });

  it("should record session events (start/stop)", () => {
    expect(store.isRecording()).toBe(false);
    expect(store.getLastRecordingEvent()).toBeUndefined();

    store.setIsRecording(true);
    expect(store.isRecording()).toBe(true);
    expect(store.getLastRecordingEvent()?.type).toBe("started");

    store.setIsRecording(false);
    expect(store.isRecording()).toBe(false);
    expect(store.getLastRecordingEvent()?.type).toBe("ended");
  });

  it("should not double-start recording", () => {
    const subscriber = vi.fn();
    store.subscribe(subscriber);

    store.setIsRecording(true);
    const callCountAfterStart = subscriber.mock.calls.length;

    store.setIsRecording(true);
    expect(subscriber.mock.calls.length).toBe(callCountAfterStart);
  });

  it("should calculate metrics correctly with zero-division safety", () => {
    const emptyMetrics = store.getMetrics();
    expect(emptyMetrics.averageUsagePerRequest).toBe(0);
    expect(emptyMetrics.averageResponseBytes).toBe(0);
    expect(emptyMetrics.requestCount).toBe(0);
    expect(emptyMetrics.fulfilledCount).toBe(0);
    expect(emptyMetrics.failedCount).toBe(0);
    expect(emptyMetrics.pendingCount).toBe(0);

    const id1 = store.createPendingRequest(createPendingRequestInput());
    const id2 = store.createPendingRequest(createPendingRequestInput());
    store.createPendingRequest(createPendingRequestInput());

    store.fulfillRequest(id1, {
      computeUsage: 100,
      responsePayloadBytes: 2000,
      responsePayloadHash: 111,
      responsePayload: "{}",
    });
    store.fulfillRequest(id2, {
      computeUsage: 200,
      responsePayloadBytes: 4000,
      responsePayloadHash: 222,
      responsePayload: "{}",
    });

    const metrics = store.getMetrics();
    expect(metrics.requestCount).toBe(3);
    expect(metrics.fulfilledCount).toBe(2);
    expect(metrics.pendingCount).toBe(1);
    expect(metrics.averageUsagePerRequest).toBe(150);
    expect(metrics.averageResponseBytes).toBe(3000);
    expect(metrics.totalUsage).toBe(300);
  });

  it("should handle ring buffer wraparound and sync map correctly", () => {
    const smallStore = new ComputeStore(3);
    const ids: string[] = [];

    for (let i = 0; i < 5; i++) {
      ids.push(smallStore.createPendingRequest({
        requestTimestamp: new Date(),
        requestUrl: `https://example.com/api/${i}`,
        requestPayload: `{"i":${i}}`,
        requestPayloadHash: i,
      }));
    }

    const requests = smallStore.getRequests();
    expect(requests.length).toBeLessThanOrEqual(3);

    smallStore.dispose();
  });

  it("should prune requestMap when ring buffer evicts entries", () => {
    const smallStore = new ComputeStore(3);
    const ids: string[] = [];

    for (let i = 0; i < 10; i++) {
      ids.push(smallStore.createPendingRequest({
        requestTimestamp: new Date(),
        requestUrl: `https://example.com/api/${i}`,
        requestPayload: `{"i":${i}}`,
        requestPayloadHash: i,
      }));
    }

    const requests = smallStore.getRequests();
    expect(requests).toHaveLength(3);
    expect(requests.every(r => r.type === "pending")).toBe(true);

    smallStore.fulfillRequest(ids[0], {
      computeUsage: 1,
      responsePayloadBytes: 10,
      responsePayloadHash: 0,
      responsePayload: "{}",
    });

    const afterFulfill = smallStore.getRequests();
    expect(afterFulfill).toHaveLength(3);
    expect(afterFulfill.every(r => r.type === "pending")).toBe(true);

    smallStore.dispose();
  });

  it("should notify subscribers on state changes", () => {
    const subscriber = vi.fn();
    store.subscribe(subscriber);

    store.createPendingRequest(createPendingRequestInput());
    expect(subscriber).toHaveBeenCalledTimes(1);

    const id = store.createPendingRequest(createPendingRequestInput());
    expect(subscriber).toHaveBeenCalledTimes(2);

    store.fulfillRequest(id, {
      computeUsage: 50,
      responsePayloadBytes: 512,
      responsePayloadHash: 333,
      responsePayload: "{}",
    });
    expect(subscriber).toHaveBeenCalledTimes(3);
  });

  it("should allow unsubscribing from notifications", () => {
    const subscriber = vi.fn();
    const unsubscribe = store.subscribe(subscriber);
    unsubscribe();

    store.createPendingRequest(createPendingRequestInput());
    expect(subscriber).not.toHaveBeenCalled();
  });

  it("should return cached snapshot and invalidate on changes", () => {
    const snap1 = store.getSnapshot();
    const snap2 = store.getSnapshot();
    expect(snap1).toBe(snap2);

    store.createPendingRequest(createPendingRequestInput());

    const snap3 = store.getSnapshot();
    expect(snap3).not.toBe(snap1);
  });

  it("should dispose and clear all state", () => {
    store.createPendingRequest(createPendingRequestInput());
    const subscriber = vi.fn();
    store.subscribe(subscriber);

    store.dispose();

    expect(store.getRequests()).toHaveLength(0);
    expect(store.isRecording()).toBe(false);
    expect(store.getIsNetworkPaused()).toBe(false);

    store.createPendingRequest(createPendingRequestInput());
    expect(subscriber).not.toHaveBeenCalled();
  });

  it("should toggle network paused state", () => {
    expect(store.getIsNetworkPaused()).toBe(false);

    store.toggleNetworkPaused();
    expect(store.getIsNetworkPaused()).toBe(true);

    store.toggleNetworkPaused();
    expect(store.getIsNetworkPaused()).toBe(false);
  });

  it("should reset all state via reset()", () => {
    store.createPendingRequest(createPendingRequestInput());
    store.setIsRecording(true);
    store.toggleNetworkPaused();

    store.reset();

    expect(store.getRequests()).toHaveLength(0);
    expect(store.isRecording()).toBe(false);
    expect(store.getIsNetworkPaused()).toBe(false);
    expect(store.getLastRecordingEvent()).toBeUndefined();
  });

  it("should count only recent requests in lastMinuteUsage", () => {
    vi.setSystemTime(new Date(2025, 0, 1, 12, 0, 0));

    const idA = store.createPendingRequest(createPendingRequestInput());
    store.fulfillRequest(idA, {
      computeUsage: 50,
      responsePayloadBytes: 1024,
      responsePayloadHash: 111,
      responsePayload: "{}",
    });

    vi.advanceTimersByTime(120_000);

    const idB = store.createPendingRequest(createPendingRequestInput());
    store.fulfillRequest(idB, {
      computeUsage: 30,
      responsePayloadBytes: 512,
      responsePayloadHash: 222,
      responsePayload: "{}",
    });

    const metrics = store.getMetrics();
    expect(metrics.lastMinuteUsage).toBe(30);
    expect(metrics.totalUsage).toBe(80);
  });

  it("should return correct timestamps from getLastRecordingEvent", () => {
    store.setIsRecording(true);
    const startEvent = store.getLastRecordingEvent();
    expect(startEvent?.type).toBe("started");
    expect(startEvent?.timestamp).toBeInstanceOf(Date);

    vi.advanceTimersByTime(5000);

    store.setIsRecording(false);
    const endEvent = store.getLastRecordingEvent();
    expect(endEvent?.type).toBe("ended");
    if (endEvent?.type === "ended") {
      expect(endEvent.endTimestamp).toBeInstanceOf(Date);
      if (endEvent.endTimestamp) {
        expect(endEvent.endTimestamp.getTime()).toBeGreaterThan(
          endEvent.timestamp.getTime(),
        );
      }
    }
  });

  it("should clear existing requests when starting recording", () => {
    store.createPendingRequest(createPendingRequestInput());
    expect(store.getRequests()).toHaveLength(1);

    store.setIsRecording(true);
    expect(store.getRequests()).toHaveLength(0);
  });

  it("should preserve fetch-error discriminant fields", () => {
    const id = store.createPendingRequest(createPendingRequestInput());
    store.failRequest(id, { type: "fetch-error", message: "Network timeout" });

    const requests = store.getRequests();
    expect(requests[0].type).toBe("failed");
    if (requests[0].type === "failed") {
      expect(requests[0].error.type).toBe("fetch-error");
      if (requests[0].error.type === "fetch-error") {
        expect(requests[0].error.message).toBe("Network timeout");
      }
    }
  });

  it("should preserve osdk-network-paused discriminant", () => {
    const id = store.createPendingRequest(createPendingRequestInput());
    store.failRequest(id, { type: "osdk-network-paused" });

    const requests = store.getRequests();
    expect(requests[0].type).toBe("failed");
    if (requests[0].type === "failed") {
      expect(requests[0].error.type).toBe("osdk-network-paused");
    }
  });

  it("should preserve api-gateway-error discriminant fields", () => {
    const id = store.createPendingRequest(createPendingRequestInput());
    store.failRequest(id, {
      type: "api-gateway-error",
      status: 429,
      errorCode: "RATE_LIMIT",
      errorInstanceId: "inst-1",
      errorName: "RateLimitExceeded",
    });

    const requests = store.getRequests();
    expect(requests[0].type).toBe("failed");
    if (requests[0].type === "failed") {
      expect(requests[0].error.type).toBe("api-gateway-error");
      if (requests[0].error.type === "api-gateway-error") {
        expect(requests[0].error.status).toBe(429);
        expect(requests[0].error.errorCode).toBe("RATE_LIMIT");
        expect(requests[0].error.errorInstanceId).toBe("inst-1");
        expect(requests[0].error.errorName).toBe("RateLimitExceeded");
      }
    }
  });

  it("fulfillWithoutUsage transitions pending to fulfilled-without-usage", () => {
    const id = store.createPendingRequest(createPendingRequestInput());
    store.fulfillWithoutUsage(id, {
      responsePayloadBytes: 512,
      responsePayloadHash: 99,
      responsePayload: "{}",
    });

    const requests = store.getRequests();
    expect(requests).toHaveLength(1);
    expect(requests[0].type).toBe("fulfilled-without-usage");

    if (requests[0].type === "fulfilled-without-usage") {
      expect(requests[0].responsePayloadBytes).toBe(512);
    }
  });

  it("fulfillWithoutUsage does not bump failedCount", () => {
    const id = store.createPendingRequest(createPendingRequestInput());
    store.fulfillWithoutUsage(id, {
      responsePayloadBytes: 512,
      responsePayloadHash: 99,
      responsePayload: "{}",
    });

    const metrics = store.getMetrics();
    expect(metrics.failedCount).toBe(0);
    expect(metrics.fulfilledCount).toBe(0);
    expect(metrics.fulfilledWithoutUsageCount).toBe(1);
    expect(metrics.requestCount).toBe(1);
  });

  it("excludes no-usage requests from averageUsagePerRequest", () => {
    const id1 = store.createPendingRequest(createPendingRequestInput());
    store.fulfillRequest(id1, {
      computeUsage: 100,
      responsePayloadBytes: 1024,
      responsePayloadHash: 1,
      responsePayload: "{}",
    });

    const id2 = store.createPendingRequest(createPendingRequestInput());
    store.fulfillWithoutUsage(id2, {
      responsePayloadBytes: 1024,
      responsePayloadHash: 2,
      responsePayload: "{}",
    });

    const metrics = store.getMetrics();
    expect(metrics.averageUsagePerRequest).toBe(100);
  });

  it("includes no-usage requests in averageResponseBytes", () => {
    const id1 = store.createPendingRequest(createPendingRequestInput());
    store.fulfillRequest(id1, {
      computeUsage: 100,
      responsePayloadBytes: 1000,
      responsePayloadHash: 1,
      responsePayload: "{}",
    });

    const id2 = store.createPendingRequest(createPendingRequestInput());
    store.fulfillWithoutUsage(id2, {
      responsePayloadBytes: 2000,
      responsePayloadHash: 2,
      responsePayload: "{}",
    });

    const metrics = store.getMetrics();
    expect(metrics.averageResponseBytes).toBe(1500);
  });

  describe("referential stability", () => {
    it("getSnapshot().requests returns same reference when data unchanged", () => {
      store.createPendingRequest(createPendingRequestInput());
      const snap1 = store.getSnapshot();
      const snap2 = store.getSnapshot();
      expect(snap1.requests).toBe(snap2.requests);
    });

    it("getSnapshot().metrics returns same reference when data unchanged", () => {
      store.createPendingRequest(createPendingRequestInput());
      const snap1 = store.getSnapshot();
      const snap2 = store.getSnapshot();
      expect(snap1.metrics).toBe(snap2.metrics);
    });

    it("getSnapshot().metrics preserves reference when only network paused changes", () => {
      store.createPendingRequest(createPendingRequestInput());
      const metricsBefore = store.getSnapshot().metrics;
      store.toggleNetworkPaused();
      const metricsAfter = store.getSnapshot().metrics;
      expect(metricsBefore).toBe(metricsAfter);
    });

    it("getSnapshot().requests preserves reference when only network paused changes", () => {
      store.createPendingRequest(createPendingRequestInput());
      const requestsBefore = store.getSnapshot().requests;
      store.toggleNetworkPaused();
      const requestsAfter = store.getSnapshot().requests;
      expect(requestsBefore).toBe(requestsAfter);
    });

    it("toggleNetworkPaused() changes the snapshot", () => {
      const snap1 = store.getSnapshot();
      store.toggleNetworkPaused();
      const snap2 = store.getSnapshot();
      expect(snap1).not.toBe(snap2);
      expect(snap1.isNetworkPaused).toBe(false);
      expect(snap2.isNetworkPaused).toBe(true);
    });

    it("getSnapshot().isNetworkPaused reflects current state", () => {
      expect(store.getSnapshot().isNetworkPaused).toBe(false);
      store.toggleNetworkPaused();
      expect(store.getSnapshot().isNetworkPaused).toBe(true);
      store.toggleNetworkPaused();
      expect(store.getSnapshot().isNetworkPaused).toBe(false);
    });

    it("getSnapshot().lastRecordingEvent reflects current state", () => {
      expect(store.getSnapshot().lastRecordingEvent).toBeUndefined();
      store.setIsRecording(true);
      expect(store.getSnapshot().lastRecordingEvent?.type).toBe("started");
      store.setIsRecording(false);
      expect(store.getSnapshot().lastRecordingEvent?.type).toBe("ended");
    });
  });
});
