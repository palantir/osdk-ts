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
  InstallationOutputKey as _api_InstallationOutputKey,
  ResourceInstallationProvenanceResponse
    as _api_ResourceInstallationProvenanceResponse,
} from "../__components.js";

/**
 * Fetches the installation provenance information  for a resource, which is information about how that resource
 * might have been created by marketplace.
 *
 * If the resource belongs to a block set installation (which means, it was created as part of a installation
 * job for the given installation), and the user has access to that installation, then returns the provenance
 * for the resource, which contains the block set installation rid, as well as the block set shape of the
 * resource.
 *
 * If the resource does not belong to any installation, or if the user does not have permissions on the
 * installation it belongs to, returns empty.
 */
export async function getInstallationProvenanceForResource(
  ctx: ConjureContext,
  installationOutputKey: _api_InstallationOutputKey,
): Promise<_api_ResourceInstallationProvenanceResponse | null | undefined> {
  return conjureFetch(
    ctx,
    `/block-set-installation/get-installation-provenance`,
    "POST",
    installationOutputKey,
  );
}
