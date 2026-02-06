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
  DerivedPropertiesDefinition,
  DerivedPropertyAggregation as DerivedPropertyAggregationWire,
  ObjectTypeBlockDataV2,
  ObjectTypeDatasource,
  ObjectTypeDatasourceDefinition,
  PropertyType,
} from "@osdk/client.unstable";
import { randomUUID } from "crypto";
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
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { convertDatasourceDefinition } from "./convertDatasourceDefinition.js";
import { convertObjectPropertyType } from "./convertObjectPropertyType.js";

export function convertObject(
  objectType: ObjectType,
  ridGenerator: OntologyRidGenerator,
): ObjectTypeBlockDataV2 {
  const { derivedDatasources, derivedPropertyNames } =
    extractDerivedDatasources(objectType, ridGenerator);

  const propertyDatasources: ObjectTypeDatasource[] =
    (objectType.properties ?? [])
      .filter(prop => !derivedPropertyNames.includes(prop.apiName))
      .flatMap(prop =>
        extractPropertyDatasource(prop, objectType.apiName, ridGenerator)
      );

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
      ridGenerator,
    ),
    ridGenerator,
    classificationInputGroup,
    mandatoryInputGroup,
  );

  const implementations = objectType.implementsInterfaces ?? [];

  const objectTypeRid = ridGenerator.generateRidForObjectType(
    objectType.apiName,
  );

  // Convert propertyTypes to use RIDs as keys
  const propertyTypesWithRids = Object.fromEntries(
    objectType.properties?.map<[string, PropertyType]>(
      val => {
        const convertedProp = convertObjectPropertyType(
          val,
          objectType.apiName,
          ridGenerator,
        );
        return [convertedProp.rid, convertedProp];
      },
    ) ?? [],
  );

  const titlePropertyRid = ridGenerator.generatePropertyRid(
    objectType.titlePropertyApiName,
    objectType.apiName,
  );

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
      primaryKeys: [
        ridGenerator.generatePropertyRid(
          objectType.primaryKeyPropertyApiName,
          objectType.apiName,
        ),
      ],
      propertyTypes: propertyTypesWithRids,
      titlePropertyTypeRid: titlePropertyRid,
      apiName: objectType.apiName,
      rid: objectTypeRid,
      id: randomUUID(),
      status: convertObjectStatus(objectType.status),
      redacted: false,
      implementsInterfaces: implementations.map(impl =>
        ridGenerator.generateRidForInterface(impl.implements.apiName)
      ),
      implementsInterfaces2: implementations.map(impl => ({
        interfaceTypeRid: ridGenerator.generateRidForInterface(
          impl.implements.apiName,
        ),
        interfaceTypeApiName: impl.implements.apiName,
        links: {},
        linksV2: {},
        propertiesV2: Object.fromEntries(impl.propertyMapping
          .map(
            mappings => [mappings.interfaceProperty, {
              type: "propertyTypeRid",
              propertyTypeRid: ridGenerator.generatePropertyRid(
                mappings.mapsTo,
                objectType.apiName,
              ),
            }],
          )),
        properties: {},
      })),
      allImplementsInterfaces: {},
      traits: { workflowObjectTypeTraits: {} },
      typeGroups: [],
    },
    datasources: [
      ...propertyDatasources,
      ...derivedDatasources,
      objectDatasource,
    ],
    entityMetadata: {
      // TODO: Expand entity metadata with all required fields
      arePatchesEnabled: objectType.editsEnabled ?? false,
    aliases: objectType.aliases ?? [],
      diffEdits: false,
      entityConfig: {
        // TODO: Add objectDbTypeConfigs based on storage backend configuration
        objectDbTypeConfigs: {},
      },
      targetStorageBackend: { type: "objectStorageV2", objectStorageV2: {} },
    },
    
    // TODO: Add schema migrations support
    schemaMigrations: undefined,
    // TODO: Add writeback datasets support
    writebackDatasets: [],
    //propertySecurityGroupPackagingVersion: {
    //  type: "v2",
    //  v2: {},
    //},
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
  ridGenerator: OntologyRidGenerator,
): ObjectTypeDatasource[] {
  if (!isExotic(property.type)) {
    return [];
  }
  const identifier = objectTypeApiName + "." + property.apiName;
  switch (property.type as string) {
    case "geotimeSeries":
      const geotimeDefinition: ObjectTypeDatasourceDefinition = {
        type: "geotimeSeries",
        geotimeSeries: {
          geotimeSeriesIntegrationRid: ridGenerator
            .generateRidForGeotimeSeriesIntegration(
              identifier,
            ),
          properties: [
            ridGenerator.generatePropertyRid(
              property.apiName,
              objectTypeApiName,
            ),
          ],
        },
      };
      return [
        buildDatasource(property.apiName, geotimeDefinition, ridGenerator),
      ];
    case "mediaReference":
      const mediaSetDefinition: ObjectTypeDatasourceDefinition = {
        type: "mediaSetView",
        mediaSetView: {
          assumedMarkings: [],
          mediaSetViewLocator: {
            mediaSetBranchRid: "",
            mediaSetRid: "",
            mediaSetViewRid: ""
          },
          properties: [ridGenerator.generatePropertyRid(
              property.apiName,
              objectTypeApiName,
            )],
        },
      };
      return [
        buildDatasource(property.apiName, mediaSetDefinition, ridGenerator),
      ];
    default:
      return [];
  }
}

function extractDerivedDatasources(
  objectType: ObjectType,
  ridGenerator: OntologyRidGenerator,
): {
  derivedDatasources: ObjectTypeDatasource[];
  derivedPropertyNames: string[];
} {
  const inputDerivedDatasources = (objectType.datasources ?? []).filter(ds =>
    ds.type === "derived"
  );
  const derivedDatasources = inputDerivedDatasources.map((ds, i) =>
    buildDerivedDatasource(ds, i, objectType.apiName, ridGenerator)
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
  ridGenerator: OntologyRidGenerator,
): ObjectTypeDatasource {
  // TODO: Convert linkType from API name to RID
  const linkDefinition = {
    type: "multiHopLink" as const,
    multiHopLink: {
      steps: datasource.linkDefinition.map(step => ({
        type: "searchAround" as const,
        searchAround: {
          linkTypeIdentifier: {
            type: "linkType" as const,
            linkType: ridGenerator.generateRidForLinkType(
              cleanAndValidateLinkTypeId(step.linkType.apiName),
            ),
          },
          linkTypeSide: step.side ?? "SOURCE",
        },
      })),
    },
  };

  const isLinkedProperties =
    typeof Object.values(datasource.propertyMapping)[0] === "string";
  const derivedDefinition: DerivedPropertiesDefinition = isLinkedProperties
    ? {
      type: "linkedProperties",
      linkedProperties: {
        linkDefinition,
        propertyTypeMapping: Object.fromEntries(
          Object.entries(datasource.propertyMapping).map((
            [sourceProp, targetProp],
          ) => [
            ridGenerator.generatePropertyRid(
              sourceProp,
              objectTypeApiName,
            ),
            {
              type: "propertyType" as const,
              propertyType: ridGenerator.generatePropertyRid(
                targetProp,
                objectTypeApiName,
              ),
            },
          ]),
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
          ) => [
            ridGenerator.generatePropertyRid(
              sourceProp,
              objectTypeApiName,
            ),
            buildAggregation(agg, ridGenerator),
          ]),
        ),
      },
    };
  const fullDefinition: ObjectTypeDatasourceDefinition = {
    type: "derived",
    derived: {
      definition: derivedDefinition,
    },
  };
  return buildDatasource(
    objectTypeApiName + ".derived." + index.toString(),
    fullDefinition,
    ridGenerator,
  );
}

function buildAggregation(
  agg: DerivedPropertyAggregation,
  ridGenerator: OntologyRidGenerator,
): DerivedPropertyAggregationWire {
  const type = agg.type;
  const limit = "limit" in agg ? agg.limit : undefined;
  const foreignProperty = "property" in agg ? agg.property : undefined;
  const innerDef: any = {};
  // TODO: Convert property references in aggregations to RIDs
  if (type !== "count") {
    if (["collectList", "collectSet"].includes(type)) {
      innerDef["linkedProperty"] = {
        type: "propertyType",
        propertyType: foreignProperty
          ? ridGenerator.generateRid(`property.unknown.${foreignProperty}`)
          : undefined,
      };
      innerDef["limit"] = limit;
    } else {
      innerDef["property"] = {
        type: "propertyType",
        propertyType: foreignProperty
          ? ridGenerator.generateRid(`property.unknown.${foreignProperty}`)
          : undefined,
      };
    }
  }
  return {
    type,
    [type]: innerDef,
  } as unknown as DerivedPropertyAggregationWire;
}
