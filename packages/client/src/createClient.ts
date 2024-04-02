/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  ObjectTypeDefinition,
  ObjectTypeKeysFrom,
  OmniResource,
  OntologyDefinition,
} from "@osdk/api";
import type { OntologyMetadata } from "../../api/build/types/ontology/OntologyMetadata.js";
import type { ActionSignatureFromDef } from "./actions/Actions.js";
import {
  createActionInvoker,
  createOldActionInvoker,
} from "./actions/createActionInvoker.js";
import type { Client, FutureClient } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import type {
  MinimalClient,
  MinimalClientMetadata,
  MinimalClientParams,
} from "./MinimalClientContext.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type {
  MinimalObjectSet,
  ObjectSet,
  ObjectSetFactory,
} from "./objectSet/ObjectSet.js";
import { createObjectSetCreator } from "./ObjectSetCreator.js";
import type { OntologyCachingOptions } from "./ontology/StandardOntologyProvider.js";
import type { SatisfiesSemver, VersionString } from "./SatisfiesSemver.js";

function createFutureClientPlus(
  metadata: MinimalClientParams["metadata"],
  stack: string,
  tokenProvider: () => Promise<string> | string,
  ontologyCachingOptions: OntologyCachingOptions = {},
  fetchFn: typeof globalThis.fetch = fetch,
): [MinimalClient, FutureClient] {
  const clientCtx: MinimalClient = createMinimalClient(
    metadata,
    stack,
    tokenProvider,
    ontologyCachingOptions,
    fetchFn,
  );

  function clientFn<
    T extends
      | ObjectOrInterfaceDefinition
      | ActionDefinition<any, any, any>
      | OmniResource<any>,
  >(o: T): T extends ObjectTypeDefinition<any> ? ObjectSet<T>
    : T extends InterfaceDefinition<any, any> ? MinimalObjectSet<T>
    : T extends ActionDefinition<any, any, any> ? ActionSignatureFromDef<T>
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      clientCtx.ontology.provider.maybeSeed(o);
      return createObjectSet(o, clientCtx) as any;
    } else if (o.type === "action") {
      clientCtx.ontology.provider.maybeSeed(o);
      return createActionInvoker(clientCtx, o) as ActionSignatureFromDef<any>;
    } else {
      throw new Error("not implemented");
    }
  }

  return [clientCtx, clientFn as any];
}

// Once we migrate everyone off of using the deprecated parts of `Client` we can rename this to `createClient`.
// For now, its a way to use JUST the new client
export function createFutureClient<V extends VersionString<any, any, any>>(
  metadata: SatisfiesSemver<V, MaxOsdkVersion> extends true
    ? MinimalClientMetadata<V>
    : MinimalClientMetadata<MaxOsdkVersion> & {
      [ErrorMessage]:
        `Your SDK requires a semver compatible version with ${V}. You have ${MaxOsdkVersion}. Update your package.json`;
    },
  stack: string,
  tokenProvider: () => Promise<string> | string,
  ontologyCachingOptions: OntologyCachingOptions = {},
  fetchFn: typeof globalThis.fetch = fetch,
): SatisfiesSemver<V, MaxOsdkVersion> extends true ? FutureClient
  : never
{
  // When `createFutureClient` gets renamed to `createClient`, we
  // should inline this call as its no longer needed to be separate.
  return createFutureClientPlus(
    metadata as MinimalClientMetadata<V>,
    stack,
    tokenProvider,
    ontologyCachingOptions,
    fetchFn,
  )[1] as any;
}

function isOntologyMetadata(
  ontology: OntologyDefinition<any> | OntologyMetadata<any>,
): ontology is MinimalClientMetadata<any> {
  return "ontologyRid" in ontology || "ontologyApiName" in ontology;
}

const MaxOsdkVersion = "0.14.0";
export type MaxOsdkVersion = typeof MaxOsdkVersion;
const ErrorMessage = Symbol("ErrorMessage");

export function createClient<
  O extends OntologyDefinition<any>,
  V extends VersionString<any, any, any>,
>(
  ontology:
    | (SatisfiesSemver<V, MaxOsdkVersion> extends true
      ? MinimalClientMetadata<V>
      : MinimalClientMetadata<MaxOsdkVersion> & {
        [ErrorMessage]:
          `Your SDK requires a semver compatible version with ${V}. You have ${MaxOsdkVersion}. Update your package.json`;
      })
    | O,
  stack: string,
  tokenProvider: () => Promise<string> | string,
  ontologyCachingOptions: OntologyCachingOptions = {},
  fetchFn: typeof globalThis.fetch = fetch,
): VersionString<any, any, any> extends V ? Client<O>
  : SatisfiesSemver<V, MaxOsdkVersion> extends true ? FutureClient
  : never
{
  if (isOntologyMetadata(ontology)) {
    // typescript cant figure out the return types when you have a conditional type
    return createFutureClient(
      ontology as MinimalClientMetadata<MaxOsdkVersion>,
      stack,
      tokenProvider,
      ontologyCachingOptions,
      fetchFn,
    ) as any;
  }

  const [clientCtx, clientFn] = createFutureClientPlus(
    ontology.metadata as MinimalClientMetadata<MaxOsdkVersion>,
    stack,
    tokenProvider,
    ontologyCachingOptions,
    fetchFn,
  );

  const objectSetFactory: ObjectSetFactory<O> = <
    K extends ObjectOrInterfaceKeysFrom<O>,
  >(type: K) =>
    createObjectSet<ObjectOrInterfaceDefinitionFrom<O, K>>(
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
      ctx: {
        value: clientCtx,
      },
    } satisfies Record<keyof Client<any>, PropertyDescriptor>,
  );

  // typescript cant figure out the return types when you have a conditional type
  return client as any;
}
