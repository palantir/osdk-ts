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

import { loadResolvedAliases } from "./loaders.js";
import type { Mediaset } from "./types.js";

export type { Mediaset } from "./types.js";

export function mediaset(alias: string): Mediaset {
  const resolvedAliases = loadResolvedAliases();

  if (!(alias in resolvedAliases.mediasets)) {
    const available = Object.keys(resolvedAliases.mediasets);
    throw new Error(
      `Mediaset alias '${alias}' not found. Available aliases: [${available.join(
        ", ",
      )}]`,
    );
  }

  return resolvedAliases.mediasets[alias];
}
