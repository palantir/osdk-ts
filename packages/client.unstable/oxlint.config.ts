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

// Nested oxlint config for @osdk/client.unstable (the repo's largest package,
// ~943 files, almost entirely conjure-generated code under src/generated). This
// repo treats src/generated/ as first-class checked-in source (only
// src/generatedNoCheck{,2}/ are excluded, and ESLint linted src/generated before
// the oxc migration), so this config re-includes it: the inherited Ultracite
// preset ignores `**/generated`, which is removed from `ignorePatterns` below so
// the generated tree is linted (and oxfmt-formatted; see the root oxfmt.config.ts)
// just as ESLint + dprint did before.
//
// Linting the generated tree surfaces a couple of error-level rules that the
// prior ESLint config did not enforce; they are turned off here to keep the
// migration behavior-preserving (the package is migrated, not rewritten), so
// `oxlint --fix` makes no source rewrites. (cf. the nested-config pattern in
// packages/react-components/oxlint.config.ts.)
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (minus `**/generated`).
export default defineConfig({
  extends: [root],
  ignorePatterns: (root.ignorePatterns ?? []).filter(
    (p) => p !== "**/generated"
  ),

  rules: {
    // The generated barrels (`export * from ...` in the per-service index.ts
    // files) re-export the whole tree; barrels are intrinsic to the generated
    // layout. Not enforced by prior ESLint.
    "oxc/no-barrel-file": "off",
    // oxfmt owns import spacing in this migration; the generated files do not
    // carry a blank line after their import block. Not enforced by prior ESLint.
    "import/newline-after-import": "off",
    // The conjure generator emits every service method as `async`, and many have
    // no `await` (they just build and return a request). This is generated code
    // (regenerated on codegen, not hand-editable), and the `async` is load-bearing
    // for the methods' `Promise`-returning signatures, so require-await is disabled
    // here rather than rewriting the generated tree. Not enforced by prior ESLint.
    "require-await": "off",
    "typescript/require-await": "off",
  },
});
