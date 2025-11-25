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
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  SetBlockSetInstallationImmutabilityRequest
    as _api_SetBlockSetInstallationImmutabilityRequest,
  SetBlockSetInstallationImmutabilityResponse
    as _api_SetBlockSetInstallationImmutabilityResponse,
} from "../__components.js";

/**
 * Sets the immutability of the resolved outputs of a block set installation. Affects both Compass and Ontology
 * resources.
 *
 * Toggling the immutability of Compass resources means converting the installation project between the
 * Marketplace Installation role context (which does not include any edit operations) and the Compass Project
 * role context (which has no restrictions on edit operations). Marketplace will use the provided roles map to
 * retain any role grants on the project during this conversion.
 *
 * A similar strategy is applied to Ontology entities, where toggling immutability means adding or removing
 * editor and owner role grants to the respective entities.
 *
 * To get the current immutability status for a block set installation, you can fetch the installation project
 * from Compass and inspect its current role context.
 *
 * Requires `marketplace:edit-installation` on the given `blockSetInstallationRid` and
 * `marketplace:unlock-project` on the project that the installation is in. Both operations are granted to owners
 * by default.
 */
export async function setBlockSetInstallationImmutability(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
  request: _api_SetBlockSetInstallationImmutabilityRequest,
): Promise<_api_SetBlockSetInstallationImmutabilityResponse> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/block-set-installations/${blockSetInstallationRid}/set-immutability`,
    "POST",
    request,
  );
}
