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
 * The name of an ActionType that can be referenced in code. Valid API names have the following conditions:
 * * All lower case kebab-case
 * * Numbers are permitted, but not as the first character.
 * * No special characters are allowed.
 * * API names cannot be longer than 100 characters.
 * API names must be unique - requests that attempt to re-use an existing API name will be rejected.
 */
export type ActionTypeApiName = string;
