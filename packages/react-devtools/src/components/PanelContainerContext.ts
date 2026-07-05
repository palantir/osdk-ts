/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Context } from "react";
import { createContext } from "react";

/**
 * The panel's root element, published so descendants can portal overlays
 * (tooltips, popovers) into the panel instead of `document.body`. A portal into
 * the panel keeps the overlay inside the panel's stacking context — so it
 * paints above panel content without a z-index escalation — and inside the
 * `--dt-*` theme scope, so tokens resolve. It is `null` until the panel mounts,
 * in which case consumers fall back to Blueprint's default (`document.body`).
 */
export const PanelContainerContext: Context<HTMLElement | null> =
  createContext<HTMLElement | null>(null);
