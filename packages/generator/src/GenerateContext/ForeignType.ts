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
    public readonly type: string,
    apiNamespace: string,
    shortApiName: string,
  ) {
    super(
      _common,
      `${apiNamespace}.${shortApiName}`,
      _common.apiNamespacePackageMap.get(apiNamespace)!,
    );
  }

  getImportedDefinitionIdentifier(v2: boolean) {
    return `$Imported$${this.type}$${
      this.apiNamespace!.replace(/\./g, "$")
    }$${this.shortApiName}`;
  }

  getDefinitionIdentifier(v2: boolean) {
    if (this.type === "objectTypes") {
      return v2 ? this.uniqueImportName : `${this.uniqueImportName}Def`;
    } else {
      return this.uniqueImportName;
    }
  }
}
