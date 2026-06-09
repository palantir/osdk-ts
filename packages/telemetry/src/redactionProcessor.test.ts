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
import { TRACE_ID } from "./foundryAttributes.js";
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
    logger.emit({ body: message, attributes: { message } });
  }
}

describe("createPreExportProcessor", () => {
  it("forwards records to the next processor by default", () => {
    const { emitted, next } = makeNext();
    emitMessages({ next }, ["a", "b"]);

    expect(emitted).toHaveLength(2);
    expect(emitted.map((r) => r.attributes.message)).toEqual(["a", "b"]);
  });

  it("drops records that beforeSend returns null for", () => {
    const { emitted, next } = makeNext();
    emitMessages(
      {
        next,
        beforeSend: (record) =>
          record.attributes.message === "secret" ? null : record,
      },
      ["keep", "secret"],
    );

    expect(emitted).toHaveLength(1);
    expect(emitted[0].attributes.message).toBe("keep");
  });

  it("stamps a trace id from the provider onto each record", () => {
    const { emitted, next } = makeNext();
    emitMessages({ next, traceIdProvider: () => "trace-1" }, ["a"]);

    expect(emitted[0].attributes[TRACE_ID]).toBe("trace-1");
  });

  it("leaves the record untouched when the trace-id provider returns undefined", () => {
    const { emitted, next } = makeNext();
    emitMessages({ next, traceIdProvider: () => undefined }, ["a"]);

    expect(emitted[0].attributes[TRACE_ID]).toBeUndefined();
  });
});
