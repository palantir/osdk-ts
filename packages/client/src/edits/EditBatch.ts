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

import type {
  AddLinkEdits,
  AnyEdit,
  CreateObjectEdits,
  DeleteObjectEdits,
  RemoveLinkEdits,
  UpdateObjectEdits,
} from "./types.js";

export interface EditBatch<X extends AnyEdit = never> {
  link: <L extends AddLinkEdits<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ) => void;

  unlink: <L extends RemoveLinkEdits<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ) => void;

  create: <O extends CreateObjectEdits<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ) => void;

  delete: <O extends DeleteObjectEdits<X>>(
    obj: O["obj"],
  ) => void;

  update: <O extends UpdateObjectEdits<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ) => void;

  /**
   * @returns accumulated and merged list of edits
   */
  getEdits: () => X[];
}
