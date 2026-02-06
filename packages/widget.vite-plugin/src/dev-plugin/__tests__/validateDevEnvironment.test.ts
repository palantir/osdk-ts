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

import type { Logger } from "vite";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as validateDevEnvironment from "../validateDevEnvironment.js";

function createMockLogger(): Logger {
  return {
    info: vi.fn(),
    warn: vi.fn(),
    warnOnce: vi.fn(),
    error: vi.fn(),
    clearScreen: vi.fn(),
    hasErrorLogged: vi.fn(),
    hasWarned: false,
  };
}

describe("validateDevEnvironment", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe("warnIfWrongDevCommand", () => {
    test("warns when in Code Workspaces env but not using code-workspaces mode", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", "CODE_WORKSPACE");
      const mockLogger = createMockLogger();

      validateDevEnvironment.warnIfWrongDevCommand("development", mockLogger);

      expect(mockLogger.warn).toHaveBeenCalledTimes(1);
      expect(mockLogger.warn).toHaveBeenCalledWith(
        expect.stringContaining(
          `You should probably be using "npm run dev:remote" instead`,
        ),
      );
    });

    test("warns when using code-workspaces mode but not in Code Workspaces env", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", undefined);
      const mockLogger = createMockLogger();

      validateDevEnvironment.warnIfWrongDevCommand(
        "code-workspaces",
        mockLogger,
      );

      expect(mockLogger.warn).toHaveBeenCalledTimes(1);
      expect(mockLogger.warn).toHaveBeenCalledWith(
        expect.stringContaining(
          `You should probably be using "npm run dev" instead`,
        ),
      );
    });

    test("does not warn when in Code Workspaces env and using code-workspaces mode", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", "CODE_WORKSPACE");
      const mockLogger = createMockLogger();

      validateDevEnvironment.warnIfWrongDevCommand(
        "code-workspaces",
        mockLogger,
      );

      expect(mockLogger.warn).not.toHaveBeenCalled();
    });

    test("does not warn when not in Code Workspaces env and not using code-workspaces mode", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", undefined);
      const mockLogger = createMockLogger();

      validateDevEnvironment.warnIfWrongDevCommand("development", mockLogger);

      expect(mockLogger.warn).not.toHaveBeenCalled();
    });
  });
});
