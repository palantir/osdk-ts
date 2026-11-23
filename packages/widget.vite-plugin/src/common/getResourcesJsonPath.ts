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

import path from "node:path";

import type { ResolvedConfig } from "vite";

const RESOURCES_JSON_FILE_NAME = "resources.json";

/**
 * Resolves the resources.json path the same way as for website aliases: the file lives in Vite's
 * public directory (`public/` by default) so it is copied to the root of the build output.
 * Returns undefined when the public directory is disabled via `publicDir: false`.
 */
export function getResourcesJsonPath(
  config: Pick<ResolvedConfig, "publicDir">,
): string | undefined {
  if (config.publicDir === "") {
    return undefined;
  }
  return path.resolve(config.publicDir, RESOURCES_JSON_FILE_NAME);
}
