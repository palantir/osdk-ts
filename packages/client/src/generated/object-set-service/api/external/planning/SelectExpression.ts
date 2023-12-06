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

import type { ReferenceObjectSet } from "./ReferenceObjectSet.js";
export interface SelectExpression_singleObjectSet {
  type: "singleObjectSet";
  singleObjectSet: ReferenceObjectSet;
}
/**
 * The output of the Joined Object Set. For example, in case of Object Type Join Conditions, which side (`left` or `right`) is the selected side. Will always reference an Object Set in the Join Condition.
 */
export type SelectExpression = SelectExpression_singleObjectSet;
