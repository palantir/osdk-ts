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

import type { ObjectTypeWithLink } from "@osdk/gateway/types";
import { wireObjectTypeV2ToSdkObjectDefinition } from "./wireObjectTypeV2ToSdkObjectDefinition.js";

/** @internal */
export function wireObjectTypeV2ToSdkObjectConst(
  object: ObjectTypeWithLink,
  v2: boolean = false,
) {
  const uniqueLinkTargetTypes = new Set(
    object.linkTypes.map(a => a.objectTypeApiName),
  );
  return `
    export const ${object.objectType.apiName} = ${
    JSON.stringify(
      wireObjectTypeV2ToSdkObjectDefinition(
        object,
        v2,
      ),
      null,
      2,
    )
  } satisfies ObjectTypeDefinition<"${object.objectType.apiName}", ${
    uniqueLinkTargetTypes.size > 0
      ? [...uniqueLinkTargetTypes].map(apiName => `"${apiName}"`).join(
        "|",
      )
      : "never"
  }>;`;
}
