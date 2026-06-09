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

import type { LogAttributes, LogRecord } from "@opentelemetry/api-logs";
import { SeverityNumber } from "@opentelemetry/api-logs";
import type { SerializedError } from "./errorSerializer.js";
import { LOG_MESSAGE, LOG_TAGS } from "./foundryAttributes.js";

/**
 * A JSON-serializable value. Log context is constrained to this shape so that
 * every field survives transport without custom serialization.
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

/** Maps the public severity strings to OTel {@link SeverityNumber} values. */
const SEVERITY_NUMBERS: Record<LogSeverity, SeverityNumber> = {
  DEBUG: SeverityNumber.DEBUG,
  INFO: SeverityNumber.INFO,
  WARN: SeverityNumber.WARN,
  ERROR: SeverityNumber.ERROR,
};

/**
 * Build the OTel {@link LogRecord} for a single log call. The message goes in
 * the `LOG_MESSAGE` attribute and the structured fields (caller context plus
 * any serialized error) go in the `LOG_TAGS` attribute, which is the layout FTS
 * reads. The message is also mirrored into the standard OTLP `body` for
 * generic OTLP consumers.
 */
export function buildLogRecord(
  severity: LogSeverity,
  message: string,
  context?: LogContext,
  error?: SerializedError,
): LogRecord {
  const attributes: LogAttributes = { [LOG_MESSAGE]: message };
  const tags = buildLogTags(context, error);
  if (tags != null) {
    attributes[LOG_TAGS] = tags;
  }
  return {
    severityNumber: SEVERITY_NUMBERS[severity],
    severityText: severity,
    body: message,
    attributes,
  };
}

function buildLogTags(
  context: LogContext | undefined,
  error: SerializedError | undefined,
): LogContext | undefined {
  const normalized = normalizeContext(context);
  if (normalized == null && error == null) {
    return undefined;
  }
  const tags: LogContext = {};
  if (normalized != null) {
    Object.assign(tags, normalized);
  }
  if (error != null) {
    tags.error = errorToAttributeValue(error);
  }
  return tags;
}

/**
 * Convert a {@link SerializedError} into a plain JSON-serializable value so it
 * can sit inside the `LOG_TAGS` attribute map.
 */
export function errorToAttributeValue(error: SerializedError): AttributeValue {
  const result: { [key: string]: AttributeValue } = {
    name: error.name,
    message: error.message,
  };
  if (error.stack != null) {
    result.stack = error.stack;
  }
  if (error.cause != null) {
    result.cause = errorToAttributeValue(error.cause);
  }
  return result;
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
