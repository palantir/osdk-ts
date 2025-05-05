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
  EditBatch,
  ExtractAddLinkArgs,
  ExtractCreateObjectArgs,
  ExtractDeletableObjects,
  ExtractRemoveLinkArgs,
  ExtractUpdateObjectArgs,
} from "./EditBatch.js";
import type {
  AddLink,
  AnyEdit,
  CreateObject,
  DeleteObject,
  ObjectLocator,
  RemoveLink,
  UpdateObject,
} from "./types.js";

type ExtractObjectFromLocator<L extends ObjectLocator> = L extends
  ObjectLocator<infer O> ? O : never;

class InMemoryEditBatch<X extends AnyEdit = never> implements EditBatch<X> {
  private edits: X[] = [];

  public link(...args: ExtractAddLinkArgs<X>): void {
    const [source, apiName, target] = args;
    this.edits.push({
      type: "addLink",
      source,
      apiName,
      target,
    } as AddLink<ExtractObjectFromLocator<typeof source>, typeof apiName> as X);
  }

  public unlink(...args: ExtractRemoveLinkArgs<X>): void {
    const [source, apiName, target] = args;
    this.edits.push({
      type: "removeLink",
      source,
      apiName,
      target,
    } as RemoveLink<
      ExtractObjectFromLocator<typeof source>,
      typeof apiName
    > as X);
  }

  public create(...args: ExtractCreateObjectArgs<X>): void {
    const [obj, properties] = args;
    this.edits.push({
      type: "createObject",
      obj,
      properties,
    } as CreateObject<typeof obj> as X);
  }

  public delete(obj: ExtractDeletableObjects<X>): void {
    this.edits.push({
      type: "deleteObject",
      obj,
    } as DeleteObject<ExtractObjectFromLocator<typeof obj>> as X);
  }

  public update(...args: ExtractUpdateObjectArgs<X>): void {
    const [obj, properties] = args;
    this.edits.push({
      type: "updateObject",
      obj,
      properties,
    } as UpdateObject<ExtractObjectFromLocator<typeof obj>> as X);
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
