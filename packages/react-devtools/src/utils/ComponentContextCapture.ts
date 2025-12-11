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

import * as React from "react";
import { sourceMapResolver } from "./SourceMapResolver.js";

export interface ComponentContext {
  id: string;
  name: string;
  displayName?: string;
  filePath?: string;
  lineNumber?: number;
  columnNumber?: number;
  originalFilePath?: string;
  originalLineNumber?: number;
  fiberNode?: WeakRef<Fiber>;
  stackTrace: string;
}

export interface Fiber {
  type: any;
  stateNode: any;
  child: Fiber | null;
  sibling: Fiber | null;
  return: Fiber | null;
  alternate: Fiber | null;
  memoizedProps?: any;
  _debugID?: number;
  _debugSource?: { fileName: string; lineNumber: number };
}

export class ComponentContextCapture {
  private fiberToId = new WeakMap<Fiber, string>();
  private idCounter = 0;
  private enabled = true;
  private capturedContext: ComponentContext | null = null;

  getCurrentContext(): ComponentContext | null {
    if (!this.enabled) return null;

    const context = this.tryReactFiberAccess()
      || this.tryReactDevToolsBackend()
      || this.tryStackTraceAnalysis();

    return context;
  }

  /**
   * Capture the current context NOW, during render phase.
   * This must be called synchronously during hook execution,
   * not in effects or callbacks.
   */
  captureNow(): ComponentContext | null {
    if (!this.enabled) {
      return null;
    }

    // Try to capture context synchronously during render
    let context = this.tryReactFiberAccess();
    if (context) {
      this.capturedContext = context;
      return context;
    }

    context = this.tryCurrentDispatcherFiber();
    if (context) {
      this.capturedContext = context;
      return context;
    }

    context = this.tryStackTraceAnalysis();
    if (context) {
      this.capturedContext = context;
      return context;
    }

    return null;
  }

  /**
   * Get the last captured context.
   * Used when we need context but can't capture it now (e.g., in effects).
   */
  getCapturedContext(): ComponentContext | null {
    return this.capturedContext;
  }

  /**
   * Clear the captured context.
   * Called when we're done with a registration flow.
   */
  clearCapturedContext(): void {
    this.capturedContext = null;
  }

  /**
   * Try to get fiber from React's current dispatcher.
   * This works during render phase when hooks are executing.
   */
  private tryCurrentDispatcherFiber(): ComponentContext | null {
    try {
      // First try imported React
      const internals =
        (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      if (!internals) {
        return null;
      }

      const dispatcher = internals.ReactCurrentDispatcher?.current;
      if (!dispatcher) {
        return null;
      }

      // During render, React sets the current fiber on the dispatcher
      // We need to access it through the dispatcher's internal state
      const dispatcherWithFiber = dispatcher as any;

      // Try multiple known internal property names
      const fiber = dispatcherWithFiber.currentlyRenderingFiber
        || dispatcherWithFiber._currentFiber
        || dispatcherWithFiber.current
        || dispatcherWithFiber.renderingFiber
        || dispatcherWithFiber._workInProgressHook?.memoizedState?.element
          ?._owner;

      if (fiber && typeof fiber.type === "function") {
        return this.contextFromFiber(fiber);
      }

      // Try to find fiber through hook internals if available
      if (dispatcherWithFiber.currentHook) {
        const hook = dispatcherWithFiber.currentHook;
        // The hook might have a reference to the fiber
        if (hook.fiber) {
          return this.contextFromFiber(hook.fiber);
        }
        // Try to walk up through next pointers
        if (hook.next && hook.next._debugOwner) {
          return this.contextFromFiber(hook.next._debugOwner);
        }
      }

      return null;
    } catch (e) {
      return null;
    }
  }

  private tryReactFiberAccess(): ComponentContext | null {
    try {
      // Try imported React first
      let internals =
        (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

      // Fallback to global React if imported doesn't work
      if (!internals) {
        const globalReact = (globalThis as any).React;
        if (!globalReact) {
          return null;
        }
        internals =
          globalReact.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      }

      if (!internals) {
        return null;
      }

      const owner = internals.ReactCurrentOwner?.current;
      if (owner && typeof owner.type === "function") {
        return this.contextFromFiber(owner);
      }

      const dispatcher = internals.ReactCurrentDispatcher?.current;
      if (dispatcher && (dispatcher as any).__currentFiber) {
        return this.contextFromFiber((dispatcher as any).__currentFiber);
      }

      return null;
    } catch (e) {
      return null;
    }
  }

  private tryReactDevToolsBackend(): ComponentContext | null {
    try {
      const hook = (globalThis as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!hook) return null;

      const roots = hook.getFiberRoots?.(1);
      if (!roots || roots.size === 0) return null;

      for (const root of roots) {
        const context = this.findRenderingFiber(root.current);
        if (context) return context;
      }

      return null;
    } catch (_e) {
      return null;
    }
  }

  private tryStackTraceAnalysis(): ComponentContext | null {
    const error = new Error();
    const stack = error.stack || "";

    const parsed = this.parseStackTrace(stack);

    // Generate a consistent ID that can be matched later
    // Use the same format as fiber-based IDs for consistency
    const shortPath = parsed.filePath?.split("/").slice(-2).join("/")
      || "unknown";
    const id = `fiber-${parsed.componentName || "Unknown"}-${shortPath}-${
      parsed.lineNumber || 0
    }`;

    return {
      id,
      name: parsed.componentName || "Unknown",
      filePath: parsed.filePath,
      lineNumber: parsed.lineNumber,
      columnNumber: parsed.columnNumber,
      stackTrace: stack,
    };
  }

  private contextFromFiber(fiber: Fiber): ComponentContext {
    const id = this.getComponentIdForFiber(fiber);
    const name = this.getFiberName(fiber);
    const displayName = this.getFiberDisplayName(fiber);

    let filePath: string | undefined;
    let lineNumber: number | undefined;
    let originalFilePath: string | undefined;
    let originalLineNumber: number | undefined;

    if (fiber._debugSource) {
      filePath = fiber._debugSource.fileName;
      lineNumber = fiber._debugSource.lineNumber;

      if (filePath && lineNumber) {
        sourceMapResolver
          .resolveOriginalLocation(filePath, lineNumber, 0)
          .then((resolved) => {
            if (resolved.filePath !== filePath) {
              originalFilePath = resolved.filePath;
              originalLineNumber = resolved.line;
            }
          })
          .catch(() => {});
      }
    }

    return {
      id,
      name,
      displayName,
      filePath,
      lineNumber,
      originalFilePath,
      originalLineNumber,
      fiberNode: new WeakRef(fiber),
      stackTrace: new Error().stack || "",
    };
  }

  /**
   * Get a stable component ID for a fiber.
   * This method is public so ClickToInspect can use the same IDs.
   */
  getComponentIdForFiber(fiber: Fiber): string {
    let id = this.fiberToId.get(fiber);
    if (!id) {
      // Generate a stable ID based on fiber properties
      const name = this.getFiberName(fiber);
      const type = typeof fiber.type;

      // Try to use debugID if available
      if (fiber._debugID) {
        id = `fiber-debug-${fiber._debugID}`;
      } // Try to use debug source for more stable IDs
      else if (fiber._debugSource) {
        const { fileName, lineNumber } = fiber._debugSource;
        const shortPath = fileName?.split("/").slice(-2).join("/") || "unknown";
        id = `fiber-${name}-${shortPath}-${lineNumber || 0}`;
      } // Use component name and counter as fallback
      else {
        id = `fiber-${name}-${this.idCounter++}`;
      }

      this.fiberToId.set(fiber, id);
    }
    return id;
  }

  private getFiberName(fiber: Fiber): string {
    if (typeof fiber.type === "function") {
      return fiber.type.name || fiber.type.displayName || "Anonymous";
    }

    if (typeof fiber.type === "string") {
      return fiber.type;
    }

    return "Unknown";
  }

  private getFiberDisplayName(fiber: Fiber): string | undefined {
    if (typeof fiber.type === "function") {
      return fiber.type.displayName || undefined;
    }
    return undefined;
  }

  private findRenderingFiber(fiber: Fiber | null): ComponentContext | null {
    if (!fiber) return null;

    if (typeof fiber.type === "function") {
      if (fiber.stateNode) {
        return this.contextFromFiber(fiber);
      }
    }

    const fromChild = this.findRenderingFiber(fiber.child);
    if (fromChild) return fromChild;

    return this.findRenderingFiber(fiber.sibling);
  }

  private parseStackTrace(stack: string): {
    componentName: string | null;
    filePath?: string;
    lineNumber?: number;
    columnNumber?: number;
  } {
    const lines = stack.split("\n");

    for (let i = 3; i < Math.min(lines.length, 10); i++) {
      const line = lines[i];

      const chromeMatch = line.match(/at\s+([A-Z]\w+)\s+\((.*?):(\d+):(\d+)\)/);
      if (chromeMatch) {
        return {
          componentName: chromeMatch[1],
          filePath: chromeMatch[2],
          lineNumber: parseInt(chromeMatch[3], 10),
          columnNumber: parseInt(chromeMatch[4], 10),
        };
      }

      const firefoxMatch = line.match(/([A-Z]\w+)@(.*?):(\d+):(\d+)/);
      if (firefoxMatch) {
        return {
          componentName: firefoxMatch[1],
          filePath: firefoxMatch[2],
          lineNumber: parseInt(firefoxMatch[3], 10),
          columnNumber: parseInt(firefoxMatch[4], 10),
        };
      }

      const nameMatch = line.match(/at\s+([A-Z]\w+)/);
      if (nameMatch) {
        return { componentName: nameMatch[1] };
      }
    }

    return { componentName: null };
  }

  disable(): void {
    this.enabled = false;
  }

  enable(): void {
    this.enabled = true;
  }

  clearCache(): void {
    this.fiberToId = new WeakMap();
  }
}

export const componentContextCapture: ComponentContextCapture =
  new ComponentContextCapture();
