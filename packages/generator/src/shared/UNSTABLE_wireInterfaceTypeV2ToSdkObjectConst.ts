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

import type { InterfaceDefinition } from "@osdk/api";
import type { __UNSTABLE_InterfaceType } from "../WireOntologyDefinition";
import { wirePropertyV2ToSdkPropertyDefinition } from "./wirePropertyV2ToSdkPropertyDefinition";

/** @internal */
export function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
  interfaceType: __UNSTABLE_InterfaceType,
  v2: boolean = false,
) {
  return `
    export const ${interfaceType.apiName} = ${
    JSON.stringify(
      wireInterfaceTypeV2ToSdkObjectDefinition(
        interfaceType,
        v2,
      ),
      null,
      2,
    )
  } satisfies InterfaceDefinition<"${interfaceType.apiName}", "">;`;
}

function wireInterfaceTypeV2ToSdkObjectDefinition(
  interfaceType: __UNSTABLE_InterfaceType,
  v2: boolean,
): InterfaceDefinition<any, any> {
  return {
    apiName: interfaceType.apiName,
    description: interfaceType.description,
    properties: Object.fromEntries(
      Object.entries(interfaceType.properties).map((
        [key, value],
      ) => {
        return [
          key,
          wirePropertyV2ToSdkPropertyDefinition(
            value,
            true,
          ),
        ];
      }),
    ),
  };
}
