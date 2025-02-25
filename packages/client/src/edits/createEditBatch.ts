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
import type {
  AddLinkEdits,
  AnyEdit,
  CreateObjectEdits,
  DeleteObjectEdits,
  RemoveLinkEdits,
  UpdateObjectEdits,
} from "./types.js";

class InMemoryEditBatch<X extends AnyEdit = never> implements EditBatch<X> {
  private edits: X[] = [];

  public link<L extends AddLinkEdits<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ): void {
    this.edits.push({
      type: "addLink",
      source,
      apiName,
      target,
    } as L);
  }

  public unlink<L extends RemoveLinkEdits<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ): void {
    this.edits.push({
      type: "removeLink",
      source,
      apiName,
      target,
    } as L);
  }

  public create<O extends CreateObjectEdits<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ): void {
    this.edits.push({
      type: "createObject",
      obj,
      properties,
    } as O);
  }

  public delete<O extends DeleteObjectEdits<X>>(
    obj: O["obj"],
  ): void {
    this.edits.push({ type: "deleteObject", obj } as O);
  }

  public update<O extends UpdateObjectEdits<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ): void {
    this.edits.push({
      type: "updateObject",
      obj,
      properties,
    } as O);
  }

  public getEdits(): X[] {
    return this.edits;
  }
}

export function createEditBatch<T extends AnyEdit>(
  _client: Client,
  _editScope?: T[],
): EditBatch<T> {
  return new InMemoryEditBatch<T>();
}
