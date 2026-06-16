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

import type { PageResult } from "@osdk/api";

export interface FetchPageStubBuilder<T> {
  thenReturnObjects(objects: T[]): void;
}

export interface FetchOneStubBuilder<T> {
  thenReturnObject(object: T): void;
}

export interface AggregateStubBuilder<T> {
  thenReturnAggregation(result: T): void;
}

export interface QueryStubBuilder<T> {
  thenReturn(result: T): void;
  thenThrow(error: Error): void;
}

type IsOsdkObject<T> = T extends { $apiName: string } ? true : false;

export type StubBuilderFor<T> = T extends Promise<infer R> ? StubBuilderFor<R>
  : T extends AsyncIterableIterator<infer U> ? FetchPageStubBuilder<U>
  : T extends PageResult<infer U> ? FetchPageStubBuilder<U>
  : T extends { value: PageResult<infer U>; error?: never }
    ? FetchPageStubBuilder<U>
  : T extends { value: infer U; error?: never }
    ? (IsOsdkObject<U> extends true ? FetchOneStubBuilder<U>
      : AggregateStubBuilder<U>)
  : T extends { error: Error; value?: never } ? never
  : IsOsdkObject<T> extends true ? FetchOneStubBuilder<T>
  : AggregateStubBuilder<T>;
