/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { CreateValueTypeVersionRequestV2 } from "../CreateValueTypeVersionRequestV2.js";
import type { CreateValueTypeVersionResponse } from "../CreateValueTypeVersionResponse.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";

/**
 * Creates a new value type version for an already existing Value Type.
 */
export async function createValueTypeVersionV2(
  ctx: ConjureContext,
  valueTypeRid: ValueTypeRid,
  request: CreateValueTypeVersionRequestV2,
): Promise<CreateValueTypeVersionResponse> {
  return conjureFetch(
    ctx,
    `/type-registry/value-types/version/v2/${valueTypeRid}`,
    "POST",
    request,
  );
}