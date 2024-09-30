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

import type { ValueTypeCreated } from "./ValueTypeCreated.js";
import type { ValueTypeDeleted } from "./ValueTypeDeleted.js";
import type { ValueTypeMetadataUpdated } from "./ValueTypeMetadataUpdated.js";
import type { ValueTypeVersionCreated } from "./ValueTypeVersionCreated.js";
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
export type ValueTypeModificationEvent =
  | ValueTypeModificationEvent_valueTypeCreated
  | ValueTypeModificationEvent_valueTypeMetadataUpdated
  | ValueTypeModificationEvent_valueTypeDeleted
  | ValueTypeModificationEvent_valueTypeVersionCreated;
