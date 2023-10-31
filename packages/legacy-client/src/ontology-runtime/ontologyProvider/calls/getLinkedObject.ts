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

import type { OntologyObject, ParameterValue } from "../..";
import type { GetLinkedObjectError, Result } from "..";
import { isErr } from "..";
import type { ClientContext } from "./ClientContext";
import { listLinkedObjects } from "./listLinkedObjects";
import { createErrorResponse } from "./util/ResponseCreators";

export async function getLinkedObject<
  T extends OntologyObject = OntologyObject,
>(
  context: ClientContext,
  sourceObjectType: string,
  sourcePrimaryKey: ParameterValue,
  targetObjectType: T["__apiName"],
): Promise<Result<T, GetLinkedObjectError>> {
  const result = await listLinkedObjects(
    context,
    sourceObjectType,
    sourcePrimaryKey,
    targetObjectType,
  );

  if (isErr(result)) {
    return result;
  }

  if (result.type == "ok" && result.value.length > 1) {
    return createErrorResponse(
      new Error(
        `There are multiple ${targetObjectType} objects for this object`,
      ),
    );
  }

  if (result.type == "ok" && result.value.length != 1) {
    return createErrorResponse(
      new Error(
        `There are no ${targetObjectType} objects for this object`,
      ),
    );
  }

  return { type: "ok", value: result.value[0] };
}
