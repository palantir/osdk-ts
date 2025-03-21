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

import invariant from "tiny-invariant";
/** @internal */
export function legacyToModernSingleAggregationResult(entry) {
  return entry.metrics.reduce((accumulator, curValue) => {
    const parts = curValue.name.split(".");
    if (parts[0] === "count") {
      return accumulator;
    }
    !(parts.length === 2) ? process.env.NODE_ENV !== "production" ? invariant(false, "assumed we were getting a `${key}.${type}`") : invariant(false) : void 0;
    const property = parts[0];
    const metricType = parts[1];
    if (!(property in accumulator)) {
      accumulator[property] = {}; // fixme?
    }
    accumulator[property][metricType] = curValue.value; // fixme?

    return accumulator;
  }, {});
}
//# sourceMappingURL=legacyToModernSingleAggregationResult.js.map