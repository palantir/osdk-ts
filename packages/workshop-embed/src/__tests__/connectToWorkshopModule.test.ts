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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { connectToWorkshopModule } from "../connectToWorkshopModule.js";
import { createMessage } from "../protocol.js";
import {
  createTestChannel,
  createTestWindow,
  dispatchMessage,
  type TestChannel,
  type TestWindow,
} from "./testUtils.js";

describe("connectToWorkshopModule", () => {
  const origin = "https://workshop.example.com";
  let host: TestWindow;
  let target: TestWindow;
  let channel: TestChannel;
  let controller: AbortController;

  beforeEach(() => {
    vi.useFakeTimers({
      toFake: ["setTimeout", "clearTimeout", "setInterval", "clearInterval"],
    });
    host = createTestWindow();
    target = createTestWindow();
    channel = createTestChannel();
    controller = new AbortController();
    vi.stubGlobal("MessageChannel", function MockMessageChannel() {
      return channel;
    });
  });

  afterEach(() => {
    controller.abort();
    expect(vi.getTimerCount()).toBe(0);
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  function connect(
    options: { targetOrigin?: string; timeoutMs?: number } = {},
  ) {
    return connectToWorkshopModule({
      hostWindow: host.asWindow(),
      targetWindow: target.asWindow(),
      targetOrigin: origin,
      signal: controller.signal,
      ...options,
    });
  }

  function sessionId(): string {
    return (target.postMessage.mock.calls[0][0] as { sessionId: string })
      .sessionId;
  }

  function available() {
    dispatchMessage(
      host,
      createMessage("available", sessionId()),
      target.asWindow(),
      origin,
    );
  }

  function acknowledge() {
    dispatchMessage(channel.port1, createMessage("connected", sessionId()));
  }

  it("transfers one port to the exact origin and resolves only after a port acknowledgement", async () => {
    const result = connect({ targetOrigin: `${origin}/workspace/` });
    const resolved = vi.fn();
    void result.then(resolved);
    expect(target.postMessage).toHaveBeenCalledWith(
      createMessage("probe", sessionId()),
      origin,
    );
    available();
    expect(target.postMessage).toHaveBeenLastCalledWith(
      createMessage("connect", sessionId()),
      origin,
      [channel.port2],
    );
    dispatchMessage(
      host,
      createMessage("connected", sessionId()),
      target.asWindow(),
      origin,
    );
    dispatchMessage(channel.port1, createMessage("connected", "stale-session"));
    await Promise.resolve();
    expect(resolved).not.toHaveBeenCalled();
    acknowledge();
    const connection = await result;
    expect(connection.port).toBe(channel.port1);
    expect(connection.sessionId).toBe(sessionId());
    expect(vi.getTimerCount()).toBe(0);
    target.postMessage.mockClear();
    dispatchMessage(
      host,
      createMessage("available", connection.sessionId),
      target.asWindow(),
      origin,
    );
    expect(target.postMessage).not.toHaveBeenCalled();
    connection.disconnect();
    connection.disconnect();
    expect(channel.port1.close).toHaveBeenCalledTimes(1);
    expect(channel.port1.postMessage).toHaveBeenCalledWith(
      createMessage("disconnect", connection.sessionId),
    );
  });

  it("ignores available messages from other windows, origins, versions, and sessions", async () => {
    const result = connect();
    const valid = createMessage("available", sessionId());
    dispatchMessage(host, valid, createTestWindow().asWindow(), origin);
    dispatchMessage(
      host,
      valid,
      target.asWindow(),
      "https://attacker.example.com",
    );
    dispatchMessage(host, { ...valid, version: 2 }, target.asWindow(), origin);
    dispatchMessage(
      host,
      { ...valid, sessionId: "old" },
      target.asWindow(),
      origin,
    );
    dispatchMessage(host, valid, target.asWindow(), origin, [channel.port2]);
    expect(target.postMessage).toHaveBeenCalledTimes(1);
    available();
    acknowledge();
    (await result).disconnect();
  });

  it("retries while the child starts, then ignores late replies after timing out", async () => {
    const result = connect({ timeoutMs: 1_000 });
    const rejected = expect(result).rejects.toThrow("timed out");
    await vi.advanceTimersByTimeAsync(750);
    expect(target.postMessage.mock.calls.length).toBeGreaterThan(1);
    await vi.advanceTimersByTimeAsync(250);
    await rejected;
    const attempts = target.postMessage.mock.calls.length;
    available();
    await vi.advanceTimersByTimeAsync(1_000);
    expect(target.postMessage).toHaveBeenCalledTimes(attempts);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("closes a transferred channel if acknowledgement never arrives", async () => {
    const result = connect({ timeoutMs: 1_000 });
    const rejected = expect(result).rejects.toThrow("timed out");
    available();
    await vi.advanceTimersByTimeAsync(1_000);
    await rejected;
    expect(channel.port1.close).toHaveBeenCalledTimes(1);
  });

  it("rejects an already aborted signal without sending a probe", async () => {
    controller.abort();
    await expect(connect()).rejects.toMatchObject({ name: "AbortError" });
    expect(target.postMessage).not.toHaveBeenCalled();
  });

  it("connects when crypto.randomUUID is unavailable", async () => {
    vi.stubGlobal("crypto", {});
    const result = connect();
    available();
    acknowledge();
    expect((await result).sessionId).toBe(sessionId());
  });

  it.each(["before transfer", "after transfer", "after connection"])(
    "cleans up on abort %s",
    async (phase) => {
      const result = connect();
      if (phase !== "before transfer") available();
      if (phase === "after connection") {
        acknowledge();
        await result;
      }
      controller.abort();
      if (phase !== "after connection")
        await expect(result).rejects.toMatchObject({ name: "AbortError" });
      expect(channel.port1.close).toHaveBeenCalledTimes(1);
      expect(channel.port2.close).toHaveBeenCalledTimes(
        phase === "before transfer" ? 1 : 0,
      );
    },
  );

  it("closes an established channel when the parent navigates away", async () => {
    const result = connect();
    available();
    acknowledge();
    await result;
    host.dispatchEvent(new Event("pagehide"));
    expect(channel.port1.close).toHaveBeenCalledTimes(1);
  });

  it("rejects when the peer disconnects before acknowledging", async () => {
    const result = connect();
    available();
    dispatchMessage(channel.port1, createMessage("disconnect", sessionId()));
    await expect(result).rejects.toThrow("before acknowledgement");
  });

  it("closes both ports if transferring fails", async () => {
    const result = connect();
    target.postMessage.mockImplementationOnce(() => {
      throw new Error("Transfer failed");
    });
    available();
    await expect(result).rejects.toThrow("Transfer failed");
    expect(channel.port1.close).toHaveBeenCalledTimes(1);
    expect(channel.port2.close).toHaveBeenCalledTimes(1);
  });

  it.each(["*", "null", "data:text/html,example"])(
    "rejects invalid origin %s",
    async (targetOrigin) => {
      await expect(connect({ targetOrigin })).rejects.toBeInstanceOf(TypeError);
      expect(target.postMessage).not.toHaveBeenCalled();
    },
  );

  it.each([0, -1, Number.POSITIVE_INFINITY])(
    "rejects invalid timeout %s",
    async (timeoutMs) => {
      await expect(connect({ timeoutMs })).rejects.toBeInstanceOf(TypeError);
    },
  );
});
