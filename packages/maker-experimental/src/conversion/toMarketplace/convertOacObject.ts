/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  DataConstraints,
  EditsHistory,
  MarketplaceObjectTypeEntityMetadata,
  ObjectTypeBlockDataV2,
  ObjectTypeDatasourceDefinition,
  PropertySecurityGroups,
  PropertyType,
  PropertyTypeMappingInfo,
  StructFieldType,
  Type,
} from "@osdk/client.unstable";
import type {
  EditsHistoryConfig,
  InterfaceType,
  OacDatasourceConfig,
  OacObjectTypeDefinition,
  OacPropertyDatasourceMapping,
  OacPropertyDefinition,
  OacPropertyDefinitionShape,
  OacSharedPropertyDefinition,
  PropertyTypeStatus,
  Type as DslType,
} from "@osdk/maker";
import {
  convertObjectStatus,
  defaultTypeClasses,
} from "@osdk/maker";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { distributeTypeHelper } from "../toConjure/distributeTypeHelper.js";
import { buildDatasource } from "./convertActionHelpers.js";
import { flattenInterface } from "./convertObject.js";

type PropertyEntry = [string, OacPropertyDefinitionShape];
type BaseDatasourceType = Extract<
  OacDatasourceConfig["type"],
  "dataset" | "restrictedView" | "stream"
>;

export function convertOacObject(
  objectType: OacObjectTypeDefinition,
  ridGenerator: OntologyRidGenerator,
): ObjectTypeBlockDataV2 {
  const propertyEntries = Object.entries(objectType.properties);
  const objectDatasource = buildDatasource(
    objectType.apiName,
    convertOacDatasourceDefinition(objectType, propertyEntries, ridGenerator),
    ridGenerator,
    extractMarkingGroup(propertyEntries, "CBAC"),
    extractMarkingGroup(propertyEntries, "MANDATORY"),
  );
  const implementations = objectType.interfaceImplementations ?? [];
  const objectTypeRid = ridGenerator.generateRidForObjectType(
    objectType.apiName,
  );

  const propertyTypes = Object.fromEntries(
    propertyEntries.map<[string, PropertyType]>(([apiName, property]) => {
      const convertedProperty = convertOacPropertyType(
        apiName,
        property,
        objectType.apiName,
        ridGenerator,
      );
      return [convertedProperty.rid, convertedProperty];
    }),
  );

  return {
    objectType: {
      displayMetadata: {
        description: objectType.displayMetadata?.description,
        displayName: objectType.displayName,
        groupDisplayName: undefined,
        icon: {
          type: "blueprint",
          blueprint: objectType.displayMetadata?.icon
            ? {
              locator: objectType.displayMetadata.icon.name,
              color: objectType.displayMetadata.icon.color,
            }
            : { locator: "cube", color: "#2D72D2" },
        },
        pluralDisplayName: objectType.pluralDisplayName,
        visibility: objectType.displayMetadata?.visibility ?? "NORMAL",
      },
      primaryKeys: [
        ridGenerator.generatePropertyRid(
          objectType.primaryKey,
          objectType.apiName,
        ),
      ],
      propertyTypes,
      titlePropertyTypeRid: ridGenerator.generatePropertyRid(
        objectType.titleProperty,
        objectType.apiName,
      ),
      apiName: objectType.apiName,
      rid: objectTypeRid,
      id: ridGenerator.generateObjectTypeId(objectType.apiName),
      status: convertOacStatus(objectType.status),
      redacted: false,
      implementsInterfaces: implementations.map(impl =>
        ridGenerator.generateRidForInterface(impl.implements.apiName)
      ),
      implementsInterfaces2: implementations.map(impl => {
        const allParents = flattenInterface(impl.implements, new Set());
        return {
          interfaceTypeRid: ridGenerator.generateRidForInterface(
            impl.implements.apiName,
          ),
          interfaceTypeApiName: impl.implements.apiName,
          links: {},
          linksV2: {},
          propertiesV2: Object.fromEntries(impl.propertyMapping.map(mapping => {
            const sourceInterface = allParents.find(
              (interfaceType: InterfaceType) =>
                interfaceType.propertiesV3[mapping.interfaceProperty]
                  !== undefined,
            )!;
            return [
              ridGenerator.generateInterfacePropertyTypeRid(
                mapping.interfaceProperty,
                sourceInterface.apiName,
              ),
              {
                type: "propertyTypeRid",
                propertyTypeRid: ridGenerator.generatePropertyRid(
                  mapping.mapsTo,
                  objectType.apiName,
                ),
              },
            ];
          })),
          properties: {},
        };
      }),
      allImplementsInterfaces: {},
      traits: { workflowObjectTypeTraits: {} },
      typeGroups: [],
    },
    datasources: [objectDatasource],
    entityMetadata: buildOacEntityMetadata(objectType, ridGenerator),
    propertySecurityGroupPackagingVersion: { type: "v2", v2: {} },
    schemaMigrations: undefined,
    writebackDatasets: [],
  } as ObjectTypeBlockDataV2;
}

function convertOacPropertyType(
  apiName: string,
  property: OacPropertyDefinitionShape,
  objectTypeApiName: string,
  ridGenerator: OntologyRidGenerator,
): PropertyType {
  const sharedPropertyTypeApiName = isOacSharedPropertyDefinition(property)
    ? property.sharedPropertyTypeApiName
    : undefined;
  const type = isOacSharedPropertyDefinition(property)
    ? defaultSharedPropertyType()
    : convertOacType(property.type, ridGenerator, apiName);
  return {
    apiName,
    id: apiName,
    rid: ridGenerator.generatePropertyRid(apiName, objectTypeApiName),
    sharedPropertyTypeApiName,
    displayMetadata: isOacSharedPropertyDefinition(property)
      ? {
        displayName: apiName,
        description: undefined,
        visibility: "NORMAL",
      }
      : {
        displayName: property.display.displayName,
        description: property.display.description,
        visibility: property.display.visibility ?? "NORMAL",
      },
    indexedForSearch: isOacSharedPropertyDefinition(property)
      ? true
      : property.indexedForSearch ?? shouldIndexOacType(property.type),
    ruleSetBinding: undefined,
    baseFormatter: undefined,
    type,
    typeClasses: isOacSharedPropertyDefinition(property)
      ? defaultTypeClasses
      : defaultTypeClassesForOacType(property.type),
    status: convertOacStatus(property.status),
    inlineAction: undefined,
    dataConstraints: isOacSharedPropertyDefinition(property)
      ? undefined
      : convertOacDataConstraints(property),
    sharedPropertyTypeRid: sharedPropertyTypeApiName
      ? ridGenerator.generateSptRid(sharedPropertyTypeApiName)
      : undefined,
    valueType: undefined,
  };
}

function convertOacType(
  type: DslType,
  ridGenerator: OntologyRidGenerator,
  propertyApiName: string,
): Type {
  switch (type.type) {
    case "string":
      return {
        type: "string",
        string: {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: false,
          supportsEfficientLeadingWildcard: false,
          supportsExactMatching: true,
        },
      };
    case "decimal":
      return {
        type: "decimal",
        decimal: { precision: type.precision, scale: type.scale },
      };
    case "geohash":
      return { type: "geohash", geohash: {} };
    case "geoshape":
      return { type: "geoshape", geoshape: {} };
    case "attachment":
      return { type: "attachment", attachment: {} };
    case "marking":
      return {
        type: "marking",
        marking: { markingType: convertOacMarkingType(type.markingType) },
      };
    case "array":
      return {
        type: "array",
        array: {
          subtype: convertOacType(
            type.elementType,
            ridGenerator,
            propertyApiName,
          ),
          reducers: [],
        },
      };
    case "struct":
      return convertOacStructType(type, ridGenerator, propertyApiName);
    case "unsupported":
      throw new Error("Unsupported OAC property types cannot be compiled");
    case "cipherText":
      throw new Error("Cipher text OAC property types are not supported yet");
    default:
      return distributeTypeHelper(type.type);
  }
}

function convertOacStructType(
  type: DslType.Struct,
  ridGenerator: OntologyRidGenerator,
  propertyApiName: string,
): Type {
  const structFields = Object.entries(type.fields).map<StructFieldType>((
    [fieldApiName, field],
  ) => ({
    structFieldRid: ridGenerator.generateStructFieldRid(
      propertyApiName,
      fieldApiName,
    ),
    apiName: fieldApiName,
    displayMetadata: {
      displayName: field.displayName,
      description: field.description,
    },
    typeClasses: [],
    aliases: [],
    fieldType: convertOacType(field.type, ridGenerator, propertyApiName),
  }));
  const fieldByApiName = new Map(
    structFields.map(field => [field.apiName, field]),
  );
  const mainValueFields = type.mainValues
    ?.map(fieldApiName => fieldByApiName.get(fieldApiName)?.structFieldRid)
    .filter((rid): rid is string => rid != null);

  return {
    type: "struct",
    struct: {
      structFields,
      mainValue: mainValueFields && mainValueFields.length > 0
        ? {
          type: fieldByApiName.get(type.mainValues![0])!.fieldType,
          fields: mainValueFields,
        }
        : undefined,
    },
  };
}

function defaultSharedPropertyType(): Type {
  return {
    type: "string",
    string: {
      analyzerOverride: undefined,
      enableAsciiFolding: undefined,
      isLongText: false,
      supportsEfficientLeadingWildcard: false,
      supportsExactMatching: true,
    },
  };
}

function convertOacDatasourceDefinition(
  objectType: OacObjectTypeDefinition,
  propertyEntries: PropertyEntry[],
  ridGenerator: OntologyRidGenerator,
): ObjectTypeDatasourceDefinition {
  const datasourceInfo = getOacBackingDatasourceInfo(objectType);
  if (datasourceInfo.type === "table") {
    throw new Error("Table datasources are not supported by OAC block data");
  }
  const baseDatasourceType = datasourceInfo.type ?? "dataset";

  if (baseDatasourceType === "stream") {
    const propertyMapping = Object.fromEntries(
      propertyEntries.map(([apiName, property]) => [
        ridGenerator.generatePropertyRid(apiName, objectType.apiName),
        resolveOacStreamPropertyColumn(
          apiName,
          property,
          datasourceInfo.hasBackingDatasource,
        ),
      ]),
    );
    const streamLocator = ridGenerator.generateStreamLocator(
      objectType.apiName,
      new Set(Object.values(propertyMapping)),
    );
    return {
      type: "streamV2",
      streamV2: {
        streamLocator: {
          branchId: streamLocator.branchId,
          streamLocatorRid: streamLocator.streamLocatorRid,
        },
        propertyMapping,
        retentionPolicy: buildRetentionPolicy(objectType.datasources),
        propertySecurityGroups: undefined,
      },
    };
  }

  const propertyMapping = buildOacPropertyMapping(
    objectType.apiName,
    propertyEntries,
    datasourceInfo.hasBackingDatasource,
    ridGenerator,
  );
  const columnNames = extractColumnNames(propertyMapping);

  if (baseDatasourceType === "restrictedView") {
    const restrictedViewLocator = ridGenerator.generateRestrictedViewLocator(
      objectType.apiName,
      columnNames,
    );
    return {
      type: "restrictedViewV2",
      restrictedViewV2: {
        restrictedViewRid: restrictedViewLocator.rid,
        propertyMapping,
      },
    };
  }

  const datasetLocator = ridGenerator.generateDatasetLocator(
    objectType.apiName,
    columnNames,
  );
  if (hasMarkingProperty(propertyEntries)) {
    return {
      type: "datasetV3",
      datasetV3: {
        datasetRid: datasetLocator.rid,
        propertyMapping,
        branchId: datasetLocator.branchId,
        propertySecurityGroups: buildDefaultPropertySecurityGroups(
          objectType.apiName,
          propertyEntries,
          ridGenerator,
        ),
      },
    };
  }
  return {
    type: "datasetV2",
    datasetV2: {
      datasetRid: datasetLocator.rid,
      branchId: datasetLocator.branchId,
      propertyMapping,
    },
  };
}

function buildOacPropertyMapping(
  objectTypeApiName: string,
  propertyEntries: PropertyEntry[],
  hasBackingDatasource: boolean,
  ridGenerator: OntologyRidGenerator,
): Record<string, PropertyTypeMappingInfo> {
  return Object.fromEntries(
    propertyEntries.map(([apiName, property]) => {
      const propertyRid = ridGenerator.generatePropertyRid(
        apiName,
        objectTypeApiName,
      );
      if (isOacPropertyEditOnly(property, hasBackingDatasource)) {
        return [propertyRid, { type: "editOnly", editOnly: {} }];
      }
      if (
        !isOacSharedPropertyDefinition(property)
        && property.type.type === "struct"
      ) {
        return [propertyRid, {
          type: "struct",
          struct: {
            column: resolveSingleOacPropertyColumn(
              apiName,
              property,
              hasBackingDatasource,
            ),
            mapping: Object.fromEntries(
              Object.keys(property.type.fields).map(fieldName => [
                fieldName,
                { apiName: fieldName, mappings: {} },
              ]),
            ),
          },
        }];
      }
      return [propertyRid, {
        type: "column",
        column: resolveSingleOacPropertyColumn(
          apiName,
          property,
          hasBackingDatasource,
        ),
      }];
    }),
  );
}

function getOacBackingDatasourceInfo(
  objectType: OacObjectTypeDefinition,
): { type?: OacDatasourceConfig["type"]; hasBackingDatasource: boolean } {
  const explicitTypes = new Set(
    objectType.datasources?.map(datasource => datasource.type) ?? [],
  );
  if (explicitTypes.size > 1) {
    throw new Error(
      `OAC block data only supports one base datasource per object type`,
    );
  }

  const inferredTypes = new Set<OacDatasourceConfig["type"]>();
  Object.values(objectType.properties).forEach(property => {
    collectOacDatasourceTypes(property.datasource, inferredTypes);
  });
  if (inferredTypes.size > 1) {
    throw new Error(
      `OAC block data only supports one base datasource per object type`,
    );
  }

  const explicitType = Array.from(explicitTypes)[0];
  const inferredType = Array.from(inferredTypes)[0];
  if (explicitType && inferredType && explicitType !== inferredType) {
    throw new Error(
      `Property datasource mappings use ${inferredType}, but the object type declares ${explicitType}`,
    );
  }

  return {
    type: explicitType ?? inferredType,
    hasBackingDatasource: explicitType != null || inferredType != null,
  };
}

function collectOacDatasourceTypes(
  datasource: OacPropertyDatasourceMapping | undefined,
  types: Set<OacDatasourceConfig["type"]>,
): void {
  if (!datasource) {
    return;
  }
  if (datasource.type === "primaryKey") {
    datasource.columns.forEach(column => {
      if (column.type !== "redacted") {
        types.add(column.type);
      }
    });
    return;
  }
  if (datasource.type !== "unsupported" && datasource.type !== "redacted") {
    types.add(datasource.type);
  }
}

function resolveOacPropertyColumns(
  apiName: string,
  property: OacPropertyDefinitionShape,
  hasBackingDatasource: boolean,
): string[] {
  const datasource = property.datasource;
  if (!datasource) {
    return hasBackingDatasource ? [] : [apiName];
  }

  switch (datasource.type) {
    case "primaryKey":
      return datasource.columns.flatMap(column =>
        column.type === "redacted" ? [] : [column.column]
      );
    case "dataset":
    case "restrictedView":
    case "stream":
    case "table":
      return "column" in datasource && datasource.column !== undefined
        ? [datasource.column]
        : [];
    case "unsupported":
    case "redacted":
      return [];
  }
}

function resolveSingleOacPropertyColumn(
  apiName: string,
  property: OacPropertyDefinitionShape,
  hasBackingDatasource: boolean,
): string {
  const columns = resolveOacPropertyColumns(
    apiName,
    property,
    hasBackingDatasource,
  );
  if (columns.length === 0) {
    throw new Error(`Property ${apiName} does not map to a datasource column`);
  }
  if (columns.length > 1) {
    throw new Error(
      `Property ${apiName} maps to multiple datasource columns, but OAC block data supports a single column mapping`,
    );
  }
  return columns[0];
}

function resolveOacStreamPropertyColumn(
  apiName: string,
  property: OacPropertyDefinitionShape,
  hasBackingDatasource: boolean,
): string {
  if (isOacPropertyEditOnly(property, hasBackingDatasource)) {
    throw new Error(
      `Property ${apiName} is edit-only, but stream datasource block data requires a column mapping`,
    );
  }
  return resolveSingleOacPropertyColumn(
    apiName,
    property,
    hasBackingDatasource,
  );
}

function isOacPropertyEditOnly(
  property: OacPropertyDefinitionShape,
  hasBackingDatasource: boolean,
): boolean {
  return property.editOnly === true
    || (property.datasource == null && hasBackingDatasource)
    || isOacEditOnlyDatasource(property.datasource);
}

function isOacEditOnlyDatasource(
  datasource: OacPropertyDatasourceMapping | undefined,
): boolean {
  return datasource != null
    && datasource.type !== "primaryKey"
    && datasource.type !== "unsupported"
    && datasource.type !== "redacted"
    && !("column" in datasource);
}

function extractColumnNames(
  propertyMapping: Record<string, PropertyTypeMappingInfo>,
): Set<string> {
  return new Set(
    Object.values(propertyMapping).flatMap(mapping => {
      if (mapping.type === "column") {
        return [mapping.column];
      }
      if (mapping.type === "struct") {
        return [mapping.struct.column];
      }
      return [];
    }),
  );
}

function buildRetentionPolicy(
  datasources: OacObjectTypeDefinition["datasources"],
) {
  const stream = datasources?.find(datasource => datasource.type === "stream");
  if (stream?.type !== "stream" || !stream.retentionPeriod) {
    return { type: "none" as const, none: {} };
  }
  return {
    type: "time" as const,
    time: { window: convertToJavaDurationFormat(stream.retentionPeriod) },
  };
}

function buildDefaultPropertySecurityGroups(
  objectTypeApiName: string,
  propertyEntries: PropertyEntry[],
  ridGenerator: OntologyRidGenerator,
): PropertySecurityGroups {
  return {
    groups: [
      {
        properties: propertyEntries.map(([apiName]) =>
          ridGenerator.generatePropertyRid(apiName, objectTypeApiName)
        ),
        rid: ridGenerator.generateRid("defaultObjectSecurityPolicy"),
        security: {
          type: "granular",
          granular: {
            viewPolicy: {
              granularPolicyCondition: {
                type: "and",
                and: { conditions: [] },
              },
              additionalMandatory: {
                markings: [],
                assumedMarkings: [],
              },
            },
          },
        },
        type: { type: "primaryKey", primaryKey: {} },
      },
    ],
  };
}

function buildOacEntityMetadata(
  objectType: OacObjectTypeDefinition,
  ridGenerator: OntologyRidGenerator,
): MarketplaceObjectTypeEntityMetadata {
  const metadata = {
    arePatchesEnabled: objectType.allowEdits ?? false,
    aliases: objectType.displayMetadata?.aliases ?? [],
    diffEdits: false,
    entityConfig: {
      objectDbTypeConfigs: {
        highbury: {
          objectDbConfigs: {
            "ri.highbury.main.cluster.1": { configValue: "{}" },
          },
        },
      },
    },
    editsResolutionStrategies: { strategies: {} },
    targetStorageBackend: { type: "objectStorageV2", objectStorageV2: {} },
    editsHistory: convertOacEditsHistory(
      ridGenerator,
      objectType.apiName,
      objectType.editsHistoryConfig,
    ),
  };
  return metadata as unknown as MarketplaceObjectTypeEntityMetadata;
}

function convertOacEditsHistory(
  ridGenerator: OntologyRidGenerator,
  apiName: string,
  config?: EditsHistoryConfig,
): EditsHistory | undefined {
  if (!config) {
    return undefined;
  }
  if (!config.enabled) {
    return { type: "none", none: {} };
  }
  return {
    type: "config",
    config: {
      store: ridGenerator.generateRidForObjectType(apiName),
      storeAllPreviousProperties: config.storeAllPreviousProperties,
    },
  };
}

function convertOacDataConstraints(
  property: OacPropertyDefinition,
): DataConstraints | undefined {
  if (property.dataConstraints?.requireValues == null) {
    if (property.type.type === "marking") {
      return {
        propertyTypeConstraints: [],
        nullability: undefined,
        nullabilityV2: { noNulls: true },
      };
    }
    return undefined;
  }

  return {
    propertyTypeConstraints: [],
    nullability: undefined,
    nullabilityV2: {
      noNulls: true,
      noEmptyCollections: property.type.type === "array"
        && property.dataConstraints.requireValues === true,
    },
  };
}

function convertOacStatus(
  status: OacObjectTypeDefinition["status"] | PropertyTypeStatus | undefined,
) {
  if (typeof status === "object" && status != null) {
    return {
      type: "deprecated",
      deprecated: {
        message: status.message,
        deadline: status.deprecationDeadline,
        replacedBy: status.replacedBy,
      },
    };
  }
  return convertObjectStatus(status);
}

function convertOacMarkingType(markingType: DslType.Marking["markingType"]) {
  return markingType === "mandatory" ? "MANDATORY" : "CBAC";
}

function defaultTypeClassesForOacType(type: DslType) {
  if (type.type === "struct" || type.type === "attachment") {
    return [];
  }
  return defaultTypeClasses;
}

function shouldIndexOacType(type: DslType): boolean {
  return type.type !== "attachment";
}

function isOacSharedPropertyDefinition(
  property: OacPropertyDefinitionShape,
): property is OacSharedPropertyDefinition {
  return "sharedPropertyTypeApiName" in property;
}

function hasMarkingProperty(propertyEntries: PropertyEntry[]): boolean {
  return propertyEntries.some(([_, property]) =>
    !isOacSharedPropertyDefinition(property) && property.type.type === "marking"
  );
}

function extractMarkingGroup(
  propertyEntries: PropertyEntry[],
  markingType: "CBAC" | "MANDATORY",
): string | undefined {
  const markings = propertyEntries.flatMap(([_, property]) => {
    if (
      isOacSharedPropertyDefinition(property)
      || property.type.type !== "marking"
    ) {
      return [];
    }
    return convertOacMarkingType(property.type.markingType) === markingType
        && property.type.markingInputGroupName
      ? [property.type.markingInputGroupName]
      : [];
  });
  return markings.length > 0 ? markings.join("/") : undefined;
}

function convertToJavaDurationFormat(iso8601: string): string {
  const match = iso8601.match(
    /^P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,
  );
  if (!match) return iso8601;

  const weeks = parseInt(match[1] || "0", 10);
  const days = parseInt(match[2] || "0", 10);
  const hours = parseInt(match[3] || "0", 10);
  const minutes = parseInt(match[4] || "0", 10);
  const seconds = parseInt(match[5] || "0", 10);

  const totalHours = (weeks * 7 + days) * 24 + hours;

  const parts: string[] = [];
  if (totalHours > 0) parts.push(`${totalHours}H`);
  if (minutes > 0) parts.push(`${minutes}M`);
  if (seconds > 0) parts.push(`${seconds}S`);

  return parts.length > 0 ? `PT${parts.join("")}` : "PT0S";
}
