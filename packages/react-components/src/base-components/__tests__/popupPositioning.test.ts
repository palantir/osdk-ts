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

import { describe, expect, it } from "vitest";
import {
  POPUP_COLLISION_PADDING,
  POPUP_SIDE_OFFSET,
} from "../popupPositioning.js";

describe("popup positioning constants", () => {
  it("keeps shared popups visually separated from their trigger", () => {
    expect(POPUP_SIDE_OFFSET).toBe(8);
    expect(POPUP_COLLISION_PADDING).toBe(8);
  });
});
