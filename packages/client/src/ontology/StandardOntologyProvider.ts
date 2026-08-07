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
import { getAliasByBound } from "./objectTypeAliases.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
  type OntologyProviderFactory,
} from "./OntologyProvider.js";
import { translateAliasedObjectMetadata } from "./translateAliasedObjectMetadata.js";

export interface OntologyCachingOptions {}

export const createStandardOntologyProviderFactory: (
  opts: OntologyCachingOptions,
) => OntologyProviderFactory = (client) => {
  return (client) => {
    async function loadObject(
      client: MinimalClient,
      key: string,
    ): Promise<FetchedObjectTypeDefinition> {
      const objectDef = await loadFullObjectMetadata(client, key);

      // ensure we have all of the interfaces loaded
      const interfaceDefs = Object.fromEntries<{
        def: InterfaceMetadata;
        handler: undefined;
      }>(
        (
          await Promise.all<InterfaceMetadata>(
            objectDef.implements?.map((i) => ret.getInterfaceDefinition(i)) ??
              [],
          )
        ).map((i) => [i.apiName, { def: i, handler: undefined }]),
      );

      const fullObjectDef = {
        ...objectDef,
        [InterfaceDefinitions]: interfaceDefs,
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

    const getRawObjectDefinition = makeGetter(loadObject);

    // Alias translation sits *above* the metadata cache rather than inside
    // `loadObject`, because the cache is keyed by bound api name alone: a type
    // fetched before its alias was registered (e.g. reached via `pivotTo`) would
    // otherwise be cached untranslated forever. Translated results are memoized
    // separately and dropped whenever a new alias is recorded.
    const translated = new Map<string, FetchedObjectTypeDefinition>();
    let translatedGeneration = -1;

    async function getObjectDefinition(
      apiName: string,
    ): Promise<FetchedObjectTypeDefinition> {
      const raw = await getRawObjectDefinition(apiName);
      const alias = getAliasByBound(client, apiName);
      if (alias == null) {
        return raw;
      }

      const generation = client.objectTypeAliases.generation.value;
      if (translatedGeneration !== generation) {
        translated.clear();
        translatedGeneration = generation;
      }

      let def = translated.get(apiName);
      if (def == null) {
        def = deepFreeze(translateAliasedObjectMetadata(raw, alias));
        translated.set(apiName, def);
      }
      return def;
    }

    const ret = {
      getObjectDefinition,
      getInterfaceDefinition: makeGetter(loadInterface),
      getActionDefinition: makeGetter(loadAction),
      getQueryDefinition: makeQueryGetter(client, loadQuery),
    };
    return ret;
  };
};
