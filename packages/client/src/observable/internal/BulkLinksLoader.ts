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

import type {
  Logger,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
  OsdkBase,
} from "@osdk/api";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import { createBulkLinksAsyncIterFactory } from "../../__unstable/createBulkLinksAsyncIterFactory.js";
import { additionalContext, type Client } from "../../Client.js";

export interface BulkLinkFetchResult {
  targetPks: unknown[];
  targetApiName: string;
}

interface InternalEntry {
  sourceObject: OsdkBase<ObjectOrInterfaceDefinition>;
  deferred: DeferredPromise<BulkLinkFetchResult>;
}

interface Accumulator {
  data: InternalEntry[];
  timer?: ReturnType<typeof setTimeout>;
}

const weakCache = new WeakMap<Client, BulkLinksLoader>();

export function getBulkLinksLoader(client: Client): BulkLinksLoader {
  let loader = weakCache.get(client);
  if (!loader) {
    loader = new BulkLinksLoader(client);
    weakCache.set(client, loader);
  }
  return loader;
}

export class BulkLinksLoader {
  #client: Client;
  #m = new Map<string, Accumulator>();
  #logger: Logger | undefined;
  #maxWait: number;
  #maxEntries: number;

  constructor(client: Client, maxWait = 25, maxEntries = 100) {
    this.#client = client;
    this.#logger = client[additionalContext].logger;
    this.#maxWait = maxWait;
    this.#maxEntries = maxEntries;
  }

  public async fetch(
    sourceObject: OsdkBase<ObjectOrInterfaceDefinition>,
    linkApiName: string,
  ): Promise<BulkLinkFetchResult> {
    const deferred = pDefer<BulkLinkFetchResult>();

    let entry = this.#m.get(linkApiName);
    if (!entry) {
      entry = { data: [], timer: undefined };
      this.#m.set(linkApiName, entry);
    }
    entry.data.push({
      sourceObject,
      deferred,
    });

    if (!entry.timer) {
      entry.timer = setTimeout(() => {
        this.#dispatch(linkApiName, entry.data);
      }, this.#maxWait);
    }

    if (entry.data.length >= this.#maxEntries) {
      clearTimeout(entry.timer);
      this.#dispatch(linkApiName, entry.data);
    }

    return await deferred.promise;
  }

  #dispatch(linkApiName: string, arr: InternalEntry[]) {
    this.#m.delete(linkApiName);

    this.#reallyDispatch(linkApiName, arr).catch((e: unknown) => {
      this.#logger?.error("BulkLinksLoader: unhandled exception", e);
      for (const { deferred } of arr) {
        deferred.reject(e);
      }
    });
  }

  async #reallyDispatch(linkApiName: string, arr: InternalEntry[]) {
    const sourceObjects = arr.map(e => e.sourceObject);
    const minimalClient = this.#client[additionalContext];
    const bulkLinksIter = createBulkLinksAsyncIterFactory(minimalClient);

    // Group results by source PK
    const resultsBySourcePk = new Map<
      unknown,
      { targetPks: unknown[]; targetApiName: string }
    >();

    for await (const item of bulkLinksIter(sourceObjects, [linkApiName])) {
      const sourcePk = item.object.$primaryKey;
      const targetApiName = item.otherObjectApiName ?? "";

      let existing = resultsBySourcePk.get(sourcePk);
      if (!existing) {
        existing = { targetPks: [], targetApiName };
        resultsBySourcePk.set(sourcePk, existing);
      }
      existing.targetPks.push(item.otherObjectPk);
    }

    // Resolve each caller's deferred promise
    for (const { sourceObject, deferred } of arr) {
      const result = resultsBySourcePk.get(sourceObject.$primaryKey);
      deferred.resolve(result ?? { targetPks: [], targetApiName: "" });
    }
  }
}
