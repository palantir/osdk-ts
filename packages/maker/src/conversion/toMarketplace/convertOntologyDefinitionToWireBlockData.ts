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
  ActionTypePermissionInformation,
  InterfaceTypeBlockDataV2,
  LinkTypeBlockDataV2,
  ObjectTypeBlockDataV2,
  OntologyBlockDataV2,
  SharedPropertyTypeBlockDataV2,
} from "@osdk/client.unstable";
import { type OntologyDefinition } from "../../api/common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../../api/common/OntologyEntityTypeEnum.js";
import {
  cleanAndValidateLinkTypeId,
  convertAction,
} from "../../api/defineOntology.js";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";
import { convertInterface } from "./convertInterface.js";
import { convertLink } from "./convertLink.js";
import { convertObject } from "./convertObject.js";
import { convertSpt } from "./convertSpt.js";

export function convertOntologyDefinitionToWireBlockData(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGenerator,
): OntologyBlockDataV2 {
  // Convert all entity types first to populate ridGenerator's BiMaps
  const objectTypes = Object.fromEntries(
    Object.entries(ontology[OntologyEntityTypeEnum.OBJECT_TYPE]).map<
      [string, ObjectTypeBlockDataV2]
    >(([apiName, objectType]) => {
      return [
        ridGenerator.generateRidForObjectType(apiName),
        convertObject(objectType, ridGenerator),
      ];
    }),
  );

  const sharedPropertyTypes = Object.fromEntries(
    Object.entries(
      ontology[OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE],
    )
      .map<[string, SharedPropertyTypeBlockDataV2]>((
        [apiName, spt],
      ) => [ridGenerator.generateSptRid(apiName), {
        sharedPropertyType: convertSpt(spt, ridGenerator),
      }]),
  );

  const interfaceTypes = Object.fromEntries(
    Object.entries(
      ontology[OntologyEntityTypeEnum.INTERFACE_TYPE],
    )
      .map<[string, InterfaceTypeBlockDataV2]>(
        ([apiName, interfaceType]) => {
          return [ridGenerator.generateRidForInterface(apiName), {
            interfaceType: convertInterface(interfaceType, ridGenerator),
          }];
        },
      ),
  );

  const linkTypes = Object.fromEntries(
    Object.entries(ontology[OntologyEntityTypeEnum.LINK_TYPE]).map<
      [string, LinkTypeBlockDataV2]
    >(([id, link]) => {
      return [
        ridGenerator.generateRidForLinkType(id),
        convertLink(link, ridGenerator),
      ];
    }),
  );

  const actionTypes = Object.fromEntries(
    Object.entries(ontology[OntologyEntityTypeEnum.ACTION_TYPE]).map<
      [string, ActionTypeBlockDataV2]
    >(([apiName, action]) => {
      return [
        ridGenerator.generateRidForActionType(apiName),
        convertAction(action, ridGenerator),
      ];
    }),
  );

  // Build knownIdentifiers from ridGenerator's BiMaps
  const knownIdentifiers = buildKnownIdentifiers(
    ontology,
    ridGenerator,
  );

  return ({
    objectTypes,
    sharedPropertyTypes,
    interfaceTypes,
    linkTypes,
    actionTypes,
    // TODO: Add proper blockOutputCompassLocations mapping
    blockOutputCompassLocations: {},
    knownIdentifiers,
    ruleSets: {},
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

function buildKnownIdentifiers(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGenerator,
) {
  // Interface types: InterfaceTypeRid -> BlockInternalId
  const interfaceMappings = Object.fromEntries(
    Array.from(ridGenerator.getInterfaceRids().inverse().entries()).map((
      [rid, readableId],
    ) => [rid, ridGenerator.toBlockInternalId(readableId)]),
  );

  // Shared property types: SharedPropertyTypeRid -> BlockInternalId
  const sharedPropertyMappings = Object.fromEntries(
    Array.from(ridGenerator.getSharedPropertyTypeRids().inverse().entries())
      .map(([rid, readableId]) => [
        rid,
        ridGenerator.toBlockInternalId(readableId),
      ]),
  );

  // Interface link types: InterfaceLinkTypeRid -> BlockInternalId
  const interfaceLinkMappings = Object.fromEntries(
    Array.from(ridGenerator.getInterfaceLinkTypeRids().inverse().entries())
      .map(([rid, readableId]) => [
        rid,
        ridGenerator.toBlockInternalId(readableId),
      ]),
  );

  // Datasources: BlockInternalId -> DatasourceLocator
  const backingDatasourceMappings = Object.fromEntries(
    Array.from(ridGenerator.getDatasourceLocators().entries()).map((
      [readableId, locator],
    ) => [ridGenerator.toBlockInternalId(readableId), locator]),
  );

  // Files datasources: BlockInternalId -> FilesDatasourceLocator
  const filesDatasourceMappings = Object.fromEntries(
    Array.from(ridGenerator.getFilesDatasourceLocators().entries()).map((
      [readableId, locator],
    ) => [ridGenerator.toBlockInternalId(readableId), locator]),
  );

  // Object type RIDs: ObjectTypeRid -> BlockInternalId
  const objectTypeRids = Object.fromEntries(
    Array.from(ridGenerator.getObjectTypeRids().inverse().entries()).map((
      [rid, readableId],
    ) => [rid, ridGenerator.toBlockInternalId(readableId)]),
  );

  // Object type IDs: ObjectTypeId -> BlockInternalId
  const objectTypeIds = Object.fromEntries(
    Object.entries(ontology[OntologyEntityTypeEnum.OBJECT_TYPE]).map(([objectTypeApiName, objectType]) => [
      ridGenerator.getObjectTypeIds().get(ReadableIdGenerator.getForObjectType(objectTypeApiName)),
      ridGenerator.toBlockInternalId(
        ReadableIdGenerator.getForObjectType(objectTypeApiName),
      ),
    ]),
  );

  // Property type IDs: ObjectTypeId -> (PropertyTypeId -> BlockInternalId)
  const propertyTypeIds: Record<string, Record<string, string>> = {};
  Object.entries(ontology[OntologyEntityTypeEnum.OBJECT_TYPE]).forEach((
    [objectTypeApiName, objectType],
  ) => {
    const propMap: Record<string, string> = {};
    (objectType.properties ?? []).forEach((property) => {
      propMap[property.apiName] = ridGenerator.toBlockInternalId(
        ReadableIdGenerator.getForObjectProperty(
          objectTypeApiName,
          property.apiName,
        ),
      );
    });
    const objTypeId = ridGenerator.getObjectTypeIds().get(ReadableIdGenerator.getForObjectType(objectTypeApiName))!;
    propertyTypeIds[objTypeId] = propMap;
  });

  // Property type RIDs: PropertyTypeRid -> BlockInternalId
  const propertyRids = Object.fromEntries(
    Array.from(ridGenerator.getPropertyTypeRids().inverse().entries()).map((
      [rid, readableId],
    ) => [rid, ridGenerator.toBlockInternalId(readableId)]),
  );

  // Datasource columns: BlockInternalId -> ResolvedDatasourceColumnShape
  const datasourceColumns = Object.fromEntries(
    Array.from(ridGenerator.getColumnShapes().entries()).map((
      [readableId, shape],
    ) => [ridGenerator.toBlockInternalId(readableId), shape]),
  );

  // Time series syncs: TimeSeriesSyncRid -> BlockInternalId
  const timeSeriesSyncs = Object.fromEntries(
    Array.from(ridGenerator.getTimeSeriesSyncs().inverse().entries()).map((
      [rid, readableId],
    ) => [rid, ridGenerator.toBlockInternalId(readableId)]),
  );

  // Geotime series syncs: GeotimeSeriesIntegrationRid -> BlockInternalId
  const geotimeSeriesSyncs = Object.fromEntries(
    Array.from(
      ridGenerator.getGeotimeSeriesIntegrationRids().inverse().entries(),
    ).map(([rid, readableId]) => [
      rid,
      ridGenerator.toBlockInternalId(readableId),
    ]),
  );

  // Link type IDs: LinkTypeId -> BlockInternalId
  const linkTypeIds = Object.fromEntries(
    Object.keys(ontology[OntologyEntityTypeEnum.LINK_TYPE]).map((
      linkTypeId,
    ) => [
      cleanAndValidateLinkTypeId(linkTypeId),
      ridGenerator.toBlockInternalId(
        ReadableIdGenerator.getForLinkType(
          cleanAndValidateLinkTypeId(linkTypeId),
        ),
      ),
    ]),
  );

  // Link type RIDs: LinkTypeRid -> BlockInternalId
  const linkTypeRids = Object.fromEntries(
    Array.from(ridGenerator.getLinkTypeRids().inverse().entries()).map((
      [rid, readableId],
    ) => [rid, ridGenerator.toBlockInternalId(readableId)]),
  );

  // Action types: ActionTypeRid -> BlockInternalId
  const actionTypeMappings = Object.fromEntries(
    Array.from(ridGenerator.getActionTypeRids().inverse().entries()).map((
      [rid, readableId],
    ) => [rid, ridGenerator.toBlockInternalId(readableId)]),
  );

  // Action parameters: ParameterRid -> BlockInternalId
  const actionParameterMappings: Record<string, string> = {};
  ridGenerator.getParameterRidAndIds().forEach((biMap, _actionApiName) => {
    Array.from(biMap.entries()).forEach(([readableId, ridAndId]) => {
      actionParameterMappings[ridAndId.rid] = ridGenerator.toBlockInternalId(
        readableId,
      );
    });
  });

  // Action parameter IDs: ActionTypeRid -> (ParameterId -> BlockInternalId)
  const actionParameterIdMappings: Record<string, Record<string, string>> = {};
  Array.from(ridGenerator.getActionTypeRids().inverse().entries()).forEach((
    [actionTypeRid, actionReadableId],
  ) => {
    // Extract action type API name from readable ID
    const actionTypeApiName = actionReadableId.replace(
      /^action-type-/,
      "",
    );
    const paramBiMap = ridGenerator.getParameterRidAndIds().get(
      actionTypeApiName,
    );
    if (paramBiMap) {
      const paramMap: Record<string, string> = {};
      Array.from(paramBiMap.entries()).forEach((
        [paramReadableId, ridAndId],
      ) => {
        paramMap[ridAndId.id] = ridGenerator.toBlockInternalId(
          paramReadableId,
        );
      });
      actionParameterIdMappings[actionTypeRid] = paramMap;
    }
  });

  // Group IDs: GroupId -> BlockInternalId
  const groupMappings = Object.fromEntries(
    Array.from(ridGenerator.getGroupIds().inverse().entries()).map((
      [groupId, readableId],
    ) => [groupId, ridGenerator.toBlockInternalId(readableId)]),
  );

  // Interface property types: InterfacePropertyTypeRid -> BlockInternalId
  const interfacePropertyMappings = Object.fromEntries(
    Array.from(ridGenerator.getInterfacePropertyTypeRids().inverse().entries())
      .map(([rid, readableId]) => [
        rid,
        ridGenerator.toBlockInternalId(readableId),
      ]),
  );

  // Value types: ValueTypeRid -> (ValueTypeVersionId -> BlockInternalId)
  const valueTypeMappings: Record<string, Record<string, string>> = {};
  ridGenerator.getConsumedValueTypeReferences().asMap().forEach((
    valueTypeRef,
    readableId,
  ) => {
    if (!valueTypeMappings[valueTypeRef.rid]) {
      valueTypeMappings[valueTypeRef.rid] = {};
    }
    valueTypeMappings[valueTypeRef.rid][valueTypeRef.versionId] = ridGenerator
      .toBlockInternalId(readableId);
  });

  return {
    actionParameterIds: actionParameterIdMappings,
    actionParameters: actionParameterMappings,
    actionTypes: actionTypeMappings,
    datasourceColumns: datasourceColumns,
    datasources: backingDatasourceMappings,
    filesDatasources: filesDatasourceMappings,
    functions: {},
    geotimeSeriesSyncs: geotimeSeriesSyncs,
    groupIds: groupMappings,
    interfaceLinkTypes: interfaceLinkMappings,
    interfacePropertyTypes: interfacePropertyMappings,
    interfaceTypes: interfaceMappings,
    linkTypeIds: linkTypeIds,
    linkTypes: linkTypeRids,
    markings: {},
    objectTypeIds: objectTypeIds,
    objectTypes: objectTypeRids,
    propertyTypeIds: propertyTypeIds,
    propertyTypes: propertyRids,
    sharedPropertyTypes: sharedPropertyMappings,
    timeSeriesSyncs: timeSeriesSyncs,
    valueTypes: valueTypeMappings,
    webhooks: {},
    workshopModules: {},
  };
}
