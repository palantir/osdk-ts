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
 * This is a human readable id for the PropertyType. ids.PropertyTypeIds can be made up of lower or upper case
 * letters, numbers, dashes and underscores. ids.PropertyTypeId(s) are mutable at the moment. However, changing
 * it has the same effect as deleting and creating a new PropertyType. You should be careful when changing
 * it as there may be consumers (Hubble object views, plugins) that may be referencing it.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
export type PropertyTypeId = string;
