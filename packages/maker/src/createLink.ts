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
import type { ObjectType } from "./createObject";
// {
//   many: "peeps",
//   to: Employee,
//   reverse: {
//     one: "lead",
//   },

export function createLink(
  from: ObjectType,
  opts: {
    many: string;
    to: ObjectType;
    reverse: { one: string };
  },
): unknown;
export function createLink(
  from: ObjectType,
  opts: {
    one: string;
    to: ObjectType;
    reverse: { one: string } | { many: string };
  },
): unknown;
export function createLink(
  from: ObjectType,
  opts: {
    many: string;
    to: ObjectType;
    reverse: { one: string };
  } | {
    one: string;
    to: ObjectType;
    reverse: { one: string } | { many: string };
  },
) {
  console.log(from.linkTypes);
  invariant(
    from.linkTypes.find(l => l.apiName === apiName) == null,
    `Link with apiName ${apiName} already exists on ${from.objectType.apiName}`,
  );
  invariant(
    from.linkTypes.find(l => l.apiName === toApiName) == null,
    `Link with apiName ${toApiName} already exists on ${to.objectType.apiName}`,
  );

  from.linkTypes.push({
    apiName,
    cardinality: "ONE",
    displayName: apiName,
    objectTypeApiName: to.objectType.apiName,
    status: "ACTIVE",
  });

  to.linkTypes.push({
    apiName: toApiName,
    cardinality: "ONE",
    displayName: apiName,
    objectTypeApiName: from.objectType.apiName,
    status: "ACTIVE",
  });
}
