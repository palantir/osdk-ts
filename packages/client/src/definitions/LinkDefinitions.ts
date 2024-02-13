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
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
  ObjectTypeLinkDefinition,
  ObjectTypeLinkKeysFrom2,
} from "@osdk/api";
import type {
  FetchPageOrThrowArgs2,
  SelectArg,
} from "../object/fetchPageOrThrow.js";
import type {
  OsdkObjectFrom,
  OsdkObjectPrimaryKeyType,
} from "../OsdkObjectFrom.js";
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
    M extends false ? SingletonLinkAccessor<T> : MultitonLinkAccessor<T>
  )
  : never;

export interface SingletonLinkAccessor<T extends ObjectTypeDefinition<any>> {
  /** Load the linked object */
  get: <A extends SelectArg<T>>(options?: A) => Promise<
    OsdkObjectFrom<
      T,
      A["select"] extends readonly string[] ? A["select"][number]
        : ObjectOrInterfacePropertyKeysFrom2<T>
    >
  >;
}

export interface MultitonLinkAccessor<T extends ObjectTypeDefinition<any>> {
  get: <A extends SelectArg<T>>(
    pk: OsdkObjectPrimaryKeyType<T>,
    options?: A,
  ) => Promise<
    OsdkObjectFrom<
      T,
      A["select"] extends readonly string[] ? A["select"][number]
        : ObjectOrInterfacePropertyKeysFrom2<T>
    >
  >;

  fetchPageOrThrow: <
    A extends FetchPageOrThrowArgs2<T>,
  >(options?: A) => Promise<
    PageResult<
      OsdkObjectFrom<
        T,
        A["select"] extends readonly string[] ? A["select"][number]
          : ObjectOrInterfacePropertyKeysFrom2<T>
      >
    >
  >;
}
