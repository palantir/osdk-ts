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

import type { ObjectTypeKeysFrom, OntologyDefinition } from "@osdk/api";
import { createClientContext } from "@osdk/shared.net";
import { createActionInvoker } from "./actions/createActionInvoker.js";
import type { Client } from "./Client.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSet.js";
import { createObjectSetCreator } from "./ObjectSetCreator.js";

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
    "@osdk/client/0.0.0 ()",
    fetchFn,
  );

  const objectSetFactory: ObjectSetFactory<O> = (type, opts) =>
    createObjectSet(type, clientCtx, opts);

  const client: Client<O> = Object.defineProperties(
    {} as Client<O>,
    {
      objectSet: { get: () => objectSetFactory },
      objects: { get: () => createObjectSetCreator(client) },
      actions: {
        get: () => createActionInvoker(clientCtx),
      },
      __UNSTABLE_preexistingObjectSet: {
        get: () =>
        <const K extends ObjectTypeKeysFrom<O>>(
          objectType: K,
          rid: string,
        ) => {
          return createObjectSet(objectType as K & string, clientCtx, {}, {
            type: "reference",
            reference: rid,
          });
        },
      },
    } satisfies Record<keyof Client<any>, PropertyDescriptor>,
  );

  return client;
}
