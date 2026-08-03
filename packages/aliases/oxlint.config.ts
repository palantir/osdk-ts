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

import { defineConfig } from "oxlint";

import root from "../../oxlint.config.ts";

// Nested oxlint config for @osdk/aliases. The package is new and written against the
// repo's oxc ruleset, so it adds no carve-outs; the file exists because the
// "oxc migrated libraries with check-api" archetype points `lint`/`fix-lint` at
// ./oxlint.config.ts.
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's `ignorePatterns`
// are re-applied explicitly.
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,
});
