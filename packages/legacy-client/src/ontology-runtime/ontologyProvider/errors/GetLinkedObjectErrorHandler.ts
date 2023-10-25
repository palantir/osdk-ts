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

import type { ValueType } from "@osdk/gateway/types";
import type { PalantirApiError } from "../../../Errors";
import type {
  CompositePrimaryKeyNotSupported,
  LinkedObjectNotFound,
  ObjectTypeNotFound,
  ObjectTypeNotSynced,
  OntologySyncing,
  PermissionDenied,
  PropertiesNotFound,
  PropertiesNotSortable,
  Unauthorized,
  UnknownError,
} from "../Errors";
export class GetLinkedObjectErrorHandler {
  handleObjectTypeNotFound(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): ObjectTypeNotFound {
    throw new Error("not implemented");
  }

  handleObjectTypeNotSynced(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): ObjectTypeNotSynced {
    throw new Error("not implemented");
  }

  handleCompositePrimaryKeyNotSupported(
    error: PalantirApiError,
    objectTypeApiName: string,
    primaryKey: string[],
  ): CompositePrimaryKeyNotSupported {
    throw new Error("not implemented");
  }

  handlePropertiesNotSortable(
    error: PalantirApiError,
    properties: string[],
  ): PropertiesNotSortable {
    throw new Error("not implemented");
  }

  handleOntologySyncing(
    error: PalantirApiError,
    objectTypeApiName: string,
  ): OntologySyncing {
    throw new Error("not implemented");
  }

  handleLinkedObjectNotFound(
    error: PalantirApiError,
    linkType: string,
    linkedObjectType: string,
    linkedObjectPrimaryKey: {
      [key: string]: string;
    },
  ): LinkedObjectNotFound {
    throw new Error("not implemented");
  }

  handlePropertiesNotFound(
    error: PalantirApiError,
    properties: any,
  ): PropertiesNotFound {
    throw new Error("not implemented");
  }

  handlePermissionDenied(error: PalantirApiError): PermissionDenied {
    throw new Error("not implemented");
  }

  handleUnauthorized(error: PalantirApiError): Unauthorized {
    throw new Error("not implemented");
  }

  handleUnknownError(error: PalantirApiError): UnknownError {
    throw new Error("not implemented");
  }
}
