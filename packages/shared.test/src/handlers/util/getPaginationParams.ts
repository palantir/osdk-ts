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

import type { PageToken } from "@osdk/foundry.core";
import type { LoadObjectSetRequestV2 } from "@osdk/internal.foundry.ontologies";
import type { StrictRequest } from "msw";

export function getPaginationParamsFromUrl(
  request: StrictRequest<any>,
): { pageSize: number | undefined; pageToken: PageToken | undefined } {
  const url = new URL(request.url);
  return {
    pageSize: url.searchParams.get("pageSize") == null
      ? undefined
      : Number(url.searchParams.get("pageSize")),
    pageToken: url.searchParams.get("pageToken") == null
      ? undefined
      : (url.searchParams.get("pageToken") as string),
  };
}

export function getPaginationParamsFromRequest(
  { pageSize, pageToken }: Pick<
    LoadObjectSetRequestV2,
    "pageToken" | "pageSize"
  >,
): { pageSize: number | undefined; pageToken: PageToken | undefined } {
  return {
    pageSize,
    pageToken,
  };
}
