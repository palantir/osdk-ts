/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import invariant from "tiny-invariant";
import type { ObjectType } from "./defineObject.js";

export function defineLink(
  from: ObjectType,
  opts: {
    many: string;
    to: ObjectType;
    reverse: { one: string };
  },
): unknown;
export function defineLink(
  from: ObjectType,
  opts: {
    one: string;
    to: ObjectType;
    reverse: { one: string } | { many: string };
  },
): unknown;
export function defineLink(
  from: ObjectType,
  opts: {
    one?: never;
    many: string;
    to: ObjectType;
    reverse: { one: string };
  } | {
    one: string;
    many?: never;
    to: ObjectType;
    reverse: { one: string } | { many: string; one?: never };
  },
) {
  const apiName = opts.one ?? opts.many;
  const toApiName = opts.reverse.one ?? opts.reverse.many;
  const to = opts.to;

  invariant(
    from.linkTypes[apiName] == null,
    `Link with apiName ${apiName} already exists on ${from.data.objectType.apiName}`,
  );
  invariant(
    from.linkTypes[toApiName] == null,
    `Link with apiName ${toApiName} already exists on ${to.data.objectType.apiName}`,
  );

  from.linkTypes[apiName] = {
    cardinality: "ONE",
    displayName: apiName,
    objectTypeApiName: to.data.objectType.apiName,
    status: "ACTIVE",
  };

  to.linkTypes[toApiName] = {
    apiName: toApiName,
    cardinality: "ONE",
    displayName: apiName,
    objectTypeApiName: from.data.objectType.apiName,
    status: "ACTIVE",
  };
}
