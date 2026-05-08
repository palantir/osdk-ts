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

import { type Context, createContext } from "react";

/**
 * True when the surrounding tree is the body of an open `FilterPopover`. Inputs
 * that wrap their value list in a portal-positioned popup (e.g. `MultiSelectInput`'s
 * Combobox dropdown) read this to render in their always-open state so the user
 * sees the value list immediately after opening the popover instead of having to
 * click the inner trigger.
 */
export const FilterPopoverContext: Context<boolean> = createContext<boolean>(
  false,
);
