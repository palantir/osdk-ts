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

import type { FoundryApiError, PalantirApiError } from "../../errors/index.js";
import { isPalantirApiError } from "../../errors/index.js";
import type { Result } from "../../Result.js";
import { createErrorResponse, createOkResponse } from "./ResponseCreators.js";

export async function wrapResult<T, E extends FoundryApiError>(
  apiCall: () => Promise<T>,
  errorHandler: (palantirApiError: PalantirApiError) => E,
): Promise<Result<T, E>> {
  try {
    const result = await apiCall();
    return createOkResponse(result);
  } catch (e) {
    if (isPalantirApiError(e)) {
      return createErrorResponse(errorHandler(e));
    } else {
      // TODO this unknown used to be an UnknownError but it had casting problems
      return createErrorResponse(e as unknown as E);
    }
  }
}
