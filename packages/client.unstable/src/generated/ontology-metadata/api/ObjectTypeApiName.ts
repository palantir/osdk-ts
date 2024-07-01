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
 * A string indicating the API Name to use for the given ObjectType. This API name will be used to access the
 * ObjectType in programming languages.
 * It must adhere to the following rules:
 * - Match the unicode identifier syntax: https://unicode.org/reports/tr31/
 * - Contain at most 100 characters.
 */
export type ObjectTypeApiName = string;
