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
import type { GetTopRowsRequest as _api_dataframe_GetTopRowsRequest } from "../__components.js";

/**
 * Returns top N rows from the computed dataframe in arrow format.
 *
 * If `ORDER BY` is not specified in the query, the ordering is unspecified and the order of rows returned may
 * not be deterministic.
 *
 * The response will include the response as specified by the serialization format.
 */
export async function getTopRows(
  ctx: ConjureContext,
  request: _api_dataframe_GetTopRowsRequest,
): Promise<string> {
  return conjureFetch(
    ctx,
    `/dataframe/getTopRows`,
    "PUT",
    request,
    undefined,
    undefined,
    "application/octet-stream",
  );
}
