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

import { CONFIG_FILE_SUFFIX } from "./constants.js";

/**
 * Users may import `.js` files in their code, where the source file is actually a `.ts`, `.tsx`, or
 * `.jsx` file on disk. This standardizes these file extension to `.js` so that we can match imports
 * to source files. Additionally, extension-less imports may be used depending on the module
 * resolution setting so we append `.js` to config file imports to standardize those as well.
 *
 * Additionally, replaces Windows-style backslashes with forward slashes for path consistency.
 */
export function standardizePathAndFileExtension(file: string): string {
  const normalizedPath = file.replace(/\\/g, "/");
  if (normalizedPath.endsWith(CONFIG_FILE_SUFFIX)) {
    return normalizedPath + ".js";
  }
  return normalizedPath.replace(/\.[jt]sx?$/, ".js");
}
