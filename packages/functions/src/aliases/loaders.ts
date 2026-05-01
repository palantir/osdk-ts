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
  EgressConnection,
  EgressConnectionValue,
  Model,
  ModelResource,
  ModelValue,
  ResolvedAliases,
  ResourcesFile,
  Source,
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
    custom: loadCustom(aliasesFile.defaults.custom),
    models: loadPublishedModels(aliasesFile.defaults.models),
    sources: loadPublishedSources(aliasesFile.defaults.egressConnections),
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
    custom: loadCustom(resourcesFile.resources.custom),
    models: loadPreviewModels(resourcesFile.resources.models),
    sources: loadPreviewSources(resourcesFile.egress.connections),
  };
}

function loadCustom(
  custom: Record<string, string>,
): Record<string, string> {
  return custom;
}

function loadPublishedModels(
  models: Record<string, ModelValue>,
): Record<string, Model> {
  return Object.fromEntries<Model>(
    Object.entries(models).map((
      [alias, { id: identifier }],
    ) => [alias, identifier]),
  );
}

function loadPublishedSources(
  egressConnections: Record<string, EgressConnectionValue>,
): Record<string, Source> {
  return Object.fromEntries<Source>(
    Object.entries(egressConnections).map((
      [alias, { id: identifier }],
    ) => [alias, identifier]),
  );
}

function loadPreviewModels(
  models: ModelResource[],
): Record<string, Model> {
  return Object.fromEntries<Model>(
    models
      .filter((model): model is ModelResource & { alias: string } =>
        model.alias != null
      )
      .map(({ alias, identifier }) => [alias, identifier]),
  );
}

function loadPreviewSources(
  connections: EgressConnection[],
): Record<string, Source> {
  return Object.fromEntries<Source>(
    connections
      .filter((
        connection,
      ): connection is EgressConnection & { alias: string } =>
        connection.alias != null
      )
      .map(({ alias, rid }) => [alias, { rid }]),
  );
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
