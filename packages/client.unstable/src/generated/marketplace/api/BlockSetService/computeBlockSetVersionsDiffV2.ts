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
  ComputeBlockSetVersionsDiffRequest as _api_ComputeBlockSetVersionsDiffRequest,
  ComputeBlockSetVersionsDiffV2Response
    as _api_ComputeBlockSetVersionsDiffV2Response,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Computes shape level diff between two versions of a blockset with block set shapes.
 */
export async function computeBlockSetVersionsDiffV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  computeBlockSetVersionsDiffRequest: _api_ComputeBlockSetVersionsDiffRequest,
): Promise<_api_ComputeBlockSetVersionsDiffV2Response> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/diff/v2`,
    "POST",
    computeBlockSetVersionsDiffRequest,
  );
}
