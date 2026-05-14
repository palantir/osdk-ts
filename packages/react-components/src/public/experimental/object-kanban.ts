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

// ObjectKanban: OSDK-aware kanban that fetches one ObjectSet per column.
import { ObjectKanban as _ObjectKanban } from "../../object-kanban/ObjectKanban.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const ObjectKanban: typeof _ObjectKanban = withOsdkMetrics(
  _ObjectKanban,
  "ObjectKanban",
);
export type {
  CardMovedInfo,
  ObjectKanbanColumn,
  ObjectKanbanProps,
} from "../../object-kanban/ObjectKanbanApi.js";

// Base layer: OSDK-agnostic kanban for storybook / custom data pipelines.
export {
  BaseObjectKanban,
  type BaseObjectKanbanColumn,
  type BaseObjectKanbanProps,
} from "../../object-kanban/BaseObjectKanban.js";
export type { BaseKanbanCard } from "../../object-kanban/utils/types.js";

export type { OsdkKanbanCard } from "../../object-kanban/utils/osdkCard.js";
