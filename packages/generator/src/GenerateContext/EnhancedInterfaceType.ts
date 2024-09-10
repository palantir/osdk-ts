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

import type { InterfaceDefinition } from "@osdk/api";
import type { InterfaceType, SharedPropertyType } from "@osdk/gateway/types";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition } from "@osdk/generator-converters";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";

export class EnhancedInterfaceType extends EnhancedBase<InterfaceType> {
  constructor(common: EnhanceCommon, public og: InterfaceType) {
    super(common, og, og.apiName, "./ontology/interfaces");
  }

  getDefinitionIdentifier(v2: boolean) {
    return v2 ? this.shortApiName : `${this.shortApiName}Def`;
  }

  getImportedDefinitionIdentifier(v2: boolean) {
    return this.getDefinitionIdentifier(v2);
  }

  get properties() {
    return this.og.properties;
  }

  getCleanedUpDefinition(v2: boolean): InterfaceDefinition<any, any> {
    return deleteUndefineds(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
        this.og,
        v2,
      ),
    );
  }
}
