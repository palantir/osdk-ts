/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { type ObjectTypeDefinition } from "@osdk/api";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { ReadonlyDeep } from "type-fest";
import {
  ActionNotFoundError,
  LinkTypeNotFound,
  ObjectNotFoundError,
  ObjectTypeDoesNotExistError,
  QueryNotFoundError,
} from "../errors.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import type { FauxActionImpl } from "./FauxActionImpl.js";
import type { FauxQueryImpl } from "./FauxQueryImpl.js";
import type { TH_ObjectTypeFullMetadata } from "./typeHelpers/TH_ObjectTypeFullMetadata.js";

/**
 * Currently Unsupported Concepts:
 * - many:many links.
 */
export class FauxOntology {
  #ontology: OntologiesV2.OntologyFullMetadata;
  #actionImpl: Map<OntologiesV2.ActionTypeApiName, FauxActionImpl> = new Map();
  #queryImpl: Map<OntologiesV2.QueryApiName, FauxQueryImpl> = new Map();

  constructor(ontology: OntologiesV2.OntologyV2) {
    this.#ontology = {
      actionTypes: {},
      interfaceTypes: {},
      objectTypes: {},
      ontology,
      queryTypes: {},
      sharedPropertyTypes: {},
    };
  }

  get apiName(): OntologiesV2.OntologyApiName {
    return this.#ontology.ontology.apiName;
  }

  getOntologyFullMetadata(): OntologiesV2.OntologyFullMetadata {
    return this.#ontology;
  }

  getAllInterfaceTypes(): OntologiesV2.InterfaceType[] {
    return Object.values(this.#ontology.interfaceTypes);
  }

  getAllObjectTypes(): OntologiesV2.ObjectTypeFullMetadata[] {
    return Object.values(this.#ontology.objectTypes);
  }

  getAllActionTypes(): OntologiesV2.ActionTypeV2[] {
    return Object.values(this.#ontology.actionTypes);
  }

  getAllQueryTypes(): OntologiesV2.QueryTypeV2[] {
    return Object.values(this.#ontology.queryTypes);
  }

  getInterfaceType(interfaceType: string): OntologiesV2.InterfaceType {
    const ret = this.#ontology.interfaceTypes[interfaceType];

    if (ret === undefined) {
      throw new OpenApiCallError(
        404,
        ObjectNotFoundError(interfaceType, ""),
      );
    }

    return (
      this.#ontology.interfaceTypes[interfaceType]
    );
  }

  public getObjectTypeFullMetadata(
    objectTypeApiName: string,
  ): OntologiesV2.ObjectTypeFullMetadata | undefined {
    return this.#ontology.objectTypes[objectTypeApiName];
  }

  public getObjectTypeFullMetadataOrThrow(
    objectTypeApiName: string,
  ): OntologiesV2.ObjectTypeFullMetadata {
    const objectType = this.#ontology.objectTypes[objectTypeApiName];
    if (objectType === undefined) {
      throw new OpenApiCallError(
        404,
        ObjectTypeDoesNotExistError(objectTypeApiName),
      );
    }
    return objectType;
  }

  public getActionDef(actionTypeApiName: string): OntologiesV2.ActionTypeV2 {
    const actionType = this.#ontology.actionTypes[actionTypeApiName];
    if (actionType === undefined) {
      throw new OpenApiCallError(
        404,
        ActionNotFoundError(),
      );
    }
    return actionType;
  }

  public getActionImpl(actionTypeApiName: string): FauxActionImpl {
    const impl = this.#actionImpl.get(actionTypeApiName);
    invariant(impl, "Action implementation not found for " + actionTypeApiName);
    return impl;
  }

  public getQueryDef(queryTypeApiName: string): OntologiesV2.QueryTypeV2 {
    const queryType = this.#ontology.queryTypes[queryTypeApiName];
    if (queryType === undefined) {
      throw new OpenApiCallError(
        404,
        QueryNotFoundError(queryTypeApiName),
      );
    }
    return queryType;
  }

  public getQueryImpl(queryTypeApiName: string): FauxQueryImpl {
    const impl = this.#queryImpl.get(queryTypeApiName);
    if (!impl) {
      throw new OpenApiCallError(
        404,
        QueryNotFoundError(queryTypeApiName),
      );
    }
    invariant(impl, "Query implementation not found for " + queryTypeApiName);
    return impl;
  }

  public getInterfaceToObjectTypeMappings(
    objectApiNames: Iterable<OntologiesV2.ObjectTypeApiName>,
  ): Record<
    OntologiesV2.InterfaceTypeApiName,
    OntologiesV2.InterfaceToObjectTypeMappings
  > {
    const objectDefs = Array.from(objectApiNames).map(apiName =>
      this.getObjectTypeFullMetadataOrThrow(apiName)
    );

    const ifaceToObjMap: Record<
      OntologiesV2.InterfaceTypeApiName,
      OntologiesV2.InterfaceToObjectTypeMappings
    > = {};

    for (const objDef of objectDefs) {
      for (
        const [ifaceApiName, { properties }] of Object.entries(
          objDef.implementsInterfaces2,
        )
      ) {
        if (ifaceToObjMap[ifaceApiName] === undefined) {
          ifaceToObjMap[ifaceApiName] = {};
        }

        ifaceToObjMap[ifaceApiName][objDef.objectType.apiName] = properties;
      }
    }

    return ifaceToObjMap;
  }

  public getLinkTypeSideV2(
    objectTypeApiName: string,
    linkTypeName: string,
  ): OntologiesV2.LinkTypeSideV2 {
    const objectType = this.getObjectTypeFullMetadataOrThrow(objectTypeApiName);
    const linkType = objectType.linkTypes.find((a) =>
      a.apiName === linkTypeName
    );
    if (linkType === undefined) {
      throw new OpenApiCallError(
        404,
        LinkTypeNotFound(objectTypeApiName, linkTypeName),
      );
    }
    return linkType;
  }

  public getOtherLinkTypeSideV2OrThrow(
    objectTypeApiName: string,
    linkTypeName: string,
  ): OntologiesV2.LinkTypeSideV2 {
    const thisSideLink = this.getLinkTypeSideV2(
      objectTypeApiName,
      linkTypeName,
    );
    const otherObj = this.getObjectTypeFullMetadataOrThrow(
      thisSideLink.objectTypeApiName,
    );
    const candidates = otherObj.linkTypes.filter(l =>
      l.linkTypeRid === thisSideLink.linkTypeRid
    );
    if (otherObj.objectType.apiName !== objectTypeApiName) {
      // if its not the same object type then there should only be one
      invariant(
        candidates.length === 1,
        "Expected only one candidate link type",
      );
      return candidates[0];
    }
    // if its the same object type, then this could be a link that points to itself that
    // is 1:1, many:1 or many:many. In the 1:1 case, the link could have the same name
    // and there would only be 1 entry in that case. Otherwise there should be 2 entries
    // and we want the one that doesn't match the one passed in.
    if (candidates.length === 1) {
      return candidates[0];
    }
    invariant(
      candidates.length === 2,
      "Expected only two candidate link types",
    );
    const candidate = candidates.find(l => l.apiName !== thisSideLink.apiName);
    invariant(
      candidate,
      "Expected to find a candidate link type that is not the same as the one passed in",
    );
    return candidate;
  }

  getBothLinkTypeSides(
    leftObjectType: string,
    leftLinkName: string,
    rightObjectType: string,
  ): [OntologiesV2.LinkTypeSideV2, OntologiesV2.LinkTypeSideV2] {
    const leftTypeSideV2 = this.getLinkTypeSideV2(
      leftObjectType,
      leftLinkName,
    );

    // the rhs passed in should match the target of the lhs
    invariant(rightObjectType === leftTypeSideV2.objectTypeApiName);

    const rightTypeSideV2 = this.getOtherLinkTypeSideV2OrThrow(
      leftObjectType,
      leftLinkName,
    );

    return [leftTypeSideV2, rightTypeSideV2];
  }

  registerObjectType<Q extends ObjectTypeDefinition>(
    def: TH_ObjectTypeFullMetadata<Q>,
  ): void;
  registerObjectType(
    def: ReadonlyDeep<OntologiesV2.ObjectTypeFullMetadata>,
  ): void;
  registerObjectType<Q extends ObjectTypeDefinition>(
    def:
      | TH_ObjectTypeFullMetadata<Q>
      | OntologiesV2.ObjectTypeFullMetadata,
  ): void {
    if (def.objectType.apiName in this.#ontology.objectTypes) {
      throw new Error(
        `ObjectType ${def.objectType.apiName} already registered`,
      );
    }
    this.#ontology.objectTypes[def.objectType.apiName] = def;
  }

  registerActionType<Q extends OntologiesV2.ActionTypeV2>(
    def: Q,
    implementation?: FauxActionImpl<Q>,
  ): void;
  registerActionType(
    def: OntologiesV2.ActionTypeV2,
    implementation?: FauxActionImpl,
  ): void;
  registerActionType(
    def: OntologiesV2.ActionTypeV2,
    implementation?: FauxActionImpl,
  ): void {
    if (def.apiName in this.#ontology.actionTypes) {
      throw new Error(
        `ActionType ${def.apiName} already registered`,
      );
    }
    this.#ontology.actionTypes[def.apiName] = def;
    if (implementation) {
      this.#actionImpl.set(def.apiName, implementation);
    }
  }

  registerQueryType(
    def: OntologiesV2.QueryTypeV2,
    implementation?: FauxQueryImpl,
  ): void {
    if (def.apiName in this.#ontology.queryTypes) {
      throw new Error(
        `QueryType ${def.apiName} already registered`,
      );
    }
    this.#ontology.queryTypes[def.apiName] = def;
    if (implementation) {
      this.#queryImpl.set(def.apiName, implementation);
    }
  }

  registerInterfaceType(def: OntologiesV2.InterfaceType): void {
    if (def.apiName in this.#ontology.interfaceTypes) {
      throw new Error(
        `InterfaceType ${def.apiName} already registered`,
      );
    }
    this.#ontology.interfaceTypes[def.apiName] = def;
  }

  registerSharedPropertyType(def: OntologiesV2.SharedPropertyType): void {
    if (def.apiName in this.#ontology.sharedPropertyTypes) {
      throw new Error(
        `SharedPropertyType ${def.apiName} already registered`,
      );
    }
    this.#ontology.sharedPropertyTypes[def.apiName] = def;
  }
}
