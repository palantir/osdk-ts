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
import {
  type FiberCapabilities,
  FiberCapabilitiesManager,
  type FiberFeature,
} from "./capabilities.js";

describe("FiberCapabilitiesManager", () => {
  let manager: FiberCapabilitiesManager;

  beforeEach(() => {
    vi.useFakeTimers();
    manager = new FiberCapabilitiesManager({
      errorThreshold: 3,
      recoveryTimeout: 30000,
    });
  });

  describe("initial capabilities", () => {
    it("should have all boolean capabilities disabled initially", () => {
      const caps = manager.getCapabilities();
      expect(caps.hookInstalled).toBe(false);
      expect(caps.rendererDetected).toBe(false);
      expect(caps.fiberAccessWorking).toBe(false);
      expect(caps.detectedReactVersion).toBeNull();
      expect(caps.lastValidationTime).toBe(0);
      expect(caps.errorCount).toBe(0);
      expect(caps.disabledFeatures.size).toBe(0);
    });
  });

  describe("recordError", () => {
    it("should increment error count on each call", () => {
      manager.recordError("hook-discovery", new Error("test"));
      expect(manager.getCapabilities().errorCount).toBe(1);

      manager.recordError("hook-discovery", new Error("test2"));
      expect(manager.getCapabilities().errorCount).toBe(2);
    });

    it("should auto-disable feature after consecutive error threshold", () => {
      const feature: FiberFeature = "component-inspection";
      manager.recordError(feature, new Error("err1"));
      manager.recordError(feature, new Error("err2"));
      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        false,
      );

      manager.recordError(feature, new Error("err3"));
      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        true,
      );
    });

    it("should track errors per feature independently", () => {
      manager.recordError("hook-discovery", new Error("err1"));
      manager.recordError("hook-discovery", new Error("err2"));
      manager.recordError("component-inspection", new Error("err1"));

      expect(
        manager.getCapabilities().disabledFeatures.has("hook-discovery"),
      ).toBe(false);
      expect(
        manager.getCapabilities().disabledFeatures.has(
          "component-inspection",
        ),
      ).toBe(false);
      expect(manager.getCapabilities().errorCount).toBe(3);
    });
  });

  describe("clearErrors", () => {
    it("should re-enable a disabled feature", () => {
      const feature: FiberFeature = "hook-discovery";
      manager.recordError(feature, new Error("err1"));
      manager.recordError(feature, new Error("err2"));
      manager.recordError(feature, new Error("err3"));
      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        true,
      );

      manager.clearErrors(feature);
      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        false,
      );
    });

    it("should not affect other features when clearing one", () => {
      manager.recordError("hook-discovery", new Error("e1"));
      manager.recordError("hook-discovery", new Error("e2"));
      manager.recordError("hook-discovery", new Error("e3"));

      manager.recordError("component-inspection", new Error("e1"));
      manager.recordError("component-inspection", new Error("e2"));
      manager.recordError("component-inspection", new Error("e3"));

      manager.clearErrors("hook-discovery");
      expect(
        manager.getCapabilities().disabledFeatures.has("hook-discovery"),
      ).toBe(false);
      expect(
        manager.getCapabilities().disabledFeatures.has(
          "component-inspection",
        ),
      ).toBe(true);
    });
  });

  describe("recovery timer", () => {
    it("should re-enable feature after recovery timeout", () => {
      const feature: FiberFeature = "state-inspection";
      manager.recordError(feature, new Error("err1"));
      manager.recordError(feature, new Error("err2"));
      manager.recordError(feature, new Error("err3"));
      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        true,
      );

      vi.advanceTimersByTime(30000);

      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        false,
      );
    });

    it("should not re-enable before recovery timeout", () => {
      const feature: FiberFeature = "state-inspection";
      manager.recordError(feature, new Error("err1"));
      manager.recordError(feature, new Error("err2"));
      manager.recordError(feature, new Error("err3"));

      vi.advanceTimersByTime(15000);
      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        true,
      );
    });
  });

  describe("onCapabilitiesChange", () => {
    it("should fire listener when capabilities change via recordError", () => {
      const listener = vi.fn();
      manager.onCapabilitiesChange(listener);

      manager.recordError("hook-discovery", new Error("test"));
      expect(listener).toHaveBeenCalledTimes(1);

      const received = listener.mock.calls[0][0] as FiberCapabilities;
      expect(received.errorCount).toBe(1);
    });

    it("should fire listener when capability is set", () => {
      const listener = vi.fn();
      manager.onCapabilitiesChange(listener);

      manager.setCapability("fiberAccessWorking", true);
      expect(listener).toHaveBeenCalledTimes(1);
    });

    it("should stop firing after unsubscribe", () => {
      const listener = vi.fn();
      const unsubscribe = manager.onCapabilitiesChange(listener);

      manager.setCapability("hookInstalled", true);
      expect(listener).toHaveBeenCalledTimes(1);

      unsubscribe();
      manager.setCapability("rendererDetected", true);
      expect(listener).toHaveBeenCalledTimes(1);
    });
  });

  describe("dispose", () => {
    it("should clean up timers and listeners", () => {
      const listener = vi.fn();
      manager.onCapabilitiesChange(listener);
      manager.recordError("hook-discovery", new Error("test"));
      listener.mockClear();

      manager.dispose();

      manager.setCapability("hookInstalled", true);
      expect(listener).not.toHaveBeenCalled();
    });

    it("should prevent recovery timer from firing after dispose", () => {
      const feature: FiberFeature = "hook-discovery";
      manager.recordError(feature, new Error("e1"));
      manager.recordError(feature, new Error("e2"));
      manager.recordError(feature, new Error("e3"));
      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        true,
      );

      manager.dispose();
      vi.advanceTimersByTime(60000);

      expect(manager.getCapabilities().disabledFeatures.has(feature)).toBe(
        true,
      );
    });
  });

  describe("resetAll", () => {
    it("should reset all errors and re-enable all features", () => {
      manager.recordError("hook-discovery", new Error("e1"));
      manager.recordError("hook-discovery", new Error("e2"));
      manager.recordError("hook-discovery", new Error("e3"));
      manager.recordError("component-inspection", new Error("e1"));
      manager.recordError("component-inspection", new Error("e2"));
      manager.recordError("component-inspection", new Error("e3"));

      expect(manager.getCapabilities().disabledFeatures.size).toBe(2);
      expect(manager.getCapabilities().errorCount).toBe(6);

      manager.resetAll();

      expect(manager.getCapabilities().disabledFeatures.size).toBe(0);
      expect(manager.getCapabilities().errorCount).toBe(0);
    });
  });
});
