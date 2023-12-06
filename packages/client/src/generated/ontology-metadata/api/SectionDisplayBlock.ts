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

import type { SectionConditionalOverride } from "./SectionConditionalOverride.js";
import type { SectionValidationDisplayMetadata } from "./SectionValidationDisplayMetadata.js";

/**
 * Contains information about the section display and any conditional overrides set on the section.
 * If more than one conditional override is passed. The first one with a passing condition will take priority.
 */
export interface SectionDisplayBlock {
  conditionalOverrides: Array<SectionConditionalOverride>;
  defaultDisplayMetadata: SectionValidationDisplayMetadata;
}
