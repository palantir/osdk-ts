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

import { isUserComponent } from "./FiberTags.js";
import { safeFiberOperation } from "./SafeFiberOperation.js";
import type { Fiber } from "./types.js";

const DEFAULT_MAX_DEPTH = 500;

export function traverseFiber(
  fiber: Fiber | null,
  selector: (node: Fiber) => boolean | void,
  ascending?: boolean,
  maxDepth: number = DEFAULT_MAX_DEPTH,
): Fiber | null {
  if (!fiber) {
    return null;
  }

  if (selector(fiber) === true) {
    return fiber;
  }

  if (maxDepth <= 0) {
    return null;
  }

  if (ascending) {
    return fiber.return
      ? traverseFiber(fiber.return, selector, true, maxDepth - 1)
      : null;
  }

  let child: Fiber | null = fiber.child;
  while (child) {
    const match = traverseFiber(child, selector, false, maxDepth - 1);
    if (match) {
      return match;
    }
    child = child.sibling;
  }

  return null;
}

export function traverseAllFibers(
  fiber: Fiber | null,
  selector: (node: Fiber) => boolean | void,
  ascending?: boolean,
  maxResults?: number,
  maxDepth: number = DEFAULT_MAX_DEPTH,
): Fiber[] {
  const results: Fiber[] = [];

  function walk(node: Fiber | null, depth: number): void {
    if (!node) {
      return;
    }
    if (maxResults != null && results.length >= maxResults) {
      return;
    }

    if (selector(node) === true) {
      results.push(node);
      if (maxResults != null && results.length >= maxResults) {
        return;
      }
    }

    if (depth >= maxDepth) {
      return;
    }

    if (ascending) {
      if (node.return) {
        walk(node.return, depth + 1);
      }
    } else {
      let child: Fiber | null = node.child;
      while (child) {
        walk(child, depth + 1);
        if (maxResults != null && results.length >= maxResults) {
          return;
        }
        child = child.sibling;
      }
    }
  }

  walk(fiber, 0);
  return results;
}

export function walkFiberTree(
  fiber: Fiber,
  visitor: (fiber: Fiber) => void,
  maxDepth: number = DEFAULT_MAX_DEPTH,
): void {
  const stack: Array<{ fiber: Fiber; depth: number }> = [
    { fiber, depth: 0 },
  ];

  while (stack.length > 0) {
    const entry = stack.pop();
    if (!entry) {
      continue;
    }
    const { fiber: current, depth } = entry;

    if (depth > maxDepth) {
      continue;
    }

    visitor(current);

    const children: Fiber[] = [];
    let child: Fiber | null = current.child;
    while (child) {
      children.push(child);
      child = child.sibling;
    }

    for (let i = children.length - 1; i >= 0; i--) {
      stack.push({ fiber: children[i], depth: depth + 1 });
    }
  }
}

const FIND_PARENT_MAX_DEPTH = 100;

export function findParentComponent(fiber: Fiber): Fiber | null {
  return safeFiberOperation(
    () => {
      let current: Fiber | null = fiber.return;
      let depth = 0;

      while (current && depth < FIND_PARENT_MAX_DEPTH) {
        if (isUserComponent(current)) {
          return current;
        }
        current = current.return;
        depth++;
      }

      return null;
    },
    { fallback: null, feature: "component-inspection" },
  );
}
