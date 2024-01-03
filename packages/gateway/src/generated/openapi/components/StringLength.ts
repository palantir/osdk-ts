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

/**
 * The parameter value must have a length within the defined range.
 * *This range is always inclusive.*
 */
export interface StringLength {
  /** Less than */
  lt?: any;
  /** Less than or equal */
  lte?: any;
  /** Greater than */
  gt?: any;
  /** Greater than or equal */
  gte?: any;
}
