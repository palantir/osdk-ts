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
  HeaderMenuInsideBaseUIDialog as HeaderMenuInsideBaseUIDialogStory,
  HeaderMenuInsideBlueprintDialog as HeaderMenuInsideBlueprintDialogStory,
  HeaderMenuInsideBlueprintDrawer as HeaderMenuInsideBlueprintDrawerStory,
  objectTableMeta,
} from "../objectTableStoryDefs.js";

// QA scenarios verifying the header-menu dropdown renders above overlay
// containers (Blueprint Drawer/Dialog, Base UI Dialog).
const meta = {
  ...objectTableMeta,
  title: "Components/ObjectTable/Features/Overlays",
};

export default meta;

export const HeaderMenuInsideBlueprintDrawer =
  HeaderMenuInsideBlueprintDrawerStory;
export const HeaderMenuInsideBlueprintDialog =
  HeaderMenuInsideBlueprintDialogStory;
export const HeaderMenuInsideBaseUIDialog = HeaderMenuInsideBaseUIDialogStory;
