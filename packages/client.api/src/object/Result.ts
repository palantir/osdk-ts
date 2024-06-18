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

export type ErrorResult = { error: Error; value?: never };
export type OkResult<V> = { value: V; error?: never };
export type Result<V> = OkResult<V> | ErrorResult;

export function isOk<X>(a: Result<X>): a is OkResult<X> {
  return ("value" in a);
}

export function isError<X>(a: Result<X>): a is ErrorResult {
  return ("error" in a);
}
