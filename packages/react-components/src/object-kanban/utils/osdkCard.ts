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
  Osdk,
  PropertyKeys,
} from "@osdk/api";
import type { BaseKanbanCard } from "./types.js";

/**
 * Card shape produced by the OSDK wrapper. Carries the original OSDK
 * instance so render slots and callbacks defined in `ObjectKanbanProps`
 * can receive the full object while the base layer only needs `id` + `title`.
 */
export interface OsdkKanbanCard<Q extends ObjectOrInterfaceDefinition>
  extends BaseKanbanCard
{
  object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>;
}

/**
 * Convert a list of OSDK instances into kanban cards. The card `id` is
 * `String(object.$primaryKey)` so dnd-kit can use it as a stable
 * draggable identifier across renders.
 */
export function toOsdkKanbanCards<Q extends ObjectOrInterfaceDefinition>(
  objects: ReadonlyArray<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>
  >,
): ReadonlyArray<OsdkKanbanCard<Q>> {
  return objects.map((object) => ({
    id: String(object.$primaryKey),
    title: String(object.$title ?? object.$primaryKey),
    object,
  }));
}
