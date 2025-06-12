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
  BlockSetInstallationResolvedShapes as _api_BlockSetInstallationResolvedShapes,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
} from "../__components.js";

/**
 * Returns the resolved shapes for a block set installation. Note that in case of failed jobs, an installation
 * may be spread across multiple block set versions. This endpoint only returns shapes that are present on the
 * latest target version for the installation, i.e. it does not try to merge shapes across multiple versions.
 *
 * The reason for having a separate endpoint for loading shapes, instead of including them in the response of
 * `getBlockSetInstallationMetadata`, is that shapes can be quite heavy to load.
 *
 * Throws `BlockSetInstallationNotFound` if the installation does not exist or if the user does not have
 * marketplace:view-installation on its RID.
 * Throws `BlockSetToBlockMappingNotFound` if the latest target version for the installation does not have
 * block set shapes.
 */
export async function getBlockSetInstallationResolvedShapes(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
): Promise<_api_BlockSetInstallationResolvedShapes> {
  return conjureFetch(
    ctx,
    `/block-set-installation/${blockSetInstallationRid}/resolved-shapes`,
    "GET",
  );
}
