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

import {
  objectTableMeta,
  WithCustomColumn as WithCustomColumnStory,
  WithCustomRenderers as WithCustomRenderersStory,
  WithDefaultColumnPinning as WithDefaultColumnPinningStory,
  WithDerivedPropertyOrderingAndFilter
    as WithDerivedPropertyOrderingAndFilterStory,
  WithFunctionColumn as WithFunctionColumnStory,
} from "../objectTableStoryDefs.js";

const meta = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Columns",
};

export default meta;

export const WithDefaultColumnPinning = WithDefaultColumnPinningStory;
export const WithDerivedPropertyOrderingAndFilter =
  WithDerivedPropertyOrderingAndFilterStory;
export const WithFunctionColumn = WithFunctionColumnStory;
export const WithCustomColumn = WithCustomColumnStory;
export const WithCustomRenderers = WithCustomRenderersStory;
