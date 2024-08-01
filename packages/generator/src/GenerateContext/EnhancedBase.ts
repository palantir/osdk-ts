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

import type {
  ActionTypeApiName,
  InterfaceTypeApiName,
  OntologyV2,
  QueryApiName,
  SharedPropertyTypeApiName,
} from "@osdk/gateway/types";
import * as path from "node:path";
import type { MinimalFs } from "../MinimalFs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedAction } from "./EnhancedAction.js";
import { EnhancedInterfaceType } from "./EnhancedInterfaceType.js";
import { EnhancedObjectType } from "./EnhancedObjectType.js";
import { EnhancedQuery } from "./EnhancedQuery.js";
import { EnhancedSharedPropertyType } from "./EnhancedSharedPropertyType.js";

export abstract class EnhancedBase<T> {
  protected _common: EnhanceCommon;

  og: T;
  shortApiName: string;
  fullApiName: string;
  apiNamespace: string | undefined;

  /**
   * Either a path relative to the ourDir (e.g. "./ontology/objects/foo.js") or a normal
   * module import (e.g. "@something/foo")/
   */
  importPath: string;
  uniqueImportName: string;

  constructor(
    common: EnhanceCommon,
    og: T,
    fullApiName: string,
    basePath: string,
  ) {
    this._common = common;
    this.og = og;
    this.fullApiName = fullApiName;

    [this.apiNamespace, this.shortApiName] = extractNamespace(
      this.fullApiName,
    );

    const { ontologyApiNamespace, apiNamespacePackageMap, importExt } = common;

    const isLocal = ontologyApiNamespace === this.apiNamespace;
    const sourcePackage = this.apiNamespace
        && !isLocal
      ? apiNamespacePackageMap.get(this.apiNamespace)
      : undefined;
    if (!isLocal && !sourcePackage) {
      throw new Error(
        `Expected { ns:'${this.apiNamespace}', shortName: '${this.shortApiName}'} to be in namespace '${ontologyApiNamespace}' or in a provided package mapping`,
      );
    }

    this.importPath = isLocal
      ? `${basePath}/${this.shortApiName}${importExt}`
      : sourcePackage!;
    this.uniqueImportName = isLocal
      ? this.shortApiName
      : `$external$${this.fullApiName.replace(".", "$")}`;
  }

  getImportPathRelTo = (filePath: string) => {
    if (this.importPath.startsWith(".")) {
      const result = path.relative(path.dirname(filePath), this.importPath);

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

function extractNamespace(fqApiName: string): [string | undefined, string] {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}
