/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/internal.foundry.core";
import { OntologiesV2 } from "@osdk/internal.foundry.ontologiesv2";
import { createAttachmentFromRid } from "../../createAttachmentFromRid.js";
import { GeotimeSeriesPropertyImpl } from "../../createGeotimeSeriesProperty.js";
import { TimeSeriesPropertyImpl } from "../../createTimeseriesProperty.js";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { createClientCache } from "../Cache.js";
import { get$as } from "./getDollarAs.js";
import { get$link } from "./getDollarLink.js";
import {
  ClientRef,
  ObjectDefRef,
  RawObject,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type {
  ObjectHolder,
  ObjectHolderPrototypeOwnProps,
} from "./ObjectHolder.js";
import type { PropertyDescriptorRecord } from "./PropertyDescriptorRecord.js";

const objectPrototypeCache = createClientCache(
  function(client, objectDef: FetchedObjectTypeDefinition) {
    return Object.create(
      null,
      {
        [ObjectDefRef]: { value: objectDef },
        [ClientRef]: { value: client },
        "$as": { value: get$as(objectDef) },
        "$link": {
          get: function(this: ObjectHolder<typeof objectDef>) {
            return get$link(this);
          },
        },
        "$updateInternalValues": {
          value: function(
            this: ObjectHolder<typeof objectDef>,
            newValues: Record<string, any>,
          ) {
            this[RawObject] = Object.assign(
              {},
              this[RawObject],
              newValues,
            );
          },
        },
      } satisfies PropertyDescriptorRecord<ObjectHolderPrototypeOwnProps>,
    );
  },
);

/** @internal */
export function createOsdkObject<
  Q extends FetchedObjectTypeDefinition,
>(
  client: MinimalClient,
  objectDef: Q,
  rawObj: OntologyObjectV2,
): Osdk<ObjectTypeDefinition, any> {
  // We use multiple layers of prototypes to maximize reuse and also to keep
  // [RawObject] out of `ownKeys`. This keeps the code in the proxy below simpler.
  const objectHolderPrototype = Object.create(
    objectPrototypeCache.get(client, objectDef),
    {
      [RawObject]: {
        value: rawObj,
        writable: true, // so we can allow updates
      },
    },
  );

  // we separate the holder out so we can update
  // the underlying data without having to return a new object
  // we also need the holder so we can customize the console.log output
  const holder: ObjectHolder<Q> = Object.create(objectHolderPrototype);

  const osdkObject: any = new Proxy(holder, {
    ownKeys(target) {
      return Reflect.ownKeys(target[RawObject]);
    },
    get(target, p, receiver) {
      switch (p) {
        case UnderlyingOsdkObject:
          // effectively point back to the proxy
          return receiver;
      }

      if (p in target) return target[p as keyof typeof target];

      if (p in rawObj) {
        const rawValue = target[RawObject][p as any];
        const propDef = objectDef.properties[p as any];
        if (propDef) {
          if (propDef.type === "attachment") {
            if (Array.isArray(rawValue)) {
              return rawValue.map(a => createAttachmentFromRid(client, a.rid));
            }
            return createAttachmentFromRid(client, rawValue.rid);
          }
          if (
            propDef.type === "numericTimeseries"
            || propDef.type === "stringTimeseries"
          ) {
            return new TimeSeriesPropertyImpl<
              (typeof propDef)["type"] extends "numericTimeseries" ? number
                : string
            >(
              client,
              objectDef.apiName,
              target[RawObject][objectDef.primaryKeyApiName as string],
              p as string,
            );
          }
          if (propDef.type === "geotimeSeriesReference") {
            return new GeotimeSeriesPropertyImpl<GeoJSON.Point>(
              client,
              objectDef.apiName,
              target[RawObject][objectDef.primaryKeyApiName as string],
              p as string,
            );
          }
        }
        return rawValue;
      }

      // we do not do any fall through to avoid unexpected behavior
    },

    set(target, p, newValue) {
      // allow the prototype to update this value
      if (p === RawObject) {
        // symbol only exists internally so no one else can hit this
        target[p as typeof RawObject] = newValue;
        return true;
      }
      return false;
    },

    getOwnPropertyDescriptor(target, p) {
      if (p === RawObject) {
        return Reflect.getOwnPropertyDescriptor(target, p);
      }

      if (target[RawObject][p as string] != null) {
        return { configurable: true, enumerable: true };
      }
      return undefined;
    },
  });
  return osdkObject;
}
