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

import { PalantirApiError } from "../../errors";
import type { FoundryApiError } from "../../errors";
import type { Result } from "../../Result";
import { createErrorResponse, createOkResponse } from "./ResponseCreators";

export async function* wrapIterator<T, E extends FoundryApiError>(
  lambda: () => AsyncGenerator<T, any, unknown>,
  errorHandler: (palantirApiError: PalantirApiError) => E,
): AsyncGenerator<Result<T, E>> {
  try {
    for await (const element of lambda()) {
      yield createOkResponse(element);
    }
  } catch (e) {
    if (e instanceof PalantirApiError) {
      yield createErrorResponse(errorHandler(e));
    } else {
      // TODO this unknown used to be an UnknownError but it had casting problems
      yield createErrorResponse(e as unknown as E);
    }
  }
}
