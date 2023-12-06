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

import type { CbacMarkingPicker } from "./CbacMarkingPicker.js";
import type { Checkbox } from "./Checkbox.js";
import type { DateTimePicker } from "./DateTimePicker.js";
import type { Dropdown } from "./Dropdown.js";
import type { FilePicker } from "./FilePicker.js";
import type { MandatoryMarkingPicker } from "./MandatoryMarkingPicker.js";
import type { NumericInput } from "./NumericInput.js";
import type { Radio } from "./Radio.js";
import type { ResourcePicker } from "./ResourcePicker.js";
import type { TextArea } from "./TextArea.js";
import type { TextInput } from "./TextInput.js";
import type { UserDropdown } from "./UserDropdown.js";
export interface ParameterRenderHint_dropdown {
  type: "dropdown";
  dropdown: Dropdown;
}

export interface ParameterRenderHint_userDropdown {
  type: "userDropdown";
  userDropdown: UserDropdown;
}

export interface ParameterRenderHint_radio {
  type: "radio";
  radio: Radio;
}

export interface ParameterRenderHint_checkbox {
  type: "checkbox";
  checkbox: Checkbox;
}

export interface ParameterRenderHint_numericInput {
  type: "numericInput";
  numericInput: NumericInput;
}

export interface ParameterRenderHint_textInput {
  type: "textInput";
  textInput: TextInput;
}

export interface ParameterRenderHint_textArea {
  type: "textArea";
  textArea: TextArea;
}

export interface ParameterRenderHint_dateTimePicker {
  type: "dateTimePicker";
  dateTimePicker: DateTimePicker;
}

export interface ParameterRenderHint_filePicker {
  type: "filePicker";
  filePicker: FilePicker;
}

export interface ParameterRenderHint_resourcePicker {
  type: "resourcePicker";
  resourcePicker: ResourcePicker;
}

export interface ParameterRenderHint_cbacMarkingPicker {
  type: "cbacMarkingPicker";
  cbacMarkingPicker: CbacMarkingPicker;
}

export interface ParameterRenderHint_mandatoryMarkingPicker {
  type: "mandatoryMarkingPicker";
  mandatoryMarkingPicker: MandatoryMarkingPicker;
}
export type ParameterRenderHint =
  | ParameterRenderHint_dropdown
  | ParameterRenderHint_userDropdown
  | ParameterRenderHint_radio
  | ParameterRenderHint_checkbox
  | ParameterRenderHint_numericInput
  | ParameterRenderHint_textInput
  | ParameterRenderHint_textArea
  | ParameterRenderHint_dateTimePicker
  | ParameterRenderHint_filePicker
  | ParameterRenderHint_resourcePicker
  | ParameterRenderHint_cbacMarkingPicker
  | ParameterRenderHint_mandatoryMarkingPicker;
