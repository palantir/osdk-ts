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
  ValidateMonitorCreateRequest as _api_validation_ValidateMonitorCreateRequest,
  ValidateMonitorResponse as _api_validation_ValidateMonitorResponse,
} from "../__components.js";

/**
 * Validate the monitor create call.
 *
 * This endpoint is not expected to ever throw.
 */
export async function validateMonitorCreate(
  ctx: ConjureContext,
  request: _api_validation_ValidateMonitorCreateRequest,
): Promise<_api_validation_ValidateMonitorResponse> {
  return conjureFetch(ctx, `/validation/v0/validate-create`, "POST", request);
}
