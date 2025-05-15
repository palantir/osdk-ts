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
  CreatableObjectTypeProperties,
  CreatableObjectTypes,
  DeletableObjectLocators,
  EditBatch,
  RemoveLinkApiNames,
  RemoveLinkSources,
  RemoveLinkTargets,
  UpdatableObjectLocatorProperties,
  UpdatableObjectLocators,
} from "./EditBatch.js";
import type { AnyEdit } from "./types.js";

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
    this.edits.push({
      type: "addLink",
      source,
      apiName,
      target,
    } as unknown as X);
  }

  public unlink<
    SOL extends RemoveLinkSources<X>,
    A extends RemoveLinkApiNames<X, SOL>,
  >(
    source: SOL,
    apiName: A,
    target: RemoveLinkTargets<X, SOL, A>,
  ): void {
    this.edits.push({
      type: "removeLink",
      source,
      apiName,
      target,
    } as unknown as X);
  }

  public create<OTD extends CreatableObjectTypes<X>>(
    obj: OTD,
    properties: CreatableObjectTypeProperties<X, OTD>,
  ): void {
    this.edits.push({
      type: "createObject",
      obj,
      properties,
    } as unknown as X);
  }

  public delete<OL extends DeletableObjectLocators<X>>(obj: OL): void {
    this.edits.push({
      type: "deleteObject",
      obj,
    } as unknown as X);
  }

  public update<OL extends UpdatableObjectLocators<X>>(
    obj: OL,
    properties: UpdatableObjectLocatorProperties<X, OL>,
  ): void {
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
