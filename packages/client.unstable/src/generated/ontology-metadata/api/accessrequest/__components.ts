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
  AccessRequestRid as _api_AccessRequestRid,
  AccessRequestVersion as _api_AccessRequestVersion,
  AccessSubRequestRid as _api_AccessSubRequestRid,
  AccessSubRequestVersion as _api_AccessSubRequestVersion,
  ActionTypeRid as _api_ActionTypeRid,
  GroupId as _api_GroupId,
  InterfaceTypeRid as _api_InterfaceTypeRid,
  LinkTypeRid as _api_LinkTypeRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  PrincipalId as _api_PrincipalId,
  RoleId as _api_RoleId,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  TypeGroupRid as _api_TypeGroupRid,
} from "../__components.js";

/**
 * Metadata pertaining to a single access request.
 */
export interface AccessRequest {
  entityRid: AccessRequestEntityRid;
  rid: _api_AccessRequestRid;
  subRequests: Array<AccessSubRequest>;
  version: _api_AccessRequestVersion;
}
export interface AccessRequestEntityRid_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: _api_ObjectTypeRid;
}

export interface AccessRequestEntityRid_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: _api_LinkTypeRid;
}

export interface AccessRequestEntityRid_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: _api_ActionTypeRid;
}

export interface AccessRequestEntityRid_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: _api_SharedPropertyTypeRid;
}

export interface AccessRequestEntityRid_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: _api_InterfaceTypeRid;
}

export interface AccessRequestEntityRid_typeGroupRid {
  type: "typeGroupRid";
  typeGroupRid: _api_TypeGroupRid;
}
/**
 * the entity rids we are requesting access for
 */
export type AccessRequestEntityRid =
  | AccessRequestEntityRid_objectTypeRid
  | AccessRequestEntityRid_linkTypeRid
  | AccessRequestEntityRid_actionTypeRid
  | AccessRequestEntityRid_sharedPropertyTypeRid
  | AccessRequestEntityRid_interfaceTypeRid
  | AccessRequestEntityRid_typeGroupRid;

/**
 * An instance of an access subrequest.
 */
export interface AccessSubRequest {
  details: AccessSubRequestDetails;
  metadata: AccessSubRequestMetadata;
  rid: _api_AccessSubRequestRid;
  version: _api_AccessSubRequestVersion;
}
export interface AccessSubRequestDetails_internalRealmGroupAddition {
  type: "internalRealmGroupAddition";
  internalRealmGroupAddition: InternalRealmGroupAdditionSubRequest;
}

export interface AccessSubRequestDetails_ontologyEntityRoleGrant {
  type: "ontologyEntityRoleGrant";
  ontologyEntityRoleGrant: OntologyEntityRoleGrantSubRequest;
}
/**
 * A subrequest that provides some access to a resource.
 */
export type AccessSubRequestDetails =
  | AccessSubRequestDetails_internalRealmGroupAddition
  | AccessSubRequestDetails_ontologyEntityRoleGrant;

/**
 * Additional data for a subrequest
 */
export interface AccessSubRequestMetadata {
  checkpointsInteractionRid?: string | null | undefined;
}
/**
 * Modifications necessary to create or modify a subrequest.
 */
export interface AccessSubRequestModification {
  accessSubRequestDetails: AccessSubRequestDetails;
  accessSubRequestMetadata: AccessSubRequestMetadata;
}
export interface AccessSubRequestUpdate_editSubRequest {
  type: "editSubRequest";
  editSubRequest: EditAccessSubRequest;
}

export interface AccessSubRequestUpdate_addSubRequest {
  type: "addSubRequest";
  addSubRequest: AddAccessSubRequest;
}

export interface AccessSubRequestUpdate_removeSubRequest {
  type: "removeSubRequest";
  removeSubRequest: RemoveAccessSubRequest;
}
/**
 * Updates that can be performed on a request's subrequest.
 */
export type AccessSubRequestUpdate =
  | AccessSubRequestUpdate_editSubRequest
  | AccessSubRequestUpdate_addSubRequest
  | AccessSubRequestUpdate_removeSubRequest;

/**
 * An update to add a subrequest to an access request.
 */
export interface AddAccessSubRequest {
  subRequestModification: AccessSubRequestModification;
}
/**
 * The ontology entities to get access requests for.
 */
export interface BulkGetAccessRequestForOntologyEntityRequest {
  actionTypeRids: Array<_api_ActionTypeRid>;
  interfaceTypeRids: Array<_api_InterfaceTypeRid>;
  linkTypeRids: Array<_api_LinkTypeRid>;
  objectTypeRids: Array<_api_ObjectTypeRid>;
  sharedPropertyTypeRids: Array<_api_SharedPropertyTypeRid>;
  typeGroupRids: Array<_api_TypeGroupRid>;
}
/**
 * Returns the access request rids requesting access to ontology entities.
 */
export interface BulkGetAccessRequestsForOntologyEntityResponse {
  actionTypeRids: Record<_api_ActionTypeRid, Array<_api_AccessRequestRid>>;
  interfaceTypeRids: Record<
    _api_InterfaceTypeRid,
    Array<_api_AccessRequestRid>
  >;
  linkTypeRids: Record<_api_LinkTypeRid, Array<_api_AccessRequestRid>>;
  objectTypeRids: Record<_api_ObjectTypeRid, Array<_api_AccessRequestRid>>;
  sharedPropertyTypeRids: Record<
    _api_SharedPropertyTypeRid,
    Array<_api_AccessRequestRid>
  >;
  typeGroupRids: Record<_api_TypeGroupRid, Array<_api_AccessRequestRid>>;
}
/**
 * A request for access to an ontology entity. AccessSubRequests can be used in conjunction to
 * grant the desired permissions on an ontology entity. The title and description properties
 * are not stored in the access request but rather, just passed through to the approvals service.
 */
export interface CreateAccessRequestRequest {
  description?: string | null | undefined;
  entityRid: AccessRequestEntityRid;
  subRequests: Array<AccessSubRequestModification>;
  title: string;
}
/**
 * Returns the access request rid created from a CreateAccessRequest request.
 */
export interface CreateAccessRequestResponse {
  rid: _api_AccessRequestRid;
}
/**
 * An update to an access subrequest used in an existing request.
 */
export interface EditAccessSubRequest {
  rid: _api_AccessSubRequestRid;
  subRequestModification: AccessSubRequestModification;
}
/**
 * A request for a principal to be added to a multipass group.
 *
 * The principal's access to the project will be dictated by the roles granted on
 * the MP group which are subject to change from the roles displayed at time
 * of request.
 */
export interface InternalRealmGroupAdditionSubRequest {
  expiresBy?: string | null | undefined;
  groupId: _api_GroupId;
  principal: _api_PrincipalId;
}
/**
 * The access request rids to get details for
 */
export interface LoadAccessRequestDetailsRequest {
  accessRequestRids: Array<_api_AccessRequestRid>;
}
/**
 * Returns the access request details for the provided access request RIDs.
 */
export interface LoadAccessRequestDetailsResponse {
  accessRequests: Array<AccessRequest>;
}
/**
 * A request for a principal to be granted a set of roles on a ontology entity.
 */
export interface OntologyEntityRoleGrantSubRequest {
  expiresBy?: string | null | undefined;
  principal: _api_PrincipalId;
  roles: Array<_api_RoleId>;
}
/**
 * An update to remove the subrequest with the specified RID from an access request.
 */
export interface RemoveAccessSubRequest {
  rid: _api_AccessSubRequestRid;
}
/**
 * An update to an access request.
 */
export interface UpdateAccessRequestRequest {
  subRequestUpdates: Array<AccessSubRequestUpdate>;
}
/**
 * Returns the updated access request.
 */
export interface UpdateAccessRequestResponse {
  accessRequest: AccessRequest;
}
