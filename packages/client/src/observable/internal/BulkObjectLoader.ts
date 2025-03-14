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

import type { ObjectTypeDefinition } from "@osdk/api";
import { PalantirApiError } from "@osdk/shared.net.errors";
import { DefaultMap, DefaultWeakMap } from "mnemonist";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import { additionalContext, type Client } from "../../Client.js";
import type { Logger } from "../../logger/Logger.js";
import type {
  ObjectHolder,
} from "../../object/convertWireToOsdkObjects/ObjectHolder.js";

interface InternalValue {
  primaryKey: string;
  deferred: DeferredPromise<ObjectHolder>;
}

interface Accumulator {
  data: InternalValue[];
  timer?: ReturnType<typeof setTimeout>;
}

const weakCache = new DefaultWeakMap<Client, BulkObjectLoader>(c =>
  new BulkObjectLoader(c)
);

export function getBulkObjectLoader(client: Client): BulkObjectLoader {
  return weakCache.get(client);
}

export class BulkObjectLoader {
  #client: Client;

  #m = new DefaultMap<string, Accumulator>(() => ({
    data: [],
    timer: undefined,
  }));
  #logger: Logger | undefined;
  #maxWait: number;
  #maxEntries: number;

  constructor(client: Client, maxWait = 25, maxEntries = 100) {
    this.#client = client;
    this.#logger = client[additionalContext].logger;
    this.#maxWait = maxWait;
    this.#maxEntries = maxEntries;
  }

  public fetch(
    apiName: string,
    primaryKey: string | number | boolean,
  ): Promise<ObjectHolder> {
    const deferred = pDefer<ObjectHolder>();

    const entry = this.#m.get(apiName);
    entry.data.push({
      primaryKey: primaryKey as string,
      deferred,
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

  #loadObjects(apiName: string, arr: InternalValue[]) {
    this.#m.delete(apiName);

    this.#reallyLoadObjects(apiName, arr).catch((e: unknown) => {
      this.#logger?.error("Unhandled exception", e);
    });
  }

  async #reallyLoadObjects(apiName: string, arr: InternalValue[]) {
    const miniDef = { type: "object", apiName } as ObjectTypeDefinition;
    const objMetadata = await this.#client.fetchMetadata(miniDef);

    const pks = arr.map(x => x.primaryKey);

    const { data } = await this.#client(miniDef)
      .where({
        [objMetadata.primaryKeyApiName]: { $in: pks },
      }).fetchPage({
        $pageSize: pks.length,
      });

    for (const { primaryKey, deferred } of arr) {
      const object = data.find(x => x.$primaryKey === primaryKey) as
        | ObjectHolder
        | undefined;
      if (object) {
        deferred.resolve(object);
      } else {
        deferred.reject(new PalantirApiError("Object not found"));
      }
    }
  }
}
