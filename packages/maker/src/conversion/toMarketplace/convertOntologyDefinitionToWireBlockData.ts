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
  ActionTypePermissionInformation,
  ActionTypeRestrictionStatus,
  InterfaceTypePermissionInformation,
  InterfaceTypeRestrictionStatus,
  LinkTypePermissionInformation,
  LinkTypeRestrictionStatus,
  ObjectTypePermissionInformation,
  ObjectTypeRestrictionStatus,
  OntologyIrActionTypeBlockDataV2,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrLinkTypeBlockDataV2,
  OntologyIrObjectTypeBlockDataV2,
  OntologyIrOntologyBlockDataV2,
  OntologyIrSharedPropertyTypeBlockDataV2,
  SharedPropertyTypePermissionInformation,
  SharedPropertyTypeRestrictionStatus,
} from "@osdk/client.unstable";
import type { EntityPermission } from "../../api/common/EntityPermission.js";
import { type OntologyDefinition } from "../../api/common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../../api/common/OntologyEntityTypeEnum.js";
import {
  cleanAndValidateLinkTypeId,
  convertAction,
} from "../../api/defineOntology.js";
import { convertInterface } from "./convertInterface.js";
import { convertLink } from "./convertLink.js";
import { convertObject } from "./convertObject.js";
import { convertSpt } from "./convertSpt.js";

function toActionTypeRestrictionStatus(
  p: EntityPermission,
): ActionTypeRestrictionStatus {
  return {
    hasRolesApplied: true,
    publicProject: p === "publicProject",
    ontologyPackageRid: typeof p === "object" ? p.ontologyPackageRid : null,
  };
}

function toObjectTypeRestrictionStatus(
  p: EntityPermission,
): ObjectTypeRestrictionStatus {
  return {
    restrictedByDatasources: false,
    editRestrictedByDatasources: false,
    publicProject: p === "publicProject",
    ontologyPackageRid: typeof p === "object" ? p.ontologyPackageRid : null,
  };
}

function toLinkTypeRestrictionStatus(
  p: EntityPermission,
): LinkTypeRestrictionStatus {
  return {
    restrictedByDatasources: false,
    editRestrictedByDatasources: false,
    publicProject: p === "publicProject",
    ontologyPackageRid: typeof p === "object" ? p.ontologyPackageRid : null,
  };
}

function toInterfaceTypeRestrictionStatus(
  p: EntityPermission,
): InterfaceTypeRestrictionStatus {
  return {
    publicProject: p === "publicProject",
    ontologyPackageRid: typeof p === "object" ? p.ontologyPackageRid : null,
  };
}

function toSharedPropertyTypeRestrictionStatus(
  p: EntityPermission,
): SharedPropertyTypeRestrictionStatus {
  return {
    publicProject: p === "publicProject",
    ontologyPackageRid: typeof p === "object" ? p.ontologyPackageRid : null,
  };
}

export function convertOntologyDefinitionToWireBlockData(
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
        return [cleanAndValidateLinkTypeId(id), convertLink(link)];
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
          .filter(([_, action]) => action.validation || action.permission)
          .map<
            [string, ActionTypePermissionInformation]
          >(([apiName, action]) => {
            return [apiName, {
              restrictionStatus: toActionTypeRestrictionStatus(
                action.permission ?? "roles",
              ),
            }];
          }),
      ),
      objectTypes: Object.fromEntries(
        Object.entries(ontology[OntologyEntityTypeEnum.OBJECT_TYPE])
          .filter(([_, objectType]) => objectType.permission != null)
          .map<
            [string, ObjectTypePermissionInformation]
          >(([apiName, objectType]) => {
            return [apiName, {
              restrictionStatus: toObjectTypeRestrictionStatus(
                objectType.permission!,
              ),
            }];
          }),
      ),
      linkTypes: Object.fromEntries(
        Object.entries(ontology[OntologyEntityTypeEnum.LINK_TYPE])
          .filter(([_, link]) => link.permission != null)
          .map<
            [string, LinkTypePermissionInformation]
          >(([id, link]) => {
            return [cleanAndValidateLinkTypeId(id), {
              restrictionStatus: toLinkTypeRestrictionStatus(
                link.permission!,
              ),
            }];
          }),
      ),
      interfaceTypes: Object.fromEntries(
        Object.entries(ontology[OntologyEntityTypeEnum.INTERFACE_TYPE])
          .filter(([_, iface]) => iface.permission != null)
          .map<
            [string, InterfaceTypePermissionInformation]
          >(([apiName, iface]) => {
            return [apiName, {
              restrictionStatus: toInterfaceTypeRestrictionStatus(
                iface.permission!,
              ),
            }];
          }),
      ),
      sharedPropertyTypes: Object.fromEntries(
        Object.entries(ontology[OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE])
          .filter(([_, spt]) => spt.permission != null)
          .map<
            [string, SharedPropertyTypePermissionInformation]
          >(([apiName, spt]) => {
            return [apiName, {
              restrictionStatus: toSharedPropertyTypeRestrictionStatus(
                spt.permission!,
              ),
            }];
          }),
      ),
    },
  });
}
