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

import { describe, expectTypeOf, it } from "vitest";
import type { Todo } from "../../util/test/TodoObject.js";
import type { OrderByOption } from "../objectSets/filters/index.js";
import type { ObjectSetOrderByArg } from "./ordering.js";

describe("Ordering", () => {
  it("correct types", () => {
    expectTypeOf<ObjectSetOrderByArg<Todo>>().toMatchTypeOf<
      { complete: OrderByOption; id: OrderByOption; body: OrderByOption }
    >();
  });
});
