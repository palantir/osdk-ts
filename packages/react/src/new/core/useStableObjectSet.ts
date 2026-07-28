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

import type {
  ObjectOrInterfaceDefinition,
  ObjectSet,
  SimplePropertyDef,
} from "@osdk/api";
import { useMemo } from "react";

import { stableSerialize } from "./stableSerialize.js";

/**
 * Returns a referentially stable ObjectSet that only changes when the
 * wire representation changes. This uses {@link stableSerialize} which
 * includes composed operations (where, union, intersect, etc.) in the
 * serialized form
 */
export function useStableObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(objectSet: ObjectSet<Q, RDPs> | undefined): ObjectSet<Q, RDPs> | undefined {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => objectSet, [stableSerialize(objectSet)]);
}
