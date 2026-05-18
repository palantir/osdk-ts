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

import { FIBER_TAG } from "./FiberTags.js";
import { safeFiberOperation } from "./SafeFiberOperation.js";
import type { Fiber, SourceLocation } from "./types.js";

export function getComponentName(fiber: Fiber): string {
  return safeFiberOperation(
    () => getComponentNameUnsafe(fiber),
    { fallback: "Unknown", feature: "component-inspection" },
  );
}

function getComponentNameUnsafe(fiber: Fiber): string {
  const { type, tag } = fiber;

  if (tag === FIBER_TAG.HOST_ELEMENT) {
    return typeof type === "string" ? type : "Element";
  }

  if (tag === FIBER_TAG.HOST_TEXT) {
    return "#text";
  }

  if (tag === FIBER_TAG.HOST_ROOT) {
    return "#root";
  }

  if (tag === FIBER_TAG.FRAGMENT) {
    return "Fragment";
  }

  if (tag === FIBER_TAG.SUSPENSE) {
    return "Suspense";
  }

  if (typeof type === "function") {
    return type.displayName || type.name || "Anonymous";
  }

  if (type && typeof type === "object") {
    if ("type" in type && typeof type.type === "function") {
      const innerType = type.type as { displayName?: string; name?: string };
      return innerType.displayName || innerType.name || "Memo";
    }

    if ("render" in type && typeof type.render === "function") {
      const render = type.render as { displayName?: string; name?: string };
      return render.displayName || render.name || "ForwardRef";
    }

    if ("displayName" in type && typeof type.displayName === "string") {
      return type.displayName;
    }
  }

  if (tag === FIBER_TAG.CONTEXT_PROVIDER) {
    const context = type?._context;
    if (context?.displayName) {
      return `${context.displayName}.Provider`;
    }
    return "Context.Provider";
  }

  if (tag === FIBER_TAG.CONTEXT_CONSUMER) {
    const context = type?._context ?? type;
    if (context?.displayName) {
      return `${context.displayName}.Consumer`;
    }
    return "Context.Consumer";
  }

  return "Unknown";
}

export function getComponentId(fiber: Fiber): string {
  return safeFiberOperation(
    () => {
      const debugId = (fiber as Record<string, unknown>)._debugID;
      if (typeof debugId === "number") {
        return `fiber-debug-${debugId}`;
      }

      if (fiber._debugSource) {
        const name = getComponentNameUnsafe(fiber);
        const { fileName, lineNumber } = fiber._debugSource;
        const shortPath = fileName?.split("/").slice(-2).join("/") || "unknown";
        return `fiber-${name}-${shortPath}-${lineNumber || 0}`;
      }

      const name = getComponentNameUnsafe(fiber);
      const typeHash = typeof fiber.type === "function"
        ? fiber.type.toString().length
        : 0;
      return `fiber-${name}-${typeHash}`;
    },
    {
      fallback: `fiber-unknown-${Date.now()}`,
      feature: "component-inspection",
    },
  );
}

export function getSourceLocation(fiber: Fiber): SourceLocation | null {
  return safeFiberOperation(
    () => {
      if (fiber._debugSource) {
        return {
          fileName: fiber._debugSource.fileName,
          lineNumber: fiber._debugSource.lineNumber,
          columnNumber: fiber._debugSource.columnNumber,
        };
      }
      return null;
    },
    { fallback: null, feature: "component-inspection" },
  );
}

export function getProps(fiber: Fiber): Record<string, unknown> {
  return safeFiberOperation(
    () => {
      if (fiber.memoizedProps && typeof fiber.memoizedProps === "object") {
        return fiber.memoizedProps as Record<string, unknown>;
      }
      return {};
    },
    { fallback: {}, feature: "component-inspection" },
  );
}

export function getHookStates(fiber: Fiber): unknown[] {
  return safeFiberOperation(
    () => {
      const states: unknown[] = [];
      let current = fiber.memoizedState;

      while (current) {
        states.push(current.memoizedState);
        current = current.next;
      }

      return states;
    },
    { fallback: [], feature: "state-inspection" },
  );
}
