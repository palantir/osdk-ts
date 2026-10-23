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

// CBAC Picker - OSDK-aware components
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export { CbacBanner } from "../cbac-picker/CbacBanner.js";
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export { CbacBannerPopover } from "../cbac-picker/CbacBannerPopover.js";
import { CbacPicker as _CbacPicker } from "../cbac-picker/CbacPicker.js";
import { withOsdkMetrics } from "../util/withOsdkMetrics.js";

/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export const CbacPicker: typeof _CbacPicker = withOsdkMetrics(
  _CbacPicker,
  "CbacPicker",
);
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export { CbacPickerDialog } from "../cbac-picker/CbacPickerDialog.js";

// CBAC Picker - Base components
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export { BaseCbacBanner } from "../cbac-picker/base/BaseCbacBanner.js";
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export { BaseCbacPicker } from "../cbac-picker/base/BaseCbacPicker.js";
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export { BaseCbacPickerDialog } from "../cbac-picker/base/BaseCbacPickerDialog.js";

// CBAC Picker - Selection logic utilities
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export {
  computeMarkingStates,
  groupMarkingsByCategory,
  toggleMarking,
} from "../cbac-picker/utils/selectionLogic.js";
// CBAC Picker - Types
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export type {
  CategoryMarkingGroup,
  CbacBannerData,
  MarkingSelectionState,
  MaxClassificationConstraint,
  PickerMarking,
  PickerMarkingCategory,
  RequiredMarkingGroup,
} from "../cbac-picker/types.js";

// CBAC Picker - MaxClassificationField
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export { MaxClassificationField } from "../cbac-picker/base/MaxClassificationField.js";
/** @deprecated Use `@osdk/react-components/experimental/cbac-picker` instead. */
export type { MaxClassificationFieldProps } from "../cbac-picker/base/MaxClassificationField.js";
