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
  PermissioningRid as _api_PermissioningRid,
  ValueTypeRid as _api_ValueTypeRid,
  ValueTypeVersionId as _api_ValueTypeVersionId,
} from "../__components.js";
export interface ValueTypeCreated {
  permissioningRid: _api_PermissioningRid;
  valueTypeRid: _api_ValueTypeRid;
  valueTypeVersionId: _api_ValueTypeVersionId;
}
export interface ValueTypeDeleted {
  permissioningRid: _api_PermissioningRid;
  valueTypeRid: _api_ValueTypeRid;
}
export interface ValueTypeMetadataUpdated {
  permissioningRid: _api_PermissioningRid;
  valueTypeRid: _api_ValueTypeRid;
}
export interface ValueTypeMissing {
  valueTypeRid: _api_ValueTypeRid;
}
export interface ValueTypeModificationEvent_valueTypeCreated {
  type: "valueTypeCreated";
  valueTypeCreated: ValueTypeCreated;
}

export interface ValueTypeModificationEvent_valueTypeMetadataUpdated {
  type: "valueTypeMetadataUpdated";
  valueTypeMetadataUpdated: ValueTypeMetadataUpdated;
}

export interface ValueTypeModificationEvent_valueTypeDeleted {
  type: "valueTypeDeleted";
  valueTypeDeleted: ValueTypeDeleted;
}

export interface ValueTypeModificationEvent_valueTypeVersionCreated {
  type: "valueTypeVersionCreated";
  valueTypeVersionCreated: ValueTypeVersionCreated;
}

export interface ValueTypeModificationEvent_valueTypeMissing {
  type: "valueTypeMissing";
  valueTypeMissing: ValueTypeMissing;
}
export type ValueTypeModificationEvent =
  | ValueTypeModificationEvent_valueTypeCreated
  | ValueTypeModificationEvent_valueTypeMetadataUpdated
  | ValueTypeModificationEvent_valueTypeDeleted
  | ValueTypeModificationEvent_valueTypeVersionCreated
  | ValueTypeModificationEvent_valueTypeMissing;

export interface ValueTypeVersionCreated {
  permissioningRid: _api_PermissioningRid;
  valueTypeRid: _api_ValueTypeRid;
  valueTypeVersionId: _api_ValueTypeVersionId;
}
