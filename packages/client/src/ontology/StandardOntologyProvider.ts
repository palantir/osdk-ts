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
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
} from "@osdk/api";
import {
  getOntologyFullMetadata,
  listInterfaceTypes,
} from "@osdk/gateway/requests";
import type {
  ListInterfaceTypesResponse,
  OntologyFullMetadata,
} from "@osdk/gateway/types";
import {
  __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition,
  wireObjectTypeFullMetadataToSdkObjectTypeDefinition,
} from "@osdk/generator-converters";
import { createOpenApiRequest } from "@osdk/shared.net";
import deepEqual from "fast-deep-equal";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createAsyncCache } from "../object/Cache.js";
import { loadFullObjectMetadata } from "./loadFullObjectMetadata.js";
import { loadInterfaceDefinition } from "./loadInterfaceDefinition.js";
import type { OntologyProviderFactory } from "./OntologyProvider.js";

export interface OntologyCachingOptions {
  alwaysRevalidate?: boolean; // defaults to false
}

const alwaysRevalidateDefault = false;

// SLLLLLLOOOOOOOWWWW
async function fullOntologyLoad(client: MinimalClient) {
  return await Promise.all([
    listInterfaceTypes(
      createOpenApiRequest(client.stack, client.fetch),
      client.ontology.metadata.ontologyApiName,
      { pageSize: 200, preview: true },
    ),
    getOntologyFullMetadata(
      createOpenApiRequest(client.stack, client.fetch),
      client.ontology.metadata.ontologyApiName,
    ),
  ]);
}
export const USE_FULL_ONTOLOGY = false;
export const createStandardOntologyProviderFactory: (
  opts: OntologyCachingOptions,
) => OntologyProviderFactory = (client) => {
  const alwaysRevalidate = client.alwaysRevalidate ?? alwaysRevalidateDefault;

  return (client) => {
    let fullCache:
      | Promise<[ListInterfaceTypesResponse, OntologyFullMetadata]>
      | [ListInterfaceTypesResponse, OntologyFullMetadata]
      | undefined;

    async function initLocalCache(client: MinimalClient, skipCache: boolean) {
      if (skipCache) {
        return await fullOntologyLoad(client);
      }

      if (!fullCache) {
        fullCache = fullOntologyLoad(client);
      }
      return await fullCache;
    }

    async function loadObject(
      client: MinimalClient,
      key: string,
      skipCache = false,
    ) {
      if (USE_FULL_ONTOLOGY) {
        const fullCacheLocal = await initLocalCache(client, skipCache);

        return {
          ...wireObjectTypeFullMetadataToSdkObjectTypeDefinition(
            fullCacheLocal[1].objectTypes[key],
            true,
          ),
          implements: fullCacheLocal[0].data.map((i) => i.apiName),
        } as ObjectTypeDefinition<any, any>;
      } else {
        return await loadFullObjectMetadata(client, key);
      }
    }

    async function loadInterface(
      client: MinimalClient,
      key: string,
      skipCache = false,
    ) {
      if (USE_FULL_ONTOLOGY) {
        const fullCacheLocal = await initLocalCache(client, skipCache);

        return __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
          fullCacheLocal[1].interfaceTypes[key],
          true,
        );
      } else {
        return loadInterfaceDefinition(client, key);
      }
    }

    function makeGetter<N extends ObjectOrInterfaceDefinition>(
      fn: (
        client: MinimalClient,
        key: string,
        skipCache?: boolean,
      ) => Promise<N>,
    ) {
      const cache = createAsyncCache<string, N>((client, key) =>
        fn(client, key, false)
      );
      return async (apiName: string) => {
        const n = alwaysRevalidate
          ? await fn(client, apiName, true)
          : await cache.get(client, apiName);

        if (alwaysRevalidate) {
          const og = cache.getOrUndefined(client, apiName);
          if (deepEqual(og, n)) {
            return og!; // ! because we can be sure `n` would throw if it were undefined
          } else {
            return cache.set(client, apiName, n);
          }
        }

        return n;
      };
    }

    return {
      getObjectDefinition: makeGetter(loadObject),
      getInterfaceDefinition: makeGetter(loadInterface),
      maybeSeed(definition) {
        // not using this for now
      },
    };
  };
};
