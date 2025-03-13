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

import type { Attachment, ReferenceValue } from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { GeotimeSeriesPropertyImpl } from "../../createGeotimeSeriesProperty.js";
import { MediaReferencePropertyImpl } from "../../createMediaReferenceProperty.js";
import { TimeSeriesPropertyImpl } from "../../createTimeseriesProperty.js";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { hydrateAttachmentFromRidInternal } from "../../public-utils/hydrateAttachmentFromRid.js";
import { createObjectSpecifierFromPrimaryKey } from "../../util/objectSpecifierUtils.js";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { get$as } from "./getDollarAs.js";
import { get$link } from "./getDollarLink.js";
import {
  ClientRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

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
    get: function(this: ObjectHolder) {
      return get$as(this[ObjectDefRef]);
    },
  },
  "$link": {
    get: function(this: ObjectHolder) {
      return get$link(this);
    },
  },
  "$clone": {
    value: function(
      this: ObjectHolder,
      update: Record<string, any> | undefined,
    ) {
      // I think `rawObj` is the same thing as `this` and can be removed?
      const rawObj = this[UnderlyingOsdkObject] as SimpleOsdkProperties;
      const def = this[ObjectDefRef];

      if (update == null) {
        return createOsdkObject(this[ClientRef], def, { ...rawObj });
      }

      if (
        def.primaryKeyApiName in update
        && rawObj[def.primaryKeyApiName] !== update[def.primaryKeyApiName]
      ) {
        throw new Error(
          `Cannot update ${def.apiName} object with differing primary key values `,
        );
      }

      if (def.titleProperty in update && !("$title" in update)) {
        update.$title = update[def.titleProperty];
      }

      const newObject = { ...this[UnderlyingOsdkObject], ...update };
      return createOsdkObject(this[ClientRef], this[ObjectDefRef], newObject);
    },
  },
  "$objectSpecifier": {
    get: function(this: ObjectHolder) {
      const rawObj = this[UnderlyingOsdkObject];
      return createObjectSpecifierFromPrimaryKey(
        this[ObjectDefRef],
        rawObj.$primaryKey,
      );
    },
    enumerable: true,
  },
};

/**
 * @internal
 * @param client
 * @param objectDef
 * @param simpleOsdkProperties
 */
export function createOsdkObject(
  client: MinimalClient,
  objectDef: FetchedObjectTypeDefinition,
  simpleOsdkProperties: SimpleOsdkProperties,
): ObjectHolder {
  // updates the object's "hidden class/map".
  const rawObj = simpleOsdkProperties as ObjectHolder;
  Object.defineProperties(
    rawObj,
    {
      [UnderlyingOsdkObject]: {
        enumerable: false,
        value: simpleOsdkProperties,
      },
      [ObjectDefRef]: { value: objectDef, enumerable: false },
      [ClientRef]: { value: client, enumerable: false },
      ...basePropDefs,
    } satisfies Record<keyof ObjectHolder, PropertyDescriptor>,
  );

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
        rawObj,
        propKey,
      );
    }
  }

  return Object.freeze(rawObj);
}

function createSpecialProperty(
  client: MinimalClient,
  objectDef: FetchedObjectTypeDefinition,
  rawObject: ObjectHolder,
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
              return rawValue.map(a =>
                hydrateAttachmentFromRidInternal(client, a.rid)
              );
            }
            return hydrateAttachmentFromRidInternal(
              client,
              (rawValue as Attachment).rid,
            );
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
              (rawValue as ReferenceValue).type === "geotimeSeriesValue"
                ? {
                  time: (rawValue as ReferenceValue).timestamp,
                  value: {
                    type: "Point",
                    coordinates: (rawValue as ReferenceValue).position,
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
