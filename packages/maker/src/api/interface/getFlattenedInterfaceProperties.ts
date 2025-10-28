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

import type { InterfacePropertyType } from "./InterfacePropertyType.js";
import type { InterfaceType } from "./InterfaceType.js";

export function getFlattenedInterfaceProperties(
  interfaceType: InterfaceType,
): Record<string, InterfacePropertyType> {
  let properties = interfaceType.propertiesV2;
  interfaceType.extendsInterfaces.forEach(ext => {
    properties = { ...properties, ...getFlattenedInterfaceProperties(ext) };
  });
  return properties;
}
