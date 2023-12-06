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
 * Similar to a unit, but for non-numeric properties. For example, two properties which both represent
 * severities might share the same set of possible values, say 'HIGH', 'MEDIUM' or 'LOW'. You could then
 * plot these together on the same axis on a chart with "Severity" as the label by specifying "Severity"
 * as the `valueTypeLabel` for both properties.
 *
 * This can be a maximum of 50 characters.
 */
export type ValueTypeLabel = string;
