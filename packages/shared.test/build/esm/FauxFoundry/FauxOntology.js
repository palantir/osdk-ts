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

import invariant from "tiny-invariant";
import { ActionNotFoundError, LinkTypeNotFound, ObjectNotFoundError, ObjectTypeDoesNotExistError, QueryNotFoundError } from "../errors.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
/**
 * Currently Unsupported Concepts:
 * - many:many links.
 */
export class FauxOntology {
  #ontology;
  #actionImpl = new Map();
  #queryImpl = new Map();
  constructor(ontology) {
    this.#ontology = {
      actionTypes: {},
      interfaceTypes: {},
      objectTypes: {},
      ontology,
      queryTypes: {},
      sharedPropertyTypes: {}
    };
  }
  get apiName() {
    return this.#ontology.ontology.apiName;
  }
  getOntologyFullMetadata() {
    return this.#ontology;
  }
  getAllInterfaceTypes() {
    return Object.values(this.#ontology.interfaceTypes);
  }
  getAllObjectTypes() {
    return Object.values(this.#ontology.objectTypes);
  }
  getAllActionTypes() {
    return Object.values(this.#ontology.actionTypes);
  }
  getAllQueryTypes() {
    return Object.values(this.#ontology.queryTypes);
  }
  getInterfaceType(interfaceType) {
    const ret = this.#ontology.interfaceTypes[interfaceType];
    if (ret === undefined) {
      throw new OpenApiCallError(404, ObjectNotFoundError(interfaceType, ""));
    }
    return this.#ontology.interfaceTypes[interfaceType];
  }
  getObjectTypeFullMetadata(objectTypeApiName) {
    return this.#ontology.objectTypes[objectTypeApiName];
  }
  getObjectTypeFullMetadataOrThrow(objectTypeApiName) {
    const objectType = this.#ontology.objectTypes[objectTypeApiName];
    if (objectType === undefined) {
      throw new OpenApiCallError(404, ObjectTypeDoesNotExistError(objectTypeApiName));
    }
    return objectType;
  }
  getActionDef(actionTypeApiName) {
    const actionType = this.#ontology.actionTypes[actionTypeApiName];
    if (actionType === undefined) {
      throw new OpenApiCallError(404, ActionNotFoundError());
    }
    return actionType;
  }
  getActionImpl(actionTypeApiName) {
    const impl = this.#actionImpl.get(actionTypeApiName);
    !impl ? process.env.NODE_ENV !== "production" ? invariant(false, "Action implementation not found for " + actionTypeApiName) : invariant(false) : void 0;
    return impl;
  }
  getQueryDef(queryTypeApiName) {
    const queryType = this.#ontology.queryTypes[queryTypeApiName];
    if (queryType === undefined) {
      throw new OpenApiCallError(404, QueryNotFoundError(queryTypeApiName));
    }
    return queryType;
  }
  getQueryImpl(queryTypeApiName) {
    const impl = this.#queryImpl.get(queryTypeApiName);
    if (!impl) {
      throw new OpenApiCallError(404, QueryNotFoundError(queryTypeApiName));
    }
    !impl ? process.env.NODE_ENV !== "production" ? invariant(false, "Query implementation not found for " + queryTypeApiName) : invariant(false) : void 0;
    return impl;
  }
  getInterfaceToObjectTypeMappings(objectApiNames) {
    const objectDefs = Array.from(objectApiNames).map(apiName => this.getObjectTypeFullMetadataOrThrow(apiName));
    const ifaceToObjMap = {};
    for (const objDef of objectDefs) {
      for (const [ifaceApiName, {
        properties
      }] of Object.entries(objDef.implementsInterfaces2)) {
        if (ifaceToObjMap[ifaceApiName] === undefined) {
          ifaceToObjMap[ifaceApiName] = {};
        }
        ifaceToObjMap[ifaceApiName][objDef.objectType.apiName] = properties;
      }
    }
    return ifaceToObjMap;
  }
  getLinkTypeSideV2(objectTypeApiName, linkTypeName) {
    const objectType = this.getObjectTypeFullMetadataOrThrow(objectTypeApiName);
    const linkType = objectType.linkTypes.find(a => a.apiName === linkTypeName);
    if (linkType === undefined) {
      throw new OpenApiCallError(404, LinkTypeNotFound(objectTypeApiName, linkTypeName));
    }
    return linkType;
  }
  getOtherLinkTypeSideV2OrThrow(objectTypeApiName, linkTypeName) {
    const thisSideLink = this.getLinkTypeSideV2(objectTypeApiName, linkTypeName);
    const otherObj = this.getObjectTypeFullMetadataOrThrow(thisSideLink.objectTypeApiName);
    const candidates = otherObj.linkTypes.filter(l => l.linkTypeRid === thisSideLink.linkTypeRid);
    if (otherObj.objectType.apiName !== objectTypeApiName) {
      // if its not the same object type then there should only be one
      !(candidates.length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected only one candidate link type") : invariant(false) : void 0;
      return candidates[0];
    }
    // if its the same object type, then this could be a link that points to itself that
    // is 1:1, many:1 or many:many. In the 1:1 case, the link could have the same name
    // and there would only be 1 entry in that case. Otherwise there should be 2 entries
    // and we want the one that doesn't match the one passed in.
    if (candidates.length === 1) {
      return candidates[0];
    }
    !(candidates.length === 2) ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected only two candidate link types") : invariant(false) : void 0;
    const candidate = candidates.find(l => l.apiName !== thisSideLink.apiName);
    !candidate ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected to find a candidate link type that is not the same as the one passed in") : invariant(false) : void 0;
    return candidate;
  }
  getBothLinkTypeSides(leftObjectType, leftLinkName, rightObjectType) {
    const leftTypeSideV2 = this.getLinkTypeSideV2(leftObjectType, leftLinkName);

    // the rhs passed in should match the target of the lhs
    !(rightObjectType === leftTypeSideV2.objectTypeApiName) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    const rightTypeSideV2 = this.getOtherLinkTypeSideV2OrThrow(leftObjectType, leftLinkName);
    return [leftTypeSideV2, rightTypeSideV2];
  }
  registerObjectType(def) {
    if (def.objectType.apiName in this.#ontology.objectTypes) {
      throw new Error(`ObjectType ${def.objectType.apiName} already registered`);
    }
    this.#ontology.objectTypes[def.objectType.apiName] = def;
  }
  registerActionType(def, implementation) {
    if (def.apiName in this.#ontology.actionTypes) {
      throw new Error(`ActionType ${def.apiName} already registered`);
    }
    this.#ontology.actionTypes[def.apiName] = def;
    if (implementation) {
      this.#actionImpl.set(def.apiName, implementation);
    }
  }
  registerQueryType(def, implementation) {
    if (def.apiName in this.#ontology.queryTypes) {
      throw new Error(`QueryType ${def.apiName} already registered`);
    }
    this.#ontology.queryTypes[def.apiName] = def;
    if (implementation) {
      this.#queryImpl.set(def.apiName, implementation);
    }
  }
  registerInterfaceType(def) {
    if (def.apiName in this.#ontology.interfaceTypes) {
      throw new Error(`InterfaceType ${def.apiName} already registered`);
    }
    this.#ontology.interfaceTypes[def.apiName] = def;
  }
  registerSharedPropertyType(def) {
    if (def.apiName in this.#ontology.sharedPropertyTypes) {
      throw new Error(`SharedPropertyType ${def.apiName} already registered`);
    }
    this.#ontology.sharedPropertyTypes[def.apiName] = def;
  }
}
//# sourceMappingURL=FauxOntology.js.map