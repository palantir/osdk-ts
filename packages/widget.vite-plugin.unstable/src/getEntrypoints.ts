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

import type { ResolvedConfig } from "vite";

/**
 * Extract a standardized list of entrypoint paths from the possible Vite config formats.
 */
export function getEntrypointPaths(config: ResolvedConfig): string[] {
  if (typeof config.build.lib === "string") {
    return [config.build.lib];
  }
  if (Array.isArray(config.build.lib)) {
    return config.build.lib;
  }
  if (config.build.lib && typeof config.build.lib === "object") {
    // In this case we don't ca
    return Object.values(config.build.lib.entry);
  }

  throw new Error(
    "Widget entrypoints were not found in the expected Vite config format",
  );
}
