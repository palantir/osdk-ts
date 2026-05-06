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
  ActionTypeBlockDataV2,
  ActionTypeStatus,
  InterfaceTypeBlockDataV2,
  LinkTypeBlockDataV2,
  LinkTypeStatus,
  MarketplaceInterfaceLinkType,
  ObjectTypeBlockDataV2,
  ObjectTypeStatus,
  OntologyBlockDataV2,
  SharedPropertyTypeBlockDataV2,
  Type,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

import { hash } from "node:crypto";
import invariant from "tiny-invariant";
import type { ApiName } from "./ApiName.js";

export class OntologyBlockDataToFullMetadataConverter {
  static getFullMetadataFromBlockData(
    blockData: OntologyBlockDataV2,
  ): Ontologies.OntologyFullMetadata {
    const objectTypeLookup = buildBlockDataObjectTypeLookup(blockData);
    const interfaceTypeLookup = buildBlockDataInterfaceTypeLookup(blockData);
    const interfaceTypes = this.getOsdkInterfaceTypesFromBlockData(
      blockData.interfaceTypes,
    );
    const sharedPropertyTypes = this.getOsdkSharedPropertyTypesFromBlockData(
      blockData.sharedPropertyTypes,
    );
    const objectTypes = this.getOsdkObjectTypesFromBlockData(
      blockData.objectTypes,
      blockData.linkTypes,
      objectTypeLookup,
    );
    const actionTypes = this.getOsdkActionTypesFromBlockData(
      blockData,
      objectTypeLookup,
      interfaceTypeLookup,
    );

    return {
      interfaceTypes,
      sharedPropertyTypes,
      objectTypes,
      queryTypes: {},
      actionTypes,
      ontology: {
        apiName: "ontology",
        rid: `ri.00000`,
        displayName: "ontology",
        description: "",
      },
      valueTypes: {},
    };
  }

  static getOsdkObjectTypesFromBlockData(
    objects: Record<string, ObjectTypeBlockDataV2>,
    links: Record<string, LinkTypeBlockDataV2>,
    objectTypeLookup: BlockDataApiNameLookup | undefined,
  ): Record<ApiName, Ontologies.ObjectTypeFullMetadata> {
    const result: Record<ApiName, Ontologies.ObjectTypeFullMetadata> = {};
    const propRidToApiName: Record<string, string> = {};

    for (const [rid, fullObject] of Object.entries(objects)) {
      const object = fullObject.objectType;
      const icon = object.displayMetadata.icon;

      if (icon.type !== "blueprint") {
        throw new Error("Only blueprint icons are supported");
      }

      // Ensure we have exactly one primary key
      if (object.primaryKeys.length !== 1) {
        throw new Error("Object must have exactly 1 primary key");
      }

      // Build a mapping from property RID to apiName for resolving references
      for (const [propRid, prop] of Object.entries(object.propertyTypes)) {
        propRidToApiName[propRid] = prop.apiName!;
      }

      // Resolve primaryKey and titleProperty from RID to apiName
      const primaryKeyRid = object.primaryKeys[0];
      const primaryKey = propRidToApiName[primaryKeyRid] ?? primaryKeyRid;
      const titlePropertyRid = object.titlePropertyTypeRid;
      const titleProperty = propRidToApiName[titlePropertyRid]
        ?? titlePropertyRid;

      const properties: Record<ApiName, Ontologies.PropertyV2> = {};
      for (const [propRid, prop] of Object.entries(object.propertyTypes)) {
        const propApiName = prop.apiName!;
        const visibility = prop.displayMetadata.visibility;
        let visibilityEnum: "NORMAL" | "PROMINENT" | "HIDDEN" = "NORMAL";

        if (!visibility) {
          visibilityEnum = "NORMAL";
        } else {
          switch (visibility) {
            case "PROMINENT":
              visibilityEnum = "PROMINENT";
              break;
            case "NORMAL":
              visibilityEnum = "NORMAL";
              break;
            case "HIDDEN":
              visibilityEnum = "HIDDEN";
              break;
            default:
              visibilityEnum = "NORMAL";
          }
        }

        const dataType = this.getOsdkPropertyTypeFromBlockData(prop.type);
        if (dataType) {
          const status = {
            type: prop.status.type,
            ...((prop.status as unknown as Record<string, unknown>)[
              prop.status.type
            ] ?? {}),
          } as unknown as Ontologies.PropertyTypeStatus;

          properties[propApiName] = {
            displayName: prop.displayMetadata.displayName,
            rid: `ri.${object.apiName}.${propApiName}`,
            status,
            description: prop.displayMetadata.description ?? undefined,
            visibility: visibilityEnum,
            dataType,
            typeClasses: [],
          };
        }
      }

      const objectTypeV2: Ontologies.ObjectTypeV2 = {
        apiName: object.apiName!,
        description: object.displayMetadata.description ?? undefined,
        displayName: object.displayMetadata.displayName,
        pluralDisplayName: "", // Not available in IR
        primaryKey,
        titleProperty,
        icon: {
          type: "blueprint",
          color: icon.blueprint.color,
          name: icon.blueprint.locator,
        },
        status: this.convertObjectTypeStatusFromBlockData(object.status),
        properties,
        rid,
      };

      const sharedPropertyTypeMappings: Record<ApiName, ApiName> = {};
      const implementsInterfaces2: Record<
        ApiName,
        Ontologies.ObjectTypeInterfaceImplementation
      > = {};

      for (const ii of object.implementsInterfaces2) {
        const interfaceApiName = ii.interfaceTypeApiName;
        const propertyMappings: Record<ApiName, ApiName> = {};

        for (
          const [sharedPropKey, propMapping] of Object.entries(ii.properties)
        ) {
          const propertyApiName = propMapping.propertyTypeRid;
          propertyMappings[sharedPropKey] = propertyApiName;
          sharedPropertyTypeMappings[sharedPropKey] = propertyApiName;
        }

        implementsInterfaces2[interfaceApiName] = {
          properties: propertyMappings,
          propertiesV2: {},
          links: {},
        };
      }

      const linkMappings = this.getLinkMappingsFromBlockData(
        Object.values(links),
        propRidToApiName,
        objectTypeLookup,
      );

      const objectApiName = object.apiName!;
      result[objectApiName] = {
        objectType: objectTypeV2,
        implementsInterfaces: [], // Empty for now - legacy field
        implementsInterfaces2,
        sharedPropertyTypeMapping: sharedPropertyTypeMappings,
        linkTypes: linkMappings[object.rid] || [],
      };
    }

    return result;
  }

  static getLinkMappingsFromBlockData(
    links: LinkTypeBlockDataV2[],
    propRidToApiName: Record<string, string>,
    objectTypeLookup: BlockDataApiNameLookup | undefined,
  ): Record<string, Ontologies.LinkTypeSideV2[]> {
    const result: Record<string, Ontologies.LinkTypeSideV2[]> = {};

    for (const link of links) {
      const linkType = link.linkType;
      const linkStatus = this.convertLinkTypeStatusFromBlockData(
        linkType.status,
      );

      let mappings: Record<string, Ontologies.LinkTypeSideV2>;
      switch (linkType.definition.type) {
        case "manyToMany": {
          const linkDef = linkType.definition.manyToMany;
          const sideA: Ontologies.LinkTypeSideV2 = {
            apiName: linkDef.objectTypeAToBLinkMetadata.apiName ?? "",
            displayName: linkDef.objectTypeAToBLinkMetadata
              .displayMetadata.displayName,
            cardinality: "MANY",
            objectTypeApiName: resolveBlockDataApiName(
              linkDef.objectTypeRidB,
              objectTypeLookup,
            ),
            linkTypeRid:
              `ri.${linkDef.objectTypeRidA}.${linkType.id}.${linkDef.objectTypeRidB}`,
            status: linkStatus,
          };

          const sideB: Ontologies.LinkTypeSideV2 = {
            ...sideA,
            apiName: linkDef.objectTypeBToALinkMetadata.apiName
              ?? "",
            objectTypeApiName: resolveBlockDataApiName(
              linkDef.objectTypeRidA,
              objectTypeLookup,
            ),
          };

          mappings = {
            [linkDef.objectTypeRidA]: sideA,
            [linkDef.objectTypeRidB]: sideB,
          };
          break;
        }
        case "oneToMany": {
          const linkDef = linkType.definition.oneToMany;

          invariant(
            Object.keys(linkDef.oneSidePrimaryKeyToManySidePropertyMapping)
              .length === 1,
          );

          const common = {
            linkTypeRid:
              `ri.${linkDef.objectTypeRidOneSide}.${linkType.id}.${linkDef.objectTypeRidManySide}`,
            status: linkStatus,
          };

          const manySide: Ontologies.LinkTypeSideV2 = {
            ...common,
            apiName: linkDef.oneToManyLinkMetadata.apiName ?? "",
            displayName:
              linkDef.oneToManyLinkMetadata.displayMetadata.displayName,
            objectTypeApiName: resolveBlockDataApiName(
              linkDef.objectTypeRidOneSide,
              objectTypeLookup,
            ),
            cardinality: "ONE",
            // This should only exist on the one side and it should be the property on this object
            // that points to the PK on the other object
            foreignKeyPropertyApiName: propRidToApiName[
              Object.values(
                linkDef.oneSidePrimaryKeyToManySidePropertyMapping,
              )[0]
            ],
          };

          const oneSide: Ontologies.LinkTypeSideV2 = {
            ...common,
            cardinality: "MANY",
            apiName: linkDef.manyToOneLinkMetadata.apiName ?? "",
            displayName:
              linkDef.manyToOneLinkMetadata.displayMetadata.displayName,
            objectTypeApiName: resolveBlockDataApiName(
              linkDef.objectTypeRidManySide,
              objectTypeLookup,
            ),
          };

          mappings = {
            [linkDef.objectTypeRidOneSide]: oneSide,
            [linkDef.objectTypeRidManySide]: manySide,
          };
          break;
        }
        default:
          throw new Error("Unknown link definition type");
      }

      // Add mappings to result
      for (const [objectTypeApiName, linkSide] of Object.entries(mappings)) {
        if (!result[objectTypeApiName]) {
          result[objectTypeApiName] = [];
        }
        result[objectTypeApiName].push(linkSide);
      }
    }

    return result;
  }

  static getOsdkActionTypesFromBlockData(
    blockData: OntologyBlockDataV2,
    objectTypeLookup: BlockDataApiNameLookup | undefined,
    interfaceTypeLookup: BlockDataApiNameLookup | undefined,
  ): Record<ApiName, Ontologies.ActionTypeV2> {
    const result: Record<ApiName, Ontologies.ActionTypeV2> = {};

    for (const [rid, action] of Object.entries(blockData.actionTypes)) {
      const metadata = action.actionType.metadata;
      const actionType: Ontologies.ActionTypeV2 = {
        rid,
        apiName: metadata.apiName,
        displayName: metadata.displayMetadata.displayName,
        description: metadata.displayMetadata.description,
        parameters: this.getOsdkActionParametersFromBlockData(
          action,
          objectTypeLookup,
        ),
        operations: this.getOsdkActionOperationsFromBlockData(
          action,
          objectTypeLookup,
          interfaceTypeLookup,
        ),
        status: this.convertActionTypeStatusFromBlockData(metadata.status),
      };

      result[actionType.apiName] = actionType;
    }

    return result;
  }

  static getOsdkActionOperationsFromBlockData(
    action: ActionTypeBlockDataV2,
    objectTypeLookup: BlockDataApiNameLookup | undefined,
    interfaceTypeLookup: BlockDataApiNameLookup | undefined,
  ): Ontologies.LogicRule[] {
    return action.actionType.actionTypeLogic.logic.rules.flatMap(irLogic => {
      switch (irLogic.type) {
        case "addInterfaceRule": {
          const r = irLogic.addInterfaceRule;
          return {
            type: "createInterfaceObject",
            interfaceTypeApiName: resolveBlockDataApiName(
              r.interfaceTypeRid,
              interfaceTypeLookup,
            ),
            // interfaceTypeApiName: interfaces[r.interfaceTypeRid].interfaceType.apiName,
          } satisfies Ontologies.LogicRule;
        }
        case "addLinkRule":
          throw new Error("Add link rule not supported");
        case "addObjectRule": {
          const r = irLogic.addObjectRule;
          return {
            type: "createObject",
            objectTypeApiName: resolveBlockDataApiName(
              r.objectTypeId,
              objectTypeLookup,
            ),
          } satisfies Ontologies.LogicRule;
        }
        case "addOrModifyObjectRuleV2": {
          const r = irLogic.addOrModifyObjectRuleV2;

          const modifyParamType =
            action.actionType.metadata.parameters[r.objectToModify].type;
          if (modifyParamType.type === "objectReference") {
            return {
              type: "modifyObject",
              objectTypeApiName: resolveBlockDataApiName(
                modifyParamType.objectReference.objectTypeId,
                objectTypeLookup,
              ),
            } satisfies Ontologies.LogicRule;
          } else {
            throw new Error(
              "Unable to convert modifyAction because parameter does not exist",
            );
          }
        }
        case "deleteLinkRule":
          throw new Error("Delete link rule not supported");
        case "deleteObjectRule": {
          const r = irLogic.deleteObjectRule;
          const ontologyIrParameter =
            action.actionType.metadata.parameters[r.objectToDelete];
          if (ontologyIrParameter.type.type !== "objectReference") {
            throw new Error("invalid parameter type");
          }

          return {
            type: "deleteObject",
            objectTypeApiName: resolveBlockDataApiName(
              ontologyIrParameter.type.objectReference.objectTypeId,
              objectTypeLookup,
            ),
          } satisfies Ontologies.LogicRule;
        }
        case "modifyInterfaceRule": {
          const r = irLogic.modifyInterfaceRule;
          const parameter = action.actionType.metadata
            .parameters[r.interfaceObjectToModify];
          if (!parameter) {
            throw new Error("Could not find interface type api name");
          }

          let interfaceTypeApiName: string | null = null;
          switch (parameter.type.type) {
            case "interfaceReference":
              interfaceTypeApiName =
                parameter.type.interfaceReference.interfaceTypeRid;
              break;
            case "interfaceReferenceList":
              interfaceTypeApiName =
                parameter.type.interfaceReferenceList.interfaceTypeRid;
              break;
            default:
              interfaceTypeApiName = null;
          }

          if (!interfaceTypeApiName) {
            throw new Error("Could not find interface type api name");
          }

          return {
            type: "modifyInterfaceObject",
            interfaceTypeApiName,
          } satisfies Ontologies.LogicRule;
        }
        case "modifyObjectRule": {
          const r = irLogic.modifyObjectRule;

          const modifyParamType =
            action.actionType.metadata.parameters[r.objectToModify].type;
          if (modifyParamType.type === "objectReference") {
            return {
              type: "modifyObject",
              objectTypeApiName: resolveBlockDataApiName(
                modifyParamType.objectReference.objectTypeId,
                objectTypeLookup,
              ),
            } satisfies Ontologies.LogicRule;
          } else {
            throw new Error(
              "Unable to convert modifyAction because parameter does not exist",
            );
          }
        }
        case "functionRule":
          return [];
        default:
          throw new Error("Unknown logic rule type");
      }
    });
  }

  static getOsdkActionParametersFromBlockData(
    action: ActionTypeBlockDataV2,
    objectTypeLookup: BlockDataApiNameLookup | undefined,
  ): Record<string, Ontologies.ActionParameterV2> {
    const result: Record<string, Ontologies.ActionParameterV2> = {};

    for (
      const [paramKey, irParameter] of Object.entries(
        action.actionType.metadata.parameters,
      )
    ) {
      let dataType: Ontologies.ActionParameterType;
      switch (irParameter.type.type) {
        case "attachment":
          dataType = { type: "attachment" };
          break;
        case "attachmentList":
          dataType = {
            type: "array",
            subType: { type: "attachment" },
          };
          break;
        case "boolean":
          dataType = { type: "boolean" };
          break;
        case "booleanList":
          dataType = {
            type: "array",
            subType: { type: "boolean" },
          };
          break;
        case "date":
          dataType = { type: "date" };
          break;
        case "dateList":
          dataType = {
            type: "array",
            subType: { type: "date" },
          };
          break;
        case "decimal":
          throw new Error("Decimal type not supported");
        case "decimalList":
          throw new Error("Decimal list type not supported");
        case "double":
          dataType = { type: "double" };
          break;
        case "doubleList":
          dataType = {
            type: "array",
            subType: { type: "double" },
          };
          break;
        case "geohash":
          dataType = { type: "geohash" };
          break;
        case "geohashList":
          dataType = {
            type: "array",
            subType: { type: "geohash" },
          };
          break;
        case "geoshape":
          dataType = { type: "geoshape" };
          break;
        case "geoshapeList":
          dataType = {
            type: "array",
            subType: { type: "geoshape" },
          };
          break;
        case "geotimeSeriesReference":
          throw new Error("Geotime series reference type not supported");
        case "geotimeSeriesReferenceList":
          throw new Error("Geotime series reference list type not supported");
        case "integer":
          dataType = { type: "integer" };
          break;
        case "integerList":
          dataType = {
            type: "array",
            subType: { type: "integer" },
          };
          break;
        case "interfaceReference":
          throw new Error("Interface reference type not supported");
        case "interfaceReferenceList":
          throw new Error("Interface reference list type not supported");
        case "long":
          dataType = { type: "long" };
          break;
        case "longList":
          dataType = {
            type: "array",
            subType: { type: "long" },
          };
          break;
        case "marking":
          dataType = { type: "marking" };
          break;
        case "markingList":
          dataType = {
            type: "array",
            subType: { type: "marking" },
          };
          break;
        case "mediaReference":
          dataType = { type: "mediaReference" };
          break;
        case "mediaReferenceList":
          dataType = {
            type: "array",
            subType: { type: "mediaReference" },
          };
          break;
        case "objectReference": {
          const t = irParameter.type.objectReference;
          dataType = {
            type: "object",
            objectTypeApiName: resolveBlockDataApiName(
              t.objectTypeId,
              objectTypeLookup,
            ),
            objectApiName: resolveBlockDataApiName(
              t.objectTypeId,
              objectTypeLookup,
            ),
          };
          break;
        }
        case "objectReferenceList": {
          const t = irParameter.type.objectReferenceList;
          dataType = {
            type: "array",
            subType: {
              type: "object",
              objectTypeApiName: resolveBlockDataApiName(
                t.objectTypeId,
                objectTypeLookup,
              ),
              objectApiName: resolveBlockDataApiName(
                t.objectTypeId,
                objectTypeLookup,
              ),
            },
          };
          break;
        }
        case "objectSetRid":
          dataType = { type: "objectSet" };
          break;
        case "objectTypeReference":
          dataType = { type: "objectType" };
          break;
        case "string":
          dataType = { type: "string" };
          break;
        case "stringList":
          dataType = {
            type: "array",
            subType: { type: "string" },
          };
          break;
        case "struct":
          throw new Error("Struct type not supported (lazy implementation)");
        case "structList":
          throw new Error("Struct list type not supported");
        case "timeSeriesReference":
          throw new Error("Time series reference type not supported");
        case "timestamp":
          dataType = { type: "timestamp" };
          break;
        case "timestampList":
          dataType = {
            type: "array",
            subType: { type: "timestamp" },
          };
          break;
        default:
          throw new Error("Unknown parameter type");
      }

      result[paramKey] = {
        displayName: irParameter.displayMetadata.displayName,
        description: irParameter.displayMetadata.description,
        required: isBlockDataParameterRequired(action, paramKey),
        dataType,
        typeClasses: [],
      };
    }

    return result;
  }

  static getOsdkInterfaceTypesFromBlockData(
    interfaceBlockData: Record<string, InterfaceTypeBlockDataV2>,
  ): Record<ApiName, Ontologies.InterfaceType> {
    const result: Record<ApiName, Ontologies.InterfaceType> = {};

    for (const [rid, interfaceData] of Object.entries(interfaceBlockData)) {
      const interfaceType = interfaceData.interfaceType;

      // Convert shared properties to interface shared properties
      const properties: Record<
        ApiName,
        Ontologies.InterfaceSharedPropertyType
      > = {};
      for (
        const [propKey, propValue] of Object.entries(interfaceType.propertiesV2)
      ) {
        const spt = propValue.sharedPropertyType;
        const dataType = this.getOsdkPropertyTypeFromBlockData(spt.type);
        if (dataType) {
          properties[propKey] = {
            rid,
            apiName: spt.apiName,
            displayName: spt.displayMetadata.displayName,
            description: spt.displayMetadata.description ?? undefined,
            dataType,
            required: false, // Default to false for now - this should come from IR if available
            typeClasses: [],
          };
        }
      }

      const result_interfaceType: Ontologies.InterfaceType = {
        apiName: interfaceType.apiName,
        rid,
        properties,
        allProperties: properties, // Same as properties for now
        propertiesV2: {},
        allPropertiesV2: {},
        extendsInterfaces: interfaceType.extendsInterfaces.map(val => val),
        allExtendsInterfaces: interfaceType.extendsInterfaces.map(val => val), // Same as extendsInterfaces for now
        implementedByObjectTypes: [], // Empty for now
        displayName: interfaceType.displayMetadata.displayName,
        description: interfaceType.displayMetadata.description ?? undefined,
        links: this.getOsdkInterfaceLinkTypesFromBlockData(interfaceType.links),
        allLinks: this.getOsdkInterfaceLinkTypesFromBlockData(
          interfaceType.links,
        ), // Same as links for now
      };

      result[result_interfaceType.apiName] = result_interfaceType;
    }

    return result;
  }

  static getOsdkInterfaceLinkTypesFromBlockData(
    ilts: MarketplaceInterfaceLinkType[],
  ): Record<ApiName, Ontologies.InterfaceLinkType> {
    const result: Record<ApiName, Ontologies.InterfaceLinkType> = {};

    for (const ilt of ilts) {
      let linkedEntityApiName: {
        type: "interfaceTypeApiName";
        apiName: string;
      };
      switch (ilt.linkedEntityTypeId.type) {
        case "interfaceType": {
          const interfaceType = ilt.linkedEntityTypeId.interfaceType;
          linkedEntityApiName = {
            type: "interfaceTypeApiName" as const,
            apiName: interfaceType,
          };
          break;
        }
        case "objectType":
          throw new Error(
            "Interface links to object types should not be possible in ontology as code yet",
          );
        default:
          throw new Error("Unknown linked entity type");
      }

      let cardinality: Ontologies.InterfaceLinkTypeCardinality;
      switch (ilt.cardinality) {
        case "SINGLE":
          cardinality = "ONE";
          break;
        case "MANY":
          cardinality = "MANY";
          break;
        default:
          throw new Error("Unknown cardinality type");
      }

      const interfaceLinkType: Ontologies.InterfaceLinkType = {
        rid:
          `ri.interfacelink.${linkedEntityApiName.apiName}.${ilt.metadata.apiName}`,
        apiName: ilt.metadata.apiName,
        displayName: ilt.metadata.displayName,
        description: ilt.metadata.description,
        linkedEntityApiName,
        cardinality,
        required: ilt.required,
      };

      result[interfaceLinkType.apiName] = interfaceLinkType;
    }

    return result;
  }

  static getOsdkSharedPropertyTypesFromBlockData(
    spts: Record<string, SharedPropertyTypeBlockDataV2>,
  ): Record<ApiName, Ontologies.SharedPropertyType> {
    const result: Record<ApiName, Ontologies.SharedPropertyType> = {};

    for (const [rid, spt] of Object.entries(spts)) {
      const dataType = this.getOsdkPropertyTypeFromBlockData(
        spt.sharedPropertyType.type,
      );
      if (dataType) {
        const sharedPropertyType: Ontologies.SharedPropertyType = {
          rid: `ri.spt.${spt.sharedPropertyType.apiName}`,
          apiName: spt.sharedPropertyType.apiName,
          displayName: spt.sharedPropertyType.displayMetadata.displayName,
          description: spt.sharedPropertyType.displayMetadata.description
            ?? undefined,
          dataType,
          typeClasses: [],
        };

        result[sharedPropertyType.apiName] = sharedPropertyType;
      } else {
        throw new Error(
          `Unsupported property type '${
            JSON.stringify(spt.sharedPropertyType.type)
          }' for spt '${spt.sharedPropertyType.apiName}'`,
        );
      }
    }

    return result;
  }

  static getOsdkPropertyTypeFromBlockData(
    type: Type,
  ): Ontologies.ObjectPropertyType | null {
    switch (type.type) {
      case "array": {
        const value = type.array;
        const subType = this.getOsdkPropertyTypeFromBlockData(value.subtype);
        return subType ? { type: "array", subType, reducers: [] } : null;
      }
      case "boolean":
        return { type: "boolean" };
      case "byte":
        return { type: "byte" };
      case "date":
        return { type: "date" };
      case "decimal":
        return { type: "decimal" };
      case "double":
        return { type: "double" };
      case "float":
        return { type: "float" };
      case "geohash":
        return { type: "geopoint" };
      case "geoshape":
        return { type: "geoshape" };
      case "integer":
        return { type: "integer" };
      case "long":
        return { type: "long" };
      case "short":
        return { type: "short" };
      case "string":
        return { type: "string" };
      case "experimentalTimeDependentV1":
        return null;
      case "timestamp":
        return { type: "timestamp" };
      case "attachment":
        return { type: "attachment" };
      case "marking":
        return { type: "marking" };
      case "cipherText":
        return null;
      case "mediaReference":
        return null;
      case "vector":
        return null;
      case "geotimeSeriesReference":
        return null;
      case "struct": {
        const value = type.struct;
        const ridBase = `ri.struct.${
          hash("sha256", JSON.stringify(type)).slice(0, 10)
        }`;
        return {
          type: "struct",
          structFieldTypes: value.structFields.map(field => {
            const fieldDataType = this.getOsdkPropertyTypeFromBlockData(
              field.fieldType,
            );
            if (!fieldDataType) {
              throw new Error(
                `Unsupported field type in struct: ${field.apiName}`,
              );
            }
            return {
              apiName: field.apiName,
              rid: `${ridBase}.${field.apiName}`,
              dataType: fieldDataType,
              typeClasses: [],
            };
          }),
        };
      }
      default:
        return null;
    }
  }

  private static convertObjectTypeStatusFromBlockData(
    status: ObjectTypeStatus,
  ): "ACTIVE" | "DEPRECATED" | "EXPERIMENTAL" {
    switch (status.type) {
      case "active":
        return "ACTIVE";
      case "deprecated":
        return "DEPRECATED";
      case "endorsed":
        throw new Error("Endorsed status is not supported yet");
      case "example":
        throw new Error("Example status has no mapping");
      case "experimental":
        return "EXPERIMENTAL";
      default:
        throw new Error(`Unknown object type status: ${status}`);
    }
  }

  private static convertActionTypeStatusFromBlockData(
    status: ActionTypeStatus,
  ): "ACTIVE" | "DEPRECATED" | "EXPERIMENTAL" {
    switch (status.type) {
      case "active":
        return "ACTIVE";
      case "deprecated":
        return "DEPRECATED";
      case "example":
        throw new Error("Example status has no mapping");
      case "experimental":
        return "EXPERIMENTAL";
      default:
        throw new Error(`Unknown action type status: ${status}`);
    }
  }

  private static convertLinkTypeStatusFromBlockData(
    status: LinkTypeStatus,
  ): "ACTIVE" | "DEPRECATED" | "EXPERIMENTAL" {
    switch (status.type) {
      case "active":
        return "ACTIVE";
      case "deprecated":
        return "DEPRECATED";
      case "example":
        throw new Error("Example status has no mapping");
      case "experimental":
        return "EXPERIMENTAL";
      default:
        throw new Error(`Unknown link type status: ${status}`);
    }
  }
}
function isBlockDataParameterRequired(
  action: ActionTypeBlockDataV2,
  paramKey: string,
): boolean {
  return action.actionType.actionTypeLogic.validation
    .parameterValidations[paramKey].defaultValidation.validation.required.type
    === "required";
}

export interface BlockDataApiNameLookup {
  byRid: Map<string, string>;
  byHyphenated: Map<string, string>;
}

export function buildBlockDataObjectTypeLookup(
  blockdata: OntologyBlockDataV2 | undefined,
): BlockDataApiNameLookup | undefined {
  if (!blockdata?.objectTypes) {
    return undefined;
  }
  const byRid = new Map<string, string>();
  const byHyphenated = new Map<string, string>();
  for (const [key, value] of Object.entries(blockdata.objectTypes)) {
    const apiName = value.objectType.apiName!;
    byRid.set(key, apiName);
    byHyphenated.set(apiName.replace(/\./g, "-").toLowerCase(), apiName);
  }
  return { byRid, byHyphenated };
}

export function buildBlockDataInterfaceTypeLookup(
  blockdata: OntologyBlockDataV2 | undefined,
): BlockDataApiNameLookup | undefined {
  if (!blockdata?.interfaceTypes) {
    return undefined;
  }
  const byRid = new Map<string, string>();
  const byHyphenated = new Map<string, string>();
  for (const [key, value] of Object.entries(blockdata.interfaceTypes)) {
    const apiName = value.interfaceType.apiName!;
    byRid.set(key, apiName);
    byHyphenated.set(apiName.replace(/\./g, "-"), apiName);
  }
  return { byRid, byHyphenated };
}

export function resolveBlockDataApiName(
  id: string,
  lookup: BlockDataApiNameLookup | undefined,
): string {
  if (!lookup) {
    return id;
  }
  return lookup.byRid.get(id) ?? lookup.byHyphenated.get(id) ?? id;
}
