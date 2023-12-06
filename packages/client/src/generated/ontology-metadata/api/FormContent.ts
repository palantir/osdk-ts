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

import type { ParameterId } from "./ParameterId.js";
import type { SectionId } from "./SectionId.js";
export interface FormContent_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface FormContent_sectionId {
  type: "sectionId";
  sectionId: SectionId;
}
/**
 * Items that we can place on the action form.
 */
export type FormContent = FormContent_parameterId | FormContent_sectionId;
