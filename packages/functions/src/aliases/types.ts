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

export interface ResolvedAliases {
  custom: Record<string, string>;
  models: Record<string, Model>;
  sources: Record<string, Source>;
}

// Environment

export enum AliasEnvironment {
  PUBLISHED = "PUBLISHED",
  LIVE_PREVIEW = "LIVE_PREVIEW",
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

export interface ResourceScopes {
  custom: Record<string, string>;
  models: ModelResource[];
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

export interface DefaultAliases {
  custom: Record<string, string>;
  models: Record<string, ModelValue>;
  egressConnections: Record<string, EgressConnectionValue>;
}

export interface AliasesFile {
  defaults: DefaultAliases;
  version: number;
}
