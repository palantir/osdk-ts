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

type WidgetSettings = Record<string, {
  entrypointJs: {
    filePath: string;
    scriptType: { type: "module"; module: {} };
  }[];
  entrypointCss: string[];
}>;

export function setWidgetSetSettings(
  foundryUrl: string,
  widgetSetRid: string,
  widgetIdToOverrides: Record<string, string[]>,
): Promise<Response> {
  const widgetSettings: WidgetSettings = Object.fromEntries(
    Object.entries(widgetIdToOverrides).map(
      ([widgetId, overrides]) => ([
        widgetId,
        {
          entrypointJs: overrides.map((filePath) => ({
            filePath,
            scriptType: { type: "module", module: {} },
          })),
          entrypointCss: [],
        },
      ] as const),
    ),
  );
  return fetch(
    `${foundryUrl}/widget-registry/api/dev-mode/settings/${widgetSetRid}/ids`,
    {
      body: JSON.stringify({ widgetSettings }),
      method: "PUT",
      headers: {
        authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    },
  );
}

export function enableDevMode(foundryUrl: string): Promise<Response> {
  return fetch(`${foundryUrl}/widget-registry/api/dev-mode/enable`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
      accept: "application/json",
    },
  });
}
