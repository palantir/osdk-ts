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

import type {
  LogRecordExporter,
  ReadableLogRecord,
} from "@opentelemetry/sdk-logs";
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
} from "@opentelemetry/sdk-logs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createFoundryLogExporter } from "./otlpExporter.js";

const ENDPOINT = "https://example.com/api/v2/observability/otlp/v1/logs";

/** Emit a single record through the SDK to obtain a valid ReadableLogRecord. */
function captureRecord(): ReadableLogRecord {
  let captured: ReadableLogRecord | undefined;
  const capturing: LogRecordExporter = {
    export(logs, resultCallback): void {
      captured = logs[0];
      resultCallback({ code: 0 });
    },
    forceFlush(): Promise<void> {
      return Promise.resolve();
    },
    shutdown(): Promise<void> {
      return Promise.resolve();
    },
  };
  const provider = new LoggerProvider({
    processors: [new SimpleLogRecordProcessor(capturing)],
  });
  provider.getLogger("test").emit({
    body: "hi",
    attributes: { message: "hi" },
  });
  if (captured == null) {
    throw new Error("expected a record to be captured");
  }
  return captured;
}

function exportOnce(
  exporter: LogRecordExporter,
  record: ReadableLogRecord,
): Promise<void> {
  return new Promise((resolve, reject) => {
    exporter.export([record], (result) => {
      if (result.error == null) {
        resolve();
      } else {
        reject(result.error);
      }
    });
  });
}

function headersOf(init: RequestInit | undefined): Record<string, string> {
  return (init?.headers ?? {}) as Record<string, string>;
}

describe("createFoundryLogExporter", () => {
  let fetchFn: ReturnType<typeof vi.fn<typeof globalThis.fetch>>;

  beforeEach(() => {
    fetchFn = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
      new Response(null, { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchFn);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("posts JSON to the Foundry endpoint with keepalive", async () => {
    const exporter = createFoundryLogExporter({
      baseUrl: "https://example.com/",
      tokenProvider: async () => "tok",
    });

    await exportOnce(exporter, captureRecord());

    expect(fetchFn).toHaveBeenCalledTimes(1);
    const [url, init] = fetchFn.mock.calls[0];
    expect(String(url)).toBe(ENDPOINT);
    expect(init?.keepalive).toBe(true);
    expect(headersOf(init)["Content-Type"]).toBe("application/json");
  });

  it("requests a fresh bearer on every export", async () => {
    let n = 0;
    const exporter = createFoundryLogExporter({
      baseUrl: "https://example.com/",
      tokenProvider: async () => `tok-${++n}`,
    });
    const record = captureRecord();

    await exportOnce(exporter, record);
    await exportOnce(exporter, record);

    expect(fetchFn).toHaveBeenCalledTimes(2);
    expect(headersOf(fetchFn.mock.calls[0][1]).Authorization).toBe(
      "Bearer tok-1",
    );
    expect(headersOf(fetchFn.mock.calls[1][1]).Authorization).toBe(
      "Bearer tok-2",
    );
  });

  it("fails without a network call when no token is ever available", async () => {
    const exporter = createFoundryLogExporter({
      baseUrl: "https://example.com/",
      tokenProvider: async () => {
        throw new Error("token fetch failed");
      },
    });

    await expect(exportOnce(exporter, captureRecord())).rejects.toThrow();
    expect(fetchFn).not.toHaveBeenCalled();
  });

  it("opens the circuit after two 401s and stops calling the gateway", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    fetchFn.mockResolvedValue(new Response(null, { status: 401 }));
    const exporter = createFoundryLogExporter({
      baseUrl: "https://example.com/",
      tokenProvider: async () => "tok",
    });
    const record = captureRecord();

    await exportOnce(exporter, record).catch(() => {});
    await exportOnce(exporter, record).catch(() => {});
    const callsAfterOpen = fetchFn.mock.calls.length;
    await exportOnce(exporter, record);

    expect(fetchFn.mock.calls.length).toBe(callsAfterOpen);
    warn.mockRestore();
  });

  it("opens the circuit immediately on a 400", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    fetchFn.mockResolvedValue(new Response(null, { status: 400 }));
    const exporter = createFoundryLogExporter({
      baseUrl: "https://example.com/",
      tokenProvider: async () => "tok",
    });
    const record = captureRecord();

    await exportOnce(exporter, record).catch(() => {});
    await exportOnce(exporter, record);

    expect(fetchFn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
  });

  it("uses the cached token synchronously on unload", async () => {
    const tokenProvider = vi.fn(async () => "tok");
    const exporter = createFoundryLogExporter({
      baseUrl: "https://example.com/",
      tokenProvider,
    });
    const record = captureRecord();

    await exportOnce(exporter, record);
    vi.stubGlobal("document", { visibilityState: "hidden" });
    try {
      await exportOnce(exporter, record);
    } finally {
      vi.unstubAllGlobals();
      vi.stubGlobal("fetch", fetchFn);
    }

    expect(fetchFn).toHaveBeenCalledTimes(2);
    expect(tokenProvider).toHaveBeenCalledTimes(1);
    expect(headersOf(fetchFn.mock.calls[1][1]).Authorization).toBe(
      "Bearer tok",
    );
  });
});
