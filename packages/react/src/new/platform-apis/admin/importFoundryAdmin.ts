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

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type FoundryAdminModule = typeof import("@osdk/foundry.admin");

const MISSING_PEER_MESSAGE =
  "@osdk/react: the optional peer dependency \"@osdk/foundry.admin\" is "
  + "required to use the admin platform-api hooks (e.g. useCbacBanner, "
  + "useMarkings, useFoundryUser). Install it to use these hooks.";

/**
 * Lazily import the optional `@osdk/foundry.admin` peer dependency used by the
 * admin platform-api hooks.
 *
 * Kept as a dynamic import (rather than a static top-level import) so consumers
 * who don't use the admin hooks aren't forced to install the peer and don't
 * fail their bundler build when it's absent. If the peer is missing, the import
 * rejects with a clear, actionable error instead of an opaque module-resolution
 * failure; that error surfaces through the hook's `error` state.
 *
 * Some bundlers resolve a missing optional peer to an empty stub module rather
 * than failing, so the import succeeds but the expected exports are absent. We
 * validate a known export (`Users`) post-import to surface the same actionable
 * error instead of an opaque `TypeError` at the hook call site.
 */
export async function importFoundryAdmin(): Promise<FoundryAdminModule> {
  let mod: FoundryAdminModule;
  try {
    mod = await import("@osdk/foundry.admin");
  } catch (cause) {
    throw new Error(MISSING_PEER_MESSAGE, { cause });
  }
  if (mod?.Users == null) {
    throw new Error(MISSING_PEER_MESSAGE);
  }
  return mod;
}
