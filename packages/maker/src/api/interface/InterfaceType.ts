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

import type {
  InterfaceTypeStatus,
  OntologyIrMarketplaceInterfaceType,
} from "@osdk/client.unstable";
import type { OntologyEntityBase } from "../common/OntologyEntityBase.js";
import type { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type {
  InterfacePropertyType,
  InterfaceSharedPropertyType,
} from "./InterfacePropertyType.js";

export interface InterfaceType extends
  OntologyEntityBase,
  Omit<
    OntologyIrMarketplaceInterfaceType,
    // we want our simplified representation
    | "properties"
    // these things don't need to exist as the system works fine without them (I'm told)
    | "propertiesV2"
    | "propertiesV3"
    | "extendsInterfaces"
  >
{
  propertiesV2: Record<string, InterfaceSharedPropertyType>;
  propertiesV3: Record<string, InterfacePropertyType>;
  extendsInterfaces: Array<InterfaceType>;
  status: InterfaceTypeStatus;
  __type: OntologyEntityTypeEnum.INTERFACE_TYPE;
}
