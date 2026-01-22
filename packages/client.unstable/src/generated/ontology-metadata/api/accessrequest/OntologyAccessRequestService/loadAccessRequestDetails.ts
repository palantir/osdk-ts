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
  LoadAccessRequestDetailsRequest
    as _api_accessrequest_LoadAccessRequestDetailsRequest,
  LoadAccessRequestDetailsResponse
    as _api_accessrequest_LoadAccessRequestDetailsResponse,
} from "../__components.js";

/**
 * Returns the access requests of the requested ontology entities.
 * If any of the ontology entities don't exist or the user does not have permission to view the access requests,
 * we will omit those access requests.
 */
export async function loadAccessRequestDetails(
  ctx: ConjureContext,
  request: _api_accessrequest_LoadAccessRequestDetailsRequest,
): Promise<_api_accessrequest_LoadAccessRequestDetailsResponse> {
  return conjureFetch(
    ctx,
    `/ontology/access-request/loadAccessRequestDetails`,
    "POST",
    request,
  );
}
