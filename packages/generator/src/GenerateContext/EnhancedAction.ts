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

import type { ActionTypeV2 } from "@osdk/gateway/types";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";

export class EnhancedAction extends EnhancedBase<ActionTypeV2> {
  constructor(common: EnhanceCommon, public og: ActionTypeV2) {
    super(common, og, og.apiName, "./ontology/actions");
  }

  get description() {
    return this.og.description;
  }

  get parameters() {
    return this.og.parameters;
  }

  get operations() {
    return this.og.operations;
  }

  get paramsIdentifier() {
    return `ActionParams$${this.shortApiName}`;
  }

  get actionDefIdentifier() {
    return `ActionDef$${this.shortApiName}`;
  }

  get actionDefParamsIdentifier() {
    return `${this.actionDefIdentifier}$Params`;
  }
}
