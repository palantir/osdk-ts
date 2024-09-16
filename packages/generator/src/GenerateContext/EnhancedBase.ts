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
import type { EnhanceCommon } from "./EnhanceCommon.js";

export abstract class AbstractImportable {
  protected _common: EnhanceCommon;

  shortApiName: string;
  fullApiName: string;
  apiNamespace: string | undefined;

  /**
   * Either a path relative to the ourDir (e.g. "./ontology/objects/foo.js") or a normal
   * module import (e.g. "@something/foo")/
   */
  importPath: string;
  uniqueImportName: string;

  readonly isLocal: boolean;

  constructor(
    common: EnhanceCommon,
    fullApiName: string,
    basePath: string,
    isLocal: boolean = true,
  ) {
    this._common = common;
    this.fullApiName = fullApiName;

    [this.apiNamespace, this.shortApiName] = extractNamespace(
      this.fullApiName,
    );

    const { importExt } = common;
    this.isLocal = isLocal;

    this.importPath = this.isLocal
      ? `${basePath}/${this.shortApiName}${importExt}`
      : basePath;
    this.uniqueImportName = this.shortApiName;
  }

  getImportPathRelTo = (filePath: string) => {
    if (this.importPath.startsWith(".")) {
      const result = path.relative(path.dirname(filePath), this.importPath)
        .split(path.sep).join("/");

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

export abstract class EnhancedBase<T> extends AbstractImportable {
  raw: T;

  constructor(
    common: EnhanceCommon,
    raw: T,
    fullApiName: string,
    basePath: string,
  ) {
    super(common, fullApiName, basePath);
    this.raw = raw;

    // if (this.apiNamespace !== common.ontologyApiNamespace) {
    //   throw new Error(
    //     `Found type { ns:'${this.apiNamespace}', shortName: '${this.shortApiName}'} but it is not in the generation namespace '${this._common.ontologyApiNamespace}'. This violates the contract of the generator.`,
    //   );
    // }
  }
}

export function extractNamespace(
  fqApiName: string,
): [string | undefined, string] {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}
