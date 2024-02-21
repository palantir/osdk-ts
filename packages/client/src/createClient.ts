/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ActionDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  ObjectTypeKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { ActionSignatureFromDef } from "./actions/Actions.js";
import {
  createActionInvoker,
  createOldActionInvoker,
} from "./actions/createActionInvoker.js";
import type { Client, FutureClient } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import type {
  MinimalClient,
  MinimalClientParams,
} from "./MinimalClientContext.js";
import {
  createBaseObjectSet,
  createObjectSet,
} from "./objectSet/createObjectSet.js";
import type { ObjectSet, ObjectSetFactory } from "./objectSet/ObjectSet.js";
import { createObjectSetCreator } from "./ObjectSetCreator.js";
import { OntologyProviders } from "./ontology/index.js";
import type { OntologyProviderFactory } from "./ontology/OntologyProvider.js";

function createFutureClientPlus(
  metadata: MinimalClientParams["metadata"],
  stack: string,
  tokenProvider: () => Promise<string> | string,
  ontologyProviderFactory: OntologyProviderFactory =
    OntologyProviders.CachingOnDemand,
  fetchFn: typeof globalThis.fetch = fetch,
): [MinimalClient, FutureClient] {
  const clientCtx: MinimalClient = createMinimalClient(
    metadata,
    stack,
    tokenProvider,
    ontologyProviderFactory,
    fetchFn,
  );

  function clientFn<
    T extends ObjectOrInterfaceDefinition | ActionDefinition<any, any, any>,
  >(o: T): T extends ObjectOrInterfaceDefinition ? ObjectSet<T>
    : T extends ActionDefinition<any, any, any> ? ActionSignatureFromDef<T>
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      clientCtx.ontology.provider.maybeSeed(o);
      return createBaseObjectSet(o, clientCtx) as any;
    } else if (o.type === "action") {
      clientCtx.ontology.provider.maybeSeed(o);
      return createActionInvoker(clientCtx, o) as ActionSignatureFromDef<any>;
    } else {
      throw new Error("Unknown definition: " + JSON.stringify(o));
    }
  }

  return [clientCtx, clientFn];
}

// Once we migrate everyone off of using the deprecated parts of `Client` we can rename this to `createClient`.
// For now, its a way to use JUST the new client
export function createFutureClient(
  metadata: MinimalClientParams["metadata"],
  stack: string,
  tokenProvider: () => Promise<string> | string,
  ontologyProviderFactory: OntologyProviderFactory =
    OntologyProviders.CachingOnDemand,
  fetchFn: typeof globalThis.fetch = fetch,
): FutureClient {
  // When `createFutureClient` gets renamed to `createClient`, we
  // should inline this call as its no longer needed to be separate.
  return createFutureClientPlus(
    metadata,
    stack,
    tokenProvider,
    ontologyProviderFactory,
    fetchFn,
  )[1];
}

export function createClient<O extends OntologyDefinition<any>>(
  ontology: O,
  stack: string,
  tokenProvider: () => Promise<string> | string,
  ontologyProviderFactory: OntologyProviderFactory =
    OntologyProviders.CachingOnDemand,
  fetchFn: typeof globalThis.fetch = fetch,
): Client<O> {
  const [clientCtx, clientFn] = createFutureClientPlus(
    ontology.metadata,
    stack,
    tokenProvider,
    ontologyProviderFactory,
    fetchFn,
  );

  const objectSetFactory: ObjectSetFactory<O> = <
    K extends ObjectOrInterfaceKeysFrom<O>,
  >(type: K) =>
    createBaseObjectSet<ObjectOrInterfaceDefinitionFrom<O, K>>(
      (ontology["objects"][type]
        ?? ontology["interfaces"]?.[type]) as ObjectOrInterfaceDefinitionFrom<
          O,
          K
        >,
      clientCtx,
    );

  const oldActionInvoker = createOldActionInvoker(clientCtx, ontology);

  const client: Client<O> = Object.defineProperties(
    clientFn as Client<O>,
    {
      objectSet: { get: () => objectSetFactory },
      objects: { get: () => createObjectSetCreator(client, ontology) },
      actions: {
        get: () => oldActionInvoker,
      },
      __UNSTABLE_preexistingObjectSet: {
        get: () =>
        <const K extends ObjectTypeKeysFrom<O>>(
          objectType: K,
          rid: string,
        ) => {
          return createObjectSet(
            ontology["interfaces"]?.[objectType]
              ?? ontology["objects"][objectType],
            clientCtx,
            {
              type: "intersect",
              objectSets: [
                {
                  type: "base",
                  objectType: objectType as K & string,
                },
                {
                  type: "reference",
                  reference: rid,
                },
              ],
            },
          );
        },
      },
    } satisfies Record<keyof Client<any>, PropertyDescriptor>,
  );

  return client;
}
