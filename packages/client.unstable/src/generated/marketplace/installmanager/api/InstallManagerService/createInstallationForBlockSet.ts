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
  CreateInstallationForBlockSetRequest
    as _installmanager_api_CreateInstallationForBlockSetRequest,
  CreateInstallationResponse as _installmanager_api_CreateInstallationResponse,
} from "../__components.js";

/**
 * Requests the initial installation of a block set into a namespace.
 */
export async function createInstallationForBlockSet(
  ctx: ConjureContext,
  request: _installmanager_api_CreateInstallationForBlockSetRequest,
): Promise<_installmanager_api_CreateInstallationResponse> {
  return conjureFetch(
    ctx,
    `/install-manager/installations/create/block-set`,
    "POST",
    request,
  );
}
