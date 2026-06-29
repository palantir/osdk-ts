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

import { defineConfig } from "oxlint";

import root from "../../oxlint.config.ts";

// Nested oxlint config for @osdk/client.unstable.tpsa. Like @osdk/client.unstable
// it is almost entirely conjure-generated code under src/generated (which the
// shared Ultracite preset ignores via `**/generated`), but its hand-written
// src/index.ts is a barrel that re-exports the whole generated tree. That barrel
// surfaces a few error-level rules the repo's prior ESLint config did not
// enforce; turning them off keeps the ESLint -> oxlint migration behavior-
// preserving (the package is migrated, not rewritten). cf. the nested-config
// pattern in packages/react-components/oxlint.config.ts.
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated/ignored files
// would start being linted).
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    // src/index.ts intentionally re-exports the generated third-party-application
    // service tree (`export type * from "./generated/.../index.js"`), which the
    // rule counts as a 235-module barrel. The public entry point is a barrel by
    // design; not enforced by prior ESLint. (cf. react-components, which disables
    // the same rule for its published barrel.)
    "oxc/no-barrel-file": "off",
    // The hand-written `export {};` at the end of src/index.ts. Removing it is the
    // autofix, but that is a source rewrite; keep it as authored. Not enforced by
    // prior ESLint.
    "typescript/no-useless-empty-export": "off",
    "unicorn/require-module-specifiers": "off",
  },
});
