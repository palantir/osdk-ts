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
  MoveBlockSetInstallationsRequest as _api_MoveBlockSetInstallationsRequest,
  MoveBlockSetInstallationsResponse as _api_MoveBlockSetInstallationsResponse,
} from "../__components.js";

/**
 * Move a block set installations to a different store.
 *
 * Throws Marketplace:BlockSetInstallationJobInProgress if an active installation job is active on any of the
 * affected installations.
 * Throws BlockSet:InstallableBlockSetVersionNotFound if the target store is missing the block set version any
 * of the affected installs are currently on.
 */
export async function moveBlockSetInstallationsBetweenStores(
  ctx: ConjureContext,
  moveBlockSetInstallationsRequest: _api_MoveBlockSetInstallationsRequest,
  onBehalfOf: string | null | undefined,
): Promise<_api_MoveBlockSetInstallationsResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/move`,
    "POST",
    moveBlockSetInstallationsRequest,
  );
}
