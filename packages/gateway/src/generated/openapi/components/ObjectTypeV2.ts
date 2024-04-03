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

import type { DisplayName } from "./DisplayName";
import type { ObjectTypeApiName } from "./ObjectTypeApiName";
import type { ObjectTypeRid } from "./ObjectTypeRid";
import type { ObjectTypeVisibility } from "./ObjectTypeVisibility";
import type { PropertyApiName } from "./PropertyApiName";
import type { PropertyV2 } from "./PropertyV2";
import type { ReleaseStatus } from "./ReleaseStatus";

/** Represents an object type in the Ontology. */
export interface ObjectTypeV2 {
  apiName: ObjectTypeApiName;
  displayName?: DisplayName;
  status: ReleaseStatus;
  /** The description of the object type. */
  description?: string;
  primaryKey: PropertyApiName;
  /** A map of the properties of the object type. */
  properties: Record<PropertyApiName, PropertyV2>;
  rid: ObjectTypeRid;
  titleProperty: PropertyApiName;
  visibility?: ObjectTypeVisibility;
}
