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

import { loadFoundryConfig } from "@osdk/foundry-config-json";
import type { ViteDevServer } from "vite";
import { enableDevMode, setWidgetSetSettings } from "./network.js";

/**
 * Finish the setup process by setting the widget overrides in Foundry and enabling dev mode.
 */
export async function publishDevModeSettings(
  server: ViteDevServer,
  widgetIdToOverrides: Record<string, string[]>,
  res: any,
): Promise<void> {
  try {
    if (process.env.FOUNDRY_TOKEN == null) {
      throw new Error(
        "FOUNDRY_TOKEN environment variable not found, unable to start dev mode.",
      );
      return;
    }

    const foundryConfig = await loadFoundryConfig("widgetSet");
    if (foundryConfig == null) {
      throw new Error(
        "foundry.config.json file not found.",
      );
    }

    const foundryUrl = foundryConfig.foundryConfig.foundryUrl;
    const widgetSetRid = foundryConfig.foundryConfig.widgetSet.rid;
    const settingsResponse = await setWidgetSetSettings(
      foundryUrl,
      widgetSetRid,
      widgetIdToOverrides,
    );
    if (settingsResponse.status !== 200) {
      server.config.logger.warn(
        `Unable to set widget settings in Foundry: ${settingsResponse.statusText}`,
      );
      const responseContent = await settingsResponse.text();
      server.config.logger.warn(responseContent);
      throw new Error(
        `Unable to set widget settings in Foundry: ${settingsResponse.statusText}`,
      );
    }

    const enableResponse = await enableDevMode(
      foundryUrl,
    );
    if (enableResponse.status !== 200) {
      server.config.logger.warn(
        `Unable to enable dev mode in Foundry: ${enableResponse.statusText}`,
      );
      const responseContent = await enableResponse.text();
      server.config.logger.warn(responseContent);
      throw new Error(
        `Unable to enable dev mode in Foundry: ${enableResponse.statusText}`,
      );
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      status: "success",
      redirectUrl:
        `${foundryUrl}/workspace/custom-widgets/preview/${widgetSetRid}`,
    }));
  } catch (error: any) {
    // Note, this can't be logger.error as that method throws and prevents a response being sent
    server.config.logger.warn(`Failed to start dev mode: ${error.message}`);
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 500;
    res.end(JSON.stringify({ status: "failed", error: error.message }));
  }
}
