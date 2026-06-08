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

/// <reference types="vite/client" />

import { createClient as __real } from "@osdk/client";
import { smartClient } from "./smartClient.js";

// Re-export every named binding from `@osdk/client` so this module is a
// drop-in substitute
export * from "@osdk/client";

/**
 * Drop-in replacement for `createClient` from `@osdk/client` that does
 * two things on top of the real one, both dev-only:
 *
 *  1. Forces the base URL to the dev server's origin and base path
 *     (`import.meta.env.BASE_URL`) so every OSDK request flows through the
 *     proxies that `vite-plugin-superrepo` installs on the Vite dev server,
 *     even when Vite is served under a path prefix (e.g. behind the Foundry
 *     Container Service proxy).
 *  2. Wraps the returned client with `smartClient`, which intercepts
 *     `executeFunction` calls and routes them to the local foundry-cli
 *     typescript/python function runtimes.
 *
 * The plugin's `transform` hook rewrites `src/client.ts`'s import of
 * `@osdk/client` to point here in dev only. Production builds keep the
 * real `createClient`, the real foundry URL, and no `smartClient` wrap.
 */
export const createClient: typeof __real = (
  _baseUrl,
  ontologyRid,
  tokenProvider,
  options,
  fetchFn,
) =>
  smartClient(__real(
    new URL(import.meta.env.BASE_URL, window.location.origin).href,
    ontologyRid,
    tokenProvider,
    options,
    fetchFn,
  ));
