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

import { PalantirApiError, UnknownError } from "./apiError";
import { isBaseApiError } from "./baseApiError";
export function createErrorHandlingFetch(
  fetchFunction: typeof globalThis.fetch,
) {
  return async (input: RequestInfo | URL, init?: RequestInit | undefined) => {
    try {
      const response = await fetchFunction(input, init);

      if (!response.ok) {
        throw await convertToPalantirApiError(response);
      }

      return response;
    } catch (error) {
      if (error instanceof PalantirApiError) {
        throw error;
      } else if (error instanceof Error) {
        throw new UnknownError(error.message, error);
      } else {
        throw new UnknownError(`An unknown error occurred`, error);
      }
    }
  };
}

async function convertToPalantirApiError(errorResponse: Response) {
  const parsedError = await errorResponse.json();
  if (!isBaseApiError(parsedError)) {
    throw parsedError;
  }

  return new PalantirApiError(parsedError, errorResponse.status);
}
