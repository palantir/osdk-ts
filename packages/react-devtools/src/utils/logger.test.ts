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

import { describe, expect, it } from "vitest";
import { createMonitorLogger } from "./logger.js";

describe("createMonitorLogger", () => {
  it("returns a logger with all required methods", () => {
    const logger = createMonitorLogger();
    expect(typeof logger.trace).toBe("function");
    expect(typeof logger.debug).toBe("function");
    expect(typeof logger.info).toBe("function");
    expect(typeof logger.warn).toBe("function");
    expect(typeof logger.error).toBe("function");
    expect(typeof logger.fatal).toBe("function");
    expect(typeof logger.isLevelEnabled).toBe("function");
    expect(typeof logger.child).toBe("function");
  });

  it("all log methods are no-ops that do not throw", () => {
    const logger = createMonitorLogger();
    expect(() => logger.trace("msg")).not.toThrow();
    expect(() => logger.debug("msg")).not.toThrow();
    expect(() => logger.info("msg")).not.toThrow();
    expect(() => logger.warn("msg")).not.toThrow();
    expect(() => logger.error("msg")).not.toThrow();
    expect(() => logger.fatal("msg")).not.toThrow();
  });

  it("isLevelEnabled always returns false", () => {
    const logger = createMonitorLogger();
    expect(logger.isLevelEnabled("trace")).toBe(false);
    expect(logger.isLevelEnabled("error")).toBe(false);
  });

  it("child returns a new logger", () => {
    const logger = createMonitorLogger();
    const child = logger.child({});
    expect(typeof child.debug).toBe("function");
    expect(child.isLevelEnabled("trace")).toBe(false);
  });

  it("accepts a custom prefix", () => {
    const logger = createMonitorLogger("[Custom]");
    expect(typeof logger.debug).toBe("function");
  });
});
