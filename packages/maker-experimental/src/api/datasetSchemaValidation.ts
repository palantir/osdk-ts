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

import invariant from "tiny-invariant";

const INVALID_COLUMN_NAME_CHARACTERS = /[ ,;{}()\n\t=]/u;
const MAX_DECIMAL_PRECISION = 38;

export function isRecord(value: unknown): value is Record<string, unknown> {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype == null;
}

export function validateDatasetFieldNames(
  names: readonly unknown[],
  path: string,
): void {
  const namesByLowerCase = new Map<string, string>();
  for (const name of names) {
    invariant(
      typeof name === "string" && name.trim().length > 0,
      `${path} column names must be non-empty strings`,
    );
    invariant(
      !INVALID_COLUMN_NAME_CHARACTERS.test(name),
      `${path} has invalid column name ${JSON.stringify(name)}`,
    );
    const normalizedName = name.toLocaleLowerCase("en-US");
    const previousName = namesByLowerCase.get(normalizedName);
    invariant(
      previousName === undefined,
      `${path} column names "${previousName}" and "${name}" must be unique ignoring case`,
    );
    namesByLowerCase.set(normalizedName, name);
  }
}

export function getDatasetDecimalParameters(
  precision: unknown,
  scale: unknown,
  path: string,
): { precision: number; scale: number } {
  const resolvedPrecision =
    precision === undefined ? MAX_DECIMAL_PRECISION : precision;
  const resolvedScale = scale === undefined ? 0 : scale;
  invariant(
    typeof resolvedPrecision === "number" &&
      Number.isInteger(resolvedPrecision) &&
      resolvedPrecision >= 1 &&
      resolvedPrecision <= MAX_DECIMAL_PRECISION,
    `${path}.precision must be an integer between 1 and ${MAX_DECIMAL_PRECISION}`,
  );
  invariant(
    typeof resolvedScale === "number" &&
      Number.isInteger(resolvedScale) &&
      resolvedScale >= 0 &&
      resolvedScale <= resolvedPrecision,
    `${path}.scale must be an integer between 0 and precision (${resolvedPrecision})`,
  );
  return { precision: resolvedPrecision, scale: resolvedScale };
}
