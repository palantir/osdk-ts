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

/**
 * Check if a result was successfully received
 * @param a - result wrapped value
 * @returns whether a result has a value in it
 */
export function isOk(a) {
  return "value" in a;
}

/**
 * Check if a result contains an error value
 * @param a Result wrapped value
 * @returns whether a result has an error in it
 */
export function isError(a) {
  return "error" in a;
}
//# sourceMappingURL=Result.js.map