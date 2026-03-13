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
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
  OsdkBase,
} from "@osdk/api";
import type { Client } from "../Client.js";
import type { BulkLinkFetchResult } from "../observable/internal/BulkLinksLoader.js";
import { getBulkLinksLoader } from "../observable/internal/BulkLinksLoader.js";
import { getBulkObjectLoader } from "../observable/internal/BulkObjectLoader.js";

export type { BulkLinkFetchResult };

function assertPrimitivePk(pk: unknown): asserts pk is string | number {
  if (typeof pk !== "string" && typeof pk !== "number") {
    throw new Error(`Unexpected primary key type: ${typeof pk}`);
  }
}

/**
 * Fetches derived link targets for a source object using batched bulk APIs.
 *
 * Multiple concurrent calls within a 25ms window are automatically batched
 * into a single bulk request. This is the primary mechanism for solving
 * the N+1 request problem in list mode derived links.
 *
 * Returns target primary keys and target type name. Use fetchBulkDerivedLinkObjects
 * for full object resolution.
 */
export function fetchBulkDerivedLinks(
  client: Client,
  sourceObject: OsdkBase<ObjectOrInterfaceDefinition>,
  linkApiName: string,
): Promise<BulkLinkFetchResult> {
  return getBulkLinksLoader(client).fetch(sourceObject, linkApiName);
}

/**
 * Fetches derived link targets as full Osdk.Instance objects.
 *
 * Combines bulk link discovery with bulk object loading:
 * 1. BulkLinksLoader batches link discovery across concurrent calls (1 request per link type)
 * 2. BulkObjectLoader batches target object fetches via $in clause (1-2 requests per target type)
 *
 * Total: 2-3 requests instead of N individual requests.
 */
export async function fetchBulkDerivedLinkObjects(
  client: Client,
  sourceObject: OsdkBase<ObjectOrInterfaceDefinition>,
  linkApiName: string,
): Promise<Osdk.Instance<ObjectTypeDefinition>[]> {
  const { targetPks, targetApiName } = await fetchBulkDerivedLinks(
    client,
    sourceObject,
    linkApiName,
  );

  if (targetPks.length === 0 || !targetApiName) {
    return [];
  }

  const bulkObjectLoader = getBulkObjectLoader(client);

  const objectHolders = await Promise.all(
    targetPks.map(pk => {
      assertPrimitivePk(pk);
      return bulkObjectLoader.fetch(targetApiName, pk);
    }),
  );

  // ObjectHolder is the internal proxy type wrapping Osdk.Instance at runtime
  return objectHolders as unknown as Osdk.Instance<ObjectTypeDefinition>[];
}

export interface BulkLinkMappingResult {
  objectsBySourcePk: Map<
    string | number,
    Osdk.Instance<ObjectTypeDefinition>[]
  >;
  targetApiName: string;
  allTargetPks: Set<string | number>;
}

/**
 * Fetches derived link targets for multiple source objects and returns
 * a source→target mapping alongside resolved target objects.
 *
 * Uses BulkLinksLoader for batched link discovery and BulkObjectLoader
 * for batched object resolution. Returns mapping from source PK to
 * resolved target objects, plus the set of all unique target PKs.
 */
export async function fetchBulkDerivedLinkObjectsWithMapping(
  client: Client,
  sourceObjects: OsdkBase<ObjectOrInterfaceDefinition>[],
  linkApiName: string,
): Promise<BulkLinkMappingResult> {
  if (sourceObjects.length === 0) {
    return {
      objectsBySourcePk: new Map(),
      targetApiName: "",
      allTargetPks: new Set(),
    };
  }

  const bulkLinksLoader = getBulkLinksLoader(client);
  const linkResults = await Promise.all(
    sourceObjects.map(obj => bulkLinksLoader.fetch(obj, linkApiName)),
  );

  const sourcePkToTargetPks = new Map<string | number, (string | number)[]>();
  const allTargetPks = new Set<string | number>();
  let targetApiName = "";

  for (let i = 0; i < sourceObjects.length; i++) {
    const sourcePk = sourceObjects[i].$primaryKey;
    assertPrimitivePk(sourcePk);
    const { targetPks, targetApiName: apiName } = linkResults[i];
    if (apiName) {
      targetApiName = apiName;
    }
    const typedTargetPks: (string | number)[] = [];
    for (const pk of targetPks) {
      assertPrimitivePk(pk);
      typedTargetPks.push(pk);
      allTargetPks.add(pk);
    }
    sourcePkToTargetPks.set(sourcePk, typedTargetPks);
  }

  if (allTargetPks.size === 0 || !targetApiName) {
    return { objectsBySourcePk: new Map(), targetApiName, allTargetPks };
  }

  const bulkObjectLoader = getBulkObjectLoader(client);
  const uniquePks = [...allTargetPks];
  const objectHolders = await Promise.all(
    uniquePks.map(pk => {
      assertPrimitivePk(pk);
      return bulkObjectLoader.fetch(targetApiName, pk);
    }),
  );

  const objectsByPk = new Map<
    string | number,
    Osdk.Instance<ObjectTypeDefinition>
  >();
  for (let i = 0; i < uniquePks.length; i++) {
    objectsByPk.set(
      uniquePks[i],
      objectHolders[i] as unknown as Osdk.Instance<ObjectTypeDefinition>,
    );
  }

  const objectsBySourcePk = new Map<
    string | number,
    Osdk.Instance<ObjectTypeDefinition>[]
  >();
  for (const [sourcePk, targetPks] of sourcePkToTargetPks) {
    const resolved: Osdk.Instance<ObjectTypeDefinition>[] = [];
    for (const targetPk of targetPks) {
      const obj = objectsByPk.get(targetPk);
      if (obj) {
        resolved.push(obj);
      }
    }
    objectsBySourcePk.set(sourcePk, resolved);
  }

  return { objectsBySourcePk, targetApiName, allTargetPks };
}
