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

import type { MockInstance } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MinimalLogger } from "./MinimalLogger.js";

const orderedLevels = [
  "trace",
  "debug",
  "info",
  "warn",
  "error",
  "fatal",
] as const;

describe(MinimalLogger, () => {
  const consoleTypes = ["log", "error", "warn", "trace"] as const;
  type consoleTypes = typeof consoleTypes[number];

  const consoleMocks = Object.fromEntries(
    consoleTypes.map(name =>
      [name, vi.spyOn(console, name)] as [consoleTypes, MockInstance<any>]
    ),
  ) as Record<
    typeof consoleTypes[number],
    MockInstance<any>
  >;

  beforeEach(() => {
    for (const consoleMock of Object.values(consoleMocks)) {
      consoleMock.mockClear();
    }
  });

  it("does not debug log by default", () => {
    const logger = new MinimalLogger();
    logger.debug("hi");

    for (const consoleMock of Object.values(consoleMocks)) {
      expect(consoleMock).not.toHaveBeenCalled();
    }
  });

  it("can log", () => {
    new MinimalLogger({}, {});
  });

  describe.for(orderedLevels)("For level %s", (level) => {
    const idx = orderedLevels.findIndex(a => a === level);
    expect(idx).toBeGreaterThan(-1);

    const shouldNotOutput = orderedLevels.slice(0, idx);
    const shouldOutput = orderedLevels.slice(idx);

    const x = [
      ...shouldNotOutput.map(x => [x, false] as const),
      ...shouldOutput.map(x => [x, true] as const),
    ];

    it.for(x)("It should log for %s? %s", ([levelToCheck, shouldLog]) => {
      const logger = new MinimalLogger({}, { level });

      logger[levelToCheck]("logging");

      let calls = 0;

      for (const consoleMock of Object.values(consoleMocks)) {
        calls += consoleMock.mock.calls.length;
      }

      if (shouldLog) {
        expect(calls === 1, `Should log one time but got ${calls}`);
      } else {
        expect(calls === 0, "should not call console.thing");
      }
    });
  });
});
