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

import type { FoundryObject } from "./object/FoundryObject.js";
import type { ReferenceUpdate } from "./references/ReferenceUpdate.js";
export interface ObjectUpdate_object {
  type: "object";
  object: FoundryObject;
}

export interface ObjectUpdate_reference {
  type: "reference";
  reference: ReferenceUpdate;
}
export type ObjectUpdate = ObjectUpdate_object | ObjectUpdate_reference;
