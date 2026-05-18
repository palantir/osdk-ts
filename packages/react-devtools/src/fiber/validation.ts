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

import type { ValidationError } from "../types/index.js";
import {
  type FiberCapabilities,
  getCapabilitiesManager,
} from "./capabilities.js";
import { getAllFiberRoots, getRenderers } from "./DevtoolsHook.js";

interface ValidationResult {
  success: boolean;
  reactVersion: string | null;
  capabilities: Partial<FiberCapabilities>;
  errors: ValidationError[];
}

export function validateFiberAccess(): ValidationResult {
  const manager = getCapabilitiesManager();
  const errors: ValidationError[] = [];
  let reactVersion: string | null = null;

  const hookInstalled =
    typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
  manager.setCapability("hookInstalled", hookInstalled);

  if (!hookInstalled) {
    errors.push({
      field: "hookInstalled",
      message: "React DevTools global hook is not installed",
      value: false,
    });
  }

  let rendererDetected = false;
  if (hookInstalled) {
    const hook = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (hook?.renderers && hook.renderers.size > 0) {
      rendererDetected = true;

      const firstRenderer = hook.renderers.values().next().value;
      if (firstRenderer?.version) {
        reactVersion = firstRenderer.version;
      } else if (firstRenderer?.reconcilerVersion) {
        reactVersion = firstRenderer.reconcilerVersion;
      }
    }
  }
  manager.setCapability("rendererDetected", rendererDetected);
  manager.setCapability("detectedReactVersion", reactVersion);

  if (!rendererDetected) {
    errors.push({
      field: "rendererDetected",
      message: "No React renderer detected. React may not have loaded yet.",
      value: false,
    });
  }

  let fiberAccessWorking = false;
  if (rendererDetected) {
    fiberAccessWorking = testFiberAccess();
  }
  manager.setCapability("fiberAccessWorking", fiberAccessWorking);

  if (rendererDetected && !fiberAccessWorking) {
    errors.push({
      field: "fiberAccessWorking",
      message: "Unable to access React fiber tree",
      value: false,
    });
  }

  manager.setCapability("lastValidationTime", Date.now());

  const success = hookInstalled && rendererDetected && fiberAccessWorking;

  return {
    success,
    reactVersion,
    capabilities: {
      hookInstalled,
      rendererDetected,
      fiberAccessWorking,
      detectedReactVersion: reactVersion,
    },
    errors,
  };
}

function testFiberAccess(): boolean {
  const renderers = getRenderers();
  if (renderers.size > 0) {
    return true;
  }

  try {
    const trackedRoots = getAllFiberRoots();
    for (const fiberRoot of trackedRoots) {
      if (
        fiberRoot.current
        && typeof fiberRoot.current === "object"
        && "tag" in fiberRoot.current
        && typeof fiberRoot.current.tag === "number"
      ) {
        return true;
      }
    }

    const domRoots = findReactRoots();
    for (const root of domRoots) {
      const fiber = getFiberFromRoot(root);
      if (
        fiber
        && typeof fiber === "object"
        && "tag" in fiber
        && typeof fiber.tag === "number"
      ) {
        return true;
      }
    }

    return false;
  } catch {
    return false;
  }
}

const COMMON_ROOT_SELECTORS = [
  "#root",
  "#app",
  "#__next",
  "[data-reactroot]",
  "#___gatsby",
  "#react-root",
  "#application",
];

function hasReactInternals(element: Element): boolean {
  for (const key in element) {
    if (
      key.startsWith("__reactContainer$")
      || key.startsWith("_reactRootContainer")
    ) {
      return true;
    }
  }
  return false;
}

function findReactRoots(): Element[] {
  const roots: Element[] = [];

  for (const selector of COMMON_ROOT_SELECTORS) {
    const el = document.querySelector(selector);
    if (el && hasReactInternals(el)) {
      roots.push(el);
    }
  }

  if (roots.length > 0) {
    return roots;
  }

  const topLevelChildren = document.body?.children;
  if (topLevelChildren) {
    for (const child of topLevelChildren) {
      if (hasReactInternals(child)) {
        roots.push(child);
      }
    }
  }

  return roots;
}

function getFiberFromRoot(element: Element): unknown {
  const elementWithInternals = element as unknown as Record<string, unknown>;

  for (const key in element) {
    if (key.startsWith("__reactContainer$")) {
      const container = elementWithInternals[key];
      if (
        container && typeof container === "object" && "current" in container
      ) {
        return (container as { current: unknown }).current;
      }
    }
  }

  if ("_reactRootContainer" in element) {
    const legacyRoot = elementWithInternals._reactRootContainer;
    if (legacyRoot && typeof legacyRoot === "object") {
      const internalRoot =
        (legacyRoot as Record<string, unknown>)._internalRoot;
      if (internalRoot && typeof internalRoot === "object") {
        return (internalRoot as { current: unknown }).current;
      }
    }
  }

  return null;
}
