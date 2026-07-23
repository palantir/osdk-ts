/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { isEqual } from "lodash-es";

import { useInverseGatedValue } from "./useGatedValue.js";

/**
 * Simple wrapper around useInverseGatedValue where lodash's isEqual is the "gatekeeper".
 *
 * While you are passing values that are deep equal to each other, this will
 * return the first value you passed. If you pass a value that isn't deep equal
 * to its predecessor, this will return the new value.
 *
 * It's guaranteed that the return value of `useDeepEqual` will be deep equal
 * to the @param value you passed, though it may have been an argument from an
 * earlier run.
 *
 * @example
 *   A1 and A2 are deep equal.
 *   B1, B2 and B3 are deep equal.
 *   - Call 1: useDeepEqual(A1) -> A1
 *   - Call 2: useDeepEqual(A2) -> A1
 *   - Call 3: useDeepEqual(B1) -> B1
 *   - Call 4: useDeepEqual(B2) -> B1
 *   - Call 5: useDeepEqual(B3) -> B1
 *   - Call 6: useDeepEqual(C1) -> C1
 */
export function useDeepEqual<T>(value: T): T {
  return useInverseGatedValue(value, isEqual);
}
