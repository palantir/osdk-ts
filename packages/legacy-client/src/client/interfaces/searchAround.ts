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

import type { MultiLink, OntologyObject, SingleLink } from "../baseTypes";
import type { ObjectSet } from ".";
import type { IsLink } from "./utils/IsLink";

type InferLinkType<T> = T extends SingleLink<infer V> ? V
  : T extends MultiLink<infer V> ? V
  : never;

/** @deprecated  */
export type SearchAround<T extends OntologyObject> = {
  [
    /**@deprecated */

    K in Extract<keyof T, string> as IsLink<T[K]> extends true
      ? `searchAround${Capitalize<K>}`
      : never
  ]: () => ObjectSet<InferLinkType<T[K]>>;
};

// export type pivotTo<
// O extends OntologyDefinition<any>,
// T extends OsdkLegacyObjectFrom<O,K>,
//   X extends K in Extract<keyof T, string> as IsLink<T[K]>,
// > = (linkType: X) => ObjectSet<InferLinkType<T>>;

// export type pivotTo<T extends OntologyObject> = {
//   pivotTo(
//     linkType: keyof LinksFrom<T> & string,
//   ): ObjectSet<InferLinkType<T[typeof linkType as any]>>;
// };

// type LinksFrom<T extends OntologyObject> = {
//   [K in Extract<keyof T, string> as IsLink<T[K]> extends true ? K : never]: K;
// };

// export type pivotTo<
//   T extends OntologyObject,
//   K extends Extract<keyof T, string>,
// > = {
//   pivotTo(
//     linkType: IsLink<T[K]> extends true ? K & string : never,
//   ): ObjectSet<InferLinkType<T[K]>>;
// };
