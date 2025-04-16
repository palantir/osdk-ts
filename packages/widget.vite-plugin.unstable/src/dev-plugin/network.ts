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
  scriptEntrypoints: Array<{
    filePath: string;
    scriptType: "DEFAULT" | "MODULE";
  }>;
  stylesheetEntrypoints: Array<{ filePath: string }>;
}>;

export function setWidgetSetSettings(
  foundryUrl: string,
  widgetSetRid: string,
  widgetIdToOverrides: Record<string, string[]>,
  baseHref: string,
): Promise<Response> {
  const widgetSettings: WidgetSettings = Object.fromEntries(
    Object.entries(widgetIdToOverrides).map(
      ([widgetId, overrides]) => ([
        widgetId,
        {
          scriptEntrypoints: overrides.map((filePath) => ({
            filePath,
            scriptType: "MODULE",
          })),
          stylesheetEntrypoints: [],
        },
      ] as const),
    ),
  );
  return fetch(
    `${foundryUrl}/api/v2/widgets/devModeSettings/setWidgetSetById?preview=true`,
    {
      body: JSON.stringify({
        widgetSetRid,
        settings: {
          baseHref,
          widgetSettings,
        },
      }),
      method: "POST",
      headers: {
        authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    },
  );
}

export function enableDevMode(foundryUrl: string): Promise<Response> {
  return fetch(
    `${foundryUrl}/api/v2/widgets/devModeSettings/enable?preview=true`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
        accept: "application/json",
      },
    },
  );
}
