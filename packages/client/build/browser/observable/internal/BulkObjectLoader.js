/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { PalantirApiError } from "@osdk/shared.net.errors";
import { DefaultMap, DefaultWeakMap } from "mnemonist";
import pDefer from "p-defer";
import { additionalContext } from "../../Client.js";
const weakCache = new DefaultWeakMap(c => new BulkObjectLoader(c));
export function getBulkObjectLoader(client) {
  return weakCache.get(client);
}
export class BulkObjectLoader {
  #client;
  #m = new DefaultMap(() => ({
    data: [],
    timer: undefined
  }));
  #logger;
  #maxWait;
  #maxEntries;
  constructor(client, maxWait = 25, maxEntries = 100) {
    this.#client = client;
    this.#logger = client[additionalContext].logger;
    this.#maxWait = maxWait;
    this.#maxEntries = maxEntries;
  }
  fetch(apiName, primaryKey) {
    const deferred = pDefer();
    const entry = this.#m.get(apiName);
    entry.data.push({
      primaryKey: primaryKey,
      deferred
    });
    if (!entry.timer) {
      entry.timer = setTimeout(() => {
        this.#loadObjects(apiName, entry.data);
      }, this.#maxWait);
    }
    if (entry.data.length >= this.#maxEntries) {
      clearTimeout(entry.timer);
      this.#loadObjects(apiName, entry.data);
    }
    return deferred.promise;
  }
  #loadObjects(apiName, arr) {
    this.#m.delete(apiName);
    this.#reallyLoadObjects(apiName, arr).catch(e => {
      this.#logger?.error("Unhandled exception", e);
    });
  }
  async #reallyLoadObjects(apiName, arr) {
    const miniDef = {
      type: "object",
      apiName
    };
    const objMetadata = await this.#client.fetchMetadata(miniDef);
    const pks = arr.map(x => x.primaryKey);
    const {
      data
    } = await this.#client(miniDef).where({
      [objMetadata.primaryKeyApiName]: {
        $in: pks
      }
    }).fetchPage({
      $pageSize: pks.length
    });
    for (const {
      primaryKey,
      deferred
    } of arr) {
      const object = data.find(x => x.$primaryKey === primaryKey);
      if (object) {
        deferred.resolve(object);
      } else {
        deferred.reject(new PalantirApiError("Object not found"));
      }
    }
  }
}
//# sourceMappingURL=BulkObjectLoader.js.map