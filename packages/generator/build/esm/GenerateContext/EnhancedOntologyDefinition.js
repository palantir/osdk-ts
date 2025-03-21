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

import { EnhancedAction } from "./EnhancedAction.js";
import { extractNamespace } from "./EnhancedBase.js";
import { EnhancedInterfaceType } from "./EnhancedInterfaceType.js";
import { EnhancedObjectType } from "./EnhancedObjectType.js";
import { EnhancedQuery } from "./EnhancedQuery.js";
import { EnhancedSharedPropertyType } from "./EnhancedSharedPropertyType.js";
import { ForeignType } from "./ForeignType.js";
export class EnhancedOntologyDefinition {
  #foreignTypes = {};
  constructor(raw, importExt, externalObjects, externalInterfaces, externalSpts) {
    this.common = {
      enhancedOntology: this,
      importExt
    };
    this.raw = raw;
    this.ontology = raw.ontology;
    this.objectTypes = remap(raw.objectTypes, this.common, EnhancedObjectType, externalObjects);
    this.actionTypes = remap(raw.actionTypes, this.common, EnhancedAction);
    this.queryTypes = remap(raw.queryTypes, this.common, EnhancedQuery);
    this.interfaceTypes = remap(raw.interfaceTypes, this.common, EnhancedInterfaceType, externalInterfaces);
    this.sharedPropertyTypes = remap(raw.sharedPropertyTypes, this.common, EnhancedSharedPropertyType, externalSpts);
  }
  #createRequireType = type => {
    return fullApiName => {
      const ret = this[type][fullApiName];
      if (!ret) {
        const [apiNamespace, shortApiName] = extractNamespace(fullApiName);
        throw new Error(`Unable to find ${type}: No entry for '${fullApiName}`);
      }
      return ret;
    };
  };
  requireObjectType = this.#createRequireType("objectTypes");
  requireInterfaceType = this.#createRequireType("interfaceTypes");
  requireActionType = this.#createRequireType("actionTypes");
  requireQueryType = this.#createRequireType("queryTypes");
  requireSharedPropertyType = this.#createRequireType("sharedPropertyTypes");
}
function remap(r, common, Constructor, externalMap) {
  const entries = [];
  for (const [fullApiName, v] of Object.entries(r ?? {})) {
    if (!externalMap?.has(fullApiName)) {
      entries.push([fullApiName, new Constructor(common, v)]);
    } // skip it, we handle it below
  }
  if (externalMap) {
    for (const [fullApiName, destPackage] of externalMap) {
      const [apiNamespace, shortApiName] = extractNamespace(fullApiName);
      // I think this check should be required but the ontology manager / dev console doesn't enforce it right now
      // if (apiNamespace === undefined) {
      //   throw new Error(
      //     `Cannot reference an external type (${fullApiName}) that is missing a namespace`,
      //   );
      // }
      entries.push([fullApiName, new ForeignType(common, apiNamespace, shortApiName, destPackage)]);
    }
  }
  return Object.fromEntries(entries.sort((a, b) => a[0].localeCompare(b[0])));
}
//# sourceMappingURL=EnhancedOntologyDefinition.js.map