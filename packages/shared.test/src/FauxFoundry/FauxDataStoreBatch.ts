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

import type {
  CompileTimeMetadata,
  ObjectTypeDefinition,
  PrimaryKeyType,
} from "@osdk/api";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import deepEqual from "fast-deep-equal";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import type { BaseServerObject } from "./BaseServerObject.js";
import type { FauxDataStore } from "./FauxDataStore.js";
import type { JustProps } from "./typeHelpers/JustProps.js";

/**
 * This is separate from the FauxDataStore so that we can in the future support
 * this not-committing on errors. That functionality just does not exist at the moment
 */
export class FauxDataStoreBatch {
  #fauxDataStore: FauxDataStore;
  objectEdits: OntologiesV2.ObjectEdits = {
    addedLinksCount: 0,
    addedObjectCount: 0,
    deletedLinksCount: 0,
    deletedObjectsCount: 0,
    modifiedObjectsCount: 0,
    edits: [],
  };

  constructor(fauxDataStore: FauxDataStore) {
    this.#fauxDataStore = fauxDataStore;
  }

  getObject = (
    objectType: string,
    primaryKey: string | number | boolean,
  ): BaseServerObject => {
    return this.#fauxDataStore.getObjectOrThrow(
      objectType,
      primaryKey,
    );
  };

  public addObject<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    update: Omit<JustProps<T>, CompileTimeMetadata<T>["primaryKeyApiName"]>,
  ): void;
  public addObject(
    objectType: string,
    primaryKey: string | number | boolean,
    object: BaseServerObject,
  ): void;
  public addObject(
    objectType: string,
    primaryKey: string | number | boolean,
    object: BaseServerObject,
  ): void {
    const existingObject = this.#fauxDataStore.getObject(
      objectType,
      primaryKey,
    );
    if (existingObject) {
      throw new OpenApiCallError(
        500,
        {
          errorCode: "CONFLICT",
          errorName: "ObjectAlreadyExists",
          errorInstanceId: "",
          parameters: {
            objectType,
            primaryKey,
          },
        } satisfies OntologiesV2.ObjectAlreadyExists,
      );
    }

    const fullMetadata = this.#fauxDataStore.ontology
      .getObjectTypeFullMetadataOrThrow(objectType);

    this.#fauxDataStore.registerObject({
      ...object,
      $apiName: objectType,
      $primaryKey: primaryKey,
      [fullMetadata.objectType.primaryKey]: primaryKey,
    });
    this.objectEdits.edits.push({
      type: "addObject",
      primaryKey,
      objectType,
    });
    this.objectEdits.addedObjectCount += 1;
  }

  public modifyObject<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    update: Partial<JustProps<T>>,
  ): void;
  public modifyObject(
    objectType: string,
    primaryKey: string | number | boolean,
    update: Partial<BaseServerObject>,
  ): void;
  public modifyObject(
    objectType: string,
    primaryKey: string | number | boolean,
    update: Partial<BaseServerObject>,
  ): void {
    const origObj = this.#fauxDataStore.getObjectOrThrow(
      objectType,
      primaryKey,
    );
    const newObj = {
      ...origObj,
      ...update,
    };

    if (!deepEqual(origObj, newObj)) {
      this.#fauxDataStore.replaceObjectOrThrow(newObj);
      this.objectEdits.edits.push({
        type: "modifyObject",
        primaryKey,
        objectType,
      });
      this.objectEdits.modifiedObjectsCount += 1;
    }
  }

  deleteObject = (
    objectType: string,
    primaryKey: string | number | boolean,
  ): void => {
    this.#fauxDataStore.unregisterObjectOrThrow(objectType, primaryKey);
    this.objectEdits.edits.push({
      type: "deleteObject",
      objectType,
      primaryKey: primaryKey,
    });
  };

  addLink = (
    leftObjectType: string,
    leftPrimaryKey: string | number | boolean,
    leftLinkName: string,
    rightObjectType: string,
    rightPrimaryKey: string | number | boolean,
  ): void => {
    const [leftTypeSideV2, rightTypeSideV2] = this.#fauxDataStore.ontology
      .getBothLinkTypeSides(
        leftObjectType,
        leftLinkName,
        rightObjectType,
      );

    this.#fauxDataStore.registerLink(
      { __apiName: leftObjectType, __primaryKey: leftPrimaryKey },
      leftTypeSideV2.apiName,
      { __apiName: rightObjectType, __primaryKey: rightPrimaryKey },
      rightTypeSideV2.apiName,
    );

    this.objectEdits.edits.push({
      type: "addLink",
      aSideObject: {
        objectType: leftObjectType,
        primaryKey: leftPrimaryKey,
      },
      bSideObject: {
        objectType: rightObjectType,
        primaryKey: rightPrimaryKey,
      },
      linkTypeApiNameAtoB: leftLinkName,
      linkTypeApiNameBtoA: rightTypeSideV2.apiName,
    });

    this.objectEdits.addedLinksCount += 1;
  };

  removeLink = (
    leftObjectType: string,
    leftPrimaryKey: string | number | boolean,
    leftLinkName: string,
    rightObjectType: string,
    rightPrimaryKey: string | number | boolean,
  ): void => {
    const [leftTypeSideV2, rightTypeSideV2] = this.#fauxDataStore.ontology
      .getBothLinkTypeSides(
        leftObjectType,
        leftLinkName,
        rightObjectType,
      );

    this.#fauxDataStore.unregisterLink(
      { __apiName: leftObjectType, __primaryKey: leftPrimaryKey },
      leftTypeSideV2.apiName,
      { __apiName: rightObjectType, __primaryKey: rightPrimaryKey },
      rightTypeSideV2.apiName,
    );
  };
}
