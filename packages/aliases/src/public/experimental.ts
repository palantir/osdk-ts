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

// EXPERIMENTAL browser-safe alias runtime, for applications served to a browser
// such as Developer Console apps. Free of `fs` and `process` so it can be
// bundled.
//
//   import { Aliases } from "@osdk/aliases/experimental";
//   await Aliases.initAliases();
//   const apiBaseUrl = Aliases.custom("apiBaseUrl");
//
// This lives behind the "experimental" subpath deliberately: both custom aliases
// themselves and the shape of this API are provisional, so the import path says
// so at every call site. Expect it to move to the package root once the design
// settles, at which point this subpath will be deprecated rather than removed
// out from under callers.
//
// Code running in Node with a filesystem (Functions) should import
// "@osdk/aliases/node" instead, which reads aliases from disk and is not
// experimental.

export * as Aliases from "../browser.js";

export {
  custom,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  initAliases,
  resetAliasesCache,
} from "../browser.js";
export type { Custom, InitAliasesOptions } from "../browser.js";
