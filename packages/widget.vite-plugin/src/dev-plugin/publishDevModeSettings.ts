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
import type { ServerResponse } from "node:http";
import { inspect } from "node:util";
import type { ViteDevServer } from "vite";
import {
  getCodeWorkspacesFoundryUrl,
  isCodeWorkspacesMode,
} from "./codeWorkspacesMode.js";
import { enableDevMode, setWidgetSetSettings } from "./network.js";

class ResponseError extends Error {
  // To avoid inspect() from logging the error response since it's already logged
  #response: string;
  #hint: string | undefined;

  constructor(message: string, response: string) {
    super(message);
    try {
      const parsed = JSON.parse(response);
      this.#response = JSON.stringify(parsed, null, 4);
      this.#hint = getHintForError(parsed);
    } catch {
      this.#response = response;
    }
  }

  get response(): string {
    return this.#response;
  }

  get hint(): string | undefined {
    return this.#hint;
  }
}

function getHintForError(
  parsed: { errorName?: string },
): string | undefined {
  if (
    parsed.errorName === "Api:WidgetIdNotFound"
    || parsed.errorName === "WidgetIdNotFound"
  ) {
    return "You first need to publish changes to your widget configuration files before you can develop against them.\n\nSee: https://www.palantir.com/docs/foundry/custom-widgets/publish/";
  }
  return undefined;
}

/**
 * Finish the setup process by setting the widget overrides in Foundry and enabling dev mode.
 */
export async function publishDevModeSettings(
  server: ViteDevServer,
  widgetIdToOverrides: Record<string, string[]>,
  baseHref: string,
  res: ServerResponse,
): Promise<void> {
  try {
    const foundryConfig = await loadFoundryConfig("widgetSet");
    if (foundryConfig == null) {
      throw new Error(
        "foundry.config.json file not found.",
      );
    }
    const foundryUrl = isCodeWorkspacesMode(server.config.mode)
      ? getCodeWorkspacesFoundryUrl()
      : foundryConfig.foundryConfig.foundryUrl;

    const widgetSetRid = foundryConfig.foundryConfig.widgetSet.rid;
    const settingsResponse = await setWidgetSetSettings(
      foundryUrl,
      widgetSetRid,
      widgetIdToOverrides,
      baseHref,
      server.config.mode,
    );
    if (settingsResponse.status !== 200) {
      server.config.logger.warn(
        `Unable to set widget settings in Foundry: ${settingsResponse.statusText}`,
      );
      const responseContent = await settingsResponse.text();
      server.config.logger.warn(responseContent);
      throw new ResponseError(
        `Unable to set widget settings in Foundry: ${settingsResponse.statusText}`,
        responseContent,
      );
    }

    const enableResponse = await enableDevMode(
      foundryUrl,
      server.config.mode,
    );
    if (enableResponse.status !== 200) {
      server.config.logger.warn(
        `Unable to enable dev mode in Foundry: ${enableResponse.statusText}`,
      );
      const responseContent = await enableResponse.text();
      server.config.logger.warn(responseContent);
      throw new ResponseError(
        `Unable to enable dev mode in Foundry: ${enableResponse.statusText}`,
        responseContent,
      );
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      status: "success",
      // In Code Workspaces the preview UI automatically handles this redirect
      redirectUrl: isCodeWorkspacesMode(server.config.mode)
        ? null
        : `${foundryUrl}/workspace/custom-widgets/preview/${widgetSetRid}`,
    }));
  } catch (error: unknown) {
    server.config.logger.error(
      `Failed to start dev mode: ${(error as Error)}\n\n${inspect(error)}`,
    );
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 500;
    res.end(
      JSON.stringify(
        {
          status: "error",
          error: inspect(error),
          response: error instanceof ResponseError ? error.response : undefined,
          hint: error instanceof ResponseError ? error.hint : undefined,
        },
      ),
    );
  }
}
