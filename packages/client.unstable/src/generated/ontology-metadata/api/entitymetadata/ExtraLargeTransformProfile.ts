/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
 * Funnel jobs for this object types will be run with the largest possible transform profile. Note that this
 * value is designed as a break-the-glass option for failing jobs and should be used carefully. Unnecessary
 * usage of this option could lead to expensive builds and hog resources from other builds/services.
 */
export interface ExtraLargeTransformProfile {
}
