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

import { isUserComponent } from "../fiber/FiberTags.js";
import { findParentComponent } from "../fiber/traverseFiber.js";
import type { Fiber } from "../fiber/types.js";
import type { TargetResolver } from "./types.js";

// generic mode: highlight any component, like the official React DevTools
export const nearestUserComponent: TargetResolver = (
  fiber: Fiber,
): Fiber | null => isUserComponent(fiber) ? fiber : findParentComponent(fiber);
