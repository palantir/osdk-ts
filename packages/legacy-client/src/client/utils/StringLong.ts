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

declare const representsLong: unique symbol;

/** Represents a long property value converted to a string. We use a
 *  tagged type to distinguish from a regular string property value.
 *  This type is not used in `ValidLegacyBaseQueryDataTypes` or
 *  `ValidLegacyActionParameterTypes` because it is just for result
 *  long values, not long values that are passed into queries and actions. */
export type StringLong = string & { [representsLong]: true };
