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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import deepEqual from "fast-deep-equal";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { AsyncCache } from "../object/Cache.js";
import { createAsyncCache } from "../object/Cache.js";
import { loadFullObjectMetadata } from "./loadFullObjectMetadata.js";
import { loadInterfaceDefinition } from "./loadInterfaceDefinition.js";
import type { OntologyProviderFactory } from "./OntologyProvider.js";

export interface OntologyCachingOptions {
  alwaysRevalidate?: boolean; // defaults to false
}

const alwaysRevalidateDefault = false;

export const createStandardOntologyProviderFactory: (
  opts: OntologyCachingOptions,
) => OntologyProviderFactory = (client) => {
  const alwaysRevalidate = client.alwaysRevalidate ?? alwaysRevalidateDefault;

  return (client) => {
    const objectCache = createAsyncCache(loadFullObjectMetadata);
    const interfaceCache = createAsyncCache(loadInterfaceDefinition);

    function makeGetter<N extends ObjectOrInterfaceDefinition>(
      fn: (
        client: MinimalClient,
        key: string,
      ) => Promise<N>,
      cacheToUse: AsyncCache<string, N>,
    ) {
      return async (apiName: string) => {
        const n = alwaysRevalidate
          ? await fn(client, apiName)
          : await cacheToUse.get(client, apiName);

        if (alwaysRevalidate) {
          const og = cacheToUse.getOrUndefined(client, apiName);
          if (deepEqual(og, n)) {
            return og!; // ! because we can be sure `n` would throw if it were undefined
          } else {
            return cacheToUse.set(client, apiName, n);
          }
        }

        return n;
      };
    }

    return {
      getObjectDefinition: makeGetter(loadFullObjectMetadata, objectCache),
      getInterfaceDefinition: makeGetter(
        loadInterfaceDefinition,
        interfaceCache,
      ),
      maybeSeed(definition) {
        // not using this for now
      },
    };
  };
};
