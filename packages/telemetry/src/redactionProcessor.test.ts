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

import type { LogRecordProcessor, SdkLogRecord } from "@opentelemetry/sdk-logs";
import { LoggerProvider } from "@opentelemetry/sdk-logs";
import { describe, expect, it } from "vitest";
import { LOG_MESSAGE, LOG_TAGS } from "./foundryAttributes.js";
import type { PreExportProcessorOptions } from "./redactionProcessor.js";
import { createPreExportProcessor } from "./redactionProcessor.js";

function makeNext() {
  const emitted: SdkLogRecord[] = [];
  const next: LogRecordProcessor = {
    onEmit(record: SdkLogRecord): void {
      emitted.push(record);
    },
    forceFlush(): Promise<void> {
      return Promise.resolve();
    },
    shutdown(): Promise<void> {
      return Promise.resolve();
    },
  };
  return { emitted, next };
}

function emitMessages(
  options: Omit<PreExportProcessorOptions, "next"> & {
    next: LogRecordProcessor;
  },
  messages: string[],
): void {
  const processor = createPreExportProcessor(options);
  const provider = new LoggerProvider({ processors: [processor] });
  const logger = provider.getLogger("test");
  for (const message of messages) {
    logger.emit({ body: message, attributes: { [LOG_MESSAGE]: message } });
  }
}

describe("createPreExportProcessor", () => {
  it("forwards records to the next processor by default", () => {
    const { emitted, next } = makeNext();
    emitMessages({ next }, ["a", "b"]);

    expect(emitted).toHaveLength(2);
    expect(emitted.map((r) => r.attributes[LOG_MESSAGE])).toEqual(["a", "b"]);
  });

  it("drops records that beforeSend returns null for", () => {
    const { emitted, next } = makeNext();
    emitMessages(
      {
        next,
        beforeSend: (record) => record.message === "secret" ? null : record,
      },
      ["keep", "secret"],
    );

    expect(emitted).toHaveLength(1);
    expect(emitted[0].attributes[LOG_MESSAGE]).toBe("keep");
  });

  it("writes beforeSend edits back onto the record", () => {
    const { emitted, next } = makeNext();
    emitMessages(
      {
        next,
        beforeSend: (record) => ({
          ...record,
          message: "[redacted]",
          tags: { safe: "1" },
        }),
      },
      ["original"],
    );

    expect(emitted[0].attributes[LOG_MESSAGE]).toBe("[redacted]");
    expect(emitted[0].attributes[LOG_TAGS]).toEqual({ safe: "1" });
  });

  it("exposes the severity text to the hook", () => {
    const { emitted, next } = makeNext();
    const seen: Array<string | undefined> = [];
    const processor = createPreExportProcessor({
      next,
      beforeSend: (record) => {
        seen.push(record.severity);
        return record;
      },
    });
    const provider = new LoggerProvider({ processors: [processor] });
    provider.getLogger("test").emit({
      body: "hi",
      severityText: "WARN",
      attributes: { [LOG_MESSAGE]: "hi" },
    });

    expect(seen).toEqual(["WARN"]);
  });
});
