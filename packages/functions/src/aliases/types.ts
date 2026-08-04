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

/**
 * The query an alias resolves to on the stack we are talking to.
 *
 * Unlike object types there is nothing inside a query to remap - parameter and
 * output names are unaffected - so only the api name is carried.
 */
export interface Query {
  apiName: string;
}

export interface ResolvedAliases {
  custom: Record<string, string>;
  models: Record<string, Model>;
  sources: Record<string, Source>;
  datasets: Record<string, Dataset>;
  mediasets: Record<string, Mediaset>;
  streams: Record<string, Stream>;
  objects: Record<string, ObjectType>;
  queries: Record<string, Query>;
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

/**
 * An entry in `resources.objects`.
 *
 * Note that the bound api name is `apiName`, a sibling of `identifier` - the
 * `identifier` holds the object type's rid, consistently with every other
 * resource kind. The platform writes an entry for every property, including ones
 * whose name is unchanged.
 */
export interface ObjectTypeResource {
  identifier: ObjectTypeIdentifier;
  verbs: string[];
  /** The local (code-facing) name; the key this entry is looked up by. */
  alias?: string | null;
  /** The object type's api name on this stack. */
  apiName?: string;
  /** Property api names on this stack, keyed by the local name. */
  properties?: Record</* local */ string, PropertyIdentifier>;
}

/** The bound api name of a single property, as written in `properties`. */
export interface PropertyIdentifier {
  apiName: string;
}

/**
 * An entry in `resources.queries`. Same shape as {@link ObjectTypeResource}: the
 * bound api name sits alongside `identifier`, which carries the function rid and
 * its version.
 */
export interface QueryResource {
  identifier: QueryIdentifier;
  verbs: string[];
  /** The local (code-facing) name; the key this entry is looked up by. */
  alias?: string | null;
  /** The query's api name on this stack. */
  apiName?: string;
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
  /**
   * Optional: absent in `resources.json` files written before query aliasing
   * existed.
   */
  queries?: QueryResource[];
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

export interface ObjectTypeIdentifier {
  rid: string;
}

/**
 * An entry in `defaults.objects`.
 *
 * The api name is a sibling of `id`, mirroring `resources.json`, where the bound
 * `apiName` sits alongside `identifier`. Unverified against a real `aliases.json`;
 * the loader raises a clear error if the api name turns out to live elsewhere.
 */
export interface ObjectTypeValue {
  id: ObjectTypeIdentifier;
  /** The object type's api name on this stack. */
  apiName?: string;
  /** Property api names on this stack, keyed by the local name. */
  properties?: Record</* local */ string, PropertyIdentifier>;
}

export interface QueryIdentifier {
  rid: string;
  /**
   * The version of the function this alias points at. Not currently applied - the
   * version used on the wire comes from the generated query definition.
   */
  version?: string;
}

export interface QueryValue {
  id: QueryIdentifier;
  /** The query's api name on this stack. See {@link ObjectTypeValue}. */
  apiName?: string;
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
  /**
   * Optional: absent in `aliases.json` files written before query aliasing
   * existed.
   */
  queries?: Record<string, QueryValue>;
}

export interface AliasesFile {
  defaults: DefaultAliases;
  version: number;
}
