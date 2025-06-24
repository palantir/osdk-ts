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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type {
  ApplicationRid as _api_ApplicationRid,
  ClientOperationsVersion as _api_ClientOperationsVersion,
  VersionedApplication as _api_VersionedApplication,
} from "../__components.js";

/**
 * Migrate a third-party application to the latest version of client operations, e.g. V0 -> V1.
 * See ClientOperationsVersion for docs on the differences between versions.
 *
 * Requires third-party-application:edit-application on the application rid.
 */
export async function migrateOperations(
  ctx: ConjureContext,
  applicationRid: _api_ApplicationRid,
  version: _api_ClientOperationsVersion | null | undefined,
): Promise<_api_VersionedApplication> {
  return conjureFetch(
    ctx,
    `/applications/${applicationRid}/migrate`,
    "PUT",
    undefined,
    { version },
  );
}
