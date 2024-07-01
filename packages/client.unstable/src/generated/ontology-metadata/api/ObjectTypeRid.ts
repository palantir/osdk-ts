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
 * An rid identifying the ObjectType. This rid is generated randomly and is safe for logging purposes. Access
 * to the ObjectType is also controlled by checking operations on this rid. The ObjectTypeRid for an
 * ObjectType is immutable. If an ObjectType is deleted and recreated with the same ObjectTypeId, the
 * ObjectTypeRid will be different.
 */
export type ObjectTypeRid = string;
