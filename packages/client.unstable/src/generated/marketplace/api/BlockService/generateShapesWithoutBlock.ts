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
  GenerateShapesResponse as _api_GenerateShapesResponse,
  GenerateShapesWithoutBlockRequest as _api_GenerateShapesWithoutBlockRequest,
} from "../__components.js";

/**
 * Endpoint for generating shapes from input/output identifiers. Used by the Workshop linter.
 */
export async function generateShapesWithoutBlock(
  ctx: ConjureContext,
  request: _api_GenerateShapesWithoutBlockRequest,
): Promise<_api_GenerateShapesResponse> {
  return conjureFetch(
    ctx,
    `/blocks/generate-shapes-without-block`,
    "POST",
    request,
  );
}
