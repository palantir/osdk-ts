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
  ObjectSet,
  ObjectTypeDefinition,
  QueryDefinition,
} from "@osdk/api";
import type { MinimalObjectSet } from "@osdk/api/unstable";
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__preexistingObjectSet,
} from "@osdk/api/unstable";
import { symbolClientContext as oldSymbolClientContext } from "@osdk/shared.client";
import { symbolClientContext } from "@osdk/shared.client2";
import { createBulkLinksAsyncIterFactory } from "./__unstable/createBulkLinksAsyncIterFactory.js";
import type { ActionSignatureFromDef } from "./actions/applyAction.js";
import { applyAction } from "./actions/applyAction.js";
import { additionalContext, type Client } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import { fetchMetadataInternal } from "./fetchMetadata.js";
import type { Logger } from "./Logger.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import { applyQuery } from "./queries/applyQuery.js";
import type { QuerySignatureFromDef } from "./queries/types.js";

class ActionInvoker<Q extends ActionDefinition<any>>
  implements ActionSignatureFromDef<Q>
{
  constructor(
    clientCtx: MinimalClient,
    actionDef: ActionDefinition<any>,
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

class QueryInvoker<Q extends QueryDefinition<any>>
  implements QuerySignatureFromDef<Q>
{
  constructor(
    clientCtx: MinimalClient,
    queryDef: QueryDefinition<any>,
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
  if (typeof ontologyRid === "string") {
    if (!ontologyRid.startsWith("ri.")) {
      throw new Error("Invalid ontology RID");
    }
  } else {
    ontologyRid.then((ontologyRid) => {
      if (!ontologyRid.startsWith("ri.")) {
        throw new Error("Invalid ontology RID");
      }
    });
  }

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
      | ActionDefinition<any>
      | QueryDefinition<any>,
  >(o: T): T extends ObjectTypeDefinition ? ObjectSet<T>
    : T extends InterfaceDefinition ? MinimalObjectSet<T>
    : T extends ActionDefinition<any> ? ActionSignatureFromDef<T>
    : T extends QueryDefinition<any> ? QuerySignatureFromDef<T>
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      return objectSetFactory(o, clientCtx) as any;
    } else if (o.type === "action") {
      return new ActionInvoker(
        clientCtx,
        o,
      ) as (T extends ActionDefinition<any>
        // first `as` to the action definition for our "real" typecheck
        ? ActionSignatureFromDef<T>
        : never) as any; // then as any for dealing with the conditional return value
    } else if (o.type === "query") {
      return new QueryInvoker(
        clientCtx,
        o,
      ) as (T extends QueryDefinition<any> ? QuerySignatureFromDef<T>
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
      [oldSymbolClientContext]: {
        value: clientCtx,
      },
      [symbolClientContext]: {
        value: clientCtx,
      },
      [additionalContext]: {
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
            client[additionalContext],
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
