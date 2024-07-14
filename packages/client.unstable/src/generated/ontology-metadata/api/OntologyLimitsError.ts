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

import type { ActionTypeLimitsError } from "./ActionTypeLimitsError.js";
import type { AliasLimitsError } from "./AliasLimitsError.js";
import type { DisplayMetadataLimitsError } from "./DisplayMetadataLimitsError.js";
import type { ObjectTypeLimitsError } from "./ObjectTypeLimitsError.js";
import type { OntologyEntityLimitsError } from "./OntologyEntityLimitsError.js";
import type { TypeClassLimitsError } from "./TypeClassLimitsError.js";
export interface OntologyLimitsError_ontologyEntityLimits {
  type: "ontologyEntityLimits";
  ontologyEntityLimits: OntologyEntityLimitsError;
}

export interface OntologyLimitsError_objectTypeLimits {
  type: "objectTypeLimits";
  objectTypeLimits: ObjectTypeLimitsError;
}

export interface OntologyLimitsError_actionTypeLimits {
  type: "actionTypeLimits";
  actionTypeLimits: ActionTypeLimitsError;
}

export interface OntologyLimitsError_typeClassLimits {
  type: "typeClassLimits";
  typeClassLimits: TypeClassLimitsError;
}

export interface OntologyLimitsError_aliasLimits {
  type: "aliasLimits";
  aliasLimits: AliasLimitsError;
}

export interface OntologyLimitsError_displayMetadataLimits {
  type: "displayMetadataLimits";
  displayMetadataLimits: DisplayMetadataLimitsError;
}
export type OntologyLimitsError =
  | OntologyLimitsError_ontologyEntityLimits
  | OntologyLimitsError_objectTypeLimits
  | OntologyLimitsError_actionTypeLimits
  | OntologyLimitsError_typeClassLimits
  | OntologyLimitsError_aliasLimits
  | OntologyLimitsError_displayMetadataLimits;
