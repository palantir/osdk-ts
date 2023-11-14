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

import type {
  Bucketing,
  BucketKey,
  ExactValueBucketing,
} from "../Aggregations";
import { GroupKeyType } from "./GroupKeyType";

export interface StringGroupBy<TBucketKey extends BucketKey> {
  /** Divides objects into groups according to an exact value.
   * If omitted, the default maxGroupCount is 10,000.
   */
  exact(maxGroupCount?: number): Bucketing<TBucketKey, string>;
}

export const StringGroupBy = (
  propertyApiName: string,
): StringGroupBy<string> => ({
  exact: (maxGroupCount: number): ExactValueBucketing<string, string> => ({
    type: "Bucketing",
    kind: "ExactValueBucketing",
    keyDataType: GroupKeyType.STRING,
    propertyApiName,
    maxGroupCount,
  }),
});
