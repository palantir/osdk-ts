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

import type { IsLink } from "./IsLink.js";

export declare type OmitMetadataProperties<T> = {
  [K in keyof Omit<T, "__apiName" | "__rid" | "__primaryKey">]: T[K];
};

export declare type OmitLinksProperties<T> = {
  [
    K in Extract<keyof T, string> as IsLink<T[K]> extends true ? never : K
  ]: T[K];
};

export declare type SelectableProperties<T> = OmitLinksProperties<
  OmitMetadataProperties<T>
>;
