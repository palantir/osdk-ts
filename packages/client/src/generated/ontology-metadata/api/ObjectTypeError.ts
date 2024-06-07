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

import type { ObjectTypeRidsNotFoundError } from "./ObjectTypeRidsNotFoundError.js";
import type { ObjectTypesAlreadyExistError } from "./ObjectTypesAlreadyExistError.js";
import type { ObjectTypesNotFoundError } from "./ObjectTypesNotFoundError.js";
export interface ObjectTypeError_objectTypesAlreadyExist {
  type: "objectTypesAlreadyExist";
  objectTypesAlreadyExist: ObjectTypesAlreadyExistError;
}

export interface ObjectTypeError_objectTypesNotFound {
  type: "objectTypesNotFound";
  objectTypesNotFound: ObjectTypesNotFoundError;
}

export interface ObjectTypeError_objectTypeRidsNotFound {
  type: "objectTypeRidsNotFound";
  objectTypeRidsNotFound: ObjectTypeRidsNotFoundError;
}
export type ObjectTypeError =
  | ObjectTypeError_objectTypesAlreadyExist
  | ObjectTypeError_objectTypesNotFound
  | ObjectTypeError_objectTypeRidsNotFound;
