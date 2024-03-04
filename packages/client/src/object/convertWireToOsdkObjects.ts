/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/gateway/types";
import invariant from "tiny-invariant";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  createObjectSet,
  getWireObjectSet,
} from "../objectSet/createObjectSet.js";
import type { OsdkObject } from "../OsdkObject.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { WhereClause } from "../query/WhereClause.js";
import { Attachment } from "./Attachment.js";
import { createAsyncCache, createCache } from "./Cache.js";
import type { SelectArg } from "./fetchPage.js";
import { fetchSingle } from "./fetchSingle.js";

const OriginClient = Symbol();
const UnderlyingObject = Symbol();
const InterfaceDefinitions = Symbol();

function createPrototype<Q extends AugmentedObjectTypeDefinition<any, any>>(
  objDef: Q,
  client: MinimalClient,
) {
  // we can get away with a single interface proto
  const interfaceProto = {};
  Object.defineProperties(interfaceProto, {
    $as: {
      value: $as,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });

  const objectProto = {};

  Object.defineProperty(objectProto, "$link", {
    get: function() {
      const primaryKey = this["$primaryKey"];

      return new Proxy({}, {
        get(_target, p: string, _receiver) {
          const linkDef = objDef.links[p];
          if (linkDef == null) {
            return;
          }

          const objectSet = createObjectSet(objDef, client).where({
            [objDef.primaryKeyApiName]: primaryKey,
          } as WhereClause<Q>).pivotTo(p);

          if (!linkDef.multiplicity) {
            return {
              get: <A extends SelectArg<any>>(options?: A) =>
                fetchSingle(
                  client,
                  objDef,
                  options ?? {},
                  getWireObjectSet(objectSet),
                ),
            };
          } else {
            return objectSet;
          }
        },
      });
    },
    enumerable: false,
    configurable: false,
  });

  // We use the exact same logic for both the interface rep and the underlying rep
  function $as<NEWQ extends ObjectOrInterfaceDefinition<any>>(
    this: OsdkObject<any> & { $primaryKey: any } & { [UnderlyingObject]: any },
    newDef: NEWQ | string,
  ) {
    if (typeof newDef === "string") {
      if (newDef === objDef.apiName) {
        return this[UnderlyingObject];
      }
      const def = objDef[InterfaceDefinitions].find(i => i.apiName === newDef);
      if (!def) {
        throw new Error(`Object does not implement interface '${newDef}'.`);
      }
      newDef = def as NEWQ;
    } else if (newDef.apiName === objDef.apiName) {
      return this[UnderlyingObject];
    }

    invariant(newDef.type === "interface");

    const ret = {
      $apiName: newDef.apiName,
      $objectType: objDef.apiName,
      $primaryKey: this["$primaryKey"],
    };

    for (const p of Object.keys(newDef.properties)) {
      const value = (this as any)[objDef.spts![p]];

      // we are defining every time because it creates properties in the exact same order
      // keeping the meta classes down to one per interface/objecttype pair
      Object.defineProperty(ret, p, {
        value,
        configurable: false,
        enumerable: value !== undefined,
      });
    }

    Object.defineProperty(ret, UnderlyingObject, {
      value: this,
      configurable: false,
      enumerable: false,
    });
    Object.setPrototypeOf(ret, interfaceProto);
    return ret;
  }

  Object.defineProperty(objectProto, "$as", {
    value: $as,
    enumerable: false,
    configurable: false,
  });

  return objectProto;
}

// preprocess the ontology definition to more quickly apply object conversions when needed
function createConverter<Q extends ObjectTypeDefinition<any, any>>(
  objDef: Q,
) {
  const steps: Array<(o: Record<string, any>) => void> = [];

  for (
    const [key, value] of Object.entries(objDef.properties)
  ) {
    // attachments need a wrapper to provide functionality and to identify them at serialization time
    if (value.type === "attachment") {
      steps.push((o) => {
        if (o[key] != null) {
          if (Array.isArray(o[key])) {
            o[key] = o[key].map((a: any) => new Attachment(a.rid));
          } else {
            o[key] = new Attachment(o[key].rid);
          }
        }
      });
    }
  }

  return steps.length > 0
    ? (o: Record<string, any>) => {
      for (const step of steps) {
        step(o);
      }
    }
    : false as const;
}

const protoConverterCache = createCache(
  (
    client: MinimalClient,
    objectDef: AugmentedObjectTypeDefinition<any, any>,
  ) => {
    const proto = createPrototype(objectDef, client);
    const converter = createConverter(objectDef);
    return { proto, converter };
  },
);

const isAfterFeb2024OrNewApis = false;

/**
 * If interfaceApiName is not undefined, converts the instances of the
 * interface into their respective
 * underlying concrete types and then returns the $as() representation
 * for the consumers.
 *
 * Otherwise just does the conversion
 *
 * May mutate in place for performance reasons. If you need a clean copy,
 * keep it first.
 *
 * However, you must use the return value regardless.
 *
 * @param interfaceApiName - if undefined
 */
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string | undefined,
): Promise<Osdk<ObjectOrInterfaceDefinition>[]> {
  fixObjectPropertiesInline(objects);

  const localObjectCache = createLocalObjectCacheAndInitiatePreseed(
    objects,
    client,
  );

  for (const obj of objects) {
    const objectDef = await localObjectCache.get(
      client,
      obj.$apiName,
    );
    if (objectDef == null) {
      throw new Error(
        `Failed to find ontology definition for '${obj.$apiName}'`,
      );
    }

    if (interfaceApiName !== undefined) {
      // API returns interface spt names but we cache by real values
      for (
        const [sptProp, regularProp] of Object.entries(objectDef.spts!)
      ) {
        const value = obj[sptProp];
        delete obj[sptProp];
        if (value !== undefined) {
          obj[regularProp] = value;
        }
      }
    }

    internalConvertObjectInPlace(objectDef, client, obj);
  }

  if (interfaceApiName) {
    return objects.map(o => o.$as(interfaceApiName));
  } else {
    // we did the conversion so we can cast
    return objects as unknown as Osdk<ObjectOrInterfaceDefinition>[];
  }
}

function createLocalObjectCacheAndInitiatePreseed(
  objects: OntologyObjectV2[],
  client: MinimalClient,
) {
  const localInterfaceCache = createAsyncCache((client, apiName: string) =>
    client.ontology.provider.getInterfaceDefinition(apiName)
  );

  const localObjectCache = createAsyncCache(async (client, apiName: string) => {
    const objectDef = await client.ontology.provider.getObjectDefinition(
      apiName,
    ) as AugmentedObjectTypeDefinition<any>;

    if (objectDef[InterfaceDefinitions] == null) {
      const interfaceDefs = await Promise.all(
        objectDef.implements?.map(i => localInterfaceCache.get(client, i))
          ?? [],
      );

      Object.defineProperty(objectDef, InterfaceDefinitions, {
        value: interfaceDefs,
        enumerable: false,
        configurable: false,
        writable: false,
      });
    }
    return objectDef as AugmentedObjectTypeDefinition<any, any>;
  });

  const uniqueApiNames = new Set<string>();
  for (const { $apiName } of objects) {
    uniqueApiNames.add($apiName);
  }

  // preseed the cache without blocking
  Array.from(uniqueApiNames).map(n =>
    localObjectCache.get(client, n).then(a =>
      a.implements?.map(i => localInterfaceCache.get(client, i))
    )
  );
  return localObjectCache;
}

function fixObjectPropertiesInline(objs: OntologyObjectV2[]) {
  for (const obj of objs) {
    if (obj.__rid) {
      obj.$rid = obj.__rid;
      delete obj.__rid;
    }

    // Backend returns as __apiName but we want to stick to $ structure
    obj.$apiName = obj.__apiName;

    // for now these are the same but when we start doing interface projections the $objectType will always be underlying and
    // the $apiName will be for the current view (in current designs)
    obj.$objectType = obj.__apiName;

    // copying over for now as its always returned. In the future, this should just be inferred from underlying
    obj.$primaryKey = obj.__primaryKey;

    // After Feb 2024 (unless we have new apis):
    if (isAfterFeb2024OrNewApis) {
      delete obj.__apiName;
      delete obj.__primaryKey;
    } else {
      // Hide these from things like `console.log` so that people
      // don't think to use them.
      Object.defineProperties(obj, {
        "__apiName": {
          enumerable: false,
        },
        "__primaryKey": {
          enumerable: false,
        },
      });
    }
  }
}

interface AugmentedObjectTypeDefinition<K extends string, N = unknown>
  extends ObjectTypeDefinition<K, N>
{
  [InterfaceDefinitions]: InterfaceDefinition<any>[];
}

function internalConvertObjectInPlace(
  objectDef: AugmentedObjectTypeDefinition<any, any>,
  client: MinimalClient,
  obj: OntologyObjectV2,
) {
  const { proto, converter } = protoConverterCache.get(
    client,
    objectDef as AugmentedObjectTypeDefinition<any, any>,
  );

  Object.setPrototypeOf(obj, proto);

  Object.defineProperty(obj, OriginClient, {
    value: client,
    enumerable: false,
    configurable: false,
    writable: false,
  });

  if (converter) {
    converter(obj);
  }
}
