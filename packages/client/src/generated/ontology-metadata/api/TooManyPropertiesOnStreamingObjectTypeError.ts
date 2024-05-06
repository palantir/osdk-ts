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

import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";

/**
 * An error indicating there are too many properties on a created or updated Object Type with a streaming
 * datasource.
 */
export interface TooManyPropertiesOnStreamingObjectTypeError {
  requestedNumber: number;
  maximumNumber: number;
  objectTypeRid: ObjectTypeRid;
  objectTypeId: ObjectTypeId;
}
