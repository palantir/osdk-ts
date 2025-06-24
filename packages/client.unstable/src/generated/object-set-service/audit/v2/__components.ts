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
  AggregateRequest as _api_AggregateRequest,
  AggregateResponse as _api_AggregateResponse,
  Backend as _api_Backend,
  CheckBulkOperationPermissionsRequest
    as _api_CheckBulkOperationPermissionsRequest,
  CheckBulkOperationPermissionsResponse
    as _api_CheckBulkOperationPermissionsResponse,
  CreateObjectSetRequest as _api_CreateObjectSetRequest,
  CreateObjectSetResponse as _api_CreateObjectSetResponse,
  CreateTemporaryObjectSetRequest as _api_CreateTemporaryObjectSetRequest,
  CreateTemporaryObjectSetResponse as _api_CreateTemporaryObjectSetResponse,
  CreateVersionedObjectSetRequest as _api_CreateVersionedObjectSetRequest,
  CreateVersionedObjectSetResponse as _api_CreateVersionedObjectSetResponse,
  CreateVersionedObjectSetWithParentRequest
    as _api_CreateVersionedObjectSetWithParentRequest,
  DatasourceRid as _api_DatasourceRid,
  EntityPrimaryKey as _api_EntityPrimaryKey,
  EntityTypeRid as _api_EntityTypeRid,
  EntityVersion as _api_EntityVersion,
  FoundryObjectReference as _api_FoundryObjectReference,
  GetAllObjectsInitialPageRequest as _api_GetAllObjectsInitialPageRequest,
  GetAllObjectsNextPageRequest as _api_GetAllObjectsNextPageRequest,
  GetBulkLatestVersionRequest as _api_GetBulkLatestVersionRequest,
  GetBulkLatestVersionResponse as _api_GetBulkLatestVersionResponse,
  GetBulkLinksPageRequest as _api_GetBulkLinksPageRequest,
  GetBulkObjectSetRequest as _api_GetBulkObjectSetRequest,
  GetBulkObjectSetResponse as _api_GetBulkObjectSetResponse,
  GetLinksRequest as _api_GetLinksRequest,
  GetObjectLocatorsInitialScrollRequest
    as _api_GetObjectLocatorsInitialScrollRequest,
  GetObjectLocatorsNextScrollRequest as _api_GetObjectLocatorsNextScrollRequest,
  GetObjectLocatorsScrollResponse as _api_GetObjectLocatorsScrollResponse,
  GetObjectSetResponse as _api_GetObjectSetResponse,
  GetObjectsInitialScrollRequest as _api_GetObjectsInitialScrollRequest,
  GetObjectsNextScrollRequest as _api_GetObjectsNextScrollRequest,
  GetObjectsPageRequest as _api_GetObjectsPageRequest,
  GetObjectsPageResponse as _api_GetObjectsPageResponse,
  GetObjectsScrollResponse as _api_GetObjectsScrollResponse,
  GetObjectTypesRequest as _api_GetObjectTypesRequest,
  GetObjectTypesResponse as _api_GetObjectTypesResponse,
  GetReferencedEntitiesRequest as _api_GetReferencedEntitiesRequest,
  GetReferencedEntitiesResponse as _api_GetReferencedEntitiesResponse,
  GetTopObjectsInitialPageRequest as _api_GetTopObjectsInitialPageRequest,
  GetTopObjectsNextPageRequest as _api_GetTopObjectsNextPageRequest,
  LatestVersionResponse as _api_LatestVersionResponse,
  LinkSide as _api_LinkSide,
  LoadObjectsRequest as _api_LoadObjectsRequest,
  MaterializeObjectSetRequest as _api_MaterializeObjectSetRequest,
  MaterializeObjectSetResponse as _api_MaterializeObjectSetResponse,
  ObjectIdentifier as _api_ObjectIdentifier,
  ObjectPrimaryKeyV2 as _api_ObjectPrimaryKeyV2,
  ObjectSetRid as _api_ObjectSetRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  ObjectVersion as _api_ObjectVersion,
  OntologyVersion as _api_OntologyVersion,
  PropertyTypeRid as _api_PropertyTypeRid,
  PropertyValue as _api_PropertyValue,
  SuggestRequest as _api_SuggestRequest,
  SuggestResponse as _api_SuggestResponse,
  UpdateLatestVersionRequest as _api_UpdateLatestVersionRequest,
  VersionedObjectSetRid as _api_VersionedObjectSetRid,
} from "../../api/__components.js";
import type { LoadPatchableEntitiesRequest as _api_internal_LoadPatchableEntitiesRequest } from "../../api/internal/__components.js";
export interface AuditDirectedFoundryLink {
  link: AuditFoundryLink;
  linkSide: _api_LinkSide;
}
export interface AuditFoundryLink {
  linkTypeRid: _api_EntityTypeRid;
  objectSideA: _api_FoundryObjectReference;
  objectSideB: _api_FoundryObjectReference;
  primaryKey: _api_EntityPrimaryKey;
  version: _api_EntityVersion;
}
/**
 * Property values other than primary key values are not included in the audit version of a FoundryObject to
 * avoid dropping audit logs due to them being too large.
 */
export interface AuditFoundryObject {
  additionalObjectProperties?:
    | Record<_api_PropertyTypeRid, _api_PropertyValue>
    | null
    | undefined;
  primaryKey: _api_ObjectPrimaryKeyV2;
}
/**
 * A list of {@link AuditFoundryObjectVersionList}s together with their associated object type.
 */
export interface AuditFoundryObjectList {
  objectTypeRid: _api_ObjectTypeRid;
  objectVersions: Array<AuditFoundryObjectVersionList>;
}
/**
 * A list of {@link AuditFoundryObject}s together with their associated object type.
 */
export interface AuditFoundryObjectVersionList {
  objects: Array<AuditFoundryObject>;
  version: _api_ObjectVersion;
}
export interface AuditLoadedObjectLinksResultV2 {
  links: Array<AuditDirectedFoundryLink>;
  objectIdentifier: _api_ObjectIdentifier;
}
/**
 * Property values other than primary key values are not included in the audit version of a
 * PatchableFoundryEntity to avoid dropping audit logs due to them being too large.
 */
export interface AuditPatchableFoundryEntity {
  datasourceRids: Array<_api_DatasourceRid>;
  entityTypeRid: _api_EntityTypeRid;
  isAlive: boolean;
  primaryKey: _api_EntityPrimaryKey;
  version: _api_EntityVersion;
}
export interface InternalObjectSetLoadPatchableEntitiesRequestParams {
  request: _api_internal_LoadPatchableEntitiesRequest;
}
export interface InternalObjectSetLoadPatchableEntitiesResultParams {
  ontologyVersions: Record<_api_EntityTypeRid, _api_OntologyVersion>;
  results: Array<AuditPatchableFoundryEntity>;
  totalResults: number;
}
export interface ObjectSetAggregationServiceAggregateRequestParams {
  backend?: _api_Backend | null | undefined;
  request: _api_AggregateRequest;
}
export interface ObjectSetAggregationServiceAggregateResultParams {
  response: _api_AggregateResponse;
}
export interface ObjectSetScrollServiceGetObjectLocatorsInitialScrollRequestParams {
  request: _api_GetObjectLocatorsInitialScrollRequest;
}
export interface ObjectSetScrollServiceGetObjectLocatorsInitialScrollResultParams {
  numObjectsReturned?: number | null | undefined;
  response?: _api_GetObjectLocatorsScrollResponse | null | undefined;
}
export interface ObjectSetScrollServiceGetObjectLocatorsNextScrollRequestParams {
  request: _api_GetObjectLocatorsNextScrollRequest;
}
export interface ObjectSetScrollServiceGetObjectLocatorsNextScrollResultParams {
  numObjectsReturned?: number | null | undefined;
  response?: _api_GetObjectLocatorsScrollResponse | null | undefined;
}
export interface ObjectSetScrollServiceGetObjectsInitialScrollRequestParams {
  request: _api_GetObjectsInitialScrollRequest;
}
export interface ObjectSetScrollServiceGetObjectsInitialScrollResultParams {
  numObjectsReturned?: number | null | undefined;
  response?: _api_GetObjectsScrollResponse | null | undefined;
}
export interface ObjectSetScrollServiceGetObjectsNextScrollRequestParams {
  request: _api_GetObjectsNextScrollRequest;
}
export interface ObjectSetScrollServiceGetObjectsNextScrollResultParams {
  numObjectsReturned?: number | null | undefined;
  response?: _api_GetObjectsScrollResponse | null | undefined;
}
export type ObjectSetServiceAuditEvent =
  | "OBJECT_SET_SERVICE_CREATE_OBJECT_SET"
  | "OBJECT_SET_SERVICE_CREATE_TEMPORARY_OBJECT_SET"
  | "OBJECT_SET_SERVICE_DELETE_OBJECT_SET"
  | "OBJECT_SET_SERVICE_GET_OBJECTS_PAGE"
  | "OBJECT_SET_SERVICE_GET_OBJECT_SET"
  | "OBJECT_SET_SERVICE_GET_BULK_OBJECT_SET"
  | "OBJECT_SET_SERVICE_MATERIALIZE_OBJECT_SET"
  | "OBJECT_SET_SERVICE_GET_OBJECT_TYPES"
  | "OBJECT_SET_SERVICE_GET_REFERENCED_ENTITIES"
  | "OBJECT_SET_SERVICE_V2_GET_TOP_OBJECTS_INITIAL_PAGE"
  | "OBJECT_SET_SERVICE_V2_GET_TOP_OBJECTS_NEXT_PAGE"
  | "OBJECT_SET_SERVICE_V2_GET_ALL_OBJECTS_INITIAL_PAGE"
  | "OBJECT_SET_SERVICE_V2_GET_ALL_OBJECTS_NEXT_PAGE"
  | "OBJECT_SET_SERVICE_V2_LOAD_OBJECTS"
  | "OBJECT_SET_SERVICE_V2_GET_LINKS"
  | "OBJECT_SET_SERVICE_V2_GET_BULK_LINKS_PAGE"
  | "OBJECT_SET_AGGREGATION_SERVICE_AGGREGATE"
  | "OBJECT_SET_SCROLL_SERVICE_GET_OBJECTS_INITIAL_SCROLL"
  | "OBJECT_SET_SCROLL_SERVICE_GET_OBJECTS_NEXT_SCROLL"
  | "OBJECT_SET_SCROLL_SERVICE_GET_OBJECT_LOCATORS_INITIAL_SCROLL"
  | "OBJECT_SET_SCROLL_SERVICE_GET_OBJECT_LOCATORS_NEXT_SCROLL"
  | "OBJECT_SET_SUGGEST_SERVICE_SUGGEST"
  | "VERSIONED_OBJECT_SET_SERVICE_CREATE_VERSIONED_OBJECT_SET"
  | "VERSIONED_OBJECT_SET_SERVICE_CREATE_VERSIONED_OBJECT_SET_WITH_PARENT"
  | "VERSIONED_OBJECT_SET_SERVICE_GET_LATEST_VERSION"
  | "VERSIONED_OBJECT_SET_SERVICE_GET_BULK_LATEST_VERSION"
  | "VERSIONED_OBJECT_SET_SERVICE_PUT_LATEST_VERSION"
  | "VERSIONED_OBJECT_SET_SERVICE_CHECK_BULK_OPERATION_PERMISSIONS"
  | "INTERNAL_OBJECT_SET_LOAD_PATCHABLE_OBJECTS"
  | "OBJECT_SET_DATAFRAME_SERVICE_GET_TOP_ROWS";
export interface ObjectSetServiceCreateObjectSetRequestParams {
  request: _api_CreateObjectSetRequest;
}
export interface ObjectSetServiceCreateObjectSetResultParams {
  response: _api_CreateObjectSetResponse;
}
export interface ObjectSetServiceCreateTemporaryObjectSetRequestParams {
  request: _api_CreateTemporaryObjectSetRequest;
}
export interface ObjectSetServiceCreateTemporaryObjectSetResultParams {
  response: _api_CreateTemporaryObjectSetResponse;
}
export interface ObjectSetServiceDeleteBySecurityRidRequestParams {
  securityRid: string;
}
export interface ObjectSetServiceDeleteObjectSetRequestParams {
  objectSetRid: _api_ObjectSetRid;
}
export interface ObjectSetServiceGetBulkObjectSetRequestParams {
  request: _api_GetBulkObjectSetRequest;
}
export interface ObjectSetServiceGetBulkObjectSetResultParams {
  response: _api_GetBulkObjectSetResponse;
}
export interface ObjectSetServiceGetObjectSetRequestParams {
  objectSetRid: _api_ObjectSetRid;
}
export interface ObjectSetServiceGetObjectSetResultParams {
  response: _api_GetObjectSetResponse;
}
export interface ObjectSetServiceGetObjectsPageRequestParams {
  backend?: _api_Backend | null | undefined;
  request: _api_GetObjectsPageRequest;
}
export interface ObjectSetServiceGetObjectsPageResultParams {
  numObjectsReturned?: number | null | undefined;
  response?: _api_GetObjectsPageResponse | null | undefined;
}
export interface ObjectSetServiceGetObjectTypesRequestParams {
  request: _api_GetObjectTypesRequest;
}
export interface ObjectSetServiceGetObjectTypesResultParams {
  response: _api_GetObjectTypesResponse;
}
export interface ObjectSetServiceGetReferencedEntitiesRequestParams {
  request: _api_GetReferencedEntitiesRequest;
}
export interface ObjectSetServiceGetReferencedEntitiesResultParams {
  response: _api_GetReferencedEntitiesResponse;
}
export interface ObjectSetServiceMaterializeObjectSetRequestParams {
  request: _api_MaterializeObjectSetRequest;
}
export interface ObjectSetServiceMaterializeObjectSetResultParams {
  response: _api_MaterializeObjectSetResponse;
}
export interface ObjectSetServiceV2GetAllObjectsInitialPageRequestParams {
  backend?: _api_Backend | null | undefined;
  request: _api_GetAllObjectsInitialPageRequest;
}
export interface ObjectSetServiceV2GetAllObjectsInitialPageResultParams {
  numObjectsReturned?: number | null | undefined;
  results: Array<AuditFoundryObjectList>;
  totalResults?: number | null | undefined;
}
export interface ObjectSetServiceV2GetAllObjectsNextPageRequestParams {
  backend?: _api_Backend | null | undefined;
  request: _api_GetAllObjectsNextPageRequest;
}
export interface ObjectSetServiceV2GetAllObjectsNextPageResultParams {
  numObjectsReturned?: number | null | undefined;
  results: Array<AuditFoundryObjectList>;
}
export interface ObjectSetServiceV2GetBulkLinksPageRequestParams {
  request: _api_GetBulkLinksPageRequest;
}
export interface ObjectSetServiceV2GetBulkLinksPageResultParams {
  numObjectsReturned?: number | null | undefined;
  results: Array<AuditLoadedObjectLinksResultV2>;
}
export interface ObjectSetServiceV2GetLinksRequestParams {
  request: _api_GetLinksRequest;
}
export interface ObjectSetServiceV2GetLinksResultParams {
  numObjectsReturned?: number | null | undefined;
  results: Array<AuditFoundryLink>;
  totalResults?: number | null | undefined;
}
export interface ObjectSetServiceV2GetTopObjectsInitialPageRequestParams {
  backend?: _api_Backend | null | undefined;
  request: _api_GetTopObjectsInitialPageRequest;
}
export interface ObjectSetServiceV2GetTopObjectsInitialPageResultParams {
  numObjectsReturned?: number | null | undefined;
  results: Array<AuditFoundryObjectList>;
  totalResults?: number | null | undefined;
}
export interface ObjectSetServiceV2GetTopObjectsNextPageRequestParams {
  backend?: _api_Backend | null | undefined;
  request: _api_GetTopObjectsNextPageRequest;
}
export interface ObjectSetServiceV2GetTopObjectsNextPageResultParams {
  numObjectsReturned?: number | null | undefined;
  results: Array<AuditFoundryObjectList>;
}
export interface ObjectSetServiceV2LoadObjectsRequestParams {
  request: _api_LoadObjectsRequest;
}
export interface ObjectSetServiceV2LoadObjectsResultParams {
  numObjectsReturned?: number | null | undefined;
  results: Array<AuditFoundryObjectList>;
}
export interface ObjectSetSuggestServiceSuggestRequestParams {
  backend?: _api_Backend | null | undefined;
  request: _api_SuggestRequest;
}
export interface ObjectSetSuggestServiceSuggestResultParams {
  response: _api_SuggestResponse;
}
export interface VersionedObjectSetServiceCheckBulkOperationPermissionsRequestParams {
  request: _api_CheckBulkOperationPermissionsRequest;
}
export interface VersionedObjectSetServiceCheckBulkOperationPermissionsResultParams {
  response: _api_CheckBulkOperationPermissionsResponse;
}
export interface VersionedObjectSetServiceCreateVersionedObjectSetRequestParams {
  request: _api_CreateVersionedObjectSetRequest;
}
export interface VersionedObjectSetServiceCreateVersionedObjectSetResultParams {
  response: _api_CreateVersionedObjectSetResponse;
}
export interface VersionedObjectSetServiceCreateVersionedObjectSetWithParentRequestParams {
  request: _api_CreateVersionedObjectSetWithParentRequest;
}
export interface VersionedObjectSetServiceCreateVersionedObjectSetWithParentResultParams {
  response: _api_CreateVersionedObjectSetResponse;
}
export interface VersionedObjectSetServiceGetBulkLatestVersionRequestParams {
  request: _api_GetBulkLatestVersionRequest;
}
export interface VersionedObjectSetServiceGetBulkLatestVersionResultParams {
  response: _api_GetBulkLatestVersionResponse;
}
export interface VersionedObjectSetServiceGetLatestVersionRequestParams {
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}
export interface VersionedObjectSetServiceGetLatestVersionResultParams {
  response: _api_LatestVersionResponse;
}
export interface VersionedObjectSetServicePutLatestVersionRequestParams {
  request: _api_UpdateLatestVersionRequest;
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}
export interface VersionedObjectSetServicePutLatestVersionResultParams {
  response: _api_LatestVersionResponse;
}
