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

import type { ViteDevServer } from "vite";
import {
  getCodeWorkspacesBaseHref,
  isCodeWorkspacesMode,
} from "./codeWorkspacesMode.js";

export function getBaseHref(server: ViteDevServer): string {
  const baseHref = isCodeWorkspacesMode(server.config.mode)
    ? getCodeWorkspacesBaseHref()
    : getLocalhostBaseHref(server);
  // Ensure that all URLs end with a trailing slash for consistency
  return baseHref.replace(/\/?$/, "/");
}

function getLocalhostBaseHref(server: ViteDevServer): string {
  return `${
    server.config.server.https ? "https" : "http"
  }://localhost:${server.config.server.port}${server.config.base}`;
}
