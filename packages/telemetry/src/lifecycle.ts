/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export interface Lifecycle {
  /** Remove the registered listeners. */
  unregister(): void;
}

/**
 * Wire `onUnload` to the `pagehide` event; `createLoggingClient` points it at
 * the provider's `forceFlush`. `pagehide` is preferred over
 * `beforeunload`/`unload` because it fires reliably on mobile and on bfcache
 * navigation. When no event target is available (for example in Node), this is
 * a no-op so the package stays importable outside the browser.
 */
export function registerLifecycle(
  onUnload: () => void,
  target: EventTarget | undefined = defaultTarget(),
): Lifecycle {
  if (target == null) {
    return { unregister(): void {} };
  }

  const handler = (): void => {
    onUnload();
  };
  target.addEventListener("pagehide", handler);

  return {
    unregister(): void {
      target.removeEventListener("pagehide", handler);
    },
  };
}

function defaultTarget(): EventTarget | undefined {
  if (typeof window !== "undefined") {
    return window;
  }
  return undefined;
}
