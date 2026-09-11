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

const FOUNDRY_BRANCH_META_SELECTOR = 'meta[name="osdk-foundry-branch-rid"]';

/** Reads the injected branch without requiring a browser environment. */
function getInjectedBranch(): string | null | undefined {
  return typeof document === "undefined"
    ? undefined
    : document
        .querySelector(FOUNDRY_BRANCH_META_SELECTOR)
        ?.getAttribute("content");
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
 * back to the branch injected into the application HTML. That fallback is the
 * point: a repository checked out on a branch reads that branch's data even if
 * its generated SDK predates the checkout.
 *
 * @param explicitBranch - the branch supplied by the caller, if any
 * @param injectedBranch - the branch injected by build tooling. Defaults to
 *   the value in the OSDK branch meta tag; supply it to test without a browser
 *   environment.
 */
export function resolveBranch(
  explicitBranch: string | null | undefined,
  injectedBranch: string | null | undefined = getInjectedBranch(),
): string | undefined {
  return explicitBranch !== undefined
    ? normalizeBranch(explicitBranch)
    : normalizeBranch(injectedBranch);
}
