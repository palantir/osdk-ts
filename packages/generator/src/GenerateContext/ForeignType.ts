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

import type { EnhanceCommon } from "./EnhanceCommon.js";
import { AbstractImportable } from "./EnhancedBase.js";

export class ForeignType extends AbstractImportable {
  constructor(
    public _common: EnhanceCommon,
    apiNamespace: string | undefined,
    shortApiName: string,
    destinationPackage: string,
  ) {
    super(
      _common,
      apiNamespace ? `${apiNamespace}.${shortApiName}` : shortApiName,
      destinationPackage,
      false,
    );
  }

  getImportedDefinitionIdentifier(v2: boolean) {
    return `$Imported$${
      this.apiNamespace?.replace(/\./g, "$")
    }$${this.shortApiName}`;
  }

  getDefinitionIdentifier(v2: boolean) {
    return this.uniqueImportName;
  }
}
