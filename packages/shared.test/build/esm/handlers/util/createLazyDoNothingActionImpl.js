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

import stableStringify from "json-stable-stringify";
import invariant from "tiny-invariant";
import { ApplyActionFailedError } from "../../errors.js";
import { OpenApiCallError } from "./handleOpenApiCall.js";

/**
 * I don't think this should be used long term, but it provides a stop gap for
 * migrating the existing actions to the new API.
 */
export function createLazyDoNothingActionImpl(reqRespPairs) {
  const stableToRet = new Map(reqRespPairs.map(pair => [stableStringify(pair[0]), pair[1]]));
  return (batch, payload) => {
    const key = stableStringify(payload);
    // in some cases we intentionally put undefined in so this lets us error
    // differently if its an unregistered req/resp pair
    !stableToRet.has(key) ? process.env.NODE_ENV !== "production" ? invariant(false, "No response registered for req payload: " + key) : invariant(false) : void 0;
    const resp = stableToRet.get(key);
    if (resp === undefined) {
      // this is the "normal" (or at least previously normal) error when the result
      // was undefined.
      throw new OpenApiCallError(400, ApplyActionFailedError);
    }
    return resp;
  };
}
//# sourceMappingURL=createLazyDoNothingActionImpl.js.map