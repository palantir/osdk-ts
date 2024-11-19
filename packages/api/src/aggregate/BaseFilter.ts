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

import type { Just } from "./Just.js";

export type BaseFilterOptions<T> = {
  "$eq": T;
  "$ne": T;
  "$isNull": boolean;
  "$in": ReadonlyArray<T>;
};

export namespace BaseFilter {
  export interface $eq<T> extends Just<"$eq", BaseFilterOptions<T>> {}
  export interface $ne<T> extends Just<"$ne", BaseFilterOptions<T>> {}
  export interface $in<T> extends Just<"$in", BaseFilterOptions<T>> {}
  export interface $isNull<T> extends Just<"$isNull", BaseFilterOptions<T>> {}
}

export type BaseFilter<T> =
  | BaseFilter.$eq<T>
  | BaseFilter.$ne<T>
  | BaseFilter.$in<T>
  | BaseFilter.$isNull<T>;

/** @internal */
export type CatchThemAll<T> = CatchThemAllInternal<T, keyof T>;

// extends for union distribution
/** @internal */
type CatchThemAllInternal<T, K extends keyof T> = K extends keyof T
  ? { [k in K]: T[k] }
  : never;
