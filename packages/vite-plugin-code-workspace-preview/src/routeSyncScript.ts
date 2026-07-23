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
 * Browser-side route bridge injected into the Code Workspaces preview page. It
 * posts route changes up to the parent frame (so the shell can mirror the
 * iframe's location) and accepts `SET_RELATIVE_PATH` commands back down (so the
 * shell can drive navigation inside the preview).
 *
 * `win` is typed as `Window & typeof globalThis` so the DOM constructors it
 * needs (`PopStateEvent`) are reachable through the injected seam, keeping the
 * function self-contained and unit-testable with a fake window and no DOM.
 */
export function installRouteSync(win: Window & typeof globalThis): void {
  // No-op unless running inside an iframe.
  if (win.parent === win) return;

  function notifyRouteChange(): void {
    win.parent.postMessage(
      { source: "osdk-preview", type: "ROUTE_CHANGE", path: win.location.href },
      "*"
    );
  }

  const originalPushState = win.history.pushState.bind(win.history);
  const originalReplaceState = win.history.replaceState.bind(win.history);

  win.history.pushState = (...args: Parameters<History["pushState"]>) => {
    originalPushState(...args);
    notifyRouteChange();
  };
  win.history.replaceState = (...args: Parameters<History["replaceState"]>) => {
    originalReplaceState(...args);
    notifyRouteChange();
  };

  win.addEventListener("popstate", () => notifyRouteChange());

  win.addEventListener("message", (event) => {
    const data: { type?: unknown; path?: unknown } = event.data ?? {};
    if (data.type === "SET_RELATIVE_PATH" && typeof data.path === "string") {
      win.history.pushState({}, "", data.path);
      // React Router only re-renders on popstate, not on a manual pushState, so
      // dispatch one to make the router pick up the shell-driven navigation.
      win.dispatchEvent(new win.PopStateEvent("popstate", { state: null }));
    }
  });

  // Announce readiness and report the initial route.
  win.parent.postMessage({ source: "osdk-preview", type: "IFRAME_READY" }, "*");
  notifyRouteChange();
}

/**
 * {@link installRouteSync} serialized as a self-contained IIFE for injection as
 * an inline classic `<script>`.
 */
export const ROUTE_SYNC_SCRIPT: string = `(${installRouteSync.toString()})(window);`;
