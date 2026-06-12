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
 * Produces a stable, order-independent JSON-like string for a value.
 *
 * Object keys are emitted in sorted order so two values with identical content
 * but different key insertion order stringify equally. Arrays keep their order
 * (array order is significant). Function-valued fields and `undefined` are
 * dropped so transient closures attached during construction do not affect the
 * output.
 *
 * Used for structural hashing/cache-keying of descriptors and shape inputs.
 */
export function stableStringify(value: unknown): string {
  if (value == null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return `[${value.map((entry) => stableStringify(entry)).join(",")}]`;
  }
  if (typeof value === "object") {
    const record: Record<string, unknown> = value as Record<string, unknown>;
    const parts: Array<string> = [];
    for (const key of Object.keys(record).sort()) {
      const entry = record[key];
      if (typeof entry === "function" || entry === undefined) {
        continue;
      }
      parts.push(`${JSON.stringify(key)}:${stableStringify(entry)}`);
    }
    return `{${parts.join(",")}}`;
  }
  if (typeof value === "function") {
    return "null";
  }
  return JSON.stringify(value);
}
