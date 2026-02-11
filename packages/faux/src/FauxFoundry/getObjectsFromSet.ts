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
import invariant from "tiny-invariant";
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
          const match = toIntersect.find(x =>
            x.__apiName === obj.__apiName
            && x.__primaryKey === obj.__primaryKey
          );

          if (!match) {
            set.delete(obj);
          } else if (obj["$propsToReturn"] || match["$propsToReturn"]) {
            obj["$propsToReturn"] = {
              ...obj["$propsToReturn"],
              ...match["$propsToReturn"],
            };
          }
        }
      }
      return Array.from(set);
    }

    case "searchAround": {
      const base = getObjectsFromSet(ds, objectSet.objectSet, methodInput);
      return base.flatMap(o => {
        const ret = ds.getLinksOrThrow(
          o.__apiName,
          o.__primaryKey,
          objectSet.link,
        );
        return ret;
      });
    }

    case "interfaceLinkSearchAround": {
      const base = getObjectsFromSet(ds, objectSet.objectSet, methodInput);
      return base.flatMap(o => {
        const ret = ds.getLinksOrThrow(
          o.__apiName,
          o.__primaryKey,
          objectSet.interfaceLink,
        );
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

    case "methodInput":
      invariant(methodInput, "expected a methodInput");
      return [methodInput];

    case "asBaseObjectTypes": {
      const results = getObjectsFromSet(ds, objectSet.objectSet, methodInput);
      return results.map(obj => {
        const originalObj = ds.getObject(obj.__apiName, obj.__primaryKey);
        if (!originalObj) {
          throw new Error(
            `asBaseObjectTypes: could not find original object ${obj.__apiName}:${obj.__primaryKey}`,
          );
        }
        return {
          ...obj,
          $propsToReturn: originalObj,
        };
      });
    }

    case "asType":
      throw new Error(
        `Unhandled objectSet type ${JSON.stringify(objectSet)} in shared.test`,
      );

    case "interfaceBase":
      const relevantObjectTypes = ds
        .ontology
        .getAllObjectTypes().filter(x =>
          objectSet.interfaceType in x.implementsInterfaces2
        );

      // const ifaceDef = ds.ontology.getInterfaceType(objectTypeWithAllPropertyTypes);

      return relevantObjectTypes.flatMap(x =>
        Array.from(ds.getObjectsOfType(x.objectType.apiName))
      ).map(obj => {
        const objDef = ds.ontology.getObjectTypeFullMetadataOrThrow(
          obj.__apiName,
        );
        const ifaceMap = objDef.implementsInterfaces2[objectSet.interfaceType];
        const $propsToReturn = objectSet.includeAllBaseObjectProperties
          ? obj
          : Object.fromEntries(
            Object.values(ifaceMap.properties).map(
              (propApiName) => [propApiName, obj[propApiName]],
            ),
          );

        return ({
          ...objToInterface(ds, obj, objectSet.interfaceType),
          $propsToReturn,
        });
      });

    // This does not mimic KNN, it just returns `numNeighbors` objects
    case "nearestNeighbors":
      const { numNeighbors } = objectSet;
      const set = getObjectsFromSet(ds, objectSet.objectSet, methodInput);
      return set.slice(0, numNeighbors);

    case "reference":
      throw new Error(
        `Unhandled objectSet type ${JSON.stringify(objectSet)} in shared.test`,
      );
  }

  throw new Error(
    `Unhandled objectSet type ${JSON.stringify(objectSet)} in shared.test`,
  );
}

function objToInterface(
  ds: FauxDataStore,
  o: BaseServerObject,
  iface: OntologiesV2.InterfaceTypeApiName,
): BaseServerObject {
  const ifaceDef = ds.ontology.getInterfaceType(iface);
  const propMap = ds.ontology
    .getObjectTypeFullMetadataOrThrow(o.__apiName)
    .implementsInterfaces2[iface].properties;

  const { __apiName, __primaryKey, __rid, __title } = o;

  const ret: BaseServerObject = {
    __apiName,
    __primaryKey,
    __rid,
    __title,
  };
  for (const [sptApiName, propApiName] of Object.entries(propMap)) {
    ret[sptApiName] = o[propApiName];
  }
  return ret;
}

export function getDerivedPropertyValue(
  ds: FauxDataStore,
  obj: BaseServerObject,
  def: OntologiesV2.DerivedPropertyDefinition,
): any {
  switch (def.type) {
    case "selection": {
      return getDerivedPropertySelection(ds, obj, def);
    }
  }
  throw new Error(
    `Unhandled derived property type ${def.type} in ${JSON.stringify(def)}`,
  );
  // return obj[property.propertyIdentifier];
}

function getDerivedPropertySelection(
  ds: FauxDataStore,
  obj: BaseServerObject,
  { operation, objectSet }: OntologiesV2.SelectedPropertyExpression,
) {
  switch (operation.type) {
    case "get": {
      const objs = getObjectsFromSet(ds, objectSet, obj);
      if (objs.length > 1) {
        throw new Error("Cannot get more than one object from a set");
      }
      return objs[0]?.[operation.selectedPropertyApiName];
    }
    case "collectList": {
      const objs = getObjectsFromSet(ds, objectSet, obj);
      return objs.map(o => o[operation.selectedPropertyApiName]);
    }
    case "collectSet": {
      const objs = getObjectsFromSet(ds, objectSet, obj);
      return Array.from(
        new Set(objs.map(o => o[operation.selectedPropertyApiName])),
      );
    }
    case "count": {
      const objs = getObjectsFromSet(ds, objectSet, obj);
      return objs.length.toString();
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
