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

import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { CacheKey } from "../CacheKey.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import { objectSortaMatchesWhereClause as objectMatchesWhereClause } from "../objectMatchesWhereClause.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";

export type ListObjectChanges = Record<
  "added" | "modified",
  ReadonlyArray<ObjectHolder | InterfaceHolder>
>;

interface ListMembershipContext {
  whereClause: SimpleWhereClause;
  optimistic: boolean;
  result: {
    added: Set<ObjectHolder | InterfaceHolder>;
    modified: Set<ObjectHolder | InterfaceHolder>;
    removed: Set<ObjectHolder | InterfaceHolder>;
    hasUncertainMatches: boolean;
    needsRevalidation: boolean;
  };
}

export function getListMembershipChanges(
  objects: ListObjectChanges,
  whereClause: SimpleWhereClause,
  optimistic: boolean,
): ListMembershipContext["result"] {
  const context: ListMembershipContext = {
    whereClause,
    optimistic,
    result: {
      added: new Set(),
      modified: new Set(),
      removed: new Set(),
      hasUncertainMatches: false,
      needsRevalidation: false,
    },
  };

  // categorize
  classifyAddedObjects(objects.added, context);
  classifyModifiedObjects(objects.modified, context);

  return context.result;
}

function classifyAddedObjects(
  addedObjects: ReadonlyArray<ObjectHolder | InterfaceHolder>,
  { whereClause, result }: ListMembershipContext,
): void {
  for (const obj of addedObjects) {
    // if its a strict match we can just insert it into place
    if (objectMatchesWhereClause(obj, whereClause, true)) {
      result.added.add(obj);
      continue;
    }
    // sorta match means it used a filter we cannot use on the frontend
    const uncertain = objectMatchesWhereClause(obj, whereClause, false);
    result.hasUncertainMatches ||= uncertain;
  }
}

function classifyModifiedObjects(
  modifiedObjects: ReadonlyArray<ObjectHolder | InterfaceHolder>,
  { whereClause, optimistic, result }: ListMembershipContext,
): void {
  for (const obj of modifiedObjects) {
    if (objectMatchesWhereClause(obj, whereClause, true)) {
      result.modified.add(obj);
      continue;
    }
    const uncertain = objectMatchesWhereClause(obj, whereClause, false);
    result.hasUncertainMatches ||= uncertain;

    if (optimistic) {
      // we aren't removing objects in optimistic mode
      // we also don't want to trigger revalidation in optimistic mode
      // as it should be triggered when the optimistic job is done
      continue;
    }

    // object is no longer a strict match
    result.removed.add(obj);
    if (uncertain) {
      // since it might still be in the list we need to revalidate
      result.needsRevalidation = true;
    }
  }
}

export function reconcileListChanges(
  existingKeys: ReadonlySet<ObjectCacheKey>,
  changes: {
    keysToInsert: Iterable<ObjectCacheKey>;
    keysToRemove: ReadonlySet<CacheKey>;
  },
): ObjectCacheKey[] {
  const newList: ObjectCacheKey[] = [];
  for (const key of existingKeys) {
    if (!changes.keysToRemove.has(key)) {
      newList.push(key);
    }
  }
  for (const key of changes.keysToInsert) {
    newList.push(key);
  }

  return newList;
}
