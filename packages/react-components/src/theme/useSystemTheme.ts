/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { useSyncExternalStore } from "react";

import type { ResolvedOsdkTheme } from "./types.js";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function subscribe(callback: () => void): () => void {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return () => {};
  }
  const mql = window.matchMedia(DARK_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot(): ResolvedOsdkTheme {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return "light";
  }
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

function getServerSnapshot(): ResolvedOsdkTheme {
  return "light";
}

/**
 * Subscribes to the OS-level `prefers-color-scheme` media query and returns
 * the current resolved value. Re-renders the consumer when the OS preference
 * changes. SSR-safe: returns `"light"` on the server.
 */
export function useSystemTheme(): ResolvedOsdkTheme {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
