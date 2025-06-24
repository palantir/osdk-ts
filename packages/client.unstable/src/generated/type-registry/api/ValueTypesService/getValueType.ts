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
  GetValueTypeRequest as _api_GetValueTypeRequest,
  GetValueTypeResponse as _api_GetValueTypeResponse,
  ValueTypeRid as _api_ValueTypeRid,
} from "../__components.js";

/**
 * Returns a single Value Type identified by its rid either at specific or latest version.
 */
export async function getValueType(
  ctx: ConjureContext,
  valueTypeRid: _api_ValueTypeRid,
  request: _api_GetValueTypeRequest,
): Promise<_api_GetValueTypeResponse> {
  return conjureFetch(
    ctx,
    `/type-registry/value-types/get/${valueTypeRid}`,
    "POST",
    request,
  );
}
