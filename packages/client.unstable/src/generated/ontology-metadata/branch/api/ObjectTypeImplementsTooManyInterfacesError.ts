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

import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";

/**
 * An object type implements more than the allowed number of interfaces. The number of interfaces implemented
 * includes both explicit and implicit implementations. If an object type implements InterfaceB which extends
 * InterfaceA, then the number of implementations the object type has is 2.
 */
export interface ObjectTypeImplementsTooManyInterfacesError {
  objectTypeRid: ObjectTypeRid;
  objectTypeId: ObjectTypeId | undefined;
  actualNumberOfImplements: number;
  maximumNumberOfImplements: number;
}
