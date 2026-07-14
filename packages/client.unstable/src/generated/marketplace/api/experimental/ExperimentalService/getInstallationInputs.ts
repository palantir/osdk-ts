/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { BlockSetInstallationRid as _api_BlockSetInstallationRid } from "../../__components.js";
import type {
  GetInstallationInputsRequest as _api_experimental_GetInstallationInputsRequest,
  GetInstallationInputsResponse as _api_experimental_GetInstallationInputsResponse,
} from "../__components.js";

/**
 * Returns the current inputs for an installation.
 * This response can represent inputs that are unset.
 */
export async function getInstallationInputs(
  ctx: ConjureContext,
  installationRid: _api_BlockSetInstallationRid,
  request: _api_experimental_GetInstallationInputsRequest
): Promise<_api_experimental_GetInstallationInputsResponse> {
  return conjureFetch(
    ctx,
    `/experimental/installations/${installationRid}/inputs`,
    "POST",
    request
  );
}
