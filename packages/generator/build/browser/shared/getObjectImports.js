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

export function getObjectImports(objects, curApiName, currentFilePath, v2) {
  return Array.from(objects).filter(obj => obj.fullApiName !== curApiName).map(obj => {
    const defId = obj.getDefinitionIdentifier(v2);
    const importedId = obj.getImportedDefinitionIdentifier(v2);
    const nameOrAlias = defId === importedId ? defId : `${defId} as ${importedId}`;
    return `import type { ${nameOrAlias} } from "${obj.getImportPathRelTo("./" + currentFilePath)}";`;
  }).join("\n");
}
//# sourceMappingURL=getObjectImports.js.map