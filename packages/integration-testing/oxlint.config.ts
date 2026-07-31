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

// Nested oxlint config for @osdk/integration-testing. It inherits the whole
// repo ruleset by `extends`-ing the root config. The hand-written source is new
// code authored against the oxc toolchain and needs no carve-outs, but the
// package also carries a conjure-generated tree under src/generated/cli (the
// com.palantir.foundry-cli `cli-api` service, emitted by
// `pnpm run generateConjure`). This repo treats src/generated/ as first-class
// checked-in source (only src/generatedNoCheck{,2}/ are excluded), so this
// config re-includes it the way @osdk/client.unstable and
// @osdk/client.unstable.tpsa do: the inherited Ultracite preset ignores
// `**/generated`, which is removed from `ignorePatterns` below so the generated
// tree is linted (and oxfmt-formatted; see the root oxfmt.config.ts).
//
// Linting the generated tree surfaces a few error-level rules; they are turned
// off below so `oxlint --fix` makes no rewrites to code that is regenerated
// rather than hand-edited. (cf. packages/client.unstable/oxlint.config.ts.)
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (minus `**/generated`).
export default defineConfig({
  extends: [root],
  ignorePatterns: (root.ignorePatterns ?? []).filter(
    (p) => p !== "**/generated",
  ),
  rules: {
    // The generated barrels (`export * as ...` in index.ts and the per-service
    // index.ts files) re-export the whole tree; barrels are intrinsic to the
    // generated layout.
    "oxc/no-barrel-file": "off",
    // oxfmt owns import spacing; the generated files do not carry a blank line
    // after their import block.
    "import/newline-after-import": "off",
    // The conjure generator emits every service method as `async` even when it
    // has no `await` (it just builds and returns a request). The `async` is
    // load-bearing for the methods' `Promise`-returning signatures, so
    // require-await is disabled here rather than rewriting the generated tree.
    "require-await": "off",
    "typescript/require-await": "off",
  },
});
