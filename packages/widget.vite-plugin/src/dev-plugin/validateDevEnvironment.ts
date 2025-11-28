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

import color from "picocolors";
import type { Logger } from "vite";
import { isCodeWorkspacesMode } from "./codeWorkspacesMode.js";

const FOUNDRY_CONTAINER_RUNTIME_TYPE = "FOUNDRY_CONTAINER_RUNTIME_TYPE";
const CODE_WORKSPACE_RUNTIME = "CODE_WORKSPACE";

export function warnIfWrongDevCommand(
  mode: string | undefined,
  logger: Logger,
): void {
  const isInCodeWorkspacesEnv = isCodeWorkspacesEnvironment();
  const isUsingCodeWorkspacesMode = isCodeWorkspacesMode(mode);

  if (isInCodeWorkspacesEnv && !isUsingCodeWorkspacesMode) {
    logger.warn(
      color.yellow(
        `\n⚠️  You appear to be running in a Code Workspaces environment but are using "npm run dev".\n`
          + `   You should probably be using "npm run dev:remote" instead.\n`,
      ),
    );
  } else if (!isInCodeWorkspacesEnv && isUsingCodeWorkspacesMode) {
    logger.warn(
      color.yellow(
        `\n⚠️  You are using "npm run dev:remote" but do not appear to be in a Code Workspaces environment.\n`
          + `   You should probably be using "npm run dev" instead.\n`,
      ),
    );
  }
}

function isCodeWorkspacesEnvironment(): boolean {
  return process.env[FOUNDRY_CONTAINER_RUNTIME_TYPE] === CODE_WORKSPACE_RUNTIME;
}
