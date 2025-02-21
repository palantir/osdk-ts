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
  AddLinks,
  AnyEdit,
  CreateObjects,
  DeleteObjects,
  RemoveLinks,
  UpdateObjects,
} from "./types.js";

export interface EditBatch<X extends AnyEdit = never> {
  link: <L extends AddLinks<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ) => void;

  unlink: <L extends RemoveLinks<X>>(
    source: L["source"],
    apiName: L["apiName"],
    target: L["target"],
  ) => void;

  create: <O extends CreateObjects<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ) => void;

  delete: <O extends DeleteObjects<X>>(
    obj: O["obj"],
  ) => void;

  update: <O extends UpdateObjects<X>>(
    obj: O["obj"],
    properties: O["properties"],
  ) => void;

  getEdits: () => X[];
}
