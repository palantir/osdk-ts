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
  ValidateInstallBlocksResponse as _api_ValidateInstallBlocksResponse,
} from "../__components.js";

/**
 * Validate a set of block install instructions.
 */
export async function validateInstallBlocksV2(
  ctx: ConjureContext,
  installBlocksRequest: _api_InstallBlocksRequestV2,
): Promise<_api_ValidateInstallBlocksResponse> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/validate-install-blocks-request`,
    "POST",
    installBlocksRequest,
  );
}
