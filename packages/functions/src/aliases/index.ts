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

// API Extractor cannot represent a namespace that re-exports `export *` from
// another package, so each export is listed explicitly.

export { custom } from "@osdk/aliases/internal";
export type { Custom } from "@osdk/aliases/internal";
export { dataset } from "@osdk/aliases/internal";
export type { Dataset } from "@osdk/aliases/internal";
export { mediaset } from "@osdk/aliases/internal";
export type { Mediaset } from "@osdk/aliases/internal";
export { model } from "@osdk/aliases/internal";
export type { Model } from "@osdk/aliases/internal";
export { source } from "@osdk/aliases/internal";
export type { Source } from "@osdk/aliases/internal";
export { stream } from "@osdk/aliases/internal";
export type { Stream } from "@osdk/aliases/internal";
