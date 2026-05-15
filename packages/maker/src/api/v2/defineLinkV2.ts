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

import { defineLink } from "../defineLink.js";
import type { LinkType, UserLinkTypeStatus } from "../links/LinkType.js";
import type { ObjectV2Def } from "./defineObjectV2.js";

/**
 * One-to-many link configuration.
 *
 * - apiName: link name on the "toMany" side objects (traverses to the "one" side) — single link
 * - reverseApiName: link name on the "one" side object (traverses to the "toMany" side) — multi link
 */
export interface OneToManyLinkV2Config<
  A extends ObjectV2Def = ObjectV2Def,
  B extends ObjectV2Def = ObjectV2Def,
> {
  apiName: string;
  reverseApiName: string;
  one: A;
  toMany: B;
  manyForeignKeyProperty: string;
  status?: UserLinkTypeStatus;
}

/**
 * Many-to-many link configuration.
 *
 * - apiName: link name on the "many" side objects (traverses to "toMany" side) — multi link
 * - reverseApiName: link name on the "toMany" side objects (traverses to "many" side) — multi link
 */
export interface ManyToManyLinkV2Config<
  A extends ObjectV2Def = ObjectV2Def,
  B extends ObjectV2Def = ObjectV2Def,
> {
  apiName: string;
  reverseApiName: string;
  many: A;
  toMany: B;
  status?: UserLinkTypeStatus;
}

/**
 * Intermediary (3-way) link configuration. Bridges two object types via a
 * junction object that already has 1:M links to both sides.
 *
 * Requires that the two underlying 1:M links from `many` → `intermediaryObjectType`
 * and `toMany` → `intermediaryObjectType` were defined with `defineLinkV2`
 * first (so the LinkV2Def has its `__v1Def` reference attached).
 */
export interface IntermediaryLinkV2Config<
  A extends ObjectV2Def = ObjectV2Def,
  B extends ObjectV2Def = ObjectV2Def,
  I extends ObjectV2Def = ObjectV2Def,
> {
  apiName: string;
  reverseApiName: string;
  many: A;
  toMany: B;
  intermediaryObjectType: I;
  manyToIntermediaryLink: LinkV2Def;
  toManyToIntermediaryLink: LinkV2Def;
  status?: UserLinkTypeStatus;
}

export type LinkV2Config<
  A extends ObjectV2Def = ObjectV2Def,
  B extends ObjectV2Def = ObjectV2Def,
  I extends ObjectV2Def = ObjectV2Def,
> =
  | OneToManyLinkV2Config<A, B>
  | ManyToManyLinkV2Config<A, B>
  | IntermediaryLinkV2Config<A, B, I>;

/**
 * Branded intermediate type returned by defineLinkV2.
 * Preserves the full config as a type parameter. `__v1Def` stores the
 * registered v1 LinkType so an intermediary link can reference the
 * underlying many/toMany→intermediary 1:M links.
 */
export type LinkV2Def<C extends LinkV2Config = LinkV2Config> = C & {
  readonly __brand: "LinkV2Def";
  readonly __v1Def: LinkType;
};

/**
 * Define a link between two V2 object types. Supports three variants:
 * one-to-many, many-to-many, and intermediary (3-way via a junction object).
 *
 * Delegates to the existing defineLink() for maker state registration,
 * then returns a branded config for use with finalizeTypes().
 */
export function defineLinkV2<
  const C extends LinkV2Config,
>(config: C): LinkV2Def<C> {
  const linkApiName = `${config.apiName}-${config.reverseApiName}`;

  let v1Link: LinkType;
  if ("one" in config) {
    v1Link = defineLink({
      apiName: linkApiName,
      one: {
        object: config.one.__v1Def,
        metadata: { apiName: config.reverseApiName },
      },
      toMany: {
        object: config.toMany.__v1Def,
        metadata: { apiName: config.apiName },
      },
      manyForeignKeyProperty: config.manyForeignKeyProperty,
      status: config.status,
    });
  } else if ("intermediaryObjectType" in config) {
    v1Link = defineLink({
      apiName: linkApiName,
      many: {
        object: config.many.__v1Def,
        metadata: { apiName: config.apiName },
        linkToIntermediary: config.manyToIntermediaryLink.__v1Def,
      },
      toMany: {
        object: config.toMany.__v1Def,
        metadata: { apiName: config.reverseApiName },
        linkToIntermediary: config.toManyToIntermediaryLink.__v1Def,
      },
      intermediaryObjectType: config.intermediaryObjectType.__v1Def,
      status: config.status,
    });
  } else {
    v1Link = defineLink({
      apiName: linkApiName,
      many: {
        object: config.many.__v1Def,
        metadata: { apiName: config.apiName },
      },
      toMany: {
        object: config.toMany.__v1Def,
        metadata: { apiName: config.reverseApiName },
      },
      status: config.status,
    });
  }

  return ({
    ...config,
    __brand: "LinkV2Def" as const,
    __v1Def: v1Link,
  }) as LinkV2Def<C>;
}
