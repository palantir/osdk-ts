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

import type {
  OntologyIrDerivedPropertiesDefinition,
  OntologyIrDerivedPropertyAggregation,
  OntologyIrObjectTypeBlockDataV2,
  OntologyIrObjectTypeDatasource,
  OntologyIrObjectTypeDatasourceDefinition,
  OntologyIrPropertyType,
} from "@osdk/client.unstable";
import {
  buildDatasource,
  cleanAndValidateLinkTypeId,
  convertObjectStatus,
} from "../../api/defineOntology.js";
import type { ObjectPropertyType } from "../../api/object/ObjectPropertyType.js";
import type { ObjectType } from "../../api/object/ObjectType.js";
import type {
  DerivedPropertyAggregation,
  ObjectTypeDatasourceDefinition_derived,
} from "../../api/object/ObjectTypeDatasourceDefinition.js";
import { isExotic } from "../../api/properties/PropertyTypeType.js";
import { convertDatasourceDefinition } from "./convertDatasourceDefinition.js";
import { convertObjectPropertyType } from "./convertObjectPropertyType.js";

export function convertObject(
  objectType: ObjectType,
): OntologyIrObjectTypeBlockDataV2 {
  const { derivedDatasources, derivedPropertyNames } =
    extractDerivedDatasources(objectType);

  const propertyDatasources: OntologyIrObjectTypeDatasource[] =
    (objectType.properties ?? [])
      .filter(prop => !derivedPropertyNames.includes(prop.apiName))
      .flatMap(prop => extractPropertyDatasource(prop, objectType.apiName));

  const classificationGroupMarkingNames = extractMarkingGroups(
    objectType.properties ?? [],
    "CBAC",
  );

  const mandatoryMarkingNames = extractMarkingGroups(
    objectType.properties ?? [],
    "MANDATORY",
  );

  const classificationInputGroup = classificationGroupMarkingNames.length > 0
    ? classificationGroupMarkingNames.reduce((l, r) => l + "/" + r)
    : undefined;

  const mandatoryInputGroup = mandatoryMarkingNames.length > 0
    ? mandatoryMarkingNames.reduce((l, r) => l + "/" + r)
    : undefined;

  const objectDatasource = buildDatasource(
    objectType.apiName,
    convertDatasourceDefinition(
      objectType,
      (objectType.properties ?? []).filter(prop =>
        !derivedPropertyNames.includes(prop.apiName)
      ),
    ),
    classificationInputGroup,
    mandatoryInputGroup,
  );

  const implementations = objectType.implementsInterfaces ?? [];

  return {
    objectType: {
      displayMetadata: {
        description: objectType.description,
        displayName: objectType.displayName,
        groupDisplayName: undefined,
        icon: {
          type: "blueprint",
          blueprint: objectType.icon ?? { locator: "cube", color: "#2D72D2" },
        },
        pluralDisplayName: objectType.pluralDisplayName,
        visibility: objectType.visibility ?? "NORMAL",
      },
      primaryKeys: [objectType.primaryKeyPropertyApiName],
      propertyTypes: Object.fromEntries(
        objectType.properties?.map<[string, OntologyIrPropertyType]>(
          val => [val.apiName, convertObjectPropertyType(val)],
        ) ?? [],
      ),
      titlePropertyTypeRid: objectType.titlePropertyApiName,
      apiName: objectType.apiName,
      status: convertObjectStatus(objectType.status),
      redacted: false,
      implementsInterfaces2: implementations.map(impl => ({
        interfaceTypeApiName: impl.implements.apiName,
        linksV2: {},
        propertiesV2: Object.fromEntries(impl.propertyMapping
          .map(
            mappings => [mappings.interfaceProperty, {
              type: "propertyTypeRid",
              propertyTypeRid: mappings.mapsTo,
            }],
          )),
        properties: {},
      })),
      allImplementsInterfaces: {},
    },
    datasources: [
      ...propertyDatasources,
      ...derivedDatasources,
      objectDatasource,
    ],
    entityMetadata: {
      arePatchesEnabled: objectType.editsEnabled ?? false,
      aliases: objectType.aliases ?? [],
    },
    propertySecurityGroupPackagingVersion: {
      type: "v2",
      v2: {},
    },
  };
}

/**
 * Extracts marking group names of a specific type from object properties
 */
export function extractMarkingGroups(
  properties: ObjectPropertyType[],
  markingType: "CBAC" | "MANDATORY",
): string[] {
  return properties
    .map(prop => {
      if (
        typeof prop.type === "object"
        && prop.type.type === "marking"
        && prop.type.markingType === markingType
      ) {
        return prop.type.markingInputGroupName;
      }
      return undefined;
    })
    .filter((val): val is string => val !== undefined);
}
export function extractPropertyDatasource(
  property: ObjectPropertyType,
  objectTypeApiName: string,
): OntologyIrObjectTypeDatasource[] {
  if (!isExotic(property.type)) {
    return [];
  }
  const identifier = objectTypeApiName + "." + property.apiName;
  switch (property.type as string) {
    case "geotimeSeries":
      const geotimeDefinition: OntologyIrObjectTypeDatasourceDefinition = {
        type: "geotimeSeries",
        geotimeSeries: {
          geotimeSeriesIntegrationRid: identifier,
          properties: [property.apiName],
        },
      };
      return [buildDatasource(property.apiName, geotimeDefinition)];
    case "mediaReference":
      const mediaSetDefinition: OntologyIrObjectTypeDatasourceDefinition = {
        type: "mediaSetView",
        mediaSetView: {
          assumedMarkings: [],
          mediaSetViewLocator: identifier,
          properties: [property.apiName],
          uploadProperties: [],
        },
      };
      return [buildDatasource(property.apiName, mediaSetDefinition)];
    default:
      return [];
  }
}

function extractDerivedDatasources(
  objectType: ObjectType,
): {
  derivedDatasources: OntologyIrObjectTypeDatasource[];
  derivedPropertyNames: string[];
} {
  const inputDerivedDatasources = (objectType.datasources ?? []).filter(ds =>
    ds.type === "derived"
  );
  const derivedDatasources = inputDerivedDatasources.map((ds, i) =>
    buildDerivedDatasource(ds, i, objectType.apiName)
  );
  const derivedPropertyNames = inputDerivedDatasources.flatMap(ds =>
    Object.keys(ds.propertyMapping)
  );
  return { derivedDatasources, derivedPropertyNames };
}

function buildDerivedDatasource(
  datasource: ObjectTypeDatasourceDefinition_derived,
  index: number,
  objectTypeApiName: string,
): OntologyIrObjectTypeDatasource {
  const linkDefinition = {
    type: "multiHopLink",
    multiHopLink: {
      steps: datasource.linkDefinition.map(step => ({
        type: "searchAround",
        searchAround: {
          linkTypeIdentifier: {
            type: "linkType",
            linkType: cleanAndValidateLinkTypeId(step.linkType.apiName),
          },
          linkTypeSide: step.side ?? "SOURCE",
        },
      })),
    },
  };

  const isLinkedProperties =
    typeof Object.values(datasource.propertyMapping)[0] === "string";
  const derivedDefinition = isLinkedProperties
    ? {
      type: "linkedProperties",
      linkedProperties: {
        linkDefinition,
        propertyTypeMapping: Object.fromEntries(
          Object.entries(datasource.propertyMapping).map((
            [sourceProp, targetProp],
          ) => [sourceProp, {
            type: "propertyType",
            propertyType: targetProp,
          }]),
        ),
      },
    }
    : {
      type: "aggregatedProperties",
      aggregatedProperties: {
        linkDefinition,
        propertyTypeMapping: Object.fromEntries(
          Object.entries(datasource.propertyMapping).map((
            [sourceProp, agg],
          ) => [sourceProp, buildAggregation(agg)]),
        ),
      },
    };
  const fullDefinition: OntologyIrObjectTypeDatasourceDefinition = {
    type: "derived",
    derived: {
      definition: derivedDefinition as OntologyIrDerivedPropertiesDefinition,
    },
  };
  return buildDatasource(
    objectTypeApiName + ".derived." + index.toString(),
    fullDefinition,
  );
}

function buildAggregation(
  agg: DerivedPropertyAggregation,
): OntologyIrDerivedPropertyAggregation {
  const type = agg.type;
  const limit = "limit" in agg ? agg.limit : undefined;
  const foreignProperty = "property" in agg ? agg.property : undefined;
  const innerDef: any = {};
  if (type !== "count") {
    if (["collectList", "collectSet"].includes(type)) {
      innerDef["linkedProperty"] = {
        type: "propertyType",
        propertyType: foreignProperty,
      };
      innerDef["limit"] = limit;
    } else {
      innerDef["property"] = {
        type: "propertyType",
        propertyType: foreignProperty,
      };
    }
  }
  return {
    type,
    [type]: innerDef,
  } as unknown as OntologyIrDerivedPropertyAggregation;
}
