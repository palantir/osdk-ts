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

import { createFetch } from "../createFetch.mjs";
import type { InternalClientContext } from "../internalClientContext.mjs";
import type { WidgetSetRid } from "../WidgetSetRid.js";
import type { ListWidgetSetReleasesResponse } from "./ListWidgetSetReleasesResponse.mjs";

export async function listWidgetSetReleases(
  ctx: InternalClientContext,
  widgetSetRid: WidgetSetRid,
): Promise<ListWidgetSetReleasesResponse> {
  const fetch = createFetch(ctx.tokenProvider);
  const url =
    `${ctx.foundryUrl}/widget-registry/api/widget-sets/${widgetSetRid}/releases`;
  const response = await fetch(url);
  return response.json();
}
