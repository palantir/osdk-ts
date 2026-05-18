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

import { getRenderers } from "./DevtoolsHook.js";
import { safeFiberOperation } from "./SafeFiberOperation.js";
import type { Fiber } from "./types.js";

function isValidFiber(value: unknown): value is Fiber {
  return (
    typeof value === "object"
    && value != null
    && "tag" in value
    && "stateNode" in value
    && "return" in value
    && "child" in value
    && "sibling" in value
    && "flags" in value
  );
}

export function getFiberFromElement(element: Element): Fiber | null {
  return safeFiberOperation(
    () => getFiberFromElementUnsafe(element),
    { fallback: null, feature: "component-inspection" },
  );
}

function getFiberFromElementUnsafe(element: Element): Fiber | null {
  const renderers = getRenderers();
  for (const renderer of renderers.values()) {
    if (renderer.findFiberByHostInstance) {
      const fiber = renderer.findFiberByHostInstance(element);
      if (fiber && isValidFiber(fiber)) {
        return fiber;
      }
    }
  }

  const legacyRoot = (element as unknown as Record<string, unknown>)
    ._reactRootContainer as
      | { _internalRoot?: { current?: { child?: unknown } } }
      | undefined;
  if (legacyRoot?._internalRoot?.current?.child) {
    const fiber = legacyRoot._internalRoot.current.child;
    if (isValidFiber(fiber)) {
      return fiber;
    }
  }

  const fiber = findFiberFromInternalProperties(element);
  if (fiber) {
    return fiber;
  }

  return null;
}

const REACT_KEY_PREFIXES = [
  "__reactFiber$",
  "__reactInternalInstance$",
  "__reactContainer$",
] as const;

function findFiberFromInternalProperties(element: Element): Fiber | null {
  for (const key in element) {
    for (const prefix of REACT_KEY_PREFIXES) {
      if (key.startsWith(prefix)) {
        const value = (element as unknown as Record<string, unknown>)[key];
        if (isValidFiber(value)) {
          return value;
        }
      }
    }
  }
  return null;
}
