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
  AddLink,
  AnyEdit,
  CreateObject,
  DeleteObject,
  ObjectLocator,
  RemoveLink,
  UpdateObject,
} from "./types.js";

export type ExtractAddLinkArgs<X extends AnyEdit> = X extends
  AddLink<infer S, infer L> ? [ObjectLocator<S>, L, AddLink<S, L>["target"]]
  : never;

export type ExtractRemoveLinkArgs<X extends AnyEdit> = X extends
  RemoveLink<infer S, infer L>
  ? [ObjectLocator<S>, L, RemoveLink<S, L>["target"]]
  : never;

export type ExtractCreateObjectArgs<X extends AnyEdit> = X extends
  CreateObject<infer O> ? [O, CreateObject<O>["properties"]] : never;

export type ExtractDeletableObjects<X extends AnyEdit> = X extends
  DeleteObject<infer O> ? ObjectLocator<O> : never;

export type ExtractUpdateObjectArgs<X extends AnyEdit> = X extends
  UpdateObject<infer O> ? [ObjectLocator<O>, UpdateObject<O>["properties"]]
  : never;

export interface EditBatch<X extends AnyEdit = never> {
  link: (...args: ExtractAddLinkArgs<X>) => void;

  unlink: (...args: ExtractRemoveLinkArgs<X>) => void;

  create: (...args: ExtractCreateObjectArgs<X>) => void;

  delete: (obj: ExtractDeletableObjects<X>) => void;

  update: (...args: ExtractUpdateObjectArgs<X>) => void;

  getEdits: () => X[];
}
