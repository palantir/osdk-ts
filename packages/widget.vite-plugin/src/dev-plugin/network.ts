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

import type { DevModeManifest } from "./buildDevModeManifest.js";
import { getFoundryToken } from "./getFoundryToken.js";

export function setWidgetSetManifest(
  foundryUrl: string,
  widgetSetRid: string,
  manifest: DevModeManifest,
  viteMode: string | undefined,
): Promise<Response> {
  return fetch(
    `${foundryUrl}/api/v2/widgets/devModeSettingsV2/setWidgetSetManifest?preview=true`,
    {
      body: JSON.stringify({
        widgetSetRid,
        manifest,
      }),
      method: "POST",
      headers: {
        authorization: `Bearer ${getFoundryToken(viteMode)}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    },
  );
}

export function enableDevMode(
  foundryUrl: string,
  viteMode: string | undefined,
): Promise<Response> {
  return fetch(
    `${foundryUrl}/api/v2/widgets/devModeSettingsV2/enable?preview=true`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${getFoundryToken(viteMode)}`,
        accept: "application/json",
      },
    },
  );
}
