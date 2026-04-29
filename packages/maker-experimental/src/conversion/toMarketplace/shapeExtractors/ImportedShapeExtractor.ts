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
  ActionType,
  IntermediaryLinkDefinition,
  ManyToManyLinkDefinition,
  MarketplaceInterfaceLinkType,
  ObjectTypeRid,
  OntologyBlockDataV2,
} from "@osdk/client.unstable";
import type {
  ActionTypeParameterShape,
  ActionTypeShape,
  BaseParameterType,
  InterfaceLinkTypeInputShape,
  InterfacePropertyTypeInputShape,
  InterfaceTypeInputShape,
  LinkTypeInputShape,
  LinkTypeIntermediaryShape,
  LinkTypeManyToManyInputShape,
  LinkTypeOneToManyShape,
  LocalizedTitleAndDescription,
  ObjectTypeInputShape,
  PropertyInputShape,
  SharedPropertyTypeInputShape,
} from "@osdk/client.unstable/api";
import type {
  BlockShapes,
  OntologyRidGenerator,
} from "../../../util/generateRid.js";
import { ReadableIdGenerator } from "../../../util/generateRid.js";
import { typeToMarketplaceObjectPropertyType } from "../typeVisitors.js";

function createLocalizedAbout(
  fallbackTitle: string,
  fallbackDescription: string = "",
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription,
    localizedTitle: {},
    localizedDescription: {},
  };
}

/**
 * Extracts INPUT shapes from imported ontology block data.
 * Each imported entity becomes an input shape so the marketplace can wire it
 * from the block that originally defined it.
 */
export function getImportedShapes(
  importedBlockData: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
): BlockShapes {
  const blockShapes: BlockShapes = {
    inputShapes: new Map(),
    outputShapes: new Map(),
    inputShapeMetadata: new Map(),
  };

  extractImportedObjectTypes(importedBlockData, ridGenerator, blockShapes);
  extractImportedLinkTypes(importedBlockData, ridGenerator, blockShapes);
  extractImportedInterfaceTypes(importedBlockData, ridGenerator, blockShapes);
  extractImportedSharedPropertyTypes(
    importedBlockData,
    ridGenerator,
    blockShapes,
  );
  extractImportedActionTypes(importedBlockData, ridGenerator, blockShapes);

  return blockShapes;
}

function extractImportedObjectTypes(
  importedBlockData: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
  blockShapes: BlockShapes,
): void {
  const objectReadableIds = ridGenerator.getObjectTypeRids().inverse();
  const propertyReadableIds = ridGenerator.getPropertyTypeRids().inverse();

  for (
    const [rid, objectType] of Object.entries(importedBlockData.objectTypes)
  ) {
    const readableId = objectReadableIds.get(rid as ObjectTypeRid);
    if (!readableId) continue;

    const propertyBlockIds: string[] = [];
    for (
      const propertyRid of Object.keys(objectType.objectType.propertyTypes)
    ) {
      const propReadableId = propertyReadableIds.get(propertyRid);
      if (propReadableId) {
        propertyBlockIds.push(ridGenerator.toBlockInternalId(propReadableId));
      }
    }

    const inputShape: ObjectTypeInputShape = {
      about: createLocalizedAbout(
        objectType.objectType.displayMetadata.displayName,
        objectType.objectType.displayMetadata.description ?? "",
      ),
      editsSupport: "ANY",
      objectsBackendVersion: "V2",
      propertyTypes: propertyBlockIds,
    };

    blockShapes.inputShapes.set(readableId, {
      type: "objectType",
      objectType: inputShape,
    });

    blockShapes.inputShapeMetadata.set(readableId, {
      isOptional: false,
      isAccessedInReconcile: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      preallocateAccessRequirements: "RESOURCE_PREALLOCATION_REQUIRED",
    });

    // Generate property input shapes
    for (
      const [propertyRid, propertyType] of Object.entries(
        objectType.objectType.propertyTypes,
      )
    ) {
      const propReadableId = propertyReadableIds.get(propertyRid);
      if (!propReadableId) continue;

      const sptReadableId = propertyType.sharedPropertyTypeRid
        ? ridGenerator.getSharedPropertyTypeRids().inverse().get(
          propertyType.sharedPropertyTypeRid,
        )
        : undefined;

      const propInputShape: PropertyInputShape = {
        about: createLocalizedAbout(
          propertyType.displayMetadata.displayName,
          propertyType.displayMetadata.description ?? "",
        ),
        objectType: ridGenerator.toBlockInternalId(readableId),
        type: {
          type: "objectPropertyType",
          objectPropertyType: typeToMarketplaceObjectPropertyType(
            propertyType.type,
          ),
        },
        sharedPropertyType: sptReadableId
          ? ridGenerator.toBlockInternalId(sptReadableId)
          : undefined,
      };

      blockShapes.inputShapes.set(propReadableId, {
        type: "property",
        property: propInputShape,
      });

      blockShapes.inputShapeMetadata.set(propReadableId, {
        isOptional: false,
        isAccessedInReconcile: true,
        reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
        preallocateAccessRequirements: "RESOURCE_PREALLOCATION_REQUIRED",
      });
    }
  }
}

function extractImportedLinkTypes(
  importedBlockData: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
  blockShapes: BlockShapes,
): void {
  const linkReadableIds = ridGenerator.getLinkTypeRids().inverse();

  for (const [rid, linkType] of Object.entries(importedBlockData.linkTypes)) {
    const readableId = linkReadableIds.get(rid);
    if (!readableId) continue;

    const definition = linkType.linkType.definition;
    let linkInputShape: LinkTypeInputShape;

    switch (definition.type) {
      case "oneToMany": {
        const def = definition.oneToMany;
        const shape: LinkTypeOneToManyShape = {
          about: createLocalizedAbout(
            def.oneToManyLinkMetadata.displayMetadata.displayName,
          ),
          objectTypeShapeIdOneSide: getObjectTypeBlockId(
            ridGenerator,
            def.objectTypeRidOneSide,
          ),
          objectTypeShapeIdManySide: getObjectTypeBlockId(
            ridGenerator,
            def.objectTypeRidManySide,
          ),
          manyToOneLinkMetadata: createLocalizedAbout(
            def.manyToOneLinkMetadata.displayMetadata.displayName,
          ),
          oneToManyLinkMetadata: createLocalizedAbout(
            def.oneToManyLinkMetadata.displayMetadata.displayName,
          ),
          cardinalityHint: def.cardinalityHint === "ONE_TO_ONE"
            ? "ONE_TO_ONE"
            : "ONE_TO_MANY",
        };
        linkInputShape = { type: "oneToMany", oneToMany: shape };
        break;
      }
      case "manyToMany": {
        const def = definition.manyToMany as ManyToManyLinkDefinition;
        const shape: LinkTypeManyToManyInputShape = {
          about: createLocalizedAbout(
            def.objectTypeAToBLinkMetadata.displayMetadata.displayName,
          ),
          objectTypeShapeIdA: getObjectTypeBlockId(
            ridGenerator,
            def.objectTypeRidA,
          ),
          objectTypeShapeIdB: getObjectTypeBlockId(
            ridGenerator,
            def.objectTypeRidB,
          ),
          objectTypeAToBLinkMetadata: createLocalizedAbout(
            def.objectTypeAToBLinkMetadata.displayMetadata.displayName,
          ),
          objectTypeBToALinkMetadata: createLocalizedAbout(
            def.objectTypeBToALinkMetadata.displayMetadata.displayName,
          ),
          editsSupport: "ANY",
          objectsBackendVersion: "V2",
        };
        linkInputShape = { type: "manyToMany", manyToMany: shape };
        break;
      }
      case "intermediary": {
        const def = definition.intermediary as IntermediaryLinkDefinition;
        const shape: LinkTypeIntermediaryShape = {
          about: createLocalizedAbout(
            def.objectTypeAToBLinkMetadata.displayMetadata.displayName,
          ),
          objectTypeAToBLinkMetadata: createLocalizedAbout(
            def.objectTypeAToBLinkMetadata.displayMetadata.displayName,
          ),
          objectTypeBToALinkMetadata: createLocalizedAbout(
            def.objectTypeBToALinkMetadata.displayMetadata.displayName,
          ),
          objectTypeAShapeId: getObjectTypeBlockId(
            ridGenerator,
            def.objectTypeRidA,
          ),
          objectTypeBShapeId: getObjectTypeBlockId(
            ridGenerator,
            def.objectTypeRidB,
          ),
          intermediaryObjectTypeShapeId: getObjectTypeBlockId(
            ridGenerator,
            def.intermediaryObjectTypeRid,
          ),
          aToIntermediaryLinkTypeShapeId: getLinkTypeBlockId(
            ridGenerator,
            def.aToIntermediaryLinkTypeRid,
          ),
          intermediaryToBLinkTypeShapeId: getLinkTypeBlockId(
            ridGenerator,
            def.intermediaryToBLinkTypeRid,
          ),
        };
        linkInputShape = { type: "intermediary", intermediary: shape };
        break;
      }
      default:
        continue;
    }

    blockShapes.inputShapes.set(readableId, {
      type: "linkType",
      linkType: linkInputShape,
    });

    blockShapes.inputShapeMetadata.set(readableId, {
      isOptional: false,
      isAccessedInReconcile: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      preallocateAccessRequirements: "RESOURCE_PREALLOCATION_REQUIRED",
    });
  }
}

function extractImportedInterfaceTypes(
  importedBlockData: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
  blockShapes: BlockShapes,
): void {
  const knownIdentifiers = importedBlockData.knownIdentifiers;

  for (
    const [_rid, interfaceTypeBlock] of Object.entries(
      importedBlockData.interfaceTypes,
    )
  ) {
    const interfaceType = interfaceTypeBlock.interfaceType;
    const interfaceReadableId = ReadableIdGenerator.getForInterface(
      interfaceType.apiName,
    );

    // Build properties list (SPT references)
    const properties: string[] = (interfaceType.properties ?? []).map(
      (spt: any) => {
        const sptId = knownIdentifiers.sharedPropertyTypes?.[spt.rid];
        return sptId ?? spt.rid;
      },
    );

    // Build propertiesV2 list (interface property references)
    const propertiesV2: string[] = [];
    for (
      const [propertyRid] of Object.entries(interfaceType.propertiesV3 ?? {})
    ) {
      const propReadableId = ridGenerator.getInterfacePropertyTypeRids()
        .inverse().get(propertyRid);
      if (propReadableId) {
        propertiesV2.push(ridGenerator.toBlockInternalId(propReadableId));
      }
    }

    // Build links list
    const links: string[] = (interfaceType.links ?? []).map(
      (ilt: MarketplaceInterfaceLinkType) => {
        const iltId = knownIdentifiers.interfaceLinkTypes?.[ilt.rid];
        return iltId ?? ilt.rid;
      },
    );

    const inputShape: InterfaceTypeInputShape = {
      about: createLocalizedAbout(
        interfaceType.displayMetadata.displayName,
        interfaceType.displayMetadata.description ?? "",
      ),
      properties,
      propertiesV2,
      links,
    };

    blockShapes.inputShapes.set(interfaceReadableId, {
      type: "interfaceType",
      interfaceType: inputShape,
    });

    // Generate interface property type input shapes
    for (
      const [propertyRid, property] of Object.entries(
        interfaceType.propertiesV3 ?? {},
      )
    ) {
      const propReadableId = ridGenerator.getInterfacePropertyTypeRids()
        .inverse().get(propertyRid);
      if (!propReadableId) continue;

      if (property.type === "interfaceDefinedPropertyType") {
        const propInputShape: InterfacePropertyTypeInputShape = {
          about: createLocalizedAbout(
            property.interfaceDefinedPropertyType.displayMetadata.displayName,
            property.interfaceDefinedPropertyType.displayMetadata.description
              ?? "",
          ),
          type: {
            type: "objectPropertyType",
            objectPropertyType: typeToMarketplaceObjectPropertyType(
              property.interfaceDefinedPropertyType.type,
            ),
          },
          interfaceType: ridGenerator.toBlockInternalId(interfaceReadableId),
          requireImplementation:
            property.interfaceDefinedPropertyType.constraints
              .requireImplementation,
        };
        blockShapes.inputShapes.set(propReadableId, {
          type: "interfacePropertyType",
          interfacePropertyType: propInputShape,
        });
      } else if (property.type === "sharedPropertyBasedPropertyType") {
        const spt = property.sharedPropertyBasedPropertyType.sharedPropertyType;
        const sptReadableId = ReadableIdGenerator.getForSpt(spt.apiName);
        const sharedPropInputShape: SharedPropertyTypeInputShape = {
          about: createLocalizedAbout(
            spt.displayMetadata.displayName,
            spt.displayMetadata.description ?? "",
          ),
          type: {
            type: "objectPropertyType",
            objectPropertyType: typeToMarketplaceObjectPropertyType(spt.type),
          },
        };
        blockShapes.inputShapes.set(sptReadableId, {
          type: "sharedPropertyType",
          sharedPropertyType: sharedPropInputShape,
        });
      }
    }

    // Generate interface link type input shapes
    for (const interfaceLinkType of interfaceType.links ?? []) {
      const linkReadableId = ReadableIdGenerator.getForInterfaceLinkType(
        interfaceType.apiName,
        interfaceLinkType.metadata.apiName,
      );

      const linkedEntityTypeRef = interfaceLinkType.linkedEntityTypeId.type
          === "interfaceType"
        ? {
          type: "interfaceType" as const,
          interfaceType: ridGenerator.toBlockInternalId(
            ReadableIdGenerator.getForInterface(
              // resolve interface RID to apiName
              ridGenerator.getInterfaceRids().inverse().get(
                  interfaceLinkType.linkedEntityTypeId.interfaceType,
                )
                ? ridGenerator.toBlockInternalId(
                  ridGenerator.getInterfaceRids().inverse().get(
                    interfaceLinkType.linkedEntityTypeId.interfaceType,
                  )!,
                )
                : interfaceLinkType.linkedEntityTypeId.interfaceType,
            ),
          ),
        }
        : undefined;

      if (!linkedEntityTypeRef) continue;

      const linkInputShape: InterfaceLinkTypeInputShape = {
        about: createLocalizedAbout(
          interfaceLinkType.metadata.displayName,
          interfaceLinkType.metadata.description,
        ),
        interfaceType: ridGenerator.toBlockInternalId(interfaceReadableId),
        linkedEntityType: linkedEntityTypeRef,
        cardinality: interfaceLinkType.cardinality === "SINGLE"
          ? "SINGLE"
          : "MANY",
        required: interfaceLinkType.required,
      };

      blockShapes.inputShapes.set(linkReadableId, {
        type: "interfaceLinkType",
        interfaceLinkType: linkInputShape,
      });
    }
  }
}

function extractImportedSharedPropertyTypes(
  importedBlockData: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
  blockShapes: BlockShapes,
): void {
  for (
    const [_rid, sptBlock] of Object.entries(
      importedBlockData.sharedPropertyTypes,
    )
  ) {
    const spt = sptBlock.sharedPropertyType;
    const readableId = ReadableIdGenerator.getForSpt(spt.apiName);

    const inputShape: SharedPropertyTypeInputShape = {
      about: createLocalizedAbout(
        spt.displayMetadata.displayName,
        spt.displayMetadata.description ?? "",
      ),
      type: {
        type: "objectPropertyType",
        objectPropertyType: typeToMarketplaceObjectPropertyType(spt.type),
      },
    };

    blockShapes.inputShapes.set(readableId, {
      type: "sharedPropertyType",
      sharedPropertyType: inputShape,
    });

    blockShapes.inputShapeMetadata.set(readableId, {
      isOptional: false,
      isAccessedInReconcile: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      preallocateAccessRequirements: "RESOURCE_PREALLOCATION_REQUIRED",
    });
  }
}

function extractImportedActionTypes(
  importedBlockData: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
  blockShapes: BlockShapes,
): void {
  for (
    const [_rid, actionTypeBlock] of Object.entries(
      importedBlockData.actionTypes ?? {},
    )
  ) {
    const actionApiName =
      (actionTypeBlock.actionType as ActionType).metadata.apiName;
    const actionReadableId = ReadableIdGenerator.getForActionType(
      actionApiName,
    );

    const parametersV2: string[] = Object.entries(
      actionTypeBlock.parameterIds ?? {},
    ).map(([_key, parameterId]) => {
      const paramReadableId = ReadableIdGenerator.getForParameter(
        actionApiName,
        parameterId,
      );
      return ridGenerator.toBlockInternalId(paramReadableId);
    });

    const actionShape: ActionTypeShape = {
      about: createLocalizedAbout(
        (actionTypeBlock.actionType as ActionType).metadata.displayMetadata
          .displayName,
        (actionTypeBlock.actionType as ActionType).metadata.displayMetadata
          .description,
      ),
      parameters: {},
      parametersV2,
    };

    blockShapes.inputShapes.set(actionReadableId, {
      type: "action",
      action: actionShape,
    });

    // Generate parameter input shapes
    const parameters =
      (actionTypeBlock.actionType as ActionType).metadata.parameters;
    if (parameters) {
      const converter = new ImportedBaseParameterTypeConverter(
        importedBlockData.knownIdentifiers.objectTypeIds,
        importedBlockData.knownIdentifiers.interfaceTypes,
      );

      for (const [parameterId, parameter] of Object.entries(parameters)) {
        const paramReadableId = ReadableIdGenerator.getForParameter(
          actionApiName,
          parameterId,
        );

        const parameterShape: ActionTypeParameterShape = {
          about: createLocalizedAbout(
            parameter.displayMetadata.displayName,
            parameter.displayMetadata.description,
          ),
          type: converter.convert(parameter.type),
          actionType: ridGenerator.toBlockInternalId(actionReadableId),
        };

        blockShapes.inputShapes.set(paramReadableId, {
          type: "actionParameter",
          actionParameter: parameterShape,
        });
      }
    }
  }
}

function getObjectTypeBlockId(
  ridGenerator: OntologyRidGenerator,
  objectTypeRid: ObjectTypeRid,
): string {
  const readableId = ridGenerator.getObjectTypeRids().inverse().get(
    objectTypeRid,
  );
  if (!readableId) {
    throw new Error(`Object type RID not found: ${objectTypeRid}`);
  }
  return ridGenerator.toBlockInternalId(readableId);
}

function getLinkTypeBlockId(
  ridGenerator: OntologyRidGenerator,
  linkTypeRid: string,
): string {
  const readableId = ridGenerator.getLinkTypeRids().inverse().get(linkTypeRid);
  if (!readableId) {
    throw new Error(`Link type RID not found: ${linkTypeRid}`);
  }
  return ridGenerator.toBlockInternalId(readableId);
}

/**
 * Simplified parameter type converter for imported action types.
 * Mirrors BaseParameterTypeConverter from ActionTypeShapeExtractor.
 */
class ImportedBaseParameterTypeConverter {
  private readonly objectTypeIds: Record<string, string>;
  private readonly interfaceTypes: Record<string, string>;

  constructor(
    objectTypeIds?: Record<string, string>,
    interfaceTypes?: Record<string, string>,
  ) {
    this.objectTypeIds = objectTypeIds ?? {};
    this.interfaceTypes = interfaceTypes ?? {};
  }

  convert(parameterType: { type: string }): BaseParameterType {
    const pt = parameterType as Record<string, unknown> & { type: string };
    const t = pt.type;

    // Simple types
    const simpleTypes = [
      "boolean",
      "booleanList",
      "integer",
      "integerList",
      "long",
      "longList",
      "double",
      "doubleList",
      "string",
      "stringList",
      "geohash",
      "geohashList",
      "geoshape",
      "geoshapeList",
      "timeSeriesReference",
      "timestamp",
      "timestampList",
      "date",
      "dateList",
      "attachment",
      "attachmentList",
      "marking",
      "markingList",
      "mediaReference",
      "objectTypeReference",
      "geotimeSeriesReference",
      "geotimeSeriesReferenceList",
    ];

    if (simpleTypes.includes(t)) {
      return { type: t, [t]: {} } as unknown as BaseParameterType;
    }

    // Object reference types
    if (
      t === "objectReference" || t === "objectReferenceList"
      || t === "objectSetRid"
    ) {
      const objRef = pt[t] as { objectTypeId: string } | undefined;
      const blockId = objRef
        ? this.objectTypeIds[objRef.objectTypeId]
        : undefined;
      return {
        type: t,
        [t]: { objectTypeId: blockId ?? "" },
      } as unknown as BaseParameterType;
    }

    // Interface reference types
    if (
      t === "interfaceReference" || t === "interfaceReferenceList"
      || t === "interfaceObjectSetRid"
    ) {
      const ifRef = pt[t] as { interfaceTypeRid: string } | undefined;
      const blockId = ifRef
        ? this.interfaceTypes[ifRef.interfaceTypeRid]
        : undefined;
      return {
        type: t,
        [t]: { interfaceTypeRid: blockId ?? "" },
      } as unknown as BaseParameterType;
    }

    // Decimal types
    if (t === "decimal" || t === "decimalList") {
      const dec = pt[t] as
        | { precision?: number; scale?: number }
        | undefined;
      return {
        type: t,
        [t]: { precision: dec?.precision, scale: dec?.scale },
      } as unknown as BaseParameterType;
    }

    return { type: t, [t]: {} } as unknown as BaseParameterType;
  }
}
