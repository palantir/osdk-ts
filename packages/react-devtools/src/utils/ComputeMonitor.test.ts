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

import { describe, expect, it, vi } from "vitest";
import type { ComputeStore } from "../store/ComputeStore.js";
import { ComputeMonitor } from "./ComputeMonitor.js";
import type { EventTimeline } from "./EventTimeline.js";

function createMockEventTimeline(): EventTimeline {
  return {
    record: vi.fn(),
  } as unknown as EventTimeline;
}

function createMockComputeStore(): ComputeStore {
  return {
    isRecording: vi.fn().mockReturnValue(true),
    getIsNetworkPaused: vi.fn().mockReturnValue(false),
    createPendingRequest: vi.fn().mockReturnValue("req-1"),
    fulfillRequest: vi.fn(),
    fulfillWithoutUsage: vi.fn(),
    failRequest: vi.fn(),
    getSnapshot: vi.fn(),
    subscribe: vi.fn(),
    setIsRecording: vi.fn(),
    toggleNetworkPaused: vi.fn(),
    getRequests: vi.fn().mockReturnValue([]),
    getMetrics: vi.fn().mockReturnValue({
      totalUsage: 0,
      lastMinuteUsage: 0,
      requestCount: 0,
      fulfilledCount: 0,
      fulfilledWithoutUsageCount: 0,
      failedCount: 0,
      pendingCount: 0,
      averageUsagePerRequest: 0,
      averageResponseBytes: 0,
    }),
    getLastRecordingEvent: vi.fn().mockReturnValue(undefined),
    reset: vi.fn(),
    dispose: vi.fn(),
  } as unknown as ComputeStore;
}

function createMockResponse(body: object, status = 200): Response {
  const text = JSON.stringify(body);
  const buffer = new TextEncoder().encode(text).buffer;

  return {
    status,
    statusText: status === 200 ? "OK" : "Error",
    clone: () => ({
      arrayBuffer: () => Promise.resolve(buffer),
    }),
  } as unknown as Response;
}

const LOAD_OBJECTS_URL =
  "https://example.com/api/v2/ontologies/ri.compute.tools.rid.placeholder/objectSets/loadObjects";

describe("ComputeMonitor", () => {
  it("returns the same intercepted fetch on repeated calls", () => {
    const store = createMockComputeStore();
    const monitor = new ComputeMonitor(store);
    const fetch1 = monitor.createInterceptedFetch();
    const fetch2 = monitor.createInterceptedFetch();
    expect(fetch1).toBe(fetch2);
  });

  it("passes through non-tracked endpoints without recording", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi.fn().mockResolvedValue(new Response("ok"));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted("https://example.com/api/v2/other/endpoint", {
      body: JSON.stringify({ test: true }),
    });

    expect(store.createPendingRequest).not.toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalled();
  });

  it("passes through when not recording", async () => {
    const store = createMockComputeStore();
    vi.mocked(store.isRecording).mockReturnValue(false);
    const mockFetch = vi.fn().mockResolvedValue(new Response("ok"));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL, {
      body: JSON.stringify({ objectType: "Employee" }),
    });

    expect(store.createPendingRequest).not.toHaveBeenCalled();
  });

  it("passes through when body is not a string", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi.fn().mockResolvedValue(new Response("ok"));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL);

    expect(store.createPendingRequest).not.toHaveBeenCalled();
  });

  it("tracks a compute-cost endpoint and fulfills on success", async () => {
    const store = createMockComputeStore();
    const responseBody = { computeUsage: 42, data: [] };
    const mockFetch = vi
      .fn()
      .mockResolvedValue(createMockResponse(responseBody));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL, {
      body: JSON.stringify({ objectType: "Employee" }),
    });

    expect(store.createPendingRequest).toHaveBeenCalledWith(
      expect.objectContaining({ requestUrl: expect.any(String) }),
    );
    expect(store.fulfillRequest).toHaveBeenCalledWith(
      "req-1",
      expect.objectContaining({ computeUsage: 42 }),
    );
  });

  it("adds includeComputeUsage to the request body", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi
      .fn()
      .mockResolvedValue(createMockResponse({ computeUsage: 1 }));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL, {
      body: JSON.stringify({ objectType: "Employee" }),
    });

    const passedBody = JSON.parse(
      (mockFetch.mock.calls[0][1] as RequestInit).body as string,
    );
    expect(passedBody.includeComputeUsage).toBe(true);
  });

  it("fails request when network is paused", async () => {
    const store = createMockComputeStore();
    vi.mocked(store.getIsNetworkPaused).mockReturnValue(true);
    const mockFetch = vi.fn();
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await expect(
      intercepted(LOAD_OBJECTS_URL, {
        body: JSON.stringify({ objectType: "Employee" }),
      }),
    ).rejects.toThrow("OSDK network requests are paused");

    expect(store.failRequest).toHaveBeenCalledWith("req-1", {
      type: "osdk-network-paused",
    });
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("blocks tracked endpoints when paused, even when not recording", async () => {
    const store = createMockComputeStore();
    vi.mocked(store.getIsNetworkPaused).mockReturnValue(true);
    vi.mocked(store.isRecording).mockReturnValue(false);
    const mockFetch = vi.fn();
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await expect(
      intercepted(LOAD_OBJECTS_URL, {
        body: JSON.stringify({ objectType: "Employee" }),
      }),
    ).rejects.toThrow("OSDK network requests are paused");

    expect(mockFetch).not.toHaveBeenCalled();
    expect(store.createPendingRequest).not.toHaveBeenCalled();
  });

  it("blocks action endpoints when paused (non-tracked OSDK URL)", async () => {
    const store = createMockComputeStore();
    vi.mocked(store.getIsNetworkPaused).mockReturnValue(true);
    const mockFetch = vi.fn();
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    const actionUrl =
      "https://example.com/api/v2/ontologies/ri.test/actions/applyAction";
    await expect(
      intercepted(actionUrl, {
        body: JSON.stringify({ parameters: {} }),
      }),
    ).rejects.toThrow("OSDK network requests are paused");

    expect(mockFetch).not.toHaveBeenCalled();
    expect(store.createPendingRequest).not.toHaveBeenCalled();
    expect(store.failRequest).not.toHaveBeenCalled();
  });

  it("does not block non-OSDK URLs when paused", async () => {
    const store = createMockComputeStore();
    vi.mocked(store.getIsNetworkPaused).mockReturnValue(true);
    const mockFetch = vi.fn().mockResolvedValue(new Response("ok"));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted("https://example.com/some/other/url", {
      body: JSON.stringify({ test: true }),
    });

    expect(mockFetch).toHaveBeenCalled();
  });

  it("records OSDK_PAUSE_BLOCK event when blocking", async () => {
    const store = createMockComputeStore();
    vi.mocked(store.getIsNetworkPaused).mockReturnValue(true);
    const mockFetch = vi.fn();
    const eventTimeline = createMockEventTimeline();
    const monitor = new ComputeMonitor(
      store,
      undefined,
      mockFetch,
      eventTimeline,
    );
    const intercepted = monitor.createInterceptedFetch();

    const actionUrl =
      "https://example.com/api/v2/ontologies/ri.test/actions/applyAction";
    await expect(
      intercepted(actionUrl, {
        body: JSON.stringify({ parameters: {} }),
      }),
    ).rejects.toThrow();

    expect(eventTimeline.record).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "OSDK_PAUSE_BLOCK",
        pathname: "/api/v2/ontologies/ri.test/actions/applyAction",
      }),
    );
  });

  it("fulfills without usage when 200 has no computeUsage in response", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi
      .fn()
      .mockResolvedValue(createMockResponse({ data: [] }));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL, {
      body: JSON.stringify({ objectType: "Employee" }),
    });

    expect(store.fulfillWithoutUsage).toHaveBeenCalledWith(
      "req-1",
      expect.objectContaining({
        responsePayloadBytes: expect.any(Number),
      }),
    );
    expect(store.failRequest).not.toHaveBeenCalled();
  });

  it("fails request with api-gateway-error for structured error responses", async () => {
    const store = createMockComputeStore();
    const errorBody = {
      errorCode: "INVALID_ARGUMENT",
      errorInstanceId: "abc-123",
      errorName: "InvalidArgument",
    };
    const mockFetch = vi
      .fn()
      .mockResolvedValue(createMockResponse(errorBody, 400));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL, {
      body: JSON.stringify({ objectType: "Employee" }),
    });

    expect(store.failRequest).toHaveBeenCalledWith("req-1", {
      type: "api-gateway-error",
      status: 400,
      errorCode: "INVALID_ARGUMENT",
      errorInstanceId: "abc-123",
      errorName: "InvalidArgument",
    });
  });

  it("fails request with http-error for non-200 without structured error", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi
      .fn()
      .mockResolvedValue(createMockResponse({ message: "not found" }, 404));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL, {
      body: JSON.stringify({ objectType: "Employee" }),
    });

    expect(store.failRequest).toHaveBeenCalledWith(
      "req-1",
      expect.objectContaining({ type: "http-error", status: 404 }),
    );
  });

  it("fails request with fetch-error when fetch throws", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi.fn().mockRejectedValue(new Error("Network failure"));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await expect(
      intercepted(LOAD_OBJECTS_URL, {
        body: JSON.stringify({ objectType: "Employee" }),
      }),
    ).rejects.toThrow("Network failure");

    expect(store.failRequest).toHaveBeenCalledWith("req-1", {
      type: "fetch-error",
      message: "Network failure",
    });
  });

  it("passes through when body is not valid JSON", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi.fn().mockResolvedValue(new Response("ok"));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    await intercepted(LOAD_OBJECTS_URL, { body: "not-json{{{" });

    expect(store.createPendingRequest).not.toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalled();
  });

  it("tracks aggregate endpoint as a compute-cost endpoint", async () => {
    const store = createMockComputeStore();
    const mockFetch = vi
      .fn()
      .mockResolvedValue(createMockResponse({ computeUsage: 10 }));
    const monitor = new ComputeMonitor(store, undefined, mockFetch);
    const intercepted = monitor.createInterceptedFetch();

    const aggregateUrl =
      "https://example.com/api/v2/ontologies/ri.compute.tools.rid.placeholder/objectSets/aggregate";
    await intercepted(aggregateUrl, {
      body: JSON.stringify({ objectType: "Employee" }),
    });

    expect(store.createPendingRequest).toHaveBeenCalled();
    expect(store.fulfillRequest).toHaveBeenCalled();
  });
});
