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
  ObjectTypeKeysFrom,
  ObjectTypeLinkKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { ObjectSet, OsdkLegacyPrimaryKeyType } from "..";
import type { MultiLink, OntologyObject, SingleLink } from "../baseTypes";

export type InferLinkType<T> = T extends SingleLink<infer V> ? V
  : T extends MultiLink<infer V> ? V
  : never;

// /** @deprecated  */
// export type SearchAround<T extends OntologyObject> = {
//   [
//     /**@deprecated */

//     K in Extract<keyof T, string> as IsLink<T[K]> extends true
//       ? `searchAround${Capitalize<K>}`
//       : never
//   ]: () => ObjectSet<InferLinkType<T[K]>>;
// };

export type SearchAroundKeys<T extends { __apiName: {} }> = keyof {
  [
    K in keyof T["__apiName"] as K extends `searchAround${string}`
      ? (K & string)
      : never
  ]: string;
};

export type SearchAroundOnly<
  T extends { __apiName: Partial<Record<SearchAroundKeys<T>, any>> },
> = Required<Pick<T["__apiName"], SearchAroundKeys<T>>>;

export type AugmentedLegacyOntologyObject<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = K extends string ? OntologyObject<
    & K
    & {
      [
        L in ObjectTypeLinkKeysFrom<O, K> as `searchAround${Capitalize<
          L & string
        >}`
      ]?: never;
    },
    OsdkLegacyPrimaryKeyType<O, K>
  >
  : never;

export type SearchAround<T extends OntologyObject> = {
  [
    K
      in keyof (T extends
        { __apiName: Partial<Record<SearchAroundKeys<T>, any>> }
        ? Required<Pick<T["__apiName"], SearchAroundKeys<T>>>
        : never)
  ]: K extends `searchAround${infer Z}`
    ? Uncapitalize<Z> extends keyof T
      ? (() => ObjectSet<InferLinkType<T[Uncapitalize<Z>]>>)
    : Z extends keyof T ? (() => ObjectSet<InferLinkType<T[Z]>>)
    : (numbers: keyof T) => {}
    : () => {};
};
// export type SearchAround1<
//   O extends OntologyDefinition<any>,
//   X extends ObjectTypeKeysFrom<O>,
// > = {
//   [
//     K in keyof (AugmentedLegacyOntologyObject<O, X> extends {
//       __apiName: Partial<
//         Record<SearchAroundKeys<AugmentedLegacyOntologyObject<O, K>>, any>
//       >;
//     } ? Required<
//         Pick<
//           AugmentedLegacyOntologyObject<O, X>["__apiName"] & string,
//           SearchAroundKeys<AugmentedLegacyOntologyObject<O, X>>
//         >
//       >
//       : never)
//   ]: K extends `searchAround${infer Z}`
//     ? Uncapitalize<Z> extends keyof AugmentedLegacyOntologyObject<O, X>
//       ? (() => ObjectSet<
//         InferLinkType<AugmentedLegacyOntologyObject<O, X>[Uncapitalize<Z>]>
//       >)
//     : Z extends keyof AugmentedLegacyOntologyObject<O, X>
//       ? (() => ObjectSet<InferLinkType<AugmentedLegacyOntologyObject<O, X>[Z]>>)
//     : (numbers: keyof AugmentedLegacyOntologyObject<O, X>) => {}
//     : () => {};
// };

// export type SearchAround<T extends OntologyObject> = {
//   [
//     K in keyof SearchAroundInterim<T> as SearchAroundInterim<T>[K] extends never
//       ? never
//       : K
//   ]: (SearchAroundInterim<T>[K]);
// };
