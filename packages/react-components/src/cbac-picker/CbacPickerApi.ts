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

import type { MaxClassificationConstraint } from "./types.js";

export interface CbacPaginationOptions {
  /**
   * Automatically load additional marking and category pages.
   * `true` loads all pages; a number sets the minimum items per catalogue.
   * `false` or `undefined` loads only the first page.
   * @default undefined
   */
  autoFetchMore?: boolean | number;
}

export interface CbacPickerProps extends CbacPaginationOptions {
  /**
   * Initial set of selected marking IDs.
   *
   * @default []
   */
  initialMarkingIds?: string[];

  /**
   * Called when the selection changes.
   *
   * @param markingIds The currently selected marking IDs
   */
  onChange: (markingIds: string[]) => void;

  /**
   * Optional constraint capping the maximum classification a user may select.
   * When set, the picker surfaces a callout if the selection exceeds it.
   */
  maxClassificationConstraint?: MaxClassificationConstraint;

  /**
   * Disables marking toggle interactions.
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * CSS class for the picker container.
   */
  className?: string;
}

export interface CbacPickerDialogProps extends CbacPaginationOptions {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (markingIds: string[]) => void;
  initialMarkingIds?: string[];
  maxClassificationConstraint?: MaxClassificationConstraint;
}

export interface CbacBannerPopoverProps extends CbacPaginationOptions {
  markingIds: string[];
  onChange: (markingIds: string[]) => void;
  maxClassificationConstraint?: MaxClassificationConstraint;
  className?: string;
}
