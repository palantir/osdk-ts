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

import type { StrictRequest } from "msw";
import { InvalidRequest } from "../../errors.js";
import { OpenApiCallError } from "./handleOpenApiCall.js";

export function requireSearchParams<T extends string>(
  names: T[],
  req: StrictRequest<any>,
): Record<T, string> {
  const url = new URL(req.url);
  return Object.fromEntries(names.map(name => {
    const value = url.searchParams.get(name);
    if (value == null) {
      throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
    }
    return [name, value];
  })) as Record<T, string>;
}
