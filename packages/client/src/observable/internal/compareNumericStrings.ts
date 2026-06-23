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

import Big from "big.js";

/**
 * Compares two numeric strings (the wire encoding for `decimal` and `long`) by
 * value, ascending.
 *
 * Uses big.js for exact arbitrary-precision comparison, covering longs beyond
 * Number.MAX_SAFE_INTEGER, decimals with high fractional precision, and exotic
 * forms like scientific notation.
 *
 * Empty/whitespace values represent "no value" and sort as the smallest value:
 * first when ascending, last when descending, matching Workshop's blank-cell
 * ordering. (Note Number("") === 0, so they must NOT be compared as zero.)
 *
 * Any other non-numeric input (malformed data on a numeric column) sorts last
 * and is never reported equal to a finite value, so the comparator stays a
 * TOTAL order -- it's used as an Array.sort comparator, and a non-transitive
 * malformed-vs-finite pair would corrupt the sort.
 */
export function compareNumericStrings(a: string, b: string): number {
  // Empty/whitespace ("no value") is the smallest value; two such are equal.
  const aEmpty = a.trim() === "";
  const bEmpty = b.trim() === "";
  if (aEmpty || bEmpty) {
    return aEmpty && bEmpty ? 0 : aEmpty ? -1 : 1;
  }

  const aBig = tryParseBig(a);
  const bBig = tryParseBig(b);

  if (aBig == null || bBig == null) {
    // Malformed values sort last; two malformed are equal.
    return aBig == null && bBig == null ? 0 : aBig == null ? 1 : -1;
  }

  return aBig.cmp(bBig);
}

function tryParseBig(s: string): Big | undefined {
  try {
    return new Big(s);
  } catch {
    return undefined;
  }
}
