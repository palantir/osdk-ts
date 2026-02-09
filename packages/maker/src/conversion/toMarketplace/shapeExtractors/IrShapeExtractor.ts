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
  GroupId,
  KnownMarketplaceIdentifiers,
  LinkTypeRid,
  MarketplaceInterfaceType,
  ObjectTypeRid,
  OntologyBlockDataV2,
  SharedPropertyType,
  Type,
  ValueTypeReference,
} from "@osdk/client.unstable";
import type {
  AllowedObjectPropertyType,
  AllowOntologySchemaMigrationsShape,
  InputShape,
  InterfaceLinkTypeOutputShape,
  InterfaceTypeOutputShape,
  LocalizedTitleAndDescription,
  MultipassGroupShape,
  OutputShape,
  SharedPropertyTypeInputShape,
  SharedPropertyTypeOutputShape,
} from "@osdk/client.unstable/api";
import {
  type BlockShapes,
  type OntologyRidGenerator,
  type ReadableId,
  ReadableIdGenerator,
} from "../../../util/generateRid.js";
import { LinkTypeShapeExtractor } from "./LinkTypeShapeExtractor.js";
import { ObjectTypeShapeExtractor } from "./ObjectTypeShapeExtractor.js";

export const MIGRATION_SHAPE_READABLE_ID: ReadableId =
  "migration-input" as ReadableId;

/**
 * Helper to create LocalizedTitleAndDescription with empty localizations
 */
function createLocalizedAbout(
  fallbackTitle: string,
  fallbackDescription: string,
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription,
    localizedTitle: {},
    localizedDescription: {},
  };
}

/**
 * Main entry point for extracting all shapes from an ontology
 */
export async function getShapes(
  ontologyBlockDataV2: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
  randomnessKey?: string,
): Promise<BlockShapes> {
  const allBlockShapes: BlockShapes = {
    inputShapes: new Map(),
    outputShapes: new Map(),
    inputShapeMetadata: new Map(),
  };

  const outputSharedPropertyTypeRids = new Set(
    Object.keys(ontologyBlockDataV2.sharedPropertyTypes),
  );

  // Interfaces
  for (
    const [_rid, interfaceType] of Object.entries(
      ontologyBlockDataV2.interfaceTypes,
    )
  ) {
    extractInterfaceType(
      allBlockShapes.outputShapes,
      allBlockShapes.inputShapes,
      ontologyBlockDataV2.knownIdentifiers,
      outputSharedPropertyTypeRids,
      interfaceType.interfaceType,
    );
  }
  // Shared Property Types
  for (
    const [_rid, sharedPropertyTypeBlock] of Object.entries(
      ontologyBlockDataV2.sharedPropertyTypes,
    )
  ) {
    extractSharedPropertyType(
      allBlockShapes,
      sharedPropertyTypeBlock.sharedPropertyType,
      ridGenerator,
    );
  }

  // Objects
  const objectReadableIds = ridGenerator.getObjectTypeRids().inverse();
  console.log("Readable IDs collected", ridGenerator);
  for (
    const [rid, objectType] of Object.entries(ontologyBlockDataV2.objectTypes)
  ) {
    console.log(`Processing object type with RID ${rid} and API name ${objectType.objectType.apiName}`);
    const readableId = objectReadableIds.get(rid as ObjectTypeRid);
    if (readableId) {
      const objectExtractor = new ObjectTypeShapeExtractor(randomnessKey);
      const objectShapes = objectExtractor.extract(
        readableId,
        objectType,
        ridGenerator,
      );
      console.log(`Extracted shapes for object type ${objectType.objectType.apiName}, shapes:`, objectShapes);
      consumeBlockShapes(allBlockShapes, objectShapes);
    }
  }

  // Marking shapes (placeholder - implement if needed)
  // const markingShapes = getMarkingShapes(ontologyBlockDataV2, randomnessKey);
  // consumeBlockShapes(allBlockShapes, markingShapes);

  // Links
  const linkReadableIds = ridGenerator.getLinkTypeRids().inverse();
  for (const [rid, linkType] of Object.entries(ontologyBlockDataV2.linkTypes)) {
    const readableId = linkReadableIds.get(rid as LinkTypeRid);
    if (readableId) {
      const linkExtractor = new LinkTypeShapeExtractor(randomnessKey);
      const linkShapes = linkExtractor.extract(
        readableId,
        linkType,
        ridGenerator,
      );
      consumeBlockShapes(allBlockShapes, linkShapes);
    }
  }

  // Actions
  const { ActionTypeShapeExtractor } = await import('./ActionTypeShapeExtractor.js');
  for (const [_rid, actionType] of Object.entries(ontologyBlockDataV2.actionTypes || {})) {
    const actionExtractor = new ActionTypeShapeExtractor(randomnessKey);
    const actionShapes = actionExtractor.extract(
      actionType,
      ridGenerator,
      ontologyBlockDataV2.knownIdentifiers,
    );
    consumeBlockShapes(allBlockShapes, actionShapes);
  }

  // Multipass groups
  for (const [readableId, groupId] of ridGenerator.getGroupIds().entries()) {
    const groupShapes = extractMultipassGroup(groupId, readableId);
    consumeBlockShapes(allBlockShapes, groupShapes);
  }

  // Migration shape
  const migrationShapes = getMigrationShape();
  consumeBlockShapes(allBlockShapes, migrationShapes);

  return allBlockShapes;
}

/**
 * Extract interface type shapes
 */
function extractInterfaceType(
  outputShapeMap: Map<ReadableId, OutputShape>,
  inputShapeMap: Map<ReadableId, InputShape>,
  knownMarketplaceIdentifiers: KnownMarketplaceIdentifiers,
  outputSharedPropertyTypeRids: Set<string>,
  interfaceType: MarketplaceInterfaceType,
): void {
  // Build interface type output shape
  const interfaceTypeOutputShape: InterfaceTypeOutputShape = {
    about: createLocalizedAbout(
      interfaceType.displayMetadata.displayName,
      interfaceType.displayMetadata.description ?? "",
    ),
    properties: (interfaceType.properties ?? []).map((spt: any) => {
      const sptId = knownMarketplaceIdentifiers.sharedPropertyTypes?.[spt.rid];
      return sptId ?? spt.rid;
    }),
    propertiesV2: [],
    links: (interfaceType.links ?? []).map((ilt: any) => {
      const iltId = knownMarketplaceIdentifiers.interfaceLinkTypes?.[ilt.rid];
      return iltId ?? ilt.rid;
    }),
    extendsInterfaces: (interfaceType.extendsInterfaces ?? []).map(
      (it: string) => {
        const itId = knownMarketplaceIdentifiers.interfaceTypes?.[it];
        return itId ?? it;
      },
    ),
  };

  // Add shared property type input shapes for properties not in output
  for (const spt of interfaceType.properties ?? []) {
    if (!outputSharedPropertyTypeRids.has(spt.rid)) {
      const sptReadableId = getReadableIdForSpt(spt.apiName);
      const sharedPropInputShape: SharedPropertyTypeInputShape = {
        about: getTitleAndDescriptionForSharedPropertyType(spt),
        type: convertPropertyTypeToMarketplaceType(spt.type),
      };
      inputShapeMap.set(
        sptReadableId,
        {
          type: "sharedPropertyType",
          sharedPropertyType: sharedPropInputShape,
        },
      );
    }
  }

  // Add interface link type output shapes
  for (const interfaceLinkType of interfaceType.links ?? []) {
    const outputShape = getInterfaceLinkTypeOutputShape(
      knownMarketplaceIdentifiers,
      interfaceType,
      interfaceLinkType,
    );
    outputShapeMap.set(outputShape.id, outputShape.outputShape);
  }

  // Add interface type output shape
  const readableId = getReadableIdForInterface(interfaceType.apiName);
  outputShapeMap.set(readableId, {
    type: "interfaceType",
    interfaceType: interfaceTypeOutputShape,
  });
}

/**
 * Get interface link type output shape
 */
function getInterfaceLinkTypeOutputShape(
  knownMarketplaceIdentifiers: any,
  interfaceType: any,
  interfaceLinkType: any,
): { id: ReadableId; outputShape: OutputShape } {
  // Build linked entity type reference
  const linkedReference =
    interfaceLinkType.linkedEntityTypeId.type === "interfaceType"
      ? interfaceLinkType.linkedEntityTypeId.interfaceType
      : undefined;

  if (!linkedReference) {
    throw new Error("Object link references not implemented");
  }

  const linkedEntityTypeRef =
    knownMarketplaceIdentifiers.interfaceTypes?.[linkedReference]
      ?? linkedReference;

  // Map cardinality
  const cardinality = interfaceLinkType.cardinality === "SINGLE"
    ? "SINGLE"
    : "MANY";

  const shape: InterfaceLinkTypeOutputShape = {
    about: createLocalizedAbout(
      interfaceLinkType.metadata.displayName,
      interfaceLinkType.metadata.description,
    ),
    interfaceType:
      knownMarketplaceIdentifiers.interfaceTypes?.[interfaceType.rid]
        ?? interfaceType.rid,
    linkedEntityType: {
      type: "interfaceType",
      interfaceType: linkedEntityTypeRef,
    },
    cardinality,
    required: interfaceLinkType.required,
  };

  const readableId = getReadableIdForInterfaceLink(
    interfaceType.apiName,
    interfaceLinkType.metadata.apiName,
  );

  return {
    id: readableId,
    outputShape: {
      type: "interfaceLinkType",
      interfaceLinkType: shape,
    },
  };
}

/**
 * Extract shared property type shapes
 */
function extractSharedPropertyType(
  blockShapes: BlockShapes,
  sharedPropertyType: SharedPropertyType,
  ridGenerator: OntologyRidGenerator,
): void {
  const readableId = getReadableIdForSpt(sharedPropertyType.apiName);
  const propertyType = convertPropertyTypeToMarketplaceType(
    sharedPropertyType.type,
  );

  // Extract the objectPropertyType from AllowedObjectPropertyType
  const objectPropertyType = propertyType.type === "objectPropertyType"
    ? propertyType.objectPropertyType
    : {
      type: "string",
      string: { isLongText: false, supportsExactMatching: true },
    } as any;

  const outputShape: SharedPropertyTypeOutputShape = {
    about: getTitleAndDescriptionForSharedPropertyType(sharedPropertyType),
    type: objectPropertyType,
  };

  blockShapes.outputShapes.set(readableId, {
    type: "sharedPropertyType",
    sharedPropertyType: outputShape,
  });

  extractValueTypeInputShapeIfPresent(
    sharedPropertyType.valueType ?? undefined,
    sharedPropertyType.displayMetadata.displayName,
    sharedPropertyType.type,
    blockShapes,
    ridGenerator,
  );
}

/**
 * Extract value type input shape if present
 */
export function extractValueTypeInputShapeIfPresent(
  maybeValueTypeReference: ValueTypeReference | undefined,
  displayName: string,
  type: Type,
  blockShapes: BlockShapes,
  ridGenerator: OntologyRidGenerator,
): void {
  if (!maybeValueTypeReference) return;

  const valueTypeInput: InputShape = {
    type: "valueType",
    valueType: {
      about: createLocalizedAbout(`Value Type Input for ${displayName}`, ""),
      baseType: typeToMarketplaceBaseType(type),
    },
  };

  const mappingEntry = ridGenerator.valueTypeMappingForReference(
    maybeValueTypeReference,
  );
  blockShapes.inputShapes.set(mappingEntry.input, valueTypeInput);
}

/**
 * Get title and description for shared property type
 */
function getTitleAndDescriptionForSharedPropertyType(
  sharedPropertyType: SharedPropertyType | any,
): LocalizedTitleAndDescription {
  return createLocalizedAbout(
    sharedPropertyType.displayMetadata.displayName,
    sharedPropertyType.displayMetadata.description ?? "Shared Property Type",
  );
}

/**
 * Extract multipass group shape
 */
function extractMultipassGroup(
  groupId: GroupId,
  readableId: ReadableId,
): BlockShapes {
  const multipassGroup: MultipassGroupShape = {
    about: createLocalizedAbout(`Group ${groupId}`, ""),
  };

  return {
    inputShapes: new Map([[readableId, {
      type: "multipassGroup",
      multipassGroup,
    }]]),
    outputShapes: new Map(),
    inputShapeMetadata: new Map(),
  };
}

/**
 * Get migration shape
 */
function getMigrationShape(): BlockShapes {
  const migrationShape: AllowOntologySchemaMigrationsShape = {
    about: createLocalizedAbout(
      "Allow Ontology schema migrations",
      "Required user acknowledgement for any breaking schema change that requires an Ontology schema migration.",
    ),
  };

  return {
    inputShapes: new Map([[MIGRATION_SHAPE_READABLE_ID, {
      type: "allowOntologySchemaMigrations",
      allowOntologySchemaMigrations: migrationShape,
    }]]),
    outputShapes: new Map(),
    inputShapeMetadata: new Map([[MIGRATION_SHAPE_READABLE_ID, {
      isOptional: true,
      isAccessedInReconcile: false,
    }]]),
  };
}

/**
 * Consume (merge) block shapes into the target
 */
function consumeBlockShapes(target: BlockShapes, source: BlockShapes): void {
  for (const [key, value] of source.inputShapes.entries()) {
    target.inputShapes.set(key, value);
  }
  for (const [key, value] of source.outputShapes.entries()) {
    target.outputShapes.set(key, value);
  }
  for (const [key, value] of source.inputShapeMetadata.entries()) {
    target.inputShapeMetadata.set(key, value);
  }
}

// Placeholder functions for readable ID generation
// These should match the Java ReadableIdGenerator patterns

function getReadableIdForSpt(apiName: string): ReadableId {
  return ReadableIdGenerator.getForSpt(apiName);
}

function getReadableIdForInterface(apiName: string): ReadableId {
  return ReadableIdGenerator.getForInterface(apiName);
}

function getReadableIdForInterfaceLink(
  interfaceApiName: string,
  linkApiName: string,
): ReadableId {
  return ReadableIdGenerator.getForInterfaceLinkType(
    interfaceApiName,
    linkApiName,
  );
}

// Placeholder type conversion functions
// These should be implemented to match the Java type visitors

function convertPropertyTypeToMarketplaceType(
  _type: Type,
): AllowedObjectPropertyType {
  // Placeholder - should use TypeToMarketplaceShapeObjectPropertyTypeVisitor
  return {
    type: "objectPropertyType",
    objectPropertyType: {
      type: "primitive",
      primitive: {
        type: "stringType",
        stringType: { isLongText: false, supportsExactMatching: true },
      },
    },
  };
}

function typeToMarketplaceBaseType(_type: Type): any {
  // Placeholder - should use TypeToMarketplaceShapeBaseTypeVisitor
  return { type: "string", string: {} };
}
