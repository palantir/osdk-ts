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

import type { ConflictingPropertyImplementationError } from "./ConflictingPropertyImplementationError.js";
import type { ImplicitAndExplicitPropertyImplementationError } from "./ImplicitAndExplicitPropertyImplementationError.js";
import type { InvalidPropertyImplementationError } from "./InvalidPropertyImplementationError.js";
import type { LocalAndSharedPropertyTypesConflictingApiNamesError } from "./LocalAndSharedPropertyTypesConflictingApiNamesError.js";
import type { MissingSharedPropertyError } from "./MissingSharedPropertyError.js";
export interface InterfaceImplementationError_missingSharedProperty {
  type: "missingSharedProperty";
  missingSharedProperty: MissingSharedPropertyError;
}

export interface InterfaceImplementationError_invalidPropertyImplementation {
  type: "invalidPropertyImplementation";
  invalidPropertyImplementation: InvalidPropertyImplementationError;
}

export interface InterfaceImplementationError_conflictingPropertyImplementation {
  type: "conflictingPropertyImplementation";
  conflictingPropertyImplementation: ConflictingPropertyImplementationError;
}

export interface InterfaceImplementationError_implicitAndExplicitPropertyImplementation {
  type: "implicitAndExplicitPropertyImplementation";
  implicitAndExplicitPropertyImplementation:
    ImplicitAndExplicitPropertyImplementationError;
}

export interface InterfaceImplementationError_localAndSharedPropertyTypesConflictingApiNames {
  type: "localAndSharedPropertyTypesConflictingApiNames";
  localAndSharedPropertyTypesConflictingApiNames:
    LocalAndSharedPropertyTypesConflictingApiNamesError;
}
/**
 * A type representing validation errors associated with interface implementations. Since we only validate on
 * branches, we use RIDs instead of the ID/RID union.
 */
export type InterfaceImplementationError =
  | InterfaceImplementationError_missingSharedProperty
  | InterfaceImplementationError_invalidPropertyImplementation
  | InterfaceImplementationError_conflictingPropertyImplementation
  | InterfaceImplementationError_implicitAndExplicitPropertyImplementation
  | InterfaceImplementationError_localAndSharedPropertyTypesConflictingApiNames;
