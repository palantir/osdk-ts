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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationVersion } from "../ApplicationVersion.js";
import type { VersionedApplication } from "../VersionedApplication.js";

/**
 * Get a third-party application definition at the specified version.
 *
 * Requires third-party-application:view-application on the application rid.
 */
export async function getApplicationVersion(
  ctx: ConjureContext,
  applicationRid: ApplicationRid,
  applicationVersion: ApplicationVersion,
): Promise<VersionedApplication> {
  return conjureFetch(
    ctx,
    `/applications/${applicationRid}/versions/${applicationVersion}`,
    "GET",
  );
}
