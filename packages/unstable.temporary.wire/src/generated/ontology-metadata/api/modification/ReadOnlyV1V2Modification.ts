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
 * Entity can be stored in Phonograph and Highbury though the data is read-only. Edits are disabled.
 * This is a legacy state which should not be used anymore. Instead set the ObjectType or LinkType via a
 * `ObjectStorageV2Modification` which includes a `MigrationConfiguration` to start the migration process
 * from Phonograh to Object Storage V2 (Highbury).
 *
 * If a consumer attempts to set an object type or link type to `ReadOnlyV1V2`, OMS will internally
 * remap to an `ObjectStorageV2Modification` instead.
 */
export interface ReadOnlyV1V2Modification {
}
