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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  ClickToInspectSystem,
  DOMToFiberMapper,
  InspectorOverlay,
} from "./ClickToInspect.js";
import type { Fiber } from "./ComponentContextCapture.js";
import { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";

describe("InspectorOverlay", () => {
  let overlay: InspectorOverlay;

  beforeEach(() => {
    overlay = new InspectorOverlay();
  });

  afterEach(() => {
    overlay.dispose();
  });

  it("should create canvas and tooltip elements", () => {
    overlay.show();
    expect(document.querySelector("canvas")).toBeTruthy();
  });

  it("should show and hide overlay", () => {
    overlay.show();
    const canvas = document.querySelector("canvas");
    expect(canvas?.style.display).toBe("block");

    overlay.hide();
    expect(canvas?.style.display).toBe("none");
  });

  it("should highlight element", () => {
    overlay.show();
    const element = document.createElement("div");
    document.body.appendChild(element);

    element.getBoundingClientRect = () =>
      ({
        left: 10,
        top: 20,
        width: 100,
        height: 50,
      }) as DOMRect;

    overlay.highlight(element, {
      hasHooks: true,
      componentName: "TestComponent",
      hookCount: 2,
    });

    element.remove();
  });

  it("should clear highlight", () => {
    overlay.show();
    const element = document.createElement("div");
    document.body.appendChild(element);

    overlay.highlight(element);
    overlay.clearHighlight();

    element.remove();
  });
});

describe("DOMToFiberMapper", () => {
  let mapper: DOMToFiberMapper;

  beforeEach(() => {
    mapper = new DOMToFiberMapper();
  });

  it("should find fiber from DOM element with __reactFiber key", () => {
    const element = document.createElement("div");
    const mockFiber: Fiber = {
      type: "div",
      stateNode: element,
      child: null,
      sibling: null,
      return: null,
      alternate: null,
    };

    (element as any).__reactFiber$test = mockFiber;

    const fiber = mapper.findFiberForDOM(element);
    expect(fiber).toBe(mockFiber);
  });

  it("should return null if no fiber found", () => {
    const element = document.createElement("div");
    const fiber = mapper.findFiberForDOM(element);
    expect(fiber).toBeNull();
  });

  it("should find component fiber by walking up", () => {
    const mockComponentFiber: Fiber = {
      type: function TestComponent() {},
      stateNode: null,
      child: null,
      sibling: null,
      return: null,
      alternate: null,
    };

    const mockDomFiber: Fiber = {
      type: "div",
      stateNode: document.createElement("div"),
      child: null,
      sibling: null,
      return: mockComponentFiber,
      alternate: null,
    };

    const componentFiber = mapper.findComponentFiber(mockDomFiber);
    expect(componentFiber).toBe(mockComponentFiber);
  });

  it("should return null if no component fiber found", () => {
    const mockDomFiber: Fiber = {
      type: "div",
      stateNode: document.createElement("div"),
      child: null,
      sibling: null,
      return: null,
      alternate: null,
    };

    const componentFiber = mapper.findComponentFiber(mockDomFiber);
    expect(componentFiber).toBeNull();
  });

  it("should get fiber ID", () => {
    const mockFiber: Fiber = {
      type: "div",
      stateNode: null,
      child: null,
      sibling: null,
      return: null,
      alternate: null,
      _debugID: 123,
    };

    const id = mapper.getFiberId(mockFiber);
    expect(id).toBe("123");
  });

  it("should get component name", () => {
    function TestComponent() {}
    const mockFiber: Fiber = {
      type: TestComponent,
      stateNode: null,
      child: null,
      sibling: null,
      return: null,
      alternate: null,
    };

    const name = mapper.getComponentName(mockFiber);
    expect(name).toBe("TestComponent");
  });
});

describe("ClickToInspectSystem", () => {
  let inspector: ClickToInspectSystem;
  let registry: ComponentQueryRegistry;
  let devToolsBridge: any;

  beforeEach(() => {
    registry = new ComponentQueryRegistry();
    devToolsBridge = {
      send: vi.fn(),
    };
    inspector = new ClickToInspectSystem(registry, devToolsBridge);
  });

  afterEach(() => {
    inspector.dispose();
  });

  describe("activate/deactivate", () => {
    it("should activate inspector mode", () => {
      inspector.activate();
      const state = inspector.getState();
      expect(state.active).toBe(true);
      expect(devToolsBridge.send).toHaveBeenCalledWith({
        type: "INSPECTOR_ACTIVATED",
      });
    });

    it("should deactivate inspector mode", () => {
      inspector.activate();
      inspector.deactivate();
      const state = inspector.getState();
      expect(state.active).toBe(false);
      expect(devToolsBridge.send).toHaveBeenCalledWith({
        type: "INSPECTOR_DEACTIVATED",
      });
    });

    it("should not activate twice", () => {
      inspector.activate();
      inspector.activate();
      expect(devToolsBridge.send).toHaveBeenCalledTimes(1);
    });

    it("should not deactivate when not active", () => {
      inspector.deactivate();
      expect(devToolsBridge.send).not.toHaveBeenCalled();
    });
  });

  describe("toggle", () => {
    it("should toggle inspector state", () => {
      inspector.toggle();
      expect(inspector.getState().active).toBe(true);

      inspector.toggle();
      expect(inspector.getState().active).toBe(false);
    });
  });

  describe("keyboard shortcuts", () => {
    it("should activate on Ctrl+Shift+C", () => {
      const event = new KeyboardEvent("keydown", {
        ctrlKey: true,
        shiftKey: true,
        key: "C",
      });

      window.dispatchEvent(event);
      expect(inspector.getState().active).toBe(true);
    });

    it("should activate on Cmd+Shift+C", () => {
      const event = new KeyboardEvent("keydown", {
        metaKey: true,
        shiftKey: true,
        key: "C",
      });

      window.dispatchEvent(event);
      expect(inspector.getState().active).toBe(true);
    });

    it("should deactivate on Escape", () => {
      inspector.activate();

      const event = new KeyboardEvent("keydown", {
        key: "Escape",
      });

      window.dispatchEvent(event);
      expect(inspector.getState().active).toBe(false);
    });
  });

  describe("mouse events", () => {
    it("should handle mouse move when active", () => {
      const element = document.createElement("div");
      document.body.appendChild(element);

      element.getBoundingClientRect = () =>
        ({
          left: 50,
          top: 50,
          width: 100,
          height: 100,
        }) as DOMRect;

      inspector.activate();

      const event = new MouseEvent("mousemove", {
        clientX: 75,
        clientY: 75,
        bubbles: true,
      });

      window.dispatchEvent(event);

      element.remove();
    });

    it("should handle click and select component", () => {
      registry.registerBinding({
        componentId: "comp1",
        componentName: "TestComponent",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "test",
        queryParams: { type: "object", objectType: "Test", primaryKey: "1" },
      });

      inspector.activate();
      (inspector as any).state.hoveredComponentId = "comp1.js";

      const event = new MouseEvent("click", {
        clientX: 50,
        clientY: 50,
        bubbles: true,
      });

      window.dispatchEvent(event);

      expect(devToolsBridge.send).toHaveBeenCalledWith(
        expect.objectContaining({
          type: "COMPONENT_SELECTED",
        }),
      );
      expect(inspector.getState().active).toBe(false);
    });
  });

  describe("dispose", () => {
    it("should cleanup resources", () => {
      inspector.activate();
      inspector.dispose();

      expect(inspector.getState().active).toBe(false);
    });
  });
});
