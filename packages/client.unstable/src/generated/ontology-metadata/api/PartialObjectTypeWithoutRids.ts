/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ColumnLocator } from "./ColumnLocator.js";
import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { ObjectDisplayMetadata } from "./ObjectDisplayMetadata.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyId } from "./PropertyId.js";
import type { PropertyWithoutRid } from "./PropertyWithoutRid.js";
export interface PartialObjectTypeWithoutRids {
  id: ObjectTypeId;
  authorizationRidColumnLocator: ColumnLocator | undefined;
  displayMetadata: ObjectDisplayMetadata | undefined;
  titlePropertyId: PropertyId;
  properties: Array<PropertyWithoutRid>;
  primaryKey: PropertyId;
  description: string | undefined;
  editsConfiguration: EditsConfiguration | undefined;
  metadata: Record<string, any | undefined>;
}
