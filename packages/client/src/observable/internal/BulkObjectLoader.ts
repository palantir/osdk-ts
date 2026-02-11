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
  InterfaceDefinition,
  Logger,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import { PalantirApiError } from "@osdk/shared.net.errors";
import { DefaultMap, DefaultWeakMap } from "mnemonist";
import groupBy from "object.groupby";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import invariant from "tiny-invariant";
import { additionalContext, type Client } from "../../Client.js";
import {
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type {
  ObjectHolder,
} from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { DefType } from "../../util/interfaceUtils.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";

interface InternalValue {
  primaryKey: string;
  deferred: DeferredPromise<ObjectHolder>;
}

interface Accumulator {
  data: InternalValue[];
  timer?: ReturnType<typeof setTimeout>;
  defType?: DefType;
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

  public async fetch(
    apiName: string,
    primaryKey: string | number | boolean,
    defType: DefType = "object",
  ): Promise<ObjectHolder> {
    const deferred = pDefer<ObjectHolder>();

    const entry = this.#m.get(apiName);
    entry.data.push({
      primaryKey: primaryKey as string,
      deferred,
    });

    if (entry.defType === undefined) {
      entry.defType = defType;
    } else if (entry.defType !== defType) {
      deferred.reject(
        new PalantirApiError(
          `Conflicting defType for ${apiName}: existing=${entry.defType}, new=${defType}`,
        ),
      );
      return deferred.promise;
    }

    if (!entry.timer) {
      entry.timer = setTimeout(() => {
        this.#loadObjects(apiName, entry.data, entry.defType ?? "object");
      }, this.#maxWait);
    }

    if (entry.data.length >= this.#maxEntries) {
      clearTimeout(entry.timer);
      this.#loadObjects(apiName, entry.data, entry.defType ?? "object");
    }

    return await deferred.promise;
  }

  #loadObjects(
    apiName: string,
    arr: InternalValue[],
    defType: DefType,
  ) {
    this.#m.delete(apiName);

    const loadFn = defType === "interface"
      ? this.#loadInterfaceObjects(apiName, arr)
      : this.#loadObjectTypeObjects(apiName, arr);

    loadFn.catch((e: unknown) => {
      this.#logger?.error("Unhandled exception", e);
      for (const { primaryKey, deferred } of arr) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        deferred.reject(
          new PalantirApiError(
            `Failed to load ${apiName} with pk ${primaryKey}: ${errorMessage}`,
          ),
        );
      }
    });
  }

  async #loadObjectTypeObjects(apiName: string, arr: InternalValue[]) {
    const objectDef = { type: "object", apiName } as ObjectTypeDefinition;
    const objMetadata = await this.#client.fetchMetadata(objectDef);

    const pks = arr.map(x => x.primaryKey);

    // Use $eq for single object fetches (this is for public app compatibility)
    // Use $in for batch fetches
    const whereClause = pks.length === 1
      ? { [objMetadata.primaryKeyApiName]: { $eq: pks[0] } }
      : { [objMetadata.primaryKeyApiName]: { $in: pks } };

    const { data } = await this.#client(objectDef)
      .where(whereClause).fetchPage({
        $pageSize: pks.length,
      });

    for (const { primaryKey, deferred } of arr) {
      const object = data.find(x => x.$primaryKey === primaryKey) as
        | ObjectHolder
        | undefined;
      if (object) {
        deferred.resolve(object);
      } else {
        deferred.reject(
          new PalantirApiError(`Object not found: ${primaryKey}`),
        );
      }
    }
  }

  async #loadInterfaceObjects(apiName: string, arr: InternalValue[]) {
    const pks = arr.map(x => x.primaryKey);

    const interfaceDef = {
      type: "interface",
      apiName,
    } as InterfaceDefinition;

    const { data } = await this.#client(interfaceDef)
      .where(
        { $primaryKey: { $in: pks } } as Parameters<
          ObjectSet<ObjectTypeDefinition>["where"]
        >[0],
      )
      .fetchPage({ $pageSize: pks.length });

    const reloadedData = await this.#reloadAsFullObjects(
      data as Osdk.Instance<ObjectTypeDefinition>[],
    );

    for (const { primaryKey, deferred } of arr) {
      const object = reloadedData.get(primaryKey);
      if (object) {
        deferred.resolve(object);
      } else {
        deferred.reject(
          new PalantirApiError(
            `Interface ${apiName} object not found: ${primaryKey}`,
          ),
        );
      }
    }
  }

  async #reloadAsFullObjects(
    data: Osdk.Instance<ObjectTypeDefinition>[],
  ): Promise<Map<string | number, ObjectHolder>> {
    const result = new Map<string | number, ObjectHolder>();
    if (data.length === 0) return result;

    const groups = groupBy(data, (x) => x.$objectType);

    await Promise.all(
      Object.entries(groups).map(async ([, objects]) => {
        const objectDef = (objects[0] as ObjectHolder)[UnderlyingOsdkObject][
          ObjectDefRef
        ];
        invariant(
          objectDef,
          `ObjectDefRef missing for ${objects[0].$objectType}`,
        );

        const where = {
          [objectDef.primaryKeyApiName]: {
            $in: objects.map(x => x.$primaryKey),
          },
        } as SimpleWhereClause;

        const fetchResult = await this.#client(
          objectDef as ObjectTypeDefinition,
        ).where(
          where as Parameters<ObjectSet<ObjectTypeDefinition>["where"]>[0],
        ).fetchPage();

        for (const obj of fetchResult.data) {
          result.set(obj.$primaryKey, obj as ObjectHolder);
        }
      }),
    );

    for (const obj of data) {
      invariant(
        result.has(obj.$primaryKey),
        `Could not find object ${obj.$objectType} ${obj.$primaryKey}`,
      );
    }

    return result;
  }
}
