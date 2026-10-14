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

export { getCreateOntologyPermissions } from "./OntologyPermissionService/getCreateOntologyPermissions.js";
export { getOntologyPermissions } from "./OntologyPermissionService/getOntologyPermissions.js";
export { getBulkOntologyPermissions } from "./OntologyPermissionService/getBulkOntologyPermissions.js";
export { getObjectTypePermissions } from "./OntologyPermissionService/getObjectTypePermissions.js";
export { getBulkObjectTypePermissions } from "./OntologyPermissionService/getBulkObjectTypePermissions.js";
export { getBulkObjectTypePermissionsForUsers } from "./OntologyPermissionService/getBulkObjectTypePermissionsForUsers.js";
export { getLinkTypePermissions } from "./OntologyPermissionService/getLinkTypePermissions.js";
export { getBulkLinkTypePermissions } from "./OntologyPermissionService/getBulkLinkTypePermissions.js";
export { getBulkLinkTypePermissionsForUsers } from "./OntologyPermissionService/getBulkLinkTypePermissionsForUsers.js";
export { getActionTypePermissions } from "./OntologyPermissionService/getActionTypePermissions.js";
export { getBulkActionTypePermissions } from "./OntologyPermissionService/getBulkActionTypePermissions.js";
export { getBulkActionTypePermissionsForUsers } from "./OntologyPermissionService/getBulkActionTypePermissionsForUsers.js";
export { getRuleSetPermissions } from "./OntologyPermissionService/getRuleSetPermissions.js";
export { getWorkflowPermissions } from "./OntologyPermissionService/getWorkflowPermissions.js";
export { getSharedPropertyTypePermissions } from "./OntologyPermissionService/getSharedPropertyTypePermissions.js";
export { getBulkSharedPropertyTypePermissions } from "./OntologyPermissionService/getBulkSharedPropertyTypePermissions.js";
export { getInterfaceTypePermissions } from "./OntologyPermissionService/getInterfaceTypePermissions.js";
export { getBulkInterfaceTypePermissions } from "./OntologyPermissionService/getBulkInterfaceTypePermissions.js";
export { getBulkTypeGroupPermissions } from "./OntologyPermissionService/getBulkTypeGroupPermissions.js";
export { updateEntityRoles } from "./OntologyPermissionService/updateEntityRoles.js";
export { bulkUpdateEntityRoles } from "./OntologyPermissionService/bulkUpdateEntityRoles.js";
export { migrateEntitiesToProjects } from "./OntologyPermissionService/migrateEntitiesToProjects.js";
export { getEntityProjectsMigrationStatus } from "./OntologyPermissionService/getEntityProjectsMigrationStatus.js";
export { getEditorsForObjectType } from "./OntologyPermissionService/getEditorsForObjectType.js";
export { getSuggestedRolesForObjectType } from "./OntologyPermissionService/getSuggestedRolesForObjectType.js";
export { getSuggestedRolesForObjectTypeDatasource } from "./OntologyPermissionService/getSuggestedRolesForObjectTypeDatasource.js";
export { getSuggestedRolesForLinkType } from "./OntologyPermissionService/getSuggestedRolesForLinkType.js";
export { getSuggestedRolesForManyToManyLinkTypeDatasource } from "./OntologyPermissionService/getSuggestedRolesForManyToManyLinkTypeDatasource.js";
export { getSuggestedRolesForActionType } from "./OntologyPermissionService/getSuggestedRolesForActionType.js";
export { updateEntitiesInPackage } from "./OntologyPermissionService/updateEntitiesInPackage.js";
export { updatePackageRoles } from "./OntologyPermissionService/updatePackageRoles.js";
export { revertPublicProjectEntity } from "./OntologyPermissionService/revertPublicProjectEntity.js";
export { bulkRevertPublicProjectEntities } from "./OntologyPermissionService/bulkRevertPublicProjectEntities.js";
export { moveOntologyEntities } from "./OntologyPermissionService/moveOntologyEntities.js";
