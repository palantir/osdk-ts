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

// src/examples/ is generated documentation snippets (via `generate-examples`).
// They are illustrative code, not hand-written source, so they are exempt from
// linting (the previous ESLint setup tolerated their patterns too). oxfmt still
// formats them via `codegen`'s format step.
export default defineConfig({
  extends: [root],
  ignorePatterns: [...(root.ignorePatterns ?? []), "src/examples/"],
});
