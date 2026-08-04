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

/**
 * The object type an alias resolves to on the stack we are talking to.
 *
 * `apiName` is the "bound" name, i.e. the object type as it exists here, which
 * may differ from the "local" name that the SDK was generated with.
 */
export interface ObjectType {
  apiName: string;
  /**
   * Property api name remapping, keyed by the local (code-facing) name with the
   * bound name as the value. Properties absent from this record are not
   * remapped.
   */
  properties?: Record</* local */ string, /* bound */ string>;
}

export interface ResolvedAliases {
  custom: Record<string, string>;
  models: Record<string, Model>;
  sources: Record<string, Source>;
  datasets: Record<string, Dataset>;
  mediasets: Record<string, Mediaset>;
  streams: Record<string, Stream>;
  objects: Record<string, ObjectType>;
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

export interface ObjectTypeResource {
  identifier: ObjectTypeIdentifier;
  verbs: string[];
  alias?: string | null;
  /**
   * Property api name remapping, keyed by the local (code-facing) name.
   * Properties absent from this record are not remapped.
   */
  properties?: Record</* local */ string, ObjectTypeIdentifier>;
  /**
   * Reserved for link api name remapping (local -> bound). Not yet applied.
   */
  links?: Record</* local */ string, ObjectTypeIdentifier>;
}

export interface ResourceScopes {
  custom: Record<string, string>;
  models: ModelResource[];
  datasets: DatasetResource[];
  mediasets: MediasetResource[];
  streams: StreamResource[];
  /**
   * Optional: absent in `resources.json` files written before object type
   * aliasing existed.
   */
  objects?: ObjectTypeResource[];
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

/**
 * The "bound" object type an alias points at, i.e. its api name on this stack.
 * Unlike the other resource identifiers this is an api name rather than a rid,
 * because api names are what the OSDK puts on the wire.
 */
export interface ObjectTypeIdentifier {
  apiName: string;
}

export interface ObjectTypeValue {
  id: ObjectTypeIdentifier;
  /**
   * Property api name remapping, keyed by the local (code-facing) name.
   * Properties absent from this record are not remapped.
   */
  properties?: Record</* local */ string, ObjectTypeIdentifier>;
}

export interface DefaultAliases {
  custom: Record<string, string>;
  models: Record<string, ModelValue>;
  egressConnections: Record<string, EgressConnectionValue>;
  datasets: Record<string, DatasetValue>;
  mediasets: Record<string, MediasetValue>;
  streams: Record<string, StreamValue>;
  /**
   * Optional: absent in `aliases.json` files written before object type
   * aliasing existed.
   */
  objects?: Record<string, ObjectTypeValue>;
}

export interface AliasesFile {
  defaults: DefaultAliases;
  version: number;
}
