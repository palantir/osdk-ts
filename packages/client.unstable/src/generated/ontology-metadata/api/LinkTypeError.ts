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

import type { DeletedObjectTypesStillInUseError } from "./DeletedObjectTypesStillInUseError.js";
import type { LinkTypeRidsNotFoundError } from "./LinkTypeRidsNotFoundError.js";
import type { LinkTypesAlreadyExistError } from "./LinkTypesAlreadyExistError.js";
import type { LinkTypesNotFoundError } from "./LinkTypesNotFoundError.js";
import type { ReferencedObjectTypesNotFoundError } from "./ReferencedObjectTypesNotFoundError.js";
export interface LinkTypeError_linkTypesAlreadyExist {
  type: "linkTypesAlreadyExist";
  linkTypesAlreadyExist: LinkTypesAlreadyExistError;
}

export interface LinkTypeError_linkTypesNotFound {
  type: "linkTypesNotFound";
  linkTypesNotFound: LinkTypesNotFoundError;
}

export interface LinkTypeError_linkTypeRidsNotFound {
  type: "linkTypeRidsNotFound";
  linkTypeRidsNotFound: LinkTypeRidsNotFoundError;
}

export interface LinkTypeError_referencedObjectTypesNotFound {
  type: "referencedObjectTypesNotFound";
  referencedObjectTypesNotFound: ReferencedObjectTypesNotFoundError;
}

export interface LinkTypeError_deletedObjectsStillInUse {
  type: "deletedObjectsStillInUse";
  deletedObjectsStillInUse: DeletedObjectTypesStillInUseError;
}
export type LinkTypeError =
  | LinkTypeError_linkTypesAlreadyExist
  | LinkTypeError_linkTypesNotFound
  | LinkTypeError_linkTypeRidsNotFound
  | LinkTypeError_referencedObjectTypesNotFound
  | LinkTypeError_deletedObjectsStillInUse;
