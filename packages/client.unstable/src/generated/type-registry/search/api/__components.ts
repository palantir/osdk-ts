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
  BaseTypeEnum as _api_BaseTypeEnum,
  Description as _api_Description,
  DisplayName as _api_DisplayName,
  ValueTypeApiName as _api_ValueTypeApiName,
  ValueTypeRid as _api_ValueTypeRid,
} from "../../api/__components.js";
export interface IndexedValueType {
  apiName: _api_ValueTypeApiName;
  baseType: _api_BaseTypeEnum;
  description?: _api_Description | null | undefined;
  displayName: _api_DisplayName;
  permissioningRid: PermissioningRid;
  rid: _api_ValueTypeRid;
}
export type PermissioningRid = string;
