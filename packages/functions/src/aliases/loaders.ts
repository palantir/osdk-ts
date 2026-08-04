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
  Dataset,
  DatasetResource,
  DatasetValue,
  EgressConnection,
  EgressConnectionValue,
  Mediaset,
  MediasetResource,
  MediasetValue,
  Model,
  ModelResource,
  ModelValue,
  ObjectType,
  ObjectTypeIdentifier,
  ObjectTypeResource,
  ObjectTypeValue,
  Query,
  QueryResource,
  QueryValue,
  ResolvedAliases,
  ResourcesFile,
  Source,
  Stream,
  StreamResource,
  StreamValue,
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
    datasets: loadPublishedDatasets(aliasesFile.defaults.datasets),
    mediasets: loadPublishedMediasets(aliasesFile.defaults.mediasets),
    streams: loadPublishedStreams(aliasesFile.defaults.streams),
    objects: loadPublishedObjects(aliasesFile.defaults.objects),
    queries: loadPublishedQueries(aliasesFile.defaults.queries),
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
    datasets: loadPreviewDatasets(resourcesFile.resources.datasets),
    mediasets: loadPreviewMediasets(resourcesFile.resources.mediasets),
    streams: loadPreviewStreams(resourcesFile.resources.streams),
    objects: loadPreviewObjects(resourcesFile.resources.objects),
    queries: loadPreviewQueries(resourcesFile.resources.queries),
  };
}

function loadCustom(custom: Record<string, string>): Record<string, string> {
  return custom;
}

function loadPublishedModels(
  models: Record<string, ModelValue>,
): Record<string, Model> {
  return Object.fromEntries<Model>(
    Object.entries(models).map(([alias, { id: identifier }]) => [
      alias,
      identifier,
    ]),
  );
}

function loadPublishedSources(
  egressConnections: Record<string, EgressConnectionValue>,
): Record<string, Source> {
  return Object.fromEntries<Source>(
    Object.entries(egressConnections).map(([alias, { id: identifier }]) => [
      alias,
      identifier,
    ]),
  );
}

function loadPublishedDatasets(
  datasets: Record<string, DatasetValue>,
): Record<string, Dataset> {
  return Object.fromEntries<Dataset>(
    Object.entries(datasets).map(([alias, { id: identifier }]) => [
      alias,
      identifier,
    ]),
  );
}

function loadPublishedMediasets(
  mediasets: Record<string, MediasetValue>,
): Record<string, Mediaset> {
  return Object.fromEntries<Mediaset>(
    Object.entries(mediasets).map(([alias, { id: identifier }]) => [
      alias,
      identifier,
    ]),
  );
}

function loadPublishedStreams(
  streams: Record<string, StreamValue>,
): Record<string, Stream> {
  return Object.fromEntries<Stream>(
    Object.entries(streams).map(([alias, { id: identifier }]) => [
      alias,
      identifier,
    ]),
  );
}

function loadPreviewModels(models: ModelResource[]): Record<string, Model> {
  return Object.fromEntries<Model>(
    models
      .filter(
        (model): model is ModelResource & { alias: string } =>
          model.alias != null,
      )
      .map(({ alias, identifier }) => [alias, identifier]),
  );
}

function loadPreviewSources(
  connections: EgressConnection[],
): Record<string, Source> {
  return Object.fromEntries<Source>(
    connections
      .filter(
        (connection): connection is EgressConnection & { alias: string } =>
          connection.alias != null,
      )
      .map(({ alias, rid }) => [alias, { rid }]),
  );
}

function loadPreviewDatasets(
  datasets: DatasetResource[],
): Record<string, Dataset> {
  return Object.fromEntries<Dataset>(
    datasets
      .filter(
        (dataset): dataset is DatasetResource & { alias: string } =>
          dataset.alias != null,
      )
      .map(({ alias, identifier }) => [alias, identifier]),
  );
}

function loadPreviewMediasets(
  mediasets: MediasetResource[],
): Record<string, Mediaset> {
  return Object.fromEntries<Mediaset>(
    mediasets
      .filter(
        (mediaset): mediaset is MediasetResource & { alias: string } =>
          mediaset.alias != null,
      )
      .map(({ alias, identifier }) => [alias, identifier]),
  );
}

/**
 * Flattens the `{ apiName }` identifiers of a property remapping into plain
 * bound names. Returns undefined when there is nothing to remap, so the alias
 * payload stays absent rather than carrying an empty record.
 */
function loadObjectProperties(
  properties: Record<string, ObjectTypeIdentifier> | undefined,
): Record<string, string> | undefined {
  if (properties == null) {
    return undefined;
  }
  const entries = Object.entries(properties);
  if (entries.length === 0) {
    return undefined;
  }
  return Object.fromEntries(
    entries.map(([local, { apiName }]) => [local, apiName]),
  );
}

function loadPublishedObjects(
  objects: Record<string, ObjectTypeValue> | undefined,
): Record<string, ObjectType> {
  return Object.fromEntries<ObjectType>(
    Object.entries(objects ?? {}).map(([alias, { id, properties }]) => {
      const loaded = loadObjectProperties(properties);
      return [
        alias,
        { apiName: id.apiName, ...(loaded != null && { properties: loaded }) },
      ];
    }),
  );
}

function loadPreviewObjects(
  objects: ObjectTypeResource[] | undefined,
): Record<string, ObjectType> {
  return Object.fromEntries<ObjectType>(
    (objects ?? [])
      .filter(
        (object): object is ObjectTypeResource & { alias: string } =>
          object.alias != null,
      )
      .map(({ alias, identifier, properties }) => {
        const loaded = loadObjectProperties(properties);
        return [
          alias,
          {
            apiName: identifier.apiName,
            ...(loaded != null && { properties: loaded }),
          },
        ];
      }),
  );
}

function loadPublishedQueries(
  queries: Record<string, QueryValue> | undefined,
): Record<string, Query> {
  return Object.fromEntries<Query>(
    Object.entries(queries ?? {}).map(([alias, { id: identifier }]) => [
      alias,
      identifier,
    ]),
  );
}

function loadPreviewQueries(
  queries: QueryResource[] | undefined,
): Record<string, Query> {
  return Object.fromEntries<Query>(
    (queries ?? [])
      .filter(
        (query): query is QueryResource & { alias: string } =>
          query.alias != null,
      )
      .map(({ alias, identifier }) => [alias, identifier]),
  );
}

function loadPreviewStreams(streams: StreamResource[]): Record<string, Stream> {
  return Object.fromEntries<Stream>(
    streams
      .filter(
        (stream): stream is StreamResource & { alias: string } =>
          stream.alias != null,
      )
      .map(({ alias, identifier }) => [alias, identifier]),
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
