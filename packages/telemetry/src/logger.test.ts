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

import { describe, expect, it, vi } from "vitest";
import type { LogEntry } from "./attributes.js";
import type { FlushController } from "./flushController.js";
import type { Lifecycle } from "./lifecycle.js";
import { createLogger } from "./logger.js";

function harness() {
  const entries: LogEntry[] = [];
  const controller: FlushController = {
    add: (entry) => {
      entries.push(entry);
    },
    flush: vi.fn<() => Promise<void>>().mockResolvedValue(undefined),
    flushOnUnload: vi.fn(),
    size: () => entries.length,
    shutdown: vi.fn(),
  };
  const lifecycle: Lifecycle = { unregister: vi.fn() };
  return { entries, controller, lifecycle };
}

describe("createLogger", () => {
  it("enqueues info, warn, and debug with the right severity", () => {
    const { entries, controller, lifecycle } = harness();
    const logger = createLogger(controller, lifecycle);

    logger.info("booted");
    logger.warn("retrying", { attempt: 2 });
    logger.debug("rendered", { itemCount: 3 });

    expect(entries.map((e) => e.severity)).toEqual(["INFO", "WARN", "DEBUG"]);
    expect(entries[0].context).toBeUndefined();
    expect(entries[1].context).toEqual({ attempt: 2 });
  });

  it("captures an error via the message overload", () => {
    const { entries, controller, lifecycle } = harness();
    const logger = createLogger(controller, lifecycle);

    logger.error("payment failed", { orderId: "o1" }, new Error("boom"));

    const entry = entries[0];
    expect(entry.severity).toBe("ERROR");
    expect(entry.message).toBe("payment failed");
    expect(entry.context).toEqual({ orderId: "o1" });
    expect(entry.error?.message).toBe("boom");
  });

  it("captures an error via the error-only overload", () => {
    const { entries, controller, lifecycle } = harness();
    const logger = createLogger(controller, lifecycle);

    logger.error(new TypeError("bad input"));

    const entry = entries[0];
    expect(entry.severity).toBe("ERROR");
    expect(entry.message).toBe("bad input");
    expect(entry.error?.name).toBe("TypeError");
  });

  it("delegates flush to the controller", async () => {
    const { controller, lifecycle } = harness();
    const logger = createLogger(controller, lifecycle);

    await logger.flush();
    expect(controller.flush).toHaveBeenCalledTimes(1);
  });

  it("flushes, stops the timer, and unregisters on shutdown", async () => {
    const { controller, lifecycle } = harness();
    const logger = createLogger(controller, lifecycle);

    await logger.shutdown();
    expect(controller.flush).toHaveBeenCalledTimes(1);
    expect(controller.shutdown).toHaveBeenCalledTimes(1);
    expect(lifecycle.unregister).toHaveBeenCalledTimes(1);
  });
});
