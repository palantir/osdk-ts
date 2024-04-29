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
import type { ReportUsageMetadataRequest } from "../ReportUsageMetadataRequest.js";
import type { ReportUsageMetadataResponse } from "../ReportUsageMetadataResponse.js";

/**
 * Endpoint to report usage of ontology entities. The reported usage will be stored and made available for
 * analysis.
 *
 * Permissions required:
 * - `ontology:report-usage-metadata` on the root ontology rid for the reporting backend service
 */
export async function reportUsageMetadata(
  ctx: ConjureContext,
  serviceToken: string,
  request: ReportUsageMetadataRequest,
): Promise<ReportUsageMetadataResponse> {
  return conjureFetch(ctx, `/usage/reportUsageMetadata`, "POST", request);
}
