/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

/**
 * The parameter value must match a predefined regular expression.
 */
export interface StringRegexMatchConstraint {
  /** The regular expression configured in the **Ontology Manager**. */
  regex: string;
  /**
   * The message indicating that the regular expression was not matched.
   * This is configured per parameter in the **Ontology Manager**.
   */
  configuredFailureMessage?: string;
}
