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
 * Ensures that a value is an Error instance.
 * If already an Error, returns it as-is.
 * If not, converts it to an Error with a string representation.
 *
 * @param err - The value to ensure is an Error
 * @returns An Error instance
 *
 * @example
 * ```typescript
 * try {
 *   // ... some operation
 * } catch (err) {
 *   const error = ensureError(err);
 *   console.error(error.message);
 * }
 * ```
 */
export function ensureError(err: unknown): Error {
  if (err instanceof Error) {
    return err;
  }
  return new Error(String(err));
}
