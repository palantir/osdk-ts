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

import { beforeEach, describe, expect, it } from "vitest";
import { ComponentContextCapture } from "./ComponentContextCapture.js";

interface ParseStackTraceResult {
  componentName: string | null;
  filePath?: string;
  lineNumber?: number;
  columnNumber?: number;
}

interface ComponentContextCaptureTestAccess {
  parseStackTrace(stack: string): ParseStackTraceResult;
}

function getTestAccess(
  capture: ComponentContextCapture,
): ComponentContextCaptureTestAccess {
  // @ts-expect-error Accessing private methods for testing
  return capture;
}

describe("ComponentContextCapture", () => {
  let capture: ComponentContextCapture;
  let testAccess: ComponentContextCaptureTestAccess;

  beforeEach(() => {
    capture = new ComponentContextCapture();
    testAccess = getTestAccess(capture);
  });

  describe("captureNow", () => {
    it("should return null when disabled", () => {
      capture.disable();
      const context = capture.captureNow();
      expect(context).toBeNull();
    });

    it("should return context when enabled", () => {
      capture.enable();
      const context = capture.captureNow();
      expect(context).toBeTruthy();
    });

    it("should extract component info from stack trace", () => {
      function TestComponent() {
        const context = capture.captureNow();
        return context;
      }

      const context = TestComponent();
      expect(context).toBeTruthy();
      expect(context?.name).toBeDefined();
      expect(context?.stackTrace).toBeDefined();
    });
  });

  describe("parseStackTrace", () => {
    it("should extract component name from Chrome format", () => {
      const result = testAccess.parseStackTrace(
        `Error
    at getCurrentContext (file.ts:10:15)
    at useOsdkObject (hook.ts:20:25)
    at TodoItem (http://localhost:3000/src/App.tsx:42:15)
    at renderComponent (react.js:100:20)`,
      );

      expect(result.componentName).toBe("TodoItem");
      expect(result.filePath).toBe("http://localhost:3000/src/App.tsx");
      expect(result.lineNumber).toBe(42);
      expect(result.columnNumber).toBe(15);
    });

    it("should extract component name from Firefox format", () => {
      const result = testAccess.parseStackTrace(
        `Error
getCurrentContext@file.ts:10:15
useOsdkObject@hook.ts:20:25
TodoItem@http://localhost:3000/src/App.tsx:42:15
renderComponent@react.js:100:20`,
      );

      expect(result.componentName).toBe("TodoItem");
      expect(result.filePath).toBe("http://localhost:3000/src/App.tsx");
      expect(result.lineNumber).toBe(42);
      expect(result.columnNumber).toBe(15);
    });

    it("should handle missing location info", () => {
      const result = testAccess.parseStackTrace(
        `Error
    at getCurrentContext
    at useOsdkObject
    at TodoItem`,
      );

      expect(result.componentName).toBe("TodoItem");
      expect(result.filePath).toBeUndefined();
      expect(result.lineNumber).toBeUndefined();
    });

    it("should return null when no component found", () => {
      const result = testAccess.parseStackTrace(
        `Error
    at anonymous
    at <unknown>`,
      );

      expect(result.componentName).toBeNull();
    });
  });

  describe("enable/disable", () => {
    it("should toggle enabled state", () => {
      expect(capture.captureNow()).toBeTruthy();

      capture.disable();
      expect(capture.captureNow()).toBeNull();

      capture.enable();
      expect(capture.captureNow()).toBeTruthy();
    });
  });

  describe("clearCache", () => {
    it("should clear fiber cache", () => {
      capture.clearCache();
      expect(() => capture.clearCache()).not.toThrow();
    });
  });
});
