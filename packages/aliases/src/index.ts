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

// Default entry point: the browser-safe alias runtime, for applications served
// to a browser such as Developer Console apps. It is free of `fs` and `process`
// so it can be bundled.
//
//   import { Aliases } from "@osdk/aliases";
//   await Aliases.initAliases();
//   const apiBaseUrl = Aliases.custom("apiBaseUrl");
//
// The `Aliases` namespace is the preferred form, because it matches the
// namespace @osdk/functions already exposes for the filesystem runtime, and
// because a bare `custom("apiBaseUrl")` does not say what it reads. The same
// members are also exported individually for callers who prefer named imports.
//
// Code running in Node with a filesystem (Functions) should import the
// "@osdk/aliases/node" subpath instead, which reads aliases from disk.

export * as Aliases from "./browser.js";

export {
  custom,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  initAliases,
  resetAliasesCache,
} from "./browser.js";
export type { Custom, InitAliasesOptions } from "./browser.js";
