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
  GenerateCompassLocationInputShapesRequest
    as _api_GenerateCompassLocationInputShapesRequest,
  GenerateCompassLocationInputShapesResponse
    as _api_GenerateCompassLocationInputShapesResponse,
} from "../__components.js";

/**
 * Endpoint for generating Compass location input shapes for a set of output shapes. Should only be used by
 * integrations that are not using the `generateShapes` endpoint.
 */
export async function generateCompassLocationInputShapes(
  ctx: ConjureContext,
  request: _api_GenerateCompassLocationInputShapesRequest,
): Promise<_api_GenerateCompassLocationInputShapesResponse> {
  return conjureFetch(
    ctx,
    `/blocks/generate-compass-location-input-shapes`,
    "POST",
    request,
  );
}
