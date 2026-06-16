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
import type { GetStreamingProfileConfigsResponse as _api_entitymetadata_GetStreamingProfileConfigsResponse } from "../__components.js";

/**
 * Returns all streaming profile configurations that can be applied to an object type. OMA should call this
 * endpoint to display information about each configuration. Funnel should call this endpoint to determine which
 * Flink streaming profiles to include in the job spec. The user must have `ontology:view-streaming-profile` on
 * all streaming profile RIDs contained within a streaming profile configuration to view the configuration. Note
 * that paging is not required because the response size is fixed and low cardinality.
 */
export async function getStreamingProfileConfigs(
  ctx: ConjureContext,
): Promise<_api_entitymetadata_GetStreamingProfileConfigsResponse> {
  return conjureFetch(ctx, `/entityMetadata/profile-configs/streaming`, "GET");
}
