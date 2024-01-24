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

import type { FoundryApiError } from "./errors/index.js";

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
  return result.type === "ok";
}

export function isErr<V, E>(result: Result<V, E>): result is Err<E> {
  return result.type === "error";
}

export type ErrorVisitor<E extends FoundryApiError, R> = {
  [K in E["errorName"] | "default"]?: (
    error: Extract<E, K extends "default" ? E : { errorName: K }>,
  ) => R;
};

export function visitError<
  E extends FoundryApiError,
  R,
>(
  error: E,
  visitor: ErrorVisitor<E, R>,
): R {
  const handler = (visitor as any)[error.name] || visitor.default;
  return handler(error);
}

export type ExtractKeysWithType<T, K extends keyof T> = T extends {
  [P in K]: infer U;
} ? U extends keyof any ? U : never
  : never;
