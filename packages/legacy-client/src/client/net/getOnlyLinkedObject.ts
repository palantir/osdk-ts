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

import type { OntologyDefinition } from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import type { OntologyObject, ParameterValue } from "../baseTypes/index.js";
import type {
  GetLinkedObjectError,
  LinkedObjectNotFound,
} from "../errors/index.js";
import { isErr, type Result } from "../Result.js";
import { listLinkedObjects } from "./listLinkedObjects.js";
import { createErrorResponse } from "./util/ResponseCreators.js";

/**
 * Wrapper around listLinkedObjects that validates that only a single object was found
 */
export async function getOnlyLinkedObject<
  T extends OntologyObject = OntologyObject,
>(
  client: ClientContext<OntologyDefinition<any>>,
  sourceObjectType: string,
  sourcePrimaryKey: NonNullable<ParameterValue>,
  targetLinkType: string,
): Promise<Result<T, GetLinkedObjectError>> {
  const result = await listLinkedObjects<T>(
    client,
    sourceObjectType,
    sourcePrimaryKey,
    targetLinkType,
  );

  if (isErr(result)) {
    return result;
  }

  if (result.type == "ok" && result.value.length > 1) {
    return createErrorResponse(
      {
        name: "Too many objects",
        message:
          `There are multiple ${targetLinkType} objects for this object, but there should only be one`,
        errorName: "LinkedObjectNotFound",
        errorType: "NOT_FOUND",
        linkType: targetLinkType,
        linkedObjectType: sourceObjectType,
        linkedObjectPrimaryKey: {
          primaryKey: sourcePrimaryKey.toString(),
        },
      } satisfies LinkedObjectNotFound,
    );
  }

  if (result.type == "ok" && result.value.length != 1) {
    return createErrorResponse(
      {
        name: "Object not found",
        message: "Expected to receive a single object but received none",
        errorType: "NOT_FOUND",
        errorName: "LinkedObjectNotFound",
        linkType: targetLinkType,
        linkedObjectType: sourceObjectType,
        linkedObjectPrimaryKey: {
          primaryKey: sourcePrimaryKey.toString(),
        },
      } satisfies LinkedObjectNotFound,
    );
  }

  return { type: "ok", value: result.value[0] };
}
