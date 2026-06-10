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

/**
 * Matches a plain base-10 number in decimal notation (optionally signed,
 * optional fractional part) -- this covers both `long` (no fraction) and
 * `decimal`. Excludes exotic forms like scientific notation, which fall back
 * to Number().
 */
const NUMERIC_STRING = /^[+-]?\d+(\.\d+)?$/;

/**
 * Compares two numeric strings (the wire encoding for `decimal` and `long`) by
 * value, ascending.
 *
 * Scales both operands to a common number of fractional digits and compares
 * them as BigInt, so the result is exact for arbitrary precision -- including
 * longs beyond Number.MAX_SAFE_INTEGER and decimals whose fractional parts
 * exceed the precision of a double. Exotic forms (e.g. scientific notation)
 * fall back to a best-effort Number() comparison.
 */
export function compareNumericStrings(a: string, b: string): number {
  if (!NUMERIC_STRING.test(a) || !NUMERIC_STRING.test(b)) {
    const aNum = Number(a);
    const bNum = Number(b);
    return aNum < bNum ? -1 : aNum > bNum ? 1 : 0;
  }

  const [aInt, aFrac = ""] = a.split(".");
  const [bInt, bFrac = ""] = b.split(".");
  const fracDigits = Math.max(aFrac.length, bFrac.length);

  // Concatenating the (sign-bearing) integer part with the zero-padded
  // fractional part scales both values by the same power of ten, so the
  // BigInt comparison preserves the original ordering exactly.
  const aScaled = BigInt(aInt + aFrac.padEnd(fracDigits, "0"));
  const bScaled = BigInt(bInt + bFrac.padEnd(fracDigits, "0"));
  return aScaled < bScaled ? -1 : aScaled > bScaled ? 1 : 0;
}
