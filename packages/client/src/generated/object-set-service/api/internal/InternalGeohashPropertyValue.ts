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
 * An object property value that represents a comma separated latitude-longitude string. This differs from OSS's
 * public API PropertyValue in that it's a string instead of a blob with 2 doubles. Reasons for this decision are
 * explained in Issue #5885 in the objects-data-funnel repo.
 */
export type InternalGeohashPropertyValue = string;
