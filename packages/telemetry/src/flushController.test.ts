/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { afterEach, describe, expect, it, vi } from "vitest";
import type { LogEntry } from "./attributes.js";
import type { FlushControllerConfig } from "./flushController.js";
import { createFlushController } from "./flushController.js";
import { buildResource } from "./resource.js";
import type { LogWriteRequest, Transport } from "./transport.js";

function entry(message: string): LogEntry {
  return { timestamp: "2024-01-01T00:00:00.000Z", severity: "INFO", message };
}

function makeTransport(): Transport & {
  emit: ReturnType<typeof vi.fn>;
} {
  return {
    emit: vi.fn<
      (
        request: LogWriteRequest,
        options?: { unload?: boolean },
      ) => Promise<void>
    >().mockResolvedValue(undefined),
  };
}

function config(
  transport: Transport,
  overrides: Partial<FlushControllerConfig> = {},
): FlushControllerConfig {
  return {
    traceOwningRid: "ri.app",
    resource: buildResource({ applicationRid: "ri.app" }),
    transport,
    scheduledDelayMillis: 5000,
    maxExportBatchSize: 512,
    maxQueueSize: 2048,
    unloadBatchSize: 64,
    ...overrides,
  };
}

describe("createFlushController", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("flushes one write request per flush", async () => {
    const transport = makeTransport();
    const controller = createFlushController(config(transport));
    controller.add(entry("a"));
    controller.add(entry("b"));

    await controller.flush();

    expect(transport.emit).toHaveBeenCalledTimes(1);
    const request = transport.emit.mock.calls[0][0];
    expect(request.traceOwningRid).toBe("ri.app");
    expect(request.logs).toHaveLength(2);
    controller.shutdown();
  });

  it("flushes on the scheduled interval", () => {
    vi.useFakeTimers();
    const transport = makeTransport();
    const controller = createFlushController(
      config(transport, { scheduledDelayMillis: 5000 }),
    );
    controller.add(entry("a"));

    expect(transport.emit).not.toHaveBeenCalled();
    vi.advanceTimersByTime(5000);
    expect(transport.emit).toHaveBeenCalledTimes(1);
    controller.shutdown();
  });

  it("does not emit on the interval when the queue is empty", () => {
    vi.useFakeTimers();
    const transport = makeTransport();
    const controller = createFlushController(config(transport));

    vi.advanceTimersByTime(5000);
    expect(transport.emit).not.toHaveBeenCalled();
    controller.shutdown();
  });

  it("flushes immediately when the buffer fills", () => {
    const transport = makeTransport();
    const controller = createFlushController(
      config(transport, { maxExportBatchSize: 3 }),
    );
    controller.add(entry("a"));
    controller.add(entry("b"));
    expect(transport.emit).not.toHaveBeenCalled();

    controller.add(entry("c"));
    expect(transport.emit).toHaveBeenCalledTimes(1);
    expect(transport.emit.mock.calls[0][0].logs).toHaveLength(3);
    controller.shutdown();
  });

  it("respects maxQueueSize by dropping overflow entries", () => {
    const transport = makeTransport();
    const controller = createFlushController(
      config(transport, { maxQueueSize: 2, maxExportBatchSize: 100 }),
    );
    controller.add(entry("a"));
    controller.add(entry("b"));
    controller.add(entry("c"));

    expect(controller.size()).toBe(2);
    controller.shutdown();
  });

  it("sends a keepalive unload flush with the smaller batch size", () => {
    const transport = makeTransport();
    const controller = createFlushController(
      config(transport, { unloadBatchSize: 1, maxExportBatchSize: 100 }),
    );
    controller.add(entry("a"));
    controller.add(entry("b"));

    controller.flushOnUnload();

    expect(transport.emit).toHaveBeenCalledTimes(1);
    expect(transport.emit.mock.calls[0][0].logs).toHaveLength(1);
    expect(transport.emit.mock.calls[0][1]).toEqual({ unload: true });
    controller.shutdown();
  });

  it("runs beforeSend and drops entries that return null", async () => {
    const transport = makeTransport();
    const controller = createFlushController(
      config(transport, {
        beforeSend: (e) => (e.message === "secret" ? null : e),
      }),
    );
    controller.add(entry("keep"));
    controller.add(entry("secret"));

    await controller.flush();
    expect(transport.emit.mock.calls[0][0].logs).toHaveLength(1);
    expect(transport.emit.mock.calls[0][0].logs[0].message).toBe("keep");
    controller.shutdown();
  });

  it("runs beforeSend and emits the transformed entry", async () => {
    const transport = makeTransport();
    const controller = createFlushController(
      config(transport, {
        beforeSend: (e) => ({ ...e, message: "redacted" }),
      }),
    );
    controller.add(entry("raw"));

    await controller.flush();
    expect(transport.emit.mock.calls[0][0].logs[0].message).toBe("redacted");
    controller.shutdown();
  });
});
