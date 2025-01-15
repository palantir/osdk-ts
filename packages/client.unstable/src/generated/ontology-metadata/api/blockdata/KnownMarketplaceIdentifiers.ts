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

import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { FunctionRid } from "../FunctionRid.js";
import type { FunctionVersion } from "../FunctionVersion.js";
import type { GroupId } from "../GroupId.js";
import type { InterfaceLinkTypeRid } from "../InterfaceLinkTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ModuleRid } from "../ModuleRid.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { ParameterId } from "../ParameterId.js";
import type { ParameterRid } from "../ParameterRid.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TimeSeriesSyncRid } from "../TimeSeriesSyncRid.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { ValueTypeVersionId } from "../ValueTypeVersionId.js";
import type { WebhookRid } from "../WebhookRid.js";
import type { BlockInternalId } from "./BlockInternalId.js";
import type { BlockShapeId } from "./BlockShapeId.js";
export interface KnownMarketplaceIdentifiers {
  objectTypes: Record<ObjectTypeRid, BlockInternalId>;
  sharedPropertyTypes: Record<SharedPropertyTypeRid, BlockInternalId>;
  valueTypes: Record<ValueTypeRid, Record<ValueTypeVersionId, BlockInternalId>>;
  propertyTypes: Record<PropertyTypeRid, BlockInternalId>;
  linkTypes: Record<LinkTypeRid, BlockInternalId>;
  actionTypes: Record<ActionTypeRid, BlockInternalId>;
  actionParameters: Record<ParameterRid, BlockInternalId>;
  workshopModules: Record<ModuleRid, BlockInternalId>;
  functions: Record<FunctionRid, Record<FunctionVersion, BlockInternalId>>;
  groupIds: Record<GroupId, BlockInternalId>;
  objectTypeIds: Record<ObjectTypeId, BlockInternalId>;
  propertyTypeIds: Record<
    ObjectTypeId,
    Record<PropertyTypeId, BlockInternalId>
  >;
  linkTypeIds: Record<LinkTypeId, BlockInternalId>;
  actionParameterIds: Record<
    ActionTypeRid,
    Record<ParameterId, BlockInternalId>
  >;
  datasources: Record<BlockInternalId, any>;
  filesDatasources: Record<BlockInternalId, any>;
  datasourceColumns: Record<BlockInternalId, any>;
  timeSeriesSyncs: Record<TimeSeriesSyncRid, BlockInternalId>;
  webhooks: Record<WebhookRid, BlockInternalId>;
  interfaceTypes: Record<InterfaceTypeRid, BlockInternalId>;
  interfaceLinkTypes: Record<InterfaceLinkTypeRid, BlockInternalId>;
  shapeIdForInstallPrefix: BlockShapeId | undefined;
  shapeIdForOntologyAllowSchemaMigrations: BlockShapeId | undefined;
}
