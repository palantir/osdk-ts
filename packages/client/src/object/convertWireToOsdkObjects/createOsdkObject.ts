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

import type { PropertySecurity } from "@osdk/api";
import type { MediaReference } from "@osdk/foundry.core";
import type {
  Attachment,
  PropertySecurities,
  PropertySecurity as WirePropertySecurity,
  ReferenceValue,
  SecuredPropertyValue,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { GeotimeSeriesPropertyImpl } from "../../createGeotimeSeriesProperty.js";
import { MediaReferencePropertyImpl } from "../../createMediaReferenceProperty.js";
import { TimeSeriesPropertyImpl } from "../../createTimeseriesProperty.js";
import type { DerivedPropertyRuntimeMetadata } from "../../derivedProperties/derivedPropertyRuntimeMetadata.js";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { hydrateAttachmentFromRidInternal } from "../../public-utils/hydrateAttachmentFromRid.js";
import { createObjectSpecifierFromPrimaryKey } from "../../util/objectSpecifierUtils.js";
import {
  applyPropertyFormatter,
  type FormatPropertyOptions,
} from "../formatting/applyPropertyFormatter.js";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { get$as } from "./getDollarAs.js";
import { get$link } from "./getDollarLink.js";
import {
  ClientRef,
  ObjectDefRef,
  PropertySecuritiesRef,
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
  "$propertySecurities": {
    get: function(this: ObjectHolder) {
      return this[PropertySecuritiesRef];
    },
    enumerable: true,
  },
  "$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata": {
    get: function(this: ObjectHolder) {
      return {
        ObjectMetadata: this[ObjectDefRef],
      };
    },
    enumerable: false,
  },
  "$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue": {
    value: function(
      this: ObjectHolder,
      propertyApiName: string,
      options?: FormatPropertyOptions,
    ): string | undefined {
      const rawObj = this[UnderlyingOsdkObject] as SimpleOsdkProperties;
      const def = this[ObjectDefRef];
      const propertyValue = rawObj[propertyApiName];

      return applyPropertyFormatter(
        propertyValue,
        def.properties[propertyApiName],
        rawObj,
        options,
      );
    },
    enumerable: false,
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
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata = {},
  wirePropertySecurities: PropertySecurities[] | undefined = [],
): ObjectHolder {
  const { parsedObject, clientPropertySecurities } = parseWhenSecuritiesLoaded(
    wirePropertySecurities,
    simpleOsdkProperties,
    objectDef,
    derivedPropertyTypeByName,
  );

  // updates the object's "hidden class/map".
  const rawObj = parsedObject as ObjectHolder;
  Object.defineProperties(
    rawObj,
    {
      [UnderlyingOsdkObject]: {
        enumerable: false,
        value: simpleOsdkProperties,
      },
      [PropertySecuritiesRef]: {
        enumerable: false,
        value: clientPropertySecurities,
      },
      [ObjectDefRef]: { value: objectDef, enumerable: false }, // TODO: Potentially update when GA metadata field
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
    } else if (propKey in derivedPropertyTypeByName) {
      rawObj[propKey] = modifyRdpProperties(
        client,
        derivedPropertyTypeByName,
        rawObj[propKey],
        propKey,
      );
    }
  }

  return Object.freeze(rawObj);
}

function modifyRdpProperties(
  client: MinimalClient,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  rawValue: any,
  propKey: string,
): any {
  if (
    derivedPropertyTypeByName[propKey].definition.type === "selection"
    && derivedPropertyTypeByName[propKey].definition.operation.type
      === "count"
  ) {
    const num = Number(rawValue);
    invariant(
      Number.isSafeInteger(num),
      "Count aggregation for derived property " + propKey
        + " returned a value larger than safe integer.",
    );
    return num;
  } // Selected or collected properties need to be deserialized specially when constructed with RDP
  else if (
    derivedPropertyTypeByName[propKey].selectedOrCollectedPropertyType
      != null
    && typeof (derivedPropertyTypeByName[propKey]
        .selectedOrCollectedPropertyType.type)
      === "string"
    && specialPropertyTypes.has(
      derivedPropertyTypeByName[propKey].selectedOrCollectedPropertyType
        .type,
    )
  ) {
    switch (
      derivedPropertyTypeByName[propKey].selectedOrCollectedPropertyType
        ?.type
    ) {
      case "attachment":
        if (Array.isArray(rawValue)) {
          return rawValue.map(a =>
            hydrateAttachmentFromRidInternal(client, a.rid)
          );
        } else {
          return hydrateAttachmentFromRidInternal(
            client,
            (rawValue as Attachment).rid,
          );
        }
        break;
      default:
        invariant(
          false,
          "Derived property aggregations for Timeseries and Media are not supported",
        );
    }
  }
  return rawValue;
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
  if (propDef.type === "attachment") {
    if (Array.isArray(rawValue)) {
      return rawValue.map(a => hydrateAttachmentFromRidInternal(client, a.rid));
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
      mediaReference: rawValue as MediaReference,
    });
  }
}

function parseWhenSecuritiesLoaded(
  wirePropertySecurities: PropertySecurities[] | undefined,
  rawObject: SimpleOsdkProperties,
  objectDef: FetchedObjectTypeDefinition,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata = {},
): {
  parsedObject: SimpleOsdkProperties;
  clientPropertySecurities:
    | { [propName: string]: PropertySecurity[] | PropertySecurity[][] }
    | undefined;
} {
  if (wirePropertySecurities == null || wirePropertySecurities.length === 0) {
    return { parsedObject: rawObject, clientPropertySecurities: undefined };
  }

  const parsedObject: SimpleOsdkProperties = { ...rawObject };
  const clientPropertySecurities: {
    [propName: string]: PropertySecurity[] | PropertySecurity[][];
  } = {};

  for (const propKey of Object.keys(rawObject)) {
    if (
      propKey in objectDef.properties || propKey in derivedPropertyTypeByName
    ) {
      const value = rawObject[propKey];

      if (Array.isArray(value)) {
        const newVal: any[] = [];
        const newSecurities: PropertySecurity[][] = [];
        value.forEach(spv => {
          invariant(
            typeof spv === "object"
              && spv != null
              && "value" in spv
              && "propertySecurityIndex" in spv,
            "Expected destructured secured property value object in array",
          );
          const securedValue = spv as SecuredPropertyValue;
          newVal.push(securedValue.value);
          const securityIndex = securedValue.propertySecurityIndex;
          invariant(
            securityIndex != null,
            "Expected property security index to be defined",
          );
          invariant(
            securityIndex < wirePropertySecurities.length,
            "Expected property security index to be within bounds",
          );
          newSecurities.push(
            wirePropertySecurities[securityIndex].disjunction
              .map(wireToClientPropertySecurities),
          );
        });
        parsedObject[propKey] = newVal;
        clientPropertySecurities[propKey] = newSecurities;
      } // Check if this is a secured property value object
      else if (
        typeof value === "object"
        && value != null
        && "value" in value
        && "propertySecurityIndex" in value
      ) {
        const securedValue = value as SecuredPropertyValue;
        parsedObject[propKey] = securedValue.value;

        const securityIndex = securedValue.propertySecurityIndex;
        invariant(
          securityIndex != null,
          "Expected property security index to be defined",
        );
        invariant(
          securityIndex < wirePropertySecurities.length,
          "Expected property security index to be within bounds",
        );
        clientPropertySecurities[propKey] =
          wirePropertySecurities[securityIndex].disjunction
            .map(wireToClientPropertySecurities);
      } else {
        // Regular property without security
        parsedObject[propKey] = value;
      }
    }
  }

  return { parsedObject, clientPropertySecurities };
}

function wireToClientPropertySecurities(
  propertySecurity: WirePropertySecurity,
): PropertySecurity {
  switch (propertySecurity.type) {
    case "propertyMarkingSummary":
      return {
        type: "propertyMarkings",
        conjunctive: propertySecurity.conjunctive,
        containerConjunctive: propertySecurity.containerConjunctive,
        disjunctive: propertySecurity.disjunctive,
        containerDisjunctive: propertySecurity.containerDisjunctive,
      };
    case "errorComputingSecurity":
      return { type: "errorComputingSecurity" };
    case "unsupportedPolicy":
      return { type: "unsupportedPolicy" };
  }
}
