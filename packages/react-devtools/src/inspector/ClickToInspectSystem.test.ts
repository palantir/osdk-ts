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
import { ClickToInspectSystem } from "./ClickToInspectSystem.js";

describe("ClickToInspectSystem", () => {
  let inspector: ClickToInspectSystem;
  let onActivate: ReturnType<typeof vi.fn>;
  let onDeactivate: ReturnType<typeof vi.fn>;
  let onSelect: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    onActivate = vi.fn();
    onDeactivate = vi.fn();
    onSelect = vi.fn();
    inspector = new ClickToInspectSystem({
      onActivate,
      onDeactivate,
      onSelect,
    });
  });

  afterEach(() => {
    inspector.dispose();
  });

  describe("activate/deactivate", () => {
    it("should activate inspector mode", () => {
      inspector.activate();
      const state = inspector.getState();
      expect(state.active).toBe(true);
      expect(onActivate).toHaveBeenCalledOnce();
    });

    it("should deactivate inspector mode", () => {
      inspector.activate();
      inspector.deactivate();
      const state = inspector.getState();
      expect(state.active).toBe(false);
      expect(onDeactivate).toHaveBeenCalled();
    });

    it("should not activate twice", () => {
      inspector.activate();
      inspector.activate();
      expect(onActivate).toHaveBeenCalledTimes(1);
    });

    it("should not deactivate when not active", () => {
      inspector.deactivate();
      expect(onDeactivate).not.toHaveBeenCalled();
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

  describe("dispose", () => {
    it("should cleanup resources", () => {
      inspector.activate();
      inspector.dispose();

      expect(inspector.getState().active).toBe(false);
    });
  });
});
