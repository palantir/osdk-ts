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

// Types relevant to OSDK APIs

export type Custom = string & { readonly __brand: "Custom" };

export interface Model {
  rid: string;
}

export interface Source {
  rid: string;
}

export interface Dataset {
  rid: string;
}

export interface Mediaset {
  rid: string;
}

export interface Stream {
  rid: string;
}

export interface ResolvedAliases {
  custom: Record<string, string>;
  models: Record<string, Model>;
  sources: Record<string, Source>;
  datasets: Record<string, Dataset>;
  mediasets: Record<string, Mediaset>;
  streams: Record<string, Stream>;
}

// Environment

export enum AliasEnvironment {
  PUBLISHED = "PUBLISHED",
  LIVE_PREVIEW = "LIVE_PREVIEW",
  // Dev Console applications run in the browser, where there is no filesystem
  // or process.env. Resolved aliases are fetched from the served deployment
  // config file instead. Use the browser entry point, "@osdk/aliases".
  BROWSER = "BROWSER",
}

// Browser mode types (deployment.config.json)

/**
 * Shape of the deployment config file that Foundry website hosting serves at
 * the browser entry point's default path. It is a flat map of
 * strings; resolved custom aliases are packed under `aliases` as a stringified
 * JSON object (a `Record<string, string>`) so they cannot collide with the
 * reserved system keys.
 *
 * This is the PRODUCTION shape, written at Marketplace install time and
 * therefore carrying the installer's resolved values.
 */
export interface DeploymentConfig {
  clientId?: string;
  redirectUrl?: string;
  foundryUrl?: string;
  ontologyRid?: string;
  ontologyApiName?: string;
  /** Stringified JSON `Record<string, string>` of resolved custom alias values. */
  aliases?: string;
}

/**
 * Shape of the author-maintained declaration file (`public/resources.json`).
 * This is the DEVELOPMENT shape: there is no installer locally, so the values
 * here are the developer's declared defaults. `description` and `required` are
 * consumed at packaging time and are irrelevant to the browser runtime.
 */
export interface AliasDeclarationsFile {
  aliases?: {
    custom?: Record<
      string,
      { value?: string; description?: string; required?: boolean }
    >;
  };
}

// Live preview mode types (resources.json)

export interface ModelResource {
  identifier: ModelIdentifier;
  verbs: string[];
  alias?: string | null;
}

export interface EgressConnection {
  rid: string;
  alias?: string | null;
}

export interface DatasetResource {
  identifier: DatasetIdentifier;
  verbs: string[];
  alias?: string | null;
}

export interface MediasetResource {
  identifier: MediasetIdentifier;
  verbs: string[];
  alias?: string | null;
}

export interface StreamResource {
  identifier: StreamIdentifier;
  verbs: string[];
  alias?: string | null;
}

export interface ResourceScopes {
  custom: Record<string, string>;
  models: ModelResource[];
  datasets: DatasetResource[];
  mediasets: MediasetResource[];
  streams: StreamResource[];
}

export interface FunctionEgress {
  connections: EgressConnection[];
}

export interface ResourcesFile {
  resources: ResourceScopes;
  egress: FunctionEgress;
}

// Published mode types (aliases.json)

export interface ModelIdentifier {
  rid: string;
}

export interface ModelValue {
  id: ModelIdentifier;
}

export interface ConnectionIdentifier {
  rid: string;
}

export interface EgressConnectionValue {
  id: ConnectionIdentifier;
}

export interface DatasetIdentifier {
  rid: string;
}

export interface DatasetValue {
  id: DatasetIdentifier;
}

export interface MediasetIdentifier {
  rid: string;
}

export interface MediasetValue {
  id: MediasetIdentifier;
}

export interface StreamIdentifier {
  rid: string;
}

export interface StreamValue {
  id: StreamIdentifier;
}

export interface DefaultAliases {
  custom: Record<string, string>;
  models: Record<string, ModelValue>;
  egressConnections: Record<string, EgressConnectionValue>;
  datasets: Record<string, DatasetValue>;
  mediasets: Record<string, MediasetValue>;
  streams: Record<string, StreamValue>;
}

export interface AliasesFile {
  defaults: DefaultAliases;
  version: number;
}
