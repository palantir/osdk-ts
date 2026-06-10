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
  InterfaceTypeBlockDataV2,
  KnownMarketplaceIdentifiers,
  MarketplaceInterfaceLinkType,
  MarketplaceInterfaceType,
  ObjectTypeRid,
  OntologyBlockDataV2,
  SharedPropertyType,
  Type,
  ValueTypeReference,
} from "@osdk/client.unstable";
import type {
  AllowOntologySchemaMigrationsShape,
  InputShape,
  InputShapeMetadata,
  InterfaceLinkTypeOutputShape,
  InterfacePropertyTypeOutputShape,
  InterfaceTypeOutputShape,
  LocalizedTitleAndDescription,
  MarkingsShape,
  MultipassGroupShape,
  OutputShape,
  SharedPropertyTypeInputShape,
  SharedPropertyTypeOutputShape,
} from "@osdk/client.unstable/api";
import type { FunctionsIr } from "../../../api/defineOntologyV2.js";
import {
  type BlockShapes,
  type OntologyRidGenerator,
  type ReadableId,
  ReadableIdGenerator,
} from "../../../util/generateRid.js";
import {
  typeToMarketplaceBaseType,
  typeToMarketplaceObjectPropertyType,
} from "../typeVisitors.js";
import { LinkTypeShapeExtractor } from "./LinkTypeShapeExtractor.js";
import { ObjectTypeShapeExtractor } from "./ObjectTypeShapeExtractor.js";

export const MIGRATION_SHAPE_READABLE_ID: ReadableId =
  "migration-input" as ReadableId;

const SPT_INPUT_SHAPE_METADATA: InputShapeMetadata = {
  isOptional: false,
  isAccessedInReconcile: true,
  reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
  preallocateAccessRequirements: "RESOURCE_PREALLOCATION_REQUIRED",
};

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
  functionsIr?: FunctionsIr,
  randomnessKey?: string,
): Promise<BlockShapes> {
  const allBlockShapes: BlockShapes = {
    inputShapes: new Map(),
    outputShapes: new Map(),
    inputShapeMetadata: new Map(),
    inputMappings: [],
  };

  const outputSharedPropertyTypeRids = new Set(
    Object.keys(ontologyBlockDataV2.sharedPropertyTypes),
  );

  const multiInterfaceSptApiNames = getMultiInterfaceSptApiNames(
    ontologyBlockDataV2.interfaceTypes,
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
      allBlockShapes.inputShapeMetadata,
      ontologyBlockDataV2.knownIdentifiers,
      outputSharedPropertyTypeRids,
      multiInterfaceSptApiNames,
      interfaceType.interfaceType,
      ridGenerator,
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
  for (
    const [rid, objectType] of Object.entries(ontologyBlockDataV2.objectTypes)
  ) {
    const readableId = objectReadableIds.get(rid as ObjectTypeRid);
    if (readableId) {
      const objectExtractor = new ObjectTypeShapeExtractor(randomnessKey);
      const objectShapes = objectExtractor.extract(
        readableId,
        objectType,
        ridGenerator,
      );
      consumeBlockShapes(allBlockShapes, objectShapes);
    }
  }

  // Marking shapes
  const markingShapes = getMarkingShapes(ontologyBlockDataV2, ridGenerator);
  consumeBlockShapes(allBlockShapes, markingShapes);

  // Links
  const linkReadableIds = ridGenerator.getLinkTypeRids().inverse();
  for (const [rid, linkType] of Object.entries(ontologyBlockDataV2.linkTypes)) {
    const readableId = linkReadableIds.get(rid);
    if (readableId) {
      const linkExtractor = new LinkTypeShapeExtractor();
      const linkShapes = linkExtractor.extract(
        readableId,
        linkType,
        ridGenerator,
      );
      consumeBlockShapes(allBlockShapes, linkShapes);
    }
  }

  // Actions
  const { ActionTypeShapeExtractor } = await import(
    "./ActionTypeShapeExtractor.js"
  );
  for (
    const [_rid, actionType] of Object.entries(
      ontologyBlockDataV2.actionTypes || {},
    )
  ) {
    const actionExtractor = new ActionTypeShapeExtractor();
    const actionShapes = actionExtractor.extract(
      actionType,
      ridGenerator,
      ontologyBlockDataV2.knownIdentifiers,
      functionsIr,
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
  inputShapeMetadataMap: Map<ReadableId, InputShapeMetadata>,
  knownMarketplaceIdentifiers: KnownMarketplaceIdentifiers,
  outputSharedPropertyTypeRids: Set<string>,
  multiInterfaceSptApiNames: Set<string>,
  interfaceType: MarketplaceInterfaceType,
  ridGenerator: OntologyRidGenerator,
): void {
  const interfaceReadableId = getReadableIdForInterface(interfaceType.apiName);
  // Build propertiesV2 from propertiesV3 entries using knownMarketplaceIdentifiers
  const propertiesV2: string[] = [];
  for (const iptRid of Object.keys(interfaceType.propertiesV3 ?? {})) {
    const blockInternalId = knownMarketplaceIdentifiers.interfacePropertyTypes
      ?.[iptRid];
    if (blockInternalId) {
      propertiesV2.push(blockInternalId);
    }
  }

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
    propertiesV2,
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

  // Add shared property type input shapes for properties not in output,
  // and extract value type input shapes for interface-defined properties
  const blockShapesRef: BlockShapes = {
    inputShapes: inputShapeMap,
    outputShapes: outputShapeMap,
    inputShapeMetadata: inputShapeMetadataMap,
    inputMappings: [],
  };
  for (
    const [_propertyRid, property] of Object.entries(
      interfaceType.propertiesV3,
    )
      ?? []
  ) {
    if (
      property.type === "sharedPropertyBasedPropertyType"
      && !outputSharedPropertyTypeRids.has(
        property.sharedPropertyBasedPropertyType.sharedPropertyType.rid,
      )
    ) {
      const spt = property.sharedPropertyBasedPropertyType.sharedPropertyType;
      const sptReadableId = getReadableIdForSpt(spt.apiName);
      const sharedPropInputShape: SharedPropertyTypeInputShape = {
        about: getTitleAndDescriptionForSharedPropertyType(spt),
        type: {
          type: "objectPropertyType",
          objectPropertyType: typeToMarketplaceObjectPropertyType(spt.type),
        },
      };
      inputShapeMap.set(
        sptReadableId,
        {
          type: "sharedPropertyType",
          sharedPropertyType: sharedPropInputShape,
        },
      );
      inputShapeMetadataMap.set(sptReadableId, SPT_INPUT_SHAPE_METADATA);
    } else if (property.type === "interfaceDefinedPropertyType") {
      // TODO: once we have published output shapes for a while, add IPT input shapes
      const idp = property.interfaceDefinedPropertyType;
      extractValueTypeInputShapeIfPresent(
        idp.constraints.valueType ?? undefined,
        idp.displayMetadata.displayName,
        idp.type as unknown as Type,
        blockShapesRef,
        ridGenerator,
      );
    }
  }

  // For every property directly defined on the interface, generate an IPT output shape.
  // IDPs can only be defined on a single interface so they are guaranteed to only be added once here.
  // SPT-backed properties may be added multiple times here with the latest winning out, however,
  // this is not an issue as the only thing that will change is the interfaceTypeReference which is unused
  for (
    const [_propertyRid, property] of Object.entries(
      interfaceType.propertiesV3,
    )
      ?? []
  ) {
    const outputShapeEntry = getInterfacePropertyTypeOutputShape(
      knownMarketplaceIdentifiers,
      interfaceType,
      multiInterfaceSptApiNames,
      property,
      interfaceReadableId,
      ridGenerator,
    );
    outputShapeMap.set(outputShapeEntry.id, outputShapeEntry.outputShape);
  }

  // Add interface link type output shapes
  for (const interfaceLinkType of interfaceType.links ?? []) {
    const outputShape = getInterfaceLinkTypeOutputShape(
      knownMarketplaceIdentifiers,
      interfaceType,
      interfaceLinkType,
      ridGenerator,
    );
    outputShapeMap.set(outputShape.id, outputShape.outputShape);
  }

  // Add interface type output shape
  outputShapeMap.set(interfaceReadableId, {
    type: "interfaceType",
    interfaceType: interfaceTypeOutputShape,
  });
}

/**
 * Get interface property type output shape for either interface-defined or SPT-backed properties.
 */
function getInterfacePropertyTypeOutputShape(
  knownMarketplaceIdentifiers: KnownMarketplaceIdentifiers,
  interfaceType: MarketplaceInterfaceType,
  multiInterfaceSptApiNames: Set<string>,
  property: MarketplaceInterfaceType["propertiesV3"][string],
  interfaceReadableId: ReadableId,
  ridGenerator: OntologyRidGenerator,
): { id: ReadableId; outputShape: OutputShape } {
  const interfaceTypeRef = ridGenerator.toBlockInternalId(interfaceReadableId);

  if (property.type === "interfaceDefinedPropertyType") {
    const idp = property.interfaceDefinedPropertyType;
    const readableId = ReadableIdGenerator.getForInterfaceProperty(
      interfaceType.apiName,
      idp.apiName,
    );
    const shape: InterfacePropertyTypeOutputShape = {
      about: createLocalizedAbout(
        idp.displayMetadata.displayName,
        idp.displayMetadata.description ?? idp.displayMetadata.displayName,
      ),
      interfaceType: interfaceTypeRef,
      type: typeToMarketplaceObjectPropertyType(idp.type),
      requireImplementation: idp.constraints.requireImplementation,
    };
    return {
      id: readableId,
      outputShape: {
        type: "interfacePropertyType",
        interfacePropertyType: shape,
      },
    };
  } else {
    const spt = property.sharedPropertyBasedPropertyType.sharedPropertyType;
    const sptApiName = spt.apiName;

    const readableId = multiInterfaceSptApiNames.has(sptApiName)
      ? ReadableIdGenerator.getForSptBackedInterfaceProperty(sptApiName)
      : ReadableIdGenerator.getForSptBackedInterfaceProperty(
        interfaceType.apiName,
        sptApiName,
      );

    const sptBlockInternalId = knownMarketplaceIdentifiers.sharedPropertyTypes
      ?.[spt.rid];
    const shape: InterfacePropertyTypeOutputShape = {
      about: getTitleAndDescriptionForSharedPropertyType(spt),
      interfaceType: interfaceTypeRef,
      type: typeToMarketplaceObjectPropertyType(spt.type),
      requireImplementation:
        property.sharedPropertyBasedPropertyType.requireImplementation,
      sharedPropertyType: sptBlockInternalId,
    };
    return {
      id: readableId,
      outputShape: {
        type: "interfacePropertyType",
        interfacePropertyType: shape,
      },
    };
  }
}

/**
 * Returns the set of SPT api names that are used by more than one interface type.
 * For these SPTs, the shape ID must not include the interface api name to avoid RID collisions.
 */
export function getMultiInterfaceSptApiNames(
  interfaces: Record<string, InterfaceTypeBlockDataV2>,
): Set<string> {
  const seen = new Set<string>();
  const shared = new Set<string>();
  for (const interfaceBlock of Object.values(interfaces)) {
    for (
      const property of Object.values(
        interfaceBlock.interfaceType.propertiesV3 ?? {},
      )
    ) {
      if (property.type === "sharedPropertyBasedPropertyType") {
        const apiName =
          property.sharedPropertyBasedPropertyType.sharedPropertyType.apiName;
        if (seen.has(apiName)) {
          shared.add(apiName);
        }
        seen.add(apiName);
      }
    }
  }
  return shared;
}

/**
 * Get interface link type output shape
 */
function getInterfaceLinkTypeOutputShape(
  knownMarketplaceIdentifiers: KnownMarketplaceIdentifiers,
  interfaceType: MarketplaceInterfaceType,
  interfaceLinkType: MarketplaceInterfaceLinkType,
  ridGenerator: OntologyRidGenerator,
): { id: ReadableId; outputShape: OutputShape } {
  // Build linked entity type reference
  const interfaceRidOrUndefined =
    interfaceLinkType.linkedEntityTypeId.type === "interfaceType"
      ? interfaceLinkType.linkedEntityTypeId.interfaceType
      : undefined;

  if (!interfaceRidOrUndefined) {
    throw new Error("Object link references not implemented");
  }

  const linkedEntityTypeRef = ridGenerator.toBlockInternalId(
    ridGenerator.getInterfaceRids().inverse().get(interfaceRidOrUndefined)!,
  );

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
  const propertyType = typeToMarketplaceObjectPropertyType(
    sharedPropertyType.type,
  );

  const outputShape: SharedPropertyTypeOutputShape = {
    about: getTitleAndDescriptionForSharedPropertyType(sharedPropertyType),
    type: propertyType,
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
    sharedPropertyType.displayMetadata.description
      ?? sharedPropertyType.displayMetadata.displayName,
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
    inputMappings: [],
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
    inputMappings: [],
  };
}

const MAX_CLASS_DESC =
  "The maximum classification for data under mandatory control property types and/or the max classification"
  + " allowed on an action type classification parameter.";

/**
 * Get properties for a datasource definition (keys of propertyMapping).
 */
function getPropertiesForDatasource(
  datasourceDef: { type: string; [key: string]: unknown },
): Set<string> {
  const dsType = datasourceDef.type;
  let propertyMapping: Record<string, unknown> | undefined;

  switch (dsType) {
    case "dataset":
      propertyMapping =
        (datasourceDef.dataset as { propertyMapping?: Record<string, unknown> })
          ?.propertyMapping;
      break;
    case "datasetV2":
      propertyMapping = (datasourceDef.datasetV2 as {
        propertyMapping?: Record<string, unknown>;
      })?.propertyMapping;
      break;
    case "datasetV3":
      propertyMapping = (datasourceDef.datasetV3 as {
        propertyMapping?: Record<string, unknown>;
      })?.propertyMapping;
      break;
    case "restrictedView":
      propertyMapping = (datasourceDef.restrictedView as {
        propertyMapping?: Record<string, unknown>;
      })?.propertyMapping;
      break;
    case "restrictedViewV2":
      propertyMapping = (datasourceDef.restrictedViewV2 as {
        propertyMapping?: Record<string, unknown>;
      })?.propertyMapping;
      break;
    case "stream":
      propertyMapping =
        (datasourceDef.stream as { propertyMapping?: Record<string, unknown> })
          ?.propertyMapping;
      break;
    case "streamV2":
      propertyMapping = (datasourceDef.streamV2 as {
        propertyMapping?: Record<string, unknown>;
      })?.propertyMapping;
      break;
    case "streamV3":
      propertyMapping = (datasourceDef.streamV3 as {
        propertyMapping?: Record<string, unknown>;
      })?.propertyMapping;
      break;
    default:
      return new Set();
  }

  return new Set(propertyMapping ? Object.keys(propertyMapping) : []);
}

/**
 * Extract marking shapes from the ontology block data.
 * Port of Java's MarkingShapeExtractor.getMarkingShapes().
 */
function getMarkingShapes(
  ontologyBlockDataV2: OntologyBlockDataV2,
  ridGenerator: OntologyRidGenerator,
): BlockShapes {
  // Collect CBAC and mandatory marking constraints across all object types
  const cbacMarkingsAndAffectedProps = new Map<string, Set<ReadableId>>();
  const mandatoryMarkingsAndAffectedProps = new Map<string, Set<ReadableId>>();
  // CBAC markings from additionalMandatory.markings in property security groups
  const additionalCbacMarkingsAndAffectedProps = new Map<
    string,
    Set<ReadableId>
  >();

  for (const objectType of Object.values(ontologyBlockDataV2.objectTypes)) {
    const objectApiName = objectType.objectType.apiName ?? "";

    // Identify CBAC and mandatory marking properties by PropertyTypeRid
    const cbacReadableIdsByRid = new Map<string, ReadableId>();
    const mandatoryReadableIdsByRid = new Map<string, ReadableId>();

    for (
      const [propertyRid, propertyType] of Object.entries(
        objectType.objectType.propertyTypes,
      )
    ) {
      if (propertyType.type.type === "marking") {
        const markingData =
          (propertyType.type as { marking?: { markingType?: string } }).marking;
        const markingType = markingData?.markingType;
        const propertyApiName = propertyType.apiName
          ?? propertyType.displayMetadata?.displayName;
        if (propertyApiName) {
          const readableId = ReadableIdGenerator.getForObjectProperty(
            objectApiName,
            propertyApiName,
          );
          if (markingType === "CBAC") {
            cbacReadableIdsByRid.set(propertyRid, readableId);
          } else if (markingType === "MANDATORY") {
            mandatoryReadableIdsByRid.set(propertyRid, readableId);
          }
        }
      }
    }

    // For each datasource, extract marking constraints
    for (const ds of objectType.datasources) {
      const propertiesForDs = getPropertiesForDatasource(
        ds.datasource as unknown as { type: string; [key: string]: unknown },
      );

      // Find CBAC and mandatory props affected by this datasource
      const cbacPropsAffected = new Set<string>();
      for (const rid of cbacReadableIdsByRid.keys()) {
        if (propertiesForDs.has(rid)) {
          cbacPropsAffected.add(rid);
        }
      }

      const mandatoryPropsAffected = new Set<string>();
      for (const rid of mandatoryReadableIdsByRid.keys()) {
        if (propertiesForDs.has(rid)) {
          mandatoryPropsAffected.add(rid);
        }
      }

      if (cbacPropsAffected.size === 0 && mandatoryPropsAffected.size === 0) {
        continue;
      }

      const dataSecurity = ds.dataSecurity;
      if (!dataSecurity) continue;

      if (cbacPropsAffected.size > 0 && dataSecurity.classificationConstraint) {
        const markings = dataSecurity.classificationConstraint.markings ?? [];
        const markingId = markings[0];
        if (markingId) {
          const existing = cbacMarkingsAndAffectedProps.get(markingId)
            ?? new Set();
          for (const rid of cbacPropsAffected) {
            const readableId = cbacReadableIdsByRid.get(rid);
            if (readableId) existing.add(readableId);
          }
          cbacMarkingsAndAffectedProps.set(markingId, existing);
        }
      }

      if (mandatoryPropsAffected.size > 0 && dataSecurity.markingConstraint) {
        const markingIds = dataSecurity.markingConstraint.markingIds ?? [];
        const markingId = markingIds[0];
        if (markingId) {
          const existing = mandatoryMarkingsAndAffectedProps.get(markingId)
            ?? new Set();
          for (const rid of mandatoryPropsAffected) {
            const readableId = mandatoryReadableIdsByRid.get(rid);
            if (readableId) existing.add(readableId);
          }
          mandatoryMarkingsAndAffectedProps.set(markingId, existing);
        }
      }

      // Extract CBAC markings from additionalMandatory.markings in property security groups
      const dsDef = ds.datasource as unknown as {
        type: string;
        [key: string]: unknown;
      };
      const innerDef = dsDef[dsDef.type] as {
        propertySecurityGroups?: {
          groups?: Array<{
            properties?: string[];
            security?: {
              granular?: {
                viewPolicy?: { additionalMandatory?: { markings?: string[] } };
              };
            };
          }>;
        };
      } | undefined;
      const groups = innerDef?.propertySecurityGroups?.groups ?? [];
      for (const group of groups) {
        const additionalMarkings =
          group.security?.granular?.viewPolicy?.additionalMandatory?.markings
            ?? [];
        if (additionalMarkings.length === 0) continue;
        const groupPropertyRids = group.properties ?? [];
        for (const markingId of additionalMarkings) {
          const existing = additionalCbacMarkingsAndAffectedProps.get(markingId)
            ?? new Set();
          for (const propRid of groupPropertyRids) {
            // Look up the property apiName from the object type's propertyTypes
            const propType = objectType.objectType.propertyTypes[propRid];
            if (propType) {
              const propApiName = propType.apiName
                ?? propType.displayMetadata?.displayName;
              if (propApiName) {
                existing.add(
                  ReadableIdGenerator.getForObjectProperty(
                    objectApiName,
                    propApiName,
                  ),
                );
              }
            }
          }
          additionalCbacMarkingsAndAffectedProps.set(markingId, existing);
        }
      }
    }
  }

  // Build marking shapes
  const inputShapes = new Map<ReadableId, InputShape>();

  for (const [markingId, props] of cbacMarkingsAndAffectedProps) {
    const readableId = ReadableIdGenerator.getForMarking(markingId, "CBAC");
    const shape: MarkingsShape = {
      about: createLocalizedAbout(
        `Max Classification ${markingId}`,
        MAX_CLASS_DESC,
      ),
      operation: "USE",
      affectedShapes: Array.from(props).map(p =>
        ridGenerator.toBlockInternalId(p)
      ),
      supportedMarkingsType: "CBAC",
      stableId: markingId,
    };
    inputShapes.set(readableId, { type: "markings", markings: shape });
  }

  for (const [markingId, props] of additionalCbacMarkingsAndAffectedProps) {
    const readableId = ReadableIdGenerator.getForMarking(markingId, "CBAC");
    const shape: MarkingsShape = {
      about: createLocalizedAbout(
        `Marking ${markingId}`,
        "Marking",
      ),
      operation: "USE",
      affectedShapes: Array.from(props).map(p =>
        ridGenerator.toBlockInternalId(p)
      ),
      supportedMarkingsType: "CBAC",
      stableId: markingId,
    };
    inputShapes.set(readableId, { type: "markings", markings: shape });
  }

  for (const [markingId, props] of mandatoryMarkingsAndAffectedProps) {
    const readableId = ReadableIdGenerator.getForMarking(
      markingId,
      "MANDATORY",
    );
    const shape: MarkingsShape = {
      about: createLocalizedAbout(
        `Max Marking ${markingId}`,
        "Max Marking",
      ),
      operation: "USE",
      affectedShapes: Array.from(props).map(p =>
        ridGenerator.toBlockInternalId(p)
      ),
      supportedMarkingsType: "MANDATORY",
      stableId: markingId,
    };
    inputShapes.set(readableId, { type: "markings", markings: shape });
  }

  return {
    inputShapes,
    outputShapes: new Map(),
    inputShapeMetadata: new Map(),
    inputMappings: [],
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
  for (const mapping of source.inputMappings) {
    target.inputMappings.push(mapping);
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
