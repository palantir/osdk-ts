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

import * as path from "node:path";
export class AbstractImportable {
  /**
   * Either a path relative to the ourDir (e.g. "./ontology/objects/foo.js") or a normal
   * module import (e.g. "@something/foo")/
   */

  constructor(common, fullApiName, basePath, isLocal = true) {
    this._common = common;
    this.fullApiName = fullApiName;
    [this.apiNamespace, this.shortApiName] = extractNamespace(this.fullApiName);
    const {
      importExt
    } = common;
    this.importPath = isLocal ? `${basePath}/${this.shortApiName}${importExt}` : basePath;
    this.uniqueImportName = this.shortApiName;
  }
  getImportPathRelTo = filePath => {
    if (this.importPath.startsWith(".")) {
      const result = path.relative(path.dirname(filePath), this.importPath).split(path.sep).join("/");
      if (result.startsWith(".")) {
        return result;
      } else {
        return `./${result}`;
      }
    } else {
      return this.importPath;
    }
  };
}
export class EnhancedBase extends AbstractImportable {
  constructor(common, raw, fullApiName, basePath) {
    super(common, fullApiName, basePath);
    this.raw = raw;
  }
}
export function extractNamespace(fqApiName) {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}
//# sourceMappingURL=EnhancedBase.js.map