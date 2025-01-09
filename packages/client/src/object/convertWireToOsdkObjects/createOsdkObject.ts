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
import invariant from "tiny-invariant";
import { createAttachmentFromRid } from "../../createAttachmentFromRid.js";
import { GeotimeSeriesPropertyImpl } from "../../createGeotimeSeriesProperty.js";
import { MediaReferencePropertyImpl } from "../../createMediaReferenceProperty.js";
import { TimeSeriesPropertyImpl } from "../../createTimeseriesProperty.js";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { get$as } from "./getDollarAs.js";
import { get$link } from "./getDollarLink.js";
import {
  ClientRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

interface InternalOsdkInstance {
  [ObjectDefRef]: FetchedObjectTypeDefinition;
  [ClientRef]: MinimalClient;
}

const specialPropertyTypes = new Set(
  [
    "attachment",
    "geotimeSeriesReference",
    "mediaReference",
    "numericTimeseries",
    "stringTimeseries",
    "sensorTimeseries",
  ],
);

// kept separate so we are not redefining these functions
// every time an object is created.
const basePropDefs = {
  "$as": {
    get: function(this: InternalOsdkInstance) {
      return get$as(this[ObjectDefRef]);
    },
  },
  "$link": {
    get: function(this: InternalOsdkInstance & ObjectHolder<any>) {
      return get$link(this);
    },
  },
};

/** @internal */
export function createOsdkObject<
  Q extends FetchedObjectTypeDefinition,
>(
  client: MinimalClient,
  objectDef: Q,
  rawObj: OntologyObjectV2,
): Osdk<ObjectTypeDefinition, any> {
  // updates the object's "hidden class/map".
  Object.defineProperties(rawObj, {
    [UnderlyingOsdkObject]: {
      enumerable: false,
      value: rawObj,
    },
    [ObjectDefRef]: { value: objectDef, enumerable: false },
    [ClientRef]: { value: client, enumerable: false },
    ...basePropDefs,
  });

  // Assign the special values
  for (const propKey of Object.keys(rawObj)) {
    if (
      propKey in objectDef.properties
      && typeof (objectDef.properties[propKey].type) === "string"
      && specialPropertyTypes.has(objectDef.properties[propKey].type)
    ) {
      rawObj[propKey] = createSpecialProperty(
        client,
        objectDef,
        rawObj as any,
        propKey,
      );
    }
  }

  return Object.freeze(rawObj) as Osdk<ObjectTypeDefinition, any>;
}

function createSpecialProperty(
  client: MinimalClient,
  objectDef: FetchedObjectTypeDefinition,
  rawObject: Osdk.Instance<any>,
  p: keyof typeof rawObject & string | symbol,
) {
  const rawValue = rawObject[p as any];
  const propDef = objectDef.properties[p as any];
  if (process.env.NODE_ENV !== "production") {
    invariant(
      propDef != null && typeof propDef.type === "string"
        && specialPropertyTypes.has(propDef.type),
    );
  }
  {
    {
      {
        {
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
              rawObject[objectDef.primaryKeyApiName as string],
              p as string,
            );
          }

          if (propDef.type === "geotimeSeriesReference") {
            return new GeotimeSeriesPropertyImpl<GeoJSON.Point>(
              client,
              objectDef.apiName,
              rawObject[objectDef.primaryKeyApiName as string],
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
          }
          if (propDef.type === "mediaReference") {
            return new MediaReferencePropertyImpl({
              client,
              objectApiName: objectDef.apiName,
              primaryKey: rawObject[objectDef.primaryKeyApiName as string],
              propertyName: p as string,
            });
          }
        }
      }
    }
  }
}
