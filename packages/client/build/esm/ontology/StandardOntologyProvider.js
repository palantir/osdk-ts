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

import { createAsyncClientCache } from "../object/Cache.js";
import { loadActionMetadata } from "./loadActionMetadata.js";
import { loadFullObjectMetadata } from "./loadFullObjectMetadata.js";
import { loadInterfaceMetadata } from "./loadInterfaceMetadata.js";
import { loadQueryMetadata } from "./loadQueryMetadata.js";
import { InterfaceDefinitions } from "./OntologyProvider.js";
export const createStandardOntologyProviderFactory = () => {
  return client => {
    function makeGetter(fn) {
      const cache = createAsyncClientCache((client, key) => fn(client, key, false));
      return async apiName => {
        return await cache.get(client, apiName);
      };
    }
    const ret = {
      getObjectDefinition: makeGetter(async function (client, key) {
        let objectDef = await loadFullObjectMetadata(client, key);

        // ensure we have all of the interfaces loaded
        const interfaceDefs = Object.fromEntries((await Promise.all(objectDef.implements?.map(i => ret.getInterfaceDefinition(i)) ?? [])).map(i => [i.apiName, {
          def: i,
          handler: undefined
        }]));
        const fullObjectDef = {
          ...objectDef,
          [InterfaceDefinitions]: interfaceDefs
        };
        return fullObjectDef;
      }),
      getInterfaceDefinition: makeGetter(async function (client, key) {
        return loadInterfaceMetadata(client, key);
      }),
      getQueryDefinition: makeGetter(async function (client, key) {
        const r = await loadQueryMetadata(client, key);
        return r;
      }),
      getActionDefinition: makeGetter(async function (client, key) {
        const r = await loadActionMetadata(client, key);
        return r;
      })
    };
    return ret;
  };
};
//# sourceMappingURL=StandardOntologyProvider.js.map