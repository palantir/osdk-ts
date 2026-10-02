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

import { conjureFetch, type ConjureContext } from "conjure-lite";

import type { UpdateEntityCompassTagsRequest as _api_modification_UpdateEntityCompassTagsRequest } from "../../modification/__components.js";
import type { UpdateEntityCompassTagsResponse as _api_modification_UpdateEntityCompassTagsResponse } from "../../modification/__components.js";

/**
 * Adds and removes Compass Tags from Ontology Entities, each with its own tag operations. Service-Project
 * Entities are validated by OMS. If any Entity is in a Service Project, the entire request is forwarded with
 * OMS's service token. The response reports the resulting Tags for each Entity.
 */
export async function updateEntityCompassTags(
  ctx: ConjureContext,
  request: _api_modification_UpdateEntityCompassTagsRequest,
): Promise<_api_modification_UpdateEntityCompassTagsResponse> {
  return conjureFetch(
    ctx,
    `/ontology/v2/updateEntityCompassTags`,
    "PUT",
    request,
  );
}
