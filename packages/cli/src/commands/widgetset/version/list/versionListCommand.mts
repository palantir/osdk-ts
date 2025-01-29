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
import type { WidgetSetRid } from "../../../../net/WidgetSetRid.js";
import { loadToken } from "../../../../util/token.js";
import type { VersionListArgs } from "./VersionListArgs.js";

export default async function versionListCommand(
  { foundryUrl, rid, token, tokenFile }: VersionListArgs,
): Promise<void> {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Fetching versions");

  const response = await listWidgetSetReleases(clientCtx, rid);
  if (response.releases.length === 0) {
    consola.info("No widget set versions found");
    return;
  }

  consola.success("Found versions:");

  const semver = await import("semver");
  const sortedVersions = semver.rsort(
    response.releases.map(v => v.widgetSetVersion).filter(v => semver.valid(v)),
  );
  for (const version of sortedVersions) {
    consola.log(
      `    - ${version}`,
    );
  }
}

async function listWidgetSetReleases(
  ctx: InternalClientContext,
  // TODO: make repository rid
  widgetSetRid: WidgetSetRid,
): Promise<{
  releases: Array<{
    widgetSetRid: WidgetSetRid;
    widgetSetVersion: string;
  }>;
}> {
  const fetch = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/widget-registry/api/widget-sets/${widgetSetRid}/releases`;
  const response = await fetch(url);
  return response.json();
}
