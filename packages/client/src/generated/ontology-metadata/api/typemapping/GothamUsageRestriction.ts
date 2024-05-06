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

/**
 * UNRESTRICTED means the type is fully indexed, and changing aspects of it such as the parent type requires reindex.
 * FEDERATED_ONLY means the type does not contain any stored data in Gotham, and can be changed freely without reindex.
 * DEPRECATED_* indicates that the type was previously UNRESTRICTED/FEDERATED_ONLY, but is now DEPRECATED (hidden from most UIs in Gotham).
 */
export type GothamUsageRestriction =
  | "UNRESTRICTED"
  | "FEDERATED_ONLY"
  | "DEPRECATED_UNRESTRICTED"
  | "DEPRECATED_FEDERATED_ONLY";
