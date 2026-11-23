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

/** The outcome of an operation that either produces a value or fails. */
export type Result<T, E> = { type: "ok"; value: T } | { type: "err"; error: E };

export const Result: {
  ok: <T>(value: T) => Result<T, never>;
  err: <E>(error: E) => Result<never, E>;
} = {
  ok: (value) => ({ type: "ok", value }),
  err: (error) => ({ type: "err", error }),
};
