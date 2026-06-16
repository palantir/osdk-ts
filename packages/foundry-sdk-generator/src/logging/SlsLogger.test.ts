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

import { GeneratorError } from "@osdk/generator-converters";
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

// Strip fields that are non-deterministic across runs before snapshotting.
// `time` changes every run; `stacktrace` contains absolute file paths.
function strip(entry: Record<string, unknown>): Record<string, unknown> {
  const { time: _time, stacktrace: _stacktrace, ...rest } = entry;
  return rest;
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
    expect(typeof entry.time).toBe("string");
    expect(strip(entry)).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "hello world",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {},
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
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

  it("injects jobId from env into params and traceId as a top-level field", () => {
    process.env.JOB_ID = "job-123";
    process.env.TRACE_ID = "trace-abc";
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg", { params: { count: 5 } });

    const [entry] = parseEntries(writes);
    expect(strip(entry)).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "msg",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "count": 5,
          "jobId": "job-123",
        },
        "safe": true,
        "thread": "main",
        "traceId": "trace-abc",
        "type": "service.1",
      }
    `);
  });

  it("omits jobId and traceId when env vars are absent", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg");

    const [entry] = parseEntries(writes);
    expect(strip(entry)).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "msg",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {},
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
  });

  it("keeps params and unsafeParams in separate fields and omits safe", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg", {
      params: { durationMs: 42 },
      unsafeParams: { apiName: "Employee" },
    });

    const [entry] = parseEntries(writes);
    expect(strip(entry)).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "msg",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "durationMs": 42,
        },
        "thread": "main",
        "type": "service.1",
        "unsafeParams": {
          "apiName": "Employee",
        },
      }
    `);
  });

  it("marks records with no unsafeParams as safe:true", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg", { params: { count: 5 } });

    const [entry] = parseEntries(writes);
    expect(strip(entry)).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "msg",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "count": 5,
        },
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
  });

  it("treats empty unsafeParams as no unsafe data and marks safe:true", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);

    logger.info("msg", { unsafeParams: {} });

    const [entry] = parseEntries(writes);
    expect(strip(entry)).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "msg",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {},
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
  });

  it("includes stacktrace on error() with an Error", () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);
    const err = new Error("boom");

    logger.error("failure", undefined, err);

    const [entry] = parseEntries(writes);
    expect(entry.stacktrace).toContain("Error: boom");
    expect(strip(entry)).toMatchInlineSnapshot(`
      {
        "level": "ERROR",
        "message": "failure",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {},
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
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
    expect(strip(entries[0])).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "Loading data...",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {},
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
    expect(strip(entries[1])).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "Loading data complete.",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "durationMs": 150,
        },
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
  });

  it("propagates unsafeParams from errors that carry them", async () => {
    const { stream, writes } = captureStream();
    const logger = new SlsLogger(stream);
    const err = new GeneratorError("Something failed", { apiName: "MyObject" });

    await expect(
      logDuration(logger, "Loading", () => Promise.reject(err)),
    ).rejects.toBe(err);

    const entries = parseEntries(writes);
    expect(strip(entries[1])).toMatchInlineSnapshot(`
      {
        "level": "ERROR",
        "message": "Loading failed.",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "durationMs": 0,
        },
        "thread": "main",
        "type": "service.1",
        "unsafeParams": {
          "apiName": "MyObject",
        },
      }
    `);
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
    expect(entries[1].stacktrace).toContain("Error: nope");
    expect(strip(entries[0])).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "Loading data...",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {},
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
    expect(strip(entries[1])).toMatchInlineSnapshot(`
      {
        "level": "ERROR",
        "message": "Loading data failed.",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "durationMs": 75,
        },
        "safe": true,
        "thread": "main",
        "type": "service.1",
      }
    `);
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
    expect(strip(entries[0])).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "Generating...",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "ontologyRid": "ri.x",
        },
        "thread": "main",
        "type": "service.1",
        "unsafeParams": {
          "packageName": "@my/pkg",
        },
      }
    `);
    expect(strip(entries[1])).toMatchInlineSnapshot(`
      {
        "level": "INFO",
        "message": "Generating complete.",
        "origin": "@osdk/foundry-sdk-generator",
        "params": {
          "durationMs": 0,
          "ontologyRid": "ri.x",
        },
        "thread": "main",
        "type": "service.1",
        "unsafeParams": {
          "packageName": "@my/pkg",
        },
      }
    `);
  });
});
