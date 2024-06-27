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
 * This is a human readable id for the ObjectType. ObjectTypeIds can be made up of lower case letters,
 * numbers and dashes, but they should start with an alphabet. Once you create an ObjectType, the
 * ObjectTypeId is immutable. To change the ObjectTypeId you need to delete the ObjectType and re-create
 * it. In future we plan to make it mutable, hence you should use the ObjectTypeRid for cases where
 * you need to rely on on an immutable identifier.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
export type ObjectTypeId = string;
