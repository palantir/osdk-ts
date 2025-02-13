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

import type { QueryDataType, QueryTypeV2 } from "@osdk/foundry.ontologies";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";

export class EnhancedQuery extends EnhancedBase<QueryTypeV2> {
  constructor(common: EnhanceCommon, public raw: QueryTypeV2) {
    super(common, raw, raw.apiName, "./ontology/queries");
  }

  get description(): string | undefined {
    return this.raw.description;
  }

  get parameters(): QueryTypeV2["parameters"] {
    return this.raw.parameters;
  }

  get output(): QueryDataType {
    return this.raw.output;
  }

  get paramsIdentifier() {
    return `${this.shortApiName}.Parameters`;
  }

  get definitionIdentifier(): string {
    return this.shortApiName;
  }

  get definitionParamsIdentifier() {
    return `${this.definitionIdentifier}$Params`;
  }
}
