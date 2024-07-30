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
  QueryDefinition,
} from "@osdk/api";
import type {
  ActionSignatureFromDef,
  MinimalObjectSet,
  ObjectSet,
  QuerySignatureFromDef,
} from "@osdk/client.api";
import { symbolClientContext } from "@osdk/shared.client";
import type { Logger } from "pino";
import { applyAction } from "./actions/applyAction.js";
import type { Client } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import { applyQuery } from "./queries/applyQuery.js";

class ActionInvoker<Q extends ActionDefinition<any, any, any>>
  implements ActionSignatureFromDef<Q>
{
  constructor(
    clientCtx: MinimalClient,
    actionDef: ActionDefinition<any, any, any>,
  ) {
    // We type the property as a generic function as binding `applyAction`
    // doesn't return a type thats all that useful anyway
    // The implements covers us for the most part here as this exact type doesn't
    // escape this file
    this.applyAction = applyAction.bind(undefined, clientCtx, actionDef);
  }

  applyAction: (...args: any[]) => any;
}

class QueryInvoker<Q extends QueryDefinition<any, any>>
  implements QuerySignatureFromDef<Q>
{
  constructor(
    clientCtx: MinimalClient,
    queryDef: QueryDefinition<any, any>,
  ) {
    // We type the property as a generic function as binding `applyAction`
    // doesn't return a type thats all that useful anyway
    // The implements covers us for the most part here as this exact type doesn't
    // escape this file
    this.applyQuery = applyQuery.bind(undefined, clientCtx, queryDef);
  }

  applyQuery: (...args: any[]) => any;
}

/** @internal */
export function createClientInternal(
  objectSetFactory: ObjectSetFactory<any, any>, // first so i can bind
  baseUrl: string,
  ontologyRid: string | Promise<string>,
  tokenProvider: () => Promise<string>,
  options: { logger?: Logger } | undefined = undefined,
  fetchFn: typeof globalThis.fetch = fetch,
): Client {
  const clientCtx: MinimalClient = createMinimalClient(
    { ontologyRid },
    baseUrl,
    tokenProvider,
    options,
    fetchFn,
    objectSetFactory,
  );

  function clientFn<
    T extends
      | ObjectOrInterfaceDefinition
      | ActionDefinition<any, any, any>
      | QueryDefinition<any, any>,
  >(o: T): T extends ObjectTypeDefinition<any> ? ObjectSet<T>
    : T extends InterfaceDefinition<any, any> ? MinimalObjectSet<T>
    : T extends ActionDefinition<any, any, any> ? ActionSignatureFromDef<T>
    : T extends QueryDefinition<any, any> ? QuerySignatureFromDef<T>
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      clientCtx.ontologyProvider.maybeSeed(o);
      return objectSetFactory(o, clientCtx) as any;
    } else if (o.type === "action") {
      clientCtx.ontologyProvider.maybeSeed(o);
      return new ActionInvoker(
        clientCtx,
        o,
      ) as (T extends ActionDefinition<any, any, any>
        // first `as` to the action definition for our "real" typecheck
        ? ActionSignatureFromDef<T>
        : never) as any; // then as any for dealing with the conditional return value
    } else if (o.type === "query") {
      clientCtx.ontologyProvider.maybeSeed(o);
      return new QueryInvoker(
        clientCtx,
        o,
      ) as (T extends QueryDefinition<any, any> ? QuerySignatureFromDef<T>
        : never) as any;
    } else {
      throw new Error("not implemented");
    }
  }

  const client: Client = Object.defineProperties<Client>(
    clientFn as Client,
    {
      [symbolClientContext]: {
        value: clientCtx,
      },
    } satisfies Record<keyof Client, PropertyDescriptor>,
  );

  return client;
}

export const createClient = createClientInternal.bind(
  undefined,
  createObjectSet,
);
