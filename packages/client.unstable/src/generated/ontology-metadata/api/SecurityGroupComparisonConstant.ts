/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

export interface SecurityGroupComparisonConstant_string {
  type: "string";
  string: string;
}

export interface SecurityGroupComparisonConstant_boolean {
  type: "boolean";
  boolean: boolean;
}

export interface SecurityGroupComparisonConstant_strings {
  type: "strings";
  strings: Array<string>;
}
export type SecurityGroupComparisonConstant =
  | SecurityGroupComparisonConstant_string
  | SecurityGroupComparisonConstant_boolean
  | SecurityGroupComparisonConstant_strings;
