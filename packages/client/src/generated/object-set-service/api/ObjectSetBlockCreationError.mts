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

import type { ObjectSetBlockCreationErrorMultipassAttributeKeysNotSupported } from "./ObjectSetBlockCreationErrorMultipassAttributeKeysNotSupported.mjs";
import type { ObjectSetBlockCreationErrorNotFound } from "./ObjectSetBlockCreationErrorNotFound.mjs";
import type { ObjectSetBlockCreationErrorReferencedObjectSetNotFound } from "./ObjectSetBlockCreationErrorReferencedObjectSetNotFound.mjs";
import type { ObjectSetBlockCreationErrorRuntimeDerivedPropertiesNotSupported } from "./ObjectSetBlockCreationErrorRuntimeDerivedPropertiesNotSupported.mjs";
import type { ObjectSetBlockCreationErrorStaticObjectSetsNotSupported } from "./ObjectSetBlockCreationErrorStaticObjectSetsNotSupported.mjs";
export interface ObjectSetBlockCreationError_multipassAttributesNotSupported {
  type: "multipassAttributesNotSupported";
  multipassAttributesNotSupported:
    ObjectSetBlockCreationErrorMultipassAttributeKeysNotSupported;
}

export interface ObjectSetBlockCreationError_notFound {
  type: "notFound";
  notFound: ObjectSetBlockCreationErrorNotFound;
}

export interface ObjectSetBlockCreationError_referencedObjectSetNotFound {
  type: "referencedObjectSetNotFound";
  referencedObjectSetNotFound:
    ObjectSetBlockCreationErrorReferencedObjectSetNotFound;
}

export interface ObjectSetBlockCreationError_staticObjectSetsNotSupported {
  type: "staticObjectSetsNotSupported";
  staticObjectSetsNotSupported:
    ObjectSetBlockCreationErrorStaticObjectSetsNotSupported;
}

export interface ObjectSetBlockCreationError_runtimeDerivedPropertiesNotSupported {
  type: "runtimeDerivedPropertiesNotSupported";
  runtimeDerivedPropertiesNotSupported:
    ObjectSetBlockCreationErrorRuntimeDerivedPropertiesNotSupported;
}

export type ObjectSetBlockCreationError =
  | ObjectSetBlockCreationError_multipassAttributesNotSupported
  | ObjectSetBlockCreationError_notFound
  | ObjectSetBlockCreationError_referencedObjectSetNotFound
  | ObjectSetBlockCreationError_staticObjectSetsNotSupported
  | ObjectSetBlockCreationError_runtimeDerivedPropertiesNotSupported;
