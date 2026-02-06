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

import type { WorkflowRid as _workflow_api_WorkflowRid } from "../../workflow/api/__components.js";
import type {
  ActionTypeRid as _api_ActionTypeRid,
  CompassFolderRid as _api_CompassFolderRid,
  DatasourceRid as _api_DatasourceRid,
  GroupId as _api_GroupId,
  InterfaceTypeRid as _api_InterfaceTypeRid,
  LinkTypeRid as _api_LinkTypeRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyPackageRid as _api_OntologyPackageRid,
  OntologyRid as _api_OntologyRid,
  PackagedEntityRid as _api_PackagedEntityRid,
  PrincipalId as _api_PrincipalId,
  ProjectEntityRid as _api_ProjectEntityRid,
  PropertySecurityGroupRid as _api_PropertySecurityGroupRid,
  RoleId as _api_RoleId,
  SharedPropertyTypeRid as _api_SharedPropertyTypeRid,
  TypeGroupRid as _api_TypeGroupRid,
  UserId as _api_UserId,
} from "../__components.js";
export interface ActionTypePermissionModel_preRoles {
  type: "preRoles";
  preRoles: PreRolesPermissionModel;
}

export interface ActionTypePermissionModel_roles {
  type: "roles";
  roles: RolesPermissionModel;
}

export interface ActionTypePermissionModel_package {
  type: "package";
  package: PackagePermissionModel;
}

export interface ActionTypePermissionModel_publicProject {
  type: "publicProject";
  publicProject: PublicProjectPermissionModel;
}
export type ActionTypePermissionModel =
  | ActionTypePermissionModel_preRoles
  | ActionTypePermissionModel_roles
  | ActionTypePermissionModel_package
  | ActionTypePermissionModel_publicProject;

/**
 * Request to update the roles on an ontology entity.
 * - The RoleSet of the ontology project must be in the Ontology context.
 * - The roles must be within the RoleSet of the ontology project.
 */
export interface BulkUpdateEntityRolesRequest {
  dryRun?: boolean | null | undefined;
  entitiesAndGrantPatches: Array<EntityAndGrantPatches>;
}
/**
 * Response to BulkUpdateEntityRolesRequest. Intentionally left empty for future extensibility.
 */
export interface BulkUpdateEntityRolesResponse {
}
/**
 * The roles permission model is used by none of the entities in the enrollment.
 */
export interface DatasourceDerived {
}
/**
 * Permissions to edit the entity is primarily controlled by datasource access.
 *
 * The entity is viewable by users that satisfy the markings of the ontology and editable by users who have
 * access to a datasource and Ontology Editor or Ontology Owner role on the ontology. Only users with the
 * appropriate permissions can make view or edit the entity.
 */
export interface EditRestrictedByDatasourcesPermissionModel {
}
export interface EntityAndGrantPatches {
  entity: PermissionsOntologyEntity;
  grantPatches: Array<RoleGrantPatch>;
  parent?: EntityParent | null | undefined;
}
export interface EntityParent_package {
  type: "package";
  package: PackageParent;
}

export interface EntityParent_project {
  type: "project";
  project: OntologyParent;
}
export type EntityParent = EntityParent_package | EntityParent_project;

/**
 * Principal that represents all users that can see the project. Intentionally left empty for future
 * extensibility.
 */
export interface EveryPrincipal {
}
/**
 * The operations the user has on the provided ActionType
 */
export interface GetActionTypePermissionsResponse {
  canEdit: boolean;
  canOverrideNotificationRedaction: boolean;
  canUpdateRoles: boolean;
  canUseNotifications: boolean;
  canView: boolean;
  hasRolesApplied: boolean;
  packageRid?: _api_OntologyPackageRid | null | undefined;
  permissionModel: ActionTypePermissionModel;
}
/**
 * Single user and action type pair to check permissions for
 */
export interface GetBulkActionTypePermissionsForUsersQuery {
  actionTypeRid: _api_ActionTypeRid;
  userId: _api_UserId;
}
/**
 * Bulk request for checking permissions for multiple users and action types.
 */
export interface GetBulkActionTypePermissionsForUsersRequest {
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  queries: Array<GetBulkActionTypePermissionsForUsersQuery>;
}
export interface GetBulkActionTypePermissionsForUsersResponse {
  results: Array<GetBulkActionTypePermissionsForUsersResult>;
}
/**
 * Single user and action type pair permissions were checked for.
 */
export interface GetBulkActionTypePermissionsForUsersResult {
  actionTypeRid: _api_ActionTypeRid;
  permissions: GetActionTypePermissionsResponse;
  userId: _api_UserId;
}
/**
 * Bulk request to get the operations the user has on the provided ActionTypes. Limited to 500 entries per
 * request.
 */
export interface GetBulkActionTypePermissionsRequest {
  actionTypeRids: Array<_api_ActionTypeRid>;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
}
/**
 * The operations the user has on the provided ActionTypes. ActionTypes that do not exist will not be present
 * in the response.
 */
export interface GetBulkActionTypePermissionsResponse {
  actionTypePermissions: Record<
    _api_ActionTypeRid,
    GetActionTypePermissionsResponse
  >;
}
/**
 * Bulk request to get the operations the user has on the provided InterfaceTypes. Limited to 500 entries
 * per request.
 */
export interface GetBulkInterfaceTypePermissionsRequest {
  interfaceTypeRids: Array<_api_InterfaceTypeRid>;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
}
/**
 * The operations the user has on the provided InterfaceTypeRids. InterfaceTypes that do not exist
 * will not be present in the response.
 */
export interface GetBulkInterfaceTypePermissionsResponse {
  interfaceTypePermissions: Record<
    _api_InterfaceTypeRid,
    GetInterfaceTypePermissionsResponse
  >;
}
/**
 * Single user and link type pair to check permissions for
 */
export interface GetBulkLinkTypePermissionsForUsersQuery {
  linkTypeRid: _api_LinkTypeRid;
  userId: _api_UserId;
}
/**
 * Bulk request for checking permissions for multiple users and link types.
 */
export interface GetBulkLinkTypePermissionsForUsersRequest {
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  queries: Array<GetBulkLinkTypePermissionsForUsersQuery>;
}
export interface GetBulkLinkTypePermissionsForUsersResponse {
  results: Array<GetBulkLinkTypePermissionsForUsersResult>;
}
/**
 * Single user and link type pair for which permissions were checked for.
 */
export interface GetBulkLinkTypePermissionsForUsersResult {
  linkTypeRid: _api_LinkTypeRid;
  permissions: GetLinkTypePermissionsResponse;
  userId: _api_UserId;
}
/**
 * Bulk request to get the operations the user has on the provided LinkTypes. Limited to 500 entries per
 * request.
 */
export interface GetBulkLinkTypePermissionsRequest {
  linkTypeRids: Array<_api_LinkTypeRid>;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
}
/**
 * The operations the user has on the provided LinkTypes. LinkTypes that do not exist will not be present
 * in the response.
 */
export interface GetBulkLinkTypePermissionsResponse {
  linkTypePermissions: Record<_api_LinkTypeRid, GetLinkTypePermissionsResponse>;
}
/**
 * Single user and object type pair to check permissions for
 */
export interface GetBulkObjectTypePermissionsForUsersQuery {
  objectTypeRid: _api_ObjectTypeRid;
  userId: _api_UserId;
}
/**
 * Bulk request for checking permissions for multiple users and object types.
 */
export interface GetBulkObjectTypePermissionsForUsersRequest {
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  queries: Array<GetBulkObjectTypePermissionsForUsersQuery>;
}
export interface GetBulkObjectTypePermissionsForUsersResponse {
  results: Array<GetBulkObjectTypePermissionsForUsersResult>;
}
/**
 * Single user and object type pair to check permissions for
 */
export interface GetBulkObjectTypePermissionsForUsersResult {
  objectTypeRid: _api_ObjectTypeRid;
  permissions: GetObjectTypePermissionsResponse;
  userId: _api_UserId;
}
/**
 * Bulk request to get the operations the user has on the provided ObjectTypes. Limited to 500 entries per
 * request.
 */
export interface GetBulkObjectTypePermissionsRequest {
  objectTypeRids: Array<_api_ObjectTypeRid>;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
}
/**
 * The operations the user has on the provided ObjectTypes. ObjectTypes that do not exist will not be present
 * in the response.
 */
export interface GetBulkObjectTypePermissionsResponse {
  objectTypePermissions: Record<
    _api_ObjectTypeRid,
    GetObjectTypePermissionsResponse
  >;
}
/**
 * Bulk request to get the operations the user has on the provided ontologies. Ontologies that are queried
 * with an empty branch rid will return results based on their default branch rid. Limited to 500 entries per
 * request.
 */
export interface GetBulkOntologyPermissionsRequest {
  ontologies: Array<OntologyRidAndMaybeBranch>;
}
/**
 * The operations the user has on the provided ontologies. Ontologies that do not exist will not be present
 * in the response. On the other hand, branches that do not exist will still be passed in as-is and permissions
 * returned (usually all false).
 */
export interface GetBulkOntologyPermissionsResponse {
  ontologyPermissions: Array<OntologyRidAndMaybeBranchPermissions>;
}
/**
 * Bulk request to get the operations the user has on the provided SharedPropertyTypes. Limited to 500 entries
 * per request.
 */
export interface GetBulkSharedPropertyTypePermissionsRequest {
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  sharedPropertyTypeRids: Array<_api_SharedPropertyTypeRid>;
}
/**
 * The operations the user has on the provided SharedPropertyTypeRids. SharedPropertyTypes that do not exist
 * will not be present in the response.
 */
export interface GetBulkSharedPropertyTypePermissionsResponse {
  sharedPropertyTypePermissions: Record<
    _api_SharedPropertyTypeRid,
    GetSharedPropertyTypePermissionsResponse
  >;
}
/**
 * Bulk request to get the operations the user has on the provided TypeGroups. Limited to 500 entries
 * per request.
 */
export interface GetBulkTypeGroupPermissionsRequest {
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  typeGroupRids: Array<_api_TypeGroupRid>;
}
/**
 * The operations the user has on the provided TypeGroupRids. TypeGroups that do not exist
 * will not be present in the response.
 */
export interface GetBulkTypeGroupPermissionsResponse {
  typeGroupPermissions: Record<
    _api_TypeGroupRid,
    GetTypeGroupPermissionsResponse
  >;
}
/**
 * Indicates whether the user has permissions to create new Ontologies.
 */
export interface GetCreateOntologyPermissionsResponse {
  canCreateOntology: boolean;
}
/**
 * Request to get the list of editors for the requested object type.
 */
export interface GetEditorsForObjectTypeRequest {
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * The list of users who can edit the requested object type.
 */
export interface GetEditorsForObjectTypeResponse {
  userIds: Array<_api_UserId>;
}
/**
 * The operations the user has on the provided InterfaceType.
 */
export interface GetInterfaceTypePermissionsResponse {
  canDelete: boolean;
  canEdit: boolean;
  canUpdateRoles: boolean;
  packageRid?: _api_OntologyPackageRid | null | undefined;
  permissionModel: InterfaceTypePermissionModel;
}
/**
 * The operations the user has on the provided LinkType.
 */
export interface GetLinkTypePermissionsResponse {
  canAddDatasources: boolean;
  canDelete: boolean;
  canEdit: boolean;
  canUpdateRoles: boolean;
  canView: boolean;
  datasourcePermissions: Record<
    _api_DatasourceRid,
    ManyToManyLinkTypeDatasourcePermissions
  >;
  isEditRestrictedByDatasources: boolean;
  packageRid?: _api_OntologyPackageRid | null | undefined;
  permissionModel: LinkTypePermissionModel;
}
/**
 * The operations the user has on the provided ObjectType.
 */
export interface GetObjectTypePermissionsResponse {
  canAddDatasources: boolean;
  canDelete: boolean;
  canEdit: boolean;
  canUpdateRoles: boolean;
  canView: boolean;
  datasourcePermissions: Record<
    _api_DatasourceRid,
    ObjectTypeDatasourcePermissions
  >;
  isEditRestrictedByDatasources: boolean;
  packageRid?: _api_OntologyPackageRid | null | undefined;
  permissionModel: ObjectTypePermissionModel;
  propertySecurityGroupPermissions: Record<
    _api_PropertySecurityGroupRid,
    PropertySecurityGroupPermissions
  >;
}
/**
 * The operations the user has on the provided ontology.
 */
export interface GetOntologyPermissionsResponse {
  canCreateActionTypes: boolean;
  canCreateInterfaceTypes: boolean;
  canCreateLinkTypes: boolean;
  canCreateObjectTypes: boolean;
  canCreateRuleSets: boolean;
  canCreateSharedPropertyTypes: boolean;
  canCreateTypeGroups: boolean;
  canCreateWorkflows: boolean;
  canDeleteOntology: boolean;
  canUpdateOntology: boolean;
  canUseNotificationsWithActionType: boolean;
}
/**
 * The operations the user has on the provided RuleSet.
 */
export interface GetRuleSetPermissionsResponse {
  canDelete: boolean;
  canEdit: boolean;
}
/**
 * The operations the user has on the provided SharedPropertyType.
 */
export interface GetSharedPropertyTypePermissionsResponse {
  canDelete: boolean;
  canEdit: boolean;
  canUpdateRoles: boolean;
  importedInto: Array<_api_OntologyRid>;
  packageRid?: _api_OntologyPackageRid | null | undefined;
  permissionModel: SharedPropertyTypePermissionModel;
}
/**
 * The set of principals suggested to have the editor or owner role on the entity.
 */
export interface GetSuggestedRolesDatasourceResponse {
  editors: Array<_api_PrincipalId>;
  owners: Array<_api_PrincipalId>;
}
/**
 * The set of users suggested to have the editor or owner role on the entity.
 */
export interface GetSuggestedRolesResponse {
  editors: Array<_api_UserId>;
  owners: Array<_api_UserId>;
}
/**
 * The operations the user has on the provided TypeGroup.
 */
export interface GetTypeGroupPermissionsResponse {
  canDelete: boolean;
  canEdit: boolean;
  canUpdateRoles: boolean;
  permissionModel: TypeGroupPermissionModel;
}
/**
 * The operations the user has on the provided Workflow.
 */
export interface GetWorkflowPermissionsResponse {
  canDelete: boolean;
  canEdit: boolean;
  canUpdateRoles: boolean;
  hasRolesApplied: boolean;
}
/**
 * Principal that represents a group of users. Identified by the group id.
 */
export interface GroupPrincipal {
  group: _api_GroupId;
}
export interface InterfaceTypePermissionModel_roles {
  type: "roles";
  roles: RolesPermissionModel;
}

export interface InterfaceTypePermissionModel_package {
  type: "package";
  package: PackagePermissionModel;
}

export interface InterfaceTypePermissionModel_publicProject {
  type: "publicProject";
  publicProject: PublicProjectPermissionModel;
}
export type InterfaceTypePermissionModel =
  | InterfaceTypePermissionModel_roles
  | InterfaceTypePermissionModel_package
  | InterfaceTypePermissionModel_publicProject;

export interface LinkTypePermissionModel_viewRestricted {
  type: "viewRestricted";
  viewRestricted: ViewRestrictedByDatasourcesPermissionModel;
}

export interface LinkTypePermissionModel_editRestricted {
  type: "editRestricted";
  editRestricted: EditRestrictedByDatasourcesPermissionModel;
}

export interface LinkTypePermissionModel_roles {
  type: "roles";
  roles: RolesPermissionModel;
}

export interface LinkTypePermissionModel_package {
  type: "package";
  package: PackagePermissionModel;
}

export interface LinkTypePermissionModel_publicProject {
  type: "publicProject";
  publicProject: PublicProjectPermissionModel;
}
export type LinkTypePermissionModel =
  | LinkTypePermissionModel_viewRestricted
  | LinkTypePermissionModel_editRestricted
  | LinkTypePermissionModel_roles
  | LinkTypePermissionModel_package
  | LinkTypePermissionModel_publicProject;

/**
 * The operations the user has on a datasource.
 */
export interface ManyToManyLinkTypeDatasourcePermissions {
  canDelete: boolean;
  canEdit: boolean;
}
export interface MigrateEntitiesToProjectsRequest {
  entitiesToMove: Record<_api_CompassFolderRid, Array<_api_ProjectEntityRid>>;
}
/**
 * Response to MoveEntitiesToProjectsRequest. Intentionally left empty for future extensibility.
 */
export interface MigrateEntitiesToProjectsResponse {
}
/**
 * The operations the user has on a datasource.
 */
export interface ObjectTypeDatasourcePermissions {
  canCreatePropertySecurityGroups: boolean;
  canDelete: boolean;
  canEdit: boolean;
}
export interface ObjectTypePermissionModel_viewRestricted {
  type: "viewRestricted";
  viewRestricted: ViewRestrictedByDatasourcesPermissionModel;
}

export interface ObjectTypePermissionModel_editRestricted {
  type: "editRestricted";
  editRestricted: EditRestrictedByDatasourcesPermissionModel;
}

export interface ObjectTypePermissionModel_roles {
  type: "roles";
  roles: RolesPermissionModel;
}

export interface ObjectTypePermissionModel_package {
  type: "package";
  package: PackagePermissionModel;
}

export interface ObjectTypePermissionModel_publicProject {
  type: "publicProject";
  publicProject: PublicProjectPermissionModel;
}
export type ObjectTypePermissionModel =
  | ObjectTypePermissionModel_viewRestricted
  | ObjectTypePermissionModel_editRestricted
  | ObjectTypePermissionModel_roles
  | ObjectTypePermissionModel_package
  | ObjectTypePermissionModel_publicProject;

export interface OntologyParent {
}
export interface OntologyRidAndMaybeBranch {
  branchRid?: _api_OntologyBranchRid | null | undefined;
  ontologyRid: _api_OntologyRid;
}
/**
 * Encapsulates the permissions a user has on a given ontology rid and branch.
 */
export interface OntologyRidAndMaybeBranchPermissions {
  ontology: OntologyRidAndMaybeBranch;
  permissions: GetOntologyPermissionsResponse;
}
export interface PackageParent {
  packageRid: _api_OntologyPackageRid;
}
/**
 * Legacy implementation, a folder within the ontology which is "synced" to a project.
 *
 * The entity is viewable by users that satisfy the markings of the ontology and editable by users with roles on
 * the specified package or users who have Ontology Owner role on the ontology. Packages represent folders within
 * the ontology that are synchronized to external projects. Permissions are inherited from the package's role
 * configuration rather than being directly assigned to the entity.
 *
 * Note: This model is deprecated. New entities should use PublicProjectPermissionModel for modern Compass
 * project integration.
 */
export interface PackagePermissionModel {
  packageRid: _api_OntologyPackageRid;
}
/**
 * Operation to specify whether the patch is added or removed
 */
export type PatchOperation = "ADD" | "REMOVE";
export interface PermissionModel_rolesEnforced {
  type: "rolesEnforced";
  rolesEnforced: RolesEnforced;
}

export interface PermissionModel_rolesEnabled {
  type: "rolesEnabled";
  rolesEnabled: RolesEnabled;
}

export interface PermissionModel_datasourceDerived {
  type: "datasourceDerived";
  datasourceDerived: DatasourceDerived;
}
/**
 * The permission model used by the entities in the enrollment.
 */
export type PermissionModel =
  | PermissionModel_rolesEnforced
  | PermissionModel_rolesEnabled
  | PermissionModel_datasourceDerived;

export interface PermissionsOntologyEntity_objectType {
  type: "objectType";
  objectType: _api_ObjectTypeRid;
}

export interface PermissionsOntologyEntity_linkType {
  type: "linkType";
  linkType: _api_LinkTypeRid;
}

export interface PermissionsOntologyEntity_actionType {
  type: "actionType";
  actionType: _api_ActionTypeRid;
}

export interface PermissionsOntologyEntity_workflow {
  type: "workflow";
  workflow: _workflow_api_WorkflowRid;
}

export interface PermissionsOntologyEntity_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: _api_SharedPropertyTypeRid;
}

export interface PermissionsOntologyEntity_interfaceType {
  type: "interfaceType";
  interfaceType: _api_InterfaceTypeRid;
}

export interface PermissionsOntologyEntity_typeGroup {
  type: "typeGroup";
  typeGroup: _api_TypeGroupRid;
}
/**
 * The ontology entity to apply role grants to.
 */
export type PermissionsOntologyEntity =
  | PermissionsOntologyEntity_objectType
  | PermissionsOntologyEntity_linkType
  | PermissionsOntologyEntity_actionType
  | PermissionsOntologyEntity_workflow
  | PermissionsOntologyEntity_sharedPropertyType
  | PermissionsOntologyEntity_interfaceType
  | PermissionsOntologyEntity_typeGroup;

/**
 * Legacy permission model before role-based access control.
 *
 * The entity is viewable by users that satisfy the markings of the ontology and editable by users who have
 * Ontology Editor or Ontology Owner role on the ontology. This is a legacy permission model used primarily for
 * action types that were created before the role-based permission system.
 *
 * Note: This model is deprecated.
 */
export interface PreRolesPermissionModel {
}
export interface Principal_everyone {
  type: "everyone";
  everyone: EveryPrincipal;
}

export interface Principal_group {
  type: "group";
  group: GroupPrincipal;
}

export interface Principal_user {
  type: "user";
  user: UserPrincipal;
}
/**
 * The principal to add/remove a role to.
 */
export type Principal = Principal_everyone | Principal_group | Principal_user;

/**
 * The operations the user has on a property security group.
 */
export interface PropertySecurityGroupPermissions {
  canDelete: boolean;
  canEdit: boolean;
}
/**
 * Entities in Compass projects. Permissions are entirely delegated to Compass project.
 *
 * The entity's visibility and editability is entirely controlled by the Compass project it belongs to. OMS does
 * not keep track of which project an entity is in; all permission resolution is delegated to Compass based on
 * project membership and roles.
 *
 * This is the modern approach for organizing and securing ontology entities. Entities are managed within Compass
 * projects, and permissions are determined by the user's access to those projects.
 */
export interface PublicProjectPermissionModel {
}
/**
 * The role to add/remove and to which principal
 */
export interface RoleGrant {
  principal: Principal;
  role: _api_RoleId;
}
/**
 * The patch to apply to the given resource
 */
export interface RoleGrantPatch {
  patchOperation: PatchOperation;
  roleGrant: RoleGrant;
}
/**
 * The roles permission model is used by some of the entities in the enrollment.
 */
export interface RolesEnabled {
}
/**
 * The roles permission model is used by all of the entities in the enrollment.
 */
export interface RolesEnforced {
}
/**
 * Secured by role-based access control.
 *
 * The entity is viewable by users that satisfy the markings of the ontology and editable by users with the
 * specified roles or users who have Ontology Owner role on the ontology. This is the standard permission model
 * for entities where access is controlled through explicit role grants to users or groups. The entity is not
 * restricted by datasource permissions.
 */
export interface RolesPermissionModel {
}
export interface SharedPropertyTypePermissionModel_roles {
  type: "roles";
  roles: RolesPermissionModel;
}

export interface SharedPropertyTypePermissionModel_package {
  type: "package";
  package: PackagePermissionModel;
}

export interface SharedPropertyTypePermissionModel_publicProject {
  type: "publicProject";
  publicProject: PublicProjectPermissionModel;
}
export type SharedPropertyTypePermissionModel =
  | SharedPropertyTypePermissionModel_roles
  | SharedPropertyTypePermissionModel_package
  | SharedPropertyTypePermissionModel_publicProject;

export interface TypeGroupPermissionModel_roles {
  type: "roles";
  roles: RolesPermissionModel;
}
export type TypeGroupPermissionModel = TypeGroupPermissionModel_roles;

/**
 * Adds or removes the requested entities to/from a package. Removing means moving the resources to the default
 * ontology project in the same ontology as the given package.
 */
export interface UpdateEntitiesInPackageRequest {
  entitiesToAdd: Array<_api_PackagedEntityRid>;
  entitiesToRemove: Array<_api_PackagedEntityRid>;
}
/**
 * Response to UpdateEntitiesInPackageRequest. Intentionally left empty for future extensibility.
 */
export interface UpdateEntitiesInPackageResponse {
}
/**
 * Request to update the roles on an ontology entity.
 * - The RoleSet of the ontology project must be in the Ontology context.
 * - The role must be within the RoleSet of the ontology project.
 */
export interface UpdateEntityRolesRequest {
  disableInheritedPermissions?: boolean | null | undefined;
  dryRun?: boolean | null | undefined;
  entity: PermissionsOntologyEntity;
  grantPatches: Array<RoleGrantPatch>;
  parent?: EntityParent | null | undefined;
}
/**
 * Response to UpdateEntityRolesRequest. Intentionally left empty for future extensibility.
 */
export interface UpdateEntityRolesResponse {
}
/**
 * Updates the roles on the package.
 */
export interface UpdatePackageRolesRequest {
  grantPatches: Array<RoleGrantPatch>;
}
/**
 * Response to UpdatePackageRolesRequest. Intentionally left empty for future extensibility.
 */
export interface UpdatePackageRolesResponse {
}
/**
 * Principal that represents a user. Identified by the user id.
 */
export interface UserPrincipal {
  user: _api_UserId;
}
/**
 * Permissions to view or edit the entity is primarily controlled by datasource access.
 *
 * The entity is viewable by users that have access to a datasource and editable by users who have have access to
 * a datasource *and* Ontology Editor or Ontology Owner role on the ontology. Only users with the appropriate
 * permissions can make view or edit the entity.
 */
export interface ViewRestrictedByDatasourcesPermissionModel {
}
