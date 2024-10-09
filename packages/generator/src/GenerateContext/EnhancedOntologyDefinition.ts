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

import type { OntologyV2 } from "@osdk/internal.foundry.core";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedAction } from "./EnhancedAction.js";
import { extractNamespace } from "./EnhancedBase.js";
import { EnhancedInterfaceType } from "./EnhancedInterfaceType.js";
import { EnhancedObjectType } from "./EnhancedObjectType.js";
import { EnhancedQuery } from "./EnhancedQuery.js";
import { EnhancedSharedPropertyType } from "./EnhancedSharedPropertyType.js";
import { ForeignType } from "./ForeignType.js";

export class EnhancedOntologyDefinition {
  ontology: OntologyV2;
  objectTypes: Record<string, EnhancedObjectType | ForeignType>;
  actionTypes: Record<string, EnhancedAction>;
  queryTypes: Record<string, EnhancedQuery>;
  interfaceTypes: Record<
    string,
    EnhancedInterfaceType | ForeignType
  >;
  sharedPropertyTypes: Record<
    string,
    EnhancedSharedPropertyType | ForeignType
  >;
  #foreignTypes: Record<string, ForeignType> = {};

  raw: WireOntologyDefinition;
  common: EnhanceCommon;

  constructor(
    raw: WireOntologyDefinition,
    importExt: string,
    externalObjects?: Map<string, string>,
    externalInterfaces?: Map<string, string>,
    externalSpts?: Map<string, string>,
  ) {
    this.common = {
      enhancedOntology: this,
      importExt,
    };
    this.raw = raw;
    this.ontology = raw.ontology;
    this.objectTypes = remap(
      raw.objectTypes,
      this.common,
      EnhancedObjectType,
      externalObjects,
    );
    this.actionTypes = remap(
      raw.actionTypes,
      this.common,
      EnhancedAction,
    );
    this.queryTypes = remap(
      raw.queryTypes,
      this.common,
      EnhancedQuery,
    );
    this.interfaceTypes = remap(
      raw.interfaceTypes,
      this.common,
      EnhancedInterfaceType,
      externalInterfaces,
    );
    this.sharedPropertyTypes = remap(
      raw.sharedPropertyTypes,
      this.common,
      EnhancedSharedPropertyType,
      externalSpts,
    );
  }

  #createRequireType = <
    K extends
      | "objectTypes"
      | "actionTypes"
      | "interfaceTypes"
      | "queryTypes"
      | "sharedPropertyTypes",
  >(
    type: K & keyof this,
  ) => {
    return <L extends boolean = false>(
      fullApiName: string,
      localOnly?: L,
    ): L extends true ? this[K][string] : ForeignType => {
      const ret = this[type][fullApiName];
      if (!ret) {
        const [apiNamespace, shortApiName] = extractNamespace(fullApiName);

        throw new Error(
          `Unable to find ${type}: No entry for '${fullApiName}`,
        );
      }
      return ret as this[K][string] as L extends true ? this[K][string]
        : ForeignType;
    };
  };

  public requireObjectType = this.#createRequireType("objectTypes");
  public requireInterfaceType = this.#createRequireType("interfaceTypes");
  public requireActionType = this.#createRequireType("actionTypes");
  public requireQueryType = this.#createRequireType("queryTypes");
  public requireSharedPropertyType = this.#createRequireType(
    "sharedPropertyTypes",
  );
}

function remap<T, X>(
  r: Record<string, T>,
  common: EnhanceCommon,
  Constructor: { new(common: EnhanceCommon, og: T): X },
): Record<string, X>;
function remap<T, X>(
  r: Record<string, T>,
  common: EnhanceCommon,
  Constructor: { new(common: EnhanceCommon, original: T): X },
  externalMap?: Map<string, string>,
): Record<string, X | ForeignType>;
function remap<T, X, const Q extends Map<string, string> | undefined>(
  r: Record<string, T>,
  common: EnhanceCommon,
  Constructor: { new(common: EnhanceCommon, og: T): X },
  externalMap?: Q,
): Record<string, X | ForeignType> {
  const entries: [string, X | ForeignType][] = [];

  for (const [fullApiName, v] of Object.entries(r ?? {})) {
    if (externalMap?.has(fullApiName)) {
      // skip it, we handle it below
    } else {
      entries.push([fullApiName, new Constructor(common, v)]);
    }
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
      entries.push([
        fullApiName,
        new ForeignType(
          common,
          apiNamespace,
          shortApiName,
          destPackage,
        ),
      ]);
    }
  }

  return Object.fromEntries(
    entries.sort((a, b) => a[0].localeCompare(b[0])),
  );
}
