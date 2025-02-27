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

import { createInternalClientContext, widgetRegistry } from "#net";
import { consola } from "consola";
import { loadToken } from "../../../../util/token.js";
import type { VersionInfoArgs } from "./VersionInfoArgs.js";

export default async function versionInfoCommand(
  { version, foundryUrl, widgetSet, token, tokenFile }: VersionInfoArgs,
): Promise<void> {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Loading version info");
  const response = await widgetRegistry.getWidgetSetRelease(
    clientCtx,
    widgetSet,
    version,
  );
  consola.success(`Loaded version info for ${version}`);
  consola.log(JSON.stringify(response, null, 2));
}
