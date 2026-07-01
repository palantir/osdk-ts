/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

// Nested oxlint config for @osdk/create-app.template-packager. It inherits the whole repo ruleset by
// `extends`-ing the root config, then turns off the error-level rules this
// package's existing source first surfaces so the ESLint -> oxlint migration is a
// reformat, not a rewrite (`oxlint --fix` applies no source rewrites).
//
// `extends` only carries `rules`/`plugins`/`overrides`, so the root's
// `ignorePatterns` are re-applied explicitly (otherwise generated/ignored files
// would start being linted).
export default defineConfig({
  extends: [root],
  ignorePatterns: root.ignorePatterns,

  rules: {
    "func-names": "off", // Anonymous function expressions; naming them is churn.
    "prefer-template": "off", // String concatenation vs template literals; stylistic churn.
    "typescript/no-dynamic-delete": "off", // `delete obj[expr]` with a computed key; intentional.
    "unicorn/prefer-string-replace-all": "off", // `String#replaceAll` vs `replace(/g)`; a source rewrite.
  },
});
