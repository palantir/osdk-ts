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

import type { Client } from "../Client.js";
import type { EditBatch } from "./EditBatch.js";
import type { LinkLocatorKey, ObjectLocatorKey } from "./editKeys.js";
import { linkLocatorKey, objectLocatorKey } from "./editKeys.js";
import type {
  AddLinkEdits,
  AnyEdit,
  CreateObjectEdits,
  DeleteObjectEdits,
  LinkEdits,
  ObjectEdits,
  RemoveLinkEdits,
  UpdateObjectEdits,
} from "./types.js";

class InMemoryEditBatch<X extends AnyEdit = never> implements EditBatch<X> {
  private objectEdits: { [key: ObjectLocatorKey]: ObjectEdits<X> } = {};
  private linkEdits: { [key: LinkLocatorKey]: LinkEdits<X> } = {};

  public link<L extends AddLinkEdits<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ): void {
    this.linkEdits[linkLocatorKey(source, apiName, target)] = {
      type: "addLink",
      source,
      apiName,
      target,
    } as L;
  }

  public unlink<L extends RemoveLinkEdits<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ): void {
    this.linkEdits[linkLocatorKey(source, apiName, target)] = {
      type: "removeLink",
      source,
      apiName,
      target,
    } as L;
  }

  public create<O extends CreateObjectEdits<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ): void {
    const editKey = objectLocatorKey({
      apiName: obj.apiName,
      primaryKey: properties[obj.__DefinitionMetadata.primaryKeyApiName],
    });
    const previousEdit = this.objectEdits[editKey];
    if (!previousEdit) {
      this.objectEdits[editKey] = {
        type: "createObject",
        obj,
        properties,
      } as O;
      return;
    }

    switch (previousEdit.type) {
      case "createObject":
        throw new Error(
          `An object with this locator has already been created: ${
            JSON.stringify(obj)
          }`,
        );
      case "deleteObject":
        throw new Error(
          `An object with this locator has already been deleted: ${
            JSON.stringify(obj)
          }`,
        );
      case "updateObject":
        throw new Error(
          `An object with this locator has already been updated: ${
            JSON.stringify(obj)
          }`,
        );
      default:
        throw new Error(`Invalid edit type: ${(previousEdit as any).type}`);
    }
  }

  public delete<O extends DeleteObjectEdits<X>>(
    obj: O["obj"],
  ): void {
    const editKey = objectLocatorKey(obj);
    const previousEdit = this.objectEdits[editKey];
    if (previousEdit.type === "createObject") {
      delete this.objectEdits[editKey];
      return;
    }
    this.objectEdits[editKey] = { type: "deleteObject", obj } as O;
  }

  public update<O extends UpdateObjectEdits<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ): void {
    const editKey = objectLocatorKey(obj);
    const previousEdit = this.objectEdits[editKey];
    if (!previousEdit) {
      this.objectEdits[editKey] = {
        type: "updateObject",
        obj,
        properties,
      } as O;
      return;
    }
    if (previousEdit.type === "deleteObject") {
      throw new Error(
        `An object with this locator has already been deleted: ${
          JSON.stringify(obj)
        }`,
      );
    }
    this.objectEdits[editKey] = {
      ...previousEdit,
      properties: { ...previousEdit.properties, ...properties },
    };
  }

  public getEdits(): X[] {
    return [
      ...Object.values(this.objectEdits),
      ...Object.values(this.linkEdits),
    ];
  }
}

export function createEditBatch<T extends AnyEdit>(
  _client: Client,
  _editScope: T[],
): EditBatch<T> {
  return new InMemoryEditBatch<T>();
}
