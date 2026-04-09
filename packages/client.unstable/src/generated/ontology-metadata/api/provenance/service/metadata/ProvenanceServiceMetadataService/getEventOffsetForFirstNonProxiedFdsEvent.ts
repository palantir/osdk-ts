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
import type {
  GetEventOffsetForFirstNonProxiedFdsEventResponse
    as _api_provenance_GetEventOffsetForFirstNonProxiedFdsEventResponse,
  OmsOpsDependentType as _api_provenance_OmsOpsDependentType,
} from "../../../__components.js";

/**
 * Endpoint to return the latest offset recorded when we received a stop-order to prohibit
 * OMS-OPS from proxying events to FDS from the client
 *
 * FDS will query this field to know when its currentAck'd offset is greater than OMS-OPS's offset
 * to know when it can safely consume events.
 *
 * Permissions required:
 * - `ontology:read-provenance-service-metadata`
 */
export async function getEventOffsetForFirstNonProxiedFdsEvent(
  ctx: ConjureContext,
  omsOpsDependentType: _api_provenance_OmsOpsDependentType,
): Promise<_api_provenance_GetEventOffsetForFirstNonProxiedFdsEventResponse> {
  return conjureFetch(
    ctx,
    `/provenance-service-metadata/get-event-offset-for-first-non-proxied-fds-event/${omsOpsDependentType}`,
    "GET",
  );
}
