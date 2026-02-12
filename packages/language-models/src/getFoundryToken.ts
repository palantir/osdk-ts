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

import { getNamespace } from "cls-hooked";
import { assertPreview } from "./assertPreview.js";
import type { PreviewOptions } from "./PreviewOptions.js";

const FUNCTIONS_NAMESPACE = "functions-typescript-runtime" as const;
const FOUNDRY_TOKEN_KEY = "FOUNDRY_TOKEN" as const;

/**
 * Retrieves the Foundry token from the Function's runtime environment.
 *
 * This function is intended to be used only from within a function. Usage of this utility elsewhere may result
 * in errors since the runtime environment may not be properly configured.
 *
 * @param options - Must include `{ preview: true }` to acknowledge use of a beta API.
 * @returns The Foundry token.
 * @throws Error if the token has not been properly configured in the function's runtime environment.
 *
 * @example
 * ```typescript
 * const token = getFoundryToken({ preview: true });
 * ```
 */
export function getFoundryToken(options: PreviewOptions): string {
  assertPreview(options);

  const namespace = getNamespace(FUNCTIONS_NAMESPACE);

  if (!namespace) {
    throw new Error(
      `Function runtime namespace "${FUNCTIONS_NAMESPACE}" is not available. `
        + `This utility can only be used from within a Foundry function.`,
    );
  }

  const token = namespace.get(FOUNDRY_TOKEN_KEY);

  if (!token || typeof token !== "string") {
    throw new Error(
      `${FOUNDRY_TOKEN_KEY} is not available in the function runtime namespace. `
        + `Ensure the function is running in a properly configured environment.`,
    );
  }

  return token;
}
