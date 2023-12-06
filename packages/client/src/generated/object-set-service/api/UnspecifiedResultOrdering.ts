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
 * Ordering which causes objects to be returned in an arbitrary order - no assumptions should be made about
 * the ordering of returned objects.
 * Consider using this whenever there's no need to have the results be returned in any specific ordering as it
 * can cause the request to complete faster.
 */
export interface UnspecifiedResultOrdering {
}
