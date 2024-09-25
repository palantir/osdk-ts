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
  MinActionDef,
  MinInterfaceDef,
  MinObjectDef,
  MinQueryDef,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import type { MinimalObjectSet, ObjectSet } from "@osdk/client.api";
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__preexistingObjectSet,
} from "@osdk/client.api/unstable";
import { symbolClientContext } from "@osdk/shared.client";
import { createBulkLinksAsyncIterFactory } from "./__unstable/createBulkLinksAsyncIterFactory.js";
import type { ActionSignatureFromDef } from "./actions/applyAction.js";
import { applyAction } from "./actions/applyAction.js";
import type { Client } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import { fetchMetadataInternal } from "./fetchMetadata.js";
import type { Logger } from "./Logger.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import { applyQuery } from "./queries/applyQuery.js";
import type { QuerySignatureFromDef } from "./queries/types.js";

class ActionInvoker<Q extends MinActionDef<any, any, any>>
  implements ActionSignatureFromDef<Q>
{
  constructor(
    clientCtx: MinimalClient,
    actionDef: MinActionDef<any, any, any>,
  ) {
    // We type the property as a generic function as binding `applyAction`
    // doesn't return a type thats all that useful anyway
    // The implements covers us for the most part here as this exact type doesn't
    // escape this file
    this.applyAction = applyAction.bind(undefined, clientCtx, actionDef);
    this.batchApplyAction = applyAction.bind(undefined, clientCtx, actionDef);
  }

  applyAction: (...args: any[]) => any;
  batchApplyAction: (...args: any[]) => any;
}

class QueryInvoker<Q extends MinQueryDef<any, any, any>>
  implements QuerySignatureFromDef<Q>
{
  constructor(
    clientCtx: MinimalClient,
    queryDef: MinQueryDef<any, any>,
  ) {
    this.executeFunction = applyQuery.bind(undefined, clientCtx, queryDef);
  }

  executeFunction: (...args: any[]) => any;
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
      | MinActionDef<any, any, any>
      | MinQueryDef<any, any>,
  >(o: T): T extends MinObjectDef<any> ? ObjectSet<T>
    : T extends MinInterfaceDef<any, any> ? MinimalObjectSet<T>
    : T extends MinActionDef<any, any, any> ? ActionSignatureFromDef<T>
    : T extends MinQueryDef<any, any> ? QuerySignatureFromDef<T>
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      return objectSetFactory(o, clientCtx) as any;
    } else if (o.type === "action") {
      return new ActionInvoker(
        clientCtx,
        o,
      ) as (T extends MinActionDef<any, any, any>
        // first `as` to the action definition for our "real" typecheck
        ? ActionSignatureFromDef<T>
        : never) as any; // then as any for dealing with the conditional return value
    } else if (o.type === "query") {
      return new QueryInvoker(
        clientCtx,
        o,
      ) as (T extends MinQueryDef<any, any> ? QuerySignatureFromDef<T>
        : never) as any;
    } else {
      throw new Error("not implemented");
    }
  }

  const fetchMetadata = fetchMetadataInternal.bind(
    undefined,
    clientCtx,
  );

  const client: Client = Object.defineProperties<Client>(
    clientFn as Client,
    {
      [symbolClientContext]: {
        value: clientCtx,
      },
      [__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks]: {
        get: () => createBulkLinksAsyncIterFactory(clientCtx),
      },
      [__EXPERIMENTAL__NOT_SUPPORTED_YET__preexistingObjectSet]: {
        get: () =>
        <T extends ObjectOrInterfaceDefinition>(
          definition: T,
          rid: string,
        ) => {
          return createObjectSet(
            definition,
            client[symbolClientContext],
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
      fetchMetadata: {
        value: fetchMetadata,
      },
    } satisfies Record<keyof Client, PropertyDescriptor>,
  );

  return client;
}

export const createClient = createClientInternal.bind(
  undefined,
  createObjectSet,
);
