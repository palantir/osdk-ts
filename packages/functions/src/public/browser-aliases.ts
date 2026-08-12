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

// Public entry point for reading aliases from a browser (Dev Console apps).
// This subpath is intentionally free of `fs`/`process` so it can be bundled
// into a browser application. Usage:
//
//   import { initAliases, custom } from "@osdk/functions/browser-aliases";
//   await initAliases();
//   const apiBaseUrl = custom("apiBaseUrl");

export {
  custom,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  initAliases,
  resetAliasesCache,
} from "../aliases/browser.js";
export type { Custom, InitAliasesOptions } from "../aliases/browser.js";
