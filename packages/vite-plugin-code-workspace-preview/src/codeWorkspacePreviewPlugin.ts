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

import type { Plugin } from "vite";

import { REPORTER_SCRIPT } from "./reporterScript.js";

export interface CodeWorkspacePreviewOptions {
  /**
   * The Vite mode that activates injection. Defaults to "code-workspaces", the
   * dev server mode in Foundry Code Workspaces.
   */
  mode?: string;
}

/**
 * Vite plugin that surfaces runtime errors from the Foundry Code Workspaces
 * preview. When running in the configured mode it injects a small inline script
 * (see {@link REPORTER_SCRIPT}) that posts uncaught errors and unhandled
 * rejections to the parent frame, so a blank preview shows a reason
 * instead of a silent white screen.
 *
 * Dev-only (`apply: "serve"`) and gated on the Vite mode, so it never ships in
 * production builds and adds nothing to a normal local `npm run dev`.
 */
export function codeWorkspacePreviewPlugin(
  options: CodeWorkspacePreviewOptions = {}
): Plugin {
  const activeMode = options.mode ?? "code-workspaces";
  return {
    name: "osdk-code-workspace-preview",
    apply: "serve",
    transformIndexHtml(_html, ctx) {
      // ctx.server is present during serve; guard defensively regardless.
      if (ctx.server?.config.mode !== activeMode) {
        return;
      }
      return [
        {
          tag: "script",
          children: REPORTER_SCRIPT,
          injectTo: "head-prepend",
        },
      ];
    },
  };
}
