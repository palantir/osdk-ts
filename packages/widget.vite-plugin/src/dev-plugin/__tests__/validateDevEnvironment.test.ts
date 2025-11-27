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

import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as validateDevEnvironment from "../validateDevEnvironment.js";

describe("validateDevEnvironment", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe("isCodeWorkspacesEnvironment", () => {
    test("returns true when FOUNDRY_CONTAINER_RUNTIME_TYPE is CODE_WORKSPACE", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", "CODE_WORKSPACE");
      expect(validateDevEnvironment.isCodeWorkspacesEnvironment()).toBe(true);
    });

    test("returns false when FOUNDRY_CONTAINER_RUNTIME_TYPE is not set", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", undefined);
      expect(validateDevEnvironment.isCodeWorkspacesEnvironment()).toBe(false);
    });

    test("returns false when FOUNDRY_CONTAINER_RUNTIME_TYPE has different value", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", "OTHER_TYPE");
      expect(validateDevEnvironment.isCodeWorkspacesEnvironment()).toBe(false);
    });
  });

  describe("warnIfWrongDevCommand", () => {
    test("warns when in Code Workspaces env but not using code-workspaces mode", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", "CODE_WORKSPACE");
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      validateDevEnvironment.warnIfWrongDevCommand("development");

      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining("npm run dev:remote"),
      );
    });

    test("warns when using code-workspaces mode but not in Code Workspaces env", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", undefined);
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      validateDevEnvironment.warnIfWrongDevCommand("code-workspaces");

      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining("npm run dev"),
      );
    });

    test("does not warn when in Code Workspaces env and using code-workspaces mode", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", "CODE_WORKSPACE");
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      validateDevEnvironment.warnIfWrongDevCommand("code-workspaces");

      expect(consoleSpy).not.toHaveBeenCalled();
    });

    test("does not warn when not in Code Workspaces env and not using code-workspaces mode", () => {
      vi.stubEnv("FOUNDRY_CONTAINER_RUNTIME_TYPE", undefined);
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      validateDevEnvironment.warnIfWrongDevCommand("development");

      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });
});
