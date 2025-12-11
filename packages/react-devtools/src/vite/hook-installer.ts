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
 * DevTools hook installation code that will be injected into HTML.
 * This code runs as an inline script BEFORE React loads.
 */

export function generateHookInstallationScript(
  verbose: boolean = false,
): string {
  return `
<script type="module">
  // OSDK DevTools Hook Installer
  // This script installs __REACT_DEVTOOLS_GLOBAL_HOOK__ before React initializes

  (function installOsdkDevToolsHook() {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // If hook already exists (React DevTools extension), cooperate with it
    if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      ${
    verbose
      ? `console.log('[OSDK DevTools] Hook already exists (browser extension detected)');`
      : ""
  }
      return;
    }

    // Store fiber roots per renderer ID
    const fiberRootsByRenderer = new Map();

    // Install our hook
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
      // Renderer registry
      renderers: new Map(),

      // Indicate we support React Fiber architecture
      supportsFiber: true,

      // Called by React when a renderer initializes
      inject(renderer) {
        const id = this.renderers.size + 1;
        this.renderers.set(id, renderer);
        fiberRootsByRenderer.set(id, new Set());

        ${
    verbose
      ? `
        console.log('[OSDK DevTools] React renderer injected:', {
          id,
          version: renderer.version,
          package: renderer.rendererPackageName
        });
        `
      : ""
  }

        return id;
      },

      // Called by React after each commit phase
      onCommitFiberRoot(rendererID, root, priorityLevel) {
        const roots = fiberRootsByRenderer.get(rendererID);
        if (roots) {
          roots.add(root);
        }
      },

      // Called by React when a fiber unmounts
      onCommitFiberUnmount(rendererID, fiber) {
        // Optional: track unmounts if needed for GC
      },

      // Custom method: Get roots for specific renderer
      getFiberRoots(rendererID) {
        return fiberRootsByRenderer.get(rendererID) || new Set();
      },

      // Custom method: Get all roots across all renderers
      getAllFiberRoots() {
        const allRoots = new Set();
        for (const roots of fiberRootsByRenderer.values()) {
          for (const root of roots) {
            allRoots.add(root);
          }
        }
        return allRoots;
      }
    };

    ${
    verbose
      ? `console.log('[OSDK DevTools] Hook installed successfully via Vite plugin');`
      : ""
  }
  })();
</script>`;
}
