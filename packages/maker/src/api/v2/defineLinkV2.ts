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
}

export type LinkV2Config<
  A extends ObjectV2Def = ObjectV2Def,
  B extends ObjectV2Def = ObjectV2Def,
> = OneToManyLinkV2Config<A, B> | ManyToManyLinkV2Config<A, B>;

/**
 * Branded intermediate type returned by defineLinkV2.
 * Preserves the full config as a type parameter.
 */
export type LinkV2Def<C extends LinkV2Config = LinkV2Config> = C & {
  readonly __brand: "LinkV2Def";
};

function getLinkTypeId(apiName: string, reverseApiName: string): string {
  return `${apiName}-${reverseApiName}`;
}

/**
 * Define a link between two V2 object types.
 *
 * Delegates to the existing defineLink() for maker state registration,
 * then returns a branded config for use with finalizeTypes().
 */
export function defineLinkV2<
  const C extends LinkV2Config,
>(config: C): LinkV2Def<C> {
  const linkApiName = getLinkTypeId(
    config.apiName,
    config.reverseApiName,
  );

  if ("one" in config) {
    defineLink({
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
    });
  } else {
    defineLink({
      apiName: linkApiName,
      many: {
        object: config.many.__v1Def,
        metadata: { apiName: config.apiName },
      },
      toMany: {
        object: config.toMany.__v1Def,
        metadata: { apiName: config.reverseApiName },
      },
    });
  }

  return config as LinkV2Def<C>;
}
