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
import type { ResourceProfile as _ResourceProfile } from "../__components.js";

/**
 * Get all pre-defined resource profiles. Each profile is marked whether or not it is valid for underlying
 * resources. This is because resource queue for a CM can change. FE will call this endpoint to render all valid
 * resource profiles for users to select.
 */
export async function getResourceProfiles(
  ctx: ConjureContext,
  deployedAppRid: string,
): Promise<Array<_ResourceProfile>> {
  return conjureFetch(
    ctx,
    `/deployed-apps/${deployedAppRid}/resource-profiles`,
    "GET",
  );
}
