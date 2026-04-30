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

import { PassThrough } from "node:stream";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { logDuration } from "./logDuration.js";
import { SlsLogger } from "./SlsLogger.js";

interface CapturedStream {
  stream: NodeJS.WritableStream;
  writes: string[];
}

function captureStream(): CapturedStream {
  const stream = new PassThrough();
  const writes: string[] = [];
  stream.on("data", (chunk: Buffer) => writes.push(chunk.toString("utf-8")));
  return { stream, writes };
}

function parseEntries(writes: string[]): Array<Record<string, unknown>> {
  return writes
    .join("")
    .split("\n")
    .filter(line => line.length > 0)
    .map(line => JSON.parse(line));
}

describe("SlsLogger", () => {
  let originalJobId: string | undefined;
  let originalTraceId: string | undefined;

  beforeEach(() => {
    originalJobId = process.env.JOB_ID;
    originalTraceId = process.env.TRACE_ID;
    delete process.env.JOB_ID;
    delete process.env.TRACE_ID;
  });

  afterEach(() => {
    if (originalJobId !== undefined) process.env.JOB_ID = originalJobId;
    else delete process.env.JOB_ID;
    if (originalTraceId !== undefined) {
      process.env.TRACE_ID = originalTraceId;
    } else delete process.env.TRACE_ID;
  });

  it("emits valid SLS service.1 JSON to the configured stream", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("hello world");

    const [entry] = parseEntries(writes);
    expect(entry).toMatchObject({
      type: "service.1",
      level: "INFO",
      message: "hello world",
      thread: "main",
      params: {},
    });
    expect(typeof entry.time).toBe("string");
    expect(entry.origin).toMatch(/^[^/]+:\d+$/);
  });

  it("appends a newline after each entry", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("a");
    logger.info("b");

    const joined = writes.join("");
    expect(joined.endsWith("\n")).toBe(true);
    expect(joined.split("\n").filter(Boolean)).toHaveLength(2);
  });

  it.each(
    [
      ["debug", "DEBUG"],
      ["info", "INFO"],
      ["warn", "WARN"],
      ["error", "ERROR"],
    ] as const,
  )("maps %s() to level %s", (method, level) => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger[method]("msg");

    const [entry] = parseEntries(writes);
    expect(entry.level).toBe(level);
  });

  it("injects jobId and traceId from env into params", () => {
    process.env.JOB_ID = "job-123";
    process.env.TRACE_ID = "trace-abc";
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg", { params: { count: 5 } });

    const [entry] = parseEntries(writes);
    expect(entry.params).toEqual({
      jobId: "job-123",
      traceId: "trace-abc",
      count: 5,
    });
  });

  it("omits jobId and traceId when env vars are absent", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg");

    const [entry] = parseEntries(writes);
    expect(entry.params).toEqual({});
  });

  it("keeps params and unsafeParams in separate fields", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg", {
      params: { durationMs: 42 },
      unsafeParams: { apiName: "Employee" },
    });

    const [entry] = parseEntries(writes);
    expect(entry.params).toEqual({ durationMs: 42 });
    expect(entry.unsafeParams).toEqual({ apiName: "Employee" });
  });

  it("omits unsafeParams field when empty", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg", { unsafeParams: {} });

    const [entry] = parseEntries(writes);
    expect(entry).not.toHaveProperty("unsafeParams");
  });

  it("includes stacktrace on error() with an Error", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);
    const err = new Error("boom");

    logger.error("failure", undefined, err);

    const [entry] = parseEntries(writes);
    expect(entry.level).toBe("ERROR");
    expect(entry.stacktrace).toContain("Error: boom");
  });
});

describe("logDuration", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-30T12:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("emits start and complete with durationMs on success", async () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    const result = await logDuration(logger, "Loading data", () => {
      vi.advanceTimersByTime(150);
      return Promise.resolve("value");
    });

    expect(result).toBe("value");
    const entries = parseEntries(writes);
    expect(entries).toHaveLength(2);
    expect(entries[0]).toMatchObject({
      level: "INFO",
      message: "Loading data...",
    });
    expect(entries[1]).toMatchObject({
      level: "INFO",
      message: "Loading data complete.",
      params: { durationMs: 150 },
    });
  });

  it("emits start and failure with durationMs on throw, then re-throws", async () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);
    const err = new Error("nope");

    await expect(
      logDuration(logger, "Loading data", () => {
        vi.advanceTimersByTime(75);
        return Promise.reject(err);
      }),
    ).rejects.toBe(err);

    const entries = parseEntries(writes);
    expect(entries).toHaveLength(2);
    expect(entries[0]).toMatchObject({ message: "Loading data..." });
    expect(entries[1]).toMatchObject({
      level: "ERROR",
      message: "Loading data failed.",
      params: { durationMs: 75 },
    });
    expect(entries[1].stacktrace).toContain("Error: nope");
  });

  it("threads extra params through start/complete/fail records", async () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    await logDuration(
      logger,
      "Generating",
      () => Promise.resolve(undefined),
      {
        params: { ontologyRid: "ri.x" },
        unsafeParams: { packageName: "@my/pkg" },
      },
    );

    const entries = parseEntries(writes);
    expect(entries[0].params).toMatchObject({ ontologyRid: "ri.x" });
    expect(entries[0].unsafeParams).toEqual({ packageName: "@my/pkg" });
    expect(entries[1].params).toMatchObject({
      ontologyRid: "ri.x",
      durationMs: 0,
    });
    expect(entries[1].unsafeParams).toEqual({ packageName: "@my/pkg" });
  });
});
