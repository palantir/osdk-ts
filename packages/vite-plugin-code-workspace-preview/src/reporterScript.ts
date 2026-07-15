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
 * A plain-string IIFE so it can be injected verbatim as an inline classic
 * `<script>`: it installs its listeners synchronously, before the deferred app
 * module runs, and is not run through Vite's transform pipeline. No-op unless
 * running inside an iframe.
 */
export const REPORTER_SCRIPT: string = `(function () {
  if (window.parent === window) return;

  function post(data) {
    data.source = "osdk-preview";
    try { window.parent.postMessage(data, "*"); } catch (_) {}
  }

  function appHasContent() {
    var root = document.getElementById("root");
    return root != null && root.childElementCount > 0;
  }

  function reportIfBlank(data) {
    // window.error fires during React's render, before it commits an error
    // boundary / Router errorElement into #root. Defer the task so the app's
    // own error UI can render; only report if the app rendered nothing.
    setTimeout(function () { if (appHasContent()) return; post(data); }, 0);
  }

  window.addEventListener("error", function (e) {
    reportIfBlank({ kind: "error", message: e.message, filename: e.filename, lineno: e.lineno, colno: e.colno, stack: e.error && e.error.stack });
  });

  window.addEventListener("unhandledrejection", function (e) {
    var r = e.reason;
    reportIfBlank({ kind: "unhandledrejection", message: String((r && r.message) || r), stack: r && r.stack });
  });

  // reset any previous errors
  post({ kind: "ready" });
})();`;
