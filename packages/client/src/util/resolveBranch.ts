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

/**
 * The environment variable that a Foundry runtime sets to the RID of the branch
 * the application is currently checked out on.
 *
 * It is set by the in-platform dev server, by CI when building a pull request
 * preview, and by local tooling. When it is absent the application is running
 * against the default (`main`) branch.
 */
export const FOUNDRY_BRANCH_RID_ENV_VAR: string = "VITE_FOUNDRY_BRANCH_RID";

/**
 * Reads the whole `import.meta.env` object so builds without it safely return
 * `undefined`. A direct member access would fail in the CommonJS build.
 */
function getImportMetaEnv(): Record<string, string | undefined> | undefined {
  return (
    import.meta as ImportMeta & { env?: Record<string, string | undefined> }
  ).env;
}

/**
 * Trims branch values and treats blanks as absent to avoid sending an empty
 * `branch` query parameter.
 */
function normalizeBranch(
  branch: string | null | undefined,
): string | undefined {
  if (typeof branch !== "string") {
    return undefined;
  }
  const trimmed = branch.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

/**
 * Determines the branch a client should use.
 *
 * An explicitly supplied branch always wins, so application code and any
 * existing `fetch` or client overrides keep their current behavior. `null`
 * explicitly means "no branch", which is how a caller pins to the default
 * branch while checked out on a branch.
 *
 * `undefined` — including the `undefined` that a generated SDK's `$branch`
 * export carries when the SDK was generated against the default branch — falls
 * back to {@link FOUNDRY_BRANCH_RID_ENV_VAR}. That fallback is the point: a
 * repository checked out on a branch reads that branch's data even if its
 * generated SDK predates the checkout.
 *
 * @param explicitBranch - the branch supplied by the caller, if any
 * @param env - the environment to read from. Defaults to `import.meta.env`;
 *   supply it to test without depending on the ambient environment.
 */
export function resolveBranch(
  explicitBranch: string | null | undefined,
  env: Record<string, string | undefined> | undefined = getImportMetaEnv(),
): string | undefined {
  return explicitBranch !== undefined
    ? normalizeBranch(explicitBranch)
    : normalizeBranch(env?.[FOUNDRY_BRANCH_RID_ENV_VAR]);
}
