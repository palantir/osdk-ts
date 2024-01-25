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

import type { ValidationResult } from "./ValidationResult.js";

/**
 * Contains the status of the **submission criteria**.
 * **Submission criteria** are the prerequisites that need to be satisfied before an Action can be applied.
 * These are configured in the **Ontology Manager**.
 */
export interface SubmissionCriteriaEvaluation {
  /**
   * The message indicating one of the **submission criteria** was not satisfied.
   * This is configured per **submission criteria** in the **Ontology Manager**.
   */
  configuredFailureMessage?: string;
  result: ValidationResult;
}
