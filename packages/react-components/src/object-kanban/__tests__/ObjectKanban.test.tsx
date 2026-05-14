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

// OSDK-level coverage for `ObjectKanban` (the `useObjectSet`-backed wrapper)
// is deferred until a shared `useObjectSet` mock pattern lands in this
// package. Per CLAUDE.md's testing rules we do NOT fabricate OSDK mocks here,
// since they drift from the real shape and create false-positive coverage.
//
// The behavior the wrapper adds on top of `BaseObjectKanban` — column-level
// `useObjectSet` calls, intersect-with-parent-objectSet, render-slot wrapping,
// and `onCardMoved` enriching with `fromObjectSet`/`toObjectSet` — is staked
// out below with `it.todo`. Each item will be filled in once the shared mock
// helper exists.

import { describe, it } from "vitest";

describe("ObjectKanban (OSDK wrapper)", () => {
  it.todo("renders one column per columns[] entry");
  it.todo(
    "calls useObjectSet with column.objectSet + parent objectSet intersect",
  );
  it.todo("forwards renderCardTitle/Body with the OSDK object payload");
  it.todo(
    "invokes onCardMoved with fromObjectSet/toObjectSet drawn from columns[]",
  );
  it.todo("invokes onSelectObject with the OSDK object + columnId");
});
