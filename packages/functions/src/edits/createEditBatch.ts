/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Client } from "@osdk/client";
import type {
  AddLinkApiNames,
  AddLinkSources,
  AddLinkTargets,
  CreatableInterfaceTypeProperties,
  CreatableInterfaceTypes,
  CreatableObjectTypeProperties,
  CreatableObjectTypes,
  CreatableObjectTypesForInterface,
  DeletableObjectOrInterfaceLocators,
  EditBatch,
  RemoveLinkApiNames,
  RemoveLinkSources,
  RemoveLinkTargets,
  UpdatableObjectOrInterfaceLocatorProperties,
  UpdatableObjectOrInterfaceLocators,
} from "./EditBatch.js";
import type { AnyEdit } from "./types.js";
import { isInterfaceLocator } from "./types.js";

class InMemoryEditBatch<X extends AnyEdit = never> implements EditBatch<X> {
  private edits: X[] = [];

  public link<
    SOL extends AddLinkSources<X>,
    A extends AddLinkApiNames<X, SOL>,
  >(
    source: SOL,
    apiName: A,
    target: AddLinkTargets<X, SOL, A>,
  ): void {
    if (!Array.isArray(target)) {
      this.edits.push({
        type: "addLink",
        source,
        apiName,
        target,
      } as unknown as X);
      return;
    }

    for (const elem of target) {
      this.edits.push({
        type: "addLink",
        source,
        apiName,
        target: elem,
      } as unknown as X);
    }
  }

  public unlink<
    SOL extends RemoveLinkSources<X>,
    A extends RemoveLinkApiNames<X, SOL>,
  >(
    source: SOL,
    apiName: A,
    target: RemoveLinkTargets<X, SOL, A>,
  ): void {
    if (!Array.isArray(target)) {
      this.edits.push({
        type: "removeLink",
        source,
        apiName,
        target,
      } as unknown as X);
      return;
    }

    for (const elem of target) {
      this.edits.push({
        type: "removeLink",
        source,
        apiName,
        target: elem,
      } as unknown as X);
    }
  }

  public create<OTD extends CreatableObjectTypes<X>>(
    obj: OTD,
    properties: CreatableObjectTypeProperties<X, OTD>,
  ): void;
  public create<
    ID extends CreatableInterfaceTypes<X>,
    OTD extends CreatableObjectTypesForInterface<X>,
  >(
    interfaceType: ID,
    objectType: OTD,
    properties: CreatableInterfaceTypeProperties<X, ID>,
  ): void;
  public create<T>(
    objOrInterfaceType: T,
    propertiesOrObjectType: any,
    maybeProperties?: any,
  ): void {
    if (
      (objOrInterfaceType as { type: "object" | "interface" }).type
        === "interface"
    ) {
      // Interface creation: create(interfaceType, objectType, properties)
      this.edits.push({
        type: "createInterface",
        interfaceType: objOrInterfaceType,
        objectType: propertiesOrObjectType,
        properties: maybeProperties,
      } as unknown as X);
    } else {
      // Object creation: create(objectType, properties)
      this.edits.push({
        type: "createObject",
        obj: objOrInterfaceType,
        properties: propertiesOrObjectType,
      } as unknown as X);
    }
  }

  public delete<OL extends DeletableObjectOrInterfaceLocators<X>>(
    obj: OL,
  ): void {
    if (isInterfaceLocator(obj)) {
      this.edits.push({
        type: "deleteInterface",
        obj,
      } as unknown as X);

      return;
    }

    this.edits.push({
      type: "deleteObject",
      obj,
    } as unknown as X);
  }

  public update<OL extends UpdatableObjectOrInterfaceLocators<X>>(
    obj: OL,
    properties: UpdatableObjectOrInterfaceLocatorProperties<X, OL>,
  ): void {
    if (isInterfaceLocator(obj)) {
      this.edits.push({
        type: "updateInterface",
        obj,
        properties,
      } as unknown as X);

      return;
    }

    this.edits.push({
      type: "updateObject",
      obj,
      properties,
    } as unknown as X);
  }

  public getEdits(): X[] {
    return [...this.edits];
  }
}

export function createEditBatch<T extends AnyEdit = never>(
  _client: Client,
): EditBatch<T> {
  return new InMemoryEditBatch<T>();
}
