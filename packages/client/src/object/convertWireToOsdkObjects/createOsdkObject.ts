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
import { createAttachmentFromRid } from "../../createAttachmentFromRid.js";
import { GeotimeSeriesPropertyImpl } from "../../createGeotimeSeriesProperty.js";
import { MediaReferencePropertyImpl } from "../../createMediaReferenceProperty.js";
import { TimeSeriesPropertyImpl } from "../../createTimeseriesProperty.js";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { createClientCache } from "../Cache.js";
import { get$as } from "./getDollarAs.js";
import { get$link } from "./getDollarLink.js";
import {
  CachedPropertiesRef,
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

if (process.env.NODE_ENV !== "production") {
  const installed = Symbol();
  const gw: any = typeof window === "undefined" ? global : window;
  if (!(installed in gw)) {
    gw[installed] = true;

    gw.devtoolsFormatters ??= [];
    gw.devtoolsFormatters.push({
      header: function(object: any) {
        const raw = object[RawObject];
        if (raw == null) return null;

        return [
          "div",
          {},

          `Osdk.Instance<${raw.$apiName}> { $primaryKey:`,
          ["object", { object: raw.$primaryKey }],
          `, $title:`,
          ["object", { object: raw.$title }],
          `, ... }`,
        ];
      },
      hasBody: function(object: any) {
        return object[RawObject] != null;
      },
      body: function(object: any) {
        const raw = object[RawObject];
        if (raw == null) return null;

        return [
          "ol",
          {
            style: `
            list-style-type: none;
            padding-left: 0;
            margin-top: 0;
            margin-left: 18px
          `,
          },
          ["li", {}, "$raw:", ["object", { object: raw }]],
          // ...Object.keys(raw).map(key => {
          //   return [
          //     "li",
          //     {},
          //     [
          //       "span",
          //       { style: "color: #888888" },
          //       `${key}: `,
          //     ],
          //     ["object", { object: raw[key] }], // ["span", {}, `${key}: `]],
          //   ];
          // }),
        ];
      },
    });
  }
}

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
      [CachedPropertiesRef]: {
        value: new Map<string | symbol, any>(),
        writable: true,
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
            || propDef.type === "sensorTimeseries"
          ) {
            return new TimeSeriesPropertyImpl<
              (typeof propDef)["type"] extends "numericTimeseries" ? number
                : (typeof propDef)["type"] extends "stringTimeseries" ? string
                : number | string
            >(
              client,
              objectDef.apiName,
              target[RawObject][objectDef.primaryKeyApiName as string],
              p as string,
            );
          }
          if (propDef.type === "geotimeSeriesReference") {
            const instance = target[CachedPropertiesRef].get(p);
            if (instance != null) {
              return instance;
            }
            const geotimeProp = new GeotimeSeriesPropertyImpl<GeoJSON.Point>(
              client,
              objectDef.apiName,
              target[RawObject][objectDef.primaryKeyApiName as string],
              p as string,
              rawValue.type === "geotimeSeriesValue"
                ? {
                  time: rawValue.timestamp,
                  value: {
                    type: "Point",
                    coordinates: rawValue.position,
                  },
                }
                : undefined,
            );
            target[CachedPropertiesRef].set(p, geotimeProp);
            return geotimeProp;
          }
          if (propDef.type === "mediaReference") {
            return new MediaReferencePropertyImpl({
              client,
              objectApiName: objectDef.apiName,
              primaryKey:
                target[RawObject][objectDef.primaryKeyApiName as string],
              propertyName: p as string,
            });
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
