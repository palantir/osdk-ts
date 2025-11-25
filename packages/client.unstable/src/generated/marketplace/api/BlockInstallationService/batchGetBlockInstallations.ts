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
  BatchGetBlockInstallationsRequest as _api_BatchGetBlockInstallationsRequest,
  BatchGetBlockInstallationsResponse as _api_BatchGetBlockInstallationsResponse,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
} from "../__components.js";

/**
 * Get a batch of block installations associated with a block set installation. All block installations need to
 * be associated with the same block set installation. To fetch block installations for multiple block set
 * installations, make one request to this endpoint for each block set installation.
 *
 * The returned map will only contain entries for block installations that are associated with the given block
 * set installation.
 *
 * This endpoint supports a maximum of 100 block installations.
 *
 * Requires `marketplace:view-installation` on the associated block set installation.
 *
 * Throws `BlockSetInstallationNotFound` if the associated block set installation does not exist or if the user
 * does not have access to it.
 *
 * Throws `BatchLimitExceeded` if more than 100 items are requested.
 */
export async function batchGetBlockInstallations(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
  request: _api_BatchGetBlockInstallationsRequest,
): Promise<_api_BatchGetBlockInstallationsResponse> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/block-set-installations/${blockSetInstallationRid}/block-installations/batch-get`,
    "POST",
    request,
  );
}
