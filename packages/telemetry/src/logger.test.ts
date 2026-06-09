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

import type { LogRecord } from "@opentelemetry/api-logs";
import { SeverityNumber } from "@opentelemetry/api-logs";
import { describe, expect, it, vi } from "vitest";
import { LOG_MESSAGE, LOG_TAGS } from "./foundryAttributes.js";
import type { LoggerBackend } from "./logger.js";
import { createLogger } from "./logger.js";

function harness() {
  const records: LogRecord[] = [];
  const backend: LoggerBackend = {
    otelLogger: {
      emit: (record: LogRecord) => {
        records.push(record);
      },
      enabled: () => true,
    },
    flush: vi.fn<() => Promise<void>>().mockResolvedValue(undefined),
    shutdown: vi.fn<() => Promise<void>>().mockResolvedValue(undefined),
  };
  return { records, backend };
}

describe("createLogger", () => {
  it("emits info, warn, and debug with the right severity number", () => {
    const { records, backend } = harness();
    const logger = createLogger(backend);

    logger.info("booted");
    logger.warn("retrying", { attempt: 2 });
    logger.debug("rendered", { itemCount: 3 });

    expect(records.map((r) => r.severityNumber)).toEqual([
      SeverityNumber.INFO,
      SeverityNumber.WARN,
      SeverityNumber.DEBUG,
    ]);
    expect(records.map((r) => r.severityText)).toEqual([
      "INFO",
      "WARN",
      "DEBUG",
    ]);
  });

  it("puts the message in LOG_MESSAGE and context in LOG_TAGS", () => {
    const { records, backend } = harness();
    const logger = createLogger(backend);

    logger.info("checkout submitted", { orderId: "o1" });

    const attributes = records[0].attributes ?? {};
    expect(attributes[LOG_MESSAGE]).toBe("checkout submitted");
    expect(attributes[LOG_TAGS]).toEqual({ orderId: "o1" });
  });

  it("omits LOG_TAGS when there is no context or error", () => {
    const { records, backend } = harness();
    const logger = createLogger(backend);

    logger.info("booted");

    const attributes = records[0].attributes ?? {};
    expect(attributes[LOG_MESSAGE]).toBe("booted");
    expect(attributes[LOG_TAGS]).toBeUndefined();
  });

  it("captures an error via the message overload", () => {
    const { records, backend } = harness();
    const logger = createLogger(backend);

    logger.error("payment failed", { orderId: "o1" }, new Error("boom"));

    const record = records[0];
    expect(record.severityNumber).toBe(SeverityNumber.ERROR);
    expect((record.attributes ?? {})[LOG_MESSAGE]).toBe("payment failed");
    const tags = (record.attributes ?? {})[LOG_TAGS] as Record<string, unknown>;
    expect(tags.orderId).toBe("o1");
    expect((tags.error as Record<string, unknown>).message).toBe("boom");
  });

  it("captures an error via the error-only overload", () => {
    const { records, backend } = harness();
    const logger = createLogger(backend);

    logger.error(new TypeError("bad input"));

    const record = records[0];
    expect(record.severityNumber).toBe(SeverityNumber.ERROR);
    expect((record.attributes ?? {})[LOG_MESSAGE]).toBe("bad input");
    const tags = (record.attributes ?? {})[LOG_TAGS] as Record<string, unknown>;
    expect((tags.error as Record<string, unknown>).name).toBe("TypeError");
  });

  it("delegates flush to the backend", async () => {
    const { backend } = harness();
    const logger = createLogger(backend);

    await logger.flush();
    expect(backend.flush).toHaveBeenCalledTimes(1);
  });

  it("delegates shutdown to the backend", async () => {
    const { backend } = harness();
    const logger = createLogger(backend);

    await logger.shutdown();
    expect(backend.shutdown).toHaveBeenCalledTimes(1);
  });
});
