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
  BlockSetInstallationMetadata as _api_BlockSetInstallationMetadata,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
} from "../__components.js";

/**
 * Returns metadata for a given block set installation. To get the resolved shapes for an installation, use
 * `getBlockSetInstallationResolvedShapes`.
 *
 * Throws `BlockSetInstallationNotFound` if the user does not have marketplace:view-installation on the given
 * blockSetInstallationRid.
 */
export async function getBlockSetInstallationMetadata(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
): Promise<_api_BlockSetInstallationMetadata> {
  return conjureFetch(
    ctx,
    `/block-set-installation/metadata/${blockSetInstallationRid}`,
    "GET",
  );
}
