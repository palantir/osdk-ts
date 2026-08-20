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
// such as Developer Console apps.
//
//   import { Aliases } from "@osdk/aliases/experimental";
//   await Aliases.initAliases();
//   const apiBaseUrl = Aliases.custom("apiBaseUrl");
//
// Behind the "experimental" subpath deliberately: both custom aliases and the
// shape of this API are provisional, so the import path says so at every call
// site. Expect it to move to the package root once the design settles, with this
// subpath deprecated rather than removed.
//
// Code running in Node with a filesystem (Functions) wants "@osdk/aliases/node".

import {
  custom,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  initAliases,
} from "../browser.js";

// Assembled member by member rather than with `export * as Aliases` so that
// resetAliasesCache stays out of the supported surface. It exists for tests,
// which import ../browser.js directly; exporting it would make cache
// invalidation public and would race with an in-flight initAliases().
// Explicitly typed: `--isolatedDeclarations` cannot infer a declaration for an
// object literal built from shorthand properties (TS9016).
export const Aliases: {
  readonly custom: typeof custom;
  readonly initAliases: typeof initAliases;
  readonly DEFAULT_DECLARATIONS_PATH: typeof DEFAULT_DECLARATIONS_PATH;
  readonly DEFAULT_DEPLOYMENT_CONFIG_PATH: typeof DEFAULT_DEPLOYMENT_CONFIG_PATH;
} = {
  custom,
  initAliases,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
};

export {
  custom,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  initAliases,
};
export type { Custom, InitAliasesOptions } from "../browser.js";
