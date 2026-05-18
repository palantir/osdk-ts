/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectOrInterfaceDefinition, ObjectSet } from "@osdk/api";
import {
  type Call,
  createMockObjectSetWithResolver,
  resolveStub,
  type Stub,
} from "./createMockObjectSetWithResolver.js";

const MOCK_OBJECT_SET_BRAND: unique symbol = Symbol("MOCK_OBJECT_SET_BRAND");

export type MockObjectSetBranded<Q extends ObjectOrInterfaceDefinition> =
  & ObjectSet<Q>
  & {
    [MOCK_OBJECT_SET_BRAND]: true;
    __registerStub(calls: Call[], value: unknown): void;
  };

export function createMockObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
): ObjectSet<Q> {
  const stubs: Stub[] = [];

  const resolve = (calls: Call[]): unknown =>
    resolveStub(
      stubs,
      calls,
      `No stub registered on standalone MockObjectSet\n`,
    );

  const objectSet = createMockObjectSetWithResolver(
    objectType,
    resolve,
  ) as MockObjectSetBranded<Q>;

  objectSet[MOCK_OBJECT_SET_BRAND] = true;
  (objectSet as any).__registerStub = (calls: Call[], value: unknown) => {
    stubs.push({ calls, value });
  };

  return objectSet;
}

/** @internal */
export function isMockObjectSet(
  value: unknown,
): value is MockObjectSetBranded<ObjectOrInterfaceDefinition> {
  return value != null
    && typeof value === "object"
    && MOCK_OBJECT_SET_BRAND in value;
}
