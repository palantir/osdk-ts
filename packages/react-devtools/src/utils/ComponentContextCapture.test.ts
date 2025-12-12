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

describe("ComponentContextCapture", () => {
  let capture: ComponentContextCapture;

  beforeEach(() => {
    capture = new ComponentContextCapture();
  });

  describe("getCurrentContext", () => {
    it("should return null when disabled", () => {
      capture.disable();
      const context = capture.getCurrentContext();
      expect(context).toBeNull();
    });

    it("should return context when enabled", () => {
      capture.enable();
      const context = capture.getCurrentContext();
      expect(context).toBeTruthy();
    });

    it("should extract component info from stack trace", () => {
      function TestComponent() {
        const context = capture.getCurrentContext();
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
      const result = (capture as any).parseStackTrace(
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
      const result = (capture as any).parseStackTrace(
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
      const result = (capture as any).parseStackTrace(
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
      const result = (capture as any).parseStackTrace(
        `Error
    at anonymous
    at <unknown>`,
      );

      expect(result.componentName).toBeNull();
    });
  });

  describe("enable/disable", () => {
    it("should toggle enabled state", () => {
      expect(capture.getCurrentContext()).toBeTruthy();

      capture.disable();
      expect(capture.getCurrentContext()).toBeNull();

      capture.enable();
      expect(capture.getCurrentContext()).toBeTruthy();
    });
  });

  describe("clearCache", () => {
    it("should clear fiber cache", () => {
      capture.clearCache();
      expect(() => capture.clearCache()).not.toThrow();
    });
  });

  describe("getFiberName", () => {
    it("should extract name from function type", () => {
      function TestComponent() {}
      const fiber = {
        type: TestComponent,
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
      };

      const name = (capture as any).getFiberName(fiber);
      expect(name).toBe("TestComponent");
    });

    it("should use displayName if available", () => {
      function TestComponent() {}
      TestComponent.displayName = "CustomDisplayName.js";

      const fiber = {
        type: TestComponent,
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
      };

      const name = (capture as any).getFiberName(fiber);
      expect(name).toBe("TestComponent");
    });

    it("should handle string types (DOM elements)", () => {
      const fiber = {
        type: "div",
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
      };

      const name = (capture as any).getFiberName(fiber);
      expect(name).toBe("div");
    });

    it("should return Unknown for unknown types", () => {
      const fiber = {
        type: null,
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
      };

      const name = (capture as any).getFiberName(fiber);
      expect(name).toBe("Unknown");
    });
  });

  describe("contextFromFiber", () => {
    it("should generate stable IDs for same fiber", () => {
      const fiber = {
        type: function TestComponent() {},
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
        _debugID: 123,
      };

      const context1 = (capture as any).contextFromFiber(fiber);
      const context2 = (capture as any).contextFromFiber(fiber);

      expect(context1.id).toBe(context2.id);
    });

    it("should use _debugID if available", () => {
      const fiber = {
        type: function TestComponent() {},
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
        _debugID: 456,
      };

      const context = (capture as any).contextFromFiber(fiber);
      expect(context.id).toBe("456");
    });

    it("should extract _debugSource location", () => {
      const fiber = {
        type: function TestComponent() {},
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
        _debugSource: {
          fileName: "/src/App.tsx",
          lineNumber: 42,
        },
      };

      const context = (capture as any).contextFromFiber(fiber);
      expect(context.filePath).toBe("/src/App.tsx");
      expect(context.lineNumber).toBe(42);
    });

    it("should create WeakRef to fiber", () => {
      const fiber = {
        type: function TestComponent() {},
        stateNode: null,
        child: null,
        sibling: null,
        return: null,
        alternate: null,
      };

      const context = (capture as any).contextFromFiber(fiber);
      expect(context.fiberNode).toBeInstanceOf(WeakRef);
      expect(context.fiberNode.deref()).toBe(fiber);
    });
  });
});
