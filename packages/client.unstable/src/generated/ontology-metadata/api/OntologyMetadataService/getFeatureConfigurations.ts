/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import type { GetFeatureConfigurationsResponse } from "../GetFeatureConfigurationsResponse.js";

/**
 * Please contact the OMS team before using this endpoint.
 *
 * Gets the current configuration of some OMS features. Note that these configurations are stack-wide, which
 * means they do not have granularity on org/enrollment/group level.
 */
export async function getFeatureConfigurations(
  ctx: ConjureContext,
): Promise<GetFeatureConfigurationsResponse> {
  return conjureFetch(ctx, `/ontology/featureConfigurations`, "GET");
}
