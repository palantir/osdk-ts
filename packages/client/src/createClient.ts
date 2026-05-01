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
  FetchPageArgs,
  InterfaceDefinition,
  Logger,
  MediaReference,
  NullabilityAdherence,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  OsdkBase,
  PropertyKeys,
  QueryDefinition,
  SelectArg,
} from "@osdk/api";
import type {
  Experiment,
  ExperimentFns,
  MediaTransformation,
  MinimalObjectSet,
  TransformOptions,
} from "@osdk/api/unstable";
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait,
} from "@osdk/api/unstable";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { symbolClientContext as oldSymbolClientContext } from "@osdk/shared.client";
import type { ActionSignatureFromDef } from "./actions/applyAction.js";
import { applyAction } from "./actions/applyAction.js";
import { additionalContext, type Client } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import { fetchMetadataInternal } from "./fetchMetadata.js";
import { makeMediaTransformation } from "./internal/conversions/makeMediaTransformation.js";
import { MinimalLogger } from "./logger/MinimalLogger.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import { fetchPage, fetchStaticRidPage } from "./object/fetchPage.js";
import { fetchSingle } from "./object/fetchSingle.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import { applyQuery } from "./queries/applyQuery.js";
import type { QuerySignatureFromDef } from "./queries/types.js";

// We import it this way to keep compatible with CJS. If we referenced the
// value of `symbolClientContext` directly, then we would have to a dynamic import
// in `createClientInternal` which would make it async and a break.
// Since this is just a string in `@osdk/shared.client2` instead of a symbol,
// we can safely perform this trick.
type newSymbolClientContext =
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  typeof import("@osdk/shared.client2").symbolClientContext;

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
  objectSetFactory: ObjectSetFactory<any, any>,
  transactionRid: string | undefined,
  flushEdits: (() => Promise<void>) | undefined,
  baseUrl: string,
  ontologyRid: string | Promise<string>,
  tokenProvider: () => Promise<string>,
  options:
    | {
      logger?: Logger;
      UNSTABLE_DO_NOT_USE_BRANCH?: string;
      headers?: Record<string, string>;
    }
    | undefined = undefined,
  fetchFn: typeof globalThis.fetch = fetch,
): Client {
  if (typeof ontologyRid === "string") {
    if (!ontologyRid.startsWith("ri.")) {
      throw new Error("Invalid ontology RID");
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    ontologyRid.then((ontologyRid) => {
      if (!ontologyRid.startsWith("ri.")) {
        // FIXME this promise is not await so this just shows up as an unhandled promise rejection
        throw new Error("Invalid ontology RID");
      }
    });
  }

  const clientCtx: MinimalClient = createMinimalClient(
    { ontologyRid },
    baseUrl,
    tokenProvider,
    {
      ...options,
      logger: options?.logger ?? new MinimalLogger(),
      transactionId: transactionRid,
      flushEdits,
      branch: options?.UNSTABLE_DO_NOT_USE_BRANCH,
    },
    fetchFn,
    objectSetFactory,
  );

  return createClientFromContext(clientCtx);
}

/**
 * @internal
 */
export function createClientFromContext(clientCtx: MinimalClient) {
  function clientFn<
    T extends
      | ObjectOrInterfaceDefinition
      | ActionDefinition<any>
      | QueryDefinition<any>
      | Experiment<"2.0.8">
      | Experiment<"2.1.0">
      | Experiment<"2.8.0">,
  >(o: T): T extends ObjectTypeDefinition ? ObjectSet<T>
    : T extends InterfaceDefinition ? MinimalObjectSet<T>
    : T extends ActionDefinition<any> ? ActionSignatureFromDef<T>
    : T extends QueryDefinition<any> ? QuerySignatureFromDef<T>
    : T extends Experiment<"2.0.8"> | Experiment<"2.1.0"> | Experiment<"2.8.0">
      ? { invoke: ExperimentFns<T> }
    : never
  {
    if (o.type === "object" || o.type === "interface") {
      return clientCtx.objectSetFactory(o, clientCtx) as any;
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
    } else if (o.type === "experiment") {
      switch (o.name) {
        case __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks.name:
          return {
            async *getBulkLinks(
              objs: Array<OsdkBase<any>>,
              linkTypes: string[],
            ) {
              const { createBulkLinksAsyncIterFactory } = await import(
                "./__unstable/createBulkLinksAsyncIterFactory.js"
              );
              yield* createBulkLinksAsyncIterFactory(clientCtx)(
                objs,
                linkTypes,
              );
            },
          } as any;
        case __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid.name:
          return {
            fetchOneByRid: async <
              Q extends ObjectOrInterfaceDefinition,
              const L extends PropertyKeys<Q>,
              const R extends boolean,
              const S extends false | "throw" = NullabilityAdherence.Default,
            >(
              objectType: Q,
              rid: string,
              options: SelectArg<Q, L, R, S>,
            ) => {
              return await fetchSingle(
                clientCtx,
                objectType,
                options,
                createWithRid(
                  [rid],
                ),
              ) as Osdk<Q>;
            },
          } as any;
        case __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference.name:
          return {
            createMediaReference: async <
              Q extends ObjectTypeDefinition,
              const L extends PropertyKeys.Filtered<Q, "mediaReference">,
            >(args: {
              data: Blob;
              fileName: string;
              objectType: Q;
              propertyType: L;
            }) => {
              const { data, fileName, objectType, propertyType } = args;
              const { upload } = await import(
                "@osdk/foundry.ontologies/MediaReferenceProperty"
              );
              return await upload(
                clientCtx,
                await clientCtx.ontologyRid,
                objectType.apiName,
                propertyType as string,
                data,
                {
                  mediaItemPath: fileName,
                  preview: true,
                },
              );
            },
          } as any;

        case __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid.name:
          return {
            fetchPageByRid: async <
              Q extends ObjectOrInterfaceDefinition,
              const L extends PropertyKeys<Q>,
              const R extends boolean,
              const S extends false | "throw" = NullabilityAdherence.Default,
            >(
              objectOrInterfaceType: Q,
              rids: string[],
              options: FetchPageArgs<Q, L, R, any, S> = {},
            ) => {
              return await fetchPage(
                clientCtx,
                objectOrInterfaceType,
                options,
                createWithRid(rids),
              );
            },
            fetchPageByRidNoType: async <
              const R extends boolean,
              const S extends NullabilityAdherence,
              const T extends boolean,
            >(
              rids: readonly string[],
              options?: FetchPageArgs<
                ObjectOrInterfaceDefinition,
                any,
                R,
                any,
                S,
                T
              >,
            ) => {
              return await fetchStaticRidPage(
                clientCtx,
                rids,
                options ?? {},
              );
            },
          } as any;

        case __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait.name:
          return {
            transformAndWait: async (args: {
              mediaReference: MediaReference;
              transformation: MediaTransformation;
              options?: TransformOptions;
            }) => {
              const { transformAndWaitInternal } = await import(
                "./util/transformAndWaitInternal.js"
              );
              const { mediaSetRid, mediaItemRid, token } =
                args.mediaReference.reference.mediaSetViewItem;
              return transformAndWaitInternal(
                clientCtx,
                mediaSetRid,
                mediaItemRid,
                makeMediaTransformation(args.transformation),
                token,
                args.options,
              );
            },
          } as any;
      }

      throw new Error("not implemented");
    } else {
      throw new Error("not implemented");
    }
  }

  const fetchMetadata = fetchMetadataInternal.bind(
    undefined,
    clientCtx,
  );

  const symbolClientContext: newSymbolClientContext = "__osdkClientContext";

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
      fetchMetadata: {
        value: fetchMetadata,
      },
    } satisfies Record<keyof Client, PropertyDescriptor>,
  );

  return client;
}

/**
 * Creates a {@link Client} for interacting with a Foundry Ontology. This is the primary entry point for
 * the OSDK and is typically called once per application during setup. The returned client is then used
 * to load object sets, apply actions, and execute queries against the configured ontology.
 * @param baseUrl - The base URL of the Foundry stack (e.g. `"https://example.palantirfoundry.com"`).
 * @param ontologyRid - The ontology RID to scope the client to. May be provided directly or as a `Promise`
 *   that resolves to the RID. Typically the generated `$ontologyRid` export from your generated SDK is passed here.
 * @param tokenProvider - A function returning a `Promise` that resolves to a bearer token used to authenticate
 *   requests. Invoked when the SDK needs a bearer token; implementers are responsible for caching and refresh.
 * @param options - Optional client configuration: a custom `logger`, an experimental `UNSTABLE_DO_NOT_USE_BRANCH`
 *   for branch-aware requests, and additional `headers` to include on every request.
 * @param fetchFn - An optional `fetch` implementation to use for all requests. Defaults to the global `fetch`.
 * @example
 * ```ts
 * import { createClient, type Client } from "@osdk/client";
 * import { $ontologyRid } from "./generatedNoCheck/index.js";
 *
 * const getToken = () => Promise.resolve("<bearer token>");
 *
 * export const client: Client = createClient(
 *   "https://example.palantirfoundry.com",
 *   $ontologyRid,
 *   getToken,
 * );
 * ```
 * @returns a {@link Client} configured to talk to the given Foundry stack and ontology
 */
export const createClient: (
  baseUrl: string,
  ontologyRid: string | Promise<string>,
  tokenProvider: () => Promise<string>,
  options?: {
    logger?: Logger;
    /** @beta This is an experimental feature subject to change */
    UNSTABLE_DO_NOT_USE_BRANCH?: string;
    headers?: Record<string, string>;
  } | undefined,
  fetchFn?: typeof fetch | undefined,
) => Client = createClientInternal.bind(
  undefined,
  createObjectSet,
  undefined,
  undefined,
);

/**
 * Creates a {@link Client} that scopes all of its requests to a Foundry transaction. Used by transactional
 * write flows (for example, `createWriteableClient` in `@osdk/functions`) to forward a `transactionId`
 * on every request and to flush buffered edits when needed. Aside from the additional transaction parameters,
 * the remaining arguments behave exactly as in {@link createClient}.
 * @param transactionId - The transaction RID that scopes all requests issued by the returned client.
 * @param flushEdits - A callback invoked to flush any buffered edits associated with the transaction. Implementers
 *   typically batch edits and apply them when this is called (e.g. before a read needs to observe pending writes).
 * @param args - The remaining arguments forwarded to {@link createClient}: `baseUrl`, `ontologyRid`,
 *   `tokenProvider`, optional `options`, and an optional `fetchFn`.
 * @example
 * ```ts
 * import { createClientWithTransaction } from "@osdk/client/unstable-do-not-use";
 * import { $ontologyRid } from "./generatedNoCheck/index.js";
 *
 * const getToken = () => Promise.resolve("<bearer token>");
 *
 * const client = createClientWithTransaction(
 *   "ri.transaction.main.transaction.0000",
 *   async () => {
 *     // flush any buffered edits for this transaction
 *   },
 *   "https://example.palantirfoundry.com",
 *   $ontologyRid,
 *   getToken,
 * );
 * ```
 * @returns a {@link Client} that forwards the supplied `transactionId` on every request
 */
export const createClientWithTransaction: (
  transactionId: string,
  flushEdits: () => Promise<void>,
  ...args: Parameters<typeof createClient>
) => Client = (transactionRid, flushEdits, ...args) =>
  createClientInternal(
    createObjectSet,
    transactionRid,
    flushEdits,
    ...args,
  ) as Client;

function createWithRid(
  rids: string[],
) {
  const withRid: WireObjectSet = {
    type: "static",
    "objects": rids,
  };

  return withRid;
}
