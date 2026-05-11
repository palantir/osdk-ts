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
import { extractOsdkMetadataFromFiber } from "./HookStateInspector.js";
import type { Fiber, MemoizedState } from "./types.js";

const OSDK_HOOK_METADATA = Symbol.for("__OSDK_HOOK_METADATA__");

function createMockFiber(
  overrides: Partial<Fiber> = {},
): Fiber {
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

function createMemoizedStateChain(
  states: unknown[],
): MemoizedState | null {
  if (states.length === 0) {
    return null;
  }

  const nodes: MemoizedState[] = states.map((state) => ({
    memoizedState: state,
    next: null,
  }));

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  return nodes[0];
}

describe("HookStateInspector", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    getCapabilitiesManager().resetAll();
  });

  describe("isOsdkHookMetadata (tested via extractOsdkMetadataFromFiber)", () => {
    it("should detect metadata with OSDK_HOOK_METADATA symbol in a ref", () => {
      const metadata = {
        [OSDK_HOOK_METADATA]: true,
        hookType: "useOsdkObjects" as const,
        objectType: "Todo",
      };

      const fiber = createMockFiber({
        memoizedState: createMemoizedStateChain([
          { current: metadata },
        ]),
      });

      const results = extractOsdkMetadataFromFiber(fiber);
      expect(results).toHaveLength(1);
      expect(results[0].hookType).toBe("useOsdkObjects");
      expect(results[0].objectType).toBe("Todo");
    });

    it("should return empty array for null memoizedState", () => {
      const fiber = createMockFiber({ memoizedState: null });

      const results = extractOsdkMetadataFromFiber(fiber);
      expect(results).toEqual([]);
    });

    it("should return empty array for memoizedState without OSDK symbol", () => {
      const fiber = createMockFiber({
        memoizedState: createMemoizedStateChain([
          { current: { hookType: "useOsdkObjects", objectType: "Todo" } },
          "some string state",
          42,
        ]),
      });

      const results = extractOsdkMetadataFromFiber(fiber);
      expect(results).toEqual([]);
    });
  });

  describe("extractOsdkMetadataFromFiber", () => {
    it("should walk memoizedState chain and find OSDK hooks", () => {
      const osdkMetadata = {
        [OSDK_HOOK_METADATA]: true,
        hookType: "useOsdkAction" as const,
        actionName: "createTodo",
      };

      const stateChain = createMemoizedStateChain([
        false,
        { current: "non-osdk-ref" },
        { current: osdkMetadata },
        null,
      ]);

      const fiber = createMockFiber({ memoizedState: stateChain });

      const results = extractOsdkMetadataFromFiber(fiber);
      expect(results).toHaveLength(1);
      expect(results[0].hookType).toBe("useOsdkAction");
      expect(results[0].actionName).toBe("createTodo");
    });

    it("should return empty array when no OSDK hooks found", () => {
      const stateChain = createMemoizedStateChain([
        { current: 42 },
        { current: "hello" },
        { current: { notOsdk: true } },
      ]);

      const fiber = createMockFiber({ memoizedState: stateChain });

      const results = extractOsdkMetadataFromFiber(fiber);
      expect(results).toEqual([]);
    });

    it("should find multiple OSDK hooks in a single fiber", () => {
      const objectsMetadata = {
        [OSDK_HOOK_METADATA]: true,
        hookType: "useOsdkObjects" as const,
        objectType: "Todo",
      };
      const actionMetadata = {
        [OSDK_HOOK_METADATA]: true,
        hookType: "useOsdkAction" as const,
        actionName: "deleteTodo",
      };

      const stateChain = createMemoizedStateChain([
        { current: objectsMetadata },
        "some-state",
        { current: actionMetadata },
      ]);

      const fiber = createMockFiber({ memoizedState: stateChain });

      const results = extractOsdkMetadataFromFiber(fiber);
      expect(results).toHaveLength(2);
      expect(results[0].hookType).toBe("useOsdkObjects");
      expect(results[1].hookType).toBe("useOsdkAction");
    });

    it("should handle ref objects with extra keys (up to 2)", () => {
      const metadata = {
        [OSDK_HOOK_METADATA]: true,
        hookType: "useOsdkObject" as const,
        objectType: "Employee",
        primaryKey: "emp-123",
      };

      const refWithExtraKey = { current: metadata, _owner: null };

      const fiber = createMockFiber({
        memoizedState: createMemoizedStateChain([refWithExtraKey]),
      });

      const results = extractOsdkMetadataFromFiber(fiber);
      expect(results).toHaveLength(1);
      expect(results[0].objectType).toBe("Employee");
    });
  });
});
