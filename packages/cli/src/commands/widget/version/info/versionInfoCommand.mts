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

import { createInternalClientContext } from "#net";
import { consola } from "consola";
import { createFetch } from "../../../../net/createFetch.mjs";
import type { InternalClientContext } from "../../../../net/internalClientContext.mjs";
import type { WidgetRid } from "../../../../net/WidgetRid.js";
import { loadToken } from "../../../../util/token.js";
import type { VersionInfoArgs } from "./VersionInfoArgs.js";

export default async function versionInfoCommand(
  { version, foundryUrl, rid, token, tokenFile }: VersionInfoArgs,
) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Loading version info");
  const response = await getViewRelease(clientCtx, rid, version);
  consola.success(`Loaded version info for ${version}`);
  consola.log(JSON.stringify(response, null, 2));
}

async function getViewRelease(
  ctx: InternalClientContext,
  // TODO: make repository rid
  widgetRid: WidgetRid,
  version: string,
): Promise<any> {
  const fetch = createFetch(ctx.tokenProvider);
  const url =
    `${ctx.foundryUrl}/view-registry/api/views/${widgetRid}/releases/${version}`;
  const response = await fetch(url);
  return response.json();
}
