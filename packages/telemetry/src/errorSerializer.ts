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

/**
 * A flattened, JSON-serializable representation of an {@link Error}. Mirrors the
 * `SerializedError` shape in the upstream `Log.write` contract (plan §4.4).
 */
export interface SerializedError {
  name: string;
  message: string;
  stack?: string;
  cause?: SerializedError;
}

const MAX_CAUSE_DEPTH = 8;

/**
 * Convert a thrown value into a {@link SerializedError}. Recurses through the
 * `cause` chain up to a fixed depth so a self-referential cause cannot loop.
 * Non-Error values are coerced into a best-effort shape so `logger.error` never
 * throws on an unexpected input.
 */
export function serializeError(error: unknown): SerializedError {
  return serializeAtDepth(error, 0);
}

function serializeAtDepth(error: unknown, depth: number): SerializedError {
  if (error instanceof Error) {
    const serialized: SerializedError = {
      name: error.name,
      message: error.message,
    };
    if (error.stack != null) {
      serialized.stack = error.stack;
    }
    if (error.cause != null && depth < MAX_CAUSE_DEPTH) {
      serialized.cause = serializeAtDepth(error.cause, depth + 1);
    }
    return serialized;
  }

  if (typeof error === "string") {
    return { name: "Error", message: error };
  }

  return { name: "Error", message: safeStringify(error) };
}

/**
 * The source location of a serialized error: the top frame of its stack, where
 * the error was constructed. Returns `undefined` when the stack is absent or
 * carries no frames. Mirrors how loggers like log4js derive file/line from a
 * logged Error instead of walking the call stack on every log.
 */
export function extractOriginatingCode(
  error: SerializedError,
): string | undefined {
  if (error.stack == null) {
    return undefined;
  }
  for (const line of error.stack.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("at ")) {
      return trimmed;
    }
  }
  return undefined;
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}
