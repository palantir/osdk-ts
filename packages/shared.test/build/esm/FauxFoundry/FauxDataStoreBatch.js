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

import deepEqual from "fast-deep-equal";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
/**
 * This is separate from the FauxDataStore so that we can in the future support
 * this not-committing on errors. That functionality just does not exist at the moment
 */
export class FauxDataStoreBatch {
  #fauxDataStore;
  objectEdits = {
    addedLinksCount: 0,
    addedObjectCount: 0,
    deletedLinksCount: 0,
    deletedObjectsCount: 0,
    modifiedObjectsCount: 0,
    edits: []
  };
  constructor(fauxDataStore) {
    this.#fauxDataStore = fauxDataStore;
  }
  getObject = (objectType, primaryKey) => {
    return this.#fauxDataStore.getObjectOrThrow(objectType, primaryKey);
  };
  addObject = (objectType, primaryKey, object) => {
    const existingObject = this.#fauxDataStore.getObject(objectType, primaryKey);
    if (existingObject) {
      throw new OpenApiCallError(500, {
        errorCode: "CONFLICT",
        errorName: "ObjectAlreadyExists",
        errorInstanceId: "",
        parameters: {
          objectType,
          primaryKey
        }
      });
    }
    this.#fauxDataStore.registerObject(object);
    this.objectEdits.edits.push({
      type: "addObject",
      primaryKey: String(primaryKey),
      objectType
    });
    this.objectEdits.addedObjectCount += 1;
  };
  modifyObject = (objectType, primaryKey, update) => {
    const origObj = this.#fauxDataStore.getObjectOrThrow(objectType, primaryKey);
    const newObj = {
      ...origObj,
      ...update
    };
    if (!deepEqual(origObj, newObj)) {
      this.#fauxDataStore.replaceObjectOrThrow(newObj);
      this.objectEdits.edits.push({
        type: "modifyObject",
        primaryKey: String(primaryKey),
        objectType
      });
      this.objectEdits.modifiedObjectsCount += 1;
    }
  };
  deleteObject = (objectType, primaryKey) => {
    this.#fauxDataStore.unregisterObjectOrThrow(objectType, primaryKey);
    this.objectEdits.edits.push({
      type: "deleteObject",
      objectType,
      primaryKey: primaryKey
    });
  };
  addLink = (leftObjectType, leftPrimaryKey, leftLinkName, rightObjectType, rightPrimaryKey) => {
    const [leftTypeSideV2, rightTypeSideV2] = this.#fauxDataStore.ontology.getBothLinkTypeSides(leftObjectType, leftLinkName, rightObjectType);
    this.#fauxDataStore.registerLink({
      __apiName: leftObjectType,
      __primaryKey: leftPrimaryKey
    }, leftTypeSideV2.apiName, {
      __apiName: rightObjectType,
      __primaryKey: rightPrimaryKey
    }, rightTypeSideV2.apiName);
    this.objectEdits.edits.push({
      type: "addLink",
      aSideObject: {
        objectType: leftObjectType,
        primaryKey: leftPrimaryKey
      },
      bSideObject: {
        objectType: rightObjectType,
        primaryKey: rightPrimaryKey
      },
      linkTypeApiNameAtoB: leftLinkName,
      linkTypeApiNameBtoA: rightTypeSideV2.apiName
    });
    this.objectEdits.addedLinksCount += 1;
  };
  removeLink = (leftObjectType, leftPrimaryKey, leftLinkName, rightObjectType, rightPrimaryKey) => {
    const [leftTypeSideV2, rightTypeSideV2] = this.#fauxDataStore.ontology.getBothLinkTypeSides(leftObjectType, leftLinkName, rightObjectType);
    this.#fauxDataStore.unregisterLink({
      __apiName: leftObjectType,
      __primaryKey: leftPrimaryKey
    }, leftTypeSideV2.apiName, {
      __apiName: rightObjectType,
      __primaryKey: rightPrimaryKey
    }, rightTypeSideV2.apiName);
  };
}
//# sourceMappingURL=FauxDataStoreBatch.js.map