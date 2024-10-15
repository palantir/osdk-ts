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
  FetchPageArgs,
  SelectArg,
  SelectArgToKeys,
} from "../object/FetchPageArgs.js";
import type { SingleOsdkResult } from "../object/FetchPageResult.js";
import type { Result } from "../object/Result.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
  ObjectTypeLinkKeysFrom2,
} from "../ontology/ObjectTypeDefinition.js";
import type { Osdk } from "../OsdkObjectFrom.js";

/** The $link container to get from one object type to its linked objects */
export type OsdkObjectLinksObject<
  O extends ObjectTypeDefinition,
> = ObjectTypeLinkKeysFrom2<O> extends never ? never : {
  readonly [L in ObjectTypeLinkKeysFrom2<O>]: OsdkObjectLinksEntry<O, L>;
};

export type OsdkObjectLinksEntry<
  Q extends ObjectTypeDefinition,
  L extends ObjectTypeLinkKeysFrom2<Q>,
> = CompileTimeMetadata<Q>["links"][L] extends
  ObjectMetadata.Link<infer T, infer M> ? (
    M extends false ? SingleLinkAccessor<T> : ObjectSet<T>
  )
  : never;

export type DefaultToFalse<B extends boolean | undefined> = false extends B
  ? false
  : undefined extends B ? false
  : true;

export interface SingleLinkAccessor<
  T extends ObjectTypeDefinition,
> {
  /** Load the linked object
   */
  fetchOne: <
    const A extends SelectArg<
      T,
      PropertyKeys<T>,
      boolean
    >,
  >(
    options?: A,
  ) => Promise<
    A extends FetchPageArgs<T, infer L, infer R, any, infer S>
      ? SingleOsdkResult<T, L, R, S>
      : SingleOsdkResult<T, any, any, any>
  >;

  /** Load the linked object, with a result wrapper
   */
  fetchOneWithErrors: <
    const A extends SelectArg<
      T,
      PropertyKeys<T>,
      boolean
    >,
  >(
    options?: A,
  ) => Promise<
    Result<
      A extends FetchPageArgs<T, infer L, infer R, any, infer S>
        ? SingleOsdkResult<T, L, R, S>
        : SingleOsdkResult<T, any, any, any>
    >
  >;
}
