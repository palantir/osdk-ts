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
  CreateMonitorRequest as _api_registry_CreateMonitorRequest,
  CreateMonitorResponse as _api_registry_CreateMonitorResponse,
} from "../__components.js";

/**
 * Creates a monitor. This creates a Gatekeeper node with the parent rid as its parent, and creates a Compass
 * resource.
 * Throws:
 * - CouldNotCreateGatekeeperNode: if the gatekeeper node could not be created. This can happen if the parent
 * rid does not exist.
 * - NotAllowedToSubscribeOthersToThisTypeOfEffect: if the user attempts to subscribe others to effects that are
 * not allowed.
 * - InvalidMonitor: if the monitor metadata or the monitor logic is invalid.
 */
export async function createMonitor(
  ctx: ConjureContext,
  request: _api_registry_CreateMonitorRequest,
): Promise<_api_registry_CreateMonitorResponse> {
  return conjureFetch(ctx, `/registry/v0/monitors`, "POST", request);
}
