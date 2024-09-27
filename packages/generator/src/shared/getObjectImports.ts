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

import type { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import type { ForeignType } from "../GenerateContext/ForeignType.js";

export function getObjectImports(
  objects: Set<EnhancedObjectType | ForeignType>,
  curApiName: string | undefined,
  currentFilePath: string,
  v2: boolean,
) {
  return Array.from(objects).filter(obj => obj.fullApiName !== curApiName)
    .map(obj => {
      const defId = obj.getDefinitionIdentifier(v2);
      const importedId = obj.getImportedDefinitionIdentifier(v2);

      const nameOrAlias = defId === importedId
        ? defId
        : `${defId} as ${importedId}`;

      return `import type { ${nameOrAlias} } from "${
        obj.getImportPathRelTo("./" + currentFilePath)
      }";`;
    }).join("\n");
}
