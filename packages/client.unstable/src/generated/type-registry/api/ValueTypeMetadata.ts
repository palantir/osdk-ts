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

import type { BaseType } from "./BaseType.js";
import type { PermissioningRid } from "./PermissioningRid.js";
import type { ValueTypeApiName } from "./ValueTypeApiName.js";
import type { ValueTypeDisplayMetadata } from "./ValueTypeDisplayMetadata.js";
import type { ValueTypeProvenanceSource } from "./ValueTypeProvenanceSource.js";
import type { ValueTypeRid } from "./ValueTypeRid.js";
import type { ValueTypeStatus } from "./ValueTypeStatus.js";

/**
 * Shared metadata common for all version of a value type.
 */
export interface ValueTypeMetadata {
  rid: ValueTypeRid;
  apiName: ValueTypeApiName;
  displayMetadata: ValueTypeDisplayMetadata;
  baseType: BaseType;
  permissioningRid: PermissioningRid;
  status: ValueTypeStatus;
  valueTypeProvenanceSource: ValueTypeProvenanceSource | undefined;
}
