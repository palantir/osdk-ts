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

export interface AsyncNotStartedLoadingValue {
  type: "not-started";
}

export interface AsyncLoadingValue {
  type: "loading";
}

export interface AsyncLoadedValue<V> {
  type: "loaded";
  value: V | undefined;
}

export interface AsyncReloadingValue<V> {
  type: "reloading";
  value: V | undefined;
}

export interface AsyncFailedValue<V, E = Error> {
  type: "failed";
  error: E;
  value: V | undefined;
}

/**
 * Represents a value that is loaded asynchronously.
 * This allows for type safe checking of what the value's loading state is.
 * The expected lifecycle is:
 *    not-started -> loading -> loaded or failed -> reloading -> ....
 */
export type AsyncValue<V, E = Error> =
  | AsyncNotStartedLoadingValue
  | AsyncLoadingValue
  | AsyncLoadedValue<V>
  | AsyncReloadingValue<V>
  | AsyncFailedValue<V, E>;

/**
 * Convenience type guard to determine whether the async value has a loaded value
 */
export function hasValue<V, E = Error>(
  asyncValue: AsyncValue<V, E>,
): asyncValue is
  | AsyncLoadedValue<V>
  | AsyncReloadingValue<V>
  | AsyncFailedValue<V, E>
{
  return asyncValue.type === "loaded" || asyncValue.type === "reloading"
    || asyncValue.type === "failed";
}
