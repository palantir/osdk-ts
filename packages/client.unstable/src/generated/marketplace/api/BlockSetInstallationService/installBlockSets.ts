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
  InstallBlockSetsRequest as _api_InstallBlockSetsRequest,
  InstallBlockSetsResponse as _api_InstallBlockSetsResponse,
} from "../__components.js";

/**
 * Install Block Sets.
 * Calls `validateInstallBlockSets` internally with its caching disabled.
 */
export async function installBlockSets(
  ctx: ConjureContext,
  installBlockSetsRequest: _api_InstallBlockSetsRequest,
  onBehalfOf: string | null | undefined,
): Promise<_api_InstallBlockSetsResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/install`,
    "POST",
    installBlockSetsRequest,
  );
}
