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

import type { GothamObjectTypeUnavailableHasTypeGroups } from "./GothamObjectTypeUnavailableHasTypeGroups.js";
import type { GothamObjectTypeUnavailableInTransfer } from "./GothamObjectTypeUnavailableInTransfer.js";
import type { GothamObjectTypeUnavailableIsCoreType } from "./GothamObjectTypeUnavailableIsCoreType.js";
import type { GothamObjectTypeUnavailableIsNotUnrestricted } from "./GothamObjectTypeUnavailableIsNotUnrestricted.js";
import type { GothamObjectTypeUnavailableLabelPropertyCannotBeImported } from "./GothamObjectTypeUnavailableLabelPropertyCannotBeImported.js";
import type { GothamObjectTypeUnavailableMissingSharedPropertyType } from "./GothamObjectTypeUnavailableMissingSharedPropertyType.js";
import type { GothamObjectTypeUnavailableSpecifiedLabelPropertyTypeNotFound } from "./GothamObjectTypeUnavailableSpecifiedLabelPropertyTypeNotFound.js";
import type { ObjectTypeHasUnavailableRepresentativePropertyTypes } from "./ObjectTypeHasUnavailableRepresentativePropertyTypes.js";
export interface UnavailableGothamObjectTypeCause_objectTypeHasUnavailableRepresentativePropertyTypes {
  type: "objectTypeHasUnavailableRepresentativePropertyTypes";
  objectTypeHasUnavailableRepresentativePropertyTypes:
    ObjectTypeHasUnavailableRepresentativePropertyTypes;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableInTransfer {
  type: "objectTypeUnavailableInTransfer";
  objectTypeUnavailableInTransfer: GothamObjectTypeUnavailableInTransfer;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableIsCoreType {
  type: "objectTypeUnavailableIsCoreType";
  objectTypeUnavailableIsCoreType: GothamObjectTypeUnavailableIsCoreType;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableLabelPropertyCannotBeImported {
  type: "objectTypeUnavailableLabelPropertyCannotBeImported";
  objectTypeUnavailableLabelPropertyCannotBeImported:
    GothamObjectTypeUnavailableLabelPropertyCannotBeImported;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound {
  type: "objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound";
  objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound:
    GothamObjectTypeUnavailableSpecifiedLabelPropertyTypeNotFound;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableHasTypeGroups {
  type: "objectTypeUnavailableHasTypeGroups";
  objectTypeUnavailableHasTypeGroups: GothamObjectTypeUnavailableHasTypeGroups;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableIsNotUnrestricted {
  type: "objectTypeUnavailableIsNotUnrestricted";
  objectTypeUnavailableIsNotUnrestricted:
    GothamObjectTypeUnavailableIsNotUnrestricted;
}

export interface UnavailableGothamObjectTypeCause_objectTypeUnavailableMissingSharedPropertyType {
  type: "objectTypeUnavailableMissingSharedPropertyType";
  objectTypeUnavailableMissingSharedPropertyType:
    GothamObjectTypeUnavailableMissingSharedPropertyType;
}
export type UnavailableGothamObjectTypeCause =
  | UnavailableGothamObjectTypeCause_objectTypeHasUnavailableRepresentativePropertyTypes
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableInTransfer
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableIsCoreType
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableLabelPropertyCannotBeImported
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableSpecifiedLabelPropertyTypeNotFound
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableHasTypeGroups
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableIsNotUnrestricted
  | UnavailableGothamObjectTypeCause_objectTypeUnavailableMissingSharedPropertyType;
