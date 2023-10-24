/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { FoundryApiError } from "./Errors";
export interface Ok<V> {
  type: "ok";
  value: V;
}
export interface Err<E> {
  type: "error";
  error: E;
}
export type Result<V, E = FoundryApiError> = Ok<V> | Err<E>;
export function isOk<V, E>(result: Result<V, E>): result is Ok<V> {
  throw new Error("not implemented");
}

export function isErr<V, E>(result: Result<V, E>): result is Err<E> {
  throw new Error("not implemented");
}

export type ErrorVisitor<E extends FoundryApiError, R> =
  & {
    [K in ExtractKeysWithType<E, "errorName">]?: (
      error: Extract<E, {
        errorName: K;
      }>,
    ) => R;
  }
  & {
    default: (error: E) => R;
  };

export function visitError<E extends FoundryApiError, R>(
  error: E,
  visitor: ErrorVisitor<E, R>,
): R {
  throw new Error("not implemented");
}

export type ExtractKeysWithType<T, K extends keyof T> = T extends {
  [P in K]: infer U;
} ? U extends keyof any ? U : never
  : never;
