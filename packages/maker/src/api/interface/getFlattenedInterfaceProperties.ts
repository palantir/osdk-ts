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

import {
  type InterfacePropertyType,
  isInterfaceSharedPropertyType,
} from "./InterfacePropertyType.js";
import type { InterfaceType } from "./InterfaceType.js";

export function getFlattenedInterfaceProperties(
  interfaceType: InterfaceType,
): Record<string, InterfacePropertyType> {
  let properties: Record<string, InterfacePropertyType> = Object.fromEntries(
    Object.entries(interfaceType.propertiesV3).map(([key, value]) => [
      isInterfaceSharedPropertyType(value)
        ? value.sharedPropertyType.apiName
        : key,
      value,
    ]),
  );
  Object.entries(interfaceType.propertiesV2).forEach(([apiName, spt]) => {
    if (!(apiName in properties)) {
      properties[apiName] = spt;
    }
  });
  interfaceType.extendsInterfaces.forEach(ext => {
    properties = {
      ...getFlattenedInterfaceProperties(ext),
      ...properties,
    };
  });
  return properties;
}
