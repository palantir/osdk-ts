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
import { FIBER_TAG } from "./FiberTags.js";
import {
  findParentComponent,
  traverseAllFibers,
  traverseFiber,
  walkFiberTree,
} from "./traverseFiber.js";
import type { Fiber } from "./types.js";

function createMockFiber(
  name: string,
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
    type: name,
    updateQueue: null,
    ...overrides,
  } as Fiber;
}

/**
 * Build a fiber tree from a simple nested description.
 * Returns the root fiber.
 *
 * Example:
 *   buildTree("App", ["Header", "Main", ["Sidebar", "Content"]])
 * Produces:
 *   App -> child: Header -> sibling: Main -> child: Sidebar -> sibling: Content
 */
function buildTree(
  name: string,
  children?: Array<string | [string, ...string[]]>,
): Fiber {
  const root = createMockFiber(name);

  if (!children || children.length === 0) {
    return root;
  }

  let prevSibling: Fiber | null = null;
  for (const childDef of children) {
    let child: Fiber;
    if (typeof childDef === "string") {
      child = createMockFiber(childDef);
    } else {
      const [childName, ...grandchildren] = childDef;
      child = buildTree(
        childName,
        grandchildren.length > 0 ? grandchildren : undefined,
      );
    }
    child.return = root;

    if (!root.child) {
      root.child = child;
    }
    if (prevSibling) {
      prevSibling.sibling = child;
    }
    prevSibling = child;
  }

  return root;
}

describe("traverseFiber", () => {
  describe("descending (default)", () => {
    it("should find a matching fiber in children", () => {
      const root = buildTree("App", ["Header", "Main", "Footer"]);
      const result = traverseFiber(root, (f) => f.type === "Main");
      if (result == null) throw new Error("expected result to be defined");
      expect(result.type).toBe("Main");
    });

    it("should return root if root matches", () => {
      const root = buildTree("App", ["Header"]);
      const result = traverseFiber(root, (f) => f.type === "App");
      expect(result).toBe(root);
    });

    it("should return null when no match found", () => {
      const root = buildTree("App", ["Header", "Main"]);
      const result = traverseFiber(root, (f) => f.type === "Missing");
      expect(result).toBeNull();
    });

    it("should return null for null fiber", () => {
      const result = traverseFiber(null, () => true);
      expect(result).toBeNull();
    });

    it("should respect maxDepth", () => {
      // Build: A -> B -> C -> D
      const d = createMockFiber("D");
      const c = createMockFiber("C", { child: d });
      d.return = c;
      const b = createMockFiber("B", { child: c });
      c.return = b;
      const a = createMockFiber("A", { child: b });
      b.return = a;

      // With maxDepth=2, we can reach A (depth 0), B (depth 1), C (depth 2) but not D (depth 3)
      const result = traverseFiber(a, (f) => f.type === "D", false, 2);
      expect(result).toBeNull();

      // With maxDepth=3, we can reach D
      const result2 = traverseFiber(a, (f) => f.type === "D", false, 3);
      if (result2 == null) throw new Error("expected result2 to be defined");
      expect(result2.type).toBe("D");
    });
  });

  describe("ascending", () => {
    it("should find a matching fiber in ancestors", () => {
      const grandparent = createMockFiber("App");
      const parent = createMockFiber("Layout", { return: grandparent });
      const child = createMockFiber("Button", { return: parent });

      const result = traverseFiber(child, (f) => f.type === "App", true);
      if (result == null) throw new Error("expected result to be defined");
      expect(result.type).toBe("App");
    });

    it("should return starting fiber if it matches", () => {
      const fiber = createMockFiber("Target");
      const result = traverseFiber(fiber, (f) => f.type === "Target", true);
      expect(result).toBe(fiber);
    });

    it("should respect maxDepth in ascending mode", () => {
      const root = createMockFiber("Root");
      const mid = createMockFiber("Mid", { return: root });
      const leaf = createMockFiber("Leaf", { return: mid });

      // maxDepth=1: can only check Leaf and Mid
      const result = traverseFiber(leaf, (f) => f.type === "Root", true, 1);
      expect(result).toBeNull();
    });
  });
});

describe("traverseAllFibers", () => {
  it("should collect all matching fibers descending", () => {
    const root = buildTree("App", ["A", "B", "C"]);
    const results = traverseAllFibers(
      root,
      (f) => typeof f.type === "string" && f.type !== "App",
    );
    expect(results.map(f => f.type)).toEqual(["A", "B", "C"]);
  });

  it("should respect maxResults", () => {
    const root = buildTree("App", ["A", "B", "C", "D"]);
    const results = traverseAllFibers(
      root,
      (f) => typeof f.type === "string" && f.type !== "App",
      false,
      2,
    );
    expect(results).toHaveLength(2);
    expect(results.map(f => f.type)).toEqual(["A", "B"]);
  });

  it("should collect ascending matches", () => {
    const gp = createMockFiber("GP");
    const parent = createMockFiber("Parent", { return: gp });
    const child = createMockFiber("Child", { return: parent });

    const results = traverseAllFibers(child, () => true, true);
    expect(results.map(f => f.type)).toEqual(["Child", "Parent", "GP"]);
  });

  it("should return empty array for null fiber", () => {
    const results = traverseAllFibers(null, () => true);
    expect(results).toEqual([]);
  });
});

describe("walkFiberTree", () => {
  it("should visit all fibers depth-first", () => {
    const root = buildTree("App", ["A", "B", "C"]);
    const visited: string[] = [];
    walkFiberTree(root, (f) => {
      visited.push(f.type as string);
    });
    expect(visited).toEqual(["App", "A", "B", "C"]);
  });

  it("should respect maxDepth", () => {
    const d = createMockFiber("D");
    const c = createMockFiber("C", { child: d });
    d.return = c;
    const b = createMockFiber("B", { child: c });
    c.return = b;
    const a = createMockFiber("A", { child: b });
    b.return = a;

    const visited: string[] = [];
    walkFiberTree(a, (f) => {
      visited.push(f.type as string);
    }, 2);
    // depth 0: A, depth 1: B, depth 2: C, depth 3: D (skipped)
    expect(visited).toEqual(["A", "B", "C"]);
  });

  it("should handle tree with siblings at multiple levels", () => {
    // A -> B, C
    //      B -> D, E
    const e = createMockFiber("E");
    const d = createMockFiber("D", { sibling: e });
    const b = createMockFiber("B", { child: d });
    d.return = b;
    e.return = b;
    const c = createMockFiber("C");
    b.sibling = c;
    const a = createMockFiber("A", { child: b });
    b.return = a;
    c.return = a;

    const visited: string[] = [];
    walkFiberTree(a, (f) => {
      visited.push(f.type as string);
    });
    expect(visited).toEqual(["A", "B", "D", "E", "C"]);
  });
});

describe("findParentComponent", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    getCapabilitiesManager().resetAll();
  });

  function createTaggedFiber(
    overrides: Partial<Fiber> = {},
  ): Fiber {
    return createMockFiber("", {
      tag: FIBER_TAG.HOST_ELEMENT,
      ...overrides,
    });
  }

  it("should walk up .return chain and find parent function component", () => {
    const parentComponent = createTaggedFiber({
      tag: FIBER_TAG.FUNCTION_COMPONENT,
      type: function MyComponent() {},
    });
    const hostFiber = createTaggedFiber({
      tag: FIBER_TAG.HOST_ELEMENT,
      type: "div",
      return: parentComponent,
    });
    const startFiber = createTaggedFiber({
      tag: FIBER_TAG.HOST_TEXT,
      return: hostFiber,
    });

    const result = findParentComponent(startFiber);
    expect(result).toBe(parentComponent);
  });

  it("should find parent class component", () => {
    const classComponent = createTaggedFiber({
      tag: FIBER_TAG.CLASS_COMPONENT,
      type: class MyClass {},
    });
    const childFiber = createTaggedFiber({
      tag: FIBER_TAG.HOST_ELEMENT,
      return: classComponent,
    });

    const result = findParentComponent(childFiber);
    expect(result).toBe(classComponent);
  });

  it("should respect MAX_DEPTH limit and return null", () => {
    let current = createTaggedFiber({ tag: FIBER_TAG.HOST_ELEMENT });
    const startFiber = current;

    for (let i = 0; i < 150; i++) {
      const parent = createTaggedFiber({ tag: FIBER_TAG.HOST_ELEMENT });
      current.return = parent;
      current = parent;
    }

    const componentFiber = createTaggedFiber({
      tag: FIBER_TAG.FUNCTION_COMPONENT,
      type: function FarAwayComponent() {},
    });
    current.return = componentFiber;

    const result = findParentComponent(startFiber);
    expect(result).toBeNull();
  });

  it("should return null when no parent component found", () => {
    const rootFiber = createTaggedFiber({ tag: FIBER_TAG.HOST_ROOT });
    const hostFiber = createTaggedFiber({
      tag: FIBER_TAG.HOST_ELEMENT,
      return: rootFiber,
    });
    const startFiber = createTaggedFiber({
      tag: FIBER_TAG.HOST_TEXT,
      return: hostFiber,
    });

    const result = findParentComponent(startFiber);
    expect(result).toBeNull();
  });

  it("should skip non-component fibers like fragments and suspense", () => {
    const componentFiber = createTaggedFiber({
      tag: FIBER_TAG.FUNCTION_COMPONENT,
      type: function App() {},
    });
    const suspenseFiber = createTaggedFiber({
      tag: FIBER_TAG.SUSPENSE,
      return: componentFiber,
    });
    const fragmentFiber = createTaggedFiber({
      tag: FIBER_TAG.FRAGMENT,
      return: suspenseFiber,
    });
    const hostFiber = createTaggedFiber({
      tag: FIBER_TAG.HOST_ELEMENT,
      return: fragmentFiber,
    });

    const result = findParentComponent(hostFiber);
    expect(result).toBe(componentFiber);
  });
});
