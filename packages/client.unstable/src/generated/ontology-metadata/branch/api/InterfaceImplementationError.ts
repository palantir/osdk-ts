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

import type { ConflictingPropertyImplementationError } from "./ConflictingPropertyImplementationError.js";
import type { ImplicitAndExplicitPropertyImplementationError } from "./ImplicitAndExplicitPropertyImplementationError.js";
import type { InterfaceLinkNotFoundError } from "./InterfaceLinkNotFoundError.js";
import type { InterfaceLinkTypeImplementedTooOftenError } from "./InterfaceLinkTypeImplementedTooOftenError.js";
import type { InvalidCardinalityImplementingInterfaceLinkTypeError } from "./InvalidCardinalityImplementingInterfaceLinkTypeError.js";
import type { InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError } from "./InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError.js";
import type { InvalidLinkedEntityImplementingInterfaceLinkTypeError } from "./InvalidLinkedEntityImplementingInterfaceLinkTypeError.js";
import type { InvalidPropertyImplementationError } from "./InvalidPropertyImplementationError.js";
import type { LocalAndSharedPropertyTypesConflictingApiNamesError } from "./LocalAndSharedPropertyTypesConflictingApiNamesError.js";
import type { MissingSharedPropertyError } from "./MissingSharedPropertyError.js";
import type { ObjectTypeImplementsTooManyInterfacesError } from "./ObjectTypeImplementsTooManyInterfacesError.js";
import type { RequiredInterfaceLinkTypeNotImplementedError } from "./RequiredInterfaceLinkTypeNotImplementedError.js";
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

export interface InterfaceImplementationError_interfaceLinkNotFound {
  type: "interfaceLinkNotFound";
  interfaceLinkNotFound: InterfaceLinkNotFoundError;
}

export interface InterfaceImplementationError_invalidConflictingDefinitionsImplementingInterfaceLinkType {
  type: "invalidConflictingDefinitionsImplementingInterfaceLinkType";
  invalidConflictingDefinitionsImplementingInterfaceLinkType:
    InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError;
}

export interface InterfaceImplementationError_requiredInterfaceLinkTypeNotImplemented {
  type: "requiredInterfaceLinkTypeNotImplemented";
  requiredInterfaceLinkTypeNotImplemented:
    RequiredInterfaceLinkTypeNotImplementedError;
}

export interface InterfaceImplementationError_interfaceLinkTypeImplementedTooOften {
  type: "interfaceLinkTypeImplementedTooOften";
  interfaceLinkTypeImplementedTooOften:
    InterfaceLinkTypeImplementedTooOftenError;
}

export interface InterfaceImplementationError_invalidCardinalityImplementingInterfaceLinkType {
  type: "invalidCardinalityImplementingInterfaceLinkType";
  invalidCardinalityImplementingInterfaceLinkType:
    InvalidCardinalityImplementingInterfaceLinkTypeError;
}

export interface InterfaceImplementationError_invalidLinkedEntityImplementingInterfaceLinkType {
  type: "invalidLinkedEntityImplementingInterfaceLinkType";
  invalidLinkedEntityImplementingInterfaceLinkType:
    InvalidLinkedEntityImplementingInterfaceLinkTypeError;
}

export interface InterfaceImplementationError_objectTypeImplementsTooManyInterfacesError {
  type: "objectTypeImplementsTooManyInterfacesError";
  objectTypeImplementsTooManyInterfacesError:
    ObjectTypeImplementsTooManyInterfacesError;
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
  | InterfaceImplementationError_localAndSharedPropertyTypesConflictingApiNames
  | InterfaceImplementationError_interfaceLinkNotFound
  | InterfaceImplementationError_invalidConflictingDefinitionsImplementingInterfaceLinkType
  | InterfaceImplementationError_requiredInterfaceLinkTypeNotImplemented
  | InterfaceImplementationError_interfaceLinkTypeImplementedTooOften
  | InterfaceImplementationError_invalidCardinalityImplementingInterfaceLinkType
  | InterfaceImplementationError_invalidLinkedEntityImplementingInterfaceLinkType
  | InterfaceImplementationError_objectTypeImplementsTooManyInterfacesError;
