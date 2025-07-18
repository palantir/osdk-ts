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

import type {
  ActionTypePermissionInformation,
  ActionTypeStatus,
  OntologyIr,
  OntologyIrActionTypeBlockDataV2,
  OntologyIrActionValidation,
  OntologyIrAllowedParameterValues,
  OntologyIrBaseParameterType,
  OntologyIrImportedTypes,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrLinkDefinition,
  OntologyIrLinkTypeBlockDataV2,
  OntologyIrManyToManyLinkTypeDatasource,
  OntologyIrMarketplaceInterfaceType,
  OntologyIrObjectTypeBlockDataV2,
  OntologyIrObjectTypeDatasource,
  OntologyIrObjectTypeDatasourceDefinition,
  OntologyIrOneToManyLinkDefinition,
  OntologyIrOntologyBlockDataV2,
  OntologyIrParameter,
  OntologyIrPropertyType,
  OntologyIrSection,
  OntologyIrSharedPropertyType,
  OntologyIrSharedPropertyTypeBlockDataV2,
  OntologyIrValueTypeBlockData,
  OntologyIrValueTypeBlockDataEntry,
  ParameterId,
  ParameterRenderHint,
  ParameterRequiredConfiguration,
  PropertyTypeMappingInfo,
  RetentionPolicy,
  SectionId,
} from "@osdk/client.unstable";
import * as fs from "fs";
import * as path from "path";
import invariant from "tiny-invariant";
import { isExotic } from "./defineObject.js";
import {
  convertActionParameterConditionalOverride,
  convertActionVisibility,
} from "./ontologyUtils.js";
import {
  convertNullabilityToDataConstraint,
  convertType,
  convertValueType,
  convertValueTypeDataConstraints,
  defaultTypeClasses,
  getPropertyTypeName,
  hasRenderHints,
  shouldNotHaveRenderHints,
} from "./propertyConversionUtils.js";
import type {
  ActionParameter,
  ActionParameterRequirementConstraint,
  ActionType,
  InterfaceType,
  LinkType,
  ObjectPropertyType,
  ObjectType,
  OneToManyLinkTypeDefinition,
  OntologyDefinition,
  OntologyEntityType,
  SharedPropertyType,
} from "./types.js";
import { OntologyEntityTypeEnum } from "./types.js";

// type -> apiName -> entity
/** @internal */
export let ontologyDefinition: OntologyDefinition;

// type -> apiName -> entity
/** @internal */
export let importedTypes: OntologyDefinition;

// namespace -> version
/** @internal */
export let dependencies: Record<string, string>;

/** @internal */
export let namespace: string;

type OntologyAndValueTypeIrs = {
  ontology: OntologyIr;
  valueType: OntologyIrValueTypeBlockData;
};

export function updateOntology<
  T extends OntologyEntityType,
>(
  entity: T,
): void {
  if (entity.__type !== OntologyEntityTypeEnum.VALUE_TYPE) {
    ontologyDefinition[entity.__type][entity.apiName] = entity;
    return;
  }
  // value types are a special case
  if (
    ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][entity.apiName]
      === undefined
  ) {
    ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][entity.apiName] = [];
  }
  ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][entity.apiName]
    .push(entity);
}

export async function defineOntology(
  ns: string,
  body: () => void | Promise<void>,
  outputDir: string | undefined,
  dependencyFile?: string,
): Promise<OntologyAndValueTypeIrs> {
  namespace = ns;
  dependencies = {};
  ontologyDefinition = {
    OBJECT_TYPE: {},
    ACTION_TYPE: {},
    LINK_TYPE: {},
    INTERFACE_TYPE: {},
    SHARED_PROPERTY_TYPE: {},
    VALUE_TYPE: {},
  };
  importedTypes = {
    SHARED_PROPERTY_TYPE: {},
    OBJECT_TYPE: {},
    ACTION_TYPE: {},
    LINK_TYPE: {},
    INTERFACE_TYPE: {},
    VALUE_TYPE: {},
  };
  try {
    await body();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Unexpected error while processing the body of the ontology",
      e,
    );
    throw e;
  }

  if (outputDir) {
    writeStaticObjects(outputDir);
  }
  if (dependencyFile) {
    writeDependencyFile(dependencyFile);
  }
  return {
    ontology: convertToWireOntologyIr(ontologyDefinition),
    valueType: convertOntologyToValueTypeIr(ontologyDefinition),
  };
}

export function writeStaticObjects(outputDir: string): void {
  const codegenDir = path.resolve(outputDir, "codegen");
  const typeDirs = {
    [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: "shared-property-types",
    [OntologyEntityTypeEnum.ACTION_TYPE]: "action-types",
    [OntologyEntityTypeEnum.OBJECT_TYPE]: "object-types",
    [OntologyEntityTypeEnum.LINK_TYPE]: "link-types",
    [OntologyEntityTypeEnum.INTERFACE_TYPE]: "interface-types",
    [OntologyEntityTypeEnum.VALUE_TYPE]: "value-types",
  };

  if (!fs.existsSync(codegenDir)) {
    fs.mkdirSync(codegenDir, { recursive: true });
  }

  Object.values(typeDirs).forEach(typeDirNameFromMap => {
    const currentTypeDirPath = path.join(codegenDir, typeDirNameFromMap);
    if (fs.existsSync(currentTypeDirPath)) {
      fs.rmSync(currentTypeDirPath, { recursive: true, force: true });
    }
    fs.mkdirSync(currentTypeDirPath, { recursive: true });
  });

  const topLevelExportStatements: string[] = [];

  Object.entries(ontologyDefinition).forEach(
    ([ontologyTypeEnumKey, entities]) => {
      const typeDirName =
        typeDirs[ontologyTypeEnumKey as OntologyEntityTypeEnum];

      const typeDirPath = path.join(codegenDir, typeDirName);
      const entityModuleNames: string[] = [];

      Object.entries(entities).forEach(
        ([apiName, entity]: [string, OntologyEntityType]) => {
          const entityFileNameBase = camel(withoutNamespace(apiName))
            + (ontologyTypeEnumKey as OntologyEntityTypeEnum
                === OntologyEntityTypeEnum.VALUE_TYPE
              ? "ValueType"
              : "");
          const filePath = path.join(typeDirPath, `${entityFileNameBase}.ts`);
          const entityTypeName = getEntityTypeName(ontologyTypeEnumKey);
          const entityJSON = JSON.stringify(entity, null, 2).replace(
            /("__type"\s*:\s*)"([^"]*)"/g,
            (_, prefix, value) => `${prefix}OntologyEntityTypeEnum.${value}`,
          );
          const content = `
import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
import type { ${entityTypeName} } from '@osdk/maker';

const ${entityFileNameBase}_base: ${entityTypeName} = ${
            ontologyTypeEnumKey === "VALUE_TYPE"
              ? entityJSON.slice(1, -2)
              : entityJSON
          } as unknown as ${entityTypeName};
        
export const ${entityFileNameBase}: ${entityTypeName} = wrapWithProxy(${entityFileNameBase}_base);
        `;
          fs.writeFileSync(filePath, content, { flag: "w" });
          entityModuleNames.push(entityFileNameBase);
        },
      );

      for (const entityModuleName of entityModuleNames) {
        topLevelExportStatements.push(
          `export { ${entityModuleName} } from "./codegen/${typeDirName}/${entityModuleName}.js";`,
        );
      }
    },
  );

  if (topLevelExportStatements.length > 0) {
    const mainIndexContent = dependencyInjectionString()
      + topLevelExportStatements.join("\n") + "\n";
    const mainIndexFilePath = path.join(outputDir, "index.ts");
    fs.writeFileSync(mainIndexFilePath, mainIndexContent, { flag: "w" });
  }
}

function convertOntologyToValueTypeIr(
  ontology: OntologyDefinition,
): OntologyIrValueTypeBlockData {
  return {
    valueTypes: Object.values(ontology[OntologyEntityTypeEnum.VALUE_TYPE]).map<
      OntologyIrValueTypeBlockDataEntry
    >(definitions => ({
      metadata: {
        apiName: definitions[0].apiName,
        displayMetadata: definitions[0].displayMetadata,
        status: definitions[0].status,
      },
      versions: definitions.map(definition => ({
        version: definition.version,
        baseType: definition.baseType,
        constraints: definition.constraints,
        exampleValues: definition.exampleValues,
      })),
    })),
  };
}

function convertToWireOntologyIr(
  ontology: OntologyDefinition,
): OntologyIr {
  return {
    blockData: convertToWireBlockData(ontology),
    importedTypes: convertToWireImportedTypes(importedTypes),
  };
}

function convertToWireImportedTypes(
  importedTypes: OntologyDefinition,
): OntologyIrImportedTypes {
  const asBlockData = convertToWireBlockData(importedTypes); // this just makes things easier to work with
  return {
    sharedPropertyTypes: Object.values(asBlockData.sharedPropertyTypes).map(
      spt => ({
        apiName: spt.sharedPropertyType.apiName,
        displayName: spt.sharedPropertyType.displayMetadata.displayName,
        description: spt.sharedPropertyType.displayMetadata.description,
        type: spt.sharedPropertyType.type,
      }),
    ),
    objectTypes: Object.values(
      asBlockData.objectTypes,
    ).map(ot => ({
      apiName: ot.objectType.apiName,
      displayName: ot.objectType.displayMetadata.displayName,
      description: ot.objectType.displayMetadata.description,
      propertyTypes: Object.values(ot.objectType.propertyTypes).map(p => ({
        apiName: p.apiName,
        displayName: p.displayMetadata.displayName,
        description: p.displayMetadata.description,
        type: p.type,
        sharedPropertyType: p.sharedPropertyTypeApiName,
      })),
    })),
    interfaceTypes: Object.values(asBlockData.interfaceTypes).map(i => ({
      apiName: i.interfaceType.apiName,
      displayName: i.interfaceType.displayMetadata.displayName,
      description: i.interfaceType.displayMetadata.description,
      properties: Object.values(i.interfaceType.propertiesV2).map(p => ({
        apiName: p.sharedPropertyType.apiName,
        displayName: p.sharedPropertyType.displayMetadata.displayName,
        description: p.sharedPropertyType.displayMetadata.description,
        type: p.sharedPropertyType.type,
      })),
      links: i.interfaceType.links.map(l => ({
        apiName: l.metadata.apiName,
        displayName: l.metadata.displayName,
        description: l.metadata.description,
        cardinality: l.cardinality,
        required: l.required,
      })),
    })),
    actionTypes: Object.values(asBlockData.actionTypes).map(a => ({
      apiName: a.actionType.metadata.apiName,
      displayName: a.actionType.metadata.displayMetadata.displayName,
      description: a.actionType.metadata.displayMetadata.description,
      parameters: Object.values(a.actionType.metadata.parameters).map(p => ({
        id: p.id,
        displayName: p.displayMetadata.displayName,
        description: p.displayMetadata.description,
        type: p.type,
      })),
    })),
    linkTypes: Object.values(asBlockData.linkTypes).map(l => {
      if (l.linkType.definition.type === "oneToMany") {
        return {
          id: l.linkType.id,
          definition: {
            type: "oneToMany",
            "oneToMany": {
              objectTypeApiNameOneSide:
                l.linkType.definition.oneToMany.objectTypeRidOneSide,
              objectTypeApiNameManySide:
                l.linkType.definition.oneToMany.objectTypeRidManySide,
              manyToOneLinkDisplayName:
                l.linkType.definition.oneToMany.manyToOneLinkMetadata
                  .displayMetadata.displayName,
              oneToManyLinkDisplayName:
                l.linkType.definition.oneToMany.oneToManyLinkMetadata
                  .displayMetadata.displayName,
              cardinality: l.linkType.definition.oneToMany.cardinalityHint,
            },
          },
        };
      } else {
        return {
          id: l.linkType.id,
          definition: {
            type: "manyToMany",
            "manyToMany": {
              objectTypeApiNameA:
                l.linkType.definition.manyToMany.objectTypeRidA,
              objectTypeApiNameB:
                l.linkType.definition.manyToMany.objectTypeRidB,
              objectTypeAToBLinkDisplayName:
                l.linkType.definition.manyToMany.objectTypeAToBLinkMetadata
                  .displayMetadata.displayName,
              objectTypeBToALinkDisplayName:
                l.linkType.definition.manyToMany.objectTypeBToALinkMetadata
                  .displayMetadata.displayName,
            },
          },
        };
      }
    }),
  };
}

function convertToWireBlockData(
  ontology: OntologyDefinition,
): OntologyIrOntologyBlockDataV2 {
  return ({
    objectTypes: Object.fromEntries(
      Object.entries(ontology[OntologyEntityTypeEnum.OBJECT_TYPE]).map<
        [string, OntologyIrObjectTypeBlockDataV2]
      >(([apiName, objectType]) => {
        return [apiName, convertObject(objectType)];
      }),
    ),
    sharedPropertyTypes: Object.fromEntries(
      Object.entries(
        ontology[OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE],
      )
        .map<[string, OntologyIrSharedPropertyTypeBlockDataV2]>((
          [apiName, spt],
        ) => [apiName, { sharedPropertyType: convertSpt(spt) }]),
    ),
    interfaceTypes: Object.fromEntries(
      Object.entries(
        ontology[OntologyEntityTypeEnum.INTERFACE_TYPE],
      )
        .map<[string, OntologyIrInterfaceTypeBlockDataV2]>(
          ([apiName, interfaceType]) => {
            return [apiName, {
              interfaceType: convertInterface(interfaceType),
            }];
          },
        ),
    ),
    linkTypes: Object.fromEntries(
      Object.entries(ontology[OntologyEntityTypeEnum.LINK_TYPE]).map<
        [string, OntologyIrLinkTypeBlockDataV2]
      >(([id, link]) => {
        return [id, convertLink(link)];
      }),
    ),
    actionTypes: Object.fromEntries(
      Object.entries(ontology[OntologyEntityTypeEnum.ACTION_TYPE]).map<
        [string, OntologyIrActionTypeBlockDataV2]
      >(([apiName, action]) => {
        return [apiName, convertAction(action)];
      }),
    ),
    blockPermissionInformation: {
      actionTypes: Object.fromEntries(
        Object.entries(ontology[OntologyEntityTypeEnum.ACTION_TYPE])
          .filter(([apiName, action]) => action.validation)
          .map<
            [string, ActionTypePermissionInformation]
          >(([apiName, action]) => {
            return [apiName, {
              restrictionStatus: {
                hasRolesApplied: true,
                ontologyPackageRid: null,
                publicProject: false,
              },
            }];
          }),
      ),
      linkTypes: {},
      objectTypes: {},
    },
  });
}

function convertObject(
  objectType: ObjectType,
): OntologyIrObjectTypeBlockDataV2 {
  const propertyDatasources: OntologyIrObjectTypeDatasource[] =
    (objectType.properties ?? [])
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
    ? classificationGroupMarkingNames.reduce((l, r) => l + " " + r)
    : undefined;

  const mandatoryInputGroup = mandatoryMarkingNames.length > 0
    ? mandatoryMarkingNames.reduce((l, r) => l + " " + r)
    : undefined;

  const objectDatasource = buildDatasource(
    objectType.apiName,
    convertDatasourceDefinition(
      objectType,
      objectType.properties ?? [],
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
          val => [val.apiName, convertProperty(val)],
        ) ?? [],
      ),
      titlePropertyTypeRid: objectType.titlePropertyApiName,
      apiName: objectType.apiName,
      status: convertObjectStatus(objectType.status),
      redacted: false,
      implementsInterfaces2: implementations.map(impl => ({
        interfaceTypeApiName: impl.implements.apiName,
        linksV2: {},
        propertiesV2: {},
        properties: Object.fromEntries(
          impl.propertyMapping.map(
            mapping => [addNamespaceIfNone(mapping.interfaceProperty), {
              propertyTypeRid: mapping.mapsTo,
            }],
          ),
        ),
      })),
      allImplementsInterfaces: {},
    },
    datasources: [...propertyDatasources, objectDatasource],
    entityMetadata: { arePatchesEnabled: objectType.editsEnabled ?? false },
  };
}

function extractPropertyDatasource(
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
        },
      };
      return [buildDatasource(property.apiName, mediaSetDefinition)];
    default:
      return [];
  }
}

function buildDatasource(
  apiName: string,
  definition: OntologyIrObjectTypeDatasourceDefinition,
  classificationMarkingGroupName?: string,
  mandatoryMarkingGroupName?: string,
): OntologyIrObjectTypeDatasource {
  const needsSecurity = classificationMarkingGroupName !== undefined
    || mandatoryMarkingGroupName !== undefined;

  const securityConfig = needsSecurity
    ? {
      classificationConstraint: classificationMarkingGroupName
        ? {
          markingGroupName: classificationMarkingGroupName,
        }
        : undefined,
      markingConstraint: mandatoryMarkingGroupName
        ? {
          markingGroupName: mandatoryMarkingGroupName,
        }
        : undefined,
    }
    : undefined;
  return ({
    rid: "ri.ontology.main.datasource.".concat(apiName),
    datasource: definition,
    editsConfiguration: {
      onlyAllowPrivilegedEdits: false,
    },
    redacted: false,
    ...((securityConfig !== undefined) && { dataSecurity: securityConfig }),
  });
}

function convertDatasourceDefinition(
  objectType: ObjectType,
  properties: ObjectPropertyType[],
): OntologyIrObjectTypeDatasourceDefinition {
  switch (objectType.datasource?.type) {
    case "stream":
      const window = objectType.datasource.retentionPeriod;
      const retentionPolicy: RetentionPolicy = window
        ? { type: "time", time: { window } }
        : { type: "none", none: {} };
      const propertyMapping = Object.fromEntries(
        properties.map((
          prop,
        ) => [prop.apiName, prop.apiName]),
      );
      return {
        type: "streamV2",
        streamV2: {
          streamLocator: objectType.apiName,
          propertyMapping,
          retentionPolicy,
          propertySecurityGroups: undefined,
        },
      };
    case "restrictedView":
      return {
        type: "restrictedViewV2",
        restrictedViewV2: {
          restrictedViewRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
        },
      };
    case "dataset":
    default:
      return {
        type: "datasetV2",
        datasetV2: {
          datasetRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
        },
      };
  }
}

/**
 * Extracts marking group names of a specific type from object properties
 */
function extractMarkingGroups(
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

function buildPropertyMapping(
  properties: ObjectPropertyType[],
): Record<string, PropertyTypeMappingInfo> {
  return Object.fromEntries(
    properties.map((prop) => {
      // editOnly
      if (prop.editOnly) {
        return [prop.apiName, { type: "editOnly", editOnly: {} }];
      }
      // structs
      if (typeof prop.type === "object" && prop.type?.type === "struct") {
        const structMapping = {
          type: "struct",
          struct: {
            column: prop.apiName,
            mapping: Object.fromEntries(
              Object.keys(prop.type.structDefinition).map((fieldName) => [
                fieldName,
                { apiName: fieldName, mappings: {} },
              ]),
            ),
          },
        };
        return [prop.apiName, structMapping];
      }
      // default: column mapping
      return [prop.apiName, { type: "column", column: prop.apiName }];
    }),
  );
}

function convertProperty(property: ObjectPropertyType): OntologyIrPropertyType {
  const apiName = namespace + property.apiName;
  invariant(
    !shouldNotHaveRenderHints(property.type)
      || !hasRenderHints(property.typeClasses),
    `Property type ${apiName} of type '${
      getPropertyTypeName(property.type)
    }' should not have render hints`,
  );
  const output: OntologyIrPropertyType = {
    apiName: property.apiName,
    sharedPropertyTypeApiName: property.sharedPropertyType?.apiName,
    displayMetadata: {
      displayName: property.displayName,
      description: property.description,
      visibility: property.visibility ?? "NORMAL",
    },
    indexedForSearch: property.indexedForSearch ?? true,
    ruleSetBinding: undefined,
    baseFormatter: property.baseFormatter,
    type: property.array
      ? {
        type: "array" as const,
        array: {
          subtype: convertType(property.type),
        },
      }
      : convertType(property.type),
    typeClasses: property.typeClasses
      ?? (shouldNotHaveRenderHints(property.type) ? [] : defaultTypeClasses),
    status: convertObjectStatus(property.status),
    inlineAction: undefined,
    dataConstraints: property.valueType
      ? convertValueTypeDataConstraints(property.valueType.constraints)
      : convertNullabilityToDataConstraint(property),
    sharedPropertyTypeRid: property.sharedPropertyType?.apiName,
    valueType: property.valueType
      ? convertValueType(property.valueType)
      : undefined,
  };
  return output;
}

function convertLink(
  linkType: LinkType,
): OntologyIrLinkTypeBlockDataV2 {
  let definition: OntologyIrLinkDefinition;
  let datasource: OntologyIrManyToManyLinkTypeDatasource | undefined =
    undefined;
  if ("one" in linkType) {
    definition = {
      type: "oneToMany",
      oneToMany: {
        cardinalityHint: convertCardinality(linkType.cardinality),
        manyToOneLinkMetadata: linkType.toMany.metadata,
        objectTypeRidManySide: linkType.toMany.object.apiName,
        objectTypeRidOneSide: linkType.one.object.apiName,
        oneToManyLinkMetadata: linkType.one.metadata,
        oneSidePrimaryKeyToManySidePropertyMapping: [{
          from: {
            apiName: linkType.one.object.primaryKeyPropertyApiName,
            object: linkType.one.object.apiName,
          },
          to: {
            apiName: linkType.manyForeignKeyProperty,
            object: linkType.toMany.object.apiName,
          },
        }],
      },
    };
  } else {
    definition = {
      type: "manyToMany",
      manyToMany: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: linkType.many.object.apiName,
        objectTypeRidB: linkType.toMany.object.apiName,
        peeringMetadata: undefined,
        objectTypeAPrimaryKeyPropertyMapping: [{
          from: {
            apiName: linkType.many.object.primaryKeyPropertyApiName,
            object: linkType.many.object.apiName,
          },
          to: {
            apiName: linkType.many.object.primaryKeyPropertyApiName,
            object: linkType.many.object.apiName,
          },
        }],
        objectTypeBPrimaryKeyPropertyMapping: [{
          from: {
            apiName: linkType.toMany.object.primaryKeyPropertyApiName,
            object: linkType.toMany.object.apiName,
          },
          to: {
            apiName: linkType.toMany.object.primaryKeyPropertyApiName,
            object: linkType.toMany.object.apiName,
          },
        }],
      },
    };

    datasource = {
      rid: "ri.ontology.main.datasource.link-".concat(linkType.apiName),
      datasource: {
        type: "dataset",
        dataset: {
          datasetRid: "link-".concat(linkType.apiName),
          writebackDatasetRid: undefined,
          objectTypeAPrimaryKeyMapping: [{
            property: {
              apiName: linkType.many.object.primaryKeyPropertyApiName,
              object: linkType.many.object.apiName,
            },
            column: linkType.many.object.primaryKeyPropertyApiName,
          }],
          objectTypeBPrimaryKeyMapping: [{
            property: {
              apiName: linkType.toMany.object.primaryKeyPropertyApiName,
              object: linkType.toMany.object.apiName,
            },
            column: linkType.many.object.primaryKeyPropertyApiName,
          }],
        },
      },
      editsConfiguration: {
        onlyAllowPrivilegedEdits: false,
      },
      redacted: linkType.redacted,
    };
  }

  return {
    linkType: {
      definition: definition,
      id: cleanAndValidateLinkTypeId(linkType.apiName),
      status: linkType.status ?? { type: "active", active: {} },
      redacted: linkType.redacted ?? false,
    },
    datasources: datasource !== undefined ? [datasource] : [],
    entityMetadata: {
      arePatchesEnabled: linkType.editsEnabled ?? false,
    },
  };
}

function cleanAndValidateLinkTypeId(apiName: string): string {
  // Insert a dash before any uppercase letter that follows a lowercase letter or digit
  const step1 = apiName.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
  // Insert a dash after a sequence of uppercase letters when followed by a lowercase letter
  // then convert the whole string to lowercase
  // e.g., apiName, APIname, and apiNAME will all be converted to api-name
  const linkTypeId = step1.replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

  const VALIDATION_PATTERN = /^([a-z][a-z0-9\-]*)$/;
  if (!VALIDATION_PATTERN.test(linkTypeId)) {
    throw new Error(
      `LinkType id '${linkTypeId}' must be lower case with dashes.`,
    );
  }
  return linkTypeId;
}

function convertInterface(
  interfaceType: InterfaceType,
): OntologyIrMarketplaceInterfaceType {
  const { __type, ...other } = interfaceType;
  return {
    ...other,
    propertiesV2: Object.fromEntries(
      Object.values(interfaceType.propertiesV2)
        .map((
          spt,
        ) => [spt.sharedPropertyType.apiName, {
          required: spt.required,
          sharedPropertyType: convertSpt(spt.sharedPropertyType),
        }]),
    ),
    extendsInterfaces: interfaceType.extendsInterfaces.map(i => i.apiName),
    // these are omitted from our internal types but we need to re-add them for the final json
    // TODO(mwalther): Support propertiesV3
    propertiesV3: {},
    properties: [],
  };
}

export function dumpOntologyFullMetadata(): OntologyIr {
  return convertToWireOntologyIr(ontologyDefinition);
}

export function dumpValueTypeWireType(): OntologyIrValueTypeBlockData {
  return convertOntologyToValueTypeIr(ontologyDefinition);
}

function convertSpt(
  {
    type,
    array,
    description,
    apiName,
    displayName,
    visibility,
    gothamMapping,
    typeClasses,
    valueType,
    nullability,
  }: SharedPropertyType,
): OntologyIrSharedPropertyType {
  const dataConstraint:
    | OntologyIrSharedPropertyType["dataConstraints"]
    | undefined = convertNullabilityToDataConstraint({ type, nullability });
  return {
    apiName,
    displayMetadata: {
      displayName: displayName ?? apiName,
      visibility: visibility ?? "NORMAL",
      description,
    },
    type: array
      ? {
        type: "array" as const,
        array: {
          subtype: convertType(type),
        },
      }
      : convertType(type),
    aliases: [],
    baseFormatter: undefined,
    dataConstraints: dataConstraint,
    gothamMapping: gothamMapping,
    indexedForSearch: true,
    typeClasses: typeClasses ?? [],
    valueType: valueType,
  };
}

function convertObjectStatus(status: any): any {
  if (status === undefined) {
    return {
      type: "active",
      active: {},
    };
  }

  if (status === "active") {
    return {
      type: "active",
      active: {},
    };
  }

  if (status === "experimental") {
    return {
      type: "experimental",
      experimental: {},
    };
  }

  if (typeof status === "object" && status.type === "deprecated") {
    return {
      type: "deprecated",
      deprecated: {
        message: status.message,
        deadline: status.deadline,
        replacedBy: undefined,
      },
    };
  }

  return status;
}

function convertAction(action: ActionType): OntologyIrActionTypeBlockDataV2 {
  const actionValidation = convertActionValidation(action);
  const actionParameters: Record<ParameterId, OntologyIrParameter> =
    convertActionParameters(action);
  const actionSections: Record<SectionId, OntologyIrSection> =
    convertActionSections(action);
  return {
    actionType: {
      actionTypeLogic: {
        logic: {
          rules: action.rules,
        },
        validation: actionValidation,
      },
      metadata: {
        apiName: action.apiName,
        displayMetadata: {
          configuration: {
            defaultLayout: "FORM",
            displayAndFormat: {
              table: {
                columnWidthByParameterRid: {},
                enableFileImport: true,
                fitHorizontally: false,
                frozenColumnCount: 0,
                rowHeightInLines: 1,
              },
            },
            enableLayoutUserSwitch: false,
          },
          description: action.description ?? "",
          displayName: action.displayName,
          icon: {
            type: "blueprint",
            blueprint: action.icon ?? { locator: "edit", color: "#000000" },
          },
          successMessage: [],
          typeClasses: action.typeClasses ?? [],
        },
        formContentOrdering: action.formContentOrdering ?? [],
        parameterOrdering: (action.parameters ?? []).map(p => p.id),
        parameters: actionParameters,
        sections: actionSections,
        status: typeof action.status === "string"
          ? {
            type: action.status,
            [action.status]: {},
          } as unknown as ActionTypeStatus
          : action.status,
        entities: action.entities,
      },
    },
  };
}

function convertActionValidation(
  action: ActionType,
): OntologyIrActionValidation {
  return {
    actionTypeLevelValidation: {
      rules: Object.fromEntries(
        (action.validation
          ?? [{
            condition: { type: "true", true: {} },
            displayMetadata: { failureMessage: "", typeClasses: [] },
          }]).map((rule, idx) => [idx, rule]),
      ),
    },
    parameterValidations: Object.fromEntries(
      (action.parameters ?? []).map(p => {
        return [
          p.id,
          {
            defaultValidation: {
              display: {
                renderHint: renderHintFromBaseType(p),
                visibility: convertActionVisibility(
                  p.validation.defaultVisibility,
                ),
              },
              validation: {
                allowedValues: extractAllowedValues(p),
                required: convertParameterRequirementConstraint(
                  p.validation.required,
                ),
              },
            },
            conditionalOverrides: p.validation.conditionalOverrides?.map(
              (override) =>
                convertActionParameterConditionalOverride(
                  override,
                  p.validation,
                ),
            ) ?? [],
          },
        ];
      }),
    ),
  };
}

function convertActionParameters(
  action: ActionType,
): Record<ParameterId, OntologyIrParameter> {
  return Object.fromEntries((action.parameters ?? []).map(p => [p.id, {
    id: p.id,
    type: (typeof p.type === "string"
      ? { type: p.type, [p.type]: {} }
      : p.type) as OntologyIrBaseParameterType,
    displayMetadata: {
      displayName: p.displayName,
      description: p.description ?? "",
      typeClasses: [],
    },
  }]));
}

function convertActionSections(
  action: ActionType,
): Record<SectionId, OntologyIrSection> {
  return Object.fromEntries(
    Object.entries(action.sections ?? {}).map((
      [sectionId, parameterIds],
    ) => [sectionId, {
      id: sectionId,
      content: parameterIds.map(p => ({ type: "parameterId", parameterId: p })),
      displayMetadata: {
        collapsedByDefault: false,
        columnCount: 1,
        description: "",
        displayName: sectionId,
        showTitleBar: true,
      },
    }]),
  );
}

function extractAllowedValues(
  parameter: ActionParameter,
): OntologyIrAllowedParameterValues {
  switch (parameter.validation.allowedValues.type) {
    case "oneOf":
      return {
        type: "oneOf",
        oneOf: {
          type: "oneOf",
          oneOf: {
            labelledValues: parameter.validation.allowedValues.oneOf,
            otherValueAllowed: { allowed: false },
          },
        },
      };
    case "range":
      const { min, max } = parameter.validation.allowedValues;
      return {
        type: "range",
        range: {
          type: "range",
          range: {
            ...(min === undefined
              ? {}
              : { minimum: { inclusive: true, value: min } }),
            ...(max === undefined
              ? {}
              : { maximum: { inclusive: true, value: max } }),
          },
        },
      };
    case "text":
      const { minLength, maxLength, regex } =
        parameter.validation.allowedValues;
      return {
        type: "text",
        text: {
          type: "text",
          text: {
            ...(minLength === undefined
              ? {}
              : { minimumLength: minLength }),
            ...(maxLength === undefined
              ? {}
              : { maximumLength: maxLength }),
            ...(regex === undefined
              ? {}
              : { regex: { regex: regex, failureMessage: "Invalid input" } }),
          },
        },
      };
    case "datetime":
      const { minimum, maximum } = parameter.validation.allowedValues;
      return {
        type: "datetime",
        datetime: {
          type: "datetime",
          datetime: {
            minimum,
            maximum,
          },
        },
      };
    case "objectTypeReference":
      return {
        type: "objectTypeReference",
        objectTypeReference: {
          type: "objectTypeReference",
          objectTypeReference: {
            interfaceTypeRids:
              parameter.validation.allowedValues.interfaceTypes,
          },
        },
      };
    case "redacted":
      return {
        type: "redacted",
        redacted: {},
      };
    case "geotimeSeriesReference":
      return {
        type: "geotimeSeriesReference",
        geotimeSeriesReference: {
          type: "geotimeSeries",
          geotimeSeries: {},
        },
      };
    default:
      const k: Partial<OntologyIrAllowedParameterValues["type"]> =
        parameter.validation.allowedValues.type;
      return {
        type: k,
        [k]: {
          type: k,
          [k]: {},
        },
      } as unknown as OntologyIrAllowedParameterValues;
      // TODO(dpaquin): there's probably a TS clean way to do this
  }
}

function renderHintFromBaseType(
  parameter: ActionParameter,
): ParameterRenderHint {
  // TODO(dpaquin): these are just guesses, we should find where they're actually defined
  const type = typeof parameter.type === "string"
    ? parameter.type
    : parameter.type.type;
  switch (type) {
    case "boolean":
    case "booleanList":
      return { type: "checkbox", checkbox: {} };
    case "integer":
    case "integerList":
    case "long":
    case "longList":
    case "double":
    case "doubleList":
    case "decimal":
    case "decimalList":
      return { type: "numericInput", numericInput: {} };
    case "string":
    case "stringList":
    case "geohash":
    case "geohashList":
    case "geoshape":
    case "geoshapeList":
    case "objectSetRid":
      return { type: "textInput", textInput: {} };
    case "timestamp":
    case "timestampList":
    case "date":
    case "dateList":
      return { type: "dateTimePicker", dateTimePicker: {} };
    case "attachment":
    case "attachmentList":
      return { type: "filePicker", filePicker: {} };
    case "marking":
    case "markingList":
      if (parameter.validation.allowedValues.type === "mandatoryMarking") {
        return { type: "mandatoryMarkingPicker", mandatoryMarkingPicker: {} };
      } else if (parameter.validation.allowedValues.type === "cbacMarking") {
        return { type: "cbacMarkingPicker", cbacMarkingPicker: {} };
      } else {
        throw new Error(
          `The allowed values for "${parameter.displayName}" are not compatible with the base parameter type`,
        );
      }
    case "timeSeriesReference":
    case "objectReference":
    case "objectReferenceList":
    case "interfaceReference":
    case "interfaceReferenceList":
    case "objectTypeReference":
    case "mediaReference":
    case "mediaReferenceList":
    case "geotimeSeriesReference":
    case "geotimeSeriesReferenceList":
      return { type: "dropdown", dropdown: {} };
    case "struct":
    case "structList":
      throw new Error("Structs are not supported yet");
    default:
      throw new Error(`Unknown type ${type}`);
  }
}

function convertParameterRequirementConstraint(
  required: ActionParameterRequirementConstraint,
): ParameterRequiredConfiguration {
  if (typeof required === "boolean") {
    return required
      ? { type: "required", required: {} }
      : { type: "notRequired", notRequired: {} };
  }
  const { min, max } = required.listLength;
  return {
    type: "listLengthValidation",
    listLengthValidation: { minLength: min, maxLength: max },
  };
}

export function sanitize(namespace: string, s: string): string {
  return s.includes(".") ? s : namespace + s;
}

export function extractNamespace(apiName: string): string {
  return apiName.substring(0, apiName.lastIndexOf(".") + 1);
}

export function withoutNamespace(apiName: string): string {
  const lastDot = apiName.lastIndexOf(".");
  if (lastDot === -1) {
    return apiName;
  }
  return apiName.substring(lastDot + 1);
}

function camel(str: string): string {
  if (!str) {
    return str;
  }
  let result = str.replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  result = result.charAt(0).toLowerCase() + result.slice(1);
  return result;
}

/**
 * Gets the TypeScript type name corresponding to an OntologyEntityTypeEnum value
 */
function getEntityTypeName(type: string): string {
  return {
    [OntologyEntityTypeEnum.OBJECT_TYPE]: "ObjectType",
    [OntologyEntityTypeEnum.LINK_TYPE]: "LinkType",
    [OntologyEntityTypeEnum.INTERFACE_TYPE]: "InterfaceType",
    [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: "SharedPropertyType",
    [OntologyEntityTypeEnum.ACTION_TYPE]: "ActionType",
    [OntologyEntityTypeEnum.VALUE_TYPE]: "ValueTypeDefinitionVersion",
  }[type]!;
}

function writeDependencyFile(dependencyFile: string): void {
  fs.writeFileSync(dependencyFile, JSON.stringify(dependencies, null, 2));
}

function dependencyInjectionString(): string {
  const namespaceNoDot: string = namespace.endsWith(".")
    ? namespace.slice(0, -1)
    : namespace;

  return `import { addDependency } from "@osdk/maker";

addDependency("${namespaceNoDot}", new URL(import.meta.url).pathname);
`;
}

export function addNamespaceIfNone(apiName: string): string {
  return apiName.includes(".") ? apiName : namespace + apiName;
}

function convertCardinality(
  cardinality: OneToManyLinkTypeDefinition["cardinality"],
): OntologyIrOneToManyLinkDefinition["cardinalityHint"] {
  if (cardinality === "OneToMany" || cardinality === undefined) {
    return "ONE_TO_MANY";
  }
  return "ONE_TO_ONE";
}
