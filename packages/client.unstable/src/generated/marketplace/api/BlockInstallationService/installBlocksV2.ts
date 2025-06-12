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
  InstallBlocksRequestV2 as _api_InstallBlocksRequestV2,
  InstallBlocksResponseV2 as _api_InstallBlocksResponseV2,
} from "../__components.js";

/**
 * Installs a set of blocks into the given location. Creates an install job that performs the installation of the
 * blocks and associated block sets asynchronously. Use the `getBlockInstallationJob` endpoint to get information
 * about this job.
 *
 * All installed blocks need to have an associated block set installation.
 *
 * Requires `marketplace:install-from-local-marketplace` on the given `marketplaceRid`, and
 * `marketplace:install-in` on the given Ontology (if specified) and namespace (if the request contains any new
 * associated block set installations).
 */
export async function installBlocksV2(
  ctx: ConjureContext,
  installBlocksRequest: _api_InstallBlocksRequestV2,
): Promise<_api_InstallBlocksResponseV2> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/install`,
    "POST",
    installBlocksRequest,
  );
}
