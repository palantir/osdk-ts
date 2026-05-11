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
import { getCapabilitiesManager } from "./capabilities.js";
import { getFiberFromElement } from "./FiberAccess.js";
import type { Fiber } from "./types.js";

vi.mock("./DevtoolsHook.js", () => ({
  getRenderers: () => new Map(),
}));

function createMockFiber(overrides: Partial<Fiber> = {}): Fiber {
  return {
    alternate: null,
    child: null,
    dependencies: null,
    elementType: null,
    flags: 0,
    index: 0,
    key: null,
    lanes: 0,
    memoizedProps: {},
    memoizedState: null,
    mode: 0,
    pendingProps: {},
    ref: null,
    return: null,
    sibling: null,
    stateNode: null,
    tag: 0,
    type: null,
    updateQueue: null,
    ...overrides,
  } as Fiber;
}

describe("FiberAccess", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    getCapabilitiesManager().resetAll();
  });

  describe("getFiberFromElement", () => {
    it("should return fiber from element with __reactFiber$ property", () => {
      const mockFiber = createMockFiber();
      const element = document.createElement("div");
      (element as unknown as Record<string, unknown>).__reactFiber$abc123 =
        mockFiber;

      const result = getFiberFromElement(element);
      expect(result).toBe(mockFiber);
    });

    it("should return fiber from element with __reactContainer$ property", () => {
      // __reactContainer$ stores the HostRoot fiber directly
      // (set by React's markContainerAsRoot(root.current, container))
      const hostRootFiber = createMockFiber({ tag: 3 });
      const element = document.createElement("div");
      (element as unknown as Record<string, unknown>).__reactContainer$abc123 = hostRootFiber;

      const result = getFiberFromElement(element);
      expect(result).toBe(hostRootFiber);
    });

    it("should return null when element has no fiber properties", () => {
      const element = document.createElement("div");
      const result = getFiberFromElement(element);
      expect(result).toBeNull();
    });

    it("should return null instead of walking up DOM tree", () => {
      const mockFiber = createMockFiber();
      const parent = document.createElement("div");
      (parent as unknown as Record<string, unknown>).__reactFiber$abc =
        mockFiber;

      const child = document.createElement("span");
      parent.appendChild(child);

      const result = getFiberFromElement(child);
      expect(result).toBeNull();
    });

    it("should return fiber from legacy _reactRootContainer", () => {
      const childFiber = createMockFiber();
      const element = document.createElement("div");
      (element as unknown as Record<string, unknown>)._reactRootContainer = {
        _internalRoot: {
          current: { child: childFiber },
        },
      };

      const result = getFiberFromElement(element);
      expect(result).toBe(childFiber);
    });

    it("should reject values that don't look like fibers", () => {
      const element = document.createElement("div");
      (element as unknown as Record<string, unknown>).__reactFiber$abc = {
        notAFiber: true,
      };

      const result = getFiberFromElement(element);
      expect(result).toBeNull();
    });
  });
});
