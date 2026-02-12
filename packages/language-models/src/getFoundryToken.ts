/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { assertPreview } from "./assertPreview.js";
import type { PreviewOptions } from "./PreviewOptions.js";

const FOUNDRY_TOKEN_ENV_VAR = "FOUNDRY_TOKEN" as const;

/**
 * Retrieves the Foundry authentication token from the environment.
 *
 * Reads the `FOUNDRY_TOKEN` environment variable.
 *
 * @param options - Must include `{ preview: true }` to acknowledge use of a beta API.
 * @returns The Foundry authentication token.
 * @throws Error if the `FOUNDRY_TOKEN` environment variable is not set.
 *
 * @example
 * ```typescript
 * const token = getFoundryToken({ preview: true });
 * ```
 */
export function getFoundryToken(options: PreviewOptions): string {
  assertPreview(options);

  const token = process.env[FOUNDRY_TOKEN_ENV_VAR];

  if (!token) {
    throw new Error(
      `${FOUNDRY_TOKEN_ENV_VAR} environment variable is not set`,
    );
  }

  return token;
}
