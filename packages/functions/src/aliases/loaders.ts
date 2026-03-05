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

import * as fs from "fs";
import {
  detectEnvironment,
  getAliasesFilePath,
  getResourcesFilePath,
} from "./environment.js";
import { AliasEnvironment } from "./types.js";
import type {
  AliasesFile,
  Model,
  ModelResource,
  ResolvedAliases,
  ResourcesFile,
} from "./types.js";

let cachedPublishedAliases: ResolvedAliases | undefined;

function loadPublishedAliases(): ResolvedAliases {
  if (cachedPublishedAliases !== undefined) {
    return cachedPublishedAliases;
  }
  const aliasesPath = getAliasesFilePath();
  if (!fs.existsSync(aliasesPath)) {
    throw new Error(`Aliases file not found at ${aliasesPath}`);
  }

  const data = fs.readFileSync(aliasesPath, "utf-8");
  const aliasesFile = JSON.parse(data) as AliasesFile;

  cachedPublishedAliases = {
    custom: aliasesFile.defaults.custom,
    models: Object.fromEntries<Model>(
      Object.entries(aliasesFile.defaults.models).map((
        [alias, { id: identifier }],
      ) => [alias, identifier]),
    ),
  };
  return cachedPublishedAliases;
}

function loadPreviewAliases(): ResolvedAliases {
  const resourcesPath = getResourcesFilePath();
  if (!fs.existsSync(resourcesPath)) {
    throw new Error(`Resources file not found at ${resourcesPath}`);
  }

  const data = fs.readFileSync(resourcesPath, "utf-8");
  const resourcesFile = JSON.parse(data) as ResourcesFile;

  return {
    custom: resourcesFile.resources.custom,
    models: Object.fromEntries<Model>(
      resourcesFile.resources.models
        .filter((model): model is ModelResource & { alias: string } =>
          model.alias != null
        )
        .map(({ alias, identifier }) => [alias, identifier]),
    ),
  };
}

export function resetPublishedCache(): void {
  cachedPublishedAliases = undefined;
}

export function loadResolvedAliases(): ResolvedAliases {
  const environment = detectEnvironment();
  switch (environment) {
    case AliasEnvironment.PUBLISHED:
      return loadPublishedAliases();
    case AliasEnvironment.LIVE_PREVIEW:
      return loadPreviewAliases();
  }
}
