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
import { loadActionMetadata } from "./loadActionMetadata.js";
import { loadFullObjectMetadata } from "./loadFullObjectMetadata.js";
import { loadInterfaceMetadata } from "./loadInterfaceMetadata.js";
import { loadQueryMetadata } from "./loadQueryMetadata.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
  type OntologyProviderFactory,
} from "./OntologyProvider.js";

export interface OntologyCachingOptions {
}

export const createStandardOntologyProviderFactory: (
  opts: OntologyCachingOptions,
) => OntologyProviderFactory = (client) => {
  return (client) => {
    async function loadObject(
      client: MinimalClient,
      key: string,
    ): Promise<FetchedObjectTypeDefinition<any, any>> {
      let objectDef = await loadFullObjectMetadata(client, key);

      // ensure we have all of the interfaces loaded
      const interfaceDefs = Object.fromEntries<
        { def: InterfaceMetadata<any>; handler: undefined }
      >(
        (await Promise.all<InterfaceMetadata<any, any>>(
          objectDef.implements?.map((i) => ret.getInterfaceDefinition(i)) ?? [],
        )).map(i => [i.apiName, { def: i, handler: undefined }]),
      );

      const fullObjectDef = {
        ...objectDef,
        [InterfaceDefinitions]: interfaceDefs,
      };

      return fullObjectDef;
    }

    async function loadInterface(
      client: MinimalClient,
      key: string,
    ) {
      return loadInterfaceMetadata(client, key);
    }

    async function loadQuery(
      client: MinimalClient,
      key: string,
    ) {
      const r = await loadQueryMetadata(client, key);
      return r;
    }

    async function loadAction(
      client: MinimalClient,
      key: string,
    ) {
      const r = await loadActionMetadata(client, key);
      return r;
    }

    function makeGetter<
      N extends
        | ObjectOrInterfaceDefinition
        | QueryMetadata<any, any>
        | ActionMetadata,
    >(
      fn: (
        client: MinimalClient,
        key: string,
        skipCache?: boolean,
      ) => Promise<N>,
    ) {
      const cache = createAsyncClientCache<string, N>((client, key) =>
        fn(client, key, false)
      );
      return async (apiName: string) => {
        return await cache.get(client, apiName);
      };
    }

    const ret = {
      getObjectDefinition: makeGetter(loadObject),
      getInterfaceDefinition: makeGetter(loadInterface),
      getQueryDefinition: makeGetter(loadQuery),
      getActionDefinition: makeGetter(loadAction),
    };
    return ret;
  };
};
