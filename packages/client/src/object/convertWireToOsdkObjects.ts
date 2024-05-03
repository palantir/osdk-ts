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
import type { OntologyObjectV2 } from "@osdk/internal.foundry";
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

class LinkFetcherProxyHandler<Q extends AugmentedObjectTypeDefinition<any, any>>
  implements ProxyHandler<any>
{
  constructor(
    private readonly objDef: Q,
    private readonly primaryKey: any,
    private readonly client: MinimalClient,
  ) {}

  get(_target: any, p: string | symbol) {
    const linkDef = this.objDef.links[p as string];
    if (linkDef == null) {
      return;
    }

    const objectSet = createObjectSet(this.objDef, this.client).where({
      [this.objDef.primaryKeyApiName]: this.primaryKey,
    } as WhereClause<Q>).pivotTo(p as string);

    if (!linkDef.multiplicity) {
      return {
        get: <A extends SelectArg<any>>(options?: A) =>
          fetchSingle(
            this.client,
            this.objDef,
            options ?? {},
            getWireObjectSet(objectSet),
          ),
      };
    } else {
      return objectSet;
    }
  }

  ownKeys(): ArrayLike<string | symbol> {
    return Object.keys(this.objDef.links);
  }

  getOwnPropertyDescriptor(
    target: any,
    p: string | symbol,
  ): PropertyDescriptor | undefined {
    return {
      enumerable: true,
      configurable: true,
      get: () => {
        return this.get(target, p);
      },
    };
  }
}

function createPrototype<Q extends AugmentedObjectTypeDefinition<any, any>>(
  objDef: Q,
  client: MinimalClient,
) {
  if (process.env.NODE_ENV !== "production") {
    invariant(objDef.type === "object", "Expected object definition");
  }

  const sharedPropertyDefs = {
    $as: { value: $as },
  };
  // we can get away with a single interface proto
  const interfaceProto = Object.defineProperties({}, sharedPropertyDefs);

  const objectProto = Object.defineProperties({}, {
    $link: {
      get: function() {
        return new Proxy(
          {},
          new LinkFetcherProxyHandler(objDef, this["$primaryKey"], client),
        );
      },
    },
    ...sharedPropertyDefs,
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
      const def = objDef[InterfaceDefinitions][newDef];
      if (!def) {
        throw new Error(`Object does not implement interface '${newDef}'.`);
      }
      newDef = def as NEWQ;
    } else if (newDef.apiName === objDef.apiName) {
      return this[UnderlyingObject];
    }

    if (newDef.type !== "interface" && newDef.apiName !== this.$apiName) {
      throw new Error(
        `'${newDef.apiName}' is not an interface of '${this.$objectType}'.`,
      );
    }

    const underlying = this[UnderlyingObject];

    const common = { enumerable: true, configurable: true };

    // if we use a proxy here instead we can probably pull off interfaces reflecting the underlying object even if its updated

    // we are defining every time because it creates properties in the exact same order
    // keeping the meta classes down to one per interface/objecttype pair
    return Object.create(interfaceProto, {
      $apiName: {
        value: newDef.apiName,
        ...common,
      },
      $objectType: {
        value: objDef.apiName,
        ...common,
      },
      $primaryKey: {
        value: this["$primaryKey"],
        ...common,
      },
      ...Object.fromEntries(
        Object.keys(newDef.properties).map(p => {
          const value = underlying[objDef.spts![p]];
          return [p, {
            value,
            enumerable: value !== undefined,
          }];
        }),
      ),
      [UnderlyingObject]: {
        value: underlying,
      },
    });
  }

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
    : undefined;
}

const protoConverterCache = createCache(
  (
    client: MinimalClient,
    objectDef: AugmentedObjectTypeDefinition<any, any>,
  ): [{}, ((o: Record<string, any>) => void) | undefined] => {
    const proto = createPrototype(objectDef, client);
    const converter = createConverter(objectDef);
    return [proto, converter];
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
 * However, you must use the returned value, which will be whatever is correct.
 *
 * @internal
 * @param interfaceApiName - if undefined
 */
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string | undefined,
  forceRemoveRid: boolean = false,
): Promise<Osdk<ObjectOrInterfaceDefinition>[]> {
  if (forceRemoveRid) {
    for (const obj of objects) {
      delete obj.__rid;
    }
  }
  fixObjectPropertiesInline(objects);

  /*
    We need to create a local cache for the life of this function.
    Because the user may have their global cache set to "alwaysRevalidate",
    we want to be able to avoid making N calls to load object/interface information.

    Our local cache will delegate to the global one but since it also caches,
    we can short circuit the `alwaysRevalidate` logic.

    This tradeoff is slightly less accurate than `alwaysRevalidate` but is close
    enough given we got back objects at T-3 and if the types are inconsistent for
    T-2 and T-1, then they are guarenteed wrong for T-3. No matter what
    the user will get a failure case here. So we avoid the extra work.
   */
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
        if (sptProp in obj) {
          const value = obj[sptProp];
          delete obj[sptProp];
          if (value !== undefined) {
            obj[regularProp] = value;
          }
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
  // local cache delegates to the global one
  const localInterfaceCache = createAsyncCache((client, apiName: string) =>
    client.ontologyProvider.getInterfaceDefinition(apiName)
  );

  const localObjectCache = createAsyncCache(async (client, apiName: string) => {
    // first delegate to the global cache
    const objectDef = await client.ontologyProvider.getObjectDefinition(
      apiName,
    ) as AugmentedObjectTypeDefinition<any>;

    // ensure we have all of the interfaces loaded
    const interfaceDefs = Object.fromEntries((await Promise.all(
      objectDef.implements?.map(i => localInterfaceCache.get(client, i))
        ?? [],
    )).map(i => [i.apiName, i]));

    // save interfaces for later if not the first time
    if (objectDef[InterfaceDefinitions] == null) {
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
    if (uniqueApiNames.has($apiName)) continue;
    uniqueApiNames.add($apiName);
    // preseed the object cache without blocking
    // N.B localObjectCache will preseed the interface cache
    localObjectCache.get(client, $apiName);
  }

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
  [InterfaceDefinitions]: { [key: string]: InterfaceDefinition<any> };
}

function internalConvertObjectInPlace(
  objectDef: AugmentedObjectTypeDefinition<any, any>,
  client: MinimalClient,
  obj: OntologyObjectV2,
) {
  const [proto, converter] = protoConverterCache.get(
    client,
    objectDef as AugmentedObjectTypeDefinition<any, any>,
  );

  Object.setPrototypeOf(obj, proto);

  Object.defineProperties(obj, {
    [OriginClient]: { value: client },
    [UnderlyingObject]: { value: obj },
  });

  if (converter) {
    converter(obj);
  }
}
