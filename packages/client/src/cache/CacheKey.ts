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

import type { Query } from "./Query.js";

export type CacheKey<
  X extends string = string,
  T_StoreValue = unknown,
  T_Query extends Query<any, any, any> = Query<any, any, any>,
  T_KeyFactoryArgs extends any[] = any[],
> = {
  type: X;
  __cacheKey: {
    value: T_StoreValue;
    query: T_Query;
    args: T_KeyFactoryArgs;
  };
};
