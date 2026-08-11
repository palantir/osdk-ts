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

import { AsyncLocalStorage } from "node:async_hooks";

import type { Client, PlatformClient } from "@osdk/client";

/**
 * The clients the platform injected into an invocation.
 */
export interface Clients {
  /** Only available if an ontology has been imported. */
  readonly client?: Client;
  readonly platformClient: PlatformClient;
}

const storage = new AsyncLocalStorage<Clients>();

/**
 * Makes `clients` the clients that `getClient` and `getPlatformClient` return for the duration of
 * `run`.
 */
export function withClients<T>(
  clients: Clients,
  run: () => Promise<T>,
): Promise<T> {
  return storage.run(clients, run);
}

/**
 * The Platform SDK client for the current invocation.
 */
export function getPlatformClient(): PlatformClient {
  return currentClients().platformClient;
}

/**
 * The Ontology SDK client for the current invocation. Throws if no ontology has been imported into
 * the repository.
 */
export function getClient(): Client {
  const { client } = currentClients();
  if (client === undefined) {
    throw new Error(
      "No Ontology SDK client is available. Import an Ontology into this repository to use " +
        "getClient(), or use getPlatformClient() for the platform APIs.",
    );
  }
  return client;
}

function currentClients(): Clients {
  const clients = storage.getStore();
  if (clients === undefined) {
    throw new Error(
      "Clients are only available while a session is running. getClient() and " +
        "getPlatformClient() read what the platform injected into the current invocation, so " +
        "they cannot be called at module load time, or from work that outlives the invocation " +
        "that started it.",
    );
  }
  return clients;
}
