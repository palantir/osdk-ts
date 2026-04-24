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

import { beforeEach, describe, expect, it, vi } from "vitest";
import type { FiberFeature } from "./capabilities.js";
import { getCapabilitiesManager } from "./capabilities.js";
import { safeFiberOperation } from "./SafeFiberOperation.js";

describe("safeFiberOperation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    const manager = getCapabilitiesManager();
    manager.resetAll();
  });

  describe("synchronous operations", () => {
    it("should return result on successful operation", () => {
      const result = safeFiberOperation(() => 42, {
        fallback: -1,
        feature: "component-inspection",
      });
      expect(result).toBe(42);
    });

    it("should return fallback when operation throws", () => {
      const result = safeFiberOperation(
        () => {
          throw new Error("fiber access failed");
        },
        { fallback: "default", feature: "hook-discovery" },
      );
      expect(result).toBe("default");
    });

    it("should call recordError on capabilities manager when operation throws", () => {
      const manager = getCapabilitiesManager();
      const recordErrorSpy = vi.spyOn(manager, "recordError");

      safeFiberOperation(
        () => {
          throw new Error("test error");
        },
        { fallback: null, feature: "hook-discovery" },
      );

      expect(recordErrorSpy).toHaveBeenCalledTimes(1);
      expect(recordErrorSpy).toHaveBeenCalledWith(
        "hook-discovery",
        expect.objectContaining({ message: "test error" }),
      );

      recordErrorSpy.mockRestore();
    });

    it("should return fallback without executing when feature is disabled", () => {
      const manager = getCapabilitiesManager();
      const feature: FiberFeature = "component-inspection";

      manager.recordError(feature, new Error("e1"));
      manager.recordError(feature, new Error("e2"));
      manager.recordError(feature, new Error("e3"));

      const operationFn = vi.fn(() => "should not run");
      const result = safeFiberOperation(operationFn, {
        fallback: "disabled",
        feature,
      });

      expect(result).toBe("disabled");
      expect(operationFn).not.toHaveBeenCalled();
    });
  });
});
