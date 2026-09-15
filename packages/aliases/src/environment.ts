/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { AliasEnvironment } from "./types.js";

export const ALIASES_JSON_FILE_ENV_VAR = "ALIASES_JSON_FILE";
export const RESOURCES_JSON_FILE_ENV_VAR = "RESOURCES_JSON_FILE";

export function detectEnvironment(): AliasEnvironment {
  const aliasesFileSet = ALIASES_JSON_FILE_ENV_VAR in process.env;
  const resourcesFileSet = RESOURCES_JSON_FILE_ENV_VAR in process.env;

  if (aliasesFileSet && resourcesFileSet) {
    throw new Error(
      `Ambiguous alias configuration: both ${ALIASES_JSON_FILE_ENV_VAR} and ` +
        `${RESOURCES_JSON_FILE_ENV_VAR} are set. Only one should be configured.`,
    );
  }

  if (aliasesFileSet) {
    return AliasEnvironment.PUBLISHED;
  }
  if (resourcesFileSet) {
    return AliasEnvironment.LIVE_PREVIEW;
  }

  throw new Error(
    `Unknown alias environment: neither ${ALIASES_JSON_FILE_ENV_VAR} nor ${RESOURCES_JSON_FILE_ENV_VAR} is set.`,
  );
}

export function getAliasesFilePath(): string {
  const path = process.env[ALIASES_JSON_FILE_ENV_VAR];
  if (path == null) {
    throw new Error(
      `${ALIASES_JSON_FILE_ENV_VAR} environment variable is not set`,
    );
  }
  return path;
}

export function getResourcesFilePath(): string {
  const path = process.env[RESOURCES_JSON_FILE_ENV_VAR];
  if (path == null) {
    throw new Error(
      `${RESOURCES_JSON_FILE_ENV_VAR} environment variable is not set`,
    );
  }
  return path;
}
