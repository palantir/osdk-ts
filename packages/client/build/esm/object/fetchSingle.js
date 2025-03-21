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

import { PalantirApiError } from "@osdk/shared.net.errors";
import { fetchPage } from "./fetchPage.js";

/** @internal */
export async function fetchSingle(client, objectType, args, objectSet) {
  const result = await fetchPage(client, objectType, {
    ...args,
    $pageSize: 1
  }, objectSet);
  if (result.data.length !== 1 || result.nextPageToken != null) {
    throw new PalantirApiError(`Expected a single result but got ${result.data.length} instead${result.nextPageToken != null ? " with nextPageToken set" : ""}`);
  }
  return result.data[0];
}

/** @internal */
export async function fetchSingleWithErrors(client, objectType, args, objectSet) {
  try {
    const result = await fetchSingle(client, objectType, args, objectSet);
    return {
      value: result
    };
  } catch (e) {
    if (e instanceof Error) {
      return {
        error: e
      };
    }
    return {
      error: e
    };
  }
}
//# sourceMappingURL=fetchSingle.js.map