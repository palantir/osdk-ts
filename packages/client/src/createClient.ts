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
import { createClientContext } from "@osdk/shared.net";
import type { ActionSignatureFromDef } from "./actions/Actions.js";
import { createActionInvoker } from "./actions/createActionInvoker.js";
import type { Client } from "./Client.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSet, ObjectSetFactory } from "./objectSet/ObjectSet.js";
import { createObjectSetCreator } from "./ObjectSetCreator.js";
import { USER_AGENT } from "./util/UserAgent.js";

export function createClient<O extends OntologyDefinition<any>>(
  ontology: O,
  stack: string,
  tokenProvider: () => Promise<string> | string,
  fetchFn: typeof globalThis.fetch = fetch,
): Client<O> {
  const clientCtx = createClientContext<O>(
    ontology,
    stack,
    tokenProvider,
    USER_AGENT,
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

  const actionInvoker = createActionInvoker(clientCtx);

  function clientFn<
    T extends ObjectOrInterfaceDefinition | ActionDefinition<any, any>,
  >(o: T): T extends ObjectOrInterfaceDefinition ? ObjectSet<T>
    : T extends ActionDefinition<any, any> ? ActionSignatureFromDef<T>
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      return createObjectSet(o, clientCtx) as ObjectSet<any> as any;
    } else if (o.type === "action") {
      return actionInvoker[o.apiName];
    } else {
      throw new Error("Unknown definition: " + JSON.stringify(o));
    }
  }

  const client: Client<O> = Object.defineProperties(
    clientFn as Client<O>,
    {
      objectSet: { get: () => objectSetFactory },
      objects: { get: () => createObjectSetCreator(client, clientCtx) },
      actions: {
        get: () => actionInvoker,
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
