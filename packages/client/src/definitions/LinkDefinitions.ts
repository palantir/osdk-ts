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
  ObjectTypeDefinition,
  ObjectTypeLinkDefinition,
  ObjectTypeLinkKeysFrom2,
} from "@osdk/api";
import type {
  FetchPageOrThrowArgs,
  SelectArg,
  SelectArgToKeys,
} from "../object/fetchPageOrThrow.js";
import type { Osdk, OsdkObjectPrimaryKeyType } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";

/** The $link container to get from one object type to its linked objects */
export type OsdkObjectLinksObject<
  O extends ObjectTypeDefinition<any>,
> = ObjectTypeLinkKeysFrom2<O> extends never ? never : {
  [L in ObjectTypeLinkKeysFrom2<O>]: OsdkObjectLinksEntry<O, L>;
};

export type OsdkObjectLinksEntry<
  O extends ObjectTypeDefinition<any>,
  L extends ObjectTypeLinkKeysFrom2<O>,
> = O["links"][L] extends ObjectTypeLinkDefinition<infer T, infer M> ? (
    M extends false ? SingleLinkAccessor<T> : MultiLinkAccessor<T>
  )
  : never;

export type SingleLinkReturnType<
  T extends ObjectTypeDefinition<any>,
  A extends SelectArg<T>,
> = Promise<Osdk<T, SelectArgToKeys<T, A>>>;

export type MultiLinkReturnType<
  T extends ObjectTypeDefinition<any>,
  A extends SelectArg<T>,
> = Promise<PageResult<Osdk<T, SelectArgToKeys<T, A>>>>;

export interface SingleLinkAccessor<T extends ObjectTypeDefinition<any>> {
  /** Load the linked object */
  get: <const A extends SelectArg<T>>(
    options?: A,
  ) => SingleLinkReturnType<T, A>;
}

export interface MultiLinkAccessor<T extends ObjectTypeDefinition<any>> {
  get: <const A extends SelectArg<T>>(
    pk: OsdkObjectPrimaryKeyType<T>,
    options?: A,
  ) => SingleLinkReturnType<T, A>;

  fetchPageOrThrow: <
    const A extends FetchPageOrThrowArgs<T>,
  >(options?: A) => MultiLinkReturnType<T, A>;
}
