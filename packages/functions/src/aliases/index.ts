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

// Compatibility boundary: the alias runtime lives in @osdk/aliases so consumers
// that are not Functions can read aliases without depending on this package.
//
// A local module with explicit named re-exports, because API Extractor cannot
// process `export * as ns` from an external package ("fetchAstModuleExportInfo()
// is not supported for external modules") and rejects a namespace whose target
// uses `export *` ("The Aliases namespace import includes a star export").

export { custom } from "@osdk/aliases/node";
export type { Custom } from "@osdk/aliases/node";
export { dataset } from "@osdk/aliases/node";
export type { Dataset } from "@osdk/aliases/node";
export { mediaset } from "@osdk/aliases/node";
export type { Mediaset } from "@osdk/aliases/node";
export { model } from "@osdk/aliases/node";
export type { Model } from "@osdk/aliases/node";
export { source } from "@osdk/aliases/node";
export type { Source } from "@osdk/aliases/node";
export { stream } from "@osdk/aliases/node";
export type { Stream } from "@osdk/aliases/node";
