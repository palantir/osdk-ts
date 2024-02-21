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

import deepEqual from "fast-deep-equal";
import { loadFullObjectMetadata } from "../loadFullObjectMetadata.js";
import type { OntologyProviderFactory } from "../OntologyProvider.js";

export const NoCachingOntologyProvider: OntologyProviderFactory = (
  client,
) => {
  // We are not caching as in we are making a network request everytime. However we are going to
  // reuse the ref we have if its deep equals. This will lead to memory improvements internally to
  // the client and likely for consumers as well.

  const refEqualsCache = new Map<string, any>();

  return {
    getObjectOrInterfaceDefinition: async (apiName: string) => {
      const n = await loadFullObjectMetadata(client, apiName);
      const existing = refEqualsCache.get(apiName);
      if (existing && deepEqual(existing, n)) {
        return existing;
      } else {
        refEqualsCache.set(apiName, n);
        return n;
      }
    },

    maybeSeed(definition) {
      // this provider will load every time, therefore will not seed.
    },
  };
};
