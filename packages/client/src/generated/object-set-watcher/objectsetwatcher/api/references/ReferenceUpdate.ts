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

import type { ObjectKey } from "../object/ObjectKey.js";
import type { ObjectTypeRid } from "../object/ObjectTypeRid.js";
import type { PropertyRid } from "../object/PropertyRid.js";
import type { ReferenceValue } from "./ReferenceValue.js";

/**
 * The updated data values associated with an object instance's external reference. The object instance
 * is uniquely identified by an object type and a primary key. An object instance may have multiple
 * external references resolved to their underlying values. Note that the value set of the properties
 * field returns dereferenced values rather than the reference itself.
 */
export interface ReferenceUpdate {
  type: ObjectTypeRid;
  key: ObjectKey;
  properties: Record<PropertyRid, ReferenceValue>;
}
