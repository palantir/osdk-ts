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

import { VITE_INJECTIONS } from "./constants.js";

export function setWidgetSettings(
  widgetRid: string,
  foundryUrl: URL,
  localhostUrl: string,
  entrypointToJsSourceFileMap: Record<string, Set<string>>,
  entrypointFileName: string,
  injectedScriptSources: string[],
): Promise<Response> {
  const widgetDevModeSettings = {
    entrypointJs: [
      `/${VITE_INJECTIONS}`,
      ...injectedScriptSources,
      ...entrypointToJsSourceFileMap[entrypointFileName],
    ].map((file) => ({
      filePath: `${localhostUrl}${file}`,
      scriptType: { type: "module", module: {} },
    })),
    entrypointCss: [],
  };
  return fetch(
    `${foundryUrl.origin}/widget-registry/api/dev-mode/settings/${widgetRid}`,
    {
      body: JSON.stringify(widgetDevModeSettings),
      method: "PUT",
      headers: {
        authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    },
  );
}

export function enableDevMode(foundryUrl: URL): Promise<Response> {
  return fetch(`${foundryUrl.origin}/widget-registry/api/dev-mode/enable`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
      accept: "application/json",
    },
  });
}
