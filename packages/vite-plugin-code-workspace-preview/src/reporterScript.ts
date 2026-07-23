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
 * Browser-side reporter injected into the Code Workspaces preview page. It
 * posts uncaught errors / unhandled rejections to the parent for handling.
 *
 * Timing goes through `win.setTimeout` so tests can run the deferred
 * blank-check synchronously via a fake window.
 */
export function installReporter(win: Window, doc: Document): void {
  // No-op unless running inside an iframe.
  if (win.parent === win) return;

  function post(data: Record<string, unknown>): void {
    data.source = "osdk-preview";
    try {
      win.parent.postMessage(data, "*");
    } catch {
      // parent gone or cross-origin refusal; ignore
    }
  }

  function appHasContent(): boolean {
    const root = doc.querySelector("#root");
    return root != null && root.childElementCount > 0;
  }

  function reportIfBlank(data: Record<string, unknown>): void {
    // window "error" fires during React's render, before it commits an error
    // boundary / Router errorElement into #root. Defer to a macro-task so the
    // app's own error UI can render; only report if the app rendered nothing.
    win.setTimeout(() => {
      if (appHasContent()) return;
      post(data);
    }, 0);
  }

  function errorData(e: ErrorEvent): Record<string, unknown> {
    const target = e.target;
    // A failed resource (e.g. a 404 on a chunk) fires on the element,
    // so it carries no message/stack, just its URL.
    if (target != null && target !== win) {
      const el = target as Element & { src?: string; href?: string };
      const url = el.src ?? el.href ?? "";
      return {
        kind: "error",
        message: `Failed to load ${el.tagName.toLowerCase()}${
          url ? `: ${url}` : ""
        }`,
      };
    }

    // Thrown exception, dispatched at window: a real ErrorEvent.
    return {
      kind: "error",
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      stack: (e.error as Error | undefined)?.stack,
    };
  }

  // capture=true so we also catch resource load failures
  win.addEventListener("error", (e) => reportIfBlank(errorData(e)), true);

  win.addEventListener("unhandledrejection", (e) => {
    const r: { message?: unknown; stack?: unknown } | null | undefined =
      e.reason;
    reportIfBlank({
      kind: "unhandledrejection",
      message: String(r?.message ?? r),
      stack: r?.stack,
    });
  });

  // Signal a fresh load so the parent can clear any previously reported error.
  post({ kind: "ready" });
}

/**
 * {@link installReporter} serialized as a self-contained IIFE for injection as
 * an inline classic `<script>`.
 */
export const REPORTER_SCRIPT: string = `(${installReporter.toString()})(window, document);`;
