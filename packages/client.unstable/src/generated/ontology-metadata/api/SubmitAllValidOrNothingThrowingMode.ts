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
 * In this mode, all apply action requests need to be valid (also considered as the collection) in order for the
 * submission to go through. In other words, this mode respects the atomicity property, i.e. actions are applied
 * either completely, or none at all. It also mirrors the V1 endpoint behaviour.
 */
export interface SubmitAllValidOrNothingThrowingMode {
}
