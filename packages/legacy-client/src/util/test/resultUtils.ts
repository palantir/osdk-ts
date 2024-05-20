/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { FoundryApiError } from "../../client/errors/index.js";
import type { Result } from "../../client/Result.js";

export function unwrapResultOrThrow<Response, Error extends FoundryApiError>(
  result: Result<Response, Error>,
): Response {
  if (result.type === "ok") {
    return result.value;
  } else {
    throw new Error(
      `Unexpected error: ${JSON.stringify(result.error)}, Stack: ${result.error
        .stack as string}`,
    );
  }
}

export function unwrapErrorOrThrow<Response, Error extends FoundryApiError>(
  result: Result<Response, Error>,
): Error {
  if (result.type === "error") {
    return result.error;
  } else {
    throw new Error("Expected error but got ok");
  }
}
