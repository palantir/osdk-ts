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
import { convertInterface } from "./convertInterface.js";
import { convertLink } from "./convertLink.js";
import { convertObject } from "./convertObject.js";
import { convertSpt } from "./convertSpt.js";

export function convertOntologyDefinitionToWireBlockData(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGenerator,
): OntologyBlockDataV2 {
  return ({
    objectTypes: Object.fromEntries(
      Object.entries(ontology[OntologyEntityTypeEnum.OBJECT_TYPE]).map<
        [string, ObjectTypeBlockDataV2]
      >(([apiName, objectType]) => {
        return [apiName, convertObject(objectType, ridGenerator)];
      }),
    ),
    sharedPropertyTypes: Object.fromEntries(
      Object.entries(
        ontology[OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE],
      )
        .map<[string, SharedPropertyTypeBlockDataV2]>((
          [apiName, spt],
        ) => [apiName, { sharedPropertyType: convertSpt(spt, ridGenerator) }]),
    ),
    interfaceTypes: Object.fromEntries(
      Object.entries(
        ontology[OntologyEntityTypeEnum.INTERFACE_TYPE],
      )
        .map<[string, InterfaceTypeBlockDataV2]>(
          ([apiName, interfaceType]) => {
            return [apiName, {
              interfaceType: convertInterface(interfaceType, ridGenerator),
            }];
          },
        ),
    ),
    linkTypes: Object.fromEntries(
      Object.entries(ontology[OntologyEntityTypeEnum.LINK_TYPE]).map<
        [string, LinkTypeBlockDataV2]
      >(([id, link]) => {
        return [
          cleanAndValidateLinkTypeId(id),
          convertLink(link, ridGenerator),
        ];
      }),
    ),
    actionTypes: Object.fromEntries(
      Object.entries(ontology[OntologyEntityTypeEnum.ACTION_TYPE]).map<
        [string, ActionTypeBlockDataV2]
      >(([apiName, action]) => {
        return [apiName, convertAction(action, ridGenerator)];
      }),
    ),
    // TODO: Add proper blockOutputCompassLocations mapping
    blockOutputCompassLocations: {},
    // TODO: Add proper knownIdentifiers based on RIDs generated throughout conversion
    knownIdentifiers: {
      actionParameterIds: {},
      actionParameters: {},
      actionTypes: {},
      datasourceColumns: {},
      datasources: {},
      filesDatasources: {},
      functions: {},
      geotimeSeriesSyncs: {},
      groupIds: {},
      interfaceLinkTypes: {},
      interfaceTypes: {},
      linkTypeIds: {},
      linkTypes: {},
      markings: {},
      objectTypeIds: {},
      objectTypes: {},
      propertyTypeIds: {},
      propertyTypes: {},
      sharedPropertyTypes: {},
      timeSeriesSyncs: {},
      valueTypes: {},
      webhooks: {},
      workshopModules: {},
    },
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
