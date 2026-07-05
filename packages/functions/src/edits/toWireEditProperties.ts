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

import type { CipherText } from "@osdk/client";

interface CipherTextInternal extends CipherText {
  getValue(): string;
}

function isCipherTextSource(value: unknown): value is CipherTextInternal {
  if (value == null || typeof value !== "object") {
    return false;
  }
  const candidate = value as Partial<CipherTextInternal>;
  return (
    typeof candidate.getValue === "function" &&
    typeof candidate.decrypt === "function"
  );
}

/**
 * Normalizes a single edit property value to its backend wire shape. A reused
 * {@link CipherText} is reduced to its encrypted value (`{ ciphertext }`);
 * every other value is returned unchanged.
 */
export function normalizeCipherTextEditValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalizeCipherTextEditValue);
  }
  if (isCipherTextSource(value)) {
    return { ciphertext: value.getValue() };
  }
  return value;
}

/**
 * Applies transformations to every property in an edit's property map,
 * producing the backend wire shape.
 */
export function toWireEditProperties(
  properties: object
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(properties)) {
    result[key] = normalizeCipherTextEditValue(value);
  }
  return result;
}
