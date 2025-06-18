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

import fs from "fs";
import { safeGetEnvVar } from "../common/safeGetEnvVar.js";

const CODE_WORKSPACES = "code-workspaces";

// Environment variable names
const CODE_WORKSPACES_TOKEN_PATH = "FOUNDRY_PROXY_TOKEN";
const FOUNDRY_PROXY_URL = "FOUNDRY_PROXY_URL";
const DEV_SERVER_DOMAIN = "DEV_SERVER_DOMAIN";
const DEV_SERVER_BASE_PATH = "DEV_SERVER_BASE_PATH";

export function isCodeWorkspacesMode(mode: string | undefined): boolean {
  return mode === CODE_WORKSPACES;
}

export function getCodeWorkspacesFoundryUrl(): string {
  return `https://${
    safeGetEnvVar(
      process.env,
      FOUNDRY_PROXY_URL,
      "This value is required when running dev mode in Code Workspaces mode.",
    )
  }`;
}

export function getCodeWorkspacesBaseHref(): string {
  const devServerDomain = safeGetEnvVar(
    process.env,
    DEV_SERVER_DOMAIN,
    "This value is required when running dev mode in Code Workspaces mode.",
  );
  const devServerPath = safeGetEnvVar(
    process.env,
    DEV_SERVER_BASE_PATH,
    "This value is required when running dev mode in Code Workspaces mode.",
  );
  return `https://${devServerDomain}${devServerPath}`;
}

/**
 * Read the token value from the file specified in the environment variable. The value within this
 * file could change over the lifetime of the workspace container.
 */
export function getCodeWorkspacesFoundryToken(): string {
  const tokenFilePath = safeGetEnvVar(
    process.env,
    CODE_WORKSPACES_TOKEN_PATH,
    "This value is required when running dev mode in Code Workspaces mode.",
  );
  try {
    return fs.readFileSync(tokenFilePath, "utf8");
  } catch (err) {
    throw new Error(
      `Failed to read Foundry token from '${tokenFilePath}': ${
        (err as Error).message
      }`,
    );
  }
}
