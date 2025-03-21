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

import invariant from "tiny-invariant";
import { GeotimeSeriesPropertyImpl } from "../../createGeotimeSeriesProperty.js";
import { MediaReferencePropertyImpl } from "../../createMediaReferenceProperty.js";
import { TimeSeriesPropertyImpl } from "../../createTimeseriesProperty.js";
import { hydrateAttachmentFromRidInternal } from "../../public-utils/hydrateAttachmentFromRid.js";
import { get$as } from "./getDollarAs.js";
import { get$link } from "./getDollarLink.js";
import { ClientRef, ObjectDefRef, UnderlyingOsdkObject } from "./InternalSymbols.js";
const specialPropertyTypes = new Set(["attachment", "geotimeSeriesReference", "mediaReference", "numericTimeseries", "stringTimeseries", "sensorTimeseries"]);

// kept separate so we are not redefining these functions
// every time an object is created.
const basePropDefs = {
  "$as": {
    get: function () {
      return get$as(this[ObjectDefRef]);
    }
  },
  "$link": {
    get: function () {
      return get$link(this);
    }
  },
  "$clone": {
    value: function (update) {
      // I think `rawObj` is the same thing as `this` and can be removed?
      const rawObj = this[UnderlyingOsdkObject];
      const def = this[ObjectDefRef];
      if (update == null) {
        return createOsdkObject(this[ClientRef], def, {
          ...rawObj
        });
      }
      if (def.primaryKeyApiName in update && rawObj[def.primaryKeyApiName] !== update[def.primaryKeyApiName]) {
        throw new Error(`Cannot update ${def.apiName} object with differing primary key values `);
      }
      if (def.titleProperty in update && !("$title" in update)) {
        update.$title = update[def.titleProperty];
      }
      const newObject = {
        ...this[UnderlyingOsdkObject],
        ...update
      };
      return createOsdkObject(this[ClientRef], this[ObjectDefRef], newObject);
    }
  }
};

/**
 * @internal
 * @param client
 * @param objectDef
 * @param simpleOsdkProperties
 */
export function createOsdkObject(client, objectDef, simpleOsdkProperties) {
  // updates the object's "hidden class/map".
  const rawObj = simpleOsdkProperties;
  Object.defineProperties(rawObj, {
    [UnderlyingOsdkObject]: {
      enumerable: false,
      value: simpleOsdkProperties
    },
    [ObjectDefRef]: {
      value: objectDef,
      enumerable: false
    },
    [ClientRef]: {
      value: client,
      enumerable: false
    },
    ...basePropDefs
  });

  // Assign the special values
  for (const propKey of Object.keys(rawObj)) {
    if (propKey in objectDef.properties && typeof objectDef.properties[propKey].type === "string" && specialPropertyTypes.has(objectDef.properties[propKey].type)) {
      rawObj[propKey] = createSpecialProperty(client, objectDef, rawObj, propKey);
    }
  }
  return Object.freeze(rawObj);
}
function createSpecialProperty(client, objectDef, rawObject, p) {
  const rawValue = rawObject[p];
  const propDef = objectDef.properties[p];
  if (process.env.NODE_ENV !== "production") {
    !(propDef != null && typeof propDef.type === "string" && specialPropertyTypes.has(propDef.type)) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
  }
  {
    {
      {
        {
          if (propDef.type === "attachment") {
            if (Array.isArray(rawValue)) {
              return rawValue.map(a => hydrateAttachmentFromRidInternal(client, a.rid));
            }
            return hydrateAttachmentFromRidInternal(client, rawValue.rid);
          }
          if (propDef.type === "numericTimeseries" || propDef.type === "stringTimeseries" || propDef.type === "sensorTimeseries") {
            return new TimeSeriesPropertyImpl(client, objectDef.apiName, rawObject[objectDef.primaryKeyApiName], p);
          }
          if (propDef.type === "geotimeSeriesReference") {
            return new GeotimeSeriesPropertyImpl(client, objectDef.apiName, rawObject[objectDef.primaryKeyApiName], p, rawValue.type === "geotimeSeriesValue" ? {
              time: rawValue.timestamp,
              value: {
                type: "Point",
                coordinates: rawValue.position
              }
            } : undefined);
          }
          if (propDef.type === "mediaReference") {
            return new MediaReferencePropertyImpl({
              client,
              objectApiName: objectDef.apiName,
              primaryKey: rawObject[objectDef.primaryKeyApiName],
              propertyName: p
            });
          }
        }
      }
    }
  }
}
//# sourceMappingURL=createOsdkObject.js.map