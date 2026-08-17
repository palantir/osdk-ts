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

import { describe, expect, it } from "vitest";

import { FOUNDRY_BRANCH_RID_ENV_VAR, resolveBranch } from "./resolveBranch.js";

const ENV_BRANCH = "ri.foundry.main.branch.from-environment";
const EXPLICIT_BRANCH = "ri.foundry.main.branch.from-code";

type Env = Record<string, string | undefined> | undefined;

/**
 * The environment is injected rather than stubbed: Vite substitutes
 * `import.meta.env` with a snapshot taken when the bundler (or, here, Vitest)
 * starts, so `vi.stubEnv` cannot reach the value a source module reads.
 */
function envWith(branch: string | undefined): Env {
  return { [FOUNDRY_BRANCH_RID_ENV_VAR]: branch };
}

describe(resolveBranch, () => {
  it.each<[string, string | null | undefined, Env, string | undefined]>([
    [
      "falls back to the environment",
      undefined,
      envWith(ENV_BRANCH),
      ENV_BRANCH,
    ],
    [
      "prefers an explicit branch over the environment",
      EXPLICIT_BRANCH,
      envWith(ENV_BRANCH),
      EXPLICIT_BRANCH,
    ],
    [
      "treats null as pinning to the default branch",
      null,
      envWith(ENV_BRANCH),
      undefined,
    ],
    [
      "does not fall back for a blank explicit branch",
      "  ",
      envWith(ENV_BRANCH),
      undefined,
    ],
    [
      "trims the environment value",
      undefined,
      envWith(`  ${ENV_BRANCH}\n`),
      ENV_BRANCH,
    ],
    [
      "treats a blank environment value as unset",
      undefined,
      envWith("   "),
      undefined,
    ],
    [
      // Local development passes a branch name for the backend to resolve, so a
      // rid-only check would break it.
      "accepts a branch name that is not a rid",
      undefined,
      envWith("my-feature-branch"),
      "my-feature-branch",
    ],
    ["returns undefined when the variable is unset", undefined, {}, undefined],
    // No `import.meta.env` at all: the CJS build and plain Node ESM.
    [
      "returns undefined when there is no environment",
      undefined,
      undefined,
      undefined,
    ],
  ])("%s", (_description, explicitBranch, env, expected) => {
    expect(resolveBranch(explicitBranch, env)).toBe(expected);
  });
});
