/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  ObjectTypeDefinition,
} from "@osdk/api";
import { PalantirApiError } from "@osdk/shared.net.errors";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import { additionalContext, type Client } from "../../Client.js";
import type {
  ObjectHolder,
} from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { DefType } from "../../util/interfaceUtils.js";
import { DefaultMap } from "./collections/DefaultMap.js";
import { DefaultWeakMap } from "./collections/DefaultWeakMap.js";

interface InternalValue {
  primaryKey: string;
  deferred: DeferredPromise<ObjectHolder>;
}

interface LoadParams {
  apiName: string;
  defType: DefType;
  select?: readonly string[];
  loadPropertySecurityMetadata?: boolean;
  includeAllBaseObjectProperties: true | undefined;
}

interface Accumulator extends Partial<LoadParams> {
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

  public async fetch(
    apiName: string,
    primaryKey: string | number | boolean,
    defType: DefType = "object",
    select?: readonly string[],
    loadPropertySecurityMetadata?: boolean,
    includeAllBaseObjectProperties?: boolean,
  ): Promise<ObjectHolder> {
    const params: LoadParams = {
      apiName,
      defType,
      select,
      loadPropertySecurityMetadata,
      // The flag is interface-only on the server. Drop it for object fetches
      // so they don't fragment batches or the cache.
      includeAllBaseObjectProperties:
        defType === "interface" && includeAllBaseObjectProperties
          ? true
          : undefined,
    };

    const deferred = pDefer<ObjectHolder>();

    const selectKey = this.#buildSelectKey(params);
    const entry = this.#m.get(selectKey);
    entry.data.push({
      primaryKey: primaryKey as string,
      deferred,
    });

    if (entry.defType === undefined) {
      entry.apiName = params.apiName;
      entry.defType = params.defType;
      entry.select = params.select;
      entry.loadPropertySecurityMetadata = params.loadPropertySecurityMetadata;
      entry.includeAllBaseObjectProperties =
        params.includeAllBaseObjectProperties;
    } else if (entry.defType !== defType) {
      deferred.reject(
        new PalantirApiError(
          `Conflicting defType for ${apiName}: existing=${entry.defType}, new=${defType}`,
        ),
      );
      return deferred.promise;
    }

    const fire = () => this.#loadObjects(entry.data, params);

    if (!entry.timer) {
      entry.timer = setTimeout(fire, this.#maxWait);
    }

    if (entry.data.length >= this.#maxEntries) {
      clearTimeout(entry.timer);
      fire();
    }

    return await deferred.promise;
  }

  #buildSelectKey(params: LoadParams): string {
    const securitySuffix = params.loadPropertySecurityMetadata ? "\0sec" : "";
    const baseSuffix = params.includeAllBaseObjectProperties ? "\0base" : "";
    return params.select && params.select.length > 0
      ? `${params.apiName}\0${
        [...params.select].sort().join(",")
      }${securitySuffix}${baseSuffix}`
      : `${params.apiName}${securitySuffix}${baseSuffix}`;
  }

  #loadObjects(arr: InternalValue[], params: LoadParams) {
    this.#m.delete(this.#buildSelectKey(params));

    const loadFn = params.defType === "interface"
      ? this.#loadInterfaceObjects(arr, params)
      : this.#loadObjectTypeObjects(arr, params);

    loadFn.catch((e: unknown) => {
      this.#logger?.error("Unhandled exception", e);
      for (const { primaryKey, deferred } of arr) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        deferred.reject(
          new PalantirApiError(
            `Failed to load ${params.apiName} with pk ${primaryKey}: ${errorMessage}`,
          ),
        );
      }
    });
  }

  async #loadObjectTypeObjects(arr: InternalValue[], params: LoadParams) {
    const objectDef = {
      type: "object",
      apiName: params.apiName,
    } as ObjectTypeDefinition;
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
        $includeRid: true,
        ...(params.select && params.select.length > 0
          ? { $select: params.select }
          : {}),
        $loadPropertySecurityMetadata: params.loadPropertySecurityMetadata
          ?? false,
        ...(params.includeAllBaseObjectProperties
          ? { $includeAllBaseObjectProperties: true }
          : {}),
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

  async #loadInterfaceObjects(arr: InternalValue[], params: LoadParams) {
    const pks = arr.map(x => x.primaryKey);

    const interfaceDef = {
      type: "interface",
      apiName: params.apiName,
    } as InterfaceDefinition;

    const interfaceMetadata = await this.#client.fetchMetadata(interfaceDef);
    const implementingTypes = interfaceMetadata.implementedBy ?? [];

    const foundObjects = new Map<string | number, ObjectHolder>();

    for (const objectTypeName of implementingTypes) {
      const objectDef = {
        type: "object",
        apiName: objectTypeName,
      } as ObjectTypeDefinition;
      const objMetadata = await this.#client.fetchMetadata(objectDef);

      const remainingPks = pks.filter(pk => !foundObjects.has(pk));
      if (remainingPks.length === 0) {
        break;
      }

      const whereClause = remainingPks.length === 1
        ? { [objMetadata.primaryKeyApiName]: { $eq: remainingPks[0] } }
        : { [objMetadata.primaryKeyApiName]: { $in: remainingPks } };

      const { data } = await this.#client(objectDef)
        .where(whereClause).fetchPage({
          $pageSize: remainingPks.length,
          ...(params.select && params.select.length > 0
            ? { $select: params.select }
            : {}),
          $loadPropertySecurityMetadata:
            (params.loadPropertySecurityMetadata ?? false) as boolean,
          ...(params.includeAllBaseObjectProperties
            ? { $includeAllBaseObjectProperties: true }
            : {}),
        });

      for (const obj of data) {
        foundObjects.set(obj.$primaryKey, obj as ObjectHolder);
      }
    }

    for (const { primaryKey, deferred } of arr) {
      const object = foundObjects.get(primaryKey);
      if (object) {
        deferred.resolve(object);
      } else {
        deferred.reject(
          new PalantirApiError(
            `Interface ${params.apiName} object not found: ${primaryKey}`,
          ),
        );
      }
    }
  }
}
