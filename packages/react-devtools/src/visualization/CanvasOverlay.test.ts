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
import { CanvasOverlaySystem } from "./CanvasOverlay.js";

describe("CanvasOverlaySystem", () => {
  let overlay: CanvasOverlaySystem;

  beforeEach(() => {
    const mockContext = {
      save: vi.fn(),
      restore: vi.fn(),
      clearRect: vi.fn(),
      strokeRect: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      strokeStyle: "",
      lineWidth: 0,
      globalAlpha: 1,
    };

    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue(
      mockContext,
    );

    overlay = new CanvasOverlaySystem();

    vi.spyOn(document.body, "appendChild");
    vi.spyOn(document.body, "removeChild");
  });

  describe("start/stop lifecycle", () => {
    it("should create and append canvas on start", () => {
      overlay.start();

      const spy = vi.spyOn(document.body, "appendChild");
      expect(spy).toHaveBeenCalled();
      expect(overlay.getActiveAnimationCount()).toBe(0);
    });

    it("should not create multiple canvases on repeated start", () => {
      overlay.start();
      overlay.start();

      const spy = vi.spyOn(document.body, "appendChild");
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should remove canvas and stop animations on stop", () => {
      overlay.start();
      overlay.stop();

      const spy = vi.spyOn(document.body, "removeChild");
      expect(spy).toHaveBeenCalled();
      expect(overlay.getActiveAnimationCount()).toBe(0);
    });

    it("should be safe to call stop without start", () => {
      expect(() => overlay.stop()).not.toThrow();
    });
  });

  describe("pulse animation", () => {
    beforeEach(() => {
      overlay.start();
    });

    it("should add pulse animation when started", () => {
      const rect = new DOMRect(100, 100, 200, 50);

      overlay.pulse(rect, "#ff0000", 500);

      expect(overlay.getActiveAnimationCount()).toBe(1);
    });

    it("should not add animation when not started", () => {
      overlay.stop();
      const rect = new DOMRect(100, 100, 200, 50);

      overlay.pulse(rect, "#ff0000", 500);

      expect(overlay.getActiveAnimationCount()).toBe(0);
    });

    it("should handle multiple pulse animations", () => {
      const rect1 = new DOMRect(100, 100, 200, 50);
      const rect2 = new DOMRect(300, 200, 150, 75);

      overlay.pulse(rect1, "#ff0000", 500);
      overlay.pulse(rect2, "#00ff00", 300);

      expect(overlay.getActiveAnimationCount()).toBe(2);
    });
  });

  describe("flowArrow animation", () => {
    beforeEach(() => {
      overlay.start();
    });

    it("should add flow arrow animation when started", () => {
      const from = { x: 100, y: 100 };
      const to = { x: 300, y: 200 };

      overlay.flowArrow(from, to, "#0000ff", 800);

      expect(overlay.getActiveAnimationCount()).toBe(1);
    });

    it("should not add animation when not started", () => {
      overlay.stop();
      const from = { x: 100, y: 100 };
      const to = { x: 300, y: 200 };

      overlay.flowArrow(from, to, "#0000ff", 800);

      expect(overlay.getActiveAnimationCount()).toBe(0);
    });

    it("should handle multiple flow animations", () => {
      const from1 = { x: 100, y: 100 };
      const to1 = { x: 300, y: 200 };
      const from2 = { x: 400, y: 150 };
      const to2 = { x: 500, y: 250 };

      overlay.flowArrow(from1, to1, "#0000ff", 800);
      overlay.flowArrow(from2, to2, "#ff00ff", 600);

      expect(overlay.getActiveAnimationCount()).toBe(2);
    });
  });

  describe("clearAnimations", () => {
    beforeEach(() => {
      overlay.start();
    });

    it("should clear all animations", () => {
      const rect = new DOMRect(100, 100, 200, 50);
      const from = { x: 100, y: 100 };
      const to = { x: 300, y: 200 };

      overlay.pulse(rect, "#ff0000", 500);
      overlay.flowArrow(from, to, "#0000ff", 800);

      expect(overlay.getActiveAnimationCount()).toBe(2);

      overlay.clearAnimations();

      expect(overlay.getActiveAnimationCount()).toBe(0);
    });
  });
});
