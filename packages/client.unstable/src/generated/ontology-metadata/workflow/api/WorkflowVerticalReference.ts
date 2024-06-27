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

import type { WorkflowVerticalIdentifierV2 } from "./WorkflowVerticalIdentifierV2.js";
export interface WorkflowVerticalReference_verticalIdentifier {
  type: "verticalIdentifier";
  verticalIdentifier: WorkflowVerticalIdentifierV2;
}
/**
 * A type to uniquely identify a Vertical instance with which a Workflow is associated.
 */
export type WorkflowVerticalReference =
  WorkflowVerticalReference_verticalIdentifier;
