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

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import type { Client } from "@osdk/client";
import { defineConfig, FoundryHostEventTarget } from "@osdk/widget.client";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import type { Mock } from "vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FoundryWidget } from "./client.js";
import { useFoundryWidgetContext } from "./context.js";
import { transformEmitEventPayload } from "./utils/transformEmitEventPayload.js";

// Mocks
const mockEmitEvent = vi.fn();
const mockWidgetClient = {
  subscribe: vi.fn(),
  unsubscribe: vi.fn(),
  ready: vi.fn(),
  resize: vi.fn(),
  emitEvent: mockEmitEvent,
  hostEventTarget: new FoundryHostEventTarget(),
};

vi.mock("./utils/transformEmitEventPayload.js", () => ({
  transformEmitEventPayload: vi.fn(),
}));

vi.mock("@osdk/widget.client", async () => {
  const actual = await vi.importActual("@osdk/widget.client");
  return {
    ...actual,
    createFoundryWidgetClient: vi.fn(() => mockWidgetClient),
  };
});

// Test config
const config = defineConfig({
  id: "testWidget",
  name: "Test Widget",
  type: "workshop",
  parameters: {
    myParam: {
      displayName: "My Param",
      type: "string",
    },
  },
  events: {
    eventA: {
      displayName: "Event A",
      parameterUpdateIds: ["myParam"],
    },
    eventB: {
      displayName: "Event B",
      parameterUpdateIds: ["myParam"],
    },
  },
});

describe("FoundryWidget emitEvent race condition handling", () => {
  type EmitEventFn = (eventId: string, payload: unknown) => void;

  const client = vi.fn() as Mock<Client> & Client;
  let container: HTMLDivElement;
  let root: Root;

  function EmitEventCapture(
    { emitEventRef }: { emitEventRef: { current: EmitEventFn } },
  ) {
    const context = useFoundryWidgetContext<typeof config>();
    emitEventRef.current = context.emitEvent as EmitEventFn;
    return null;
  }

  const mountWidget = async () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);

    const emitEventRef = { current: null as unknown as EmitEventFn };

    act(() => {
      root.render(
        <FoundryWidget config={config} client={client}>
          <EmitEventCapture emitEventRef={emitEventRef} />
        </FoundryWidget>,
      );
    });

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    return emitEventRef.current;
  };

  const unmountWidget = () => {
    act(() => {
      root.unmount();
    });
    document.body.removeChild(container);
  };

  const createDeferredTransformMock = () => {
    const pending: Array<{
      payload: { parameterUpdates: { myParam: string } };
      resolve: (value: { parameterUpdates: { myParam: string } }) => void;
    }> = [];

    vi.mocked(transformEmitEventPayload).mockImplementation(
      (_config, _eventId, payload) => ({
        type: "async" as const,
        payload: new Promise((resolve) => {
          pending.push({
            payload: payload as { parameterUpdates: { myParam: string } },
            resolve: resolve as (
              value: { parameterUpdates: { myParam: string } },
            ) => void,
          });
        }),
      }),
    );

    return {
      get pendingCount() {
        return pending.length;
      },
      resolveAll() {
        pending.forEach(({ payload, resolve }) => resolve(payload));
      },
      resolveNext() {
        const next = pending.shift();
        if (next) next.resolve(next.payload);
      },
      resolveAtIndex(index: number) {
        const item = pending[index];
        if (item) {
          pending.splice(index, 1);
          item.resolve(item.payload);
        }
      },
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    mockWidgetClient.hostEventTarget = new FoundryHostEventTarget();
  });

  afterEach(() => {
    unmountWidget();
    vi.useRealTimers();
  });

  it("should emit both events when different events are called", async () => {
    const deferred = createDeferredTransformMock();
    const emit = await mountWidget();

    act(() => {
      emit("eventA", { parameterUpdates: { myParam: "valueA" } });
      emit("eventB", { parameterUpdates: { myParam: "valueB" } });
    });

    expect(deferred.pendingCount).toBe(2);

    await act(async () => {
      deferred.resolveAll();
      await vi.runAllTimersAsync();
    });

    // Both events should be emitted
    expect(mockEmitEvent).toHaveBeenCalledTimes(2);
    expect(mockEmitEvent).toHaveBeenCalledWith("eventA", {
      parameterUpdates: { myParam: "valueA" },
    });
    expect(mockEmitEvent).toHaveBeenCalledWith("eventB", {
      parameterUpdates: { myParam: "valueB" },
    });
  });

  it("should only emit the last call even when transforms resolve out of order", async () => {
    const deferred = createDeferredTransformMock();
    const emit = await mountWidget();

    // Call emitEvent 3 times rapidly
    act(() => {
      emit("eventA", { parameterUpdates: { myParam: "first" } });
      emit("eventA", { parameterUpdates: { myParam: "second" } });
      emit("eventA", { parameterUpdates: { myParam: "third" } });
    });

    expect(deferred.pendingCount).toBe(3);

    // Resolve in different order: second first, then third, then first
    // This proves only the last *call* emits, not just the last to resolve
    await act(async () => {
      deferred.resolveAtIndex(1); // "second" resolves first - should not emit
      await vi.runAllTimersAsync();
    });

    // No emit yet since "second" wasn't the last call
    expect(mockEmitEvent).toHaveBeenCalledTimes(0);

    await act(async () => {
      deferred.resolveAtIndex(1); // "third" resolves second (now at index 1)
      await vi.runAllTimersAsync();
    });

    // Now "third" should emit because it was the last call
    expect(mockEmitEvent).toHaveBeenCalledTimes(1);
    expect(mockEmitEvent).toHaveBeenCalledWith("eventA", {
      parameterUpdates: { myParam: "third" },
    });

    await act(async () => {
      deferred.resolveAtIndex(0); // "first" resolves last - should not emit
      await vi.runAllTimersAsync();
    });

    // Still only one emit - all stale calls are ignored
    expect(mockEmitEvent).toHaveBeenCalledTimes(1);
  });

  it("should emit all calls when they complete sequentially", async () => {
    const deferred = createDeferredTransformMock();
    const emit = await mountWidget();

    // First call
    act(() => {
      emit("eventA", { parameterUpdates: { myParam: "first" } });
    });

    // Complete first call before making second
    await act(async () => {
      deferred.resolveNext();
      await vi.runAllTimersAsync();
    });

    expect(mockEmitEvent).toHaveBeenCalledTimes(1);
    expect(mockEmitEvent).toHaveBeenLastCalledWith("eventA", {
      parameterUpdates: { myParam: "first" },
    });

    // Second call after first completed
    act(() => {
      emit("eventA", { parameterUpdates: { myParam: "second" } });
    });

    await act(async () => {
      deferred.resolveNext();
      await vi.runAllTimersAsync();
    });

    // Both sequential calls should be emitted
    expect(mockEmitEvent).toHaveBeenCalledTimes(2);
    expect(mockEmitEvent).toHaveBeenLastCalledWith("eventA", {
      parameterUpdates: { myParam: "second" },
    });
  });

  it("should emit all rapid calls synchronously when passThrough type is returned", async () => {
    // Mock transformEmitEventPayload to return passThrough (synchronous) results
    vi.mocked(transformEmitEventPayload).mockImplementation(
      (_config, _eventId, payload) => ({
        type: "passThrough" as const,
        payload: payload as { parameterUpdates: { myParam: string } },
      }),
    );

    const emit = await mountWidget();

    // Emit 5 events rapidly - all should go through synchronously
    act(() => {
      emit("eventA", { parameterUpdates: { myParam: "first" } });
      emit("eventA", { parameterUpdates: { myParam: "second" } });
      emit("eventA", { parameterUpdates: { myParam: "third" } });
      emit("eventA", { parameterUpdates: { myParam: "fourth" } });
      emit("eventA", { parameterUpdates: { myParam: "fifth" } });
    });

    // All 5 should be emitted immediately without waiting for any async operations
    expect(mockEmitEvent).toHaveBeenCalledTimes(5);
    expect(mockEmitEvent).toHaveBeenNthCalledWith(1, "eventA", {
      parameterUpdates: { myParam: "first" },
    });
    expect(mockEmitEvent).toHaveBeenNthCalledWith(2, "eventA", {
      parameterUpdates: { myParam: "second" },
    });
    expect(mockEmitEvent).toHaveBeenNthCalledWith(3, "eventA", {
      parameterUpdates: { myParam: "third" },
    });
    expect(mockEmitEvent).toHaveBeenNthCalledWith(4, "eventA", {
      parameterUpdates: { myParam: "fourth" },
    });
    expect(mockEmitEvent).toHaveBeenNthCalledWith(5, "eventA", {
      parameterUpdates: { myParam: "fifth" },
    });
  });
});
