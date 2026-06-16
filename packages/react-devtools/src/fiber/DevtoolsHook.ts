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

import type {
  FiberRoot,
  ReactDevToolsGlobalHook,
  ReactRenderer,
} from "./types.js";

const OSDK_INSTRUMENTATION_STRING = "osdk-devtools";

const NO_OP = () => {
  /* no-op */
};

const checkDCE = (fn: unknown): void => {
  try {
    const code = Function.prototype.toString.call(fn);
    if (code.indexOf("^_^") > -1) {
      setTimeout(() => {
        throw new Error(
          "React is running in production mode, but dead code "
            + "elimination has not been applied. Read how to correctly "
            + "configure React for production: "
            + "https://reactjs.org/link/perf-use-production-build",
        );
      });
    }
  } catch {
    // Ignore errors in DCE check
  }
};

const allRenderers = new Set<ReactRenderer>();
const onActiveListeners = new Set<() => void>();
const fiberRoots = new Map<number, Set<FiberRoot>>();

function isClientEnvironment(): boolean {
  return (
    typeof window !== "undefined"
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- Browser detection pattern from React DevTools
    && (typeof window.document?.createElement === "function"
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- ReactNative detection pattern
      || window.navigator?.product === "ReactNative")
  );
}

function hasDevToolsHook(): boolean {
  return Object.prototype.hasOwnProperty.call(
    globalThis,
    "__REACT_DEVTOOLS_GLOBAL_HOOK__",
  );
}

function installDevToolsHook(
  onActive?: () => void,
): ReactDevToolsGlobalHook {
  const renderers = new Map<number, ReactRenderer>();
  let nextId = 0;

  let hook: ReactDevToolsGlobalHook = {
    _instrumentationIsActive: false,
    _instrumentationSource: OSDK_INSTRUMENTATION_STRING,
    checkDCE,
    hasUnsupportedRendererAttached: false,
    inject(renderer) {
      const id = ++nextId;
      renderers.set(id, renderer);
      allRenderers.add(renderer);

      fiberRoots.set(id, new Set());

      if (!hook._instrumentationIsActive) {
        hook._instrumentationIsActive = true;
        notifyActiveListeners();
      }
      return id;
    },
    on: NO_OP,
    onCommitFiberRoot(rendererID, root, _priority) {
      const roots = fiberRoots.get(rendererID);
      if (roots) {
        roots.add(root);
      }
    },
    onCommitFiberUnmount: NO_OP,
    onPostCommitFiberRoot: NO_OP,
    renderers,
    supportsFiber: true,
    supportsFlight: true,
  };

  try {
    Object.defineProperty(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
      configurable: true,
      enumerable: true,
      get() {
        return hook;
      },
      set(newHook) {
        if (newHook && typeof newHook === "object") {
          const ourRenderers = hook.renderers;

          hook = newHook as ReactDevToolsGlobalHook;
          if (ourRenderers.size > 0) {
            ourRenderers.forEach((renderer, id) => {
              allRenderers.add(renderer);
              (newHook as ReactDevToolsGlobalHook).renderers.set(id, renderer);
            });
            patchDevToolsHook(onActive);
          }
        }
      },
    });

    // Chrome extension compatibility hack
    // https://github.com/facebook/react/blob/main/packages/react-devtools-extensions/src/contentScripts/installHook.js
    let hasRunHack = false;

    Object.defineProperty(window, "hasOwnProperty", {
      configurable: true,
      writable: true,
      value: function(
        this: unknown,
        prop: PropertyKey,
      ): boolean | number {
        try {
          if (!hasRunHack && prop === "__REACT_DEVTOOLS_GLOBAL_HOOK__") {
            globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = undefined;
            hasRunHack = true;
            // Chrome DevTools extension compatibility: returns -0 (falsy, non-boolean)
            // so the extension detects a race condition and re-installs its own hook.
            // See: https://github.com/facebook/react/blob/main/packages/react-devtools-extensions/src/contentScripts/installHook.js
            return -0;
          }
        } catch {
          // Ignore errors in hack
        }
        return Object.prototype.hasOwnProperty.call(this, prop);
      },
    });
  } catch {
    // If property definition fails, try to patch existing hook
    patchDevToolsHook(onActive);
  }

  if (onActive) {
    onActiveListeners.add(onActive);
  }

  return hook;
}

function patchDevToolsHook(onActive?: () => void): void {
  if (onActive) {
    onActiveListeners.add(onActive);
  }

  try {
    const hook = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hook) {
      return;
    }

    if (hook._instrumentationSource === OSDK_INSTRUMENTATION_STRING) {
      if (hook.renderers.size || hook._instrumentationIsActive) {
        onActive?.();
      }
      return;
    }

    // Mark as patched
    hook._instrumentationSource = OSDK_INSTRUMENTATION_STRING;
    hook._instrumentationIsActive = false;
    hook.supportsFiber = true;
    hook.supportsFlight = true;
    hook.hasUnsupportedRendererAttached = false;

    const originalInject = hook.inject;
    hook.inject = (renderer) => {
      const id = originalInject(renderer);
      allRenderers.add(renderer);
      fiberRoots.set(id, new Set());
      hook._instrumentationIsActive = true;
      notifyActiveListeners();
      return id;
    };

    const originalOnCommitFiberRoot = hook.onCommitFiberRoot;
    hook.onCommitFiberRoot = (rendererID, root, priority) => {
      if (!fiberRoots.has(rendererID)) {
        fiberRoots.set(rendererID, new Set());
      }
      const roots = fiberRoots.get(rendererID);
      if (roots) {
        roots.add(root);
      }
      originalOnCommitFiberRoot(rendererID, root, priority);
    };

    // If renderers already exist, we're active - set them up now
    if (hook.renderers.size) {
      hook.renderers.forEach((renderer, id) => {
        allRenderers.add(renderer);
        if (!fiberRoots.has(id)) {
          fiberRoots.set(id, new Set());
        }
      });
      hook._instrumentationIsActive = true;
      notifyActiveListeners();
    }
  } catch {
    // Ignore patching errors
  }
}

function getDevToolsHook(
  onActive?: () => void,
): ReactDevToolsGlobalHook {
  if (!hasDevToolsHook()) {
    return installDevToolsHook(onActive);
  }

  patchDevToolsHook(onActive);
  return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ as ReactDevToolsGlobalHook;
}

export function safelyInstallDevToolsHook(): void {
  try {
    if (isClientEnvironment()) {
      getDevToolsHook();
    }
  } catch {
    // Ignore installation errors
  }
}

export function isReactDetected(): boolean {
  const hook = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  return Boolean(
    hook && (hook.renderers.size > 0 || hook._instrumentationIsActive),
  );
}

export function getRenderers(): Map<number, ReactRenderer> {
  const hook = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  return hook?.renderers ?? new Map();
}

export function getAllFiberRoots(): FiberRoot[] {
  const roots: FiberRoot[] = [];
  for (const rootSet of fiberRoots.values()) {
    roots.push(...rootSet);
  }
  return roots;
}

export function onReactDetected(callback: () => void): () => void {
  if (isReactDetected()) {
    callback();
  }
  onActiveListeners.add(callback);
  return () => {
    onActiveListeners.delete(callback);
  };
}

export function onCommitFiberRoot(
  handler: (
    rendererID: number,
    root: FiberRoot,
    priority: number | undefined,
  ) => void,
): () => void {
  const hook = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hook) {
    return () => {};
  }

  const originalHandler = hook.onCommitFiberRoot;
  hook.onCommitFiberRoot = (rendererID, root, priority) => {
    originalHandler(rendererID, root, priority);
    handler(rendererID, root, priority ?? undefined);
  };

  return () => {
    hook.onCommitFiberRoot = originalHandler;
  };
}

function notifyActiveListeners(): void {
  for (const listener of onActiveListeners) {
    try {
      listener();
    } catch {
      // Ignore listener errors
    }
  }
}
