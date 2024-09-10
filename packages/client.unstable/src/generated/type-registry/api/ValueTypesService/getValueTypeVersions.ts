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
import type { GetValueTypeVersionsResponse } from "../GetValueTypeVersionsResponse.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";

/**
 * Returns all versions corresponding to a specific Value Type rid, sorted by creation time in descending order.
 */
export async function getValueTypeVersions(
  ctx: ConjureContext,
  valueTypeRid: ValueTypeRid,
): Promise<GetValueTypeVersionsResponse> {
  return conjureFetch(
    ctx,
    `/type-registry/value-types/get/${valueTypeRid}/versions`,
    "POST",
  );
}
