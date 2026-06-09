/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { SerializedError } from "./errorSerializer.js";

/**
 * A JSON-serializable value. Log context is constrained to this shape so that
 * every entry survives transport without custom serialization.
 */
export type AttributeValue =
  | string
  | number
  | boolean
  | null
  | AttributeValue[]
  | { [key: string]: AttributeValue };

/**
 * Structured fields attached to a log entry.
 */
export type LogContext = Record<string, AttributeValue>;

export type LogSeverity = "DEBUG" | "INFO" | "WARN" | "ERROR";

/**
 * A single buffered log entry. Mirrors the `LogEntry` shape in the upstream
 * `Log.write` contract (plan §4.4).
 */
export interface LogEntry {
  timestamp: string;
  severity: LogSeverity;
  message: string;
  context?: LogContext;
  error?: SerializedError;
  /**
   * W3C trace id of the call active when the entry was created, when available.
   * Lets a log be correlated with the outbound request that carried the same
   * trace id in its `traceparent` header.
   */
  // cspell:ignore traceparent
  traceId?: string;
}

/**
 * Coerce arbitrary context into the JSON-serializable {@link LogContext} shape.
 * Values that cannot be represented are dropped rather than throwing, so a bad
 * context never breaks a log call.
 */
export function normalizeContext(
  context: LogContext | undefined,
): LogContext | undefined {
  if (context == null) {
    return undefined;
  }
  const seen = new WeakSet<object>();
  seen.add(context);
  const result: LogContext = {};
  for (const [key, value] of Object.entries(context)) {
    const normalized = normalizeValue(value, seen);
    if (normalized !== undefined) {
      result[key] = normalized;
    }
  }
  return result;
}

function normalizeValue(
  value: unknown,
  seen: WeakSet<object>,
): AttributeValue | undefined {
  if (value == null) {
    return null;
  }
  if (typeof value === "string" || typeof value === "boolean") {
    return value;
  }
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }
  if (Array.isArray(value)) {
    if (seen.has(value)) {
      return null;
    }
    seen.add(value);
    const result = value.map((item) => {
      const normalized = normalizeValue(item, seen);
      return normalized === undefined ? null : normalized;
    });
    seen.delete(value);
    return result;
  }
  if (typeof value === "object") {
    if (seen.has(value)) {
      return null;
    }
    seen.add(value);
    const result: { [key: string]: AttributeValue } = {};
    for (const [key, item] of Object.entries(value)) {
      const normalized = normalizeValue(item, seen);
      if (normalized !== undefined) {
        result[key] = normalized;
      }
    }
    seen.delete(value);
    return result;
  }
  return undefined;
}
