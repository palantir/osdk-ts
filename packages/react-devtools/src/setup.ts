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

/**
 * Standalone hook installation script for non-Vite environments.
 * Import this before React loads to install the DevTools hook.
 *
 * @example
 * ```html
 * <script type="module" src="/@osdk/react-devtools/setup"></script>
 * <script type="module" src="/src/main.tsx"></script>
 * ```
 */

type FiberRoot = {
  current: {
    child?: object;
  };
};

type ReactRenderer = {
  version: string;
  rendererPackageName?: string;
};

type ReactDevToolsGlobalHook = {
  renderers: Map<number, ReactRenderer>;
  supportsFiber: boolean;
  inject(renderer: ReactRenderer): number;
  onCommitFiberRoot(
    rendererID: number,
    root: FiberRoot,
    priorityLevel?: number,
  ): void;
  onCommitFiberUnmount(rendererID: number, fiber: object): void;
  getFiberRoots(rendererID: number): Set<FiberRoot>;
  getAllFiberRoots(): Set<FiberRoot>;
};

// Check if we're in a browser environment
if (typeof window !== "undefined") {
  const globalWindow = window as typeof window & {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: ReactDevToolsGlobalHook;
  };

  // If hook already exists (React DevTools extension), cooperate with it
  if (!globalWindow.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    // Store fiber roots per renderer ID
    const fiberRootsByRenderer = new Map<number, Set<FiberRoot>>();

    // Install our hook
    globalWindow.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
      // Renderer registry
      renderers: new Map<number, ReactRenderer>(),

      // Indicate we support React Fiber architecture
      supportsFiber: true,

      // Called by React when a renderer initializes
      inject(renderer: ReactRenderer): number {
        const id = this.renderers.size + 1;
        this.renderers.set(id, renderer);
        fiberRootsByRenderer.set(id, new Set<FiberRoot>());
        return id;
      },

      // Called by React after each commit phase
      onCommitFiberRoot(
        rendererID: number,
        root: FiberRoot,
        priorityLevel?: number,
      ): void {
        const roots = fiberRootsByRenderer.get(rendererID);
        if (roots) {
          roots.add(root);
        }
      },

      // Called by React when a fiber unmounts
      onCommitFiberUnmount(rendererID: number, fiber: object): void {
        // Optional: track unmounts if needed for GC
      },

      // Custom method: Get roots for specific renderer
      getFiberRoots(rendererID: number): Set<FiberRoot> {
        return fiberRootsByRenderer.get(rendererID) || new Set<FiberRoot>();
      },

      // Custom method: Get all roots across all renderers
      getAllFiberRoots(): Set<FiberRoot> {
        const allRoots = new Set<FiberRoot>();
        const allRootSets = Array.from(fiberRootsByRenderer.values());
        for (const roots of allRootSets) {
          for (const root of roots) {
            allRoots.add(root);
          }
        }
        return allRoots;
      },
    };
  }
}
