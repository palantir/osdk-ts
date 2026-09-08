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

import type { LinkTypeApiNamesFor, PrimaryKeyType } from "@osdk/api";
import type { Client, ObjectTypeDefinition } from "@osdk/client";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import type {
  LinkTargets,
  SeedFunction,
  SeedOutput,
  SeedProps,
  SeedRef,
} from "@osdk/seed-helpers";
import type { MockClient } from "@osdk/unit-testing";

export type IntegrationClient = Client & {
  // local ontology does not have the ability to support function queries at the moment.
  whenQuery: MockClient["whenQuery"];
  clearStubs(): MockClient["clearStubs"];
};

export interface IntegrationClientConfig {
  baseUrl: string;
  metadata: OntologyFullMetadata;
  caCertPath?: string;
}

export interface IntegrationServerConfig {
  /** Path to a prebuilt ontology metadata JSON. */
  metadata: OntologyFullMetadata;
  /** Path to the `foundry` binary. Defaults to `foundry` on `PATH`. */
  foundryCliPath?: string;
  /**
   * Directory to create this server's run directory in. Each server gets its
   * own `.test-run-*` beneath it, removed on {@link IntegrationServer.stop}, so
   * servers sharing a `projectPath` stay isolated. Must already exist; defaults
   * to the working directory.
   */
  projectPath?: string;
}

export interface IntegrationServer {
  start(): Promise<void>;
  stop(): Promise<void>;
  getOntologyUrl(): string | undefined;
  getSeedClient(): Promise<SeedClient>;
  getClient(): Promise<IntegrationClient>;
}

export type SeedClient = {
  /**
   * Transactional interface to SeedBuilder
   * Applies changes if function is provided, calls .addAll(seed) if SeedOutput is provided.
   */
  <T = void>(seed: SeedFunction<T> | SeedOutput): Promise<T>;
  /**
   * Returns a reference to an object already in the seed, or `undefined` if none
   * exists. Read-only: nothing is applied to the server.
   * @param o Object type definition
   * @param primaryKey Primary key value of the object
   * @returns Reference to the object, or `undefined` if not found
   */
  ref<Q extends ObjectTypeDefinition>(
    o: Q,
    primaryKey: PrimaryKeyType<Q>,
  ): SeedRef<Q> | undefined;
  /**
   * Replaces the entire seed with `seed` and applies it, discarding everything
   * accumulated so far. Clears the seed when called with no argument.
   * @param seed Seed output to reset to, or `undefined` to clear
   */
  set(seed?: SeedOutput): Promise<void>;
  /**
   * Merges an existing seed output into the current seed and applies it.
   * @param seed Seed output to merge in; must match the metadata the client was created with
   */
  addAll(seed: SeedOutput): Promise<void>;
  /**
   * Creates an object of the given type and applies the seed.
   * @param o Object type definition
   * @param props Object properties, including its primary key
   * @returns Reference to the created object
   * @throws {Error} if an object of that type already exists with the same primary key
   */
  create<Q extends ObjectTypeDefinition>(
    o: Q,
    props: SeedProps<Q>,
  ): Promise<SeedRef<Q>>;
  /**
   * Merges `props` into the referenced object and applies the seed. Properties not
   * included are left unchanged; the object is created if it does not yet exist.
   * @param ref Reference to the object to update
   * @param props Partial object properties to merge in, excluding the primary key
   * @returns The same reference passed in
   */
  update<Q extends ObjectTypeDefinition>(
    ref: SeedRef<Q>,
    props: Partial<
      Omit<SeedProps<Q>, Exclude<Q["primaryKeyApiName"], undefined>>
    >,
  ): Promise<SeedRef<Q>>;
  /**
   * Removes the referenced object from the seed and applies it. No-op if the object
   * does not exist.
   * @param ref Reference to the object to delete
   */
  delete<Q extends ObjectTypeDefinition>(ref: SeedRef<Q>): Promise<void>;
  /**
   * Links the source object to one or more targets via the given link type and
   * applies the seed. Re-adding an existing link is a no-op.
   * @param source Reference to the source object
   * @param apiName Link type API name
   * @param target Reference (or references) to the target object(s)
   */
  link<Q extends ObjectTypeDefinition, A extends LinkTypeApiNamesFor<Q>>(
    source: SeedRef<Q>,
    apiName: A,
    target: LinkTargets<Q, A>,
  ): Promise<void>;
  /**
   * Removes links from the source object to the given targets via the link type and
   * applies the seed. No-op if no matching links exist.
   * @param source Reference to the source object
   * @param apiName Link type API name
   * @param target Reference (or references) to the target object(s)
   */
  unlink<Q extends ObjectTypeDefinition, A extends LinkTypeApiNamesFor<Q>>(
    source: SeedRef<Q>,
    apiName: A,
    target: LinkTargets<Q, A>,
  ): Promise<void>;
};
