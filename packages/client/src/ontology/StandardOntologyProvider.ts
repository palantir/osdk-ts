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
  ActionMetadata,
  InterfaceMetadata,
  ObjectOrInterfaceDefinition,
  QueryMetadata,
} from "@osdk/api";

import type { MinimalClient } from "../MinimalClientContext.js";
import { createAsyncClientCache } from "../object/Cache.js";
import { deepFreeze } from "../util/deepFreeze.js";
import { loadActionMetadata } from "./loadActionMetadata.js";
import { loadFullObjectMetadata } from "./loadFullObjectMetadata.js";
import { loadInterfaceMetadata } from "./loadInterfaceMetadata.js";
import { loadQueryMetadata } from "./loadQueryMetadata.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
  type OntologyProvider,
  type OntologyProviderFactory,
} from "./OntologyProvider.js";

export interface OntologyCachingOptions {}

export const createStandardOntologyProviderFactory: (
  opts: OntologyCachingOptions,
) => OntologyProviderFactory = (_options) => {
  return (client) => {
    async function loadObject(
      client: MinimalClient,
      key: string,
    ): Promise<FetchedObjectTypeDefinition> {
      const objectDef = await loadFullObjectMetadata(client, key);

      const fullObjectDef = {
        ...objectDef,
        [InterfaceDefinitions]: {},
      };

      return deepFreeze(fullObjectDef);
    }

    async function loadInterface(client: MinimalClient, key: string) {
      return deepFreeze(await loadInterfaceMetadata(client, key));
    }

    // TODO(oxc type-aware): the type-aware typescript/require-await rule does not flag this (it returns a Promise); remove this disable once type-aware linting is enabled.
    // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
    async function loadQuery(client: MinimalClient, key: string) {
      return loadQueryMetadata(client, key);
    }

    async function loadAction(client: MinimalClient, key: string) {
      const r = await loadActionMetadata(client, key);
      return r;
    }

    function makeGetter<
      N extends ObjectOrInterfaceDefinition | QueryMetadata | ActionMetadata,
    >(
      fn: (
        client: MinimalClient,
        key: string,
        skipCache?: boolean,
      ) => Promise<N>,
    ) {
      const cache = createAsyncClientCache<string, N>((client, key) =>
        fn(client, key, false),
      );
      return async (apiName: string) => {
        return await cache.get(client, apiName);
      };
    }

    function makeQueryGetter(
      client: MinimalClient,
      fn: (
        client: MinimalClient,
        key: string,
        skipCache?: boolean,
      ) => Promise<QueryMetadata>,
    ) {
      const queryCache = createAsyncClientCache<string, QueryMetadata>(
        (client, key) => {
          return fn(client, key);
        },
      );
      return async (apiName: string, version?: string) => {
        const key = version ? `${apiName}:${version}` : apiName;
        return await queryCache.get(client, key);
      };
    }

    const loadInterfaceDefinition = makeGetter(loadInterface);
    const base = {
      getObjectDefinition: makeGetter(loadObject),
      getActionDefinition: makeGetter(loadAction),
      getQueryDefinition: makeQueryGetter(client, loadQuery),
    };

    function preparedProvider(
      interfaces: ReadonlyMap<string, InterfaceMetadata>,
    ): OntologyProvider {
      const getPreparedInterfaceDefinition = (apiName: string) => {
        const definition = interfaces.get(apiName);
        if (!definition) {
          throw new Error(
            `Interface '${apiName}' has not been prepared. Use the client returned by await client.prepare({ interfaces: [MyInterface] }).`,
          );
        }
        return definition;
      };
      return {
        ...base,
        getPreparedInterfaceDefinition,
        getInterfaceDefinition: (apiName) =>
          Promise.resolve().then(() => getPreparedInterfaceDefinition(apiName)),
        async prepare(options) {
          const definitions = await Promise.all(
            (options.interfaces ?? []).map((definition) =>
              loadInterfaceDefinition(definition.apiName),
            ),
          );
          return preparedProvider(
            new Map([
              ...interfaces,
              ...definitions.map(
                (definition) => [definition.apiName, definition] as const,
              ),
            ]),
          );
        },
      };
    }

    return preparedProvider(new Map());
  };
};
