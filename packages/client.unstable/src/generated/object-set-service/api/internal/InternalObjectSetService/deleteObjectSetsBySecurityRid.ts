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
  DeleteObjectSetsBySecurityRidResponse
    as _api_internal_DeleteObjectSetsBySecurityRidResponse,
  SecurityRid as _api_internal_SecurityRid,
} from "../__components.js";

/**
 * Deletes all object sets that are secured by the given security RID.
 * This will cause future operations which access the object sets to fail.
 */
export async function deleteObjectSetsBySecurityRid(
  ctx: ConjureContext,
  securityRid: _api_internal_SecurityRid,
): Promise<_api_internal_DeleteObjectSetsBySecurityRidResponse> {
  return conjureFetch(
    ctx,
    `/internal/objectSets/securityRid/${securityRid}`,
    "DELETE",
  );
}
