/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { BaseTypeEnum } from "../../api/BaseTypeEnum.js";
import type { Description } from "../../api/Description.js";
import type { DisplayName } from "../../api/DisplayName.js";
import type { ValueTypeApiName } from "../../api/ValueTypeApiName.js";
import type { ValueTypeRid } from "../../api/ValueTypeRid.js";
import type { PermissioningRid } from "./PermissioningRid.js";
export interface IndexedValueType {
  rid: ValueTypeRid;
  apiName: ValueTypeApiName;
  displayName: DisplayName;
  description: Description | undefined;
  permissioningRid: PermissioningRid;
  baseType: BaseTypeEnum;
}
