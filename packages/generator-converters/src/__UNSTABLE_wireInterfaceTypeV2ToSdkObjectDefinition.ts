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

import type { InterfaceMetadata } from "@osdk/api";
import type { InterfaceType } from "@osdk/internal.foundry.core";
import { wirePropertyV2ToSdkPropertyDefinition } from "./wirePropertyV2ToSdkPropertyDefinition.js";

export function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
  interfaceType: InterfaceType,
  v2: boolean,
): InterfaceMetadata {
  return {
    type: "interface",
    rid: interfaceType.rid,
    apiName: interfaceType.apiName,
    displayName: interfaceType.displayName,
    description: interfaceType.description,
    implements: interfaceType.extendsInterfaces,
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
    links: {},
  };
}
