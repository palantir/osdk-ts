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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import stableStringify from "json-stable-stringify";
import invariant from "tiny-invariant";
import { nearestNeighborRequestHandlers } from "../stubs/nearestNeighborRequests.js";
import type { BaseServerObject } from "./BaseServerObject.js";
import type { FauxDataStore } from "./FauxDataStore.js";
import { filterObjects } from "./filterObjects.js";

export function getObjectsFromSet(
  ds: FauxDataStore,
  objectSet: OntologiesV2.ObjectSet,
  methodInput: BaseServerObject | undefined,
): Array<BaseServerObject> {
  switch (objectSet.type) {
    case "base":
      const ret = Array.from(ds.getObjectsOfType(objectSet.objectType));
      return ret;

    case "filter": {
      const base = getObjectsFromSet(ds, objectSet.objectSet, methodInput);
      return filterObjects(
        base,
        objectSet.where,
      );
    }

    case "union": {
      const set = new Set<BaseServerObject>();
      for (const objSet of objectSet.objectSets) {
        const objects = getObjectsFromSet(ds, objSet, methodInput);
        for (const obj of objects) {
          set.add(obj);
        }
      }
      return Array.from(set);
    }

    case "subtract": {
      const set = new Set<BaseServerObject>(
        getObjectsFromSet(ds, objectSet.objectSets[0], methodInput),
      );
      for (let i = 1; i < objectSet.objectSets.length; i++) {
        const toSubtract = getObjectsFromSet(
          ds,
          objectSet.objectSets[i],
          methodInput,
        );
        for (const obj of toSubtract) {
          set.delete(obj);
        }
      }
      return Array.from(set);
    }

    case "intersect": {
      const set = new Set<BaseServerObject>(
        getObjectsFromSet(ds, objectSet.objectSets[0], methodInput),
      );
      for (let i = 1; i < objectSet.objectSets.length; i++) {
        const toIntersect = getObjectsFromSet(
          ds,
          objectSet.objectSets[i],
          methodInput,
        );
        for (const obj of set) {
          if (!toIntersect.includes(obj)) {
            set.delete(obj);
          }
        }
      }
      return Array.from(set);
    }

    case "searchAround": {
      const base = getObjectsFromSet(ds, objectSet.objectSet, methodInput);
      return base.flatMap(o => {
        const ret = ds.getLinks(o.__apiName, o.__primaryKey, objectSet.link);
        return ret;
      });
    }

    case "static": {
      return objectSet.objects.map(x => ds.getObjectByRid(x)).filter(x =>
        x != null
      );
    }

    case "withProperties": {
      const { derivedProperties } = objectSet;

      const base = getObjectsFromSet(ds, objectSet.objectSet, methodInput);
      return base.map(obj => {
        const extra = Object.fromEntries(
          Object.entries(derivedProperties).map(([k, v]) => {
            return [k, getDerivedPropertyValue(ds, obj, v)];
          }),
        );

        return { ...obj, ...extra };
      });
    }

    case "nearestNeighbors": {
      return nearestNeighborRequestHandlers[stableStringify(objectSet)];
    }

    case "methodInput":
      invariant(methodInput, "expected a methodInput");
      return [methodInput];
  }

  throw new Error(
    `Unhandled objectSet type ${JSON.stringify(objectSet)} in shared.test`,
  );
}

export function getDerivedPropertyValue(
  ds: FauxDataStore,
  obj: BaseServerObject,
  def: OntologiesV2.DerivedPropertyDefinition,
): any {
  switch (def.type) {
    case "selection": {
      return z(ds, obj, def);
    }
  }
  throw new Error(
    `Unhandled derived property type ${def.type} in ${JSON.stringify(def)}`,
  );
  // return obj[property.propertyIdentifier];
}

function z(
  ds: FauxDataStore,
  obj: BaseServerObject,
  { operation, objectSet }: OntologiesV2.SelectedPropertyDefinition,
) {
  switch (operation.type) {
    case "get": {
      const objs = getObjectsFromSet(ds, objectSet, obj);
      if (objs.length > 1) {
        throw new Error("Cannot get more than one object from a set");
      }
      return objs[0]?.[operation.selectedPropertyApiName];
    }
  }
}

export function createOrderBySortFn(
  orderBy: OntologiesV2.SearchOrderByV2,
) {
  const fns = orderBy.fields.map(({ field, direction }) => {
    return (
      a: BaseServerObject | undefined,
      b: BaseServerObject | undefined,
    ): number => {
      const aValue = a?.[field];
      const bValue = b?.[field];

      if (aValue == null && bValue == null) {
        return 0;
      }
      if (aValue == null) {
        return 1;
      }
      if (bValue == null) {
        return -1;
      }
      const m = direction === "asc" ? -1 : 1;
      return aValue < bValue ? m : aValue > bValue ? -m : 0;
    };
  });

  return (
    a: BaseServerObject | undefined,
    b: BaseServerObject | undefined,
  ): number => {
    for (const sortFn of fns) {
      const ret = sortFn(a, b);
      if (ret !== 0) {
        return ret;
      }
    }
    return 0;
  };
}
