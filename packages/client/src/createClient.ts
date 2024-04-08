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
  ObjectTypeDefinition,
} from "@osdk/api";
import type { ActionSignatureFromDef } from "./actions/Actions.js";
import { createActionInvoker } from "./actions/createActionInvoker.js";
import type { Client } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { MinimalObjectSet, ObjectSet } from "./objectSet/ObjectSet.js";

export function createClient(
  stack: string,
  ontologyRid: string,
  tokenProvider: () => Promise<string> | string,
  HOLD: {} = {},
  fetchFn: typeof globalThis.fetch = fetch,
): Client {
  const clientCtx: MinimalClient = createMinimalClient(
    {
      userAgent: `@osdk/client/${process.env.PACKAGE_CLIENT_VERSION ?? "dev"}`,
      ontologyRid,
    },
    stack,
    tokenProvider,
    {},
    fetchFn,
  );

  function clientFn<
    T extends
      | ObjectOrInterfaceDefinition
      | ActionDefinition<any, any, any>,
  >(o: T): T extends ObjectTypeDefinition<any> ? ObjectSet<T>
    : T extends InterfaceDefinition<any, any> ? MinimalObjectSet<T>
    : T extends ActionDefinition<any, any, any> ? ActionSignatureFromDef<T>
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      clientCtx.ontologyProvider.maybeSeed(o);
      return createObjectSet(o, clientCtx) as any;
    } else if (o.type === "action") {
      clientCtx.ontologyProvider.maybeSeed(o);
      return createActionInvoker(clientCtx, o) as ActionSignatureFromDef<any>;
    } else {
      throw new Error("not implemented");
    }
  }

  const client: Client = Object.defineProperties<Client>(
    clientFn as Client,
    {
      __UNSTABLE_preexistingObjectSet: {
        get: () =>
        <T extends ObjectOrInterfaceDefinition>(
          definition: T,
          rid: string,
        ) => {
          return createObjectSet(
            definition,
            clientCtx,
            {
              type: "intersect",
              objectSets: [
                {
                  type: "base",
                  objectType: definition.apiName,
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
    } satisfies Record<keyof Client, PropertyDescriptor>,
  );

  return client;
}

const MaxOsdkVersion = "0.15.0";
export type MaxOsdkVersion = typeof MaxOsdkVersion;
const ErrorMessage = Symbol("ErrorMessage");
