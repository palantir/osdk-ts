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
import type { ObjectSetRid as _api_ObjectSetRid } from "../../__components.js";
import type { LiveEvaluationInformationResponse as _api_registry_LiveEvaluationInformationResponse } from "../__components.js";

/**
 * Returns information about whether or not the monitor can be evaluated live
 */
export async function getLiveEvaluationInformation(
  ctx: ConjureContext,
  objectSetRid: _api_ObjectSetRid,
): Promise<_api_registry_LiveEvaluationInformationResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors-getLiveEvaluationInformation/${objectSetRid}`,
    "GET",
  );
}
