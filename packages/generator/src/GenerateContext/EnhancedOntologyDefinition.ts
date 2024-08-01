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
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedAction } from "./EnhancedAction.js";
import { EnhancedInterfaceType } from "./EnhancedInterfaceType.js";
import { EnhancedObjectType } from "./EnhancedObjectType.js";
import { EnhancedQuery } from "./EnhancedQuery.js";
import { EnhancedSharedPropertyType } from "./EnhancedSharedPropertyType.js";

export class EnhancedOntologyDefinition {
  ontology: OntologyV2;
  objectTypes: Record<string, EnhancedObjectType>;
  actionTypes: Record<ActionTypeApiName, EnhancedAction>;
  queryTypes: Record<QueryApiName, EnhancedQuery>;
  interfaceTypes: Record<InterfaceTypeApiName, EnhancedInterfaceType>;
  sharedPropertyTypes: Record<
    SharedPropertyTypeApiName,
    EnhancedSharedPropertyType
  >;

  og: WireOntologyDefinition;

  constructor(
    sanitized: WireOntologyDefinition,
    ontologyApiNamespace: string | undefined,
    apiNamespacePackageMap: Map<string, string>,
    importExt: string,
  ) {
    const common = {
      apiNamespacePackageMap,
      enhancedOntology: this,
      importExt,
      ontologyApiNamespace,
    };
    this.og = sanitized;
    this.ontology = sanitized.ontology;
    this.objectTypes = remap(sanitized.objectTypes, common, EnhancedObjectType);
    this.actionTypes = remap(sanitized.actionTypes, common, EnhancedAction);
    this.queryTypes = remap(sanitized.queryTypes, common, EnhancedQuery);
    this.interfaceTypes = remap(
      sanitized.interfaceTypes,
      common,
      EnhancedInterfaceType,
    );
    this.sharedPropertyTypes = remap(
      sanitized.sharedPropertyTypes,
      common,
      EnhancedSharedPropertyType,
    );
  }

  #createRequireType = <K extends "objectTypes" | "actionTypes">(
    key: K & keyof this,
  ) => {
    return (fullApiName: string): this[K][string] => {
      const ret = this[key][fullApiName];
      if (!ret) {
        throw new Error(`Unable to find ${key} '${fullApiName}`);
      }
      return ret as this[K][string];
    };
  };

  public requireObjectType = this.#createRequireType("objectTypes");
}
function remap<T, X>(
  r: Record<string, T>,
  common: EnhanceCommon,
  Constructor: { new(common: EnhanceCommon, og: T): X },
): Record<string, X> {
  return Object.fromEntries(
    Object.entries(r ?? {}).map(([fullApiName, v]) => {
      return [
        fullApiName,
        new Constructor(common, v),
      ] as const;
    }).sort((a, b) => a[0].localeCompare(b[0])),
  );
}
