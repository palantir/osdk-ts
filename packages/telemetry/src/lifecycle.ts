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
 * Flush buffered logs on `visibilitychange` to hidden (primary) and `pagehide`
 * (backup; pagehide alone is unreliable on mobile). Both can fire on one
 * teardown, so the flush runs once per hidden episode and re-arms on visible.
 * No-op outside the browser so the package stays importable in Node.
 */
export function registerLifecycle(
  onUnload: () => void,
  target: EventTarget | undefined = defaultWindow(),
): Lifecycle {
  const cleanups: Array<() => void> = [];
  let flushedWhileHidden = false;

  const flushOnce = (): void => {
    if (flushedWhileHidden) {
      return;
    }
    flushedWhileHidden = true;
    onUnload();
  };

  if (target != null) {
    const onPageHide = (): void => flushOnce();
    target.addEventListener("pagehide", onPageHide);
    cleanups.push(() => target.removeEventListener("pagehide", onPageHide));
  }

  const doc = defaultDocument();
  if (doc != null) {
    const onVisibilityChange = (): void => {
      if (doc.visibilityState === "hidden") {
        flushOnce();
      } else {
        flushedWhileHidden = false;
      }
    };
    doc.addEventListener("visibilitychange", onVisibilityChange);
    cleanups.push(() =>
      doc.removeEventListener("visibilitychange", onVisibilityChange)
    );
  }

  return {
    unregister(): void {
      for (const teardown of cleanups) {
        teardown();
      }
    },
  };
}

function defaultWindow(): EventTarget | undefined {
  if (typeof window !== "undefined") {
    return window;
  }
  return undefined;
}

function defaultDocument(): Document | undefined {
  if (typeof document !== "undefined") {
    return document;
  }
  return undefined;
}
